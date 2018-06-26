<style>
  @font-face {
    font-family: 'pfang';
    src: url('http://s6.qhres.com/static/dc42fa0ad4e7e042.ttf');
  }
  main {
    display: none;
    font-family: 'pfang';
    font-smoothing: antialiased;
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
    padding-bottom: 56.25%;
    background: #eee;
  }
  .markdown-section h1 {
    text-align: center;
    margin-top: 60px;
    font-size: 3rem;
  }
  .markdown-section .info {
    text-align: center;
    font-size: 1.3rem;
    margin: 20px auto 60px;
  }
  .footer {
    font-family:  Source Sans Pro,Helvetica Neue,Arial,sans-serif;
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
    margin-bottom:0.3rem;
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
    line-height: 1.5rem;
    text-decoration: none;
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
    transition: .3s all ease-in-out;
  }
  #more-demos:hover{
    background: #178C4E;
  }
  #more-demos:hover a {
    color: white;
  }

  #more-demos a {
    display: block;
    color: #178C4E;
    text-decoration: none;
  }

  article {
    z-index: 99999;
    background: #fff;
  }
</style>

<div class="wrap">
  <div id="features"></div>

  <h1>使用范例</h1>

  <div class="info">通过SpriteJS，您可以快速实现不同组合的动画效果</div>

  <ul class="demos">
    <li>
      <a href="/demo/#">
        <img src="/res/demos/quick_start.png">
        <span>quick start</span>
      </a>
    </li>
    <li>
      <a data-nosearch href="/demo/#basic_sprites">
        <img src="/res/demos/basic_sprites.png">
        <span>basic sprites</span>
      </a>
    </li>
    <li>
      <a data-nosearch href="/demo/#path_groups">
        <img src="/res/demos/textures.png">
        <span>path &amp; groups</span>
      </a>
    </li>
    <li>
      <a data-nosearch href="/demo/#labels">
        <img src="/res/demos/labels.png">
        <span>labels</span>
      </a>
    </li>
    <li>
      <a data-nosearch href="/demo/#buttons">
        <img src="/res/demos/buttons.png">
        <span>buttons</span>
      </index>
    </li>
    <li>
      <a data-nosearch href="/demo/#transforms">
        <img src="/res/demos/transforms.png">
        <span>transforms</span>
      </a>
    </li>
  </ul>

  <div id="more-demos"><a href="/#/zh-cn/examples" target="_blank">更多范例</a></div>

  <div class="footer">
    <div class="ft-info">
      <dl>
        <dt>友情链接</dt>
        <dd>
          <a href="https://75team.com/" target="_blank">奇舞团</a>
          <a href="http://study.qiyun.360.cn/" target="_blank">奇舞学院</a>
          <a href="https://gitee.com/qihoo360/spriteJS" target="_blank">码云</a>
        </dd>
      </dl>
      <dl>
        <dt>其他项目</dt>
        <dd>
          <a href="https://thinkjs.org/" target="_blank">ThinkJS</a>
          <a href="https://github.com/75team/firekylin" target="_blank">FireKylin</a>
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
          <a href="https://github.com/spritejs/spritejs" target="_blank">Github 源码</a>
          <a href="https://github.com/spritejs/spritejs/issues" target="_blank">问题反馈</a>
        </dd>
      </dl>
      <dl>
        <dt>合作伙伴</dt>
        <dd>
          <a href="https://weekly.75team.com/" target="_blank">奇舞周刊</a>
          <a href="http://zcfy.cc" target="_blank">众成翻译</a>
        </dd>
      </dl>
    </div>
    <div class="ft-copy">@2017 - 2018 SpriteJS Team</div>
  </div>
</div>

<script src="/js/coverpage.js"></script>
