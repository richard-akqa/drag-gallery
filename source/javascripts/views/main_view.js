var DG = DG || {}
DG.VIEW = (function(window){

	var view = {};

	view.mouseListenInit = function(){
		var offsetTop = $("#drag-gallery-container").offset().top,
			offsetLeft = $("#drag-gallery-container").offset().left;

		$(".image").on("mousedown", function(){
			var currentEl = this,
				currentLocationX = $(this).offset().left - offsetLeft,
				currentLocationY = $(this).offset().top - offsetTop;

			$("#drag-gallery-container").on("mousemove", function(e){
				var x = e.pageX - offsetLeft,
					y = e.pageY - offsetTop;
				console.log({"x": x, "y": y});
				$("#drag-gallery-container").on("mouseup", function(e){
					$("#drag-gallery-container").unbind("mousemove");
				});
			})
		});
	}

	view.init = function(){
		view.mouseListenInit();
	};

	$(document).ready(
		view.init
	);

	return view;

}(window));