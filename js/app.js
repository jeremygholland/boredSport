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
	var distanceArr = []
	$scope.formatted_address;

function gatherBeers(){
	id = $scope.currentSearch;
	console.log(id);
	$http({
		method: "GET",
				url: 'https://api.brewerydb.com/v2/brewery/'+id+'/beers?key=4b50655001c2875f2ef1e4cf9dc31c6c&format=json'}).then(function successCallback(response){
						for (j =0; j<response.data.data.length; j++){
						$scope.firstBrewery.beers.push(response.data.data[j].name);
					}
					console.log($scope.firstBrewery);
				}, function errorCallback(response){
					console.log("there was an error")
				});
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


function geoCode(lat, lng){
	$http({
		type: "GET",
		url: "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=AIzaSyBECdr1cotQ82zUZ0BLfU3uZz4hubcnBHE"}).then(function successCallback(response){
						for (m = 0; m<response.data.results.length; m++){
				if(response.data.results[m].types[0] == "street_address"){
					$scope.formatted_address = response.data.results[m].formatted_address;
					console.log($scope.formatted_address)
				}
			}
		}, function errorCallback(response){
			console.log('geoCode error')
		});

}



// creates map
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
//direction portion
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





// random number function
function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max))
}


	$scope.btnClick=function(){
		userSearch = $('input').val()
		console.log(userSearch);
		$http({
				type: "GET",
				url: 'https://api.brewerydb.com/v2/search/geo/point?lat=30.2672&lng=-97.7431&radius=30&units=m&key=4b50655001c2875f2ef1e4cf9dc31c6c&format=json'}).then(function successCallback(response){
					for (i =0; i<response.data.data.length; i ++){
						nameArr.push(response.data.data[i].brewery.name);
						if(response.data.data[i].brewery.name == userSearch){

							$scope.firstBrewery = {
								lng: response.data.data[i].longitude,
								lat: response.data.data[i].latitude,
								id: response.data.data[i].brewery.id,
								address: response.data.data[i].streetAddress,
								beers: []
							}
							$scope.currentSearch = response.data.data[i].brewery.id;
							gatherBeers();							
							$http({
								type: "GET",
								url: 'https://api.brewerydb.com/v2/search/geo/point?lat='+$scope.firstBrewery.lat+'&lng='+$scope.firstBrewery.lng+'&radius=3&units=m&key=4b50655001c2875f2ef1e4cf9dc31c6c&format=json'}).then(function successCallback(response){
									for (i =0; i<response.data.data.length; i++){
						if(response.data.data[i].brewery.name != userSearch){
											var secondBreweryInfo= {
												lat: response.data.data[i].latitude,
												lng: response.data.data[i].longitude,
												id: response.data.data[i].brewery.id,
												name: response.data.data[i].brewery.name,
											}

												if(typeof response.data.data[i].streetAddress !== 'undefined'){
												secondBreweryInfo.address = response.data.data[i].streetAddress
												}
												else{
													// we have async issues https://www.engineyard.com/blog/taming-asynchronous-javascript-with-async

													geoCode(secondBreweryInfo.lat, secondBreweryInfo.lng);
													secondBreweryInfo.address = $scope.formatted_address;
												}

											$scope.currentSearch = response.data.data[i].brewery.id
											$scope.secondBreweries.push(secondBreweryInfo);
						console.log(secondBreweryInfo)



											}

										}

					console.log($scope.secondBreweries);
								}, function errorCallback(response){
					alert("local error callback")
				});

							}
				}

				},function errorCallback(response){
					alert("local error callback")
				});
			}

	$scope.consoleLog = function(){
		initMap();
		// geoCode();
		// sortBeerNames();
		// var myJsonString = JSON.stringify($scope.beerStyles);
}	


// lists all distances

$scope.secondFire = function(){
	var secondBrewery = $scope.secondBreweries;
    var firstBrewery = $scope.firstBrewery;
    var start = firstBrewery.address;

    for (i=0; i<secondBrewery.length; i ++){
    	if (typeof secondBrewery[i].address !== 'undefined'){
	var end = secondBrewery[i].address;
	}
	else{
		var end = new google.maps.LatLng(secondBrewery[i].latLng)
	}

//direction portion
  var request = {
          destination: end,
          origin: start,
          travelMode: 'DRIVING'
        };
        var directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        });
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
          if (status == 'OK') {
            // Display the route on the map.
            distanceArr.push(response.routes[0].legs[0].distance);
          }
        });
        }
        console.log(distanceArr);

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