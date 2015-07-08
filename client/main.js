  eCustomer="";
  eClient="";
  eWebmaster="";
  eProcessor="";
  eEmailCustomer="";
  eEmailClient="";
  eWebMasterEmail="";
  eEmailProcessor="";
  eprinterProcessor="";
  eorderProcessor="";
  
     
  Template.clientInput.events({
  
  'submit form' : function(event){
  event.preventDefault();
  esms=event.target.sms.value;    
  eCustomer= event.target.smsCustomer.value;
  eProcessor = event.target.smsProcessor.value;
  eWebmaster = event.target.smsWebMaster.value;
  eClient = event.target.smsClient.value;
  webmasterPhone = event.target.smsWebMasterPhone.value;
  accsid = event.target.AccSID.value;
  token = event.target.AuthToken.value;
  phno = event.target.PhoneNumber.value;
  APIKey = event.target.APIKey.value;
  DomainName = event.target.DomainName.value;
  FromEmailAdd = event.target.FromEmail.value;
  ClientEmailAdd = event.target.ClientEmail.value;
  WebMasterAdd = event.target.WebMasterEmail.value;
  WebsheetsUrL= event.target.WebsheetsURL.value;
  ClientsName= event.target.clientname.value;
  eEmail = event.target.email.value;
  eEmailCustomer = event.target.EmailCustomer.value;
  eEmailClient = event.target.EmailClient.value;
  eWebMasterEmail = event.target.emailWebMaster.value;
  eEmailProcessor = event.target.emailProcessor.value;
  ePrinter = event.target.Printer.value;
  eprinterProcessor = event.target.PrinterProcessor.value;
  eOrderSystem = event.target.OrderSystem.value;
  eorderProcessor = event.target.OrderProcessor.value;
  valueToInsert = {
  name: ClientsName,
  sms: esms,
  smsCustomer: eCustomer,
  smsClient: eClient,
  smsWebMaster: eWebmaster,
  smsProcessor: eProcessor,
  smsWebmasterPhoneNumber: webmasterPhone,
  email: eEmail,
  emailCustomer: eEmailCustomer,
  emailClient: eEmailClient,  
  emailWebmaster: eWebMasterEmail,
  emailProcessor: eEmailProcessor,
  emailFromAddress: FromEmailAdd,
  emailClientAddress: ClientEmailAdd,
  emailWebmasterAddress: WebMasterAdd, 
  printer: ePrinter,
  printerProcessor: eprinterProcessor,
  orderSystem: eOrderSystem,
  orderProcessor: eorderProcessor,
  websheetsUrl: WebsheetsUrL
   }
  if (eProcessor != ""){
   valueToInsert[eProcessor] = {
    accountSID: accsid,
    authToken: token,
    phoneNumber: phno}}
  if (eEmailProcessor != ""){
   valueToInsert[eEmailProcessor] = {
    apiKey: APIKey,
    domainName: DomainName} }
  Meteor.call('addTodb',valueToInsert); 
  }  
  }); 
    

