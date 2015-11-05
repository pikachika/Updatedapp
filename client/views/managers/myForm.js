Router.route('/myForm');
Router.route('/userInfo');
Router.route('/', {
    template: 'intro'
});


DataVariable = "";
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
    paymentprocessor = "";

Template.myForm.events({

    'submit form': function(event) {
        event.preventDefault();
        ClientsName = event.target.clientname.value;
        imageformatter = event.target.ImageFormatter.value;
        countrycode = event.target.CountryCodes.value;
        currencycode = event.target.CurrencyCode.value;
        gmtoffset = event.target.GMTOffset.value;
        onlinepayment = event.target.OnlinePayment.value;
        Restaurant = event.target.RestaurantName.value;
        rootURL = event.target.RootUrl.value;
        onlinepayment = event.target.OnlinePayment.value;
        Sms = event.target.sms.value;
        Email = event.target.email.value;
        Printer = event.target.Printer.value;
        OrderSystem = event.target.OrderSystem.value;
        WebsheetsUrL = event.target.WebsheetsURL.value;
        if (paymentDisplay == true) {
            paymentprocessor = event.target.PaymentProcessor.value;
            PublicKey = event.target.PublicKey.value;
            PrivateKey = event.target.PrivateKey.value;
            APIVersion = event.target.ApiVersion.value;
        }
        if (smsdisplay == true) {
            CustomerSMS = event.target.smsCustomer.value;
            ProcessorSMS = event.target.smsProcessor.value;
            WebmasterSMS = event.target.smsWebMaster.value;
            ClientSMS = event.target.smsClient.value;
            accsid = event.target.AccSID.value;
            token = event.target.AuthToken.value;
            phno = event.target.PhoneNumber.value;
        }
        if (webmasterdisplay == true) {
            WebmasterphoneSMS = event.target.smsWebMasterPhone.value;
        }
        if (emaildisplay == true) {
            CustomerEmail = event.target.EmailCustomer.value;
            ClientEmail = event.target.EmailClient.value;
            WebmasterEmail = event.target.emailWebMaster.value;
            ProcessorEmail = event.target.emailProcessor.value;
            FromEmailAdd = event.target.FromEmail.value;
            APIKey = event.target.APIKey.value;
            DomainName = event.target.DomainName.value;
        }
        if (emailclientdisplay == true) {
            ClientEmailAdd = event.target.ClientEmail.value;
        }
        if (webmasteremaildisplay == true) {
            WebMasterAdd = event.target.WebMasterEmail.value;
        }
        if (printerdisplay == true) {
            Printerprocessor = event.target.PrinterProcessor.value;
        }
        if (orderdisplay == true) {
            Orderprocessor = event.target.OrderProcessor.value;
        }
        valueToInsert = {
            name: ClientsName
        };
        valueToInsert["public"] = {};
        valueToInsert["public"]["orgCodeSupported"] = {
            orgcodes: [Restaurant],
            "default": Restaurant
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
            restaurant: Restaurant,
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
        Meteor.call('addTodb', valueToInsert, ClientsName, Restaurant, tmpval, tmpval1);
    }
});