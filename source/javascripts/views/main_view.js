var DG = DG || {}
DG.VIEW = (function(window){

	var view = {};

	view.replaceImg = function(target, newTarget, targetImg, newTargetImg){
		
		$(target).attr("src", newTargetImg);
		$(newTarget).attr("src", targetImg);
	}

	view.mouseListenInit = function(){

		var $el = $("#drag-gallery"),
			offsetTop = $el.offset().top,
			offsetLeft = $el.offset().left,
			target = undefined,
			newTarget = undefined,
			targetImg = undefined,
			newTargetImg = undefined;

		function onMouseDown(e, el){

			if (e.button === 0){	
				target = e.target;
				targetImg = $(target).attr("src");

				$("#mouse-img").html('<img src="' + targetImg + '">');

				$(el).on("mousemove", function(e){
					onMouseMove(e, el);
				})
			}
		}

		function onMouseMove(e, el){
			var x = e.pageX - offsetLeft,
				y = e.pageY - offsetTop;

			$("#mouse-img").css({"top": y, "left": x});
		}

		function onMouseUp(e, el){
			newTarget = e.target;
			newTargetImg = $(newTarget).attr("src");

			$(el).off("mousemove");
			$("#mouse-img").html('');

			if(newTargetImg){
				view.replaceImg(target, newTarget, targetImg, newTargetImg);
			}
		}

		$el.mousedown(function(event){
			event.preventDefault();
			onMouseDown(event, this);
		})

		$el.mouseup(function(event){
			event.preventDefault();
			onMouseUp(event, this);
		})

	}

	view.init = function(){
		view.mouseListenInit();
	};

	$(document).ready(
		view.init
	);

	return view;

}(window));