
Meteor.methods({
	'Searchindb':function(ClientsName){
      searchdata=ClientChoice.findOne({name: ClientsName});
      var no_of_restaurants=ClientChoice.find({"public.orgCodeSupported.default":{$size:1}});
      if(searchdata != null){
      //redirecting to userdata display page
      Router.go('/userInfo');
      Session.set("toSearchData",searchdata);
      //if(no_of_restaurants != undefined){
        //Session.set("toSearchData",)
      //}
      }
      else
        { 
      //prompt for missing data
         alert("No data available"); }
       }
 });



Template.intro.events({
 'submit form' : function(event,tmpl){
 	event.preventDefault();
 	ClientsName=event.target.clientsName.value;
  //RestaurantName=event.target.restaurant.value;
  //Session.set("RestaurantNameVar2",RestaurantName);
  Meteor.call('Searchindb',ClientsName); 
 }
});