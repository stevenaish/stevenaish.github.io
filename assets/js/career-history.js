// Career History: the Print this page button.
// The stylesheet shows the button when the page has the "js" marker; this script only makes it work.
// (The "On this page" list needs no script either: the stylesheet picks the right version by width.)
(function () {
  var button = document.querySelector('.print-button');
  if (button) {
    button.addEventListener('click', function () { window.print(); });
  }
})();
