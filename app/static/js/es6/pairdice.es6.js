(function(){
  'use strict';

  $(document).ready(init);

  function init (){
    $('#roll').click(roll);
  }

  function roll(e){

    $.ajax({
      url: '/pairs',
      type: 'POST',
      success: response => {
        $('#message').text('Winner: ' + response.message);
        $('#dice1').attr('src', '/img/dice_' + response.dice1 + '.png');
        $('#dice2').attr('src', '/img/dice_' + response.dice2 + '.png');
      }
    });

    e.preventDefault();
  }
})();
