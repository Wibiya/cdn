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
        if(typeof $ !== 'undefined' && !$('body') instanceof jQuery){
          jQuery.noConflict();
        }
        callback(jQuery);
      }
      else {
          window.setTimeout(function() { loadWibiya(callback); }, 100);
      }
  };
  loadWibiya(function($) {
    var $wibiya = $('<div class="wibiyaDotComNewBarNotice"/>');
    $(function() {
      var $body = $('body');
      $body.append($wibiya);
      var $css = '<style type="text/css">.wibiyaDotComNewBarNotice {background: none transparent;border-radius: 0 !important;border: 0 !important;bottom: 0;display: block;font: 12px Arial, Helvetica, sans-serif;font-size: 12px;font-weight: normal;height: 200px;left: 0;line-height: 1;margin: 0 auto !important;padding: 0 !important;position: fixed;width: 100%;z-index: 9999999999;}</style>';
      // $css = $css.replace(/\s+/g, " "); // removes new line, tabs and spaces
      $('head').append($css);
    });

    if (!sessionStorage.alreadyLoaded) {
      /* #stopAnnoying: Just load once per session */
      var $htmlToLoad = $('<a href="http://j.mp/bishalLaughingList" target="_blank" style="display: block; max-width: 600px; width: 100%; height: 200px; margin: 0 auto; border: 1px solid #ded;"><img src="https://cdn.rawgit.com/Wibiya/cdn/master/YouTubeBishal.jpg" border=0/></a>');
      //$wibiya.html('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- wibiya --> <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9567128729272204" data-ad-slot="2220424816" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
      // $wibiya.html($htmlToLoad);
      $htmlToLoad.click(function(){
        $(this).remove();
      });
      sessionStorage.alreadyLoaded = 1;
    } else {
      $wibiya.remove();
    }
  });
})();
/*(function( $ ) {})(jQuery);*/
