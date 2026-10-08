// Career History: show the print button (it needs scripts).
// The "On this page" list needs no script: the stylesheet shows the collapsible version
// on phones and tablets and the open list beside the content on wide screens.
(function () {
  var button = document.querySelector('.print-button');
  if (button) {
    button.hidden = false;
    button.addEventListener('click', function () { window.print(); });
  }
})();
