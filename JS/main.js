
$(document).ready(function(){
	$(".about").hide();


	$("#clicky").click(function(){
		var $toggle = $(this);
		var $H2 = $("h2");
		$(".about").toggle(function () {
			$H2.text(($(".about").is(':visible') ? 'CLOSE' : 'OPEN') + ' ABOUT ME');
			});
		$(".portrait").css({
				"width" : "100px",
				"height" : "100px"
			});

			

	$("#clickhere").click(function(){
		var $portfolyo = "#portfolyo";
		$($portfolyo).toggle();
		


	});
	
	});
	/*$('#clicky').click(function(){
				$(".about").hide();
				alert("yo");
	});
	/*while (off === false) {
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
			});*/
});