
$(document).ready(function(){
	var off = false;
	var clicked = false;
	$(".about").hide();
	
	while (off === false) {
		if (clicked === false) {
			$("#clicky").click(function(){
				$(".about").show();
				$(".portrait").css({
					"width" : "100px",
					"height" : "100px"
				});
				$("H2").text("CLICK TO CLOSE ABOUT ME");
				clicked = true;
				return clicked;
			});
		
		}
		else if (clicked === true) {
			$("#clicky").click(function(){
				$(".about").hide();
				clicked = false;
				return clicked;
			});
		};
	};
});