class AppBar {
  constructor(el) {
    this.el = el;
    this.btn = this.el.querySelector('[data-toggle="appbar"]');

    this.handlers();
  }

  handlers() {
    this.btn.addEventListener('click', () => {
      this.el.classList.toggle('in');
    })
  }
}

export default AppBar;