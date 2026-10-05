// Career History: show the print button (it needs scripts) and keep the
// "On this page" list open beside the content on wide screens, collapsed on phones.
(function () {
  var button = document.querySelector('.print-button');
  if (button) {
    button.hidden = false;
    button.addEventListener('click', function () { window.print(); });
  }

  var details = document.querySelector('.toc__details');
  if (details && window.matchMedia) {
    var wide = window.matchMedia('(min-width: 900px)');
    var sync = function () { details.open = wide.matches; };
    sync();
    if (wide.addEventListener) { wide.addEventListener('change', sync); }
    else if (wide.addListener) { wide.addListener(sync); }
    var summary = details.querySelector('summary');
    if (summary) {
      summary.addEventListener('click', function (event) {
        if (wide.matches) { event.preventDefault(); }
      });
    }
  }
})();
