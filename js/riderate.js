// Logic

var data = {
  total : 0,
  prevLcTunnelIndex : -1,
  prevCcTunnelIndex : -1
};


var kmPrice = function(amount) {
  if (isNaN(amount)) {
    amount = 0;
  }
  if (amount < 0) {
    amount = 0;
  }
  amount = amount * 4.5;
  return amount;
};

var minPrice = function(amount) {
  if (isNaN(amount)) {
    amount = 0;
  }
  if (amount < 0) {
    amount = 0;
  }
  return amount;
};

var harbourBridge = 4;
var m5 = 4.57;
var easternDistributor = 6.95;

//laneCoveTunnelToll
var lcTunnelToll = [3.21, 1.61];
var lcMainTunnel = 3.21;
var militaryRd = 1.61;


//crossCityTunnelToll
var ccTunnelToll = [5.47, 2.58];
var ccMainTunnel = 5.47;
var sirJohnYoungCres = 2.58;
