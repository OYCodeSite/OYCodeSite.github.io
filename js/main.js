"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}document.addEventListener("DOMContentLoaded",function(){function m(){r&&(n=document.getElementById("site-name").offsetWidth,i=o&&o.offsetWidth,c=a&&a.offsetWidth,r=!1);var t=document.getElementById("nav"),e=window.innerWidth<768||n+i+c>t.offsetWidth-120;e?t.classList.add("hide-menu"):t.classList.remove("hide-menu")}function h(){var a,o,i,e,c,n,r,t=GLOBAL_CONFIG.highlight.highlightCopy,s=GLOBAL_CONFIG.highlight.highlightLang,l=GLOBAL_CONFIG_SITE.isHighlightShrink,d=t||s||void 0!==l,u="highlighjs"===GLOBAL_CONFIG.highlight.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');d&&u.length&&(a="prismjs"===GLOBAL_CONFIG.highlight.plugin,e=!(i=o="")===l?"closed":"",void 0!==l&&(o='<i class="fas fa-angle-down expand '.concat(e,'"></i>')),t&&(i='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),c=function(t){var e=t.parentNode;e.classList.add("copy-true");var n=window.getSelection(),o=document.createRange();a?o.selectNodeContents(e.querySelectorAll("pre code")[0]):o.selectNodeContents(e.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o);var i;n.toString();t=t.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((i=t.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,i.style.opacity=1,setTimeout(function(){i.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,n.removeAllRanges(),e.classList.remove("copy-true")},n=function(t){var e,n=t.target.classList;n.contains("expand")?(t=_toConsumableArray((e=this).parentNode.children).slice(1),e.firstChild.classList.toggle("closed"),btf.isHidden(t[0])?t.forEach(function(t){t.style.display="block"}):t.forEach(function(t){t.style.display="none"})):n.contains("copy-button")&&c(this)},r=function(){var t=document.createElement("div");return t.className="highlight-tools ".concat(e),t.addEventListener("click",n),t},s?a?u.forEach(function(t){var e=void 0!==t.getAttribute("data-language")?t.getAttribute("data-language"):"Code",n='<div class="code-lang">'.concat(e,"</div>");btf.wrap(t,"figure","","highlight");e=r();e.innerHTML=o+n+i,t.parentNode.insertBefore(e,t)}):u.forEach(function(t){var e=t.getAttribute("class").split(" ")[1],n='<div class="code-lang">'.concat(e="plain"===e||void 0===e?"Code":e,"</div>"),e=r();e.innerHTML=o+n+i,t.insertBefore(e,t.firstChild)}):a?u.forEach(function(t){btf.wrap(t,"figure","","highlight");var e=r();e.innerHTML=o+i,t.parentNode.insertBefore(e,t)}):u.forEach(function(t){var e=r();e.innerHTML=o+i,t.insertBefore(e,t.firstChild)}))}var n=document.getElementById("site-name").offsetWidth,o=document.querySelector("#menus .menus_items"),i=o&&o.offsetWidth,a=document.querySelector("#search-button"),c=a&&a.offsetWidth,r=!1;function s(t){function e(t){t.each(function(t,e){var n=$(e),o=n.attr("data-lazy-src")||n.attr("src"),e=n.attr("alt")||"";n.wrap('<a href="'.concat(o,'" data-fancybox="group" data-caption="').concat(e,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})}void 0===$.fancybox?($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.fancybox.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.fancybox.js),function(){e($(t))})):e($(t))}function y(){var n="fancybox"===GLOBAL_CONFIG.lightbox?document.querySelectorAll("#article-container :not(a):not(.gallery-group) > img, #article-container > img"):[],o=0<n.length,i=document.querySelectorAll("#article-container .justified-gallery"),a=0<i.length;(a||o)&&btf.isJqueryLoad(function(){var t,e;a&&(t=i,e=$(t),(t=e.find("img")).unwrap(),t.length&&t.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),l?btf.initJustifiedGallery(e):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js),function(){btf.initJustifiedGallery(e)}),l=!0)),o&&s(n)})}function g(){var i,a,c,r,s,l=document.getElementById("rightside"),d=window.innerHeight+56;document.body.scrollHeight<=d?l.style.cssText="opacity: 1; transform: translateX(-38px)":(a=!(i=0),c=document.getElementById("nav"),r="function"==typeof chatBtnHide,s="function"==typeof chatBtnShow,window.addEventListener("scroll",btf.throttle(function(t){var e,n,o=window.scrollY||document.documentElement.scrollTop,n=(n=i<(e=o),i=e,n);56<o?(n?(c.classList.contains("visible")&&c.classList.remove("visible"),s&&!0===a&&(chatBtnHide(),a=!1)):(c.classList.contains("visible")||c.classList.add("visible"),r&&!1===a&&(chatBtnShow(),a=!0)),c.classList.add("fixed"),"0"===window.getComputedStyle(l).getPropertyValue("opacity")&&(l.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===o&&c.classList.remove("fixed","visible"),l.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=d&&(l.style.cssText="opacity: 1; transform: translateX(-38px)")},200)))}function p(){var t=document.getElementById("card-toc"),c=t.getElementsByClassName("toc-content")[0],r=c.querySelectorAll(".toc-link"),i=document.getElementById("article-container");window.addEventListener("scroll",btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop;n(e),a(e)},100));var n=function(t){var e=i.clientHeight,n=document.documentElement.clientHeight,o=(t-i.offsetTop)/(n<e?e-n:document.documentElement.scrollHeight-n),n=Math.round(100*o),n=100<n?100:n<=0?0:n;c.setAttribute("progress-percentage",n)},s=GLOBAL_CONFIG.isanchor,e=function(){t.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"},o=function(){t.style.animation="toc-close .2s",setTimeout(function(){t.style.cssText="opacity:''; animation: ''; right: ''"},100)};document.getElementById("mobile-toc-button").addEventListener("click",function(){("0"===window.getComputedStyle(t).getPropertyValue("opacity")?e:o)()}),c.addEventListener("click",function(t){t.preventDefault();t=t.target.classList.contains("toc-link")?t.target:t.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&o()});var l=i.querySelectorAll("h1,h2,h3,h4,h5,h6"),d="",a=function(n){if(0===r.length||0===n)return!1;var t,o="",i="";if(l.forEach(function(t,e){n>btf.getEleTop(t)-70&&(o="#"+encodeURI(t.getAttribute("id")),i=e)}),d!==i){if(s&&(t=o,window.history.replaceState&&t!==window.location.hash&&(t=t||location.pathname,window.history.replaceState({},"",t))),""===o)return c.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),void(d=i);d=i,c.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")});var a=r[i];a.classList.add("active"),setTimeout(function(){var t,e;e=(t=a).getBoundingClientRect().top,t=c.scrollTop,e>document.documentElement.clientHeight-100&&(c.scrollTop=t+150),e<100&&(c.scrollTop=t-150)},0);for(var e=a.parentNode;!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}}}var l=!1,e=function(){var e=document.body;e.classList.add("read-mode");var n=document.createElement("button");n.type="button",n.className="fas fa-sign-out-alt exit-readmode",e.appendChild(n),n.addEventListener("click",function t(){e.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",t)})},d=function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200)},u=function(){document.getElementById("rightside-config-hide").classList.toggle("show")},f=function(){btf.scrollToDest(0,500)},b=function(){var t=document.documentElement.classList;t.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),t.toggle("hide-aside")},L=function(t){var e=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size")),n="";if(r=!0,t){if(20<=e)return;n=e+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")||m()}else{if(e<=10)return;n=e-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&m()}saveToLocal.set("global-font-size",n,2)};document.getElementById("rightside").addEventListener("click",function(t){switch(t.target.id||t.target.parentNode.id){case"go-up":f();break;case"rightside_config":u();break;case"readmode":e();break;case"darkmode":d();break;case"hide-aside-btn":b();break;case"font-plus":L(!0);break;case"font-minus":L()}});function v(t){t.forEach(function(t){var e=t,t=e.getAttribute("datetime");e.innerText=btf.diffDate(t,!0),e.style.display="inline"})}var E,A=function(){document.querySelectorAll("#article-container .tab > button").forEach(function(t){t.addEventListener("click",function(t){var e,n,o,i=this.parentNode;i.classList.contains("active")||(o=i.parentNode.nextElementSibling,(e=btf.siblings(i,".active")[0])&&e.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),_toConsumableArray(o.children).forEach(function(t){t.id===n?t.classList.add("active"):t.classList.remove("active")}),0<(o=o.querySelectorAll("#".concat(n," .justified-gallery"))).length&&btf.initJustifiedGallery(o))})})},S=function(){document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(t){t.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})})};window.refreshFn=function(){var t,e,n,o,i,a,c,r,s,l,d,u;function f(){s.style.overflow="",s.style.paddingRight="",btf.fadeOut(r,.5),c.classList.remove("open")}m(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&p(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(o=GLOBAL_CONFIG.noticeOutdate,(i=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=o.limitDay&&((n=document.createElement("div")).className="post-outdate-notice",n.textContent=o.messagePrev+" "+i+" "+o.messageNext,i=document.getElementById("article-container"),"top"===o.position?i.insertBefore(n,i.firstChild):i.appendChild(n))),GLOBAL_CONFIG.relativeDate.post&&v(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&v(document.querySelectorAll("#recent-posts time")),!GLOBAL_CONFIG.runtime||(n=document.getElementById("runtimeshow"))&&(e=n.getAttribute("data-publishDate"),n.innerText=btf.diffDate(e)+" "+GLOBAL_CONFIG.runtime),(e=document.getElementById("last-push-date"))&&(t=e.getAttribute("data-lastPushDate"),e.innerText=btf.diffDate(t,!0)),(t=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&t.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault();this.classList.toggle("expand");t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"})})),a=document.getElementById("toggle-menu"),c=document.getElementById("sidebar-menus"),r=document.getElementById("menu-mask"),s=document.body,a.addEventListener("click",function(){btf.sidebarPaddingR(),s.style.overflow="hidden",btf.fadeIn(r,.5),c.classList.add("open")}),r.addEventListener("click",function(t){c.classList.contains("open")&&f()}),window.addEventListener("resize",function(t){btf.isHidden(a)&&c.classList.contains("open")&&f()}),!GLOBAL_CONFIG_SITE.isHome||(u=document.getElementById("scroll-down"))&&u.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),GLOBAL_CONFIG.highlight&&h(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){var e,n=t.parentNode;n.parentNode.classList.contains("justified-gallery")||((e=document.createElement("div")).className="img-alt is-center",e.textContent=t.getAttribute("alt"),n.insertBefore(e,t.nextSibling))}),y(),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(l=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";l.update({background:e})}),g(),(u=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&u.forEach(function(t){btf.wrap(t,"div","","table-wrap")}),(u=document.querySelectorAll("#article-container .hide-button")).length&&u.forEach(function(t){t.addEventListener("click",function(t){var e=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<e.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(e.querySelectorAll(".justified-gallery"))})}),A(),S(),d=!1,(u=document.querySelector("#comment-switch > .switch-btn"))&&u.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"}),d||"function"!=typeof loadOtherComment||(d=!0,loadOtherComment())})},refreshFn(),window.addEventListener("resize",m),document.querySelectorAll("#sidebar-menus .expand").forEach(function(t){t.addEventListener("click",function(){this.classList.toggle("hide");var t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"})}),window.addEventListener("touchmove",function(t){document.querySelectorAll("#nav .menus_item_child").forEach(function(t){btf.isHidden(t)||(t.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(E=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=window.getSelection(0).toString(),e=e.length>E.limitCount?e+"\n\n\n"+E.languages.author+"\n"+E.languages.link+window.location.href+"\n"+E.languages.source+"\n"+E.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});