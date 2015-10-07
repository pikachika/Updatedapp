Router.route('/myForm');
Router.route('/userInfo');
Router.route('/', {
    template: 'intro'
});


Meteor.methods({
     'addTodb':function(valueToInsert,ClientsName,Restaurant,tmpval,tmpval1){
       //constructing query with dynamic field name
       var query={};
       var query2={};
       var query3={};
       var query4={};
       query["private."+Restaurant+".name"]=ClientsName;
       query2["private."+Restaurant]=tmpval;
       query4["public."+Restaurant]=tmpval1;
       query3["name"]=ClientsName;
       //check if client exists
       var client_exists=ClientChoice.findOne(query3);
       var rest_exists=ClientChoice.findOne(query);
       //If client is not existing , inserting new data
       if(client_exists == undefined){
        ClientChoice.insert(valueToInsert);
       }
       else if(rest_exists == undefined)
       {
        ClientChoice.update({name:ClientsName},{ $push: { "public.orgCodeSupported.orgcodes": Restaurant }} );
        ClientChoice.update({name:ClientsName},{$set: query2});
        ClientChoice.update({name:ClientsName},{$set: query4});
        alert("Data added");
       }
       else
       {
       ClientChoice.update({name:ClientsName},{$set: query2});
       ClientChoice.update({name:ClientsName},{$set: query4});
       //alert("Data added");
       }
       },

    'updateDb':function(valueToInsert,ClientsName,Restaurant,tmpval,tmpval1){
      //constructing query with dynamic field name
       var query={};       
       var query2={};
       var query4={};
       query["private."+Restaurant+".name"]=ClientsName;
       query2["private."+Restaurant]=tmpval;
       query4["public."+Restaurant]=tmpval1;
       var rest_exists=ClientChoice.findOne(query);
       if(rest_exists){
       ClientChoice.update({name:ClientsName},{$set: query2});
       ClientChoice.update({name:ClientsName},{$set: query4});
       //alert("Data updated");
       }
       }
     });