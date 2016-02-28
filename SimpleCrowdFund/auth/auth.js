'use strict';

app.controller('authCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
    //initially set those objects to null to avoid undefined error
    $scope.login = {};
    $scope.signup = {};
		
    $scope.doLogin = function (user) {
        Data.post('login', {
            user: user
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $location.path('Profile');
            }
        });
    };
    $scope.signup = {	
						id: '',
						email:'',
						fName: '',
						lName: '',
						company: '',
						country: '',
						position: '',
						password:''
					};
					 
    $scope.signUp = function (user) {
	
	var user2 = {	id: user.id,
					email:user.email,
					fName: user.fName,
					lName: user.lName,
					company: user.company,
					country: user.country,
					position: user.position,
					password:user.password
				};
					
	
        Data.post('users', user2 ).then(function (results) {
          //  Data.toast(results);
              if (results.id != null) {
			  		  alert(results.id);
                $location.path('profile');
            }
        });
    };
     $scope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
            $location.path('login');
        });
    }
});