<header class="header">
  <nav class="gnb">
    <ul class="gnb-list">
      <li class="item <?=$main == "main" ? "active" : ""?>">
        <a href="/">메인으로<br> 이동하기</a>
      </li>
      <li class="item <?=$pageClass == "intro" ? "active" : ""?>">
        <a href="intro.php">아이스크림<br> 콘테스트란?</a>
      </li>
      <li class="item <?=$pageClass == "contest" ? "active" : ""?>">
        <a href="javascript:contestMenuFunc();">콘테스트<br> 참여하기</a>
      </li>
      <li class="item <?=$pageClass == "event" ? "active" : ""?>">
        <a href="event_instagram.php">인증<br> 이벤트</a>
      </li>
    </ul>
  </nav>
</header>