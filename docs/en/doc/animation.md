SpriteJS supports the standard [Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API), so if you're familiar with css3 animation or web animation api, it's easy to get started with SpriteJS animation.

## sprite.animate

`sprite.animate(keyframes, timing)` - A sprites' animation is a standard **keyframe animation**, we can set multiple keyframe attributes and then start the animation.

<p data-height="578" data-theme-id="light" data-slug-hash="jKXPOX" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/jKXPOX/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## keyframes

The first argument to animate is the keyframes, which is an array that defines the attributes on each keyframe. It has an optional offset attribute, from 0 to 1, that defines the position of the keyframe in the animation. If the keyframe array only has one frame, then the default offset value is 1(indicates the last frame).

<p data-height="528" data-theme-id="light" data-slug-hash="PaXqze" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/PaXqze/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## timing

The second parameter of animate is a timing object. A timeing object has the following properties:

| Property | Type | Init Value | Description |
| --- | --- | --- | --- |
| delay | Number | 0 | How long does the animation start to run, in milliseconds. |
| endDelay | Number | 0 | How long after the animation finishes running, in milliseconds. |
| fill | Enum: 'none', 'forwards', 'backwards', 'both' | 'none' | If this property is 'none', the animation will not apply any attributes to the target when it's not running. If this property is 'forwards', The target will retain the computed values set by the last keyframe encountered during execution. If this property is 'backwards', the animation will apply the values defined in the first relevant keyframe as soon as it is applied to the target, and retain this during the animation-delay period. The first relevant keyframe depends on the value of direction. If this property is 'both', the animation will follow the rules for both forwards and backwards, thus extending the animation properties in both directions. |
| iterations | Number | 1 | The number of times the animation is played. Can be a decimal. |
| direction | 枚举: 'default', 'reverse', 'alternate' 'alternate-reverse'| 'default' | The direction of the animation playback, the default is forward playback, if the property is set to 'reverse', the animation will play backwards. If it is set to alternate, it will play alternately when iterations > 1 |
| duration | Number | 0 | Specifies the length of time that an animation should take to complete one cycle. |
| easing | String | 'linear' | The easing function of the animation can be `linear, ease, ease-in, ease-out, ease-in-out, step-start, step-end` or cubic-bezier functions such as `cubic-bezier(0.42, 0, 0.58) , 1)` |

## Animation Object

The `sprite.animate(keyframes, timing)` method returns an animation object with a set of properties and methods.

### baseTimeline

Get or set the baseTimeline. Since SpriteJS animation is based on timeline, each animation object has a baseTimeline, which is the layer's default timeline. When the animation is created, the base timeline is forked to create an animation timeline.

### cancel(preserveState = false)

Cancel the animation.If preserveState is true, the animation will apply the values to the element before it is canceled.

### finish()

Skip the unplayed animation parts and go directly to the end of the animation.

### finished

A promise, if the animation ends, the promisy object is resolved.

With the finished proprety, we can easily have multiple independent animations executed in sequence.

<p data-height="383" data-theme-id="light" data-slug-hash="KebpYp" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/KebpYp/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### frame

Readonly. Get current attributes frame.

### pause()

Pause the playback of the animation.

### play()

When you start playing the animation, the animation will play automatically when you call the `sprite.animate` method. You don't need to call play() manually, but if the animation is paused during execution, call play() to continue playing the animation.

### playbackRate

Gets or sets the speed of the animation, which can be set to a negative number. If set to a negative number, the animation will play back. If playbackRate is set to 0, the animation is paused.

### playState

Readonly. Get the current state of the animation, there are four possible values:

- idle: The current time of the animation is unresolved and there are no pending tasks.
- pending: Whether the animation is currently waiting for an asynchronous operation such as initiating playback or pausing a running animation.
- running: The animation is running.
- finished: The animation has reached one of its boundaries and the Animation.currentTime property is not updating.

### progress

Readonly. A value between 0 and 1, indicating the progress of the current animation. If the iterations of timing is greater than 1, then the progress periodically changes between 0 and 1.

### ready

A promise. It resolved when the playState changed from 'pending' to 'running'.

### timing

Readonly. Get timing object.

### timeline

Get or set the timeline object, you can manually control the animation to jump to any time by changing the currentTime of the timeline.

<p data-height="422" data-theme-id="light" data-slug-hash="gKZaVP" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/gKZaVP/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## layer.timeline

We can control the animation of all sprite elements on the current layer through layer.timeline.

See [demo](http://spritejs.org/demo/#animations).
