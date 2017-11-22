const mousewheelevt = /Firefox/i.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel';
const scrollSpeed = 20;

const scrollHorizontal = function(el) {
  let scroll = 0;

  const contentEl = el.querySelector('.content');
  const itemLast = contentEl.children[contentEl.children.length - 1];
  const scrollMax = itemLast.offsetLeft + itemLast.offsetWidth - contentEl.offsetLeft - contentEl.offsetWidth;

  contentEl.addEventListener(mousewheelevt, function(e) {
    e.preventDefault();

    const diffScroll = contentEl.scrollLeft - scroll;

    if (Math.abs(diffScroll) > scrollSpeed) {
      return scroll = contentEl.scrollLeft;
    }

    if((e.wheelDelta || e.detail) > 0) {
      if (scroll >= 0) scroll -= scrollSpeed;
    } else {
      if (scroll <= scrollMax) scroll += scrollSpeed;
    }

    contentEl.scrollLeft = scroll;
  })
}

export default scrollHorizontal;