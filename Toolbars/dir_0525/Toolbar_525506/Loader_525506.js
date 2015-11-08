(function() {
  if (!window.jQuery) {
    var jq = document.createElement('script'); jq.type = 'text/javascript';
    // Path to jquery.js file, eg. Google hosted version
    jq.src = '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
    document.getElementsByTagName('head')[0].appendChild(jq);
  }
  // proceed only when jQuery is ready
  var loadWibiya = function(callback) {
      if (window.jQuery) {
        if(typeof $ == undefined || !$('body') instanceof jQuery){
          jQuery.noConflict();
        }
        callback(jQuery);
      }
      else {
          window.setTimeout(function() { loadWibiya(callback); }, 100);
      }
  };
  loadWibiya(function($) {
    $(function() {
      var $body = $('body');
      var $wibiya = $('<div class="wibiyaDotComNewBarNotice"/>');
      $body.append($wibiya);
      $wibiya.css({
        'background'    : '#f00',
        'border'        : '0 !important',
        'borderRadius'  : '0 !important',
        'bottom'        : 0,
        'display'       : 'block',
        'font'          : '12px Arial, Helvetica, sans-serif',
        'fontWeight'    : 'normal',
        'height'        : '20px',
        'left'          : 0,
        'marginTop'     : '0 !important',
        'marginLeft'    : '0 !important',
        'marginRight'   : '0 !important',
        'marginBottom'  : '0 !important',
        'padding'       : '0 !important',
        'position'      : 'fixed',
        'width'         : '100%'
      });
    });
  });
})();
/*(function( $ ) {})(jQuery);*/
