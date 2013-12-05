define(['plugins/observable'], function(observablePlugin) {

   var vehicle = {
      name: "charger",
      cameras: [
         { cameraName: "camera1", id:0 },
         { cameraName: "camera2", id:0 }
      ]
   };

   var mapped = ko.mapping.fromJS({
      name: "charger",
      cameras: [
         { cameraName: "camera1", id:0 },
         { cameraName: "camera2", id:0 }
      ]
   });

   var forDurandal = {
      name: "charger",
      cameras: [
         { cameraName: "camera1", id: 0 },
         { cameraName: "camera2", id: 0 }
      ]
   };
   observablePlugin.convertObject(forDurandal);
   
   return {
      vehicle:JSON.stringify(vehicle),
      mapped:JSON.stringify(mapped),
      observable: JSON.stringify(forDurandal)
   };
});