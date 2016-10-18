angular.module("ngClassifieds", ["ngMaterial", "ui.router"]) // creating new module and adding modules to it
	   .config(function($mdThemingProvider, $stateProvider){

	   		$mdThemingProvider.theme('default')
	   		.primaryPalette('teal')
	   		.accentPalette('orange');

	   		$stateProvider
	   			.state('classifieds', {
	   				url: '/classifieds',
	   				templateUrl: 'components/classifieds.tpl.html',
	   				controller: 'classifiedsCtrl as vm' // alias for controller
	   			});
	   }); 