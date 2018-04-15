const $ = require('jquery');
const rem = require('./util/rem');
const redirect = require('./controller/redirect');
const render = require('./module/render');
const route = require('./controller/route');
require('./index.less');

!(function () {

  rem.init();
  render.init();
  // route.init();
  // redirect.init();

})();