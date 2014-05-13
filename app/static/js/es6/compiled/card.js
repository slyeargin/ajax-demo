(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#draw').click(draw);
  }
  function draw(e) {
    $.ajax({
      url: '/cards',
      type: 'POST',
      success: (function(response) {
        $('.card').removeClass().addClass('card ' + response.rank.class + ' ' + response.suit.class);
        $('.card').empty().prepend(response.rank.name + '<br/>' + response.suit.name);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=card.map
