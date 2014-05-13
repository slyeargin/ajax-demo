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
        $('#card').attr('src', '/img/dice_' + response.side + '.png');
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=card.map
