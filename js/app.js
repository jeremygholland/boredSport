var app = angular.module('app', [])

app.controller('myCtrl', ['$scope', '$http', function ($scope, $http){
	var nameArr =[];
	var lat = [];
	var lng = [];
	var map;
	var userSearch;

      function initMap() {
      	var brewOne = {lat: lat[0], lng:lng[0]}
        map = new google.maps.Map(document.getElementById('map'), {
          center: brewOne,
          zoom: 17
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
							console.log(json.data[i].brewery)
						}
					}
				}
			})
		}

	$scope.consoleLog = function(){
		console.log(lng[0]);
		console.log(lat[0]);

			initMap();
}	



}])