// Mobile menu toggle. The menu works without animation; the button state
// lives in aria-expanded and the stylesheet shows or hides the links.
(function () {
  var button = document.querySelector('.menu-button');
  if (!button) { return; }
  var label = button.querySelector('.menu-button__label');

  function setOpen(open) {
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (label) { label.textContent = open ? 'Close' : 'Menu'; }
  }

  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
})();
