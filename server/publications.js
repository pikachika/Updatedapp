Meteor.publish('clientChoice', function(){ 
   return ClientChoice.find();
});

Meteor.publish('Metadata', function(){ 
   return MetaData.find();
});