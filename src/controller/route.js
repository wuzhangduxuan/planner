const $ = require('jquery');
const route = (function () {
  function slideIn($item) {
    $item.css({
      animation: 'slideIn 0.5s'
    });
  }

  function init() {
    $('body').on('click', '[data-route="/main"]', () => {
      // $('#step1').hide();
      // $('#step2').hide();
      // $('#step3').hide();
      // $('#step4').hide();
      // $('#step5').hide();
      // $('#final').hide();
      location.reload();
    });
    $('body').on('click', '[data-route="/step1"]', () => {
      $('#step1').show();
      slideIn($('#step1'));
    });
    $('body').on('click', '[data-route="/step2"]', () => {
      $('#step2').show();
      slideIn($('#step2'));
    });
    $('body').on('click', '[data-route="/step3"]', () => {
      $('#step3').show();
      slideIn($('#step3'));
    });
    $('body').on('click', '[data-route="/step4"]', () => {
      $('#step4').show();
      slideIn($('#step4'));
    });
    $('body').on('click', '[data-route="/step5"]', () => {
      $('#step5').show();
      slideIn($('#step4'));
    });
    $('body').on('click', '.back', (e) => {
      $(e.target).parent().parent().css({
        animation: 'slideOut 0.5s'
      });
      setTimeout(() => {
        $(e.target).parent().parent().hide();
        $(e.target).parent().parent().css({
          animation: ''
        });
      }, 500);
    });

  }
  return {
    init: init
  }
})();

module.exports = route;