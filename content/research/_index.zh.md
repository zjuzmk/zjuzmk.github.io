---
title: 研究
sidebar:
  hide: true
---

我的研究聚焦于城市政治经济学、空间治理与延伸城市化的交叉领域，以中国为主要研究区域。我运用质性与民族志方法，探讨国家主导的发展如何重塑地域、制度与日常生活。

---

## 当前与近期项目

<div class="research-cards">

<div class="research-card">

### [崇礼的延伸城市化](chongli-extended-urbanization)

**2020–2025** · 博士论文 · 瑞士洛桑联邦理工学院（EPFL）

2022年北京冬奥会如何将一个贫困山区县转变为中国首个奥运山地城市？本研究追踪了崇礼快速城市化背后的机制——金融、基础设施与社会层面的深刻变革。

</div>

<div class="research-card">

### [北京2022冬奥会文化遗产](beijing2022-cultural-heritage)

**2022–2024** · SNSF研究项目

作为瑞士国家科学基金会（SNSF）资助的国际跨学科研究团队的一员，探讨北京2022年冬奥会如何将文化遗产——从工业遗址到非物质文化遗产——用于国家主导的城市更新与国家品牌建设。

</div>

<div class="research-card">

### [平台中介的现场音乐与城市空间](live-music-urban-spaces)

**2018–2020** · 北京大学深圳研究生院

数字平台如何重塑现场音乐表演，并由此创造新的城市文化空间？本研究对新生的文化经济形态进行了空间分析。

</div>

<div class="research-card">

### [单位制社区的产权与空间演变](danwei-spatial-transformation)

**2018–2020** · 北京大学深圳研究生院

追踪市场改革以来，产权再分配如何驱动北京单位制社区的空间与制度转型。

</div>

<div class="research-card">

### [大运河遗产保护](grand-canal-heritage)

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
  var map = L.map('research-map').setView([34.5, 114], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(map);

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
    var marker = L.marker([s.lat, s.lng]).addTo(map);
    marker.bindPopup(
      '<strong>' + s.title + '</strong><br><p style="margin:4px 0 0;max-width:240px;">' + s.desc + '</p>'
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
