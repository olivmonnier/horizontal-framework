const scrollHorizontal = function(el) {
  const contentEl = el.querySelector('.content');

  handleMouseWheel(contentEl);
}

function handleMouseWheel(el) {
  let scroll = 0;

  const itemLast = el.children[el.children.length - 1];
  const mousewheelevt = /Firefox/i.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel';
  const scrollSpeed = 20;
  const scrollMax = itemLast.offsetLeft + itemLast.offsetWidth - el.offsetLeft - el.offsetWidth;

  el.addEventListener(mousewheelevt, function(e) {
    e.preventDefault();

    const diffScroll = el.scrollLeft - scroll;

    if (Math.abs(diffScroll) > scrollSpeed) {
      return (scroll = el.scrollLeft);
    }

    if ((e.wheelDelta || e.detail) > 0) {
      if (scroll >= 0) scroll -= scrollSpeed;
    } else {
      if (scroll <= scrollMax) scroll += scrollSpeed;
    }

    el.scrollLeft = scroll;
  });
}

export default scrollHorizontal;