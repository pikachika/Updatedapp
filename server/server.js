Meteor.methods({
     'addTodb':function(valueToInsert){
       ClientChoice.update({},valueToInsert,{upsert:true});
       }
});