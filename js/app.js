var app = angular.module('app', [])

app.controller('myCtrl', ['$scope', '$http', function ($scope, $http){
	$scope.test =  (5*9);
	console.log($scope.test);

	$scope.btnClick=function(){
$.ajax
			({
				type: "GET",
				url: 'https://api.brewerydb.com/v2/search/geo/point?lat=35.772096&lng=-78.638614&radius=30&units=m&key=4b50655001c2875f2ef1e4cf9dc31c6c&format=json',
				dataType: 'json',
				success: function(json){

console.log(json.data[0].id)		  	}
		  })
		}

}])