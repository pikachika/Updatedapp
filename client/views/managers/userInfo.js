

  Template.userInfo.helpers({
  'pullData' : function(){
    dataObtained=Session.get("toSearchData");
    return dataObtained;
	},

  'restaurantData' : function(arg1,arg2){
    return this[arg1][RestaurantName][arg2];
  },

  'extractDataDetails' : function(arg1,arg2,arg3){  	
    var arg4=dataObtained["public"][RestaurantName][arg2];
    return this[arg1][RestaurantName][arg4][arg3];
  },

  'extractDataSms' : function(arg1,arg2,arg3){  	
    var arg4=dataObtained["private"][RestaurantName][arg2];
    return this[arg1][RestaurantName][arg4][arg3];
  },

  'restaurantNameData' : function(){
    return RestaurantName; }
});


