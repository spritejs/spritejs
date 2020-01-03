const {Scene, ENV} = require('../../lib/spritejs');
const {polyfill} = require('../../lib/wx-miniprogram.js');
polyfill({ENV});

/* globals Component,wx */
Component({
  properties: {
    layers: {
      type: String,
      value: 'default',
      observer(newVal) {
        const salt = Math.random().toString(16).slice(2, 14);
        this.setData({
          _layers: newVal.split(',').map(v => `${v.trim()}:${salt}`),
        });
      },
    },
    pixelUnit: {
      type: String,
      value: 'rpx',
    },
  },
  methods: {
    updateEventOffset(callback) {
      this.getBoundingClientRect.exec(([rect]) => {
        if(rect) {
          callback(rect);
        }
      });
    },
    onTouchStart(event) {
      this.updateEventOffset((eventOffset) => {
        this.container.dispatchEvent(event, eventOffset);
      });
    },
    onTouchMove(event) {
      this.updateEventOffset((eventOffset) => {
        this.container.dispatchEvent(event, eventOffset);
      });
    },
    onTouchEnd(event) {
      this.updateEventOffset((eventOffset) => {
        this.container.dispatchEvent(event, eventOffset);
      });
    },
    onTap(event) {
      this.updateEventOffset((eventOffset) => {
        this.container.dispatchEvent(event, eventOffset);
      });
    },
    onLongPress(event) {
      this.updateEventOffset((eventOffset) => {
        this.container.dispatchEvent(event, eventOffset);
      });
    },
  },
  ready() {
    this.getBoundingClientRect = wx.createSelectorQuery().in(this)
      .select('.scene-layout').boundingClientRect();
    this.getBoundingClientRect.exec(([rect]) => {
      let displayRatio = 1;
      const pixelUnit = this.data.pixelUnit;
      if(pixelUnit === 'rpx') {
        const {windowWidth} = wx.getSystemInfoSync();
        displayRatio = windowWidth / 750;
      }
      const scene = new Scene({
        width: rect.width / displayRatio,
        height: rect.height / displayRatio,
        extra: this,
        displayRatio,
      });
      const args = {};
      this.data._layers.forEach((layer) => {
        args[layer.replace(/:[0-9a-f]+$/ig, '')] = scene.layer(layer, this);
      });
      this.scene = scene;
      this.container = scene.container;
      this.triggerEvent('SceneCreated', args);
    });
  },
});