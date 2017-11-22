class AppBar {
  constructor(el) {
    this.el = el;
    this.toggle = this.el.querySelector('[data-toggle="appbar"]');

    this.handlers();
  }

  handlers() {
    this.toggle.addEventListener('click', () => {
      this.el.classList.toggle('in');
    })
  }
}

export default AppBar;