import isTouchScreen from './utils/isTouchScreen'

import AppBar from './components/appbar'
import NavHorizontal from './components/navHorizontal'
import SectionTabs from './components/sectionTabs'

window.onload = function() {
  const appBars = Array.from(document.querySelectorAll('.appbar'));
  const navs = Array.from(document.querySelectorAll('.nav-horizontal'));
  const sectionTabs = Array.from(document.querySelectorAll('.section-tabs'));

  if (isTouchScreen()) {
    document.body.classList.add('touchscreen')
  }

  appBars.forEach(appBar => new AppBar(appBar))
  navs.forEach(nav => new NavHorizontal(nav));
  sectionTabs.forEach(section => new SectionTabs(section))
}