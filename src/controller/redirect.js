const $ = require('jquery');
const render = require('../module/render');

const redirect = (function () {

  const _opt = {
    menu: '.menu'
  }
  var $menu = $(_opt.menu);

  function init() {
    $menu.on('click', (e) => {
      e.preventDefault();
      // console.log(e.target.pathname);
    });
  }
  return {
    init: init
  }
})();

module.exports = redirect;