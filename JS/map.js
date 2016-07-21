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



	var marker = new google.maps.Marker({
	    position: {lat: 37.790530841080766, lng: -122.39915991201997},
	    map: map,
	    title: 'my fav place !!!1!111',
	    icon: image
  	});

  	var popup = '<div id="infooo">'+
  	'<H1>Home Sweet Home</H1>'+
    '<P>Welcome to the Sephora Coporate Headquarters, where we bug '+ 
    'the heck out of all of the employees (unintentionally).'+ 
    'Sorry!</P>'
  ;

  	var infowindow = new google.maps.InfoWindow({
    	content: popup
  	});

  	marker.addListener('click', function() {
    	infowindow.open(map, marker)
  	});

}
