var CustomerSMS = "",WebmasterSMS= "",ClientSMS= "",ProcessorSMS= "",WebmasterphoneSMS= "",accsid= "",token= "",phno= "",FromEmailAdd= "",
ClientEmailAdd= "",WebMasterAdd= "",WebsheetsUrl= "",CustomerEmail= "",ClientEmail= "",WebmasterEmail= "",ProcessorEmail= "",
Printerprocessor= "",Orderprocessor = "",paymentprocessor="",RestaurantName="";


  

  Template.userInfo.helpers({

  'pullData' : function(){
    dataObtained=Session.get("toSearchData");
    return dataObtained;
  },

  'restaurantData' : function(arg1,arg2){
    var RestaurantName=Session.get("RestaurantNameVar");
    return this[arg1][RestaurantName][arg2];
  },

  'extractDataDetails' : function(arg1,arg2,arg3){  
    var RestaurantName=Session.get("RestaurantNameVar");  
    var arg4=dataObtained["public"][RestaurantName][arg2];
    return this[arg1][RestaurantName][arg4][arg3];
  },

  'extractRestaurantName' : function(arg1){
    //console.log(datavar);
    //if(datavar == "" || datavar== undefined){
      //console.log("undefined");

    if(RestaurantName == undefined){
    var RestaurantName=this["public"]["orgCodeSupported"][arg1];
    Session.set("RestaurantNameVar",RestaurantName);
    datavar=this["public"]["orgCodeSupported"][arg1];  
    }
    return datavar;
  },

  'extractRestaurantList' : function(arg1){
   return this["public"]["orgCodeSupported"]["orgcodes"][arg1];  
  },

  'extractDataSms' : function(arg1,arg2,arg3){    
    var RestaurantName=Session.get("RestaurantNameVar");    
    var arg4=dataObtained["private"][RestaurantName][arg2];
    return this[arg1][RestaurantName][arg4][arg3];
  }
});

  
  Template.userInfo.events({


  'change .restaurantList' : function(event){
    RestaurantName=document.getElementById("restaurants").value;
    Session.set("RestaurantNameVar",RestaurantName);
  },

  'click .edit' : function(event){
     event.preventDefault();
     document.getElementById("field").disabled = false;
   },

  'submit form' : function(event){
  event.preventDefault();
  ClientsName= event.target.clientname.value;
  imageformatter=event.target.ImageFormatter.value;
  countrycode=event.target.CountryCodes.value;
  currencycode=event.target.CurrencyCode.value;
  gmtoffset=event.target.GMTOffset.value;
  onlinepayment=event.target.OnlinePayment.value;
  Restaurant=event.target.RestaurantName.value;
  rootURL=event.target.RootUrl.value;
  onlinepayment=event.target.OnlinePayment.value;
  Sms=event.target.sms.value;
  Email = event.target.email.value;
  Printer = event.target.Printer.value;
  OrderSystem = event.target.OrderSystem.value;
  WebsheetsUrL= event.target.WebsheetsURL.value;
  paymentprocessor=event.target.PaymentProcessor.value;
  PublicKey=event.target.PublicKey.value;
  PrivateKey=event.target.PrivateKey.value;
  APIVersion=event.target.ApiVersion.value;
  CustomerSMS= event.target.smsCustomer.value;
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
  valueToInsert = {name: ClientsName};
  valueToInsert["public"]={
    orgCode:{
      "default" : Restaurant
    }};
  valueToInsert["public"][Restaurant]={
    imageFormatter: imageformatter,
    countryCode: countrycode,
    currencyCode: currencycode,
    gmtOffset: gmtoffset,
    onlinePayment: onlinepayment,
    paymentProcessor: paymentprocessor
   };
   if(paymentprocessor != ""){
    valueToInsert["public"][Restaurant][paymentprocessor]= {
      publicKey: PublicKey
    };}
  valueToInsert["private"]={};
  valueToInsert["private"][Restaurant]={
    name: ClientsName,
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
  if(paymentprocessor != ""){
    valueToInsert["private"][Restaurant][paymentprocessor]= {
      privateKey: PrivateKey,
      apiVersion: APIVersion
    };}
  if (ProcessorSMS != ""){
   valueToInsert["private"][Restaurant][ProcessorSMS] = {
    accountSID: accsid,
    authToken: token,
    phoneNumber: phno 
  }; }
  if (ProcessorEmail != ""){
   valueToInsert["private"][Restaurant][ProcessorEmail] = {
    apiKey: APIKey,
    domainName: DomainName}; }

  tmpval=valueToInsert["private"][Restaurant];

  tmpval1=valueToInsert["public"][Restaurant];
  Meteor.call('updateDb',valueToInsert,ClientsName,Restaurant,tmpval,tmpval1); 
  alert("Data updated");
  }


  
  
  }); 



