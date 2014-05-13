(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#getsums').click(sum);
  }
  function sum(e) {
    var data = $('#sumlist').serialize();
    $.ajax({
      url: '/sumlist',
      type: 'POST',
      data: data,
      success: (function(response) {
        $('#result').text(response.list);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=sumlist.map
