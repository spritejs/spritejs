import {Animator, Effects} from 'sprite-animator';
import rgba from 'color-rgba';
import {requestAnimationFrame, cancelAnimationFrame} from '../utils/animation-frame';

Effects.default = function (from, to, p, s, e) {
  if(typeof from === 'string' && from.indexOf('rgba') === 0) {
    from = rgba(from);
  }

  if(typeof to === 'string' && to.indexOf('rgba') === 0) {
    to = rgba(to);
  }

  if(Array.isArray(from) && Array.isArray(to)) {
    return from.map((v, i) => {
      return v + (p - s) / (e - s) * (to[i] - v);
    });
  }

  if(typeof from === 'number' && typeof to === 'number') {
    return from + (p - s) / (e - s) * (to - from);
  }

  if(p - s > e - p) {
    return to;
  }
  return from;
};

export default class Animation extends Animator {
  constructor(sprite, frames, timing) {
    const initAttrs = sprite.attr();
    frames = frames.map(({...frame}) => {
      const ret = {};
      const node = sprite.cloneNode();
      node.attr(frame);
      Object.keys(frame).forEach((key) => {
        ret[key] = node.attributes[key];
      });
      return ret;
    });
    super(initAttrs, frames, timing);
    this.target = sprite;
    this.setter = function (frame, target) { target.attr(frame) };
  }

  get playState() {
    if(!this.target.parent) {
      return 'idle';
    }
    return super.playState;
  }

  get finished() {
    // set last frame when finished
    // because while the web page is not focused
    // requestAnimationFrame will not trigger while deferTime of
    // the animator is still running
    return super.finished.then(() => {
      const that = this;
      return new Promise((resolve) => {
        function update() {
          that.setter(that.frame, that.target);
          const playState = that.playState;
          if(playState === 'finished' || playState === 'idle') {
            cancelAnimationFrame(that.requestId);
            resolve();
          } else {
            requestAnimationFrame(update);
          }
        }
        update();
      });
    });
  }

  finish() { // finish should change attrs synchronously
    super.finish();
    cancelAnimationFrame(this.requestId);
    this.setter(this.frame, this.target);
  }

  play() {
    if(!this.target.parent || this.playState === 'running') {
      return;
    }

    super.play();

    this.setter(this.frame, this.target);

    const that = this;
    this.ready.then(() => {
      that.setter(that.frame, that.target);
      that.requestId = requestAnimationFrame(function update() {
        const target = that.target;
        if(typeof document !== 'undefined'
          && document.documentElement
          && document.documentElement.contains
          && target.layer
          && target.layer.canvas
          && !document.documentElement.contains(target.layer.canvas)) {
          // if dom element has been removed stop animation.
          // it usually occurs in single page applications.
          that.cancel();
          return;
        }
        const playState = that.playState;
        that.setter(that.frame, that.target);
        if(playState === 'idle') return;
        if(playState === 'running') {
          that.requestId = requestAnimationFrame(update);
        } else if(playState === 'paused' || playState === 'pending' && that.timeline.currentTime < 0) {
          // playbackRate < 0 will cause playState reset to pending...
          that.ready.then(() => {
            that.setter(that.frame, that.target);
            that.requestId = requestAnimationFrame(update);
          });
        }
      });
    });
  }

  cancel(preserveState = false) {
    cancelAnimationFrame(this.requestId);
    if(preserveState) {
      this.setter(this.frame, this.target);
      super.cancel();
    } else {
      super.cancel();
      this.setter(this.frame, this.target);
    }
  }
}
