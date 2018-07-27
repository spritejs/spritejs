SpriteJS supports grouping elements by creating a group container.

Groups can be nested.

## append()

`append(...sprites)` Add one or more child elements to the group.

## appendChild()

`appendChild(sprite)` Add a child to the group.

## clear()

Remove all child elements from the Group.

## children

The child elements.

## insertBefore()

`insertBefore(newChild, refChild)` Insert an element in front of the target element.

## isVirtual

Group objects have virtual mode and non-virtual mode, which is automatically set by SpriteJS. If the current group is in virtual mode, SpriteJS does not calculate the contentSize of the Group nor renders the group but only renders the children of the group.

## removeChild()

`removeChild(sprite)` Remove a child element from the Group.

## scrollBy()

`scrollBy(left, top)` Set the number of pixels that a group's children is scrolled by the left and top.

## scrollTo()

`scrollTo(left, top)` Set the number of pixels that a group's children is scrolled to the left and top.
