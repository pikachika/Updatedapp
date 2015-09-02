
Template.intro.helpers({
  'restaurantExists' : function(){
    return Session.get("TodataExists");
  }
});

Meteor.methods({
	'Searchindb':function(ClientsName,RestaurantName){
      var query_restaurant="private."+RestaurantName;
      dataExists=ClientChoice.find({query_restaurant:{ $exists: true}});
      if(dataExists){
      Session.set("TodataExists",true);}
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