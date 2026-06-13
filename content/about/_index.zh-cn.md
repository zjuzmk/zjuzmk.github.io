---
title: 关于我
sidebar:
  hide: true
---

<div class="about-profile">

<div class="about-photo">
<img src="/images/profile.jpg" alt="张梦珂" class="profile-img">
</div>

<div class="about-intro">

我是一名城乡规划、城市研究与人文地理交叉领域的研究者，关注**区域发展的政治经济学、边缘城市化与基础设施驱动的空间转型**等议题。

我于瑞士洛桑联邦理工学院（**EPFL**）遗产、人类学与技术研究组（HAT）获得博士学位。博士论文以大型赛事与国家战略如何通过金融化、基础设施建设和空间社会转型重塑山地区域为核心议题，基于在河北崇礼累计**七个月的民族志田野调查**，深度访谈政府官员、国企管理者、滑雪度假区运营商及当地居民80余人次。

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

## 研究项目

<div class="research-cards">

<div class="research-card">

### [崇礼的延伸城市化](/about/projects/chongli-extended-urbanization)

**2020–2025** · 博士论文 · 瑞士洛桑联邦理工学院（EPFL）

2022年北京冬奥会如何将一个贫困山区县转变为中国首个奥运山地城市？本研究追踪了崇礼快速城市化背后的金融、基础设施与社会层面的深刻变革。

</div>

<div class="research-card">

### [北京2022冬奥会文化遗产](/about/projects/beijing2022-cultural-heritage)

**2022–2024** · SNSF研究项目

作为瑞士国家科学基金会（SNSF）资助的国际跨学科研究团队的一员，探讨北京2022年冬奥会如何将文化遗产——从工业遗址到非物质文化遗产——用于国家主导的城市更新与国家品牌建设。

</div>

<div class="research-card">

### [平台中介的现场音乐与城市空间](/about/projects/live-music-urban-spaces)

**2018–2020** · 北京大学深圳研究生院

数字平台如何重塑现场音乐表演，并由此创造新的城市文化空间？本研究对新生的文化经济形态进行了空间分析。

</div>

<div class="research-card">

### [单位制社区的产权与空间演变](/about/projects/danwei-spatial-transformation)

**2018–2020** · 北京大学深圳研究生院

追踪市场改革以来，产权再分配如何驱动北京单位制社区的空间与制度转型。

</div>

<div class="research-card">

### [大运河遗产保护](/about/projects/grand-canal-heritage)

**2015–2016** · 硕士论文 · 香港大学

探讨官方遗产话语与地方现实在中国大运河保护中的错位——以杭州段为案例，追问"谁的遗产、为谁保护"。

</div>

</div>

---

## 田野调查与研究地点

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
      title: '河北崇礼',
      desc: '博士田野调查（2021–2024）。奥运驱动的山地城市化、滑雪度假区开发与乡村重构。'
    },
    {
      lat: 39.90, lng: 116.40,
      title: '北京',
      desc: '单位制社区研究。首钢园区与京张走廊的奥运工业遗产调研。'
    },
    {
      lat: 30.25, lng: 120.16,
      title: '浙江杭州',
      desc: '硕士田野调查。大运河杭州段的遗产保护与城市发展。'
    },
    {
      lat: 22.54, lng: 114.06,
      title: '广东深圳',
      desc: '研究基地（2018–2020）。北京大学深圳研究生院期间的现场音乐场所空间分析。'
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

| 地点 | 研究焦点 | 时期 |
|------|----------|------|
| **河北崇礼** | 奥运城市化、滑雪度假区、乡村重构 | 2021–2024 |
| **北京** | 单位制社区、奥运工业遗产 | 2018–2024 |
| **浙江杭州** | 大运河遗产保护 | 2015–2016 |
| **广东深圳** | 现场音乐场所、城市文化空间 | 2018–2020 |
