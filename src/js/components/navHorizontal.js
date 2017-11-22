import scrollHorizontal from '../utils/scrollHorizontal';

class NavHorizontal {
  constructor(el) {
    this.el = el;

    scrollHorizontal(this.el);
  }
}

export default NavHorizontal;