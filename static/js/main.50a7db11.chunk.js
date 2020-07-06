(this.webpackJsonpcontrolpanel=this.webpackJsonpcontrolpanel||[]).push([[0],{182:function(e,t,n){e.exports=n(460)},184:function(e,t,n){},185:function(e,t,n){},437:function(e,t){},456:function(e){e.exports=JSON.parse('{"albums":[],"actions":[{"albums":true,"example":"zeroCool add ${album}","instructions":"# Add Image to Album\\r\\n\\r\\nYou can request to add an image to one of the albums that the bot uses. The bot will add all images in a post and/or in quoted posts to the image review queue. If the person running the bot approves an image, it will be added to the album.  ","key":"AddImageToAlbum","name":"Add Image to Album","triggers":["__REGEXP /^\\\\badd\\\\b/i"]},{"instructions":"# Death Toll\\r\\n\\r\\nzeroCool can tell you all about coronavirus. This handy action scrapes the CDC.gov website and posts the current U.S. Coronavirus Death Toll. It also posts the total number of coronavirus cases.","key":"DeathToll","name":"Death Toll","triggers":["deathtoll","death toll"]},{"instructions":"# Closer\\r\\n\\r\\nZooms in on image, uploads it to imgur, and posts the zoomed in image.","key":"ImageCloser","name":"Zoom in on Image","triggers":["closer","__REGEXP /^zoom/"]},{"albums":true,"example":"zeroCool gimme ${album}\\r\\n\\r\\nzeroCool gimme a ${album}\\r\\n\\r\\nzeroCool give me ${album}","instructions":"# Get Image From Album\\r\\n\\r\\nYou can request a random image from one of the albums that the bot uses. The bot will quote your post and post one of the images from the requested album.","key":"ImageFromAlbum","name":"Get Image From Album","triggers":["__REGEXP /^\\\\bgimme\\\\b/i","__REGEXP /^\\\\bgimmie\\\\b/i","__REGEXP /^give me/i"]},{"instructions":"# Redder\\r\\n\\r\\nRaises the red levels of an image, hosts it on imgur, and posts it.","key":"ImageRedder","name":"Redden image","triggers":["redder"]},{"instructions":"# Wider\\r\\n\\r\\nWidens an image, hosts it on imgur, and posts it.","key":"ImageWider","name":"Widen Image","triggers":["wider"]},{"example":"The regular expression will grab any post that starts with zeroCool and contains the word \'matter\'\\r\\n\\r\\nzeroCool matter\\r\\n\\r\\nzeroCool, does anything matter?\\r\\n\\r\\nzeroCool, what\'s the matter?","instructions":"# None of this matters\\r\\n\\r\\nA bleak philosophical outlook.\\r\\n\\r\\n![](https://i.imgur.com/yX9KZ49.jpg)","key":"NoneAThisMatters","name":"None a this matters","triggers":["__REGEXP /matter/gi"]},{"instructions":"# Cat Picture\\r\\n\\r\\nUses [the cat api](http://www.thecatapi.com) to post a random picture of a cat. \\r\\n\\r\\n![](https://cdn2.thecatapi.com/images/2fp.jpg)","key":"PostCat","name":"Cat Pictures","triggers":["kittycat"]},{"instructions":"# Trump Tweet\\r\\n\\r\\nPosts the latest tweet from the president. Needs a bit more work telling tweets from re-tweets.","key":"PostTrumpTweet","name":"Trump Tweet","triggers":["what\'s trumping","what\'s trumpin","whats trumping","whats trumpin"]},{"instructions":"# Smiley\\r\\n\\r\\nPosts a random SA Smiley.","key":"SASmiley","name":"Smiley","triggers":["smiley"]},{"example":"zeroCool hat wobble","instructions":"# Tayne\\r\\n\\r\\nA wonderful gif of Tayne doing a hat wobble.\\r\\n\\r\\n![](https://i.imgur.com/5oCbDFL.gif)","key":"Tayne","name":"Tayne","triggers":["tayne","__REGEXP /hat wobble/gi"]},{"example":"The regular expression will grab any post that starts with zeroCool and contains the word \'thoughts\'\\r\\n\\r\\nzeroCool thoughts\\r\\n\\r\\nzeroCool, what are your thoughts on this?\\r\\n\\r\\nzeroCool, what do you think?","instructions":"# Thoughts\\r\\n\\r\\nUses [deepai text generator](https://deepai.org/machine-learning-model/text-generator) to produce zeroCool\'s thoughts about anything. ","key":"Thoughts","name":"Thoughts","triggers":["__REGEXP /thoughts/gi","__REGEXP /think/gi"]},{"instructions":"# Trump Weight\\r\\n\\r\\nGives the official regime figures for trump weight and height. Needs to be updated as of mid 2020.","key":"TrumpWeight","name":"Trump weight","triggers":["__REGEXP /\\\\btrump\\\\b.*?(weight|bmi|fat)/gi"]},{"instructions":"# Tweet\\r\\n\\r\\nPosts the latest tweet from the requested twitter account.","key":"Tweet","name":"Post Tweet","triggers":["__REGEXP /^@/"]},{"instructions":"# What is love?\\r\\n\\r\\nBaby don\'t hurt me\\r\\n\\r\\nDon\'t hurt me\\r\\n\\r\\nNo more\\r\\n\\r\\n![](https://i.imgur.com/qXcDIBl.gif)\\r\\n\\r\\nThis incredibly useful action posts a gif from night at the roxbury","key":"WhatIsLove","name":"What is Love?","triggers":["what is love"]}],"bot":{"avatar":"https://fi.somethingawful.com/safs/titles/58/73/00226364.0001.jpg","id":226364,"name":"Patient Zero Cool","profile":"https://forums.somethingawful.com/member.php?action=getinfo&userid=226364","regDate":"Apr 24, 2020","title":""},"botName":"zeroCool","general":"# How to use zeroCool, an SA Forums Bot\\r\\n\\r\\nzeroCool reads and responds to posts on SA automatically. Here is a list of the responses that it can make. To use the bot, just post in a thread that the bot is reading. If your post matches one of the action triggers, then the bot will respond to your post.\\r\\n","threads":[{"title":"TRUMP 1262: Citizen Kanye","threadId":3930975,"link":"https://forums.somethingawful.com/showthread.php?threadid=3930975","pages":219,"unreadPosts":4321},{"title":"Number 1 cat - post your cats","threadId":3931268,"link":"https://forums.somethingawful.com/showthread.php?threadid=3931268","pages":7,"unreadPosts":114},{"title":"cookin\' with barnold","threadId":3931260,"link":"https://forums.somethingawful.com/showthread.php?threadid=3931260","pages":2,"unreadPosts":3}]}')},460:function(e,t,n){"use strict";n.r(t);var r,a,o,i,s,c,l,u,m,d,h,g,f=n(0),p=n.n(f),b=(n(184),n(185),n(468)),E=n(467),v=n(36),w=n(13);!function(e){e.currentAction="currentAction",e.fetchAttempt="fetchAttempt",e.failed="failed",e.setActions="setActions",e.setAction="setAction",e.setActive="setActive"}(r||(r={})),function(e){e.accept="accept",e.addExistingAlbum="addExistingAlbum",e.createNewAlbum="createNewAlbum",e.delete="delete",e.deleteAlbum="deleteAlbum",e.fetchAlbumsAttempt="fetchAlbumsAttempt",e.fetchAlbumsFailure="fetchAlbumsFailure",e.fetchAlbumsSuccess="fetchAlbumsSuccess",e.pending="pending",e.reject="reject",e.report="report",e.removeImage="removeImage",e.setAlbum="setAlbum",e.setDescription="setDescription",e.setFetchingImageQueue="setFetchingImageQueue",e.setHash="setHash",e.setImageQueue="setImageQueue",e.setName="setName",e.setReview="setReview",e.setStatus="setStatus"}(a||(a={})),function(e){e.pending="PENDING",e.accepted="ACCEPTED",e.rejected="REJECTED",e.reported="REPORTED"}(o||(o={})),function(e){e.accessToken="accessToken",e.access_token="access_token",e.access_token_secret="access_token_secret",e.bearerToken="bearerToken",e.clientId="clientId",e.clientSecret="clientSecret",e.consumerKey="consumerKey",e.consumerSecret="consumerSecret"}(i||(i={})),function(e){e.failed="failed",e.fetching="fetching",e.setCurrent="setCurrent",e.setApis="setApis",e.setApi="setApi"}(s||(s={})),function(e){e.decreaseInterval="decreaseInterval",e.increaseInterval="increaseInterval",e.fetchAttempt="fetchAttempt",e.fetchFailure="fetchFailure",e.fetchSuccess="fetchSuccess",e.runOnce="runOnce",e.setBotName="setBotName",e.setCookies="setCookies",e.setInterval="setInterval",e.setRunning="setRunning",e.setTimer="setTimer",e.setValueAttempt="setValueAttempt",e.setValueFailure="setValueFailure",e.setValueSuccess="setValueSuccess",e.start="start",e.stop="stop",e.testCookies="testCookies"}(c||(c={})),function(e){e.APIs="APIs",e.settings="settings"}(l||(l={})),function(e){e.addEvent="addEvent",e.failed="failed",e.setListening="setListening"}(u||(u={})),function(e){e.apiMessage="apiMessage",e.array="array",e.botStatus="botStatus",e.error="error",e.instructions="instructions",e.timeLeft="timeLeft",e.link="link",e.post="post",e.setting="setting",e.threads="threads",e.text="text"}(m||(m={})),function(e){e.done="done",e.failed="failed",e.fetchAttempt="fetchAttempt",e.setBotName="setBotName",e.setInstructions="setInstructions"}(d||(d={})),function(e){e.attempt="attempt",e.failure="failure",e.logout="logout",e.openModal="openModal",e.success="success"}(h||(h={})),function(e){e.addThread="addThread",e.currentThread="currentThread",e.failed="failed",e.fetchAttempt="fetchAttempt",e.setBookmarked="setBookmarked",e.setName="setName",e.setThreads="setThreads"}(g||(g={}));var y={actions:[],albums:[],bot:{avatar:void 0,id:0,name:"",title:void 0,profile:"",regDate:""},botName:"",done:!1,fetching:!1,failed:!1,general:"",threads:[],dispatch:function(e){}},k=function(e,t){switch(t.type){case"done":return Object(w.a)(Object(w.a)({},e),{},{done:!0,fetching:!1});case"failed":return Object(w.a)(Object(w.a)({},e),{},{actions:[],albums:[],done:!0,fetching:!1,failed:!0,general:""});case"fetchAttempt":return Object(w.a)(Object(w.a)({},e),{},{fetching:!0});case"setBotName":var n=t.botName;return Object(w.a)(Object(w.a)({},e),{},{botName:n});case"setInstructions":var r=t.instructions,a=r.actions,o=r.albums,i=r.bot,s=r.botName,c=r.general,l=r.threads;return console.log("set instructions here"),Object(w.a)(Object(w.a)({},e),{},{failed:!1,fetching:!1,actions:a,albums:o,bot:i,botName:s,general:c,threads:l});default:return console.log("InstructionsContext default",t),e}},A=Object(f.createContext)(y),C=function(e){var t=e.children,n=e.testState,r=(e.testDispatch,Object(f.useReducer)(k,n||y)),a=Object(v.a)(r,2),o=a[0],i=a[1],s=Object(w.a)(Object(w.a)({},o),{},{dispatch:i});return p.a.createElement(A.Provider,{value:s},t)},T=function(){var e=Object(f.useContext)(A).botName;return p.a.createElement(b.a,{size:"large",content:"".concat(e,", an SA Forums Bot")})},x=[p.a.createElement(T,null)].map((function(e,t){return p.a.createElement(E.a.Item,{key:t},e)})),I=function(){return p.a.createElement(E.a,{children:x,color:"green",inverted:!0})},O=n(466),j=n(465),S=n(470),N=n(469),R=n(170),P=n.n(R),_=function(e){var t=null===e||void 0===e?void 0:e.maxWidth,n=new Map,r={image:function(e){var n=e.alt,r=e.src,a=e.title;return p.a.createElement("img",{alt:n,src:r,title:a,style:{maxWidth:t}})}};return p.a.createElement(P.a,Object.assign({},e,{allowNodes:function(e){var t;return"image"===e.type&&n.set((t=e.position,JSON.stringify(t.start)),e),!0},linkTarget:"_blank",renderers:r,rawSourcePos:!0}))},z={marginTop:10,marginBottom:10},W=function(e){var t=Object(f.useCallback)((function(){var t;return null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.offsetWidth}),[e]),n=Object(f.useState)(void 0),r=Object(v.a)(n,2),a=r[0],o=r[1];return Object(f.useEffect)((function(){var n=function(){o(t())};return e.current&&o(t()),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[t,e]),a&&a>25?a-25:a},D=function(e){var t=e.input,n=e.name,r=e.addChildren,a=e.forceOpen,o=Object(f.useState)(!!a),i=Object(v.a)(o,2),s=i[0],c=i[1],l=p.a.useRef(null),u=W(l),m=p.a.createElement("div",{onClick:function(e){return!a&&c(!1)}},p.a.createElement(_,{key:"markdown",escapeHtml:!1,source:t,maxWidth:u})),d=t.split(/\r?\n/)[0].replace("#","").trim(),h=p.a.createElement("div",{onClick:function(e){e.preventDefault(),c(!0)}},p.a.createElement(b.a,{as:"h3"},d||n)),g=[s?m:h];s&&(null===r||void 0===r||r.forEach((function(e,t){return g.push(Object(w.a)(Object(w.a)({},e),{},{key:t.toString()}))})));var E=a?z:Object(w.a)(Object(w.a)({},z),{},{cursor:"pointer"});return p.a.createElement("div",{ref:l,style:E},p.a.createElement(N.a,{children:g}))},B=n(171),F=function(e){var t=e.avatar,n=e.name,r=e.regDate,a=e.title;return p.a.createElement("div",null,p.a.createElement(b.a,{h1:!0,content:n}),r,p.a.createElement("br",null),p.a.createElement("br",null),t&&p.a.createElement(B.a,{src:t}),a)},G=function(){var e=document.getElementById("root"),t=document.createElement("span");t.innerHTML="Hello",null===e||void 0===e||e.appendChild(t);var n=parseInt(window.getComputedStyle(t).fontSize,10);return null===e||void 0===e||e.removeChild(t),n},X=function(){var e=Object(f.useContext)(A),t=e.botName,n=e.threads,r=G(),a=r?6*r:100,o=!n.length,i=1===n.length;return p.a.createElement(N.a,null,p.a.createElement(b.a,{as:"h2"},t," is currently ",o?"not ":"","watching"," ",o?"any ":n.length," thread",i?"":"s"),p.a.createElement("div",{style:{maxHeight:a,overflow:"auto"}},n.map((function(e,t){return p.a.createElement("div",{key:t},p.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.title))}))))},L=n(172),H=function(e){var t,n,r=e.album,a=e.input,o=e.triggers,i=p.a.useRef(null),s=W(i);r&&(a=null===(n=a)||void 0===n?void 0:n.replace(/\${album}/g,r));return p.a.createElement(N.a,null,(null===(t=a)||void 0===t?void 0:t.length)?p.a.createElement("div",{ref:i},p.a.createElement(_,{key:"markdown",escapeHtml:!1,source:a,maxWidth:s})," "):p.a.createElement(p.a.Fragment,null,p.a.createElement(b.a,{as:"h4"},"No example given to match regular expression trigger"),o.filter((function(e){return e instanceof RegExp})).map((function(e,t){return p.a.createElement("div",{key:t,style:z},p.a.createElement(L.a,{color:"blue"},"RegExp")," ",e.toString())}))))},M=function(e){var t=e.trigger,n=Object(f.useContext)(A).botName;return p.a.createElement(N.a,null,n," ",t.toString())},q=function(e){var t=e.example,n=e.triggers,r=n.some((function(e){return e instanceof RegExp}));return n.length?p.a.createElement(N.a,null,p.a.createElement(b.a,{as:"h3"},"How to trigger this action"),p.a.createElement("div",{style:z},n.map((function(e,t){return!(e instanceof RegExp)&&p.a.createElement(M,{key:t,trigger:e})}))),r&&p.a.createElement(H,{input:t,triggers:n})):p.a.createElement(N.a,null,p.a.createElement(b.a,{as:"h2"},"No triggers set for this action"))},J=function(e){var t=e.album,n=e.description,r=e.example,a=e.triggers,o=Object(f.useContext)(A).botName,i=a.some((function(e){return e instanceof RegExp})),s=a.filter((function(e){return!(e instanceof RegExp)})).map((function(e,n){return p.a.createElement(N.a,{key:n},p.a.createElement("div",null,o," ",e," ",t))}));return p.a.createElement(p.a.Fragment,null,p.a.createElement(b.a,{as:"h4"},t," ",n?"- ".concat(n):""),i&&p.a.createElement(H,{album:t,input:r,triggers:a}),s)},U=function(e){var t=e.actionInstruction,n=Object(f.useContext)(A).albums,r=t.example,a=t.instructions,o=t.key,i=t.name,s=t.triggers,c=n.length?n.map((function(e,t){var n=e.album,a=e.description;return p.a.createElement(J,{key:t,album:n,description:a,example:r,triggers:s})})):[p.a.createElement(J,{key:"placeholder",album:"placeHolder",description:"This bot has no active albums. This placeholder is here as an example",example:r,triggers:s})];return p.a.createElement(D,{addChildren:c,input:a||"",key:o,name:i})},V=function(){var e=Object(f.useContext)(A).actions,t=e.filter((function(e){return e.albums})),n=e.filter((function(e){return!e.albums}));return p.a.createElement(N.a,null,p.a.createElement(b.a,{as:"h2"},"Actions - click for description"),t.map((function(e){return p.a.createElement(U,{actionInstruction:e})})),null===n||void 0===n?void 0:n.map((function(e){var t=e.example,n=e.instructions,r=e.key,a=e.name,o=e.triggers;return p.a.createElement(D,{input:n||"",key:r,name:a,addChildren:[p.a.createElement(q,{example:t,triggers:o})]})})))},$=function(e,t,n){if(0!==t.toString().indexOf("__REGEXP "))return t;try{var r=t.split("__REGEXP ")[1].match(/\/(.*)\/(.*)?/),a=new RegExp(r[1],r[2]||"");return!!n||a}catch(o){return!n&&"failedRegex"}},K=n(456),Q=function(){var e=Object(f.useContext)(A),t=e.dispatch,n=e.actions,r=e.bot,a=e.general;return Object(f.useEffect)((function(){t({type:d.setInstructions,instructions:JSON.parse(JSON.stringify(K),$)})}),[t]),n?p.a.createElement(S.a,null,p.a.createElement(S.a.Column,{width:3},r&&p.a.createElement(F,r)),p.a.createElement(S.a.Column,{width:13},p.a.createElement(O.a,null,a?p.a.createElement(p.a.Fragment,null,p.a.createElement(D,{name:"",input:a,forceOpen:!0}),p.a.createElement(X,null),p.a.createElement(V,null)):p.a.createElement(j.a,{active:!0})))):p.a.createElement(j.a,{active:!0})},Z=function(){return p.a.createElement(C,null,p.a.createElement(I,null),p.a.createElement(O.a,{text:!0},p.a.createElement(Q,null)))},Y=n(28),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ne=document.getElementById("root");(null===ne||void 0===ne?void 0:ne.hasChildNodes())?Object(Y.hydrate)(p.a.createElement(p.a.StrictMode,null,p.a.createElement(Z,null)),ne):Object(Y.render)(p.a.createElement(p.a.StrictMode,null,p.a.createElement(Z,null)),ne),function(e){if("serviceWorker"in navigator){if(new URL("/forumsBotInstructions",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/forumsBotInstructions","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):te(t,e)}))}}()}},[[182,1,2]]]);
//# sourceMappingURL=main.50a7db11.chunk.js.map