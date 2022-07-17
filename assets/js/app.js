$(function () {
  var $body = $("body");

  if ($body.hasClass("main")) {
    main.init();
    main.slide();
  }
  if ($body.hasClass("sub")) {
  }
  if ($body.hasClass("event")) {
    sub_event.init();
  }
  if ($body.hasClass("contest")) {
    contest.init();
  }
});
