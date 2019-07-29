/* globals spritevue */
const Vue = spritevue.Vue;

new Vue({
  el: '#app',
  data() {
    return {
      viewport: [600, 600],
      selected: 0,
      color: 'red',
      preload: false,
    };
  },
  mounted() {
    console.log(this.$refs);
  },
  methods: {
    toggle() {
      this.selected = (this.selected + 1) % 3;
      // this.color = 'orange'
    },
    load() {
      console.log('loaded');
      this.preload = true;
    },
    loading() {
      console.log('loading');
    },
  },
});