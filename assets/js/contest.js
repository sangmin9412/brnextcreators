var contest = {
  data: {
    flavor: _icecream_common.data.flavor,
    ribbon: _icecream_common.data.ribbon,
    topping: _icecream_common.data.topping,
    svg: {
      flavor: [],
      ribbon: [],
      topping: [],
    },
  },
  state: {
    step: 1,
    selec_slide_ref: null,
    selected_flavor_01: false,
    selected_flavor_02: false,
    selected_ribbon_01: false,
    selected_ribbon_02: false,
    selected_topping_01: false,
    selected_topping_02: false,
  },
  userData: {
    flavor_id_01: "",
    flavor_name_01: "", // 주관식만 입력
    flavor_id_02: "",
    flavor_name_02: "", // 주관식만 입력
    ribbon_id_01: "",
    ribbon_name_01: "", // 주관식만 입력
    ribbon_id_02: "",
    ribbon_name_02: "", // 주관식만 입력
    topping_id_01: "",
    topping_name_01: "", // 주관식만 입력
    topping_id_02: "",
    topping_name_02: "", // 주관식만 입력
    icecream_name: "",
    icecream_description: "",
    userName: "",
    userPhone: "",
    happyId: "",
    agreement: "", // Y or N
  },
  elements: {},
  saveData: function () {},
  selectSlideRemove: function () {
    this.state.selec_slide_ref.destroy();
    this.state.selec_slide_ref = undefined;
    this.elements.selectList.empty();
  },
  resultVisualSVGRender: _icecream_common.method.resultVisualSVGRender,
  titleRender: function () {
    if (this.state.step === 1) {
      this.elements.stepTitle.attr({
        src: "/assets/images/sub/contest_step_01_title.png",
        alt: "STEP. 01 아이스크림 맛 선택하기",
      });
    }
    if (this.state.step === 2) {
      this.elements.stepTitle.attr({
        src: "/assets/images/sub/contest_step_02_title.png",
        alt: "STEP. 02 리본 선택하기",
      });
    }
    if (this.state.step === 3) {
      this.elements.stepTitle.attr({
        src: "/assets/images/sub/contest_step_03_title.png",
        alt: "STEP. 03 토핑 선택하기",
      });
    }
    if (this.state.step === 4) {
      this.elements.stepTitle.attr({
        src: "/assets/images/sub/contest_step_04_title.png",
        alt: "STEP. 04 아이스크림 이름 정하기",
      });
    }
  },
  visualRendar: function () {
    var flavor_path_01 = "";
    var flavor_path_02 = "";
    var ribbon_path_01 = "";
    var ribbon_path_02 = "";
    var topping_path_01 = "";
    var topping_path_02 = "";

    if (this.state.selected_flavor_01)
      flavor_path_01 = this.getIcecream(
        "flavor",
        this.userData.flavor_id_01
      ).pathApplyWhole;
    if (this.state.selected_flavor_02)
      flavor_path_02 = this.getIcecream(
        "flavor",
        this.userData.flavor_id_02
      ).pathApplyPart;
    if (this.state.selected_ribbon_01)
      ribbon_path_01 = this.getIcecream(
        "ribbon",
        this.userData.ribbon_id_01
      ).path_apply;
    if (this.state.selected_ribbon_02)
      ribbon_path_02 = this.getIcecream(
        "ribbon",
        this.userData.ribbon_id_02
      ).path_apply2;
    if (this.state.selected_topping_01)
      topping_path_01 = this.getIcecream(
        "topping",
        this.userData.topping_id_01
      ).path_apply;
    if (this.state.selected_topping_02)
      topping_path_02 = this.getIcecream(
        "topping",
        this.userData.topping_id_02
      ).path_apply2;

    this.elements.visualIcecreamImg_01.css(
      "background-image",
      "url(" + flavor_path_01 + ")"
    );
    this.elements.visualIcecreamImg_02.css(
      "background-image",
      "url(" + flavor_path_02 + ")"
    );
    this.elements.visualIcecreamImg_03.css(
      "background-image",
      "url(" + ribbon_path_01 + ")"
    );
    this.elements.visualIcecreamImg_04.css(
      "background-image",
      "url(" + ribbon_path_02 + ")"
    );
    this.elements.visualIcecreamImg_05.css(
      "background-image",
      "url(" + topping_path_01 + ")"
    );
    this.elements.visualIcecreamImg_06.css(
      "background-image",
      "url(" + topping_path_02 + ")"
    );
  },
  selectSlideRender: function () {
    this.elements.selectList.append(this.getSelectSlideHtml());

    this.state.selec_slide_ref = new Swiper(".select-slides", {
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      pagination: {
        el: ".contest-select .swiper-pagination",
        clickable: true,
      },
    });
  },
  selectedItemRender: function () {
    var defaulText = "";
    var firstText = "";
    var secondText = "";
    var selected_flavor_01 = this.state.selected_flavor_01;
    var selected_flavor_02 = this.state.selected_flavor_02;
    var selected_ribbon_01 = this.state.selected_ribbon_01;
    var selected_ribbon_02 = this.state.selected_ribbon_02;
    var selected_topping_01 = this.state.selected_topping_01;
    var selected_topping_02 = this.state.selected_topping_02;
    var flavor_id_01 = this.userData.flavor_id_01;
    var flavor_id_02 = this.userData.flavor_id_02;
    var ribbon_id_01 = this.userData.ribbon_id_01;
    var ribbon_id_02 = this.userData.ribbon_id_02;
    var topping_id_01 = this.userData.topping_id_01;
    var topping_id_02 = this.userData.topping_id_02;

    if (this.state.step === 1) {
      defaulText = "아이스크림 맛을 선택하세요.";
      firstText = defaulText;
      secondText = defaulText;

      if (selected_flavor_01) {
        if (flavor_id_01 !== 25) {
          firstText = this.getIcecream("flavor", flavor_id_01).name;
        }
        if (flavor_id_01 === 25) {
          firstText = this.userData.flavor_name_01;
        }

        if (selected_flavor_02) {
          if (flavor_id_02 !== 25) {
            secondText = this.getIcecream("flavor", flavor_id_02).name;
          }
          if (flavor_id_02 === 25) {
            secondText = this.userData.flavor_name_02;
          }
        }
      }
    }
    if (this.state.step === 2) {
      defaulText = "리본을 선택하세요.";
      firstText = defaulText;
      secondText = defaulText;

      if (selected_ribbon_01) {
        if (ribbon_id_01 !== 11) {
          firstText = this.getIcecream("ribbon", ribbon_id_01).name;
        }
        if (ribbon_id_01 === 11) {
          firstText = this.userData.ribbon_name_01;
        }

        if (selected_ribbon_02) {
          if (ribbon_id_02 !== 11) {
            secondText = this.getIcecream("ribbon", ribbon_id_02).name;
          }
          if (ribbon_id_02 === 11) {
            secondText = this.userData.ribbon_name_02;
          }
        }
      }
    }
    if (this.state.step === 3) {
      defaulText = "토핑을 선택하세요.";
      firstText = defaulText;
      secondText = defaulText;

      if (selected_topping_01) {
        if (topping_id_01 !== 25) {
          firstText = this.getIcecream("topping", topping_id_01).name;
        }
        if (topping_id_01 === 25) {
          firstText = this.userData.topping_name_01;
        }

        if (selected_topping_02) {
          if (topping_id_02 !== 25) {
            secondText = this.getIcecream("topping", topping_id_02).name;
          }
          if (topping_id_02 === 25) {
            secondText = this.userData.topping_name_02;
          }
        }
      }
    }

    this.elements.seledtedFirst.text(firstText);
    this.elements.seledtedSecond.text(secondText);
  },
  selectItemConfirmRender: function () {
    var obj = {
      title: "",
      idFlavor1: this.userData.flavor_id_01,
      idFlavor2: this.userData.flavor_id_02,
      flavorName1: this.userData.flavor_name_01,
      flavorName2: this.userData.flavor_name_02,
      idRibbon1: this.userData.ribbon_id_01,
      idRibbon2: this.userData.ribbon_id_02,
      ribbonName1: this.userData.ribbon_name_01,
      ribbonName2: this.userData.ribbon_name_02,
      idTopping1: this.userData.topping_id_01,
      idTopping2: this.userData.topping_id_02,
      toppingName1: this.userData.topping_name_01,
      toppingName2: this.userData.topping_name_02,
    };

    var data = this.getResultData(obj, "svg");

    if ($.trim(data.selectedRibbon) === "#undefined")
      this.elements.confirmRibbon.parent().hide();
    if ($.trim(data.selectedTopping) === "#undefined")
      this.elements.confirmTopping.parent().hide();

    this.elements.confirmFlavor.text(data.selectedFlavor);
    this.elements.confirmRibbon.text(data.selectedRibbon);
    this.elements.confirmTopping.text(data.selectedTopping);
  },
  activateNextPrevBtn: function () {
    this.elements.prevBtn.removeClass("active");
    this.elements.nextBtn.removeClass("active");
    if (this.state.step === 1) this.elements.nextBtn.addClass("disabled");
    if (this.state.step > 0) this.elements.nextBtn.addClass("active");
    if (this.state.step > 1) this.elements.prevBtn.addClass("active");
    if (this.state.step === 1 && this.state.selected_flavor_01)
      this.elements.nextBtn.removeClass("disabled");
    if (this.state.step === 2 && this.state.selected_ribbon_01)
      this.elements.nextBtn.removeClass("disabled");
    if (this.state.step === 3 && this.state.selected_topping_01)
      this.elements.nextBtn.removeClass("disabled");
  },
  activateDeSelectBtn: function () {
    var step = this.state.step;
    var flavor_id_01 = this.userData.flavor_id_01;
    var flavor_id_02 = this.userData.flavor_id_02;
    var ribbon_id_01 = this.userData.ribbon_id_01;
    var ribbon_id_02 = this.userData.ribbon_id_02;
    var topping_id_01 = this.userData.topping_id_01;
    var topping_id_02 = this.userData.topping_id_02;

    $(".deselect-btn").removeClass("active");

    if (step === 1 && this.state.selected_flavor_01) {
      this.elements.deSelectFirst
        .attr({
          "data-deselect-type": "flavor",
          "data-deselect-id": flavor_id_01,
        })
        .addClass("active");
    }
    if (step === 1 && this.state.selected_flavor_02) {
      this.elements.deSelectSecond
        .attr({
          "data-deselect-type": "flavor",
          "data-deselect-id": flavor_id_02,
        })
        .addClass("active");
    }
    if (step === 2 && this.state.selected_ribbon_01) {
      this.elements.deSelectFirst
        .attr({
          "data-deselect-type": "ribbon",
          "data-deselect-id": ribbon_id_01,
        })
        .addClass("active");
    }
    if (step === 2 && this.state.selected_ribbon_02) {
      this.elements.deSelectSecond
        .attr({
          "data-deselect-type": "ribbon",
          "data-deselect-id": ribbon_id_02,
        })
        .addClass("active");
    }
    if (step === 3 && this.state.selected_topping_01) {
      this.elements.deSelectFirst
        .attr({
          "data-deselect-type": "topping",
          "data-deselect-id": topping_id_01,
        })
        .addClass("active");
    }
    if (step === 3 && this.state.selected_topping_02) {
      this.elements.deSelectSecond
        .attr({
          "data-deselect-type": "topping",
          "data-deselect-id": topping_id_02,
        })
        .addClass("active");
    }
  },
  activateList: function () {
    var flavor_id_01 = this.userData.flavor_id_01;
    var flavor_id_02 = this.userData.flavor_id_02;
    var ribbon_id_01 = this.userData.ribbon_id_01;
    var ribbon_id_02 = this.userData.ribbon_id_02;
    var topping_id_01 = this.userData.topping_id_01;
    var topping_id_02 = this.userData.topping_id_02;

    $(".select-item").removeClass("active");

    if (this.state.selected_flavor_01) {
      $(
        ".select-btn[data-select-type='flavor'][data-select-id=" +
          flavor_id_01 +
          "]"
      )
        .parent()
        .addClass("active");
    }
    if (this.state.selected_flavor_02) {
      $(
        ".select-btn[data-select-type='flavor'][data-select-id=" +
          flavor_id_02 +
          "]"
      )
        .parent()
        .addClass("active");
    }

    if (this.state.selected_ribbon_01) {
      $(
        ".select-btn[data-select-type='ribbon'][data-select-id=" +
          ribbon_id_01 +
          "]"
      )
        .parent()
        .addClass("active");
    }
    if (this.state.selected_ribbon_02) {
      $(
        ".select-btn[data-select-type='ribbon'][data-select-id=" +
          ribbon_id_02 +
          "]"
      )
        .parent()
        .addClass("active");
    }

    if (this.state.selected_topping_01) {
      $(
        ".select-btn[data-select-type='topping'][data-select-id=" +
          topping_id_01 +
          "]"
      )
        .parent()
        .addClass("active");
    }
    if (this.state.selected_topping_02) {
      $(
        ".select-btn[data-select-type='topping'][data-select-id=" +
          topping_id_02 +
          "]"
      )
        .parent()
        .addClass("active");
    }
  },
  getIcecream: _icecream_common.method.getIcecream,
  getResultData: _icecream_common.method.getResultData,
  getFlavorSVGOne: _icecream_common.method.getFlavorSVGOne,
  getRibbonSVGOne: _icecream_common.method.getRibbonSVGOne,
  getToppingSVGOne: _icecream_common.method.getToppingSVGOne,
  getSelectSlideHtml: function () {
    var _html = "";
    var _id = "";
    var _pathSelect = "";
    var type = "";
    if (this.state.step === 1) {
      _id = "idFlavor";
      _pathSelect = "pathSelect";
      type = "flavor";
      return (_html = this.data.flavor.reduce(handler, ""));
    }
    if (this.state.step === 2) {
      _id = "idRibbon";
      _pathSelect = "path_select";
      type = "ribbon";
      return (_html = this.data.ribbon.reduce(handler, ""));
    }
    if (this.state.step === 3) {
      _id = "idTopping";
      _pathSelect = "path_select";
      type = "topping";
      return (_html = this.data.topping.reduce(handler, ""));
    }

    function handler(prev, v) {
      return (prev += `
        <li class="select-item swiper-slide" >
          <button type="button" class="select-btn inner"
            data-select-type="${type}"
            data-select-id="${v[_id]}"
            data-select-name="${v.name}"
          >
            <div class="img"
              style="background-image: url('${v[_pathSelect]}')"
            ></div>
          </button>
        </li>
      `);
    }
  },
  bind: function () {
    var _this = this;

    this.elements.selectList.on(
      "click",
      ".select-item > button",
      selectHandler
    );

    this.elements.modalStepConfirmBtn01.on("click", modalConfirmBtnHandler);
    this.elements.modalStepConfirmBtn02.on("click", modalConfirmBtnHandler);
    this.elements.modalStepConfirmBtn03.on("click", modalConfirmBtnHandler);
    this.elements.modalStepConfirmBtn04_01.on("click", modalConfirmBtnHandler);
    this.elements.modalStepConfirmBtn04_02.on("click", modalConfirmBtnHandler);

    this.elements.deSelectFirst.on("click", deselectHandler);
    this.elements.deSelectSecond.on("click", deselectHandler);

    this.elements.prevBtn.on("click", btnNextPrevHandler);
    this.elements.nextBtn.on("click", btnNextPrevHandler);

    this.elements.modalInput01.on("input", modalInputHandler);
    this.elements.modalInput02.on("input", modalInputHandler);
    this.elements.modalInput03.on("input", modalInputHandler);
    this.elements.modalInput04_01.on("input", modalInputHandler);
    this.elements.modalInput04_02.on("input", modalInputHandler);

    this.elements.icecreamNameBtn.on("click", function () {
      modal_step_04_01.open();
    });
    this.elements.icecreamConceptBtn.on("click", function () {
      modal_step_04_02.open();
    });

    this.elements.confirmBtn.on("click", function () {
      if (!$(this).hasClass("disabled")) {
        var obj = {
          title: _this.userData.icecream_name,
          idFlavor1: _this.userData.flavor_id_01,
          idFlavor2: _this.userData.flavor_id_02,
          flavorName1: _this.userData.flavor_name_01,
          flavorName2: _this.userData.flavor_name_02,
          idRibbon1: _this.userData.ribbon_id_01,
          idRibbon2: _this.userData.ribbon_id_02,
          ribbonName1: _this.userData.ribbon_name_01,
          ribbonName2: _this.userData.ribbon_name_02,
          idTopping1: _this.userData.topping_id_01,
          idTopping2: _this.userData.topping_id_02,
          toppingName1: _this.userData.topping_name_01,
          toppingName2: _this.userData.topping_name_02,
        };

        var data = _this.getResultData(obj, "svg");

        _this.state.step = 5;
        _this.elements.sectionVisual.css("display", "none");
        _this.elements.sectionConfirm.css("display", "none");

        _this.resultVisualSVGRender(data, ".contest-result .result-icecream");
        _this.elements.sectionResult.css("display", "block");
        _this.elements.htmlBody.animate(
          {
            scrollTop: 0,
          },
          0
        );
        var target = document.querySelector(".contest-result .result-icecream");
        html2canvas(target).then(function (canvas) {
          console.log("preload");
        });
      }
    });

    this.elements.downloadBtn.on("click", function () {
      var scale = window.innerWidth > 720 ? 2 : 3;
      var target = document.querySelector(".contest-result .result-icecream");
      var width = target.clientWidth;
      var height = target.clientHeight;
      target.style.width = width + "px";
      target.style.height = height + "px";

      var svgElements = target.querySelectorAll("svg");
      svgElements.forEach(function (item) {
        item.setAttribute("width", item.getBoundingClientRect().width);
        item.setAttribute("height", item.getBoundingClientRect().height);
        item.style.width = null;
        item.style.height = null;
      });

      html2canvas(target, {
        scale: scale,
      }).then(function (canvas) {
        if (
          navigator.userAgent.indexOf("NAVER(inapp;") > -1 ||
          navigator.userAgent.indexOf("KAKAOTALK") > -1
        ) {
          alert("이미지를 눌러 다운로드를 진행해주세요.");
          target.querySelector(".frame").style.display = "none";
          target.querySelector(".title").style.display = "none";
          target.querySelector(".flavor").style.display = "none";
          target.querySelector(".cone").style.display = "none";
          target.querySelector(".selected").style.display = "none";
          var src = canvas.toDataURL("image/jpeg");
          target.querySelector(".app-img").style.display = "block";
          target.querySelector(".app-img img").setAttribute("src", src);
          return;
        }
        var el = document.querySelector("#downloadTrigger");
        el.href = canvas.toDataURL("image/jpeg");
        el.download = "icecream.jpg";
        el.click();
        target.removeAttribute("style");
      });
    });

    this.elements.userName.on("input", userInputHandler);
    this.elements.userPhone.on("input", userInputHandler);
    this.elements.userHappyId.on("input", userInputHandler);

    this.elements.userAgree.on("click", function () {
      var val = $(this).prop("checked") ? "Y" : "N";
      _this.userData.agreement = val;
      if ($(this).prop("checked")) {
        modal_step_05_02.open();
      }

      if (
        _this.userData.userName &&
        _this.userData.userPhone &&
        _this.userData.agreement === "Y"
      ) {
        _this.elements.submitBtn.removeClass("disabled");
      } else {
        _this.elements.submitBtn.addClass("disabled");
      }
    });

    this.elements.submitBtn.on("click", submitHandler);

    function selectHandler() {
      var _id = parseInt($(this).attr("data-select-id"), 10);

      if (_this.state.step === 1) {
        var selected_flavor_01 = _this.state.selected_flavor_01;
        var selected_flavor_02 = _this.state.selected_flavor_02;

        if (selected_flavor_01 && selected_flavor_02) return;

        _this.elements.visualIcecreamImg_default.hide();

        if (_id === 25) {
          modal_step_01.open();
          _this.elements.modalStepConfirmBtn01.attr("data-select-id", _id);
        } else {
          if (selected_flavor_01 && _this.userData.flavor_id_01 === _id) return;
          if (selected_flavor_02 && _this.userData.flavor_id_02 === _id) return;

          if (!selected_flavor_01) {
            _this.state.selected_flavor_01 = true;
            _this.userData.flavor_id_01 = _id;
          }
          if (selected_flavor_01 && !selected_flavor_02) {
            _this.state.selected_flavor_02 = true;
            _this.userData.flavor_id_02 = _id;
          }
        }
      }
      if (_this.state.step === 2) {
        var selected_ribbon_01 = _this.state.selected_ribbon_01;
        var selected_ribbon_02 = _this.state.selected_ribbon_02;

        if (selected_ribbon_01 && selected_ribbon_02) return;

        if (_id === 11) {
          modal_step_02.open();
          _this.elements.modalStepConfirmBtn02.attr("data-select-id", _id);
        } else {
          if (selected_ribbon_01 && _this.userData.ribbon_id_01 === _id) return;
          if (selected_ribbon_02 && _this.userData.ribbon_id_02 === _id) return;

          if (!selected_ribbon_01) {
            _this.state.selected_ribbon_01 = true;
            _this.userData.ribbon_id_01 = _id;
          }
          if (selected_ribbon_01 && !selected_ribbon_02) {
            _this.state.selected_ribbon_02 = true;
            _this.userData.ribbon_id_02 = _id;
          }
        }
      }
      if (_this.state.step === 3) {
        var selected_topping_01 = _this.state.selected_topping_01;
        var selected_topping_02 = _this.state.selected_topping_02;

        if (selected_topping_01 && selected_topping_02) return;

        if (_id === 25) {
          modal_step_03.open();
          _this.elements.modalStepConfirmBtn03.attr("data-select-id", _id);
        } else {
          if (selected_topping_01 && _this.userData.topping_id_01 === _id)
            return;
          if (selected_topping_02 && _this.userData.topping_id_02 === _id)
            return;

          if (!selected_topping_01) {
            _this.state.selected_topping_01 = true;
            _this.userData.topping_id_01 = _id;
          }
          if (selected_topping_01 && !selected_topping_02) {
            _this.state.selected_topping_02 = true;
            _this.userData.topping_id_02 = _id;
          }
        }
      }

      _this.visualRendar();
      _this.selectedItemRender();
      _this.activateList();
      _this.activateDeSelectBtn();
      _this.activateNextPrevBtn();
    }

    function deselectHandler() {
      var type = $(this).attr("data-deselect-type");
      var _id = $(this).attr("data-deselect-id");

      if ($(this).hasClass("first")) {
        if (type === "flavor" && _this.state.selected_flavor_02) {
          modal_step_error_select.open();
          return;
        }
        if (type === "ribbon" && _this.state.selected_ribbon_02) {
          modal_step_error_select.open();
          return;
        }
        if (type === "topping" && _this.state.selected_topping_02) {
          modal_step_error_select.open();
          return;
        }

        if (type === "flavor") {
          _this.userData.flavor_id_01 = "";
          _this.userData.flavor_name_01 = "";
          _this.state.selected_flavor_01 = false;
          _this.elements.visualIcecreamImg_default.show();
        }
        if (type === "ribbon") {
          _this.userData.ribbon_id_01 = "";
          _this.userData.ribbon_name_01 = "";
          _this.state.selected_ribbon_01 = false;
        }
        if (type === "topping") {
          _this.userData.topping_id_01 = "";
          _this.userData.topping_name_01 = "";
          _this.state.selected_topping_01 = false;
        }
      }
      if ($(this).hasClass("second")) {
        if (type === "flavor") {
          _this.userData.flavor_id_02 = "";
          _this.userData.flavor_name_02 = "";
          _this.state.selected_flavor_02 = false;
        }
        if (type === "ribbon") {
          _this.userData.ribbon_id_02 = "";
          _this.userData.ribbon_name_02 = "";
          _this.state.selected_ribbon_02 = false;
        }
        if (type === "topping") {
          _this.userData.topping_id_02 = "";
          _this.userData.topping_name_02 = "";
          _this.state.selected_topping_02 = false;
        }
      }

      _this.visualRendar();
      _this.selectedItemRender();
      _this.activateList();
      _this.activateDeSelectBtn();
      _this.activateNextPrevBtn();
    }

    function btnNextPrevHandler() {
      if ($(this).hasClass("disabled")) return;

      if (
        _this.state.step === 1 ||
        _this.state.step === 2 ||
        _this.state.step === 3
      ) {
        if ($(this).hasClass("step-prev-btn")) {
          _this.state.step -= 1;
        }
        if ($(this).hasClass("step-next-btn")) {
          _this.state.step += 1;
        }
        _this.selectSlideRemove();
        _this.render();
        _this.activateList();
      }
      if (_this.state.step === 4) {
        if ($(this).hasClass("step-next-btn")) {
          _this.elements.htmlBody.animate(
            {
              scrollTop: 0,
            },
            0
          );
          _this.elements.sectionSelect.css("display", "none");
          _this.elements.sectionConfirm.css("display", "block");
          _this.selectItemConfirmRender();
        }
      }
    }

    function modalConfirmBtnHandler() {
      var _id = parseInt($(this).attr("data-select-id"));

      if (
        $(this).hasClass("disabled") &&
        $(this).hasClass("modal-step-confirm-04-02")
      ) {
        alert("최소 30자 이상 입력해주세요.");
        return;
      }

      if (!$(this).hasClass("disabled")) {
        if (_this.state.step === 1) {
          var selected_flavor_01 = _this.state.selected_flavor_01;
          var selected_flavor_02 = _this.state.selected_flavor_02;
          var _val01 = _this.elements.modalInput01.val();

          if (!selected_flavor_01) {
            _this.state.selected_flavor_01 = true;
            _this.userData.flavor_id_01 = _id;
            _this.userData.flavor_name_01 = _val01;
          }

          if (selected_flavor_01 && !selected_flavor_02) {
            _this.state.selected_flavor_02 = true;
            _this.userData.flavor_id_02 = _id;
            _this.userData.flavor_name_02 = _val01;
          }

          _this.elements.modalInput01.val("");
          _this.elements.modalStepConfirmBtn01.addClass("disabled");
          modal_step_01.close();
        }

        if (_this.state.step === 2) {
          var selected_ribbon_01 = _this.state.selected_ribbon_01;
          var selected_ribbon_02 = _this.state.selected_ribbon_02;
          var _val02 = _this.elements.modalInput02.val();

          if (!selected_ribbon_01) {
            _this.state.selected_ribbon_01 = true;
            _this.userData.ribbon_id_01 = _id;
            _this.userData.ribbon_name_01 = _val02;
          }

          if (selected_ribbon_01 && !selected_ribbon_02) {
            _this.state.selected_ribbon_02 = true;
            _this.userData.ribbon_id_02 = _id;
            _this.userData.ribbon_name_02 = _val02;
          }

          _this.elements.modalInput02.val("");
          _this.elements.modalStepConfirmBtn02.addClass("disabled");
          modal_step_02.close();
        }

        if (_this.state.step === 3) {
          var selected_topping_01 = _this.state.selected_topping_01;
          var selected_topping_02 = _this.state.selected_topping_02;
          var _val03 = _this.elements.modalInput03.val();

          if (!selected_topping_01) {
            _this.state.selected_topping_01 = true;
            _this.userData.topping_id_01 = _id;
            _this.userData.topping_name_01 = _val03;
          }

          if (selected_topping_01 && !selected_topping_02) {
            _this.state.selected_topping_02 = true;
            _this.userData.topping_id_02 = _id;
            _this.userData.topping_name_02 = _val03;
          }

          _this.elements.modalInput03.val("");
          _this.elements.modalStepConfirmBtn03.addClass("disabled");
          modal_step_03.close();
        }

        if (
          _this.state.step === 1 ||
          _this.state.step === 2 ||
          _this.state.step === 3
        ) {
          _this.visualRendar();
          _this.selectedItemRender();
          _this.activateList();
          _this.activateDeSelectBtn();
          _this.activateNextPrevBtn();
        }

        if (_this.state.step === 4) {
          var _val04_01 = _this.elements.modalInput04_01.val();
          var _val04_02 = _this.elements.modalInput04_02.val();

          if ($(this).hasClass("modal-step-confirm-04-01")) {
            _this.userData.icecream_name = _val04_01;
            _this.elements.icecreamNameBtn.addClass("active");
            _this.elements.icecreamNameBtn.find("span").text(_val04_01);
            $.trim(_val04_01).length > 0 && $.trim(_val04_02).length >= 30
              ? _this.elements.confirmBtn.removeClass("disabled")
              : _this.elements.confirmBtn.addClass("disabled");
            modal_step_04_01.close();
          }
          if ($(this).hasClass("modal-step-confirm-04-02")) {
            _this.userData.icecream_description = _val04_02;
            _this.elements.icecreamConceptBtn.addClass("active");
            _this.elements.icecreamConceptBtn.find("span").text(_val04_02);
            $.trim(_val04_01).length > 0 && $.trim(_val04_02).length >= 30
              ? _this.elements.confirmBtn.removeClass("disabled")
              : _this.elements.confirmBtn.addClass("disabled");
            modal_step_04_02.close();
          }
          if ($(this).hasClass("modal-step-confirm-04-03")) {
          }
        }
      }
    }

    function modalInputHandler() {
      var $target = $($(this).attr("data-target"));
      var val = $(this).val();
      var cut = $(this).attr("id") === "stepInput04_02" ? 29 : 0;
      $.trim(val).length > cut
        ? $target.removeClass("disabled")
        : $target.addClass("disabled");

      if (
        $(this).attr("id") === "stepInput01" ||
        $(this).attr("id") === "stepInput02" ||
        $(this).attr("id") === "stepInput03"
      ) {
        if ($.trim(val).length > 10) {
          alert("10자 이하로 입력해 주세요");
          $(this).val(val.substr(0, 9));
        }
      }

      if ($(this).attr("id") === "stepInput04_01") {
        if ($.trim(val).length > 12) {
          alert("12자 이하로 입력해 주세요");
          $(this).val(val.substr(0, 19));
        }
      }

      if ($(this).attr("id") === "stepInput04_02") {
        if ($.trim(val).length > 80) {
          alert("30자 이상 80자 이하로 입력해 주세요");
          $(this).val(val.substr(0, 79));
        }
      }

      if (
        $(this).attr("id") === "stepInput04_01" ||
        $(this).attr("id") === "stepInput04_02"
      ) {
        $(this).css("height", "3.7rem");
        $(this).height(this.scrollHeight);
      }
    }

    function userInputHandler() {
      var val = $(this).val();
      if ($(this).attr("id") === "userName") {
        _this.userData.userName = val;
      }
      if ($(this).attr("id") === "userPhone") {
        $(this).val(val.replace(/[^0-9]/g, ""));
        if ($.trim(val).length > 11) {
          alert("11자 이하로 입력해주세요");
          $(this).val(val.substr(0, 11));
        }
        val = $(this).val();
        _this.userData.userPhone = val;
      }
      if ($(this).attr("id") === "userHappyId") {
        _this.userData.happyId = val;
      }

      if (
        _this.userData.userName &&
        _this.userData.userPhone &&
        _this.userData.agreement === "Y"
      ) {
        _this.elements.submitBtn.removeClass("disabled");
      } else {
        _this.elements.submitBtn.addClass("disabled");
      }
    }

    var _submitFlag = true;
    var _submitTimer;
    function submitHandler() {
      if (!$(this).hasClass("disabled")) {
        if (!_this.userData.flavor_id_01) {
          modal_step_error.open();
          return;
        }
        //if (!_this.userData.ribbon_id_01) {
        //modal_step_error.open();
        //return;
        //}
        //if (!_this.userData.topping_id_01) {
        //modal_step_error.open();
        //return;
        //}
        if (_this.userData.agreement !== "Y") {
          modal_step_error.open();
          return;
        }
        if (!_this.userData.icecream_name) {
          modal_step_error.open();
          return;
        }
        if (!_this.userData.icecream_description) {
          modal_step_error.open();
          return;
        }
        if (!_this.userData.userName) {
          modal_step_error.open();
          return;
        }
        if (!_this.userData.userPhone) {
          modal_step_error.open();
          return;
        }

        var dataKeySet = {
          flavor1: _this.userData.flavor_id_01,
          flavorName1: _this.userData.flavor_name_01,
          flavor2: _this.userData.flavor_id_02,
          flavorName2: _this.userData.flavor_name_02,
          ribbon1: _this.userData.ribbon_id_01,
          ribbonName1: _this.userData.ribbon_name_01,
          ribbon2: _this.userData.ribbon_id_02,
          ribbonName2: _this.userData.ribbon_name_02,
          topping1: _this.userData.topping_id_01,
          toppingName1: _this.userData.topping_name_01,
          topping2: _this.userData.topping_id_02,
          toppingName2: _this.userData.topping_name_02,
          icecreamName: _this.userData.icecream_name,
          icecreamDescription: _this.userData.icecream_description,
          userName: _this.userData.userName,
          userPhone: _this.userData.userPhone,
          userHappyId: _this.userData.happyId,
          agreement: _this.userData.agreement,
        };
        var data = {};

        for (var key in dataKeySet) {
          if (dataKeySet[key]) {
            data[key] = dataKeySet[key];
          }
        }

        modal_submit_info.open();

        if (_submitFlag) {
          _submitFlag = false;
          clearTimeout(_submitTimer);
          _submitTimer = setTimeout(function () {
            modal_submit_info.close();
            modal_step_05_01.open();
            modal_step_05_01.callback = function () {
              location.reload();
            };
            setCookie("completed", "Y", 1);

            // $.ajax({
            // 	url: baseURL + "/v1/apply.php",
            // 	method: "POST",
            // 	data: data,
            // 	success: function (res) {
            // 		console.log(res);
            // 		console.log(_this.userData);
            // 		console.log(data);
            // 		modal_submit_info.close();
            // 		if (res.code === 102) {
            // 			alert("참가 신청 실패");
            // 			location.reload();
            // 			return false;
            // 		}
            // 		if (res.code === 801) {
            // 			alert("입력값에 금칙어가 포함되어 있습니다 다시 입력해주세요.");
            // 			location.reload();
            // 			return false;
            // 		}
            // 		if (res.code === 200) {
            // 			modal_step_05_01.open();
            // 			modal_step_05_01.callback = function () {
            // 				location.reload();
            // 			};
            // 			setCookie("completed", "Y", 1);
            // 		}
            // 	},
            // 	error: function (err) {
            // 		console.log(err);
            // 	},
            // });
          }, 200);
        }
      }
    }
  },
  render: function () {
    this.titleRender();
    this.activateDeSelectBtn();
    this.activateNextPrevBtn();
    this.selectedItemRender();
    this.selectSlideRender();
  },
  init: function () {
    console.log(getCookie("completed"));
    if (getCookie("completed") === "Y") {
      setCookie("completed", "", 0);
      location.href = "./event_instagram.html";
    }
    this.data.svg.flavor = getFlavorSVG();
    this.data.svg.ribbon = getRibbonSVG();
    this.data.svg.topping = getToppingSVG();

    console.log(this);

    this.elements.htmlBody = $("html, body");
    this.elements.appRoot = $("#appRoot");
    this.elements.sectionVisual = $(".contest-visual");
    this.elements.sectionSelect = $(".contest-select");
    this.elements.sectionConfirm = $(".contest-confirm");
    this.elements.sectionResult = $(".contest-result");
    this.elements.stepTitle = $(".step-title > img");
    this.elements.visualIcecream = $(".icecream");
    this.elements.visualIcecreamImg_default = $(".icecream .default");
    this.elements.visualIcecreamImg_01 = $(".icecream .img-01");
    this.elements.visualIcecreamImg_02 = $(".icecream .img-02");
    this.elements.visualIcecreamImg_03 = $(".icecream .img-03");
    this.elements.visualIcecreamImg_04 = $(".icecream .img-04");
    this.elements.visualIcecreamImg_05 = $(".icecream .img-05");
    this.elements.visualIcecreamImg_06 = $(".icecream .img-06");
    // step 01, 02, 03 element
    this.elements.selectList = $(".select-list");
    this.elements.seledtedFirst = $(".selected-item.first");
    this.elements.seledtedSecond = $(".selected-item.second");
    this.elements.deSelectFirst = $(".deselect-btn.first");
    this.elements.deSelectSecond = $(".deselect-btn.second");
    this.elements.prevBtn = $(".step-prev-btn");
    this.elements.nextBtn = $(".step-next-btn");
    // step 04 element
    this.elements.confirmFlavor = $(".confirm-flavor");
    this.elements.confirmRibbon = $(".confirm-ribbon");
    this.elements.confirmTopping = $(".confirm-topping");
    this.elements.icecreamNameBtn = $(".icecream-name-btn");
    this.elements.icecreamConceptBtn = $(".icecream-concept-btn");
    this.elements.confirmBtn = $(".confirm-btn");
    // step 05 element
    this.elements.downloadBtn = $(".download-btn");
    this.elements.submitBtn = $(".submit-btn");
    this.elements.userName = $("#userName");
    this.elements.userPhone = $("#userPhone");
    this.elements.userHappyId = $("#userHappyId");
    this.elements.userAgree = $("#userAgree");
    // modal element
    this.elements.modalStepConfirmBtn01 = $(".modal-step-confirm-01");
    this.elements.modalStepConfirmBtn02 = $(".modal-step-confirm-02");
    this.elements.modalStepConfirmBtn03 = $(".modal-step-confirm-03");
    this.elements.modalStepConfirmBtn04_01 = $(".modal-step-confirm-04-01");
    this.elements.modalStepConfirmBtn04_02 = $(".modal-step-confirm-04-02");
    this.elements.modalStepConfirmBtn05_01 = $(".modal-step-confirm-05-01");
    this.elements.modalStepConfirmBtn05_01 = $(".modal-step-confirm-05-02");
    this.elements.modalInput01 = $("#stepInput01");
    this.elements.modalInput02 = $("#stepInput02");
    this.elements.modalInput03 = $("#stepInput03");
    this.elements.modalInput04_01 = $("#stepInput04_01");
    this.elements.modalInput04_02 = $("#stepInput04_02");

    this.bind();
    this.render();
  },
};
