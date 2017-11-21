import scrollHorizontal from '../scrollHorizontal';

class ListItems {
  constructor(el) {
    this.el = el;

    scrollHorizontal(this.el);
  }
}

export default ListItems;