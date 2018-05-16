<style>
  /* html, body, section, article, #page-index {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  main {
    height: 100%!important;
  }
  .coverpage {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #1eac61;
  }
  .coverpage #container {
    width: 100%;
    height: 100%;   
    position: fixed; 
  } */
  #page-index .wrap {
    display: none;
    height: 100%;
  }

  .app-nav,
  button.sidebar-toggle,
  .sidebar {
    display: none;
  }
  section.content {
    padding: 0;
    left: 0;
  }
  article.markdown-section {
    margin: 0;
    padding: 0;
    max-width: 80000px;
  }
  #features {
    width: 100%;
    padding-bottom: 55%;
    background: #eee;
  }
  .markdown-section h1 {
    text-align: center;
    margin-top: 40px;
    font-size: 3.5rem;
  }
  .markdown-section .info {
    text-align: center;
    font-size: 1.0rem;
    margin: 20px auto 80px;
  }
  .demos {
    text-align: center;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    width: 90%;
    margin: auto;
  }
  .demos li {
    width: 30%;
    list-style-type:none;
    margin: 12px auto;
    background: #fff;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.20);
    border-radius: 8px;
    overflow: hidden;
  }
  .demos li span {
    display: inline-block;
    padding: 10px 0;
  }
  .demos li a {
    color: #34495e;
  }
  .footer {
    background-color: #01040b;
    color: #89a;
    overflow: hidden;
  }
  .footer .ft-info {
    padding: 50px 0 30px;
    display: table;
    margin: auto;
    width: 80%;
    overflow: hidden;
  }
  .footer dt {
    font-weight: bold;
    font-size: 1.0rem;
  }
  .footer dl {
    display: table-cell;
    text-align: left;
    white-space: nowrap;
  }
  .footer dd {
    margin: 0;
    overflow: hidden;
  }
  .footer a {
    color: #567;
    font-size: 0.9rem;
    display: block;
  }
  .footer .ft-copy {
    padding: 20px 0;
    border-top: 1px solid #345;
    font-size: 0.9rem;
    color: #567;
    text-align: center;
  }
  #more-demos {
    width: 160px;
    height: 48px;
    border: 2px solid #178C4E;
    border-radius: 100px;
    text-align: center;
    line-height: 48px;
    margin: 60px auto;
  }
  #more-demos a {
    text-decoration: none;
  }
  
  /* article {
    z-index: 99999;
    background: #fff;
  } */
</style>

<div class="wrap">
  <div id="features"></div>

  <h1>使用范例</h1>

  <div class="info">通过SpriteJS，您可以快速实现不同组合的动画效果</div>

  <ul class="demos">
    <li>
      <a href="/demo">
        <img src="/res/demos/quick_start.png">
        <span>quick start</span>
      </a>
    </li>
    <li>
      <a href="/demo">
        <img src="/res/demos/basic_sprites.png">
        <span>basic sprites</span>
      </a>
    </li>
    <li>
      <a href="/demo">
        <img src="/res/demos/textures.png">
        <span>sprite &amp; textures</span>
      </a>
    </li>
    <li>
      <a href="/demo">
        <img src="/res/demos/labels.png">
        <span>labels</span>
      </a>
    </li>
    <li>
      <a href="/demo/">
        <img src="/res/demos/buttons.png">
        <span>buttons</span>
      </index>
    </li>
    <li>
      <a href="/demo">
        <img src="/res/demos/transforms.png">
        <span>transforms</span>
      </a>
    </li>
  </ul>

  <div id="more-demos"><a href="/demo">更多范例</a></div>

  <div class="footer">
    <div class="ft-info">
      <dl>
        <dt>友情链接</dt>
        <dd>
          <a href="https://75team.com/">奇舞团</a>
          <a href="http://study.qiyun.360.cn/">奇舞学院</a>
        </dd>
      </dl>
      <dl>
        <dt>其他项目</dt>
        <dd>
          <a href="https://thinkjs.org/">ThinkJS</a>
          <a href="https://github.com/75team/firekylin">FireKylin</a>
        </dd>
      </dl>
      <dl>
        <dt>切换语言</dt>
        <dd>
          <a href="#/zh-cn/index">简体中文</a>
          <a href="#/en/index">英文</a>
        </dd>
      </dl>
      <dl>
        <dt>参与项目</dt>
        <dd>
          <a href="https://github.com/spritejs/spritejs">Github 源码</a>
          <a href="https://github.com/spritejs/spritejs/issues">问题反馈</a>
        </dd>
      </dl>
      <dl>
        <dt>合作伙伴</dt>
        <dd>
          <a href="https://weekly.75team.com/">奇舞周刊</a>
          <a href="http://zcfy.cc">众成翻译</a>
        </dd>
      </dl>
    </div>
    <div class="ft-copy">@2017 - 2018 SpriteJS Team</div>
  </div>
</div>

<script src="/js/coverpage.js"></script>
