<?php if ($main == "main") { ?>
<div class="modal-wrap" data-modal="candidate_modal">
	<div class="modal-body">
		<div class="modal-content">
      <div class="result-icecream">
        <div class="frame">
          <img src="/assets/images/sub/contest_result_frame.png" alt="">
        </div>
        <div class="title"></div>
        <div class="flavor">
          <div class="img img-01"></div>
          <div class="img img-02"></div>
          <div class="img img-03"></div>
          <div class="img img-04"></div>
          <div class="img img-05"></div>
          <div class="img img-06"></div>
        </div>
        <div class="cone">
          <img src="/assets/images/sub/contest_visual_cone.png" alt="">
        </div>
        <div class="selected">
          <p class="selected-flavor"><span></span></p>
          <p class="selected-ribbon"><span></span></p>
          <p class="selected-topping"><span></span></p>
        </div>
      </div>
		</div>
	</div>
</div>

<div class="modal-wrap" data-modal="close_modal">
	<div class="modal-body">
		<div class="modal-content">
			<!-- <img src="/assets/images/common/close_popup.png" alt=""> -->
      <!-- <img src="/assets/images/common/vote_popup.png" alt=""> -->
			<img src="/assets/images/common/20220429_popup.png" alt="">
			<a href="https://api.happypointcard.com/page/event/event-view.spc?eventseq=f6eff3fda1d804c1332dc916b19f108d" target="_blank" style="
				position: absolute;
				left: 18%;
				top: 77%;
				width: 63.5%;
				height: 7%;
			"></a>
			<a href="https://docs.google.com/forms/d/e/1FAIpQLSdE8Nv5wahrMxYm3PLdKstRLOQw0xE-dQjGL-7yCwBp_zrwOA/viewform?usp=sf_link" target="_blank" style="
				position: absolute;
				left: 18%;
				top: 85%;
				width: 63.5%;
				height: 7%;
			"></a>
		</div>
	</div>
</div>

<script>
	var modal_candidate = new modal("candidate_modal");
	var modal_close = new modal("close_modal");

	function contestMainFunc () {
		var date = new Date();
		var day = date.getDate();
		var month = date.getMonth() + 1;
				month = month < 10 ? "0" + month : month;
		var year = date.getFullYear();
		var fullDate = year.toString() + month + day.toString();
		if (parseInt(fullDate, 10) > 20220410) {
			modal_close.open();
			modal_close.callback = function () {
				setCookie("close_popup", "Y", 1);
			}
		}
	}
	// contestMainFunc();

	modal_close.open();
</script>
<?php } ?>

