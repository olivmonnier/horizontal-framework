import scrollHorizontal from '../scrollHorizontal';

class SectionTabs {
  constructor(el) {
    this.el = el;
    this.navs = Array.from(this.el.querySelectorAll('.nav > li > a'));
    this.sectionActive = this.el.querySelector('.section.active');

    if (this.sectionActive) {
      this.scrollToSection(this.sectionActive);
    }
    scrollHorizontal(this.el);
    this.handlers();
  }

  handlers() {
    const self = this;

    this.navs.forEach(nav => {
      nav.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        const parent = this.parentNode;
        const isActive = parent.classList.contains('active');
        const sectionActive = self.el.querySelector(sectionId);

        if (isActive) return;

        self.scrollToSection(sectionActive);
      });
    });
  }

  scrollToSection(sectionEl) {
    const contentEl = sectionEl.closest('.content');

    this.updateState(sectionEl);

    if (contentEl.scrollTo) {
      contentEl.scrollTo({ behavior: 'smooth', left: sectionEl.offsetLeft });
    } else {
      contentEl.scrollLeft = sectionEl.offsetLeft;
    }
  }

  updateState(sectionEl) {
    const sectionId = sectionEl.id;
    const navEl = this.el.querySelector('.nav');

    this.el.querySelector('.content .active').classList.remove('active');

    if (navEl) {
      this.el.querySelector('.nav .active').classList.remove('active');
    }

    sectionEl.classList.add('active');

    if (sectionId && navEl) {
      this.el.querySelector(`.nav [href="#${sectionId}"]`).classList.add('active');
    }
  }
}

export default SectionTabs