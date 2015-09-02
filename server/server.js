Meteor.methods({
     'addTodb':function(valueToInsert,ClientsName,Restaurant,tmpval,tmpval1){
       var query={};
       var query2={};
       var query3={};
       var query4={};
       query["private."+Restaurant+".name"]=ClientsName;
       query2["private."+Restaurant]=tmpval;
       query4["public."+Restaurant]=tmpval1;
       query3["name"]=ClientsName;
       var chk_rest=ClientChoice.findOne(query);
       var chk_client=ClientChoice.findOne(query3);
       if(chk_rest){
       ClientChoice.update(query,valueToInsert);
       }else{
       ClientChoice.update({name:ClientsName},{$set: query2});
       ClientChoice.update({name:ClientsName},{$set: query4});
       if(chk_client == undefined){
       	ClientChoice.insert(valueToInsert);}
       }
       }
     });