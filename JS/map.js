function initMap() {
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
	    center: {lat: 37.790530841080766, lng: -122.39915991201997},
	    zoom: 18
	});

	map.setMapTypeId(google.maps.MapTypeId.HYBRID);

	var image = {

		url: "https://www.freebiesupermarket.com/img/ac0fff4bd57a1f125147a5dd275469a4.png",
		scaledSize: new google.maps.Size(50, 50),
	};


	function makeMarker(latitude, longitude, markertitle, popuptext) { 
	var marker = new google.maps.Marker({
	    position: {lat: latitude, lng: longitude},
	    map: map,
	    title: markertitle,
	    icon: image,
	    animation: google.maps.Animation.DROP
  	});

  	var popup = popuptext;

  	var infowindow = new google.maps.InfoWindow({
    	content: popup,
    	backgroundColor: (209, 209, 209)
  	});

  	marker.addListener('click', function() {
    	infowindow.open(map, marker)
  	});

  	}

  	makeMarker(37.790530841080766, -122.39915991201997, 'my fav place !!!1!111', '<div id="infooo">'+
  	'<H1>Home Sweet Home</H1>'+
    '<P>Welcome to the Sephora Coporate Headquarters, where we bug '+ 
    'the heck out of all of the employees (unintentionally).'+ 
    'Sorry!</P>');

    makeMarker(37.784791532111356, -122.40855887532234, 'my second fav place !111!!!1', '<div id="infooo">'+
  	'<H1>YEEEE</H1>'+
    '<P>a store</P>')

    makeMarker(37.72763667887707, -122.47698403894901, 'my third fav place !!!!1!!!!!1', '<div id="infooo">'+
  	'<H1>YEEEE2</H1>'+
    '<P>another store</P>')

    makeMarker(37.798662182986945, -122.43568807840347, 'my fourth fav place !1111111!!1!!1', '<div id="infooo">'+
  	'<H1>YEEEE3</H1>'+
    '<P>a third store</P>')
    makeMarker(37.67190683390605, -122.47099567204714, 'my fifth fav place !!1!!!1!!',  '<div id="infooo">'+
  	'<H1>YEEEE4</H1>'+
    '<P>a fourth store</P>')

    makeMarker(37.63518630410634, -122.41735316812992, 'my sixth fav place !!!11!!!!!1!', '<div id="infooo">'+
  	'<H1>YEEEE5</H1>'+
    '<P>a fifth store</P>')

    makeMarker(37.57927647015722, -122.3462887108326, 'my seventh fav store !!!!!!111!!!', '<div id="infooo">'+
  	'<H1>YEEEE6</H1>'+
    '<P>a sixth store</P>')
}
