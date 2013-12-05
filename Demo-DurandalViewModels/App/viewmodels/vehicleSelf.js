define(['plugins/observable'], function(observable) {

   var vm = function() {
      var self = this;
      self.vehicles = [
         { name: "charger" },
         { name: "honda" },
         { name: "chevy" }
      ];
      self.vehicle = self.vehicles[0];
      self.selectVehicle = function(vehicle) {
         self.vehicle = vehicle;
      };
   };

   return vm;
});