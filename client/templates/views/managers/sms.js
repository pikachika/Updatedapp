 Template.clientInput.helpers({
  'displaySms' : function(){
    return Session.get("toDisplaySms");
  },

  'displayWebMasterPhone' : function(){
    return Session.get("toDisplayWebMaster");
  },
   
  'displaySmsProcessorDetails' : function(){
    return Session.get("todisplaySmsProcessorDetails");
  }
  	
});

 Template.clientInput.events({
  
  'click .enableSms' : function(evt,tmpl){
    Session.set("toDisplaySms",true);    
    smsdisplay = true; 
   },

  'click .disableSms' : function(evt,tmpl){      
    smsdisplay = false; 
    webmasterdisplay = false;
    Session.set("toDisplayWebMaster",false);
    Session.set("todisplaySmsProcessorDetails",false);
    Session.set("toDisplaySms",false);
   },

   'click .enableWebMastersms' : function(evt,tmpl){
    webmasterdisplay = true;
    Session.set("toDisplayWebMaster",true);
   },

  'click .disableWebMastersms' : function(evt,tmpl){
    webmasterdisplay = false;
    Session.set("toDisplayWebMaster",false);
   },
   'click .sendGridProcessorsms' : function(evt,tmpl){
    Session.set("todisplaySmsProcessorDetails",true);
   },

   'click .twilioProcessorsms' : function(evt,tmpl){
    Session.set("todisplaySmsProcessorDetails",true);
   }

});