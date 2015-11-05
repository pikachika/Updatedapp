Meteor.methods({
    'Searchindb': function(ClientsName) {
        searchdata = ClientChoice.findOne({
            name: ClientsName
        });
        if (searchdata != null) {
            //redirecting to userdata display page
            Session.set("toSearchData", searchdata);
            RestaurantName = undefined;
            Session.set("RestaurantNameVar", RestaurantName);
            Router.go('/userInfo');
        } else {
            //prompt for missing data
            alert("No data available");
        }
    }
});



Template.intro.events({
    'submit form': function(event, tmpl) {
        event.preventDefault();
        ClientsName = event.target.clientsName.value;
        Meteor.call('Searchindb', ClientsName);
    }
});