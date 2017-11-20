import scrollHorizontal from '../scrollHorizontal';

const tabNavs = Array.from(document.querySelectorAll('.section-tabs .nav > li > a'))
const sectionTabs = Array.from(document.querySelectorAll('.section-tabs'));
const sectionsActive = Array.from(
  document.querySelectorAll('.section-tabs .section.active')
)

tabNavs.forEach(nav =>
  nav.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionTabEl = this.closest('.section-tabs');
    const navEl = this.closest('.nav');
    const sectionId = this.getAttribute('href');
    const parent = this.parentNode;
    const isActive = parent.classList.contains('active');
    const sectionEl = sectionTabEl.querySelector(sectionId);

    if (isActive) return;

    sectionTabEl.querySelector('.content .active').classList.remove('active');
    navEl.querySelector('.active').classList.remove('active');

    sectionEl.classList.add('active');
    parent.classList.add('active');
    scrollToSectionActive(sectionEl);
  })
);

window.onload = function() {
  sectionsActive.forEach(scrollToSectionActive);
  sectionTabs.forEach(scrollHorizontal);
}

function scrollToSectionActive(sectionEl) {
  const contentEl = sectionEl.closest('.content');

  if ('scrollTo' in window) {
    contentEl.scrollTo({
      'behavior': 'smooth',
      'left': sectionEl.offsetLeft
    })
  } else {
    contentEl.scrollLeft = sectionEl.offsetLeft;
  }
}