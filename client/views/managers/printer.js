Template.printer.helpers({
 
 'displayPrinterDetails' : function(){
    return Session.get("toDisplayPrinterDetails");
  }

});

Template.printer.events({

 'click .enablePrinter' : function(evt,tmpl){
 	printerdisplay = true;
    Session.set("toDisplayPrinterDetails",true);
   },

 'click .disablePrinter' : function(evt,tmpl){
 	printerdisplay = false;
    Session.set("toDisplayPrinterDetails",false);
   }

});