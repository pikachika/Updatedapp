Meteor.publish('clientChoice', function(){ 
   return ClientChoice.find();
});