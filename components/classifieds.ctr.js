(function() {

	"use strict";

	angular
		.module("ngClassifieds") // reference existing module - not creating new module

		// scope is the special object of our controller which acts as glue betweeen contoller and view
		.controller("classifiedsCtrl", function($scope){
			
			// property defined
			$scope.name = {
				first: 'Kiran',
				last: 'Dash'
			};

			$scope.username = 'kirandash';

		}); // controller defined - MVC
})();