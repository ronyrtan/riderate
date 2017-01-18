$(document).ready( function () {



});



// Logic

var total = 0;

var kmPrice = function(amount) {
  if (isNaN(amount)) {
    amount = 0;
  }
  if (amount < 0) {
    amount = 0;
  }
  amount = amount * 4.5;
  total = total + amount;
  return total;
};

var minPrice = function(amount) {
  if (isNaN(amount)) {
    amount = 0;
  }
  if (amount < 0) {
    amount = 0;
  }
  total = total + amount;
  return total;
};

var harbourBridgeToll = 4;
var m5 = 4.57;
var easternDistributor = 6.95;

//laneCoveTunnelToll
var lCmainTunnel = 3.21;
var militaryRd = 1.61;


//crossCityTunnelToll
var cCmainTunnel = 5.47;
var sirJohnYoungCres = 2.58;
