(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var btns = Array.from(document.querySelectorAll('[data-toggle="appbar"]'));

btns.forEach(function (btn) {
  return btn.addEventListener('click', function () {
    this.closest('.appbar').classList.toggle('in');
  });
});

},{}],2:[function(require,module,exports){
'use strict';

require('./appbar');

require('./tabsection');

},{"./appbar":1,"./tabsection":3}],3:[function(require,module,exports){
'use strict';

var btns = Array.from(document.querySelectorAll('.tabSection .nav > li > a'));
var sectionsActive = Array.from(document.querySelectorAll('.tabSection .section.active'));

btns.forEach(function (btn) {
  return btn.addEventListener('click', function () {
    var tabSection = this.closest('.tabSection');
    var nav = this.closest('.nav');
    var parent = this.parentNode;
    var isActive = parent.classList.contains('active');
    var sectionId = this.getAttribute('href');

    if (isActive) return;

    tabSection.querySelector('.content .active').classList.remove('active');
    nav.querySelector('.active').classList.remove('active');

    tabSection.querySelector(sectionId).classList.add('active');
    parent.classList.add('active');
  });
});

window.onload = function () {
  sectionsActive.forEach(function (section) {
    var tabSectionContentEl = section.closest('.content');
    var sectionIndex = Array.prototype.slice.call(tabSectionContentEl.children).indexOf(section);

    tabSectionContentEl.scrollLeft = sectionIndex * section.offsetWidth;
  });
};

},{}],4:[function(require,module,exports){
'use strict';

require('./polyfill');

require('./components');

},{"./components":2,"./polyfill":5}],5:[function(require,module,exports){
"use strict";

// Element.closest
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {}
    } while (i < 0 && (el = el.parentElement));
    return el;
  };
}

},{}]},{},[4])

//# sourceMappingURL=index.js.map
