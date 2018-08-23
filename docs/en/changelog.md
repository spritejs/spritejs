# Change Log

## [2.7.9][2018-08-23]

### enhancement

- Add more compatible API for VirtualDOM.

## [2.7.8][2018-08-21]

### enhancement

- Add spritejs.esm.js to support rollup.

## [2.7.6][2018-08-15]

### enhancement

- Add eslint rule: complexity，refectoring part of codes.
- Output commonjs2 target instead of umd target for es6 package.

## [2.7.5][2018-08-15]

### bug fix

- Sprite element re-append to layer cannot trigger layer's update.

## [2.7.4][2018-08-09]

### enhancement

- Discard layer.isNodeVisible() for better performance.

## [2.7.3][2018-08-06]

### enhancement

- Add d.ts file.

## [2.7.2][2018-08-06]

### enhancement

- Update eslint config, use eslint-config-sprite.

## [2.7.1][2018-08-03]

### bug fix

- fix animation keyframe easing be copied to other keyframes

## [2.7.0][2018-08-03]

### bug fix

- fix group with border or padding pointCollision calculate error

### feature

- Add reflow policy for better rendering performance
- Group.applyLayout(name, customLayout)
- element.getLayerXY(dx, dy)

## [2.6.4][2018-08-02]

### bug fix

- fix flexlayout bug
- remove hard code of layout

## [2.6.3][2018-08-01]

### bug fix

- fix mouseleave event not trigger when event has been terminated.
- fix border attribute set to null cause error.

## [2.6.2][2018-07-31]

### bug fix

- fix base64 image's cross-origin bug in early webkit

## [2.6.1][2018-07-31]

### bug fix

- fix nested layout bug

## [2.6.0][2018-07-31]

### feature

- Add `bgimage` attribute for all elements

### bug fix

- Fixed label with both height and width fixed display lineBreak error.
- Fixed textAlign center or right in multi-line text display error.

## [2.5.2][2018-07-27]

### feature

- Add `letterSpacing` and `textIndent` attributes for Label.
- Add `scrollLeft` and `scrollTop` attributes for Group.
- Add `scrollTo(x, y)` and `scrollBy(x, y)` methods for Group.

## [2.5.1][2018-07-25]

### feature

- Add `boxSizing` attribute.

## [2.5.0][2018-07-24]

### feature

- Support multi touches, add touches,targetTouches and changedTouches attributes.
- Add `sprite.setMouseCapture()`.
- Add bounding attribute for Path element.
