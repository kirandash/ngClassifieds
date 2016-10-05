angular.module("ngClassifieds", ["ngMaterial"]) // creating new module
	   .config(function($mdThemingProvider){

	   		$mdThemingProvider.theme('default')
	   		.primaryPalette('teal')
	   		.accentPalette('orange');
	   })
	   // custom directive
	   .directive("helloWorld", function(){
	   		return{
	   			template: "<h1>{{ message }}</h1>"
	   		}
	   }); 