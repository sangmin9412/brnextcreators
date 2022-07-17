var main = {
  data: {
    flavor: _icecream_common.data.flavor,
    ribbon: _icecream_common.data.ribbon,
    topping: _icecream_common.data.topping,
    candidate: _icecream_common.data.candidate,
  },
  element: {},
  slide: function () {
    var mainSwiper = new Swiper(".candidate-slides", {
      direction: "vertical",
      slidesPerView: "auto",
      slidesPerGroup: 3,
      pagination: {
        el: ".main-candidates .swiper-pagination",
        clickable: true,
      },
      on: {
        slideChange: function () {
          var idx = Math.ceil(this.activeIndex / 3);
          $(".main-candidates .swiper-pagination-bullet").removeClass(
            "swiper-pagination-bullet-active"
          );
          $(".main-candidates .swiper-pagination-bullet")
            .eq(idx)
            .addClass("swiper-pagination-bullet-active");
        },
      },
    });
  },
  resultVisualRender: _icecream_common.method.resultVisualRender,
  getCandidateListHtml: function (data) {
    var _this = this;
    var listGrid = 3;
    var listIdx = 0;
    var _html = "";
    var listCount =
      Math.floor(data.length / listGrid) +
      (data.length % listGrid === 0 ? 0 : 1);
    var listArray = Array(listCount)
      .fill()
      .map(function (v) {
        return { data: [] };
      });

    data.forEach(function (v, i) {
      var pathData = _this.getResultData({
        title: "",
        idFlavor1: v.idFlavor1,
        idFlavor2: v.idFlavor2,
        flavorName1: v.flavorName1,
        flavorName2: v.flavorName2,
        idRibbon1: v.idRibbon1,
        idRibbon2: v.idRibbon2,
        ribbonName1: v.ribbonName1,
        ribbonName2: v.ribbonName2,
        idTopping1: v.idTopping1,
        idTopping2: v.idTopping2,
        toppingName1: v.toppingName1,
        toppingName2: v.toppingName2,
      });
      var data = {
        ...v,
        ...pathData,
      };
      listArray[listIdx].data.push(data);
      if ((i + 1) % listGrid === 0) listIdx++;
    });

    var idx = 1;
    _html = listArray.reduce(function (prev, v, i) {
      prev += `
        <li class="candidate-slide swiper-slide" data-hash="${idx}">
          ${v.data.reduce(function (_prev, _v) {
            return (_prev += `
              <div type="button" class="inner">
                <button type="button" class="item" 
                  data-flavor-01-id="${_v.idFlavor1}"
                  data-flavor-02-id="${_v.idFlavor2}"
                  data-flavor-01-name="${_v.flavorName1}"
                  data-flavor-02-name="${_v.flavorName2}"
                  data-ribbon-01-id="${_v.idRibbon1}"
                  data-ribbon-02-id="${_v.idRibbon2}"
                  data-ribbon-01-name="${_v.ribbonName1}"
                  data-ribbon-02-name="${_v.ribbonName2}"
                  data-topping-01-id="${_v.idTopping1}"
                  data-topping-02-id="${_v.idTopping2}"
                  data-topping-01-name="${_v.toppingName1}"
                  data-topping-02-name="${_v.toppingName2}"
                  data-icecream-name="${_v.name}"
                >
                  ${
                    _v.flavorPath01
                      ? `<img src="${_v.flavorPath01}" class="img img-01" />`
                      : ``
                  }
                  ${
                    _v.flavorPath02
                      ? `<img src="${_v.flavorPath02}" class="img img-02" />`
                      : ``
                  }
                  ${
                    _v.ribbonPath01
                      ? `<img src="${_v.ribbonPath01}" class="img img-03" />`
                      : ``
                  }
                  ${
                    _v.ribbonPath02
                      ? `<img src="${_v.ribbonPath02}" class="img img-04" />`
                      : ``
                  }
                  ${
                    _v.toppingPath01
                      ? `<img src="${_v.toppingPath01}" class="img img-05" />`
                      : ``
                  }
                  ${
                    _v.toppingPath02
                      ? `<img src="${_v.toppingPath02}" class="img img-06" />`
                      : ``
                  }
                </button>
              </div>
            `);
          }, "")}
        </li>
      `;
      if ((i + 1) % 3 === 0) {
        idx++;
      }
      return prev;
    }, "");

    return _html;
  },
  getResultData: _icecream_common.method.getResultData,
  getIcecream: _icecream_common.method.getIcecream,
  bind: function () {
    var _this = this;
    this.element.candidateList.on(
      "click",
      ".candidate-slide .item",
      function () {
        var data = _this.getResultData({
          title: $(this).attr("data-icecream-name"),
          idFlavor1: parseInt($(this).attr("data-flavor-01-id"), 10),
          idFlavor2: parseInt($(this).attr("data-flavor-02-id"), 10),
          flavorName1: $(this).attr("data-flavor-01-name"),
          flavorName2: $(this).attr("data-flavor-02-name"),
          idRibbon1: parseInt($(this).attr("data-ribbon-01-id"), 10),
          idRibbon2: parseInt($(this).attr("data-ribbon-02-id"), 10),
          ribbonName1: $(this).attr("data-ribbon-01-name"),
          ribbonName2: $(this).attr("data-ribbon-02-name"),
          idTopping1: parseInt($(this).attr("data-topping-01-id"), 10),
          idTopping2: parseInt($(this).attr("data-topping-02-id"), 10),
          toppingName1: $(this).attr("data-topping-01-name"),
          toppingName2: $(this).attr("data-topping-02-name"),
        });
        _this.resultVisualRender(
          data,
          ".modal-wrap[data-modal='candidate_modal']"
        );
        modal_candidate.open();
      }
    );
  },
  init: function () {
    this.element.candidateList = $(".candidate-list");

    this.element.candidateList.append(
      this.getCandidateListHtml(this.data.candidate)
    );
    this.bind();
    this.slide();
  },
};
