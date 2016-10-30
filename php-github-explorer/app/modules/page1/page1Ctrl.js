(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:page1Ctrl
	* @description
	* # page1Ctrl
	* Controller of the app
	*/

	angular
		.module('page1')
		.controller('Page1Ctrl', Page1);

	Page1.$inject = ['$http'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Page1() {
		/*jshint validthis: true */
		var vm = this;

		vm.title = "Welcome to GitHub Explorer!";


		// Variables pour les entrée utilisateur
		vm.username = undefined;
		vm.repo = undefined;

		vm.repos = [];

		//var request = require("supertest-as-promised");
		var github = "https://api.github.com";

		


	}



	function apiCall(path) {
		return request(github)
			.get(path)
			.auth("ToniDias", "43bb771f9610114317e279f2481e064b59ff71d2");
	}

	apiCall("/users/Tonidias/repos")
    .then(function(res) {
        var events = res.body;
        console.log("Got /Toni events");
        console.log(events);
        return events;
    });

})();