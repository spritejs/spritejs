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

new Vue({
  el: '#app',
  data() {
    return {
      state: true,
    };
  },
  mounted() {
    setInterval(() => { this.state = !this.state }, 3000);
  },
});