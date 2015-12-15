(function() {
'use strict';

	angular
		.module('app',[])
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$log'];
	function ControllerController($log) {
		var vm = this;
		vm.title = "Hello Word";

		activate();

		////////////////

		function activate() { }
	}
})();