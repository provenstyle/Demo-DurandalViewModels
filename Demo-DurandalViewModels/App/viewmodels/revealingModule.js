define(function () {
   
   var vehicles = [
      { name: "charger" },
      { name: "honda" },
      { name: "chevy" }
   ];

   var vehicle = vehicles[0];

   var selectVehicle = function (item) {
      vehicle = item;
   };

   return {
      vehicles: vehicles,
      vehicle: vehicle,
      selectVehicle : selectVehicle
   };
});