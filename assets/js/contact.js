// Connect page: the "Send a message" form (Build Handoff Part L).
// Checks the fields in the browser, sends them to the contact Worker, and shows the
// approved success or error message. If the Worker cannot be reached, the error message
// appears and the rest of the page keeps working.
(function () {
  var form = document.getElementById('contact-form');
  if (!form) { return; }

  var button = form.querySelector('button[type="submit"]');
  var statusBox = document.getElementById('contact-status'); // polite: success
  var alertBox = document.getElementById('contact-alert');   // assertive: failure
  var MAX_MESSAGE = 5000;

  var fields = {
    name: { el: document.getElementById('contact-name'), err: document.getElementById('contact-name-error') },
    email: { el: document.getElementById('contact-email'), err: document.getElementById('contact-email-error') },
    message: { el: document.getElementById('contact-message'), err: document.getElementById('contact-message-error') }
  };
  var checkError = document.getElementById('contact-check-error');

  function showError(field, text) {
    field.err.textContent = text;
    field.err.hidden = false;
    field.el.setAttribute('aria-invalid', 'true');
  }

  function clearError(field) {
    field.err.textContent = '';
    field.err.hidden = true;
    field.el.removeAttribute('aria-invalid');
  }

  function clearMessages() {
    statusBox.textContent = '';
    alertBox.textContent = '';
  }

  // Returns the first field with a problem (so it can take focus), or null.
  function validate() {
    var first = null;
    var name = fields.name.el.value.trim();
    var email = fields.email.el.value.trim();
    var message = fields.message.el.value.trim();

    clearError(fields.name);
    clearError(fields.email);
    clearError(fields.message);
    checkError.hidden = true;
    checkError.textContent = '';

    if (!name) {
      showError(fields.name, 'Please enter your name.');
      first = first || fields.name.el;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(fields.email, 'Please enter a valid email address.');
      first = first || fields.email.el;
    }
    if (!message) {
      showError(fields.message, 'Please enter a message.');
      first = first || fields.message.el;
    } else if (Array.from(message).length > MAX_MESSAGE) {
      showError(fields.message, 'Please keep your message to 5,000 characters or fewer.');
      first = first || fields.message.el;
    }

    var token = form.querySelector('[name="cf-turnstile-response"]');
    if (!token || !token.value) {
      checkError.textContent = 'Please complete the spam protection check.';
      checkError.hidden = false;
      first = first || form.querySelector('.cf-turnstile iframe') || checkError;
    }
    return first;
  }

  // Called by the Turnstile widget (data-callback) when the visitor passes the check.
  window.contactCheckPassed = function () {
    checkError.hidden = true;
    checkError.textContent = '';
  };

  function resetCheck() {
    if (window.turnstile && typeof window.turnstile.reset === 'function') {
      window.turnstile.reset();
    }
  }

  function setBusy(busy) {
    button.disabled = busy;
    button.textContent = busy ? 'Sending...' : 'Send message';
  }

  function showTemplate(box, id) {
    var template = document.getElementById(id);
    box.textContent = '';
    if (template && template.content) {
      box.appendChild(template.content.cloneNode(true));
    }
  }

  function succeeded() {
    form.reset();
    ['name', 'email', 'message'].forEach(function (key) { clearError(fields[key]); });
    resetCheck();
    alertBox.textContent = '';
    showTemplate(statusBox, 'contact-success-template');
  }

  function failed() {
    resetCheck(); // a Turnstile token can be used only once
    statusBox.textContent = '';
    showTemplate(alertBox, 'contact-error-template');
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearMessages();
    var first = validate();
    if (first) {
      if (typeof first.focus === 'function') { first.focus(); }
      return;
    }

    setBusy(true);
    var body = new URLSearchParams(new FormData(form)).toString();
    var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = setTimeout(function () { if (controller) { controller.abort(); } }, 20000);

    fetch(form.getAttribute('data-endpoint'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body,
      credentials: 'omit',
      signal: controller ? controller.signal : undefined
    })
      .then(function (response) {
        return response.json().then(
          function (data) { return response.ok && data && data.ok === true; },
          function () { return false; }
        );
      })
      .then(function (ok) {
        clearTimeout(timer);
        setBusy(false);
        if (ok) { succeeded(); } else { failed(); }
      })
      .catch(function () {
        clearTimeout(timer);
        setBusy(false);
        failed();
      });
  });

  // Clear a field's message as soon as the visitor edits it.
  ['name', 'email', 'message'].forEach(function (key) {
    fields[key].el.addEventListener('input', function () { clearError(fields[key]); });
  });
})();
