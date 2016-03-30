
var status = [];
var status_value = [];
var KeyNamesList = [];
dependency = [];
dependency_value = [];
has_parent = [];
parent_value = {};
sample_v = {};
sample_v["public"] = {};
sample_v["private"] = {};

Template.clientInput.helpers({

    'extractKeyname': function(arg1) {
        return settingsmetadata.find({
            'Type': arg1
        }, {
            sort: {
                'sheetRowId': 1
            }
        });
    },

    'extractParentKeyname': function(arg1) {
        dataset = settingsmetadata.findOne({
            'Type': 'textbox',
            'KeyName': arg1
        }, {
            sort: {
                'Value': -1
            }
        });
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
        //To display checked property of radio button
        if (cdataset.Depends) {
            dependency.push(arg1);
            dependency_value.push(cdataset.Depends);
        }
        if (cdataset.State == "default") {
            status.push("1" + arg1);
        }
        return cdataset.Value;
    },

    'extractKeynameValue1': function(arg1) {
        var cdataset = settingsmetadata.findOne({
            'Type': 'value',
            'KeyName': arg1
        }, {
            sort: {
                'Value': 1
            }
        });
        if (cdataset.Parent) {
            has_parent.push(arg1);
            parent_value.push(cdataset.Parent);
        }
        sample_v[cdataset.Security][cdataset.KeyName] = cdataset.Value;

        //To display default checked property of radio button

        if (cdataset.State == "default") {
            status.push("2" + arg1);
        }
        return cdataset.Value;
    },


    'nestedobj_creation': function(arg1) {
        var dataset = settingsmetadata.findOne({
            'KeyName': arg1
        });
        if (dataset.Parent) {
            has_parent.push(arg1);
            var createNestedObject = function(base, names) {
                for (var i = 0; i < names.length; i++) {
                    base = base[names[i]] = base[names[i]] || {};
                }
            };

            createNestedObject(parent_value, [dataset.Parent, arg1]);


        }
    },



    'db_insertion': function(arg1) {

        valueToInsert = {};
        ClientsName = undefined;
        Restaurant = undefined;

        $(document).ready(function(e) {

            $(document).on("change", 'input', function(event, target) {
                event.preventDefault();
                if ($(this)[0].name == "clientname") {
                    ClientsName = $(this).val();
                    //Enabling restaurant fields after confirming client name is entered by the user
                    $("#restaurant_field").attr("disabled", false);

                    valueToInsert = {
                        name: ClientsName
                    };
                    valueToInsert["public"] = {};
                    valueToInsert["private"] = {};
                }
                if ($(this)[0].name == "restaurant") {
                    Restaurant = $(this).val();
                    Meteor.call(
                        'checkDB', ClientsName, Restaurant,
                        function(error, result) {
                            if (result) {
                                alert("Restaurant already exists ! Please edit settings info");
                            } else {
                                //Enabling other fields after confirming client name and restaurant are entered by the user

                                $("#clientinput_field").attr("disabled", false);
                            }
                        }
                    );

                    valueToInsert["public"][Restaurant] = {};
                    valueToInsert["private"][Restaurant] = {};

                    valueToInsert["public"][Restaurant] = sample_v["public"];
                    valueToInsert["private"][Restaurant] = sample_v["private"];

                }

                if ($(this)[0].name != "clientname" || "restaurant") {
                    var tempvar = $(this)[0].name;
                    if ($(this)[0].type == "radio") {
                        var tempvar1 = $(this).next()[0].innerText.toLowerCase();
                    } else {
                        var tempvar1 = $(this).val().toLowerCase();
                    }
                    var security = $(this)[0].attributes.tagname.value;

                    //To store elements with parents in appropriate format
                    if (jQuery.inArray(tempvar, has_parent) !== -1) {
                        var dataset = settingsmetadata.findOne({
                            'KeyName': tempvar
                        }, {
                            sort: {
                                'Parent': 1
                            }
                        });


                        parent_value[dataset.Parent][tempvar] = tempvar1;
                        valueToInsert[security][Restaurant] = parent_value;
                    } else {
                        valueToInsert[security][Restaurant][tempvar] = tempvar1;

                    }

                    //to hide radio buttons when their parent gets disabled
                    for (var k in dependency) {
                        if (tempvar == dependency_value[k] && tempvar1 == "disabled") {
                            $('input:radio[name="' + dependency[k] + '"]').css('display', 'none');
                            $('label[for="' + dependency[k] + '"]').css('display', 'none');
                            $('#' + dependency[k]).css('display', 'none');
                            $('.' + dependency[k]).css('display', 'none');
                            //Resetting the values of dependant elements to null in db
                            valueToInsert[security][Restaurant][dependency[k]] = "";

                        }
                        //to show radio buttons when their parent gets enabled
                        else if (tempvar == dependency_value[k] && tempvar1 == "enabled") {
                            $('input:radio[name="' + dependency[k] + '"]').css('display', 'inline');
                            $('label[for="' + dependency[k] + '"]').css('display', 'inline');
                            $('#' + dependency[k]).css('display', 'inline');
                            $('.' + dependency[k]).css('display', 'inline');

                        }
                    }

                }



                tmpval = valueToInsert["private"][Restaurant];
                tmpval1 = valueToInsert["public"][Restaurant];
                Meteor.call('addTodb', valueToInsert, ClientsName, Restaurant, tmpval, tmpval1);


            });


        });

    }

});



Template.clientInput.events({


    'click .ClientName': function(evt, tmpl) {
        event.preventDefault();
        //To display checked property of radio button
        for (var i in status) {
            document.getElementById(status[i]).checked = true;
        }


    },

    'submit form': function(event) {
        event.preventDefault();

        tmpval = valueToInsert["private"][Restaurant];
        tmpval1 = valueToInsert["public"][Restaurant];
        Meteor.call('addTodb', valueToInsert, ClientsName, Restaurant, tmpval, tmpval1);
        Router.go('/');

    }

});