var sub_event = {
  init: function () {
    var hashtagClipboard = new ClipboardJS("#btnHashtagClipboard");
    hashtagClipboard.on("success", function () {
      alert("정상적으로 복사되었습니다.");
    });
  },
};
