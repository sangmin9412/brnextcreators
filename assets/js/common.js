NodeList.prototype.forEach = Array.prototype.forEach;

// Modal
var modal = function (el) {
  this.el = document.querySelector("[data-modal=" + el + "]") || null;
  this.callback = null; // 팝업 닫긴 후 실행시킬 함수
  var _this = this;

  var $closeBtn = document.createElement("button");
  $closeBtn.classList.add("modal-btn-close");

  if (this.el === null) {
    return false;
  }

  this.bind = function () {
    this.el.addEventListener("click", function (e) {
      if (e.target === this) {
        _this.close();
      }

      return false;
    });

    if ($closeBtn !== null) {
      $closeBtn.addEventListener("click", function () {
        _this.close();

        return false;
      });
    }
  };

  this.el.querySelector(".modal-body").appendChild($closeBtn);
  this.bind();

  return this;
};

modal.prototype.num = 100;
modal.prototype.open = function () {
  var $modalBody = this.el.querySelector(".modal-body");
  scrollFixed();
  this.el.classList.add("active");
  if ($modalBody.clientHeight > window.innerHeight * 0.9) {
    this.el.classList.add("scroll");
  }
  this.el.style.zIndex = modal.prototype.num;
  modal.prototype.num++;
};
modal.prototype.close = function () {
  var modalArr = document.querySelectorAll("[data-modal]");
  var stat = false;

  this.el.classList.remove("active");
  this.el.classList.remove("scroll");
  this.el.removeAttribute("style");

  if (this.callback !== null && typeof this.callback === "function") {
    this.callback();
  }

  modalArr.forEach(function (v) {
    if (v.classList.contains("active")) {
      stat = true;
      return false;
    }
  });

  if (!stat) {
    scrollAuto();
  }
};
modal.prototype.setHtml = function (str) {
  if (!str) {
    return false;
  }
  this.el.querySelector(".text").innerHTML = str;
};

// Cookie
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);

  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

// ScrollFixed
function scrollFixed() {
  $("html").css({
    overflow: "hidden",
    position: "fixed",
    width: "100%",
    top: -$(window).scrollTop(),
    paddingRight: getScrollWidth() + "px",
  });
}

function scrollAuto() {
  var hTop = $("html").css("top");
  var hTop_2 = hTop.split("px");
  var winTop = Math.abs(hTop_2[0]);

  $("html").removeAttr("style");
  window.scrollTo(0, winTop);
}

// ScrollWidth
function getScrollWidth() {
  var scrWidth = window.innerWidth - document.body.clientWidth;
  return scrWidth;
}

// doc
function doumentClickHide(e, el) {
  var $el = $(el);
  if ($el.hasClass("active")) {
    if ($(e.target).closest(el).length == 0) {
      $el.removeClass("active");
    }
  }
}

//
function elementOffset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    width: rect.width,
    height: rect.height,
  };
}
