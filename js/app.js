var app = angular.module('app', [])

app.controller('myCtrl', ['$scope', '$http', function ($scope, $http){
	$scope.test =  (5*9);
	console.log($scope.test);
	var nameArr =[];

	$scope.btnClick=function(){
$.ajax
			({
				type: "GET",
				url: 'https://api.brewerydb.com/v2/search/geo/point?lat=30.2672&lng=-97.7431&radius=30&units=m&key=4b50655001c2875f2ef1e4cf9dc31c6c&format=json',
				dataType: 'json',
				success: function(json){
for (i =0; i<json.data.length; i ++){
nameArr.push(json.data[i].brewery.name)		 	}
		  }
		})
		}
$scope.consoleLog=function(){
	console.log(nameArr)
}


}])