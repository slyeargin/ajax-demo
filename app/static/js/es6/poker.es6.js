(function(){
  'use strict';

  $(document).ready(init);

  function init (){
    $('#draw').click(draw);
  }

  function draw(e){

    $.ajax({
      url: '/poker',
      type: 'POST',
      success: response => {
        console.log(response);
        $('#card1').removeClass().addClass('card ' + response[0].rank.class + ' ' + response[0].suit.class);
        $('#card1').empty().prepend(response[0].rank.name + '<br/>' + response[0].suit.name);
        $('#card2').removeClass().addClass('card ' + response[1].rank.class + ' ' + response[1].suit.class);
        $('#card2').empty().prepend(response[1].rank.name + '<br/>' + response[1].suit.name);
        $('#card3').removeClass().addClass('card ' + response[2].rank.class + ' ' + response[2].suit.class);
        $('#card3').empty().prepend(response[2].rank.name + '<br/>' + response[2].suit.name);
        $('#card4').removeClass().addClass('card ' + response[3].rank.class + ' ' + response[3].suit.class);
        $('#card4').empty().prepend(response[3].rank.name + '<br/>' + response[3].suit.name);
        $('#card5').removeClass().addClass('card ' + response[4].rank.class + ' ' + response[4].suit.class);
        $('#card5').empty().prepend(response[4].rank.name + '<br/>' + response[4].suit.name);
        $('#hand').text('This is my hand.');
      }
    });

    e.preventDefault();
  }
})();
