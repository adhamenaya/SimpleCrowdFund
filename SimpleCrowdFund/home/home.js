'use strict';
 app.controller('homeCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data,$sce) {
 
 
 		 Data.get('getCases.php', {}).then(function (results) {
             if (results.error == false) {
 				$scope.cases = results.data;
              }
        });

		
		$scope.toTrustedHTML = function( html ){
			return $sce.trustAsHtml(subString(html));
		}

		$scope.subString = function( str ){
			if(str.length > 150 ) 
				str = str.substring(0, 150) + "...";
 			return str;
		}
		
		function trim(str) {
			str = str.replace(/^\s+/, '');
			for (var i = str.length - 1; i >= 0; i--) {
				if (/\S/.test(str.charAt(i))) {
					str = str.substring(0, i + 1);
					break;
				}
			}
			return str;
		}
		
		$scope.formateDate = function( time ){
            var formatDate = moment(time, "YYYY-MM-DD hh:mm:ss").lang("en").fromNow();
 	        return formatDate ;
        }
 	
 
});