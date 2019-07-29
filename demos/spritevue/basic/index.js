/* globals spritevue */
const Vue = spritevue.Vue;

new Vue({
  el: '#app',
  data() {
    return {
      messages: ['Hello World', 'Hello Vue', 'Hello Sprite'],
      idx: 0,
      font: '48px Arial',
    };
  },
  methods: {
    clicked() {
      this.idx = (this.idx + 1) % 3;
    },
  },
});