/* globals spritevue */
const Vue = spritevue.Vue;
function randomColor() {
  const r = Math.random() * 255 | 0,
    g = Math.random() * 192 | 0,
    b = Math.random() * 128 | 0;
  return `rgb(${r},${g},${b})`;
}

Vue.component('my-circle', {
  data() {
    return {
      state: 'stateA',
      states: {
        stateA: {
          bgcolor: randomColor,
        },
        stateB: {
          bgcolor: randomColor,
        },
      },
      actions: [
        {
          both: ['stateA', 'stateB'],
          duration: 600,
          easing: 'ease-in-out',
        },
      ],
    };
  },
  props: [
    'radius',
    'x',
    'y',
  ],
  methods: {
    click() {
      const state = this.state;
      this.state = state === 'stateA' ? 'stateB' : 'stateA';
    },
  },
  template: `<sprite ref="circle" anchor="0.5" :x="x" :y="y" :size="[2*radius, 2*radius]"
:states="states" :actions="actions" :state="state" :borderRadius="radius" @click="click"></sprite>`,
});

new Vue({
  el: '#app',
  data() {
    return {
      font: '48px Arial',
      fillColor: '#f50',
    };
  },
});