const $ = require('jquery');
const artT = require('art-template/dist/template.js');
const route = require('../controller/route');

const _opt = {
  page: '#app'
}
var $page = $(_opt.page);

var data={};

function renderHtml(data) {
  const tpl = require('../route/main.tpl')();
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
        renderHtml(data);
      }
    });
    route.init();
  }
}
module.exports = render;