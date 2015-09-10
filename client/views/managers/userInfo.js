

  Template.userInfo.helpers({

  'pullData' : function(){
    dataObtained=Session.get("toSearchData");
    return dataObtained;
	},

  'restaurantExists' : function(){
    return Session.get("TodataExists");
  },

  'restaurantData' : function(arg1,arg2){
    return this[arg1][RestaurantName][arg2];
  },

  'extractDataDetails' : function(arg1,arg2,arg3){  	
    var arg4=dataObtained["public"][RestaurantName][arg2];
    return this[arg1][RestaurantName][arg4][arg3];
  },

  'extractRestaurantName' : function(arg1,arg2){    
    return this["public"][arg1][arg2];
  },

  'extractDataSms' : function(arg1,arg2,arg3){  	
    var arg4=dataObtained["private"][RestaurantName][arg2];
    return this[arg1][RestaurantName][arg4][arg3];
  },

  'restaurantNameData' : function(){
    return RestaurantName; }
});


  DataVariable="";
  var CustomerSMS = "",WebmasterSMS= "",ClientSMS= "",ProcessorSMS= "",WebmasterphoneSMS= "",accsid= "",token= "",phno= "",FromEmailAdd= "",
  ClientEmailAdd= "",WebMasterAdd= "",WebsheetsUrl= "",CustomerEmail= "",ClientEmail= "",WebmasterEmail= "",ProcessorEmail= "",
  Printerprocessor= "",Orderprocessor = "",paymentprocessor="";
  
  Template.userInfo.events({

  'click .edit' : function(event){
     document.getElementById("field").disabled = false;
   }
  
  
  }); 
    




