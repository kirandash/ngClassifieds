angular.module("ngClassifieds", ["ngMaterial", "ui.router"]) // creating new module and adding modules to it
	   .config(function($mdThemingProvider, $stateProvider){

	   		$mdThemingProvider.theme('default')
	   		.primaryPalette('teal')
	   		.accentPalette('orange');

	   		$stateProvider
	   			.state('classifieds', {
	   				url: '/classifieds',
	   				templateUrl: 'components/classifieds/classifieds.tpl.html',
	   				controller: 'classifiedsCtrl as vm' // alias for controller
	   			})
	   			.state('classifieds.new', {
	   				url: '/new',
	   				templateUrl: 'components/classifieds/new/classifieds.new.tpl.html',
	   				controller: 'newClassifiedsCtrl as vm' // alias for controller
	   			});
	   }); 