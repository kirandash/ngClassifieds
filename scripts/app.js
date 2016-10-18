angular.module("ngClassifieds", ["ngMaterial", "ui.router"]) // creating new module and adding modules to it
	   .config(function($mdThemingProvider, $stateProvider){

	   		$mdThemingProvider.theme('default')
	   		.primaryPalette('teal')
	   		.accentPalette('orange');

	   		$stateProvider
	   			.state('stateone', {
	   				url: '/stateone',
	   				template: '<h1>State One {{ stateone.message }}</h1>', // alias . notation controller for larger project
	   				controller: 'stateOneCtrl as stateone' // alias for controller
	   			})
	   			.state('statetwo', {
	   				url: '/statetwo',
	   				template: '<h1>State Two</h1><md-button ui-sref="statetwo.more">Go to nested state</md-button><ui-view></ui-view>'
	   			})
	   			.state('statetwo.more', {
	   				url: '/more',
	   				template: '<p>This is a deeper nested state</p>'
	   			});
	   })

	   .controller('stateOneCtrl', function(){
	   		// capture variable - vm = view model
	   		// remove $scope to avoid scope soup for larger projects in angular
	   		var vm = this;
	   		vm.message = "Hey from state one";
	   })
	   // custom directive
	   .directive("helloWorld", function(){
	   		return{
	   			template: "<h1>{{ message }}</h1>"
	   		}
	   }); 