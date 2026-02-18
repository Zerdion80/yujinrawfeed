<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Yujinrawfeed | Yujinmulsan Co. Ltd</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 1200px; margin: auto; padding: 20px; }
    .hero { position: relative; }
    .hero img { width: 100%; height: 50vh; object-fit: cover; }
    .hero-text {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: rgba(0,0,0,0.4);
      color: white; text-align: center;
      padding: 20px;
    }
    .hero-text h1 { font-size: 2rem; }
    .section-dark { background: #0f2a44; color: white; text-align: center; padding: 60px 20px; }
    .section-dark h2 { font-size: 2rem; margin-bottom: 15px; }
    .about { display: flex; flex-wrap: wrap; gap: 30px; padding: 60px 20px; }
    .about-text, .about-img { flex: 1 1 400px; }
    .about-img img { width: 100%; border-radius: 12px; }
    .card { background: #f5f7fa; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 20px; }
    footer { background: #111; color: #aaa; text-align: center; padding: 20px; font-size: 0.9rem; }
    .lang-toggle { text-align: right; padding: 15px 20px; }
    .lang-toggle button { padding: 6px 12px; margin-left: 5px; cursor: pointer; }
    @media (max-width: 768px) {
      .hero-text h1 { font-size: 1.4rem; }
      .section-dark h2 { font-size: 1.5rem; }
    }
  </style>
</head>
<body>

  <div class="lang-toggle">
    <button onclick="setLang('en')">EN</button>
    <button onclick="setLang('ko')">KR</button>
  </div>

  <div class="hero">
    <img src="images/olive-flounder.jpg" alt="Olive flounder lying on seabed" />
    <div class="hero-text">
      <h1 id="heroTitle">Premium Aquaculture Feed Supply</h1>
    </div>
  </div>

  <section class="section-dark">
    <h2 id="companyName">Yujinmulsan Co. Ltd</h2>
    <p id="tagline">Wholesale Supplier of Frozen Seafood for Land-Based Olive Flounder Farms</p>
  </section>

  <div class="container about">
    <div class="about-text">
      <h2 id="aboutTitle">About Us</h2>
      <p id="aboutText1">
        Yujinmulsan Co. Ltd is a specialized supplier of frozen seafood products for aquaculture feed, with over 30 years of industry experience in South Korea.
      </p>
      <br>
      <p id="aboutText2">
        We supply approximately 20,000 metric tons of frozen seafood annually to land-based aquaculture farms across Korea.
      </p>
    </div>
    <div class="about-img">
      <img src="images/aquaculture-farm.jpg" alt="Land-based aquaculture farm" />
    </div>
  </div>

  <div class="container">
    <div class="card">
      <h2 id="contactTitle">Contact</h2>
      <p id="contactText">For business inquiries, please contact us via email below.</p>
      <p><strong>yujinmulsan@gmail.com</strong></p>
    </div>

    <div class="card">
      <h2 id="locationTitle">Location</h2>
      <p id="address">Room 322, LG Marine Tower, Nambumin-dong, Seo-gu, Busan, Republic of Korea</p>
    </div>
  </div>

  <footer>
    © <span id="year"></span> Yujinmulsan Co. Ltd. All rights reserved.
  </footer>

  <script>
    document.getElementById("year").textContent = new Date().getFullYear();

    function setLang(lang) {
      if (lang === 'ko') {
        document.getElementById('heroTitle').textContent = '프리미엄 양식 사료 공급 전문 기업';
        document.getElementById('companyName').textContent = '유진물산';
        document.getElementById('tagline').textContent = '육상 광어 양식장용 냉동 수산물 도매 전문';
        document.getElementById('aboutTitle').textContent = '회사 소개';
        document.getElementById('aboutText1').textContent = '유진물산은 30년의 역사를 지닌 냉동 수산물 공급 전문 기업입니다.';
        document.getElementById('aboutText2').textContent = '연간 약 20,000톤 규모의 냉동 수산물을 국내 육상 양식장에 공급하고 있습니다.';
        document.getElementById('contactTitle').textContent = '문의';
        document.getElementById('contactText').textContent = '사업 문의 및 거래 상담은 아래 이메일로 연락 주십시오.';
        document.getElementById('locationTitle').textContent = '회사 위치';
        document.getElementById('address').textContent = '부산광역시 서구 남부민동 LG마린타워 322호';
      } else {
        document.getElementById('heroTitle').textContent = 'Premium Aquaculture Feed Supply';
        document.getElementById('companyName').textContent = 'Yujinmulsan Co. Ltd';
        document.getElementById('tagline').textContent = 'Wholesale Supplier of Frozen Seafood for Land-Based Olive Flounder Farms';
        document.getElementById('aboutTitle').textContent = 'About Us';
        document.getElementById('aboutText1').textContent = 'Yujinmulsan Co. Ltd is a specialized supplier of frozen seafood products for aquaculture feed, with over 30 years of industry experience in South Korea.';
        document.getElementById('aboutText2').textContent = 'We supply approximately 20,000 metric tons of frozen seafood annually to land-based aquaculture farms across Korea.';
        document.getElementById('contactTitle').textContent = 'Contact';
        document.getElementById('contactText').textContent = 'For business inquiries, please contact us via email below.';
        document.getElementById('locationTitle').textContent = 'Location';
        document.getElementById('address').textContent = 'Room 322, LG Marine Tower, Nambumin-dong, Seo-gu, Busan, Republic of Korea';
      }
    }
  </script>

</body>
</html>