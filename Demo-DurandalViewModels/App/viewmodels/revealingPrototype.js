define(function () {

   var vm = function () {
      this.vehicles = [
         { name: "charger" },
         { name: "honda" },
         { name: "chevy" }
      ];
      this.vehicle = this.vehicles[0];
   };

   vm.prototype = function() {
      
      var selectVehicle = function (vehicle) {
         this.vehicle = vehicle;
      };

      return {
         selectVehicle: selectVehicle
      };
   }();
         
   return vm;
});