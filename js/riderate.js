// UI

// $(document).ready( function () {

  $('#calculate').on('click', function() {
    var km = kmPrice( parseInt($('#km').val()) );
    var min = minPrice( parseInt($('#minutes').val()) );
    data.total += km + min;
    $('#total').html('$' + data.total.toFixed(2));
  });

  var addTolls = function(sender, toll) {
    if ($(sender).is(':checked')) {
      data.total += toll;
    } else {
      data.total -= toll;
    }
    $('#total').html('$' + data.total.toFixed(2));
  };

  $('#m5').change(function() {
    addTolls($(this), m5);
  });
  $('#harbourBridge').change(function() {
    addTolls($(this), harbourBridge);
  });
  $('#easternDistributor').change(function() {
    addTolls($(this), easternDistributor);
  });

  $('#laneCoveTunnel').change(function () {
    var index = $('#lcTunnelSelect').prop('selectedIndex');
    if ($(this).is(':checked')) {
      // show drop down menu
      $('.lcTunnel').fadeIn();
      data.prevLcTunnelIndex = addSelectToll(lcTunnelToll, index, data.prevLcTunnelIndex);
    } else {
      // hide drop down menu
      $('.lcTunnel').fadeOut();
      data.total -= lcTunnelToll[index];
      data.prevLcTunnelIndex = -1;
      $('#total').html('$' + data.total.toFixed(2));
    }
  })

  $('#lcTunnelSelect').change(function() {
    console.log($(this).val() + "   " + $(this).prop('selectedIndex'));
    data.prevLcTunnelIndex = addSelectToll(lcTunnelToll, $(this).prop('selectedIndex'), data.prevLcTunnelIndex);
  })

  var addSelectToll = function(array, index, prevIndex) {
    console.log(prevIndex);
    data.total += array[index];
    if (prevIndex !== -1 && prevIndex !== index) {
      console.log('hello');
      data.total -= array[prevIndex];
    }
    prevIndex = index;
    $('#total').html('$' + data.total.toFixed(2));
    return prevIndex;
  }




  // var addSelectToll = function(sender, sign) {
  //   // console.log(total + "  " + prevLcTunnel);
  //   switch ($('#lcTunnelSelect').val()) {
  //     case "lcMainTunnel":
  //       total += (lcMainTunnel * sign);
  //       if (lcMainTunnel !== prevLcTunnel) {
  //         total -= prevLcTunnel;
  //       }
  //       prevLcTunnel = lcMainTunnel;
  //       break;
  //     case "militaryRd":
  //       total += (militaryRd * sign);
  //       if (militaryRd !== prevLcTunnel) {
  //         total -= prevLcTunnel;
  //       }
  //       prevLcTunnel = militaryRd;
  //   }
  //   $('#total').html('$' + total.toFixed(2));
  // }

  // $('#m5').change(function() {
  //   if ($(this).is(':checked')) {
  //     total += m5;
  //   } else {
  //     total -= m5;
  //   }
  //   $('#total').html('$' + total);
  // });

// });

// Logic
var data = {
  total : 0,
  prevLcTunnelIndex : -1
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
var lcTunnelToll = [3.21, 1.61]
var lcMainTunnel = 3.21;
var militaryRd = 1.61;


//crossCityTunnelToll
var cCmainTunnel = 5.47;
var sirJohnYoungCres = 2.58;
