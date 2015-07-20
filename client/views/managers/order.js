Template.order.helpers({

  'displayOrderDetails' : function(){
    return Session.get("toDisplayOrderDetails");
  }

});

Template.order.events({
    
 'click .enableOrderSystem' : function(evt,tmpl){
 	orderdisplay = true;
    Session.set("toDisplayOrderDetails",true);
   },

 'click .disableOrderSystem' : function(evt,tmpl){
 	orderdisplay = false;
    Session.set("toDisplayOrderDetails",false);
   }
 });
