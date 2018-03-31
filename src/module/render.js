const $ = require('jquery');
const artT = require('art-template/dist/template.js');

const _opt = {
  menu: '.menu',
  page: '#app'
}
var $menu = $(_opt.menu);
var $page = $(_opt.page);

var path = '/main';
var data={};

function renderHtml(path, data) {
  const tpl = require('../route'+path+'.tpl')();
  const renderer = artT.compile(tpl);

  const obj = {
    data: data
  }

  var html = renderer(obj);
  $page.html(html);
}

const render = {
  init: () => {
    $.ajax({
      url: '/main',
      type: 'get',
      success: (data) => {
        data = data;
        renderHtml(path, data);
      }
    });
    $menu.on('click', (e) => {
      e.preventDefault();
      // console.log(e.target.pathname);
      renderHtml(e.target.pathname, data);
    });
  }
}
module.exports = render;