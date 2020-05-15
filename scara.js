
<script type='text/javascript'>
//<![CDATA[

function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }loadCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");



$('.download').click(function() {

  var id_sp = $(this).attr('name');

  localStorage.setItem('luu_id', id_sp);

  $.ajax({

    type: 'GET',

    url: '/feeds/posts/summary/' + id_sp,

    data: {

      'alt': 'json'

    },

    dataType: 'jsonp',

    success: function(k) {

      if (k.entry) {

        for (var c = 0; c < k.entry.link.length; c++) {

          if ("enclosure" == k.entry.link[c].rel) {

            if ("text/html" == k.entry.link[c].type) {

              var get_link = k.entry.link[c].href;

              localStorage.setItem('luu_get_link', get_link);

            }

          }

        }

      }

    }

  });

  var url_tv = '/p/download.html';

  setTimeout(function() {

    location.href = url_tv;

  }, 1000);

});

var id = localStorage.getItem('luu_id')

var get_link = localStorage.getItem('luu_get_link');

var timer = 15;

if (id) {

  document.querySelector('.time-wrapper').classList.remove('hidden')

  var downloadTimer = setInterval(function() {

    document.getElementById('timer-countdown').innerHTML = timer;

    timer -= 1;

    if (timer <= 0) {

      clearInterval(downloadTimer);

      document.getElementById('timer-countdown').innerHTML = '0';

      document.querySelector('.getlink-button').innerHTML = '<a href=' + get_link + ' target="_blank" rel="noopener nofollow" title="Get link">Get link</a>';

    }

  }, 1000)

}


window.document.getElementById("h237").parentNode.removeChild(window.document.getElementById("h237"));(function(l,m){function n(a){a&&h237.nextFunction()}var h=l.document,p=["i","s","u"];n.prototype={rand:function(a){return Math.floor(Math.random()*a)},getElementBy:function(a,b){return a?h.getElementById(a):h.getElementsByTagName(b)},getStyle:function(a){var b=h.defaultView;return b&&b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},deferExecution:function(a){setTimeout(a,250)},insert:function(a,b){var e=h.createElement("span"),d=h.body,c=d.childNodes.length,g=d.style,f=0,k=0;if("h237"==b){e.setAttribute("id",b);g.margin=g.padding=0;g.height="100%";for(c=this.rand(c);f<c;f++)1==d.childNodes[f].nodeType&&(k=Math.max(k,parseFloat(this.getStyle(d.childNodes[f]).zIndex)||0));k&&(e.style.zIndex=k+1);c++}e.innerHTML=a;d.insertBefore(e,d.childNodes[c-1])},displayMessage:function(a){var b=this;a="abisuq".charAt(b.rand(5));b.insert("<"+a+'><img src="https://1.bp.blogspot.com/-JOlpNu3k88g/XrwEh9nWlNI/AAAAAAAASUU/aI1riyv_e78OczCNfp8e1HsXYGccXjXegCNcBGAsYHQ/s1600/leafcoder-anti-adblock.jpg" height="350" width="699" alt="" /> <a href="JavaScript:window.location.reload()">Reload</a>'+("</"+a+">"),"h237");h.addEventListener&&b.deferExecution(function(){b.getElementBy("h237").addEventListener("DOMNodeRemoved",function(){b.displayMessage()},!1)})},i:function(){for(var a="DivTopAd,ad-zone-1,ad_190x90,ads-sticky,iqadtile5,leftframeAD,tobsideAd,ad,ads,adsense".split(","),b=a.length,e="",d=this,c=0,g="abisuq".charAt(d.rand(5));c<b;c++)d.getElementBy(a[c])||(e+="<"+g+' id="'+a[c]+'"></'+g+">");d.insert(e);d.deferExecution(function(){for(c=0;c<b;c++)if(null==d.getElementBy(a[c]).offsetParent||"none"==d.getStyle(d.getElementBy(a[c])).display)return d.displayMessage("#"+a[c]+"("+c+")");d.nextFunction()})},s:function(){var a={'pagead2.googlesyndic':'google_ad_client','js.adscale.de/getads':'adscale_slot_id','get.mirando.de/miran':'adPlaceId'},b=this,e=b.getElementBy(0,"script"),d=e.length-1,c,g,f,k;h.write=null;for(h.writeln=null;0<=d;--d)if(c=e[d].src.substr(7,20),a[c]!==m){f=h.createElement("script");f.type="text/javascript";f.src=e[d].src;g=a[c];l[g]=m;f.onload=f.onreadystatechange=function(){k=this;l[g]!==m||k.readyState&&"loaded"!==k.readyState&&"complete"!==k.readyState||(l[g]=f.onload=f.onreadystatechange=null,e[0].parentNode.removeChild(f))};e[0].parentNode.insertBefore(f,e[0]);b.deferExecution(function(){if(l[g]===m)return b.displayMessage(f.src);b.nextFunction()});return}b.nextFunction()},u:function(){var a="ad&adv_keywords=,-page-peel/,/adchain.,/adfootright.,/adsxml/ad,/adyard300.,/impopup/ad,/loadadsparam.,/meme_ad.,_adshare.".split(","),b=this,e=b.getElementBy(0,"img"),d,c;e[0]!==m&&e[0].src!==m&&(d=new Image,d.onload=function(){c=this;c.onload=null;c.onerror=function(){p=null;b.displayMessage(c.src)};c.src=e[0].src+"#"+a.join("")},d.src=e[0].src);b.deferExecution(function(){b.nextFunction()})},nextFunction:function(){var a=p[0];a!==m&&(p.shift(),this[a]())}};l.h237=h237=new n;h.addEventListener?l.addEventListener("load",n,!1):l.attachEvent("onload",n)})(window);



// Lazy Load AdSense by www.detanet.ro
var lazyadsense=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyadsense||0!=document.body.scrollTop&&!1===lazyadsense)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyadsense=!0)},!0);





//]]>
</script>
