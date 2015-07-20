Meteor.methods({
     'addTodb':function(valueToInsert,ClientsName,Restaurant){
       var query={};
       query["private."+Restaurant+".name"]=ClientsName;
       ClientChoice.update(query,valueToInsert,{upsert:true});
       }
});