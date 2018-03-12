var app = angular.module('app', [])

app.controller('myCtrl', ['$scope', '$http', function ($scope, $http){
	var nameArr =[];
	var lat = [];
	var lng = [];
	var map;
	$scope.brewOne;
	$scope.optionTwo;
	var userSearch;
	$scope.beerNames = [];
	$scope.beerStyles =[];
	$scope.secondBreweries= [];
	$scope.firstBrewery;
	$scope.currentSearch; 

function gatherBeers(){
	id = $scope.currentSearch;
	console.log(id);
	$.ajax({
		type: "GET",
				url: 'https://api.brewerydb.com/v2/brewery/'+id+'/beers?key=4b50655001c2875f2ef1e4cf9dc31c6c&format=json',
				dataType: 'json',
				success: function(json, status, jqXHR){
					for (j =0; j<json.data.length; j++){
						$scope.firstBrewery.beers.push(json.data[j].name);
					}
					console.log($scope.firstBrewery);
				},
				error: function(jqXHR, status, err){
					alert("local error callback")
				}
	})
}

	function sortBeerNames(){
		var beerNames = $scope.beerNames;
		var sortedBeerNames = beerNames.slice().sort();

		for (var k =0; k<sortedBeerNames.length - 1; k++){
			if (sortedBeerNames[k+1]== sortedBeerNames[k]) {
				$scope.beerNames.push(sortedBeerNames[k]);
			}
		}

		console.log($scope.beerNames);
}

/*
function geoCode(){
	$.ajax
	({
		type: "GET",
		url: "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat[0]+","+lng[0]+"&key=AIzaSyBECdr1cotQ82zUZ0BLfU3uZz4hubcnBHE",
		dataType: "json",
		success: function(json, status, jqXHR){
			for (m = 0; m<json.results.length; m++){
				if(json.results[m].types[0] == "street_address"){
					console.log (json.results[m].formatted_address);
				}
			}
		},
		error: function(jqXHR, status, err){
					alert("local error callback")
				}
	})

}
*/


      function initMap() {

    var secondBrewery = $scope.secondBreweries;
    var firstBrewery = $scope.firstBrewery;
  	$scope.brewOne = new google.maps.LatLng(firstBrewery.lat,firstBrewery.lng);
    $scope.optionTwo = new google.maps.LatLng(secondBrewery[1].lat, secondBrewery[1].lng)
     var mapOptions = {
      		center: $scope.brewOne,
      		 zoom: 15}
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        });
  var start = firstBrewery.address;
  var end = secondBrewery[getRandomInt(secondBrewery.length)].address;
  console.log(end);
  console.log(start);

  var request = {
          destination: end,
          origin: start,
          travelMode: 'DRIVING'
        };
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
          if (status == 'OK') {
            // Display the route on the map.
            directionsDisplay.setDirections(response);
            console.log(response.routes[0].legs[0].distance);
            directionsDisplay.setPanel(document.getElementById('directionsPanel'));

          }
        });
}

function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max))
}


	$scope.btnClick=function(){
		userSearch = $('input').val()
		console.log(userSearch);
		$.ajax
			({
				type: "GET",
				url: 'https://api.brewerydb.com/v2/search/geo/point?lat=30.2672&lng=-97.7431&radius=30&units=m&key=4b50655001c2875f2ef1e4cf9dc31c6c&format=json',
				dataType: 'json',
				success: function(json, status, jqXHR){
					for (i =0; i<json.data.length; i ++){
						nameArr.push(json.data[i].brewery.name);
						if(json.data[i].brewery.name == userSearch){

							$scope.firstBrewery = {
								lng: json.data[i].longitude,
								lat: json.data[i].latitude,
								id: json.data[i].brewery.id,
								address: json.data[i].streetAddress,
								beers: []
							}
							$scope.currentSearch = json.data[i].brewery.id;
							gatherBeers();							
							$.ajax({
								type: "GET",
								url: 'https://api.brewerydb.com/v2/search/geo/point?lat='+$scope.firstBrewery.lat+'&lng='+$scope.firstBrewery.lng+'&radius=3&units=m&key=4b50655001c2875f2ef1e4cf9dc31c6c&format=json',
								dataType: 'json',
				success: function(json, status, jqXHR){
										for (i =0; i<json.data.length; i++){
						if(json.data[i].brewery.name != userSearch){
											var secondBreweryInfo= {
												lat: json.data[i].latitude,
												lng: json.data[i].longitude,
												id: json.data[i].brewery.id,
												name: json.data[i].brewery.name,
												address:json.data[i].streetAddress
											}
											$scope.currentSearch = json.data[i].brewery.id
											$scope.secondBreweries.push(secondBreweryInfo);


											}

					}
					console.log($scope.secondBreweries);

				},
				error: function(jqXHR, status, err){
					alert("local error callback")
				}

							})


						}
					}
				},
				error: function(jqXHR, status, err){
					alert("local error callback")
				}
			})
		}

	$scope.consoleLog = function(){
		initMap();
		// geoCode();
		// sortBeerNames();
		// var myJsonString = JSON.stringify($scope.beerStyles);
}	

$scope.secondFire= function(){
	var id = $scope.firstBrewery.id;
	beerNames = $scope.beerNames;
	$.ajax 
	({
		type: "GET",
		url: "https://api.brewerydb.com/v2/brewery/"+id+"/beers?key=4b50655001c2875f2ef1e4cf9dc31c6c&format=json",
		dataType: "json",
		success: function(json){
			for(j=0; j<json.data.length; j++){
				var beerInfoObject = {
					name: json.data[j].name,
					styleId: json.data[j].styleId
				}
				beerNames.push(beerInfoObject);
			}

		}
	})
}


/*
search function to grab all
$scope.stylesSearch = function(){
	styles = $scope.styles;
	$.ajax
	({
		type: "GET",
		url: "https://api.brewerydb.com/v2/style/75?key=4b50655001c2875f2ef1e4cf9dc31c6c&format=json",
		dataType: "json",
		success: function(json){
			for(i= 0; i<json.data.length; i++)
			$scope.beerStyles.push(json.data[i].name);
	}
})
}
*/
}])