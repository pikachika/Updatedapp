Template.clientInput.helpers({
 
 'displayPaymentDetails' : function(){
    return Session.get("toDisplayPaymentDetails");
  }

});

Template.clientInput.events({

 'click .enableOnlinePayment' : function(evt,tmpl){
 	paymentDisplay=true;
    Session.set("toDisplayPaymentDetails",true);
   },

 'click .disableOnlinePayment' : function(evt,tmpl){
 	paymentDisplay=false;
    Session.set("toDisplayPaymentDetails",false);
   }

});