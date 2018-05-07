const $ = require('jquery');

const request = (function () {

  function get(url) {
    $.ajax({
      url: url,
      method: 'GET',
      success: () => { },
      error: () => { }
    });
  }

  function post(url, data) {
    $.ajax({
      url: url,
      method: 'POST',
      data: data,
      success: () => {},
      error: () => {}
    });
  }
  
  return {
    get: get,
    post: post
  }
})();

module.exports = request;