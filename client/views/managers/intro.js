
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
      if(dataExists){
      Session.set("TodataExists",true);}
      else
        { 
         Session.set("TodataExists",false); }
      searchdata=ClientChoice.findOne({name: ClientsName});
      if(searchdata != null)
      {
      	Session.set("toSearchData",searchdata);
      }
     }
 });



Template.intro.events({
 'submit form' : function(event,tmpl){
  Router.go('/userInfo');
 	event.preventDefault();
 	ClientsName=event.target.clientsName.value;
  RestaurantName=event.target.restaurant.value;
  Meteor.call('Searchindb',ClientsName,RestaurantName); 
 }
});