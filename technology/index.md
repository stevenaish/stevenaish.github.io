---
layout: base
title: "Guidewire and Insurance Platform Experience | Steve Naish"
description: "Steve Naish's experience across Guidewire, its surrounding technology ecosystem, and other insurance platforms, labeled by type of involvement. A sampling, not a full list."
schema: webpage
schema_mentions:
  - Guidewire
  - Earnix
  - Origami Risk
breadcrumb:
  - title: Technology
---
<section class="band band--ivory band--tight-top">
  <div class="container">
    <h1>Selected platform and technology experience</h1>
    <p class="lede lede--secondary">Experience across Guidewire, its surrounding technology ecosystem, and other insurance platforms, grouped by function and the type of involvement I had with each. A sampling of experience, not a full list.</p>
    <ul class="pill-row" aria-label="On this page">
      <li><a class="pill" href="#involvement">Types of involvement</a></li>
      <li><a class="pill" href="#guidewire">Guidewire and its ecosystem</a></li>
      <li><a class="pill" href="#categories">All platforms by category</a></li>
    </ul>
  </div>
</section>

<section class="band band--ivory band--flush-top" id="involvement" aria-labelledby="tech-involvement">
  <div class="container">
    <div class="box">
      <h2 id="tech-involvement" class="box__title box__title--lg">Types of involvement</h2>
      <ul class="legend">
        <li><span class="swatch swatch--dark" aria-hidden="true"></span>Customer or delivery leader</li>
        <li><span class="swatch swatch--medium" aria-hidden="true"></span>Selected, solutioned, integrated or delivered alongside</li>
        <li><span class="swatch swatch--light" aria-hidden="true"></span>Evaluated in a selection</li>
      </ul>
      <p class="text-secondary">These describe the type of involvement, not a measure of proficiency or a certification.</p>
    </div>
  </div>
</section>

<section class="band band--ivory band--flush-top" id="guidewire" aria-labelledby="tech-guidewire">
  <div class="container">
    <h2 id="tech-guidewire">Guidewire and its ecosystem</h2>
    <div class="split split--top">
      <p class="measure">My Guidewire experience spans three vantage points: as a customer at three insurers; at Catlin, where I led the 2012 core-system selection and then led the technology and data workstreams of the subsequent transformation; and as a leader of Cognizant's Guidewire practice.</p>
      <div class="involvement-lines">
        <p><span class="swatch swatch--dark" aria-hidden="true"></span><strong>Customer or delivery leader:</strong> Guidewire InsuranceSuite, Guidewire InsuranceNow, Guidewire Cloud Platform, Guidewire Marketplace.</p>
        <p><span class="swatch swatch--medium" aria-hidden="true"></span><strong>Selected, solutioned, integrated or delivered alongside:</strong> Guidewire DataHub and InfoCenter, Guidewire Cloud Data Access.</p>
      </div>
    </div>
    <ul class="card-grid card-grid--3">
      <li class="card">
        <span class="label">Current</span>
        <h3>Guidewire Cloud and the Cognizant practice</h3>
        <p>I have guided multiple complex, large-scale business transformations and platform organizations using Guidewire products, including PolicyCenter Cloud, BillingCenter Cloud, and ClaimCenter Cloud.</p>
        <p>I share executive leadership of Cognizant's global Guidewire practice and lead go-to-market activities and the Guidewire relationship for the United States and Canada, spanning business development and solution shaping across modernization, cloud migration, and managed services.</p>
        <p>At Cognizant, our team has published eleven accelerators to the Guidewire Marketplace. <a href="/impact/guidewire-marketplace-accelerators/">Guidewire Marketplace accelerators</a></p>
      </li>
      <li class="card">
        <span class="label">Earlier, 2012 onward</span>
        <h3>Catlin's selection and Project Phoenix</h3>
        <p>Led Catlin's 2012 core-system selection, which selected Guidewire. Subsequently led the technology and data workstreams of Project Phoenix, a complex business transformation centered on Guidewire InsuranceSuite and a custom-developed operational data store.</p>
        <p>Guidewire announced Catlin's selection of InsuranceSuite in October 2013 and quoted me in the announcement. <a href="https://www.guidewire.com/about/press-center/press-releases/20131015/catlin-group-selects-guidewire-solution" target="_blank" rel="noopener noreferrer">Guidewire announcement, October 15, 2013<span class="visually-hidden"> (opens in a new tab)</span></a></p>
        <p class="text-secondary"><a href="/experience/career-history/#catlin">Catlin and XL Catlin in Career History</a></p>
      </li>
      <li class="card">
        <span class="label">Customer and evaluator</span>
        <h3>From the insurer's side</h3>
        <p>My Guidewire experience includes being a customer at three insurers. Earlier, I took part in AIG's early evaluation of Guidewire ClaimCenter and in Guidewire evaluations within the Munich Re group.</p>
      </li>
    </ul>
  </div>
</section>

<section class="band band--ivory band--flush-top" id="categories" aria-labelledby="tech-categories">
  <div class="container">
    <h2 id="tech-categories">All platforms by category</h2>
    <ul class="card-grid card-grid--3 modules">
      {%- for category in site.data.technology_categories %}
      <li class="card module">
        <h3>{{ category.name }}</h3>
        {%- if category.customer.size > 0 %}
        <div class="involvement-group">
          <p class="involvement-label"><span class="swatch swatch--dark" aria-hidden="true"></span>Customer or delivery leader</p>
          <ul class="chips chips--dark">{% for item in category.customer %}<li>{{ item }}</li>{% endfor %}</ul>
        </div>
        {%- endif %}
        {%- if category.selected.size > 0 %}
        <div class="involvement-group">
          <p class="involvement-label"><span class="swatch swatch--medium" aria-hidden="true"></span>Selected, solutioned, integrated or delivered alongside</p>
          <ul class="chips chips--medium">{% for item in category.selected %}<li>{{ item }}</li>{% endfor %}</ul>
        </div>
        {%- endif %}
        {%- if category.evaluated.size > 0 %}
        <div class="involvement-group">
          <p class="involvement-label"><span class="swatch swatch--light" aria-hidden="true"></span>Evaluated in a selection</p>
          <ul class="chips chips--light">{% for item in category.evaluated %}<li>{{ item }}</li>{% endfor %}</ul>
        </div>
        {%- endif %}
      </li>
      {%- endfor %}
    </ul>
  </div>
</section>

<section class="band band--mist" aria-labelledby="tech-related">
  <div class="container">
    <h2 id="tech-related" class="related-title">Related pages</h2>
    <ul class="pill-row">
      <li><a class="pill" href="/impact/guidewire-marketplace-accelerators/">Guidewire Marketplace accelerators</a></li>
      <li><a class="pill" href="/experience/">Experience</a></li>
    </ul>
  </div>
</section>
