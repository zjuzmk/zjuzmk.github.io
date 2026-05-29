# 田野调查与研究地点

<div id="research-map" style="height:500px;border-radius:8px;margin-bottom:2rem;"></div>

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
      desc: '博士田野调查（2021–2024）。奥运驱动的山地城市化、滑雪度假区开发与乡村重构。',
      project: 'chongli-extended-urbanization'
    },
    {
      lat: 39.90, lng: 116.40,
      title: '北京',
      desc: '单位制社区研究。首钢园区与京张走廊的奥运工业遗产调研。',
      project: 'danwei-spatial-transformation'
    },
    {
      lat: 30.25, lng: 120.16,
      title: '浙江杭州',
      desc: '硕士田野调查。大运河杭州段的遗产保护与城市发展。',
      project: 'grand-canal-heritage'
    },
    {
      lat: 22.54, lng: 114.06,
      title: '广东深圳',
      desc: '研究基地（2018–2020）。北京大学深圳研究生院期间的现场音乐场所空间分析。',
      project: 'live-music-urban-spaces'
    }
  ];

  sites.forEach(function(s) {
    var marker = L.marker([s.lat, s.lng]).addTo(map);
    marker.bindPopup(
      '<strong>' + s.title + '</strong><br><p style="margin:4px 0 0;max-width:260px;">' + s.desc + '</p>'
    );
  });
});
</script>

| 地点 | 研究主题 | 时间 |
|------|---------|------|
| **河北崇礼** | 奥运城市化、滑雪度假区、乡村重构 | 2021–2024 |
| **北京** | 单位制社区、奥运工业遗产 | 2018–2024 |
| **浙江杭州** | 大运河遗产保护 | 2015–2016 |
| **广东深圳** | 现场音乐、城市文化空间 | 2018–2020 |
