Router.route('/myForm');
Router.route('/userInfo');
Router.route('/', {
    template: 'intro'
});


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
       var rest_exists=ClientChoice.findOne(query);
       var client_exists=ClientChoice.findOne(query3);
       if(rest_exists){
       ClientChoice.update(query,valueToInsert);
       }else{
       ClientChoice.update({name:ClientsName},{$set: query2});
       ClientChoice.update({name:ClientsName},{$set: query4});
       if(client_exists == undefined){
       	ClientChoice.insert(valueToInsert);}
       }
       },

    'updateDb':function(valueToInsert,ClientsName,Restaurant,tmpval,tmpval1){
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
       }
       }
     });