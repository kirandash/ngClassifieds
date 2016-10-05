(function() {

	"use strict";

	angular
		.module("ngClassifieds") // reference existing module - not creating new module
		.controller("classifiedsCtrl", function($scope){
			// scope is the special object of our controller which acts as glue betweeen contoller and view
			$scope.name = "Kiran";

		}); // controller defined - MVC
})();