/* globals spritevue */
const Vue = spritevue.Vue;

new Vue({
  el: '#app',
  data() {
    return {
      font: '48px Arial',
      fillColor: 'red',
    };
  },
  mounted() {
    this.$refs.scene.delegateEvent('keydown', document);
  },
  methods: {
    keydown(evt) {
      const key = evt.originalEvent.key;
      if(key === 'r') {
        this.fillColor = 'red';
      }
      if(key === 'g') {
        this.fillColor = 'green';
      }
      if(key === 'b') {
        this.fillColor = 'blue';
      }
    },
  },
});