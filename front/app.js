'use strict';

angular.module('apiWeb', [
	'ngRoute',
	'User'
])
.config(['$routeProvider', '$locationProvider'], function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		templateUrl: 'views/users-list.html'
	})
	.otherwise({
		redirectTo: '/users'
	})
})
/*
.controller('UserController', UserController);
function UserController() {
	var vm = this;
	vm.editing = false;
	vm.test = 'test';
}
*/