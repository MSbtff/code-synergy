class Content extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    this.shadowRoot.innerHTML = `

    <style>

 .main_text {
  margin-left: 212px;
}

.main_nav {
  color: #ffd371;
  font-size: 25px;
}
.sub_nav {
  color: #ffd371;
  opacity: 0.5;
  font-size: 25px;
  margin-left: 56px;
}

.article {
  display: flex;
  gap: 23px;
  margin-top: 50px;
}

.article .photo {
  width: 375px;
  height: 200px;
  border-radius: 10px;
}

.article .content {
  width: 450px;
  gap: 10px;
}
.article .content .sub_title {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
}
.article .content .main_title {
  font-size: 25px;
  color: #ffd371;
}
.article .content span {
  color: #ffffff;
  font-size: 16px;
}

.article .content .read_more {
  font-size: 15px;
  color: #c3c4c6;
}
.article .content .footer {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}
.article .content b {
  color: #c3c4c6;
}

.see_more {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 51px;
  gap: 9px;
}

.see_more_text {
  color: #ffffff;
  font-size: 20px;
}


    
    </style>


<body>
    <div class="main_text">
      <strong class="main_nav">TOP ARTICLES</strong>
      <strong class="sub_nav">RECENTLY PUBLISHED</strong>

      <div class="article vscode">
        <img class="photo" src="../img/vscode_img.png" alt="vscode 이미지" />
        <div class="content">
          <strong class="sub_title">VSCode</strong>
          <h3 class="main_title">
            9 VSCode Extensions You Definitely Need As A Developer
          </h3>
          <span
            >It would help if you had these extensions to improve your workflow,
            reduce the number of bugs...</span
          >
          <span class="read_more">Read more</span>

          <div class="footer">
            <img src="../img/heart.png" alt="좋아요" />
            <img src="../img/Vector.png" alt="저장" />
            <b>38598 Views</b>
            <img src="../img/Ellipse 13.png" alt="동그라미" />
            <b>437 Likes</b>
            <img src="../img/Ellipse 13.png" alt="동그라미" />
            <b>Nov 8</b>
          </div>
        </div>
      </div>

      <div class="article linux">
        <img class="photo" src="../img/linux_img.png" alt="vscode 이미지" />
        <div class="content">
          <strong class="sub_title">Linux</strong>
          <h3 class="main_title">
            Simple Commands In Linux That Will Make You Feel Like a Pro
          </h3>
          <span
            >If you know the basic commands to enter in the terminal, you’ll be
            more comfortable...</span
          >

          <div class="footer">
            <img src="../img/heart.png" alt="좋아요" />
            <img src="../img/Vector.png" alt="저장" />
            <b>21262 Views</b>
            <img src="../img/Ellipse 13.png" alt="동그라미" />
            <b>158 Likes</b>
            <img src="../img/Ellipse 13.png" alt="동그라미" />
            <b>Nov 21</b>
          </div>
        </div>
      </div>

      <div class="article javascript">
        <img class="photo" src="../img/javascript_img.png" alt="vscode 이미지" />
        <div class="content">
          <strong class="sub_title">JavaScript</strong>
          <h3 class="main_title">
            JavaScript Tips to Improve Your Webpage Performance
          </h3>
          <span
            >A few tips that will make visiting your website a more enjoyable
            experience...</span
          >

          <div class="footer">
            <img src="../img/heart.png" alt="좋아요" />
            <img src="../img/Vector.png" alt="저장" />
            <b>7165 Views</b>
            <img src="../img/Ellipse 13.png" alt="동그라미" />
            <b>6 Likes</b>
            <img src="../img/Ellipse 13.png" alt="동그라미" />
            <b>Nov 22</b>
          </div>
        </div>
      </div>

      <div class="article web3.0">
        <img class="photo" src="../img/web3.0_img.png" alt="vscode 이미지" />
        <div class="content">
          <strong class="sub_title">Web 3.0</strong>
          <h3 class="main_title">
            Don't Miss The Opportunity that Web 3.0 Gives You
          </h3>
          <span
            >What is Web 3.0 and why you should pay attention to it? Also, the
            future of Blockchain...</span
          >

          <div class="footer">
            <img src="../img/heart.png" alt="좋아요" />
            <img src="../img/Vector.png" alt="저장" />
            <b>2664 Views</b>
            <img src="../img/Ellipse 13.png" alt="동그라미" />
            <b>6 Likes</b>
            <img src="../img/Ellipse 13.png" alt="동그라미" />
            <b>Nov 24</b>
          </div>
        </div>
      </div>

      <div class="article metaverse">
        <img class="photo" src="../img/metaverse_img.png" alt="vscode 이미지" />
        <div class="content">
          <strong class="sub_title">Metaverse</strong>
          <h3 class="main_title">The Next Generation of Digital Identity</h3>
          <span
            >Metaverse is a 3D virtual world where you can explore and chat with
            people from all over the globe in a shared, immersive space...</span
          >

          <div class="footer">
            <img src="../img/heart.png" alt="좋아요" />
            <img src="../img/Vector.png" alt="저장" />
            <b>111 Views</b>
            <img src="../img/Ellipse 13.png" alt="동그라미" />
            <b>6 Likes</b>
            <img src="../img/Ellipse 13.png" alt="동그라미" />
            <b>Nov 28</b>
          </div>
        </div>
      </div>
      <div class="see_more">
        <strong class="see_more_text">See More</strong>
        <img
          class="see_more_icon"
          src="../img/down_icon.png"
          alt="더보기 아이콘"
        />
      </div>
    </div>
  </body>

    `;
  }
}

customElements.define('app-content', Content);