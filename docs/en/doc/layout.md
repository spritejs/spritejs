## Flex Layout

Thanks to [@Winter](https://github.com/wintercn), SpriteJS is now able to use the Flex layout.

You can set the attribute `display: flex` on the Group to enable the flex layout.

<div id="flex-basic" class="sprite-container"></div>

<!-- demo: flex-basic -->

## Container Attributes

The following five attributes are set on the container:

- flexDirection
- flexWrap
- justifyContent
- alignItems
- alignContent

#### flexDirection

Specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

![flexDirection](https://p5.ssl.qhimg.com/t0101ed5ac3a8d033a4.png)

The following values are accepted:

- row
  - The flex container's main-axis is defined to be the same as the text direction. The main-start and main-end points are the same as the content direction.
- row-reverse
  - Behaves the same as row but the main-start and main-end points are permuted.
- column
  - The flex container's main-axis is the same as the block-axis. The main-start and main-end points are the same as the before and after points of the writing-mode.
- column-reverse
  - Behaves the same as column but the main-start and main-end are permuted.

<div id="flex-direction" class="sprite-container"></div>

<!-- demo: flex-direction -->

#### flexWrap

Specifies whether flex items are forced into a single line or can be wrapped onto multiple lines. If wrapping is allowed, this property also enables you to control the direction in which lines are stacked.

![flexWrap](https://p0.ssl.qhimg.com/t011fef6ec7f044f9ae.png)

The following values are accepted:

- nowrap
  - The flex items are laid out in a single line which may cause the flex container to overflow. The cross-start is either equivalent to start or before depending flex-direction value. This is the default value.
- wrap
  - The flex items break into multiple lines. The cross-start is either equivalent to start or before depending flex-direction value and the cross-end is the opposite of the specified cross-start.
- wrap-reverse
  - Behaves the same as wrap but cross-start and cross-end are permuted.


<div id="flex-wrap" class="sprite-container"></div>

<!-- demo: flex-wrap -->

#### justifyContent

Defines how the container distributes space between and around content items along the main-axis of their container.

The following values are accepted:

- flex-start
  - The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-start side.
  - This only applies to flex layout items. For items that are not children of a flex container, this value is treated like start.
- flex-end
  - The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-end side.
  - This only applies to flex layout items. For items that are not children of a flex container, this value is treated like end.
- center
  - The items are packed flush to each other toward the center of the of the alignment container along the main axis.
- space-between
  - The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.
- space-around
  - The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.

<div id="flex-justify" class="sprite-container"></div>

<!-- demo: flex-justify -->

#### alignItems

Defines how the container distributes space between and around flex items along the cross-axis of their container. This means it works like justify-content but in the perpendicular direction.

The following values are accepted:

- flex-start
  - The cross-start margin edges of the flex items are flushed with the cross-start edge of the line.
- flex-end
  - The cross-end margin edges of the flex items are flushed with the cross-end edge of the line.
- center
  - The flex items' margin boxes are centered within the line on the cross-axis. If the cross-size of an item is larger than the flex container, it will overflow equally in both directions.
- stretch
  - Flex items are stretched such that the cross-size of the item's margin box is the same as the line while respecting width and height constraints.

<div id="flex-alignItems" class="sprite-container"></div>

<!-- demo: flex-alignItems -->

#### alignContent

Defines how the container distributes space between and around content items along the cross-axis of their container, which is serving as a flexbox container.

The following values are accepted:

- flex-start
  - The items are packed flush to each other toward the edge of the alignment container depending on the flex container's cross-start side.
  - This only applies to flex layout items. For items that are not children of a flex container, this value is treated like start.
- flex-end
  - The items are packed flush to each other toward the edge of the alignment container depending on the flex container's cross-end side.
  - This only applies to flex layout items. For items that are not children of a flex container, this value is treated like end.
- center
  - The items are packed flush to each other toward the center of the of the alignment container along the cross axis.
- space-between
  - The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.
- space-around
  - The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.
- stretch
  - If the combined size of the items along the cross axis is less than the size of the alignment container, any auto-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container along the cross axis.

<div id="flex-alignContent" class="sprite-container"></div>

<!-- demo: flex-alignContent -->

## Item Attributes

The following 3 attributes are set on the element:

- order
- flex
- align-self

The **order** attribute specifies the order used to lay out a flex or grid item in its flex or grid container. Items within the same container are laid out in ascending order according to their order values. Elements with the same order value are laid out in the order in which they appear in the source code.

<div id="flex-order" class="sprite-container"></div>

<!-- demo: flex-order -->

The **flex** attribute specifies how a flex item will grow or shrink so as to fit the space available in its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis.

<div id="flex-flex" class="sprite-container"></div>

<!-- demo: flex-flex -->


<script src="/js/guide/flexlayout.js"></src>
