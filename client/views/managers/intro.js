
Meteor.methods({
    'Searchindb': function(ClientsName) {
        Session.set("ClientName", ClientsName);


        client_exists = ClientChoice.findOne({
            name: ClientsName
        });
        if (client_exists != null) {
            //redirecting to userdata display page
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