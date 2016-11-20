var _app = {};
var app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/outline',{
		templateUrl:'./static/tpls/outline.html',
		controller:'outlineCtrl'
	})
	.when('/list',{
		templateUrl:'./static/tpls/list.html',
		controller:'listCtrl'
	})
	.when('/news',{
		templateUrl:'./static/tpls/news.html',
		controller:'newsCtrl'
	})
	.when('/lab',{
		templateUrl:'./static/tpls/lab.html',
		controller:'labCtrl'
	})
	.otherwise({
		redirectTo:'/outline'
	});
});

app.controller('mainCtrl',['$scope','$http',function($scope,$http){

}]);