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
      var $css = '<style type="text/css">.wibiyaDotComNewBarNotice {background: #fefefe;border-radius: 0 !important;border: 0 !important;bottom: 0;display: block;font: 12px Arial, Helvetica, sans-serif;font-size: 12px;font-weight: normal;height: 40px;left: 0;line-height: 1;margin: 0 auto !important;padding: 0 !important;position: fixed;width: 100%;z-index: 9999999999;overflow: hidden;}';
      $css = $css + '.wibiyaDotComNewBarNotice * {margin: 0;padding: 0;}';
      $css = $css + '.wibiyaDotComNewBarNotice ul.wibiyaUl {display: block;}';
      $css = $css + '.wibiyaDotComNewBarNotice ul.wibiyaUl li {display: block;float: left;overflow: hidden;width: 100px;padding: 5px;}';
      $css = $css + '.wibiyaDotComNewBarNotice ul.wibiyaUl li.wibiyaLogo {display: block;padding: 0;width: 80px;}';
      $css = $css + '.wibiyaDotComNewBarNotice ul.wibiyaUl li.wibiyaLogo a{cursor: pointer;text-decoration: none;text-align: center;display: block;color: #000;font-weight: bold;font-size: 16px;padding: 14px 0 10px;}';
      $css = $css + '.wibiyaDotComNewBarNotice ul.wibiyaUl li.fblikes {padding-right: 0;padding-top: 12px;}';
      $css = $css + '.wibiyaDotComNewBarNotice ul.wibiyaUl li.banner {border-left: 1px solid #ddd;}';
      $css = $css + '.wibiyaDotComNewBarNotice ul.wibiyaUl li.tweet {padding-right: 0;padding-top: 12px;width: 105px;}';
      $css = $css + '.wibiyaDotComNewBarNotice ul.wibiyaUl li.gPlus1 {padding-right: 0;padding-top: 12px;width: 90px;}';
      $css = $css + '.wibiyaDotComNewBarNotice ul.wibiyaUl li.addtoany {padding: 0;margin: 5px 0 0 0;width: 40px;}';
      $css = $css + '</style>';
      // $css = $css.replace(/\s+/g, " "); // removes new line, tabs and spaces
      $('head').append($css);
    });

    if (!sessionStorage.alreadyLoaded) {
      /* #stopAnnoying: Just load once per session */
      var $htmlToLoad = $('<ul class="wibiyaUl"/>');
      var $wibiyaLogo = $('<li class="wibiyaLogo"><a href="http://www.wibiya.com/" target="_blank">Wibiya</a></li>');
      var $banner = $('<li class="banner"><a href="http://www.tkqlhce.com/s875biroiq5B8CCD98576A886FB57A7D68AFEF666?sid=recipesofworld" target="_blank" onmouseover="window.status=\'http://www.hostmonster.com\';return true;" onmouseout="window.status=\' \';return true;"><img src="http://www.tqlkg.com/ge108y7B-53PVSWWXTSPRQUSSQZVPRURXQSUZYZQQQ" alt="" border="0"/></a></li>');
      // var $htmlToLoad = $('<a href="http://j.mp/bishalLaughingList" target="_blank" style="display: block; max-width: 600px; width: 100%; height: 200px; margin: 0 auto; border: 1px solid #ded;"><img src="https://cdn.rawgit.com/Wibiya/cdn/master/YouTubeBishal.jpg" border=0/></a>');
      // var $htmlToLoad = $('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- wibiya --> <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9567128729272204" data-ad-slot="2220424816" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
      var $fbLikes = '<li class="fblikes"><div id="fb-root"></div><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";fjs.parentNode.insertBefore(js, fjs);}(document, \'script\', \'facebook-jssdk\'));</script><div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="55" data-height="65" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div></li>';
      var $tweet = '<li class="tweet"><a href="https://twitter.com/share" class="twitter-share-button" data-via="dbashyal">Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script></li>';
      var $gPlus1 = '<li class="gPlus1"><!-- Place this tag in your head or just before your close body tag. --><script src="https://apis.google.com/js/platform.js" async defer></script><!-- Place this tag where you want the +1 button to render. --><div class="g-plusone"></div></li>';
      var $addToAny = '<li class="addtoany"><!-- AddToAny BEGIN --><div class="a2a_kit a2a_kit_size_32 a2a_default_style"><a class="a2a_dd" href="https://www.addtoany.com/share"></a></div><script type="text/javascript">var a2a_config = a2a_config || {};a2a_config.onclick = 1;a2a_config.num_services = 4;</script><script type="text/javascript" src="//static.addtoany.com/menu/page.js"></script><!-- AddToAny END --></li>';


      $htmlToLoad.append($fbLikes).append($tweet).append($gPlus1).append($addToAny).append($banner).append($wibiyaLogo);
      $wibiya.html($htmlToLoad);
      $htmlToLoad.click(function(){
        $(this).remove();
      });
      // sessionStorage.alreadyLoaded = 1;
    } else {
      $wibiya.remove();
    }
  });
})();
/*(function( $ ) {})(jQuery);*/
