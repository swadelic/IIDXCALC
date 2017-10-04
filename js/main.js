//HI SPEED settings in game
var hs_345 = [1, 2, 3];
var hs_6789 = [1, 2, 3, 4];
var hs_10 = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];
var hs_11up = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
//HI SPEED actual values
var hsval_3 = [2, 3, 4];
var hsval_4 = [2, 2.75, 3.5];
var hsval_5 = [2, 2.5, 3];
var hsval_6789 = [2, 2.5, 3, 3.5];
var hsval_10 = [1.5, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5];
var hsval_11up = [1.5, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4];

var version = 0;
var green = 0;
var hispeedval = 0;
var bpm = 0;
var sud = 0;

function onLoad() {

  //Version select
  $('#version').change(function(){
    version = $('#version').val();
    $('#hispeed').empty();
    $('#hispeed').append($('<option>HI SPEED</option>').val(0));
    hispeedval = 0;

    if (version == 0){
      $('#logo').css("background-image", "url(img/logo/logo.png)");
    } else {
      $('#logo').css("background-image", "url(img/logo/" + version + ".png)");
    }

    //Populates HISPEED menu
    if(version >= 3 && version <= 5){
      for (i = 1; i < (hs_345.length + 1) ; i++){
        $('#hispeed').append($('<option></option>').val(i).text(hs_345[i-1]));
      }
    } else if (version >= 6 && version <= 9){
      for (i = 1; i < (hs_6789.length + 1) ; i++){
        $('#hispeed').append($('<option></option>').val(i).text(hs_6789[i-1]));
      }
    } else if (version == 10){
      for (i = 1; i < (hs_10.length + 1) ; i++){
        $('#hispeed').append($('<option></option>').val(i).text(hs_10[i-1]));
      }
    } else if (version >= 11){
      for (i = 1; i < (hs_11up.length + 1) ; i++){
        $('#hispeed').append($('<option></option>').val(i).text(hs_11up[i-1]));
      }
    }
  })

  //Sets HISPEED to actual value
  $('#hispeed').change(function(){
    if(version == 3){
      hispeedval = hsval_3[($('#hispeed').val() - 1)]
    } else if (version == 4){
      hispeedval = hsval_4[($('#hispeed').val() - 1)]
    } else if (version == 5){
      hispeedval = hsval_5[($('#hispeed').val() - 1)]
    } else if (version >= 6 && version <= 9){
      hispeedval = hsval_6789[($('#hispeed').val() - 1)]
    } else if (version == 10){
      hispeedval = hsval_10[($('#hispeed').val() - 1)]
    } else if (version >= 11){
      hispeedval = hsval_11up[($('#hispeed').val() - 1)]
    }
  })

  //Keeps BPM in range 0-999
  $('#bpm').change(function(){
    newbpm = $('#bpm').val();
    if (newbpm < 0 || newbpm > 999){
      $('#bpm').val(bpm);
    } else {
      bpm = newbpm;
    }
  })
  //Keeps Green # in range 0-9999
  $('#green').change(function(){
    newgreen = $('#green').val();
    if (newgreen < 0 || newgreen > 9999){
      $('#green').val(green);
    } else {
      green = newgreen;
    }
  })

  //CALCULATE button
  $( '#calc' ).click(function(){
    if (version == 0 || hispeedval == 0 || green == 0 || bpm == 0){
      $('#num').text('');
    } else {
      sud = Math.round((1000 - (hispeedval * green * bpm) / 174));
      $('#num').text(sud);
    }
  })
  //CALCULATE key bindings - enter, space
  $(document).keypress(function(e) {
    if(e.which == 13 || e.which == 32) {
        $('#calc').click();
    }
  })

}

window.onload = onLoad;
