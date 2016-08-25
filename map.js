

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.352271, lng: -71.05524200000001},
          zoom: 11
        });

//array of red line stops
        var redstops = [
       		{lat: 42.395428, lng: -71.142483},
       		{lat: 42.39674, lng: -71.121815},
       		{lat: 42.3884, lng: -71.11914899999999},
       		{lat: 42.373362, lng: -71.118956},
       		{lat: 42.365486, lng: -71.103802},
       		{lat: 42.36249079, lng: -71.08617653},
       		{lat: 42.361166, lng: -71.070628},
       		{lat: 42.35639457, lng: -71.0624242},
       		{lat: 42.355518, lng: -71.060225},
	        {lat: 42.352271, lng: -71.05524200000001},
	        {lat: 42.342622, lng: -71.056967},
	        {lat: 42.330154, lng: -71.057655},
			{lat: 42.320685, lng: -71.052391},
			{lat: 42.31129, lng: -71.053331},
			{lat: 42.300093, lng: -71.061667},
			{lat: 42.29312583, lng: -71.06573796000001},
			{lat: 42.284652, lng: -71.06448899999999}		
        ];
//separate array for after the branch point
        var braintree_branch = [
       		 {lat: 42.320685, lng: -71.052391},
       		 {lat: 42.275275, lng: -71.029583},
       		 {lat: 42.2665139, lng: -71.0203369},
       		 {lat: 42.251809, lng: -71.005409},
       		 {lat: 42.233391, lng: -71.007153},
       		 {lat: 42.2078543, lng: -71.0011385}
        ];

//create polyline and symbols
        var redline = new google.maps.Polyline({
        	path: redstops,
        	geodesic: true,
        	strokeColor: '#FF0000',
        	strokeOpacity: 1.0,
        	strokeWeight: 2,
        	
        });

        var brainline = new google.maps.Polyline({
        	path: braintree_branch,
        	geodesic: true,
        	strokeColor: '#FF0000',
        	strokeOpacity: 1.0,
        	strokeWeight: 2,
        	
        });
//actually display polyline and symbols 
        redline.setMap(map);
        brainline.setMap(map);

//make custom symbol
       var circ = {
        	path: google.maps.SymbolPath.CIRCLE,
        	fillColor: '#660000',
        	fillOpacity: 1.0,
        	scale: 5,
        	strokeColor: '#bf4040',
        	strokeWeight: 4
        };

/******** MARKERS ******/
      var marker = new google.maps.Marker({
        	position: {lat: 42.352271, lng: -71.05524200000001},
        	icon: circ,
        	map: map,
        	title: 'South Station'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.330154, lng: -71.057655},
        	icon: circ,
        	map: map,
        	title: 'Andrew'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.3884, lng: -71.11914899999999},
        	icon: circ,
        	map: map,
        	title: 'Porter Square'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.373362, lng: -71.118956},
        	icon: circ,
        	map: map,
        	title: 'Harvard Square'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.320685, lng: -71.052391},
        	icon: circ,
        	map: map,
        	title: 'JFK/UMass'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.31129, lng: -71.053331},
        	icon: circ,
        	map: map,
        	title: 'Savin Hill'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.35639457, lng: -71.0624242},
        	icon: circ,
        	map: map,
        	title: 'Park Street'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.342622, lng: -71.056967},
        	icon: circ,
        	map: map,
        	title: 'Broadway'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.275275, lng: -71.029583},
        	icon: circ,
        	map: map,
        	title: 'North Quincy'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.29312583, lng: -71.06573796000001},
        	icon: circ,
        	map: map,
        	title: 'Shawmut'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.39674, lng: -71.121815},
        	icon: circ,
        	map: map,
        	title: 'Davis'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.395428, lng: -71.142483},
        	icon: circ,
        	map: map,
        	title: 'Alewife'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.36249079, lng: -71.08617653},
        	icon: circ,
        	map: map,
        	title: 'Kendall/MIT'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.361166, lng: -71.070628},
        	icon: circ,
        	map: map,
        	title: 'Charles/MGH'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.355518, lng: -71.060225},
        	icon: circ,
        	map: map,
        	title: 'Downtown Crossing'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.251809, lng: -71.005409},
        	icon: circ,
        	map: map,
        	title: 'Quincy Center'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.233391, lng: -71.007153},
        	icon: circ,
        	map: map,
        	title: 'Quincy Adams'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.284652, lng: -71.06448899999999},
        	icon: circ,
        	map: map,
        	title: 'Ashmont'

        });

        var marker = new google.maps.Marker({
        	position: {lat: 42.2665139, lng: -71.0203369},
        	icon: circ,
        	map: map,
        	title: 'Wollaston'

        });

         var marker = new google.maps.Marker({
        	position: {lat: 42.300093, lng: -71.061667},
        	icon: circ,
        	map: map,
        	title: 'Fields Corner'

        });

          var marker = new google.maps.Marker({
        	position: {lat: 42.365486, lng: -71.103802},
        	icon: circ,
        	map: map,
        	title: 'Central Square'

        });

           var marker = new google.maps.Marker({
        	position: {lat: 42.2078543, lng: -71.0011385},
        	icon: circ,
        	map: map,
        	title: 'Braintree'

        });

      }