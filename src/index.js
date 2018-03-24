const $ = require('jquery');
const rem = require('./util/rem');
const redirect = require('./controller/redirect');
const render = require('./module/render');
require('./index.less');

!(function () {

  rem.init();
  render.init();
  // redirect.init();

})();