const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { window } = new JSDOM(`
  <body>
    <div class="appbar">
      <button data-toggle="appbar">Toggle</button>
      <div class="content">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    </div>
  </body>
`);

module.exports = require('jquery')(window);