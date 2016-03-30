
Restaurant = undefined;
dataObtained = "";
checkedList = [];
checkedList_2 = [];

dependencyList = [];
dependencyList_value = [];
id = [];
Template.registerHelper('$', function() {
    return Helpers;
});




Template.userInfo.helpers({


    'pullData': function() {
        searchdata = ClientChoice.findOne({
            name: ClientsName
        });


        Session.set("toSearchData", searchdata);
        dataObtained = Session.get("toSearchData");
        Session.set("displayEditOptions", false);
        Session.set("displayTextBox", true);
        return dataObtained;
    },

    'extractKeyname': function(arg1, arg2) {
        Restaurant = Session.get("RestaurantNameVar");
        // console.log(Restaurant);
        var dataset = settingsmetadata.findOne({
            'Type': arg2,
            'KeyName': arg1
        }, {
            sort: {
                'sheetRowId': 1
            }
        });
        var security = dataset.Security;
        return dataObtained[security][Restaurant][arg1];
    },

    'extractKeynameValue': function(arg1) {

        var cdataset = settingsmetadata.findOne({
            'Type': 'value',
            'KeyName': arg1
        }, {
            sort: {
                'Value': -1
            }
        });
        if (cdataset.Depends) {
            dependencyList.push(arg1);
            dependencyList_value.push(cdataset.Depends);
        }


        //To display checked property of radio button
        return cdataset.Value;
    },

    'extractKeynameValue1': function(arg1) {
        cdataset = settingsmetadata.findOne({
            'Type': 'value',
            'KeyName': arg1
        }, {
            sort: {
                'Value': 1
            }
        });
        //To display checked property of radio button


        return cdataset.Value;
    },

    'extractRadioButtonChecked': function(arg1, arg2) {
        Restaurant = Session.get("RestaurantNameVar");
        var dataset = settingsmetadata.findOne({
            'Type': arg2,
            'KeyName': arg1
        }, {
            sort: {
                'sheetRowId': 1
            }
        });
        var security = dataset.Security;
        var checked_value = dataObtained[security][Restaurant][arg1];

        checkedList.push(checked_value);
        checkedList_2.push(arg1);

        for (i in checkedList) {
            var label = $("#1" + checkedList_2[i]);
            var label2 = $("#2" + checkedList_2[i]);

            if (checkedList[i].toLowerCase() == label[0].innerText.toLowerCase()) {
                id.push($("#1" + checkedList_2[i]).attr('for'));
            } else if (checkedList[i].toLowerCase() == label2[0].innerText.toLowerCase()) {
                id.push($("#2" + checkedList_2[i]).attr('for'));
            }
        }

        $(function() {
            for (var j in id) {
                $('#' + id[j]).prop('checked', true);
            }
        });
    },

    'extractKeyname_Value': function(arg1) {
        return settingsmetadata.find({
            'Type': arg1
        }, {
            sort: {
                'sheetRowId': 1
            }
        });
    },




    'extractRestaurantList': function(arg1) {
        Restaurant = this["public"]["orgCodeSupported"]["orgcodes"][0];
        Session.set("RestaurantNameVar", Restaurant);

        return this["public"]["orgCodeSupported"]["orgcodes"][arg1];
    }
});


Template.userInfo.events({


    'change .restaurantList': function(event) {
        Restaurant = document.getElementById("restaurants").value;
        Session.set("RestaurantNameVar", Restaurant);
        Session.set("displayTextBox", true);
        Session.set("displayEditOptions", false);
    },

    'click #edit': function(event) {
        event.preventDefault();
        document.getElementById("field").disabled = false;
        Session.set("displayEditOptions", true);
        Session.set("displayTextBox", false);
    },

    'click #addRestaurant': function(event) {
        event.preventDefault();
        Router.go('/myForm');
    },

    'submit form': function(event) {
        event.preventDefault();
        Session.set("displayEditOptions", false);
        Session.set("displayTextBox", true);
        tmpval = valueToInsert["private"][Restaurant];
        tmpval1 = valueToInsert["public"][Restaurant];
        Meteor.call('newtodb', valueToInsert, ClientsName, Restaurant, tmpval, tmpval1);
        alert("Data updated");
    }

});