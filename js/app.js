var app = angular.module('app', [])

app.controller('myCtrl', ['$scope', '$http', function ($scope, $http){
	var nameArr =[];
	var lat = [];
	var lng = [];
	var map;
	$scope.searchId ='';
	var userSearch;
	$scope.beerNames = [];
	$scope.beerStyles =[];

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

      function initMap() {
      	var brewOne = {lat: lat[0], lng:lng[0]}
        map = new google.maps.Map(document.getElementById('map'), {
          center: brewOne,
          zoom: 15
        });
  var marker = new google.maps.Marker({
    position: brewOne,
    map: map
  });

      }

	$scope.btnClick=function(){
		userSearch = $('input').val()
		console.log(userSearch);
		$.ajax
			({
				type: "GET",
				url: 'https://api.brewerydb.com/v2/search/geo/point?lat=30.2672&lng=-97.7431&radius=30&units=m&key=4b50655001c2875f2ef1e4cf9dc31c6c&format=json',
				dataType: 'json',
				success: function(json){

					for (i =0; i<json.data.length; i ++){
						nameArr.push(json.data[i].brewery.name);
						if(json.data[i].brewery.name == userSearch){
							lng.push(json.data[i].longitude);
							lat.push(json.data[i].latitude);
							$scope.searchId = json.data[i].brewery.id
							console.log(json.data[i].brewery);
							$.ajax({
								type: "GET",
								url: 'https://api.brewerydb.com/v2/search/geo/point?lat='+lat[0]+'&lng='+lng[0]+'&radius=1&units=m&key=4b50655001c2875f2ef1e4cf9dc31c6c&format=json',
								dataType: 'json',
				success: function(json, status, jqXHR){
					alert("Local success callback.");
										for (j =0; j<json.data.length; j++){
						if(json.data[j].brewery.name != userSearch){
											console.log(json.data[j].brewery.name)
											}

					}
				},
				error: function(jqXHR, status, err){
					alert("local error callback")
				}

							})
						}
					}
				}
			})
		}

	$scope.consoleLog = function(){
					initMap();
		sortBeerNames();
		var myJsonString = JSON.stringify($scope.beerStyles);
		console.log(myJsonString)

		console.log($scope.beerNames);
}	

$scope.secondFire= function(){
	var id = $scope.searchId;
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

}])