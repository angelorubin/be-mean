angular
.module('API', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider.when('/api/v1/users', {
        templateUrl: 'views/users.html',
        controller: 'users'
    }).otherwise({
        redirectTo: '/index'
    });
})
.controller('userController', userController);

function userController($scope, $http) {
    $scope.title = 'API - User Create';
    // $scope.create = function () { 
    $http.get('http://localhost:3000/api/v1/users').success(function(data) {
        $scope.users = data;
    }).error(function(statusText) {
        console.log("Não foi possível obter a lista de users");
        console.log(statusText);
    });
    // };
}

userController['$inject'] = ['$scope', '$http'];