<?php if ($pageClass == "contest") { ?>
<div class="modal-wrap" data-modal="step01">
	<div class="modal-body">
		<div class="modal-content">
      <div class="img">
        <img src="/assets/images/sub/contest_step_01_modal_img_01.png" alt="">
      </div>
      <div class="title">
        ????????? ??????????????? ??????<br>
        ?????? ???????????????.
      </div>
			<div class="form-group">
        <input type="text" class="input input-text" id="stepInput01" placeholder="???????????????" data-target=".modal-step-confirm-01">
      </div>
			<div class="buttons">
				<button class="btn-pack type-round-purple small2 modal-step-confirm-01 disabled">
          <span>??????</span>
        </button>
			</div>
		</div>
	</div>
</div>

<div class="modal-wrap" data-modal="step02">
	<div class="modal-body">
		<div class="modal-content">
      <div class="img">
        <img src="/assets/images/sub/contest_step_02_modal_img_01.png" alt="">
      </div>
      <div class="title">
        ????????? ?????????<br>
        ?????? ???????????????.
      </div>
			<div class="form-group">
        <input type="text" class="input input-text" id="stepInput02" placeholder="???????????????" data-target=".modal-step-confirm-02">
      </div>
			<div class="buttons">
				<button class="btn-pack type-round-purple small2 modal-step-confirm-02 disabled">
          <span>??????</span>
        </button>
			</div>
		</div>
	</div>
</div>

<div class="modal-wrap" data-modal="step03">
	<div class="modal-body">
		<div class="modal-content">
      <div class="img">
        <img src="/assets/images/sub/contest_step_03_modal_img_01.png" alt="">
      </div>
      <div class="title">
        ????????? ?????????<br>
        ?????? ???????????????.
      </div>
			<div class="form-group">
        <input type="text" class="input input-text" id="stepInput03" placeholder="???????????????" data-target=".modal-step-confirm-03">
      </div>
			<div class="buttons">
				<button class="btn-pack type-round-purple small2 modal-step-confirm-03 disabled">
          <span>??????</span>
        </button>
			</div>
		</div>
	</div>
</div>

<div class="modal-wrap" data-modal="step04_01">
	<div class="modal-body">
		<div class="modal-content">
      <div class="img">
        <img src="/assets/images/sub/contest_step_04_modal_img_01.png" alt="">
      </div>
      <div class="title">
        ??????????????? ?????????<br>
        ???????????????.
      </div>
			<div class="form-group">
        <div class="textarea-wrap">
          <textarea type="text" class="input input-text" id="stepInput04_01" placeholder="???????????????" data-target=".modal-step-confirm-04-01"></textarea>
        </div>
      </div>
			<div class="buttons">
				<button class="btn-pack type-round-purple small2 modal-step-confirm-04-01 disabled">
          <span>??????</span>
        </button>
			</div>
		</div>
	</div>
</div>

<div class="modal-wrap" data-modal="step04_02">
	<div class="modal-body">
		<div class="modal-content">
      <div class="img">
        <img src="/assets/images/sub/contest_step_04_modal_img_01.png" alt="">
      </div>
      <div class="title">
        ??????????????? ?????????<br>
        ???????????????.
      </div>
			<div class="form-group">
        <div class="textarea-wrap">
          <textarea type="text" class="input input-text" id="stepInput04_02" placeholder="???????????????" data-target=".modal-step-confirm-04-02"></textarea>
        </div>
      </div>
			<div class="buttons">
				<button class="btn-pack type-round-purple small2 modal-step-confirm-04-02 disabled">
          <span>??????</span>
        </button>
			</div>
		</div>
	</div>
</div>

<div class="modal-wrap" data-modal="step05_01">
	<div class="modal-body">
		<div class="modal-content">
      <div class="img">
        <img src="/assets/images/sub/contest_step_04_modal_img_02.png" alt="">
      </div>
      <div class="title">
        ???????????? ?????? ??????
      </div>
      <p class="text first">
        ??????????????? ???????????? ????????????<br>
        ????????? ?????? ???????????????.
      </p>
      <p class="text">
        ??? ????????? ???????????????<br>
        ?????????????????? ???????????? ???????????????!
      </p>
			<div class="buttons">
				<button class="btn-pack type-round-purple small2 modal-step-confirm-05-01" onclick="modal_step_05_01.close();">
          <span>??????</span>
        </button>
			</div>
		</div>
	</div>
</div>

<div class="modal-wrap" data-modal="step05_02">
	<div class="modal-body">
		<div class="modal-content">
      <div class="img">
        <img src="/assets/images/sub/contest_step_04_modal_img_02.png" alt="">
      </div>
      <div class="title">
        ???????????? ?????? ??????
      </div>
      <p class="text">
        ???????????? ?????? ?????? ???<br>
        ?????? ?????? ?????? ?????? ??????
      </p>
			<div class="buttons">
				<button class="btn-pack type-round-purple small2 modal-step-confirm-05-02" onclick="modal_step_05_02.close();">
          <span>??????</span>
        </button>
			</div>
		</div>
	</div>
</div>

<div class="modal-wrap" data-modal="step_error_select">
	<div class="modal-body">
		<div class="modal-content">
      <div class="img">
        <img src="/assets/images/sub/contest_step_04_modal_img_02.png" alt="">
      </div>
      <div class="title">
        ????????? ???????????????!
      </div>
      <p class="text">
        ???????????? ????????????<br>
        ????????? ??????????????????
      </p>
			<div class="buttons">
				<button class="btn-pack type-round-purple small2 modal-step-confirm-05-02" onclick="modal_step_error_select.close();">
          <span>??????</span>
        </button>
			</div>
		</div>
	</div>
</div>

<div class="modal-wrap" data-modal="step_error">
	<div class="modal-body">
		<div class="modal-content">
      <div class="img">
        <img src="/assets/images/sub/contest_step_04_modal_img_02.png" alt="">
      </div>
      <div class="title">
        ????????? ???????????????!
      </div>
      <p class="text">
        ???????????? ?????? ??? ????????????<br>
        ????????? ??????????????????
      </p>
			<div class="buttons">
				<button class="btn-pack type-round-purple small2 modal-step-confirm-05-02" onclick="modal_step_error.close();">
          <span>??????</span>
        </button>
			</div>
		</div>
	</div>
</div>

<div class="modal-wrap" data-modal="submit_info">
	<div class="modal-body">
		<div class="modal-content">
      <div class="img">
        <img src="/assets/images/sub/contest_step_04_modal_img_02.png" alt="">
      </div>
      <div class="title">
        ????????? ??????????????????!
      </div>
      <p class="text">
				???????????? ?????????<br>
				???????????? ????????????
			</p>
			<div class="buttons">
				<button class="btn-pack type-round-purple small2 modal-step-confirm-05-02" onclick="modal_submit_info.close();">
          <span>??????</span>
        </button>
			</div>
		</div>
	</div>
</div>

<script>
	var modal_step_01 = new modal("step01");
	var modal_step_02 = new modal("step02");
	var modal_step_03 = new modal("step03");
	var modal_step_04_01 = new modal("step04_01");
	var modal_step_04_02 = new modal("step04_02");
	var modal_step_05_01 = new modal("step05_01");
	var modal_step_05_02 = new modal("step05_02");
	var modal_step_error_select = new modal("step_error_select");
	var modal_step_error = new modal("step_error");
	var modal_submit_info = new modal("submit_info");
</script>
<?php } ?>