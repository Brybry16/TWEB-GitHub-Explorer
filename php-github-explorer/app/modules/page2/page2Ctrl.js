(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:page2Ctrl
	* @description
	* # page2Ctrl
	* Controller of the app
	*/

  	angular
		.module('page2')
		.controller('Page2Ctrl', Page2);

		Page2.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Page2() {
			/*jshint validthis: true */
			var vm = this;

			vm.data = [10, 30, 60, 120];
			vm.labels = ["Apples", "Peers", "Bananas", "Oranges"];
		}

})();
