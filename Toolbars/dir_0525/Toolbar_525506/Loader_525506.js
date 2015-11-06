if (!window.jQuery) {
  var jq = document.createElement('script'); jq.type = 'text/javascript';
  // Path to jquery.js file, eg. Google hosted version
  jq.src = '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
  document.getElementsByTagName('head')[0].appendChild(jq);
}
jQuery.noConflict();
(function( $ ) {
  $(function() {
    var $body = $('body');
    var $wibiya = $('<div class="wibiyaDotComNewBarNotice"/>');
    $body.append($wibiya);
    $wibiya.css({
      'background' : '#f00',
      'position' : 'static',
      'bottom' : 0,
      'left' : 0,
      'width' : '100%',
      'height' : '20px'
    });
  });
})(jQuery);
