const $ = require('jquery');
const artT = require('art-template/dist/template.js');

const _opt = {
  menu: '.menu'
}
var $menu = $(_opt.menu);

var data = {
  title: 'planner'
}
var path = '/main';

function renderHtml(path, data) {
  const tpl = require('../route'+path+'.tpl')();
  const renderer = artT.compile(tpl);

  const obj = {
    data: data
  }

  var html = renderer(obj);
  $('#app').html(html);
}

const render = {
  init: () => {
    renderHtml(path, data);
    $menu.on('click', (e) => {
      e.preventDefault();
      // console.log(e.target.pathname);
      renderHtml(e.target.pathname, data);
    });
  }
}
module.exports = render;