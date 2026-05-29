# Fieldwork & Research Sites

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
      title: 'Chongli, Hebei',
      desc: 'PhD fieldwork (2021–2024). Olympic-driven mountain urbanization, ski resort development, rural restructuring.',
      project: 'chongli-extended-urbanization'
    },
    {
      lat: 39.90, lng: 116.40,
      title: 'Beijing',
      desc: 'Danwei compound research. Olympic industrial heritage at Shougang Park and Beijing-Zhangjiakou corridor.',
      project: 'danwei-spatial-transformation'
    },
    {
      lat: 30.25, lng: 120.16,
      title: 'Hangzhou, Zhejiang',
      desc: 'MA fieldwork. Grand Canal heritage conservation and urban development along the Hangzhou canal section.',
      project: 'grand-canal-heritage'
    },
    {
      lat: 22.54, lng: 114.06,
      title: 'Shenzhen, Guangdong',
      desc: 'Research base (2018–2020). Live music venue mapping and urban cultural space analysis at PKU Shenzhen.',
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

| Location | Research Focus | Period |
|----------|---------------|--------|
| **Chongli, Hebei** | Olympic urbanization, ski resorts, rural restructuring | 2021–2024 |
| **Beijing** | Danwei compounds, Olympic industrial heritage | 2018–2024 |
| **Hangzhou, Zhejiang** | Grand Canal heritage conservation | 2015–2016 |
| **Shenzhen, Guangdong** | Live music venues, urban cultural spaces | 2018–2020 |
