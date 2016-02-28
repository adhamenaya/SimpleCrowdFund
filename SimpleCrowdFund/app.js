'use strict';
var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster', 'ui.gravatar','ngSanitize']);

 

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
			 when('/contact', {
			     title: 'contact',
			     templateUrl: 'contact/contact.html',
			     controller: 'contactCtrl'
			 })
			 .when('/about', {
			     title: 'team',
			     templateUrl: 'about/about.html',
			     controller: 'aboutCtrl'
			 })
			 .when('/blog', {
			     title: 'blog',
			     templateUrl: 'blog/blog.html',
			     controller: 'blogCtrl'
			 })
			 .when('/case/:id', {
			     title: 'case',
			     templateUrl: 'case/case.html',
			     controller: 'caseCtrl'
			 })
            .when('/', {
                title: 'home',
                templateUrl: 'home/home.html',
                controller: 'homeCtrl',
                role: '0'
            })
			.when('/404', {
                title: '404',
                templateUrl: '404/404.html',
                controller: '404Ctrl',
                role: '0'
            })
            .otherwise({
                redirectTo: '/404'
            });
  } ]);

app.controller('navbarCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
app.controller('AppController',function( $scope ) {
                $scope.friends = [ "Kim", "Sarah", "Tricia" ];
            }
    );
     app.directive(
            "mAppLoading",
            function( $animate ) {

                // Return the directive configuration.
                return({
                    link: link,
                    restrict: "C"
                });


                // I bind the JavaScript events to the scope.
                function link( scope, element, attributes ) {

                    // Due to the way AngularJS prevents animation during the bootstrap
                    // of the application, we can't animate the top-level container; but,
                    // since we added "ngAnimateChildren", we can animated the inner
                    // container during this phase.
                    // --
                    // NOTE: Am using .eq(1) so that we don't animate the Style block.
                    $animate.leave( element.children().eq( 1 ) ).then(
                        function cleanupAfterAnimation() {

                            // Remove the root directive element.
                            element.remove();

                            // Clear the closed-over variable references.
                            scope = element = attributes = null;

                        }
                    );

                }

            }
        );
});
	
 
 