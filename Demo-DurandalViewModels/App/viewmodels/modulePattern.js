define(['plugins/observable'], function (observable) {

   var vm = {};
   vm.vehicles = [
      { name: "charger" },
      { name: "honda" },
      { name: "chevy" }
   ];
   vm.vehicle = vm.vehicles[0];
   vm.selectVehicle = function(vehicle) {
      vm.vehicle = vehicle;
   };
   
   return vm;
});