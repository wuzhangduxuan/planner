const $ = require('jquery');
const artT = require('art-template/dist/template.js');

const _opt = {
  menu: '[data-route]',
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
        $menu = $(_opt.menu);
        $menu.on('click', () => {
          var pathname = $menu.data('route');
          // console.log(e.target.pathname);
          renderHtml(pathname, data);
        });
      }
    });  
  }
}
module.exports = render;