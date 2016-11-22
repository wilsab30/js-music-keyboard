$(document).ready( function() {
  // your code here
  $('.c').click(function() {
    $('#cAudio')[0].load()
    $('#cAudio')[0].play();
  });
  $('.d').click(function() {
    $('#dAudio')[0].load()
    $('#dAudio')[0].play();
  });
  $('.e').click(function() {
    $('#eAudio')[0].load()
    $('#eAudio')[0].play();
  });
  $('.f').click(function() {
    $('#fAudio')[0].load()
    $('#fAudio')[0].play();
  });
  $('.g').click(function() {
    $('#gAudio')[0].load()
    $('#gAudio')[0].play();
  });
  $('.a').click(function() {
    $('#aAudio')[0].load()
    $('#aAudio')[0].play();
  });
  $('.b').click(function() {
    $('#bAudio')[0].load()
    $('#bAudio')[0].play();
  });



  $('body').keypress(function(event){
    console.log(event.key);
    if (event.key == 'c') {
      $('#cAudio')[0].load()
      $('#cAudio')[0].play();
    } else if (event.key == 'd') {
      $('#dAudio')[0].load()
      $('#dAudio')[0].play();
    } else if (event.key == 'e') {
      $('#eAudio')[0].load()
      $('#eAudio')[0].play();
    } else if (event.key == 'f') {
      $('#fAudio')[0].load()
      $('#fAudio')[0].play();
    } else if (event.key == 'g') {
      $('#gAudio')[0].load()
      $('#gAudio')[0].play();
    }else if (event.key == 'a') {
      $('#aAudio')[0].load()
      $('#aAudio')[0].play();
    }else if (event.key == 'b') {
      $('#bAudio')[0].load()
      $('#bAudio')[0].play();
    }
  });

});
