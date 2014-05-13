(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#roll').click(roll);
  }
  function roll(e) {
    $.ajax({
      url: '/dice',
      type: 'POST',
      success: (function(response) {
        $('#dice').attr('src', '/img/dice_' + response.side + '.png');
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=singledice.map
