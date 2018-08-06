(async function () {
  document.querySelector('main').style.display = '';
  const loadingHint = document.createElement('div');
  loadingHint.id = 'loadingHint';
  loadingHint.style.color = 'white';
  loadingHint.style.zIndex = '999999';
  loadingHint.innerHTML = 'loading';
  loadingHint.style.position = 'fixed';
  loadingHint.style.top = '50%';
  loadingHint.style.left = '50%';
  loadingHint.style.transform = 'translate(-50%, -50%)';
  document.body.appendChild(loadingHint);

  const _onScroll = Symbol('onScroll');
  const {Scene, Sprite, Group, Label, Path} = spritejs;
  const scene = new Scene('#coverpage', {
    // viewport: ['auto', 'auto'],
    resolution: [3840, 2160],
    stickMode: 'width',
  });
  const coverpage = document.querySelector('#coverpage');

  const fglayer = scene.layer('fglayer', {
    renderMode: 'repaintAll',
  });

  let maxScroll = null;
  // 适配移动端
  function fixMobile() {
    scene.updateViewport();
    const [width] = scene.viewport;
    if(width <= 480) {
      const {width: w, height: h} = fglayer.canvas.style;
      fglayer.canvas.style.width = `${parseInt(w, 10) * 2}px`;
      fglayer.canvas.style.height = `${parseInt(h, 10) * 2}px`;
    }
    if(maxScroll != null) {
      maxScroll = calculateScroll();
    }
  }
  fixMobile();

  const _fixMobile = _.debounce(fixMobile, 300);

  window.addEventListener('resize', _fixMobile);

  const animations = [];

  // 预加载资源
  await scene.preload([
    'https://p5.ssl.qhimg.com/t01f47a319aebf27174.png',
    'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json',
  ]);

  document.body.removeChild(loadingHint);

  function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  async function showLogoText(text, pos, posList, delay = 0) {
    const els = [];
    for(let i = 0; i < text.length; i++) {
      const letter = text.charAt(i),
        x = posList[i];

      const letterEl = new Sprite(`letter-${letter}.png`);
      letterEl.attr({
        pos: [pos[0] + x, pos[1]],
        translate: [250, 0],
        opacity: 0,
      });
      if(letter === 'j') {
        letterEl.attr({zIndex: 20});
      }
      els.push(letterEl);
      /* eslint-disable no-await-in-loop */
      await wait(delay);
      /* eslint-enable no-await-in-loop */
      fglayer.append(letterEl);
      letterEl.animate([{
        opacity: 1,
        translate: [0, 0],
      }], {
        duration: 500,
        fill: 'forwards',
      });
    }
    return els;
  }

  async function showIntroText(text) {
    const introText = new Group();
    introText.attr({
      anchor: 0.5,
      pos: [2160, 918],
      size: [720, 80],
      opacity: 0,
      // bgcolor: 'rgba(0, 0, 0, 0.3)',
    });
    fglayer.append(introText)

    ;[...text].forEach((char, i) => {
      const label = new Label(char);
      label.attr({
        pos: [i * 80, 0],
        font: '36px "pfang"',
        fillColor: '#fff',
      });
      introText.append(label);
    });

    const anim = introText.animate([
      {x: 2160, opacity: 0},
      {x: 2000, opacity: 0.8},
    ], {
      duration: 800,
      fill: 'forwards',
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    });

    await anim.finished;
    return introText;
  }

  async function showHuanHuan() {
    const huanhuanGroup = new Group();
    huanhuanGroup.attr({
      anchor: 0.5,
      pos: [980, 744],
      rotate: 30,
      size: [200, 320],
      opacity: 0,
      zIndex: 100,
      // bgcolor: 'red',
    });
    fglayer.append(huanhuanGroup);

    const huanhuan = new Sprite('huanhuan.png');
    huanhuan.attr({
      pos: [0, 0],
    });
    huanhuanGroup.append(huanhuan);

    const huanhuanFire = new Path();
    huanhuanFire.attr({
      path: {d: 'M0,0Q-1,12,5,36Q30,22,30,0z', transform: {scale: 2}},
      anchor: [0, 0],
      fillColor: '#FEE139',
      pos: [60, 230],
      lineWidth: 6,
      strokeColor: '#FB6F4A',
      zIndex: -1,
      rotate: -5,
    });
    huanhuanGroup.append(huanhuanFire);

    // random burn fire
    let fx = 5,
      fy = 6;

    fglayer.timeline.setInterval(() => {
      const deltaX = Math.floor(Math.random() * 5) - 2, // -1 0 1,
        deltaY = Math.floor(Math.random() * 5) - 2;

      fx += deltaX;
      if(fx < 0) fx = 0;
      if(fx > 20) fx = 20;

      fx += deltaY;
      if(fy < 0) fy = 0;
      if(fy > 25) fy = 25;

      const q1 = [-1, 12, -5 + fx, 30 + fy];
      const q2 = [30, 22, 30, 0];
      const d = `M0,0Q${q1}Q${q2}z`;
      huanhuanFire.attr({
        path: {d, transform: {scale: 2}},
      });
    }, 100);

    const anim2 = huanhuanGroup.animate([
      {pos: [980, 744], opacity: 0},
      {pos: [1080, 450], opacity: 1},
    ], {
      duration: 500,
      fill: 'forwards',
    });

    huanhuanGroup.on('mouseenter', (evt) => {
      huanhuan.textures = 'huanhuan2.png';
    });

    huanhuanGroup.on('mouseleave', (evt) => {
      huanhuan.textures = 'huanhuan.png';
    });

    await anim2.finished;

    const anim = huanhuanGroup.animate([
      {y: 450},
      {y: 460},
      {y: 450},
      {y: 440},
      {y: 450},
    ], {
      duration: 2000,
      iterations: Infinity,
    });

    animations.push(anim);

    return huanhuanGroup;
  }

  async function showGuanGuan() {
    const guanguan = new Sprite('guanguan3.png');
    guanguan.attr({
      anchor: 0.5,
      scale: [-1, 1],
      pos: [3000, 1140],
    });
    fglayer.append(guanguan);

    const anim3 = guanguan.animate([
      {x: 3000},
      {x: 2700},
    ], {
      duration: 400,
      fill: 'forwards',
    });
    await anim3.finished;
    guanguan.textures = 'guanguan1.png';


    const anim31 = guanguan.animate([
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
    ], {
      duration: 300,
      iterations: 2,
      fill: 'backwards',
    });
    await anim31.finished;
    await wait(300);
    guanguan.textures = 'guanguan3.png';

    const anim4 = guanguan.animate([
      {x: 2700},
      {x: 2380},
    ], {
      duration: 400,
      fill: 'forwards',
    });

    await anim4.finished;
    guanguan.textures = 'guanguan1.png';
    await wait(300);

    guanguan.animate([
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
    ], {
      duration: 200,
      fill: 'backwards',
    });
    guanguan.attr({
      zIndex: 100,
      // rotate: 20,
    });

    guanguan.on('mouseenter', (evt) => {
      if(guanguan.textures[0].id !== 'guanguan3.png') {
        guanguan.textures = ['guanguan2.png'];
        guanguan.transition(0.2).attr({rotate: 30});
      }
    });
    guanguan.on('mouseleave', (evt) => {
      if(guanguan.textures[0].id !== 'guanguan3.png') {
        guanguan.textures = ['guanguan1.png'];
        guanguan.transition(0.2).attr({rotate: 0});
      }
    });

    return guanguan;
  }

  function registerButton(button, link) {
    button.on('mouseenter', (evt) => {
      document.documentElement.style.cursor = 'pointer';
    });
    button.on('mouseleave', (evt) => {
      document.documentElement.style.cursor = 'default';
    });
    const btnPressDown = (evt) => {
      button.attr({
        bgcolor: '#1e9d5a',
        fillColor: '#fff',
      });
    };
    button.on('mouseenter', btnPressDown);
    button.on('touchstart', btnPressDown);

    const btnPressUp = (evt) => {
      button.attr({
        bgcolor: '',
        fillColor: '#11773d',
      });
    };

    button.on('mouseleave', btnPressUp);
    button.on('touchend', btnPressUp);

    if(typeof link === 'string') {
      button.on('click', (evt) => {
        scene.removeLayer(fglayer);
        coverpage.remove();
        window.removeEventListener('resize', _fixMobile);
        if(scene[_onScroll]) {
          window.removeEventListener('scroll', scene[_onScroll]);
        }
        document.documentElement.style.cursor = 'default';
        window.location.href = link;
      });
    } else if(typeof link === 'function') {
      button.on('click', link);
    }
  }

  function showButtons() {
    const githubBtn = new Label('GitHub');
    githubBtn.attr({
      anchor: [0.5, 0],
      size: [350, 100],
      border: [4, '#208b50'],
      pos: [2620, 1500],
      zIndex: 99999,
      borderRadius: 50,
      textAlign: 'center',
      font: '44px Arail',
      lineHeight: 100,
      fillColor: '#11773d',
      opacity: 0,
    });
    fglayer.append(githubBtn);
    registerButton(githubBtn, 'https://github.com/spritejs/spritejs');

    githubBtn.animate([
      {opacity: 0},
      {opacity: 1},
    ], {
      duration: 500,
      fill: 'forwards',
      delay: 1500,
    });

    const giteeBtn = githubBtn.cloneNode();
    giteeBtn.attr({
      text: 'Gitee',
      pos: [2170, 1500],
    });
    fglayer.append(giteeBtn);
    registerButton(giteeBtn, 'https://gitee.com/qihoo360/spriteJS');

    giteeBtn.animate([
      {opacity: 0},
      {opacity: 1},
    ], {
      duration: 500,
      fill: 'forwards',
      delay: 1000,
    });

    const getStartBtn = githubBtn.cloneNode();
    getStartBtn.attr({
      text: 'Get Started',
      pos: [1720, 1500],
    });
    fglayer.append(getStartBtn);
    registerButton(getStartBtn, `${window.location}zh-cn/index`);

    getStartBtn.animate([
      {opacity: 0},
      {opacity: 1},
    ], {
      duration: 500,
      fill: 'forwards',
      delay: 500,
    });

    const demoBtn = githubBtn.cloneNode();
    demoBtn.attr({
      text: 'Demo',
      pos: [1270, 1500],
    });
    fglayer.append(demoBtn);

    registerButton(demoBtn, '/demo');

    demoBtn.animate([
      {opacity: 0},
      {opacity: 1},
    ], {
      duration: 500,
      fill: 'forwards',
    });
    return [githubBtn, giteeBtn, getStartBtn, demoBtn];
  }

  async function showMore() {
    //  小鼠标
    const more = new Sprite();
    more.attr({
      textures: 'more.png',
      anchor: 0.5,
      pos: [1920, 1800],
      opacity: 0,
    });
    fglayer.append(more);

    await more.transition(0.5).attr({opacity: 1});

    registerButton(more, () => {});

    document.querySelector('main').style.display = 'block';

    // 呼吸的小圆点
    const blinkSpots = new Group();
    const blinkSpot1 = new Sprite();
    const blinkSpotGap = 30;
    const blinkAnimKeyframes = [{
      opacity: 1, offset: 0.25,
    }, {
      opacity: 0.2, offset: 0.5,
    }];

    blinkSpot1.attr({
      bgcolor: 'white',
      size: [10, 10],
      anchor: 0.5,
      pos: [1918, 1870],
      borderRadius: 5,
      opacity: 0.2,
    });
    blinkSpot1.animate(blinkAnimKeyframes, {
      duration: 2000,
      iterations: Infinity,
      easing: 'ease-in-out',
    });
    blinkSpots.append(blinkSpot1);

    const blinkSpot2 = blinkSpot1.cloneNode();
    blinkSpot2.attr({
      y: y => y + blinkSpotGap,
    });
    blinkSpot2.animate(blinkAnimKeyframes, {
      duration: 2000,
      iterations: Infinity,
      delay: 330,
      easing: 'ease-in-out',
    });
    blinkSpots.append(blinkSpot2);

    const blinkSpot3 = blinkSpot2.cloneNode();
    blinkSpot3.attr({
      y: y => y + blinkSpotGap,
    });
    blinkSpot3.animate(blinkAnimKeyframes, {
      duration: 2000,
      iterations: Infinity,
      delay: 660,
      easing: 'ease-in-out',
    });
    blinkSpots.append(blinkSpot3);

    fglayer.append(blinkSpots);

    return [more, blinkSpots];
  }

  function hideSprites(sprites) {
    sprites.forEach((sprite) => {
      sprite.attr({opacity: 0});
    });
  }
  function showSprites(sprites) {
    sprites.forEach((sprite) => {
      sprite.attr({opacity: 1});
    });
  }

  function showFeatures() {
    const group = new Group();
    group.attr({
      size: [2160, 930],
      pos: [850, 440],
      clip: {
        d: 'M0,0L0,0L0,0L0,0z',
      },
      zIndex: 99,
    });
    fglayer.append(group);
    const features = new Sprite();
    features.attr({
      size: [2160, 930],
      pos: [0, 0],
      bgcolor: {
        vector: [0, 0, 2160, 0],
        colors: [
          {offset: 0, color: '#1EAC61'},
          {offset: 0.4, color: '#1EAC61'},
          {offset: 0.4, color: '#FFF'},
          {offset: 1, color: '#FFF'},
        ],
      },
    });
    group.append(features);

    const label = new Label('特点');
    label.attr({
      anchor: [1, 0],
      pos: [800, 150],
      color: '#fff',
      font: '128px "pfang"',
    });
    group.append(label);

    const label2 = new Label('FEATURES');
    label2.attr({
      anchor: [1, 0],
      pos: [800, 320],
      color: '#fff',
      font: '80px "pfang"',
    });
    group.append(label2);

    const label3 = new Label(`    使用ES6+，面向对象设计和开发
    支持元素嵌套和事件分发
    使用缓存提升性能
    支持 Web Animation API
    跨平台渲染，支持服务端和小程序
    `);
    label3.attr({
      pos: [1000, 150],
      color: '#000',
      font: '50px "pfang"',
      lineHeight: 120,
    });
    group.append(label3);

    return group;
  }

  let requestId = null;
  function autoScroll(scrollBy, time = 1000) {
    if(requestId !== null) return;
    const startTime = Date.now();
    requestId = requestAnimationFrame(function step() {
      const p = (Date.now() - startTime) / time,
        scrollY = Math.min(1, p) * scrollBy;
      window.scrollTo(0, scrollY);
      if(p < 1) {
        requestId = requestAnimationFrame(step);
      } else {
        requestId = null;
      }
    });
  }

  await showLogoText('spritejs', [1108, 482], [0, 256, 500, 760, 848, 1078, 1286, 1488], 200);
  const text = await showIntroText('跨平台绘图对象模型');
  const buttons = showButtons();
  const huanhuan = await showHuanHuan();
  const guanguan = await showGuanGuan();
  const more = await showMore();

  more.c1 = function () {
    this.attr('bgcolor', 'green');
  };
  more.c2 = function () {
    this.attr('bgcolor', 'red');
  };
  const featureGroup = showFeatures();

  let scrolled = false;

  const features = document.getElementById('features');
  function calculateScroll() {
    const r = parseInt(fglayer.canvas.style.width, 10) / scene.resolution[0];
    const a = (coverpage.clientHeight - fglayer.canvas.clientHeight) / 2;
    const b = (440 + 465) * r;
    const c = features.clientHeight / 2;
    return features.getBoundingClientRect().y - a - b + c + window.pageYOffset;
  }
  maxScroll = calculateScroll();

  more[0].on('mouseenter', () => {
    autoScroll(maxScroll, 1000);
  });

  scene[_onScroll] = _.throttle((evt) => {
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    if(yOffset < 0) return;

    if(!scrolled && yOffset) {
      scrolled = true;
      hideSprites([text, ...buttons, ...more]);
      guanguan.attr({
        textures: ['guanguan3.png'],
      });
    } else if(scrolled && yOffset === 0) {
      scrolled = false;
      showSprites([text, ...buttons, ...more]);
      guanguan.attr({
        textures: ['guanguan1.png'],
      });
    }

    if(yOffset >= maxScroll && coverpage.style.position !== 'absolute') {
      coverpage.style.position = 'absolute';
      coverpage.style.top = `${maxScroll}px`;
      guanguan.attr({
        textures: ['guanguan1.png'],
      });
    } else if(yOffset < maxScroll && coverpage.style.position === 'absolute') {
      coverpage.style.position = 'fixed';
      coverpage.style.top = '0';
      guanguan.attr({
        textures: ['guanguan3.png'],
      });
    }

    if(yOffset > coverpage.clientHeight + 0.5 * features.clientHeight) {
      if(fglayer.timeline.playbackRate > 0) {
        fglayer.timeline.playbackRate = 0;
        animations.forEach((anim) => {
          anim.pause();
        });
      }
    } else if(fglayer.timeline.playbackRate === 0) {
      fglayer.timeline.playbackRate = 1;
      animations.forEach((anim) => {
        anim.play();
      });
    }

    const p = Math.min(maxScroll, yOffset) / maxScroll;
    const x1 = 2380 - 1400 * p * p,
      x2 = 1080 + 1900 * p * p;

    if(p < 0 || p > 1) {
      return;
    }

    // p = 0.588
    // x1 = 1896
    // x2 = 1736
    // x2e = 1244
    // x1e = 916

    if(x2 - x1 > 0 && x2 - x1 !== featureGroup._clipDX) {
      featureGroup._clipDX = x2 - x1;
      const l = 916 - (1896 - x1),
        r = 916 + x2 - 1736;
      const d = `M${l},0L${r},0L${r},${930}L${l},930z`;
      featureGroup.attr({
        clip: {d},
      });
    } else if(x2 - x1 <= 0) {
      featureGroup.attr({
        clip: {d: 'M0,0L0,0L0,0L0,0z'},
      });
    }
    guanguan.attr({
      x: x1,
    });
    huanhuan.attr({
      x: x2,
    });
  }, 16);
  window.addEventListener('scroll', scene[_onScroll]);
}());
