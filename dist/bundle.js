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

require('./sectionTabs');

},{"./appbar":1,"./sectionTabs":3}],3:[function(require,module,exports){
'use strict';

var _scrollHorizontal = require('../scrollHorizontal');

var _scrollHorizontal2 = _interopRequireDefault(_scrollHorizontal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tabNavs = Array.from(document.querySelectorAll('.section-tabs .nav > li > a'));
var sectionTabs = Array.from(document.querySelectorAll('.section-tabs'));
var sectionsActive = Array.from(document.querySelectorAll('.section-tabs .section.active'));

tabNavs.forEach(function (nav) {
  return nav.addEventListener('click', function (e) {
    e.preventDefault();
    var sectionTabEl = this.closest('.section-tabs');
    var navEl = this.closest('.nav');
    var sectionId = this.getAttribute('href');
    var parent = this.parentNode;
    var isActive = parent.classList.contains('active');
    var sectionEl = sectionTabEl.querySelector(sectionId);

    if (isActive) return;

    sectionTabEl.querySelector('.content .active').classList.remove('active');
    navEl.querySelector('.active').classList.remove('active');

    sectionEl.classList.add('active');
    parent.classList.add('active');
    scrollToSectionActive(sectionEl);
  });
});

window.onload = function () {
  sectionsActive.forEach(scrollToSectionActive);
  sectionTabs.forEach(_scrollHorizontal2.default);
};

function scrollToSectionActive(sectionEl) {
  var contentEl = sectionEl.closest('.content');

  if ('scrollTo' in window) {
    contentEl.scrollTo({
      'behavior': 'smooth',
      'left': sectionEl.offsetLeft
    });
  } else {
    contentEl.scrollLeft = sectionEl.offsetLeft;
  }
}

},{"../scrollHorizontal":6}],4:[function(require,module,exports){
'use strict';

require('./polyfill');

require('./components');

},{"./components":2,"./polyfill":5}],5:[function(require,module,exports){
'use strict';

// Array.from
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;
    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // La propriété length de la méthode vaut 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Soit C, la valeur this
      var C = this;

      // 2. Soit items le ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from doit utiliser un objet semblable à un tableau - null ou undefined ne peuvent pas être utilisés');
      }

      // 4. Si mapfn est undefined, le mapping sera false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. sinon
        // 5. a. si IsCallable(mapfn) est false, on lève une TypeError.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: lorsqu il est utilisé le deuxième argument doit être une fonction');
        }

        // 5. b. si thisArg a été fourni, T sera thisArg ; sinon T sera undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Soit lenValue pour Get(items, "length").
      // 11. Soit len pour ToLength(lenValue).
      var len = toLength(items.length);

      // 13. Si IsConstructor(C) vaut true, alors
      // 13. a. Soit A le résultat de l'appel à la méthode interne [[Construct]] avec une liste en argument qui contient l'élément len.
      // 14. a. Sinon, soit A le résultat de ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Soit k égal à 0.
      var k = 0; // 17. On répète tant que k < len…
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Soit putStatus égal à Put(A, "length", len, true).
      A.length = len; // 20. On renvoie A.
      return A;
    };
  }();
}
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

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mousewheelevt = /Firefox/i.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel';
var scrollSpeed = 20;

var scrollHorizontal = function scrollHorizontal(el) {
  var scroll = 0;

  var contentEl = el.querySelector('.content');
  var itemLast = contentEl.children[contentEl.children.length - 1];
  var scrollMax = itemLast.offsetLeft + itemLast.offsetWidth - contentEl.offsetLeft - contentEl.offsetWidth;

  contentEl.addEventListener(mousewheelevt, function (e) {
    e.preventDefault();

    var diffScroll = contentEl.scrollLeft - scroll;

    if (Math.abs(diffScroll) > scrollSpeed) {
      scroll = contentEl.scrollLeft;
    }

    if ((e.wheelDelta || e.detail) > 0) {
      if (scroll >= 0) scroll -= scrollSpeed;
    } else {
      if (scroll <= scrollMax) scroll += scrollSpeed;
    }

    contentEl.scrollLeft = scroll;
  });
};

exports.default = scrollHorizontal;

},{}]},{},[4])

//# sourceMappingURL=index.js.map
