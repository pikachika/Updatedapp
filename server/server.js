

Meteor.methods({
     'addTodb':function(valueToInsert,ClientsName,Restaurant,tmpval,tmpval1){
       //constructing query with dynamic field name
       var query={};
       var query2={};
       var query3={};
       var query4={};
       query["public.orgCodeSupported.orgcodes"]=Restaurant;
       query2["private."+Restaurant]=tmpval;
       query4["public."+Restaurant]=tmpval1;
       query3["name"]=ClientsName;
       //check if client exists
       console.log(query4);
       var client_exists=ClientChoice.findOne(query3);
       //check if restaurant  exists for that client 
       var rest_exists=ClientChoice.findOne(
    // Find documents matching both of these values
    {$and:[
        {"name":ClientsName},
        query
    ]}
);
       //If client is not existing , inserting new data
       if(client_exists == undefined){
        ClientChoice.insert(valueToInsert);
        ClientChoice.update({name:ClientsName},{ $push: { "public.orgCodeSupported.orgcodes": Restaurant }} );
        ClientChoice.update({name:ClientsName},{ $set: { "public.orgCodeSupported.default": Restaurant }});

       }
       else if(rest_exists == undefined)
       {
        ClientChoice.update({name:ClientsName},{ $push: { "public.orgCodeSupported.orgcodes": Restaurant }} );
        ClientChoice.update({name:ClientsName},{$set: query2});
        ClientChoice.update({name:ClientsName},{$set: query4});
       }
        else
       {
        ClientChoice.update({name:ClientsName},{$set: query2}, { upsert: true });
        ClientChoice.update({name:ClientsName},{$set: query4}, { upsert: true });
       }
       },

    'checkDB':function(ClientsName,Restaurant){
      var query={};
      query["public.orgCodeSupported.orgcodes"]=Restaurant;
       var rest_exists=ClientChoice.findOne(
    // Find documents matching both of these values
    {$and:[
        {"name":ClientsName},
        query
    ]}
);    
       if(rest_exists){
   return true;
 }
       
       },


       'newtodb':function(valueToInsert,ClientsName,Restaurant,tmpval,tmpval1){
       //constructing query with dynamic field name
       var query={};
       var query2={};
       var query3={};
       var query4={};
       query["public.orgCodeSupported.orgcodes"]=Restaurant;
       query3["name"]=ClientsName;
      var existing_data=ClientChoice.findOne(query3,{"_id":0,"name":0});
        var final_data=existing_data["private"][Restaurant];
        var final_data2=existing_data["public"][Restaurant];
   for (var key in tmpval) {
      final_data[key] = tmpval[key];
   }
   for (var key in tmpval1) {
      final_data2[key] = tmpval1[key];
   }
        query2["private."+Restaurant]=final_data;
        query4["public."+Restaurant]=final_data2;
        ClientChoice.update({name:ClientsName},{$set: query2});
        ClientChoice.update({name:ClientsName},{$set: query4});
       }
      
     });