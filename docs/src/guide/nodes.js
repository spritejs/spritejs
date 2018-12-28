const {Scene, Sprite, Label, Effects, utils} = spritejs;
const parseColorString = utils.parseColorString

/* demo: progressbar */
;(function () {
  const scene = new Scene('#progressbar', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  class ProgressBar extends Sprite {
    get contentSize() {
      let [width, height] = this.attr('size');
      const {slotLength, slotWidth, type} = this.attr();

      if(type === 'bar') {
        if(width === '') {
          width = slotLength;
        }
        if(height === '') {
          height = slotWidth;
        }
      } else if(type === 'circle') {
        if(width === '') {
          width = Math.round(slotLength / Math.PI + slotWidth);
        }
        if(height === '') {
          height = Math.round(slotLength / Math.PI + slotWidth);
        }
      } else if(type === 'hourglass') {
        if(width === '') {
          width = slotWidth;
        }
        if(height === '') {
          height = slotLength;
        }
      }
      return [width, height];
    }

    render(t, context) {
      super.render(t, context);
      const progress = this.attr('progress'),
        slotColor = this.attr('slotColor'),
        progressColor = this.attr('progressColor'),
        type = this.attr('type');

      const p = progress / 100;

      const [width, height] = this.contentSize;

      if(type === 'bar') {
        context.beginPath();
        context.rect(0, 0, width, height);
        context.fillStyle = slotColor;
        context.fill();

        const progressRect = [0, 0, width * p, height];
        context.beginPath();
        context.rect(...progressRect);
        context.fillStyle = progressColor;
        context.fill();
      } else if(type === 'circle') {
        const slotWidth = this.attr('slotWidth');
        const r = width / 2;

        context.beginPath();
        context.arc(r, r, r - slotWidth / 2, 0, 2 * Math.PI);
        context.lineWidth = slotWidth;
        context.strokeStyle = slotColor;
        context.stroke();

        context.beginPath();
        context.arc(r, r, r - slotWidth / 2, -0.5 * Math.PI, (2 * p - 0.5) * Math.PI);
        context.lineWidth = slotWidth;
        context.strokeStyle = progressColor;
        context.stroke();
      } else if(type === 'hourglass') {
        context.beginPath();
        context.moveTo(width / 2, height / 2);
        context.lineTo(0, 0);
        context.lineTo(width, 0);
        context.closePath();
        context.fillStyle = slotColor;
        context.fill();

        context.beginPath();
        context.moveTo(width / 2, height / 2);
        context.lineTo(0, height);
        context.lineTo(width, height);
        context.closePath();
        context.fillStyle = progressColor;
        context.fill();

        const dx = (1 - p ** 2) * width / 2,
          dy = (1 - p ** 2) * height / 2;

        context.beginPath();
        context.moveTo(width / 2, height / 2);
        context.lineTo(width / 2 - dx, height / 2 - dy);
        context.lineTo(width / 2 + dx, height / 2 - dy);
        context.closePath();
        context.fillStyle = progressColor;
        context.fill();

        context.beginPath();
        context.moveTo(width / 2, height / 2);
        context.lineTo(width / 2 - dx, height / 2 + dy);
        context.lineTo(width / 2 + dx, height / 2 + dy);
        context.closePath();
        context.fillStyle = slotColor;
        context.fill();
      }
    }
  }

  ProgressBar.defineAttributes({
    init(attr) {
      attr.setDefault({
        progress: 0,
        slotColor: 'grey',
        progressColor: 'green',
        type: 'bar', // bar, circle, hourglass
        slotLength: 200,
        slotWidth: 25,
      });
    },
    progress(attr, val) {
      attr.clearCache();
      attr.set('progress', val);
    },
    slotColor(attr, val) {
      attr.clearCache();
      attr.set('slotColor', parseColorString(val));
    },
    progressColor(attr, val) {
      attr.clearCache();
      attr.set('progressColor', parseColorString(val));
    },
    type(attr, val) {
      attr.clearCache();
      attr.set('type', val);
    },
    slotLength(attr, val) {
      attr.clearCache();
      attr.set('slotLength', val);
    },
    slotWidth(attr, val) {
      attr.clearCache();
      attr.set('slotWidth', val);
    },
  });

  const p1 = new ProgressBar();
  p1.attr({
    anchor: [0.5, 0.5],
    progress: 45,
    pos: [250, 300],
    slotLength: 500,
    type: 'circle',
  });
  layer.append(p1);

  p1.animate([
    {progress: 0},
    {progress: 100},
  ], {
    duration: 10000,
    iterations: Infinity,
    easing: 'ease-in-out',
  });

  const label = new Label('0%');
  label.attr({
    anchor: [0.5, 0.5],
    pos: [250, 300],
    font: '36px Arial',
  });
  layer.append(label);

  p1.on('update', (evt) => {
    const progress = evt.target.attr('progress');
    label.text = `${progress.toFixed(0)}%`;
  });

  const p2 = new ProgressBar();
  p2.attr({
    anchor: [0.5, 0.5],
    progress: 0,
    pos: [770, 300],
    slotLength: 300,
    slotWidth: 45,
    progressColor: 'rgb(192,0,0)',
    borderRadius: 20,
  });
  layer.append(p2);

  Effects.progressColor = Effects.color;
  Effects.slotColor = Effects.color;

  p2.animate([
    {progress: 0, progressColor: 'rgb(192,0,0)'},
    {progress: 50, progressColor: 'rgb(192, 192, 0)'},
    {progress: 100, progressColor: 'rgb(0, 192, 0)'},
  ], {
    duration: 5000,
    iterations: Infinity,
  });

  const p3 = new ProgressBar();
  p3.attr({
    anchor: [0.5, 0.5],
    progress: 0.5,
    pos: [1150, 300],
    slotLength: 100,
    slotWidth: 50,
    progressColor: '#cc6',
    type: 'hourglass',
  });
  layer.append(p3);

  p3.attr({
    progress: 0.5,
  });
  p3.animate([
    {progress: 0},
    {progress: 100},
  ], {
    duration: 3000,
    iterations: Infinity,
  });
}());
