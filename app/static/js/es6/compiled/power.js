(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#exp').click(exp);
  }
  function exp(e) {
    var data = $('#findPower').serialize();
    $.ajax({
      url: '/power',
      type: 'POST',
      data: data,
      success: (function(response) {
        $('#result').text(response.power);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=power.map
