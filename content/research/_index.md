---
title: Research
sidebar:
  hide: true
---

My research sits at the intersection of urban political economy, spatial governance, and extended urbanization, with a regional focus on China. I use qualitative and ethnographic methods to examine how state-led development reshapes territories, institutions, and everyday life.

---

## Current & Recent Projects

<div class="research-cards">

<div class="research-card">

### [Chongli's Extended Urbanization](chongli-extended-urbanization)

**2020–2025** · PhD Dissertation, EPFL

How did the 2022 Beijing Winter Olympics transform a poor mountain county into China's first Olympic mountain city? This project traces the financial, infrastructural, and social mechanisms behind Chongli's rapid urbanization.

</div>

<div class="research-card">

### [Cultural Heritage at Beijing 2022](beijing2022-cultural-heritage)

**2022–2024** · SNSF Research Project

Part of an international, interdisciplinary team examining how the Beijing 2022 Winter Olympics mobilized cultural heritage — from industrial sites to intangible practices — for state-led urban regeneration and nation-branding.

</div>

<div class="research-card">

### [Platform-Mediated Live Music and Urban Spaces](live-music-urban-spaces)

**2018–2020** · Peking University Shenzhen

How do digital platforms reshape live music performance and create new urban cultural spaces in Chinese cities? A spatial analysis of an emerging cultural economy.

</div>

<div class="research-card">

### [Property Rights and the Danwei Compound](danwei-spatial-transformation)

**2018–2020** · Peking University Shenzhen

Tracing how property rights redistribution has driven the spatial and institutional transformation of Beijing's socialist danwei (work-unit) compounds since market reforms.

</div>

<div class="research-card">

### [Conservation of the Grand Canal](grand-canal-heritage)

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
  var map = L.map('research-map').setView([34.5, 114], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(map);

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
    var marker = L.marker([s.lat, s.lng]).addTo(map);
    marker.bindPopup(
      '<strong>' + s.title + '</strong><br><p style="margin:4px 0 0;max-width:240px;">' + s.desc + '</p>'
    );
  });
});
</script>

</div>

| Location | Research Focus | Period |
|----------|---------------|--------|
| **Chongli, Hebei** | Olympic urbanization, ski resorts, rural restructuring | 2021–2024 |
| **Beijing** | Danwei compounds, Olympic industrial heritage | 2018–2024 |
| **Hangzhou, Zhejiang** | Grand Canal heritage conservation | 2015–2016 |
| **Shenzhen, Guangdong** | Live music venues, urban cultural spaces | 2018–2020 |
