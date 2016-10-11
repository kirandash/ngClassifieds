(function() {

	"use strict";

	angular
		.module("ngClassifieds") // reference existing module - not creating new module

		// scope is the special object of our controller which acts as glue betweeen contoller and view
		.controller("classifiedsCtrl", function($scope, $http){
			
			// get method has promises, once the task is done then the code inside it will execute. any code outside will run 
			// independent of promises

			$http.get('data/classifieds.json').then(function(classifieds){
				// property defined				
				// console.log(data);
				$scope.classifieds = classifieds.data;
			});

		}); // controller defined - MVC
})();