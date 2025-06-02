class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    this.shadowRoot.innerHTML = `
    <style>
      header {
        display: flex;
        justify-content: space-between;
        margin: 100px 210px 0 210px;
      }
      .header-logo {
        display: flex;
        align-items: center;
        gap: 20px;
      }
      .header-logo h1 {
        font-size: 50px;
        font-weight: 500;
        color: #1e1e1e;
        line-height: 63px;
      }
      .header-logo div {
        font-size: 40px;
        font-weight: 300;
      }
      .header-logo h2 {
        font-size: 30px;
        font-weight: 500;
        color: #1e1e1e;
        line-height: 45px;
      }
      .header-icon {
        display: flex;
        align-items: center;
      }
      .header-icon .header-icons {
        display: flex;
        align-items: center;
        gap: 50px;
      }
      .header-icon .header-icons button {
        padding: 11px 37px 11px 36px;
        background-color: #1e1e1e;
        color: white;
        font-size: 20px;
        font-weight: 500;
        line-height: 38px;
        letter-spacing: 0.09em;
        border: none;
        border-radius: 10px;
      }
    </style>
    <header>
      <section class="header-logo">
        <h1>MetaMark</h1>
        <div>|</div>
        <h2>Blog</h2>
      </section>      
      <section class="header-icon">
        <article class="header-icons">
          <a href="" class="icon">
            <img src="../img/header/search.svg"/>
          </a>
          <a href="" class="icon">
            <img src="../img/header/moon.svg"/>
          </a>
          <a href="" class="icon">
            <img src="../img/header/bookmarks.svg"/>
          </a>
          <button class="header-button">Subscribe</button>
        </article>
      </section>
    </header>
    `;
  }
}

customElements.define('app-header', Header);