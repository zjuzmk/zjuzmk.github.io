---
title: About
sidebar:
  hide: true
---

<div class="about-profile">

<div class="about-photo">
<img src="/images/profile.jpg" alt="Mengke Zhang" class="profile-img">
</div>

<div class="about-intro">

I am a researcher at the intersection of **urban planning, urban studies, and human geography**. My work examines the political economy of regional development, periphery urbanization, infrastructure-led spatial transformation, and the politics of space under state-led development.

I recently completed my PhD at the Heritage, Anthropology and Technologies Research Group, **EPFL** (Switzerland), where my dissertation explored how the 2022 Beijing Winter Olympics reshaped Chongli — a poor mountain county — through financialization, infrastructural development, and socio-spatial transformation. The research was grounded in **seven months of ethnographic fieldwork** in Hebei, involving over 80 in-depth interviews with officials, SOE managers, resort operators, and residents.

<div class="about-contact-links">
  <a href="https://scholar.google.com/citations?user=dJF_R2wAAAAJ" target="_blank" rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
    Google Scholar
  </a>
  <a href="https://orcid.org/0000-0002-8036-727X" target="_blank" rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/></svg>
    ORCID
  </a>
  <a href="mailto:zjuzmk@gmail.com">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"/><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"/></svg>
    Email
  </a>
</div>

</div>

</div>

---

## Research Projects

<div class="research-cards">

<div class="research-card">

### [Chongli's Extended Urbanization](/about/projects/chongli-extended-urbanization)

**2020–2025** · PhD Dissertation, EPFL

How did the 2022 Beijing Winter Olympics transform a poor mountain county into China's first Olympic mountain city? This project traces the financial, infrastructural, and social mechanisms behind Chongli's rapid urbanization.

</div>

<div class="research-card">

### [Cultural Heritage at Beijing 2022](/about/projects/beijing2022-cultural-heritage)

**2022–2024** · SNSF Research Project

Part of an international, interdisciplinary team examining how the Beijing 2022 Winter Olympics mobilized cultural heritage — from industrial sites to intangible practices — for state-led urban regeneration and nation-branding.

</div>

<div class="research-card">

### [Platform-Mediated Live Music and Urban Spaces](/about/projects/live-music-urban-spaces)

**2018–2020** · Peking University Shenzhen

How do digital platforms reshape live music performance and create new urban cultural spaces in Chinese cities? A spatial analysis of an emerging cultural economy.

</div>

<div class="research-card">

### [Property Rights and the Danwei Compound](/about/projects/danwei-spatial-transformation)

**2018–2020** · Peking University Shenzhen

Tracing how property rights redistribution has driven the spatial and institutional transformation of Beijing's socialist danwei (work-unit) compounds since market reforms.

</div>

<div class="research-card">

### [Conservation of the Grand Canal](/about/projects/grand-canal-heritage)

**2015–2016** · MA Thesis, HKU

Examining the mismatch between official heritage discourse and local realities in the conservation of China's Grand Canal — a case study of the Hangzhou section.

</div>

</div>

---

## Fieldwork & Research Sites

<div class="map-section">

<div id="research-map"></div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var isDark = document.documentElement.classList.contains('dark');

  var map = L.map('research-map', {
    zoomControl: false,
    scrollWheelZoom: false
  }).setView([34, 116], 5);

  L.control.zoom({ position: 'bottomright' }).addTo(map);

  var lightTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  });

  var darkTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  });

  (isDark ? darkTiles : lightTiles).addTo(map);

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'class') {
        var nowDark = document.documentElement.classList.contains('dark');
        map.removeLayer(nowDark ? lightTiles : darkTiles);
        map.addLayer(nowDark ? darkTiles : lightTiles);
      }
    });
  });
  observer.observe(document.documentElement, { attributes: true });

  var sites = [
    {
      lat: 40.97, lng: 115.28,
      title: 'Chongli, Hebei',
      desc: 'PhD fieldwork (2021–2024). Olympic-driven mountain urbanization, ski resort development, rural restructuring.'
    },
    {
      lat: 39.90, lng: 116.40,
      title: 'Beijing',
      desc: 'Danwei compound research. Olympic industrial heritage at Shougang Park and Beijing-Zhangjiakou corridor.'
    },
    {
      lat: 30.25, lng: 120.16,
      title: 'Hangzhou, Zhejiang',
      desc: 'MA fieldwork. Grand Canal heritage conservation and urban development along the Hangzhou canal section.'
    },
    {
      lat: 22.54, lng: 114.06,
      title: 'Shenzhen, Guangdong',
      desc: 'Research base (2018–2020). Live music venue mapping and urban cultural space analysis at PKU Shenzhen.'
    }
  ];

  sites.forEach(function(s) {
    var marker = L.marker([s.lat, s.lng], {
      icon: L.divIcon({
        className: 'research-marker',
        html: '<div class="research-marker-dot"></div><div class="research-marker-pulse"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      })
    }).addTo(map);

    marker.bindPopup(
      '<div class="research-popup"><strong>' + s.title + '</strong><p>' + s.desc + '</p></div>',
      { className: 'research-popup-wrapper', closeButton: false }
    );
  });
});
</script>

</div>

<div class="site-cards">

<div class="site-card">
<div class="site-card-num">01</div>
<div class="site-card-body">
<h3 class="site-card-title">Chongli, Hebei</h3>
<p class="site-card-focus">Olympic urbanization, ski resorts, rural restructuring</p>
<span class="site-card-period">2021–2024</span>
</div>
</div>

<div class="site-card">
<div class="site-card-num">02</div>
<div class="site-card-body">
<h3 class="site-card-title">Beijing</h3>
<p class="site-card-focus">Danwei compounds, Olympic industrial heritage</p>
<span class="site-card-period">2018–2024</span>
</div>
</div>

<div class="site-card">
<div class="site-card-num">03</div>
<div class="site-card-body">
<h3 class="site-card-title">Hangzhou, Zhejiang</h3>
<p class="site-card-focus">Grand Canal heritage conservation</p>
<span class="site-card-period">2015–2016</span>
</div>
</div>

<div class="site-card">
<div class="site-card-num">04</div>
<div class="site-card-body">
<h3 class="site-card-title">Shenzhen, Guangdong</h3>
<p class="site-card-focus">Live music venues, urban cultural spaces</p>
<span class="site-card-period">2018–2020</span>
</div>
</div>

</div>
