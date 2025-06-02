class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    this.shadowRoot.innerHTML = `
        <style>
            body {
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
}

.main-container {
  box-shadow: 0px 0px 100px rgba(14, 20, 27, 0.25);
  display: flex;
  flex-direction: column;
}

.section-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.section-title {
  color: #1e1e1e;
  font-size: 30px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 37.8px;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.menu-item {
  opacity: 0.6;
  color: #1e1e1e;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 25.2px;
  word-wrap: break-word;
}

.horizontal-divider {
  height: 1px;
  background: #1e1e1e;
}

.language-item {
  opacity: 0.6;
  color: #1e1e1e;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 700;
  word-wrap: break-word;
}

.language-item.active {
  opacity: 1;
}

.footer-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-right {
  display: flex;
  align-items: center;
  margin-top: 50px;
}

.main-heading {
  text-align: center;
  color: #1e1e1e;
  font-size: 40px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 50.4px;
  word-wrap: break-word;
}

.copyright {
  color: #1e1e1e;
  font-size: 17px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 21.42px;
  word-wrap: break-word;
  margin-left: 30px;
}

.vertical-divider {
  width: 1px;
  height: 33px;
  background: #1e1e1e;
  margin-left: 6px;
}

.language-contain {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
}

.icon {
  display: flex;
}

.icon .row1 {
  display: flex;
  align-items: center;
}

.icon .row2 {
}

/* .icon-row3 .icon-err {
  width: 80px;
  height: 80px;
  padding: auto;
  margin: auto;
} */

        
        </style>



         <header class="main-container">
      <main class="section-container">
        <section class="section-title">
          <div>나의 프로젝트</div>

          <div class="menu-item">MetaCark</div>
          <div class="menu-item">Abstract Inc.</div>
          <div class="menu-item">MineShare</div>
          <div class="menu-item">Abstract Academy</div>
        </section>

        <section class="section-title">
          <div>Connect</div>
          <div class="menu-item">Contact</div>
          <div class="menu-item">Share your Ideas</div>
          <div class="menu-item">Join the Team</div>
        </section>

        <section class="section-title">
          <div>Service</div>
          <div class="menu-item">Order a Design</div>
          <div class="menu-item">Order an Article</div>
          <div class="menu-item">Developing</div>
        </section>

        <!-- 절대경로 설정 필요 fetch로  -->
        <section class="icon-contain">
          <div class="icon row1">
            <img src="img/Frame 310.svg" alt="sns" srcset="" />
            <img src="img/Frame 340.svg" alt="sns" srcset="" />
            <img src="img/Frame 342.svg" alt="sns" srcset="" />
          </div>
          <div class="icon row2">
            <img src="img/Frame 337.svg" alt="sns" srcset="" />
            <img src="img/Frame 338.svg" alt="sns" srcset="" />
            <img src="img/Frame 339.svg" alt="sns" srcset="" />
          </div>
          <div class="icon row3">
            <img src="img/Frame 336.svg" alt="sns" srcset="" />
            <img src="img/Frame 343.svg" class="icon-err" alt="sns" srcset="" />
            <img src="img/Frame 338.svg" alt="sns" srcset="" />
          </div>
        </section>
      </main>

      <div class="horizontal-divider"></div>

      <footer class="footer-bar">
        <article class="footer-right">
          <div class="main-heading">나의 작성일지</div>
          <div class="vertical-divider"></div>
          <div class="copyright">© All Rights Are Reserved</div>
        </article>

        <aside class="language-contain">
          <div class="language-item">EN</div>
          <div class="language-item">UA</div>
          <div class="language-item">DE</div>
          <div class="language-item">FR</div>
          <div class="language-item">RU</div>
          <div class="language-item active">KR</div>
        </aside>
      </footer>
    </header>
        
        `;
  }
}

customElements.define('app-footer', Footer);
