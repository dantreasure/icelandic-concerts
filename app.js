var app = angular.module('app', []);

app.service('concerts', ['$http', function ($http) {
	return $http.get('http://apis.is/concerts')
}])

app.controller('MyCtrl', ['$scope', 'concerts', function ($scope, concerts) {
	concerts.then(function(data){
		$scope.concerts = data;
	})
}])
