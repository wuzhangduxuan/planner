const url = (function () {
  function getPathname() {
    return window.location.pathname;
  }

  return {
    getPathname: getPathname
  }
})();

module.exports = url;