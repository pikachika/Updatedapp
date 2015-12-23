var CustomerSMS = "",
    WebmasterSMS = "",
    ClientSMS = "",
    ProcessorSMS = "",
    WebmasterphoneSMS = "",
    accsid = "",
    token = "",
    phno = "",
    FromEmailAdd = "",
    ClientEmailAdd = "",
    WebMasterAdd = "",
    WebsheetsUrl = "",
    CustomerEmail = "",
    ClientEmail = "",
    WebmasterEmail = "",
    ProcessorEmail = "",
    Printerprocessor = "",
    Orderprocessor = "",
    paymentprocessor = "",
    RestaurantName = undefined;
dataObtained = "";




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


    'displayEditOptions': function() {
        return Session.get("displayEditOptions");
    },

    'displayTextBox': function() {
        return Session.get("displayTextBox");
    },

    'RadioSelection': function(arg1, arg2, arg3) {
        var RestaurantName = Session.get("RestaurantNameVar");
        var datastored = this[arg1][RestaurantName][arg2];
        if (datastored == "Enabled" || "XXXX" || "Mailgun" || "Sendgrid") {
            return true;
        } else {
            document.getElementById(arg3).checked = "checked";
            return false;
        }
    },

    'restaurantData': function(arg1, arg2) {
        RestaurantName = Session.get("RestaurantNameVar");
        return this[arg1][RestaurantName][arg2];
    },

    'extractDataDetails': function(arg1, arg2, arg3) {
        var RestaurantName = Session.get("RestaurantNameVar");
        var arg4 = dataObtained["public"][RestaurantName][arg2];
        return this[arg1][RestaurantName][arg4][arg3];
    },


    'extractRestaurantList': function(arg1) {
        RestaurantName = Session.get("RestaurantNameVar", RestaurantName);
        if (RestaurantName == undefined) {
            RestaurantName = this["public"]["orgCodeSupported"]["default"];
            Session.set("RestaurantNameVar", RestaurantName);
        }
        return this["public"]["orgCodeSupported"]["orgcodes"][arg1];
    },

    'extractDataSms': function(arg1, arg2, arg3) {
        var RestaurantName = Session.get("RestaurantNameVar");
        var arg4 = dataObtained["private"][RestaurantName][arg2];
        return this[arg1][RestaurantName][arg4][arg3];
    }
});


Template.userInfo.events({


    'change .restaurantList': function(event) {
        RestaurantName = document.getElementById("restaurants").value;
        Session.set("RestaurantNameVar", RestaurantName);
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
        ClientsName = event.target.clientname.value;
        imageformatter = event.target.ImageFormatter.value;
        countrycode = event.target.CountryCodes.value;
        currencycode = event.target.CurrencyCode.value;
        gmtoffset = event.target.GMTOffset.value;
        onlinepayment = event.target.OnlinePayment.value;
        Restaurant = Session.get("RestaurantNameVar");
        rootURL = event.target.RootUrl.value;
        Sms = event.target.sms.value;
        Email = event.target.email.value;
        Printer = event.target.Printer.value;
        OrderSystem = event.target.OrderSystem.value;
        WebsheetsUrL = event.target.WebsheetsURL.value;
        paymentprocessor = event.target.PaymentProcessor.value;
        PublicKey = event.target.PublicKey.value;
        PrivateKey = event.target.PrivateKey.value;
        APIVersion = event.target.ApiVersion.value;
        CustomerSMS = event.target.smsCustomer.value;
        ProcessorSMS = event.target.smsProcessor.value;
        WebmasterSMS = event.target.smsWebMaster.value;
        ClientSMS = event.target.smsClient.value;
        accsid = event.target.AccSID.value;
        token = event.target.AuthToken.value;
        phno = event.target.PhoneNumber.value;
        WebmasterphoneSMS = event.target.smsWebMasterPhone.value;
        CustomerEmail = event.target.EmailCustomer.value;
        ClientEmail = event.target.EmailClient.value;
        WebmasterEmail = event.target.emailWebMaster.value;
        ProcessorEmail = event.target.emailProcessor.value;
        FromEmailAdd = event.target.FromEmail.value;
        APIKey = event.target.APIKey.value;
        DomainName = event.target.DomainName.value;
        ClientEmailAdd = event.target.ClientEmail.value;
        WebMasterAdd = event.target.WebMasterEmail.value;
        Printerprocessor = event.target.PrinterProcessor.value;
        Orderprocessor = event.target.OrderProcessor.value;
        valueToInsert = {
            name: ClientsName
        };
        valueToInsert["public"] = {
            orgCode: {
                "default": Restaurant
            }
        };
        valueToInsert["public"][Restaurant] = {
            imageFormatter: imageformatter,
            countryCode: countrycode,
            currencyCode: currencycode,
            gmtOffset: gmtoffset,
            onlinePayment: onlinepayment,
            paymentProcessor: paymentprocessor
        };
        if (paymentprocessor != "") {
            valueToInsert["public"][Restaurant][paymentprocessor] = {
                publicKey: PublicKey
            };
        }
        valueToInsert["private"] = {};
        valueToInsert["private"][Restaurant] = {
            clientName: ClientsName,
            rootUrl: rootURL,
            sms: Sms,
            smsCustomer: CustomerSMS,
            smsClient: ClientSMS,
            smsWebMaster: WebmasterSMS,
            smsProcessor: ProcessorSMS,
            smsWebmasterPhoneNumber: WebmasterphoneSMS,
            email: Email,
            emailCustomer: CustomerEmail,
            emailClient: ClientEmail,
            emailWebmaster: WebmasterEmail,
            emailProcessor: ProcessorEmail,
            emailFromAddress: FromEmailAdd,
            emailClientAddress: ClientEmailAdd,
            emailWebmasterAddress: WebMasterAdd,
            printer: Printer,
            printerProcessor: Printerprocessor,
            orderSystem: OrderSystem,
            orderProcessor: Orderprocessor,
            websheetsUrl: WebsheetsUrL
        };
        if (paymentprocessor != "") {
            valueToInsert["private"][Restaurant][paymentprocessor] = {
                privateKey: PrivateKey,
                apiVersion: APIVersion
            };
        }
        if (ProcessorSMS != "") {
            valueToInsert["private"][Restaurant][ProcessorSMS] = {
                accountSID: accsid,
                authToken: token,
                phoneNumber: phno
            };
        }
        if (ProcessorEmail != "") {
            valueToInsert["private"][Restaurant][ProcessorEmail] = {
                apiKey: APIKey,
                domainName: DomainName
            };
        }

        tmpval = valueToInsert["private"][Restaurant];

        tmpval1 = valueToInsert["public"][Restaurant];
        Meteor.call('updateDb', valueToInsert, ClientsName, Restaurant, tmpval, tmpval1);
        Session.set("displayEditOptions", false);
        Session.set("displayTextBox", true);
        alert("Data updated");
    }

});