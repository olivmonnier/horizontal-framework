const btns = Array.from(document.querySelectorAll('.tabSection .nav > li > a'))
const sectionsActive = Array.from(
  document.querySelectorAll('.tabSection .section.active')
)

btns.forEach(btn => 
  btn.addEventListener('click', function() {
    const tabSection = this.closest('.tabSection');
    const nav = this.closest('.nav');
    const parent = this.parentNode;
    const isActive = parent.classList.contains('active');
    const sectionId = this.getAttribute('href');

    if(isActive) return;
    
    tabSection.querySelector('.content .active').classList.remove('active');
    nav.querySelector('.active').classList.remove('active');

    tabSection.querySelector(sectionId).classList.add('active');
    parent.classList.add('active');
  })
)

window.onload = function() {
  sectionsActive.forEach(section => {
    const tabSectionContentEl = section.closest('.content');
    const sectionIndex = Array.prototype.slice
      .call(tabSectionContentEl.children)
      .indexOf(section);

    tabSectionContentEl.scrollLeft = sectionIndex * section.offsetWidth;
  });
}