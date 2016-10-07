(function() {

	"use strict";

	angular
		.module("ngClassifieds") // reference existing module - not creating new module

		// scope is the special object of our controller which acts as glue betweeen contoller and view
		.controller("classifiedsCtrl", function($scope){
			
			// property defined
			$scope.classified = {
				title: "First Item",
				price: "$1,00,000",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac arcu sit amet lacus ullamcorper tincidunt. Nulla placerat ex nulla, ut tempor leo lacinia non. Morbi pharetra sagittis ante. Sed id ornare enim. Aenean dictum dignissim justo, nec convallis sapien aliquet a. Maecenas in justo vulputate, sagittis lectus facilisis, consectetur velit. Proin quis viverra lorem. Donec tempus ante vitae lacus feugiat tempus. Praesent et hendrerit turpis. Etiam non nisi felis."
			}

		}); // controller defined - MVC
})();