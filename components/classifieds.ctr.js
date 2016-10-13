(function() {

	"use strict";

	angular
		.module("ngClassifieds") // reference existing module - not creating new module

		// scope is the special object of our controller which acts as glue betweeen contoller and view
		.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast){
			
			// get method has promises, once the task is done then the code inside it will execute. any code outside will run 
			// independent of promises

			classifiedsFactory.getClassifieds().then(function(classifieds){
				// property defined				
				// console.log(data);
				$scope.classifieds = classifieds.data;
			});

			var contact = {
				name: "Kiran Dash",
				phone: "(555) 555-55555",
				email: "thekirankumardash@gmail.com"
			} // contact object - simulation of user data on login

			$scope.openSidebar = function() {
				// md-component-id passed to mdsidenav
				$mdSidenav('left').open();
			}

			$scope.closeSidebar = function() {
				// md-component-id passed to mdsidenav
				$mdSidenav('left').close();
			}

			$scope.saveClassified = function(classified){
				if(classified){
					classified.contact = contact;
					$scope.classifieds.push(classified); // push classified object from form to existing classifieds array
					$scope.classified = {}; // empty the classified object on save - to empty the form
					$scope.closeSidebar(); // close sidebar on save
					$mdToast.show(
						$mdToast.simple()
							.content("Classified saved")
							.position('top, right')
							.hideDelay(3000)
					);
				}
			}

		}); // controller defined - MVC
})();