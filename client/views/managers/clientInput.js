Template.clientInput.helpers({

  'displayCurrency' : function(){
    return Session.get("toDisplayCurrencyCode");
  },

'textbox': function() {
        querydata = MetaData.findOne({});
        console.log(querydata);
        Session.set("textboxData", querydata);
        dataObtained = Session.get("textboxData");
        return dataObtained;
    }
});

Template.clientInput.events({
    
  'change .countryCode' : function(evt,tmpl){
    var countryc=document.getElementById("country").value;
    var currency;
    switch (countryc) {
     case "US":
        currency = "USD";
        break;
     case "UK":
        currency = "GBP";
        break;
     case "IN":
        currency = "INR";
        break;
     case "CA":
        currency = "CAD";
        break;
     case "AU":
        currency = "AUD";
        break;  
     } 
    Session.set("toDisplayCurrencyCode",currency);
   }

 });
