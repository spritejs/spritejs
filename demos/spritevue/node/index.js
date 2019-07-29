/* globals spritevue */
const Vue = spritevue.Vue;
const spritejs = spritevue.spritejs;

const {BaseSprite, registerNodeType} = spritejs;

class Ring extends BaseSprite {
  pointCollision(evt) {
    if(!super.pointCollision(evt)) return false;
    const {offsetX, offsetY} = evt;
    if(offsetX == null && offsetY == null) return true;
    const innerRadius = this.attr('innerRadius'),
      outerRadius = this.attr('outerRadius');
    const bounding = this.boundingRect,
      [cx, cy] = [bounding[0] + bounding[2] / 2, bounding[1] + bounding[3] / 2];
    const distX = Math.abs(offsetX - cx),
      distY = Math.abs(offsetY - cy);
    const dist = Math.sqrt(distX ** 2 + distY ** 2);
    return dist > innerRadius && dist <= outerRadius;
  }

  get contentSize() {
    const outerRadius = this.attr('outerRadius');
    return [outerRadius * 2, outerRadius * 2];
  }

  render(t, context) {
    super.render(t, context);
    const innerRadius = this.attr('innerRadius'),
      outerRadius = this.attr('outerRadius'),
      color = this.attr('color');

    const lineWidth = outerRadius - innerRadius;

    if(lineWidth > 0) {
      context.beginPath();
      context.arc(outerRadius, outerRadius, outerRadius - lineWidth / 2, 0, 2 * Math.PI);
      context.strokeStyle = color;
      context.lineWidth = lineWidth;
      context.stroke();
    }

    return context;
  }
}

Ring.defineAttributes({
  init(attr) {
    attr.setDefault({
      innerRadius: 0,
      outerRadius: 50,
      color: 'rgba(255, 0, 0, 1)',
    });
  },
  innerRadius(attr, value) {
    attr.clearFlow();
    attr.set('innerRadius', parseFloat(value));
  },
  outerRadius(attr, value) {
    attr.clearFlow();
    attr.set('outerRadius', parseFloat(value));
  },
});

registerNodeType('ring', Ring);

new Vue({
  el: '#app',
  data() {
    return {
      font: '48px Arial',
      fillColor: '#50f',
      opacity: 0.5,
    };
  },
  methods: {
    enter() {
      this.opacity = 1.0;
    },
    leave() {
      this.opacity = 0.5;
    },
  },
});