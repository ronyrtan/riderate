// UI

$('#calculate').on('click', function() {
  var km = kmPrice( parseInt($('#km').val()) );
  var min = minPrice( parseInt($('#minutes').val()) );
  data.total += km + min;
  $('#total').html('$' + data.total.toFixed(2));
});

// Add toll function for single set toll.

var addTolls = function(sender, toll) {
  if ($(sender).is(':checked')) {
    data.total += toll;
  } else {
    data.total -= toll;
  }
  $('#total').html('$' + data.total.toFixed(2));
};

// Single set toll prices
//m5
$('#m5').change(function() {
  addTolls($(this), m5);
});

// Harbour Bridge
$('#harbourBridge').change(function() {
  addTolls($(this), harbourBridge);
});

// Eastern Distributor
$('#easternDistributor').change(function() {
  addTolls($(this), easternDistributor);
});


// Lane Cove Tunnel

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


// Cross City Tunnel Toll

$('#crossCityTunnel').change(function () {
  var index = $('#ccTunnelSelect').prop('selectedIndex');
  if ($(this).is(':checked')) {
    $('.ccTunnel').fadeIn();
    data.prevCcTunnelIndex = addSelectToll(ccTunnelToll, index, data.prevCcTunnelIndex);
  } else {
    $('.ccTunnel').fadeOut();
    data.total -= ccTunnelToll[index];
    data.prevCcTunnelIndex = -1;
    $('#total').html('$' + data.total.toFixed(2));
  }
})

$('#ccTunnelSelect').change(function() {
  data.prevCcTunnelIndex = addSelectToll(ccTunnelToll, $(this).prop('selectedIndex'), data.prevCcTunnelIndex);
})


// Function for tolls with 2 options.

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
