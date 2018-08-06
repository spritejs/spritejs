const formEl = document.createElement('form');
formEl.id = 'moveToForm';
const inputEl = document.createElement('input');
inputEl.id = 'moveToText';
inputEl.style.width = '260px';
inputEl.placeholder = '输入要进入的地区名或ID';
formEl.appendChild(inputEl);
const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.id = 'moveToBtn';
submitBtn.innerHTML = '确认';
formEl.appendChild(submitBtn);
const paperEl = document.getElementById('paper');
paperEl.appendChild(formEl)

;(async function () {
  const paper = new spritejs.Scene('#paper', {
    viewport: ['auto', 'auto'],
    resolution: [900, 500],
    stickMode: 'width',
  });

  await window.helpers.loadScript('/js/demo/mapRelation.js');

  const worldLayer = paper.layer('world-layer', {
    handleEvent: false,
  });

  worldLayer.parent.container.style.backgroundColor = '#222830';

  function mapTransform(layer, matrix, update = true) {
    layer.adjust((context) => {
      context.restore();
      context.save();
      context.transform(...matrix);
    }, update);
  }

  const MapLoader = {
    cache: {},
    load(mapId) {
      const cached = this.cache[mapId];
      if(cached) {
        return Promise.resolve(cached);
      }

      const mapPath = `/res/mapData/${mapId}.json`;
      return new Promise((resolve, reject) => {
        d3.json(mapPath, (err, data) => {
          if(err) {
            reject(err);
            return;
          }
          data.id = String(mapId);
          this.cache[mapId] = data;
          resolve(data);
        });
      });
    },
  };

  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  const ChinaMapID = 1;

  class World {
    constructor(layer) {
      this.layer = layer;
      this.transitionMap = {};
    }

    async load(mapId) {
      const parentId = mapRelation[mapId].parentId;

      this.mapId = mapId;
      this.parentId = parentId;

      const map = await MapLoader.load(mapId);

      let baseScale = 1;

      const srcSize = mapRelation[mapId].size;

      if(mapId !== ChinaMapID) {
        // 相对于中国地图缩放
        const desSize = mapRelation[ChinaMapID].size;

        baseScale = Math.min(desSize[0] / srcSize[0], desSize[1] / srcSize[1]);
      }
      this.baseScale = baseScale;

      this.map = map;

      if(!map.cp) {
        map.cp = mapRelation[mapId].boxCP;
      }

      this.metaData = {
        [mapId]: {id: mapId, name: mapRelation[mapId].name, cp: map.cp, size: srcSize},
      };

      map.features.forEach((feature) => {
        let {id, name, cp} = feature.properties;
        if(!cp) {
          cp = mapRelation[id].boxCP;
        }
        this.metaData[id] = {id, name, cp, size: mapRelation[id].size};
      });

      await this.draw();
    }

    async draw() {
      const layer = this.layer;

      const [width, height] = layer.resolution;

      const projection = d3.geoMercator()
        .center(this.metaData[this.mapId].cp)
        .translate([width / 2, height / 2])
        .scale(this.baseScale * width / 2);

      this.projection = projection;

      const path = d3.geoPath().projection(projection);

      let parentId = this.parentId;
      const parents = new Set();

      while(parentId != null) {
        parents.add(parentId);
        parentId = mapRelation[parentId] && mapRelation[parentId].parentId;
      }

      let superMaps = await Promise.all([...parents].reverse().map(parentId => MapLoader.load(parentId)));
      superMaps = superMaps.reduce((features, map) => features.concat(map.features), []);

      const features = [...superMaps, ...this.map.features];

      // 把不在显示区附近的地图给过滤掉
      const filted = features.filter((feature) => {
        const [topLeft, rightBottom] = path.bounds(feature);
        const size = [rightBottom[0] - topLeft[0], rightBottom[1] - topLeft[1]];
        const mapCenter = [width / 2, height / 2];
        const regionCenter = path.centroid(feature);

        return Math.abs(regionCenter[0] - mapCenter[0]) <= (size[0] + width) / 2
        && Math.abs(regionCenter[1] - mapCenter[1]) <= (size[1] + height) / 2;
      });

      const mapId = this.mapId;

      layer.clear();

      d3.select(layer).selectAll('path')
        .data(filted)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('strokeColor', '#00c2ff')
        .select(function (data) {
          const parentMeta = mapRelation[data.properties.id];

          if(parentMeta && String(mapId) === String(parentMeta.parentId)) {
            // this.attr('lineWidth', 3)
            this.attr('zIndex', 10);
            this.attr('fillColor', 'transparent');
          } else {
            this.attr('strokeColor', 'rgba(0,0,0,0.2)');
            this.attr('fillColor', '#2f3644');
          }
          this.id = data.properties.id;
          this.name = data.properties.name;
          return this;
        })
        .exit();

      this.layer = layer;
    }

    getPath(destId) {
      const leave = [];
      const enter = [];
      let srcId = this.mapId;

      while(String(mapRelation[destId].parentId) !== '0') {
        enter.unshift(destId);
        destId = mapRelation[destId].parentId;
      }
      while(String(mapRelation[srcId].parentId) !== '0') {
        leave.push(srcId);
        srcId = mapRelation[srcId].parentId;
      }

      while(enter[0] === leave[leave.length - 1]) {
        enter.shift();
        leave.pop();
      }

      return {leave, enter};
    }

    async moveTo(id) {
      if(String(id) !== String(this.mapId)) {
        const {leave, enter} = this.getPath(id); // 获取跳转路径
        /* eslint-disable no-console */
        console.log(leave, enter);
        /* eslint-enable no-console */
        /* eslint-disable no-await-in-loop */
        /* eslint-disable no-restricted-syntax */
        for(const step of leave) {
          await this.leave(step);
          await sleep(500);
        }
        for(const step of enter) {
          await this.enter(step);
          await sleep(500);
        }
        /* eslint-enable no-restricted-syntax */
        /* eslint-enable no-await-in-loop */
      }
    }

    async enter(subId, duration = 1000) {
      const mapId = mapRelation[subId].parentId;
      if(!mapId) return;

      if(String(mapId) !== String(this.mapId)) {
        await this.load(mapId);
      }

      const layer = this.layer;

      d3.select(layer).selectAll('path')
        .attr('fillColor', '#2f3644')
        .attr('lineWidth', 1)
        .attr('strokeColor', 'rgba(0, 0, 0, 0.3)')
        .attr('zIndex', 0);

      d3.select(layer)
        .select(`#${subId}`)
        // .attr('fillColor', 'white')
        .attr('strokeColor', 'rgba(0, 0, 0, 0.3)')
        .attr('lineWidth', 1)
        .attr('zIndex', 100);

      let desMatrix = this.transitionMap[subId];

      if(!desMatrix) {
        const subMeta = this.metaData[subId];

        const pos = this.projection(subMeta.cp);

        const desSize = mapRelation[ChinaMapID].size;
        const scale = Math.min(
          desSize[0] / subMeta.size[0],
          desSize[1] / subMeta.size[1]
        ) / this.baseScale;

        const translate = this.projection.translate();

        desMatrix = [scale, 0, 0, scale,
          translate[0] - pos[0] * scale,
          translate[1] - pos[1] * scale];

        this.transitionMap[subId] = desMatrix;
      }

      const animator = new Animator(duration, (p) => {
        const matrix = [
          1 + (desMatrix[0] - 1) * p, 0, 0,
          1 + (desMatrix[3] - 1) * p,
          desMatrix[4] * p,
          desMatrix[5] * p,
        ];

        mapTransform(layer, matrix);
      });

      await animator.animate();
      await sleep(10);
      await this.load(subId);
    }

    async leave(subId, duration = 1000) {
      const parentId = this.parentId;
      if(!parentId) return;

      await this.load(parentId);

      const layer = this.layer;

      d3.select(layer).selectAll('path')
        .attr('strokeColor', 'rgba(0, 0, 0, 0.3)')
        .attr('lineWidth', 1)
        .attr('zIndex', 0);

      const matrix = this.transitionMap[subId];

      if(matrix) {
        const animator = new Animator(duration, (p) => {
          const m = [
            matrix[0] + (1 - matrix[0]) * p, 0, 0,
            matrix[3] + (1 - matrix[3]) * p,
            matrix[4] * (1 - p),
            matrix[5] * (1 - p),
          ];

          mapTransform(layer, m);
        });

        await animator.animate();
      }

      await sleep(10);
      await this.load(parentId);
    }
  }

  function findId(idOrName) {
    return new Promise((resolve) => {
      if(mapRelation[idOrName]) {
        resolve(idOrName);
      } else {
        Object.entries(mapRelation).forEach(([id, value]) => {
          if(value.name.startsWith(idOrName)) {
            resolve(id);
          }
        });
      }
    });
  }

  const moveToForm = document.getElementById('moveToForm'),
    moveToText = document.getElementById('moveToText');

  const world = new World(worldLayer);
  await world.load(1);
  window.world = world;

  moveToForm.onsubmit = function (evt) {
    const value = moveToText.value || 1;
    findId(value).then((id) => {
      world.moveTo(id);
    });
    evt.preventDefault();
  };
}());
