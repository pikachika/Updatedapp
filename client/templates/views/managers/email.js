
  Template.clientInput.helpers({
  

  'displayEmail' : function(){
    return Session.get("toDisplayEmail");
  },

  'displayEmailClientAdd' : function(){
    return Session.get("toDisplayEmailClient");
  },

  'displayEmailWebMasterAdd' : function(){
    return Session.get("toDisplayEmailWebMasterAdd");
  },

  'displayEmailProcessorDetails' : function(){
    return Session.get("toDisplayEmailProcessor");
  }

});

  Template.clientInput.events({
  

   'click .enableEmail' : function(evt,tmpl){
    Session.set("toDisplayEmail",true);
    emaildisplay = true;
   },

  'click .disableEmail' : function(evt,tmpl){
    emaildisplay = false;
    emailclientdisplay = false;
    webmasteremaildisplay = false;
    Session.set("toDisplayEmail",false);
    Session.set("toDisplayEmailWebMasterAdd",false);
    Session.set("toDisplayEmailProcessor",false);
    Session.set("toDisplayEmailClient",false);
   },

   'click .enableEmailClient' : function(evt,tmpl){
    emailclientdisplay = true;
    Session.set("toDisplayEmailClient",true);
   },

  'click .disableEmailClient' : function(evt,tmpl){
    emailclientdisplay = false;
    Session.set("toDisplayEmailClient",false);
   },

   'click .enableWebMasteremail' : function(evt,tmpl){
    webmasteremaildisplay = true;
    Session.set("toDisplayEmailWebMasterAdd",true);
   },

  'click .disableWebMasteremail' : function(evt,tmpl){
    webmasteremaildisplay = false;
    Session.set("toDisplayEmailWebMasterAdd",false);
   },

   'click .mailgunProcessoremail' : function(evt,tmpl){
    Session.set("toDisplayEmailProcessor",true);
   },

  'click .otherProcessoremail' : function(evt,tmpl){
    Session.set("toDisplayEmailProcessor",true);
   }

 });
