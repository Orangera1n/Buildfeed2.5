"use strict";var BuildFeed;!function(e){function t(e){e.preventDefault();var t=this;t.nextElementSibling.classList.toggle("open")}function n(e){e.preventDefault();var t=this;t.parentElement.classList.toggle("open")}function a(e){e.preventDefault();var t=this;document.cookie="bf_theme="+t.dataset.theme+"; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/",location.reload(!0)}function d(e){e.preventDefault();var t=this;document.cookie="bf_lang="+t.dataset.lang+"; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/",location.reload(!0)}function r(e){e.preventDefault();var t=document.getElementById("modal-search-overlay");t.classList.add("open")}function l(e){e.preventDefault();var t=document.getElementById("modal-search-overlay");t.classList.remove("open")}function o(e){e.preventDefault(),e.stopPropagation()}function i(e){var t=document.getElementById("modal-search-result");t.innerHTML="","undefined"!=typeof g&&clearTimeout(g),"undefined"!=typeof m&&m.readyState!==XMLHttpRequest.DONE&&m.abort(),g=setInterval(c,200)}function c(){"undefined"!=typeof g&&clearTimeout(g);var e=document.getElementById("modal-search-input");m=new XMLHttpRequest,m.onreadystatechange=s,m.open("GET","/api/GetSearchResult/"+e.value+"/",!0),m.setRequestHeader("accept","application/json"),m.send(null)}function s(e){if(m.readyState===XMLHttpRequest.DONE&&200===m.status){var t=document.getElementById("modal-search-result"),n=document.getElementById("result-template"),a=jsrender.templates(n.innerHTML),d=a.render(JSON.parse(m.responseText));t.innerHTML=d;for(var r=t.getElementsByTagName("a"),l=0;l<r.length;l++)r[l].addEventListener("click",function(e){e.preventDefault();var t=document.getElementById("modal-search-input");ga("send","pageview","/api/GetSearchResult/"+t.value+"/"),location.assign(e.currentTarget.href)})}}function u(e){for(var c=document.getElementsByClassName("dropdown-parent"),s=0;s<c.length;s++)for(var u=0;u<c[s].childNodes.length;u++){var m=c[s].childNodes[u];"A"===m.nodeName&&m.addEventListener("click",n)}for(var g=document.getElementById("settings-theme-menu").getElementsByTagName("a"),s=0;s<g.length;s++)g[s].addEventListener("click",a);for(var v=document.getElementById("settings-lang-menu").getElementsByTagName("a"),s=0;s<v.length;s++)v[s].addEventListener("click",d);var p=document.getElementById("page-navigation-toggle");p.addEventListener("click",t);var h=document.getElementById("page-navigation-search");h.addEventListener("click",r);var f=document.getElementById("modal-search-overlay");f.addEventListener("click",l);var E=document.getElementById("modal-search");E.addEventListener("click",o);var y=document.getElementById("modal-search-input");y.addEventListener("keyup",i)}var m,g;e.MobileMenuToggle=t,e.DropdownClick=n,e.SwitchTheme=a,e.SwitchLanguage=d,e.OpenSearch=r,e.CloseSearch=l,e.StopClick=o,e.InitiateSearch=i,e.SendSearch=c,e.CompleteSearch=s,e.BuildFeedSetup=u}(BuildFeed||(BuildFeed={})),window.addEventListener("load",BuildFeed.BuildFeedSetup);
//# sourceMappingURL=bfs.js.map
