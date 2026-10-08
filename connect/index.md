---
layout: base
title: "Connect | Steve Naish"
description: "Connect with Steve Naish on LinkedIn or X."
description_with_form: "Connect with Steve Naish on LinkedIn or X, or send a message through this site."
breadcrumb:
  - title: Connect
scripts:
  - /assets/js/contact.js
---
<section class="band band--ivory band--tight-top">
  <div class="container split">
    <div>
      <h1>Connect</h1>
      <p class="lede lede--secondary">{% if site.contact.enabled %}LinkedIn is the best way to reach me professionally. You may also send a message through this site.{% else %}The best way to reach me professionally is through LinkedIn.{% endif %}</p>
    </div>
    <div class="contact-stack">
      <div class="card card--feature">
        <span class="label">Primary contact</span>
        <h2 class="card__title">LinkedIn</h2>
        <p class="text-secondary">linkedin.com/in/stevenaish</p>
        <a class="btn btn--primary link-external" href="https://www.linkedin.com/in/stevenaish/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn<span class="visually-hidden"> (opens in a new tab)</span></a>
      </div>
      <div class="card card--feature">
        <h2 class="card__title">X</h2>
        <p class="text-secondary">@stevenaish</p>
        <a class="btn btn--secondary link-external" href="https://x.com/stevenaish" target="_blank" rel="noopener noreferrer">X profile<span class="visually-hidden"> (opens in a new tab)</span></a>
        <p class="text-secondary x-note">Please send me a follow request.</p>
      </div>
    </div>
  </div>
</section>

{%- if site.contact.enabled %}
<section class="band band--white contact" id="message" aria-labelledby="message-heading">
  <div class="container contact__layout">
    <div class="contact__intro">
      <h2 id="message-heading">Send a message</h2>
      <p>Your message is delivered to me privately. My email address and phone number are not published on this site.</p>
    </div>
    <div class="contact__panel">
      <noscript><p class="contact__noscript">The message form needs JavaScript. Please connect on <a href="https://www.linkedin.com/in/stevenaish/" target="_blank" rel="noopener noreferrer">LinkedIn<span class="visually-hidden"> (opens in a new tab)</span></a> instead.</p></noscript>
      <form class="contact-form" id="contact-form" method="post" action="{{ site.contact.endpoint }}" data-endpoint="{{ site.contact.endpoint }}" novalidate>
        <div class="field">
          <label for="contact-name">Name <span class="field__note">(required)</span></label>
          <input type="text" id="contact-name" name="name" autocomplete="name" maxlength="200" required aria-describedby="contact-name-error">
          <p class="field__error" id="contact-name-error" hidden></p>
        </div>
        <div class="field">
          <label for="contact-email">Email address <span class="field__note">(required)</span></label>
          <input type="email" id="contact-email" name="email" autocomplete="email" inputmode="email" maxlength="254" required aria-describedby="contact-email-error">
          <p class="field__error" id="contact-email-error" hidden></p>
        </div>
        <div class="field">
          <label for="contact-organization">Organization <span class="field__note">(optional)</span></label>
          <input type="text" id="contact-organization" name="organization" autocomplete="organization" maxlength="200">
        </div>
        <div class="field">
          <label for="contact-message">Message <span class="field__note">(required)</span></label>
          <p class="field__hint" id="contact-message-hint">Up to 5,000 characters.</p>
          <textarea id="contact-message" name="message" rows="7" maxlength="5000" required aria-describedby="contact-message-hint contact-message-error"></textarea>
          <p class="field__error" id="contact-message-error" hidden></p>
        </div>
        <div class="field hp" aria-hidden="true">
          <label for="contact-homepage">Leave this field empty</label>
          <input type="text" id="contact-homepage" name="homepage" tabindex="-1" autocomplete="off">
        </div>
        <div class="contact-form__check">
          <div class="cf-turnstile" data-sitekey="{{ site.contact.turnstile_sitekey }}" data-callback="contactCheckPassed"></div>
          <p class="field__error" id="contact-check-error" tabindex="-1" hidden></p>
        </div>
        <button type="submit" class="btn btn--primary contact-form__submit">Send message</button>
        <div class="contact-status" id="contact-status" role="status"></div>
        <div class="contact-status" id="contact-alert" role="alert"></div>
        <p class="text-secondary contact-form__notice">Your name, email address, organization, and message are used only to read and reply to your message. They are not added to a mailing list or shared. Spam protection by Cloudflare Turnstile.</p>
      </form>
      <template id="contact-success-template"><p class="contact-message contact-message--success">Thank you. Your message has been sent.</p></template>
      <template id="contact-error-template"><p class="contact-message contact-message--error">Your message could not be sent. Please try again, or connect on <a href="https://www.linkedin.com/in/stevenaish/" target="_blank" rel="noopener noreferrer">LinkedIn<span class="visually-hidden"> (opens in a new tab)</span></a>.</p></template>
    </div>
  </div>
</section>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
{%- endif %}