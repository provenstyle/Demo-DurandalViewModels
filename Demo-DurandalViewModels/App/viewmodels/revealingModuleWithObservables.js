define(function () {

   var vehicles = ko.observableArray([
      { name: "charger" },
      { name: "honda" },
      { name: "chevy" }
   ]);

   var vehicle = ko.observable({ name: "charger" });

   var selectVehicle = function (item) {
      vehicle(item);
   };

   return {
      vehicles: vehicles,
      vehicle: vehicle,
      selectVehicle : selectVehicle
   };
});