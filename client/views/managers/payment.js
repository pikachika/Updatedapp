Template.payment.helpers({
 
 'displayPaymentDetails' : function(){
    return Session.get("toDisplayPaymentDetails");
  }

});

Template.payment.events({

 'click .enableOnlinePayment' : function(evt,tmpl){
 	paymentDisplay=true;
    Session.set("toDisplayPaymentDetails",true);
   },

 'click .disableOnlinePayment' : function(evt,tmpl){
 	paymentDisplay=false;
    Session.set("toDisplayPaymentDetails",false);
   }

});