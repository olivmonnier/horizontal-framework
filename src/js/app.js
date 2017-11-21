import AppBar from './components/appbar'
import ListItems from './components/listItems'
import SectionTabs from './components/sectionTabs'

window.onload = function() {
  const appBars = Array.from(document.querySelectorAll('.appbar'));
  const listItems = Array.from(document.querySelectorAll('.list-items'));
  const sectionTabs = Array.from(document.querySelectorAll('.section-tabs'));

  appBars.forEach(appBar => new AppBar(appBar))
  listItems.forEach(list => new ListItems(list))
  sectionTabs.forEach(section => new SectionTabs(section))
}