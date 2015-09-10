
Template.intro.helpers({
  'restaurantExists' : function(){
    return Session.get("TodataExists");
  }
});

Meteor.methods({
	'Searchindb':function(ClientsName,RestaurantName){
      var query_restaurant={};
      query_restaurant["private."+RestaurantName+".name"]=ClientsName;
      dataExists=ClientChoice.findOne(query_restaurant);
      if(dataExists != null){
      Router.go('/userInfo');
      Session.set("TodataExists",true);}
      else
        { 
         Session.set("TodataExists",false);
         alert("No data available"); }
      searchdata=ClientChoice.findOne({name: ClientsName});
      if(searchdata != null)
      {
      	Session.set("toSearchData",searchdata);
      }
     }
 });



Template.intro.events({
 'submit form' : function(event,tmpl){
 	event.preventDefault();
 	ClientsName=event.target.clientsName.value;
  RestaurantName=event.target.restaurant.value;
  Meteor.call('Searchindb',ClientsName,RestaurantName); 
 }
});