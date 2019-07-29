/* globals spritevue */
const Vue = spritevue.Vue;

Vue.component('traffic-light', {
  props: [
    'color',
    'radius',
    'x',
    'y',
  ],
  template: `<sprite ref="circle" anchor="0.5" :x="x" :y="y" :size="[2*radius, 2*radius]" :bgcolor="color" 
:borderRadius="radius"></sprite>`,
});

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

new Vue({
  el: '#app',
  data() {
    return {
      state: 'stop',
    };
  },
  mounted() {
    const loop = () => {
      wait(3500).then(() => {
        this.state = 'warn';
        return wait(2000);
      }).then(() => {
        this.state = 'pass';
        return wait(3500);
      }).then(() => {
        this.state = 'stop';
        loop();
      });
    };
    loop();
  },
});