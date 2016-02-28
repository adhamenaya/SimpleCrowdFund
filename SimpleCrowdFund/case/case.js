'use strict';
 app.controller('caseCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data,$sce) {
 
    var id = $routeParams.id;
	
	var postsIDs = [];
	var postsTitles = [];
	var totalMoney = 0;

     //initially set those objects to null to avoid undefined error
         Data.post('getCase.php?id='+id, {}).then(function (results) {
 
             if (results.error == false) {
					$scope.case = results.data[0];
               }
        });
		Data.post('getCaseToDo.php?id='+id, {}).then(function (results) {
 
             if (results.error == false) {
					$scope.toDos = results.data;
					for(var i=0;i<results.data.length;i++){
						totalMoney = totalMoney + parseInt(results.data[i].cost);
 					}
					$scope.total = totalMoney;
               }
        });
		
	
		
		
		SyntaxHighlighter.all();
	
 		$scope.toTrustedHTML = function( html ){
			return $sce.trustAsHtml(html);
		}
		$scope.getId = function(index){
			return $scope.postsIDs[index];
		}
		$scope.getCurrentId= function(){
			return id;
		}
		$scope.formateDate = function( time ){
            var formatDate = moment(time, "YYYY-MM-DD hh:mm:ss").lang("en").fromNow();
 	        return formatDate ;
        }
		$scope.getLength = function(){
			if($scope.postsTitle=== undefined) return 0;
			else return $scope.postsTitles.length;
		}
});


 