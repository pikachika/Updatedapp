Meteor.publish('clientChoice', function(){ 
   return ClientChoice.find();
});


Meteor.publish('settings', function(){ 
   return settingsmetadata.find();
});