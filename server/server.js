Meteor.methods({
     'addTodb':function(valueToInsert,ClientsName,Restaurant,tmpval){
       var query={};
       var query2={};
       var query3={};
       query["private."+Restaurant+".name"]=ClientsName;
       query2["private."+Restaurant]=tmpval;
       query3["name"]=ClientsName;
       var chk_rest=ClientChoice.findOne(query);
       var chk_client=ClientChoice.findOne(query3);
       if(chk_rest){
       ClientChoice.update(query,valueToInsert);
       }else{
       ClientChoice.update({name:ClientsName},{$set: query2});
       if(chk_client == undefined){
       	console.log("1");
       	ClientChoice.insert(valueToInsert);}
       }
       }
});