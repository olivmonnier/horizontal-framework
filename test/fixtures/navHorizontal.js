global.navigator = { userAgent: 'node' };

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { window } = new JSDOM(`
  <div class="nav-horizontal" style="width: 300px;">
    <ul class="content">
      <li style="padding: 20px; width: 50px;">0</li>
      <li style="padding: 20px; width: 50px;">1</li>
      <li style="padding: 20px; width: 50px;">2</li>
      <li style="padding: 20px; width: 50px;">3</li>
      <li style="padding: 20px; width: 50px;">4</li>
      <li style="padding: 20px; width: 50px;">5</li>
      <li style="padding: 20px; width: 50px;">6</li>
      <li style="padding: 20px; width: 50px;">7</li>
      <li style="padding: 20px; width: 50px;">8</li>
      <li style="padding: 20px; width: 50px;">9</li>
    </ul>
  </div>
`, {
  'userAgent': navigator.userAgent
});

module.exports = require('jquery')(window);