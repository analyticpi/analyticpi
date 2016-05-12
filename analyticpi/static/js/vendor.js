/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
/* MIT license */

module.exports = {
  rgb2hsl: rgb2hsl,
  rgb2hsv: rgb2hsv,
  rgb2hwb: rgb2hwb,
  rgb2cmyk: rgb2cmyk,
  rgb2keyword: rgb2keyword,
  rgb2xyz: rgb2xyz,
  rgb2lab: rgb2lab,
  rgb2lch: rgb2lch,

  hsl2rgb: hsl2rgb,
  hsl2hsv: hsl2hsv,
  hsl2hwb: hsl2hwb,
  hsl2cmyk: hsl2cmyk,
  hsl2keyword: hsl2keyword,

  hsv2rgb: hsv2rgb,
  hsv2hsl: hsv2hsl,
  hsv2hwb: hsv2hwb,
  hsv2cmyk: hsv2cmyk,
  hsv2keyword: hsv2keyword,

  hwb2rgb: hwb2rgb,
  hwb2hsl: hwb2hsl,
  hwb2hsv: hwb2hsv,
  hwb2cmyk: hwb2cmyk,
  hwb2keyword: hwb2keyword,

  cmyk2rgb: cmyk2rgb,
  cmyk2hsl: cmyk2hsl,
  cmyk2hsv: cmyk2hsv,
  cmyk2hwb: cmyk2hwb,
  cmyk2keyword: cmyk2keyword,

  keyword2rgb: keyword2rgb,
  keyword2hsl: keyword2hsl,
  keyword2hsv: keyword2hsv,
  keyword2hwb: keyword2hwb,
  keyword2cmyk: keyword2cmyk,
  keyword2lab: keyword2lab,
  keyword2xyz: keyword2xyz,

  xyz2rgb: xyz2rgb,
  xyz2lab: xyz2lab,
  xyz2lch: xyz2lch,

  lab2xyz: lab2xyz,
  lab2rgb: lab2rgb,
  lab2lch: lab2lch,

  lch2lab: lch2lab,
  lch2xyz: lch2xyz,
  lch2rgb: lch2rgb
}


function rgb2hsl(rgb) {
  var r = rgb[0]/255,
      g = rgb[1]/255,
      b = rgb[2]/255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, l;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g)/ delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  l = (min + max) / 2;

  if (max == min)
    s = 0;
  else if (l <= 0.5)
    s = delta / (max + min);
  else
    s = delta / (2 - max - min);

  return [h, s * 100, l * 100];
}

function rgb2hsv(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, v;

  if (max == 0)
    s = 0;
  else
    s = (delta/max * 1000)/10;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g) / delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  v = ((max / 255) * 1000) / 10;

  return [h, s, v];
}

function rgb2hwb(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      h = rgb2hsl(rgb)[0],
      w = 1/255 * Math.min(r, Math.min(g, b)),
      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

  return [h, w * 100, b * 100];
}

function rgb2cmyk(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      c, m, y, k;

  k = Math.min(1 - r, 1 - g, 1 - b);
  c = (1 - r - k) / (1 - k) || 0;
  m = (1 - g - k) / (1 - k) || 0;
  y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
}

function rgb2keyword(rgb) {
  return reverseKeywords[JSON.stringify(rgb)];
}

function rgb2xyz(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

  // assume sRGB
  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

  return [x * 100, y *100, z * 100];
}

function rgb2lab(rgb) {
  var xyz = rgb2xyz(rgb),
        x = xyz[0],
        y = xyz[1],
        z = xyz[2],
        l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function rgb2lch(args) {
  return lab2lch(rgb2lab(args));
}

function hsl2rgb(hsl) {
  var h = hsl[0] / 360,
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      t1, t2, t3, rgb, val;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * - (i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

function hsl2hsv(hsl) {
  var h = hsl[0],
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      sv, v;

  if(l === 0) {
      // no need to do calc on black
      // also avoids divide by 0 error
      return [0, 0, 0];
  }

  l *= 2;
  s *= (l <= 1) ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
}

function hsl2hwb(args) {
  return rgb2hwb(hsl2rgb(args));
}

function hsl2cmyk(args) {
  return rgb2cmyk(hsl2rgb(args));
}

function hsl2keyword(args) {
  return rgb2keyword(hsl2rgb(args));
}


function hsv2rgb(hsv) {
  var h = hsv[0] / 60,
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      hi = Math.floor(h) % 6;

  var f = h - Math.floor(h),
      p = 255 * v * (1 - s),
      q = 255 * v * (1 - (s * f)),
      t = 255 * v * (1 - (s * (1 - f))),
      v = 255 * v;

  switch(hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

function hsv2hsl(hsv) {
  var h = hsv[0],
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      sl, l;

  l = (2 - s) * v;
  sl = s * v;
  sl /= (l <= 1) ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
}

function hsv2hwb(args) {
  return rgb2hwb(hsv2rgb(args))
}

function hsv2cmyk(args) {
  return rgb2cmyk(hsv2rgb(args));
}

function hsv2keyword(args) {
  return rgb2keyword(hsv2rgb(args));
}

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function hwb2rgb(hwb) {
  var h = hwb[0] / 360,
      wh = hwb[1] / 100,
      bl = hwb[2] / 100,
      ratio = wh + bl,
      i, v, f, n;

  // wh + bl cant be > 1
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;
  if ((i & 0x01) != 0) {
    f = 1 - f;
  }
  n = wh + f * (v - wh);  // linear interpolation

  switch (i) {
    default:
    case 6:
    case 0: r = v; g = n; b = wh; break;
    case 1: r = n; g = v; b = wh; break;
    case 2: r = wh; g = v; b = n; break;
    case 3: r = wh; g = n; b = v; break;
    case 4: r = n; g = wh; b = v; break;
    case 5: r = v; g = wh; b = n; break;
  }

  return [r * 255, g * 255, b * 255];
}

function hwb2hsl(args) {
  return rgb2hsl(hwb2rgb(args));
}

function hwb2hsv(args) {
  return rgb2hsv(hwb2rgb(args));
}

function hwb2cmyk(args) {
  return rgb2cmyk(hwb2rgb(args));
}

function hwb2keyword(args) {
  return rgb2keyword(hwb2rgb(args));
}

function cmyk2rgb(cmyk) {
  var c = cmyk[0] / 100,
      m = cmyk[1] / 100,
      y = cmyk[2] / 100,
      k = cmyk[3] / 100,
      r, g, b;

  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
}

function cmyk2hsl(args) {
  return rgb2hsl(cmyk2rgb(args));
}

function cmyk2hsv(args) {
  return rgb2hsv(cmyk2rgb(args));
}

function cmyk2hwb(args) {
  return rgb2hwb(cmyk2rgb(args));
}

function cmyk2keyword(args) {
  return rgb2keyword(cmyk2rgb(args));
}


function xyz2rgb(xyz) {
  var x = xyz[0] / 100,
      y = xyz[1] / 100,
      z = xyz[2] / 100,
      r, g, b;

  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

  // assume sRGB
  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
    : r = (r * 12.92);

  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
    : g = (g * 12.92);

  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
    : b = (b * 12.92);

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

function xyz2lab(xyz) {
  var x = xyz[0],
      y = xyz[1],
      z = xyz[2],
      l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function xyz2lch(args) {
  return lab2lch(xyz2lab(args));
}

function lab2xyz(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      x, y, z, y2;

  if (l <= 8) {
    y = (l * 100) / 903.3;
    y2 = (7.787 * (y / 100)) + (16 / 116);
  } else {
    y = 100 * Math.pow((l + 16) / 116, 3);
    y2 = Math.pow(y / 100, 1/3);
  }

  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

  return [x, y, z];
}

function lab2lch(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      hr, h, c;

  hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
}

function lab2rgb(args) {
  return xyz2rgb(lab2xyz(args));
}

function lch2lab(lch) {
  var l = lch[0],
      c = lch[1],
      h = lch[2],
      a, b, hr;

  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
}

function lch2xyz(args) {
  return lab2xyz(lch2lab(args));
}

function lch2rgb(args) {
  return lab2rgb(lch2lab(args));
}

function keyword2rgb(keyword) {
  return cssKeywords[keyword];
}

function keyword2hsl(args) {
  return rgb2hsl(keyword2rgb(args));
}

function keyword2hsv(args) {
  return rgb2hsv(keyword2rgb(args));
}

function keyword2hwb(args) {
  return rgb2hwb(keyword2rgb(args));
}

function keyword2cmyk(args) {
  return rgb2cmyk(keyword2rgb(args));
}

function keyword2lab(args) {
  return rgb2lab(keyword2rgb(args));
}

function keyword2xyz(args) {
  return rgb2xyz(keyword2rgb(args));
}

var cssKeywords = {
  aliceblue:  [240,248,255],
  antiquewhite: [250,235,215],
  aqua: [0,255,255],
  aquamarine: [127,255,212],
  azure:  [240,255,255],
  beige:  [245,245,220],
  bisque: [255,228,196],
  black:  [0,0,0],
  blanchedalmond: [255,235,205],
  blue: [0,0,255],
  blueviolet: [138,43,226],
  brown:  [165,42,42],
  burlywood:  [222,184,135],
  cadetblue:  [95,158,160],
  chartreuse: [127,255,0],
  chocolate:  [210,105,30],
  coral:  [255,127,80],
  cornflowerblue: [100,149,237],
  cornsilk: [255,248,220],
  crimson:  [220,20,60],
  cyan: [0,255,255],
  darkblue: [0,0,139],
  darkcyan: [0,139,139],
  darkgoldenrod:  [184,134,11],
  darkgray: [169,169,169],
  darkgreen:  [0,100,0],
  darkgrey: [169,169,169],
  darkkhaki:  [189,183,107],
  darkmagenta:  [139,0,139],
  darkolivegreen: [85,107,47],
  darkorange: [255,140,0],
  darkorchid: [153,50,204],
  darkred:  [139,0,0],
  darksalmon: [233,150,122],
  darkseagreen: [143,188,143],
  darkslateblue:  [72,61,139],
  darkslategray:  [47,79,79],
  darkslategrey:  [47,79,79],
  darkturquoise:  [0,206,209],
  darkviolet: [148,0,211],
  deeppink: [255,20,147],
  deepskyblue:  [0,191,255],
  dimgray:  [105,105,105],
  dimgrey:  [105,105,105],
  dodgerblue: [30,144,255],
  firebrick:  [178,34,34],
  floralwhite:  [255,250,240],
  forestgreen:  [34,139,34],
  fuchsia:  [255,0,255],
  gainsboro:  [220,220,220],
  ghostwhite: [248,248,255],
  gold: [255,215,0],
  goldenrod:  [218,165,32],
  gray: [128,128,128],
  green:  [0,128,0],
  greenyellow:  [173,255,47],
  grey: [128,128,128],
  honeydew: [240,255,240],
  hotpink:  [255,105,180],
  indianred:  [205,92,92],
  indigo: [75,0,130],
  ivory:  [255,255,240],
  khaki:  [240,230,140],
  lavender: [230,230,250],
  lavenderblush:  [255,240,245],
  lawngreen:  [124,252,0],
  lemonchiffon: [255,250,205],
  lightblue:  [173,216,230],
  lightcoral: [240,128,128],
  lightcyan:  [224,255,255],
  lightgoldenrodyellow: [250,250,210],
  lightgray:  [211,211,211],
  lightgreen: [144,238,144],
  lightgrey:  [211,211,211],
  lightpink:  [255,182,193],
  lightsalmon:  [255,160,122],
  lightseagreen:  [32,178,170],
  lightskyblue: [135,206,250],
  lightslategray: [119,136,153],
  lightslategrey: [119,136,153],
  lightsteelblue: [176,196,222],
  lightyellow:  [255,255,224],
  lime: [0,255,0],
  limegreen:  [50,205,50],
  linen:  [250,240,230],
  magenta:  [255,0,255],
  maroon: [128,0,0],
  mediumaquamarine: [102,205,170],
  mediumblue: [0,0,205],
  mediumorchid: [186,85,211],
  mediumpurple: [147,112,219],
  mediumseagreen: [60,179,113],
  mediumslateblue:  [123,104,238],
  mediumspringgreen:  [0,250,154],
  mediumturquoise:  [72,209,204],
  mediumvioletred:  [199,21,133],
  midnightblue: [25,25,112],
  mintcream:  [245,255,250],
  mistyrose:  [255,228,225],
  moccasin: [255,228,181],
  navajowhite:  [255,222,173],
  navy: [0,0,128],
  oldlace:  [253,245,230],
  olive:  [128,128,0],
  olivedrab:  [107,142,35],
  orange: [255,165,0],
  orangered:  [255,69,0],
  orchid: [218,112,214],
  palegoldenrod:  [238,232,170],
  palegreen:  [152,251,152],
  paleturquoise:  [175,238,238],
  palevioletred:  [219,112,147],
  papayawhip: [255,239,213],
  peachpuff:  [255,218,185],
  peru: [205,133,63],
  pink: [255,192,203],
  plum: [221,160,221],
  powderblue: [176,224,230],
  purple: [128,0,128],
  rebeccapurple: [102, 51, 153],
  red:  [255,0,0],
  rosybrown:  [188,143,143],
  royalblue:  [65,105,225],
  saddlebrown:  [139,69,19],
  salmon: [250,128,114],
  sandybrown: [244,164,96],
  seagreen: [46,139,87],
  seashell: [255,245,238],
  sienna: [160,82,45],
  silver: [192,192,192],
  skyblue:  [135,206,235],
  slateblue:  [106,90,205],
  slategray:  [112,128,144],
  slategrey:  [112,128,144],
  snow: [255,250,250],
  springgreen:  [0,255,127],
  steelblue:  [70,130,180],
  tan:  [210,180,140],
  teal: [0,128,128],
  thistle:  [216,191,216],
  tomato: [255,99,71],
  turquoise:  [64,224,208],
  violet: [238,130,238],
  wheat:  [245,222,179],
  white:  [255,255,255],
  whitesmoke: [245,245,245],
  yellow: [255,255,0],
  yellowgreen:  [154,205,50]
};

var reverseKeywords = {};
for (var key in cssKeywords) {
  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
}

},{}],3:[function(require,module,exports){
var conversions = require("./conversions");

var convert = function() {
   return new Converter();
}

for (var func in conversions) {
  // export Raw versions
  convert[func + "Raw"] =  (function(func) {
    // accept array or plain args
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      return conversions[func](arg);
    }
  })(func);

  var pair = /(\w+)2(\w+)/.exec(func),
      from = pair[1],
      to = pair[2];

  // export rgb2hsl and ["rgb"]["hsl"]
  convert[from] = convert[from] || {};

  convert[from][to] = convert[func] = (function(func) { 
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      
      var val = conversions[func](arg);
      if (typeof val == "string" || val === undefined)
        return val; // keyword

      for (var i = 0; i < val.length; i++)
        val[i] = Math.round(val[i]);
      return val;
    }
  })(func);
}


/* Converter does lazy conversion and caching */
var Converter = function() {
   this.convs = {};
};

/* Either get the values for a space or
  set the values for a space, depending on args */
Converter.prototype.routeSpace = function(space, args) {
   var values = args[0];
   if (values === undefined) {
      // color.rgb()
      return this.getValues(space);
   }
   // color.rgb(10, 10, 10)
   if (typeof values == "number") {
      values = Array.prototype.slice.call(args);        
   }

   return this.setValues(space, values);
};
  
/* Set the values for a space, invalidating cache */
Converter.prototype.setValues = function(space, values) {
   this.space = space;
   this.convs = {};
   this.convs[space] = values;
   return this;
};

/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */
Converter.prototype.getValues = function(space) {
   var vals = this.convs[space];
   if (!vals) {
      var fspace = this.space,
          from = this.convs[fspace];
      vals = convert[fspace][space](from);

      this.convs[space] = vals;
   }
  return vals;
};

["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
   Converter.prototype[space] = function(vals) {
      return this.routeSpace(space, arguments);
   }
});

module.exports = convert;
},{"./conversions":2}],4:[function(require,module,exports){
/* MIT license */
var colorNames = require('color-name');

module.exports = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
}

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3})$/,
       hex =  /^#([a-fA-F0-9]{6})$/,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       keyword = /(\w+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   }
   else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
              + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}

},{"color-name":5}],5:[function(require,module,exports){
module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};
},{}],6:[function(require,module,exports){
/* MIT license */

var convert = require("color-convert"),
  string = require("color-string");

var Color = function(obj) {
  if (obj instanceof Color) return obj;
  if (!(this instanceof Color)) return new Color(obj);

  this.values = {
    rgb: [0, 0, 0],
    hsl: [0, 0, 0],
    hsv: [0, 0, 0],
    hwb: [0, 0, 0],
    cmyk: [0, 0, 0, 0],
    alpha: 1
  }

  // parse Color() argument
  if (typeof obj == "string") {
    var vals = string.getRgba(obj);
    if (vals) {
      this.setValues("rgb", vals);
    } else if (vals = string.getHsla(obj)) {
      this.setValues("hsl", vals);
    } else if (vals = string.getHwb(obj)) {
      this.setValues("hwb", vals);
    } else {
      throw new Error("Unable to parse color from string \"" + obj + "\"");
    }
  } else if (typeof obj == "object") {
    var vals = obj;
    if (vals["r"] !== undefined || vals["red"] !== undefined) {
      this.setValues("rgb", vals)
    } else if (vals["l"] !== undefined || vals["lightness"] !== undefined) {
      this.setValues("hsl", vals)
    } else if (vals["v"] !== undefined || vals["value"] !== undefined) {
      this.setValues("hsv", vals)
    } else if (vals["w"] !== undefined || vals["whiteness"] !== undefined) {
      this.setValues("hwb", vals)
    } else if (vals["c"] !== undefined || vals["cyan"] !== undefined) {
      this.setValues("cmyk", vals)
    } else {
      throw new Error("Unable to parse color from object " + JSON.stringify(obj));
    }
  }
}

Color.prototype = {
  rgb: function(vals) {
    return this.setSpace("rgb", arguments);
  },
  hsl: function(vals) {
    return this.setSpace("hsl", arguments);
  },
  hsv: function(vals) {
    return this.setSpace("hsv", arguments);
  },
  hwb: function(vals) {
    return this.setSpace("hwb", arguments);
  },
  cmyk: function(vals) {
    return this.setSpace("cmyk", arguments);
  },

  rgbArray: function() {
    return this.values.rgb;
  },
  hslArray: function() {
    return this.values.hsl;
  },
  hsvArray: function() {
    return this.values.hsv;
  },
  hwbArray: function() {
    if (this.values.alpha !== 1) {
      return this.values.hwb.concat([this.values.alpha])
    }
    return this.values.hwb;
  },
  cmykArray: function() {
    return this.values.cmyk;
  },
  rgbaArray: function() {
    var rgb = this.values.rgb;
    return rgb.concat([this.values.alpha]);
  },
  hslaArray: function() {
    var hsl = this.values.hsl;
    return hsl.concat([this.values.alpha]);
  },
  alpha: function(val) {
    if (val === undefined) {
      return this.values.alpha;
    }
    this.setValues("alpha", val);
    return this;
  },

  red: function(val) {
    return this.setChannel("rgb", 0, val);
  },
  green: function(val) {
    return this.setChannel("rgb", 1, val);
  },
  blue: function(val) {
    return this.setChannel("rgb", 2, val);
  },
  hue: function(val) {
    return this.setChannel("hsl", 0, val);
  },
  saturation: function(val) {
    return this.setChannel("hsl", 1, val);
  },
  lightness: function(val) {
    return this.setChannel("hsl", 2, val);
  },
  saturationv: function(val) {
    return this.setChannel("hsv", 1, val);
  },
  whiteness: function(val) {
    return this.setChannel("hwb", 1, val);
  },
  blackness: function(val) {
    return this.setChannel("hwb", 2, val);
  },
  value: function(val) {
    return this.setChannel("hsv", 2, val);
  },
  cyan: function(val) {
    return this.setChannel("cmyk", 0, val);
  },
  magenta: function(val) {
    return this.setChannel("cmyk", 1, val);
  },
  yellow: function(val) {
    return this.setChannel("cmyk", 2, val);
  },
  black: function(val) {
    return this.setChannel("cmyk", 3, val);
  },

  hexString: function() {
    return string.hexString(this.values.rgb);
  },
  rgbString: function() {
    return string.rgbString(this.values.rgb, this.values.alpha);
  },
  rgbaString: function() {
    return string.rgbaString(this.values.rgb, this.values.alpha);
  },
  percentString: function() {
    return string.percentString(this.values.rgb, this.values.alpha);
  },
  hslString: function() {
    return string.hslString(this.values.hsl, this.values.alpha);
  },
  hslaString: function() {
    return string.hslaString(this.values.hsl, this.values.alpha);
  },
  hwbString: function() {
    return string.hwbString(this.values.hwb, this.values.alpha);
  },
  keyword: function() {
    return string.keyword(this.values.rgb, this.values.alpha);
  },

  rgbNumber: function() {
    return (this.values.rgb[0] << 16) | (this.values.rgb[1] << 8) | this.values.rgb[2];
  },

  luminosity: function() {
    // http://www.w3.org/TR/WCAG20/#relativeluminancedef
    var rgb = this.values.rgb;
    var lum = [];
    for (var i = 0; i < rgb.length; i++) {
      var chan = rgb[i] / 255;
      lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4)
    }
    return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
  },

  contrast: function(color2) {
    // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
    var lum1 = this.luminosity();
    var lum2 = color2.luminosity();
    if (lum1 > lum2) {
      return (lum1 + 0.05) / (lum2 + 0.05)
    };
    return (lum2 + 0.05) / (lum1 + 0.05);
  },

  level: function(color2) {
    var contrastRatio = this.contrast(color2);
    return (contrastRatio >= 7.1) ? 'AAA' : (contrastRatio >= 4.5) ? 'AA' : '';
  },

  dark: function() {
    // YIQ equation from http://24ways.org/2010/calculating-color-contrast
    var rgb = this.values.rgb,
      yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return yiq < 128;
  },

  light: function() {
    return !this.dark();
  },

  negate: function() {
    var rgb = []
    for (var i = 0; i < 3; i++) {
      rgb[i] = 255 - this.values.rgb[i];
    }
    this.setValues("rgb", rgb);
    return this;
  },

  lighten: function(ratio) {
    this.values.hsl[2] += this.values.hsl[2] * ratio;
    this.setValues("hsl", this.values.hsl);
    return this;
  },

  darken: function(ratio) {
    this.values.hsl[2] -= this.values.hsl[2] * ratio;
    this.setValues("hsl", this.values.hsl);
    return this;
  },

  saturate: function(ratio) {
    this.values.hsl[1] += this.values.hsl[1] * ratio;
    this.setValues("hsl", this.values.hsl);
    return this;
  },

  desaturate: function(ratio) {
    this.values.hsl[1] -= this.values.hsl[1] * ratio;
    this.setValues("hsl", this.values.hsl);
    return this;
  },

  whiten: function(ratio) {
    this.values.hwb[1] += this.values.hwb[1] * ratio;
    this.setValues("hwb", this.values.hwb);
    return this;
  },

  blacken: function(ratio) {
    this.values.hwb[2] += this.values.hwb[2] * ratio;
    this.setValues("hwb", this.values.hwb);
    return this;
  },

  greyscale: function() {
    var rgb = this.values.rgb;
    // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
    var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
    this.setValues("rgb", [val, val, val]);
    return this;
  },

  clearer: function(ratio) {
    this.setValues("alpha", this.values.alpha - (this.values.alpha * ratio));
    return this;
  },

  opaquer: function(ratio) {
    this.setValues("alpha", this.values.alpha + (this.values.alpha * ratio));
    return this;
  },

  rotate: function(degrees) {
    var hue = this.values.hsl[0];
    hue = (hue + degrees) % 360;
    hue = hue < 0 ? 360 + hue : hue;
    this.values.hsl[0] = hue;
    this.setValues("hsl", this.values.hsl);
    return this;
  },

  mix: function(color2, weight) {
    weight = 1 - (weight == null ? 0.5 : weight);

    // algorithm from Sass's mix(). Ratio of first color in mix is
    // determined by the alphas of both colors and the weight
    var t1 = weight * 2 - 1,
      d = this.alpha() - color2.alpha();

    var weight1 = (((t1 * d == -1) ? t1 : (t1 + d) / (1 + t1 * d)) + 1) / 2;
    var weight2 = 1 - weight1;

    var rgb = this.rgbArray();
    var rgb2 = color2.rgbArray();

    for (var i = 0; i < rgb.length; i++) {
      rgb[i] = rgb[i] * weight1 + rgb2[i] * weight2;
    }
    this.setValues("rgb", rgb);

    var alpha = this.alpha() * weight + color2.alpha() * (1 - weight);
    this.setValues("alpha", alpha);

    return this;
  },

  toJSON: function() {
    return this.rgb();
  },

  clone: function() {
    return new Color(this.rgb());
  }
}


Color.prototype.getValues = function(space) {
  var vals = {};
  for (var i = 0; i < space.length; i++) {
    vals[space.charAt(i)] = this.values[space][i];
  }
  if (this.values.alpha != 1) {
    vals["a"] = this.values.alpha;
  }
  // {r: 255, g: 255, b: 255, a: 0.4}
  return vals;
}

Color.prototype.setValues = function(space, vals) {
  var spaces = {
    "rgb": ["red", "green", "blue"],
    "hsl": ["hue", "saturation", "lightness"],
    "hsv": ["hue", "saturation", "value"],
    "hwb": ["hue", "whiteness", "blackness"],
    "cmyk": ["cyan", "magenta", "yellow", "black"]
  };

  var maxes = {
    "rgb": [255, 255, 255],
    "hsl": [360, 100, 100],
    "hsv": [360, 100, 100],
    "hwb": [360, 100, 100],
    "cmyk": [100, 100, 100, 100]
  };

  var alpha = 1;
  if (space == "alpha") {
    alpha = vals;
  } else if (vals.length) {
    // [10, 10, 10]
    this.values[space] = vals.slice(0, space.length);
    alpha = vals[space.length];
  } else if (vals[space.charAt(0)] !== undefined) {
    // {r: 10, g: 10, b: 10}
    for (var i = 0; i < space.length; i++) {
      this.values[space][i] = vals[space.charAt(i)];
    }
    alpha = vals.a;
  } else if (vals[spaces[space][0]] !== undefined) {
    // {red: 10, green: 10, blue: 10}
    var chans = spaces[space];
    for (var i = 0; i < space.length; i++) {
      this.values[space][i] = vals[chans[i]];
    }
    alpha = vals.alpha;
  }
  this.values.alpha = Math.max(0, Math.min(1, (alpha !== undefined ? alpha : this.values.alpha)));
  if (space == "alpha") {
    return;
  }

  // cap values of the space prior converting all values
  for (var i = 0; i < space.length; i++) {
    var capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
    this.values[space][i] = Math.round(capped);
  }

  // convert to all the other color spaces
  for (var sname in spaces) {
    if (sname != space) {
      this.values[sname] = convert[space][sname](this.values[space])
    }

    // cap values
    for (var i = 0; i < sname.length; i++) {
      var capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
      this.values[sname][i] = Math.round(capped);
    }
  }
  return true;
}

Color.prototype.setSpace = function(space, args) {
  var vals = args[0];
  if (vals === undefined) {
    // color.rgb()
    return this.getValues(space);
  }
  // color.rgb(10, 10, 10)
  if (typeof vals == "number") {
    vals = Array.prototype.slice.call(args);
  }
  this.setValues(space, vals);
  return this;
}

Color.prototype.setChannel = function(space, index, val) {
  if (val === undefined) {
    // color.red()
    return this.values[space][index];
  }
  // color.red(100)
  this.values[space][index] = val;
  this.setValues(space, this.values[space]);
  return this;
}

window.Color = module.exports = Color

},{"color-convert":3,"color-string":4}],7:[function(require,module,exports){
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.0.2
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */


var Chart = require('./core/core.js')();

require('./core/core.helpers')(Chart);
require('./core/core.element')(Chart);
require('./core/core.animation')(Chart);
require('./core/core.controller')(Chart);
require('./core/core.datasetController')(Chart);
require('./core/core.layoutService')(Chart);
require('./core/core.legend')(Chart);
require('./core/core.scale')(Chart);
require('./core/core.scaleService')(Chart);
require('./core/core.title')(Chart);
require('./core/core.tooltip')(Chart);

require('./controllers/controller.bar')(Chart);
require('./controllers/controller.bubble')(Chart);
require('./controllers/controller.doughnut')(Chart);
require('./controllers/controller.line')(Chart);
require('./controllers/controller.polarArea')(Chart);
require('./controllers/controller.radar')(Chart);

require('./scales/scale.category')(Chart);
require('./scales/scale.linear')(Chart);
require('./scales/scale.logarithmic')(Chart);
require('./scales/scale.radialLinear')(Chart);
require('./scales/scale.time')(Chart);

require('./elements/element.arc')(Chart);
require('./elements/element.line')(Chart);
require('./elements/element.point')(Chart);
require('./elements/element.rectangle')(Chart);

require('./charts/Chart.Bar')(Chart);
require('./charts/Chart.Bubble')(Chart);
require('./charts/Chart.Doughnut')(Chart);
require('./charts/Chart.Line')(Chart);
require('./charts/Chart.PolarArea')(Chart);
require('./charts/Chart.Radar')(Chart);
require('./charts/Chart.Scatter')(Chart);

window.Chart = module.exports = Chart;

},{"./charts/Chart.Bar":8,"./charts/Chart.Bubble":9,"./charts/Chart.Doughnut":10,"./charts/Chart.Line":11,"./charts/Chart.PolarArea":12,"./charts/Chart.Radar":13,"./charts/Chart.Scatter":14,"./controllers/controller.bar":15,"./controllers/controller.bubble":16,"./controllers/controller.doughnut":17,"./controllers/controller.line":18,"./controllers/controller.polarArea":19,"./controllers/controller.radar":20,"./core/core.animation":21,"./core/core.controller":22,"./core/core.datasetController":23,"./core/core.element":24,"./core/core.helpers":25,"./core/core.js":26,"./core/core.layoutService":27,"./core/core.legend":28,"./core/core.scale":29,"./core/core.scaleService":30,"./core/core.title":31,"./core/core.tooltip":32,"./elements/element.arc":33,"./elements/element.line":34,"./elements/element.point":35,"./elements/element.rectangle":36,"./scales/scale.category":37,"./scales/scale.linear":38,"./scales/scale.logarithmic":39,"./scales/scale.radialLinear":40,"./scales/scale.time":41}],8:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	Chart.Bar = function(context, config) {
		config.type = 'bar';

		return new Chart(context, config);
	};

};
},{}],9:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	Chart.Bubble = function(context, config) {
		config.type = 'bubble';
		return new Chart(context, config);
	};

};
},{}],10:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	Chart.Doughnut = function(context, config) {
		config.type = 'doughnut';

		return new Chart(context, config);
	};

};
},{}],11:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	Chart.Line = function(context, config) {
		config.type = 'line';

		return new Chart(context, config);
	};

};
},{}],12:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	Chart.PolarArea = function(context, config) {
		config.type = 'polarArea';

		return new Chart(context, config);
	};

};
},{}],13:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	var defaultConfig = {
		aspectRatio: 1
	};

	Chart.Radar = function(context, config) {
		config.options = helpers.configMerge(defaultConfig, config.options);
		config.type = 'radar';

		return new Chart(context, config);
	};

};

},{}],14:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var defaultConfig = {
		hover: {
			mode: 'single'
		},

		scales: {
			xAxes: [{
				type: "linear", // scatter should not use a category axis
				position: "bottom",
				id: "x-axis-1" // need an ID so datasets can reference the scale
			}],
			yAxes: [{
				type: "linear",
				position: "left",
				id: "y-axis-1"
			}]
		},

		tooltips: {
			callbacks: {
				title: function(tooltipItems, data) {
					// Title doesn't make sense for scatter since we format the data as a point
					return '';
				},
				label: function(tooltipItem, data) {
					return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
				}
			}
		}
	};

	// Register the default config for this type
	Chart.defaults.scatter = defaultConfig;

	// Scatter charts use line controllers
	Chart.controllers.scatter = Chart.controllers.line;

	Chart.Scatter = function(context, config) {
		config.type = 'scatter';
		return new Chart(context, config);
	};

};
},{}],15:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.bar = {
		hover: {
			mode: "label"
		},

		scales: {
			xAxes: [{
				type: "category",

				// Specific to Bar Controller
				categoryPercentage: 0.8,
				barPercentage: 0.9,

				// grid line settings
				gridLines: {
					offsetGridLines: true
				}
			}],
			yAxes: [{
				type: "linear"
			}]
		}
	};

	Chart.controllers.bar = Chart.DatasetController.extend({
		initialize: function(chart, datasetIndex) {
			Chart.DatasetController.prototype.initialize.call(this, chart, datasetIndex);

			// Use this to indicate that this is a bar dataset.
			this.getDataset().bar = true;
		},
		// Get the number of datasets that display bars. We use this to correctly calculate the bar width
		getBarCount: function getBarCount() {
			var barCount = 0;
			helpers.each(this.chart.data.datasets, function(dataset) {
				if (helpers.isDatasetVisible(dataset) && dataset.bar) {
					++barCount;
				}
			});
			return barCount;
		},

		addElements: function() {
			this.getDataset().metaData = this.getDataset().metaData || [];
			helpers.each(this.getDataset().data, function(value, index) {
				this.getDataset().metaData[index] = this.getDataset().metaData[index] || new Chart.elements.Rectangle({
					_chart: this.chart.chart,
					_datasetIndex: this.index,
					_index: index
				});
			}, this);
		},
		addElementAndReset: function(index) {
			this.getDataset().metaData = this.getDataset().metaData || [];
			var rectangle = new Chart.elements.Rectangle({
				_chart: this.chart.chart,
				_datasetIndex: this.index,
				_index: index
			});

			var numBars = this.getBarCount();

			this.updateElement(rectangle, index, true, numBars);
			this.getDataset().metaData.splice(index, 0, rectangle);
		},

		update: function update(reset) {
			var numBars = this.getBarCount();

			helpers.each(this.getDataset().metaData, function(rectangle, index) {
				this.updateElement(rectangle, index, reset, numBars);
			}, this);
		},

		updateElement: function updateElement(rectangle, index, reset, numBars) {

			var xScale = this.getScaleForId(this.getDataset().xAxisID);
			var yScale = this.getScaleForId(this.getDataset().yAxisID);

			var yScalePoint;

			if (yScale.min < 0 && yScale.max < 0) {
				// all less than 0. use the top
				yScalePoint = yScale.getPixelForValue(yScale.max);
			} else if (yScale.min > 0 && yScale.max > 0) {
				yScalePoint = yScale.getPixelForValue(yScale.min);
			} else {
				yScalePoint = yScale.getPixelForValue(0);
			}

			helpers.extend(rectangle, {
				// Utility
				_chart: this.chart.chart,
				_xScale: xScale,
				_yScale: yScale,
				_datasetIndex: this.index,
				_index: index,


				// Desired view properties
				_model: {
					x: this.calculateBarX(index, this.index),
					y: reset ? yScalePoint : this.calculateBarY(index, this.index),

					// Tooltip
					label: this.chart.data.labels[index],
					datasetLabel: this.getDataset().label,

					// Appearance
					base: reset ? yScalePoint : this.calculateBarBase(this.index, index),
					width: this.calculateBarWidth(numBars),
					backgroundColor: rectangle.custom && rectangle.custom.backgroundColor ? rectangle.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.rectangle.backgroundColor),
					borderSkipped: rectangle.custom && rectangle.custom.borderSkipped ? rectangle.custom.borderSkipped : this.chart.options.elements.rectangle.borderSkipped,
					borderColor: rectangle.custom && rectangle.custom.borderColor ? rectangle.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.rectangle.borderColor),
					borderWidth: rectangle.custom && rectangle.custom.borderWidth ? rectangle.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.rectangle.borderWidth)
				}
			});
			rectangle.pivot();
		},

		calculateBarBase: function(datasetIndex, index) {

			var xScale = this.getScaleForId(this.getDataset().xAxisID);
			var yScale = this.getScaleForId(this.getDataset().yAxisID);

			var base = 0;

			if (yScale.options.stacked) {

				var value = this.chart.data.datasets[datasetIndex].data[index];

				if (value < 0) {
					for (var i = 0; i < datasetIndex; i++) {
						var negDS = this.chart.data.datasets[i];
						if (helpers.isDatasetVisible(negDS) && negDS.yAxisID === yScale.id && negDS.bar) {
							base += negDS.data[index] < 0 ? negDS.data[index] : 0;
						}
					}
				} else {
					for (var j = 0; j < datasetIndex; j++) {
						var posDS = this.chart.data.datasets[j];
						if (helpers.isDatasetVisible(posDS) && posDS.yAxisID === yScale.id && posDS.bar) {
							base += posDS.data[index] > 0 ? posDS.data[index] : 0;
						}
					}
				}

				return yScale.getPixelForValue(base);
			}

			base = yScale.getPixelForValue(yScale.min);

			if (yScale.beginAtZero || ((yScale.min <= 0 && yScale.max >= 0) || (yScale.min >= 0 && yScale.max <= 0))) {
				base = yScale.getPixelForValue(0, 0);
				//base += yScale.options.gridLines.lineWidth;
			} else if (yScale.min < 0 && yScale.max < 0) {
				// All values are negative. Use the top as the base
				base = yScale.getPixelForValue(yScale.max);
			}

			return base;

		},

		getRuler: function() {

			var xScale = this.getScaleForId(this.getDataset().xAxisID);
			var yScale = this.getScaleForId(this.getDataset().yAxisID);
			var datasetCount = this.getBarCount();

			var tickWidth = (function() {
				var min = xScale.getPixelForTick(1) - xScale.getPixelForTick(0);
				for (var i = 2; i < this.getDataset().data.length; i++) {
					min = Math.min(xScale.getPixelForTick(i) - xScale.getPixelForTick(i - 1), min);
				}
				return min;
			}).call(this);
			var categoryWidth = tickWidth * xScale.options.categoryPercentage;
			var categorySpacing = (tickWidth - (tickWidth * xScale.options.categoryPercentage)) / 2;
			var fullBarWidth = categoryWidth / datasetCount;
			var barWidth = fullBarWidth * xScale.options.barPercentage;
			var barSpacing = fullBarWidth - (fullBarWidth * xScale.options.barPercentage);

			return {
				datasetCount: datasetCount,
				tickWidth: tickWidth,
				categoryWidth: categoryWidth,
				categorySpacing: categorySpacing,
				fullBarWidth: fullBarWidth,
				barWidth: barWidth,
				barSpacing: barSpacing
			};
		},

		calculateBarWidth: function() {
			var xScale = this.getScaleForId(this.getDataset().xAxisID);
			var ruler = this.getRuler();
			return xScale.options.stacked ? ruler.categoryWidth : ruler.barWidth;
		},

		// Get bar index from the given dataset index accounting for the fact that not all bars are visible
		getBarIndex: function(datasetIndex) {
			var barIndex = 0;

			for (var j = 0; j < datasetIndex; ++j) {
				if (helpers.isDatasetVisible(this.chart.data.datasets[j]) && this.chart.data.datasets[j].bar) {
					++barIndex;
				}
			}

			return barIndex;
		},

		calculateBarX: function(index, datasetIndex) {

			var yScale = this.getScaleForId(this.getDataset().yAxisID);
			var xScale = this.getScaleForId(this.getDataset().xAxisID);
			var barIndex = this.getBarIndex(datasetIndex);

			var ruler = this.getRuler();
			var leftTick = xScale.getPixelForValue(null, index, datasetIndex, this.chart.isCombo);
			leftTick -= this.chart.isCombo ? (ruler.tickWidth / 2) : 0;

			if (xScale.options.stacked) {
				return leftTick + (ruler.categoryWidth / 2) + ruler.categorySpacing;
			}

			return leftTick +
				(ruler.barWidth / 2) +
				ruler.categorySpacing +
				(ruler.barWidth * barIndex) +
				(ruler.barSpacing / 2) +
				(ruler.barSpacing * barIndex);
		},

		calculateBarY: function(index, datasetIndex) {

			var xScale = this.getScaleForId(this.getDataset().xAxisID);
			var yScale = this.getScaleForId(this.getDataset().yAxisID);

			var value = this.getDataset().data[index];

			if (yScale.options.stacked) {

				var sumPos = 0,
					sumNeg = 0;

				for (var i = 0; i < datasetIndex; i++) {
					var ds = this.chart.data.datasets[i];
					if (helpers.isDatasetVisible(ds) && ds.bar && ds.yAxisID === yScale.id) {
						if (ds.data[index] < 0) {
							sumNeg += ds.data[index] || 0;
						} else {
							sumPos += ds.data[index] || 0;
						}
					}
				}

				if (value < 0) {
					return yScale.getPixelForValue(sumNeg + value);
				} else {
					return yScale.getPixelForValue(sumPos + value);
				}

				return yScale.getPixelForValue(value);
			}

			return yScale.getPixelForValue(value);
		},

		draw: function(ease) {
			var easingDecimal = ease || 1;
			helpers.each(this.getDataset().metaData, function(rectangle, index) {
				var d = this.getDataset().data[index];
				if (d !== null && d !== undefined && !isNaN(d)) {
					rectangle.transition(easingDecimal).draw();
				}
			}, this);
		},

		setHoverStyle: function(rectangle) {
			var dataset = this.chart.data.datasets[rectangle._datasetIndex];
			var index = rectangle._index;

			rectangle._model.backgroundColor = rectangle.custom && rectangle.custom.hoverBackgroundColor ? rectangle.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.color(rectangle._model.backgroundColor).saturate(0.5).darken(0.1).rgbString());
			rectangle._model.borderColor = rectangle.custom && rectangle.custom.hoverBorderColor ? rectangle.custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.color(rectangle._model.borderColor).saturate(0.5).darken(0.1).rgbString());
			rectangle._model.borderWidth = rectangle.custom && rectangle.custom.hoverBorderWidth ? rectangle.custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, rectangle._model.borderWidth);
		},

		removeHoverStyle: function(rectangle) {
			var dataset = this.chart.data.datasets[rectangle._datasetIndex];
			var index = rectangle._index;

			rectangle._model.backgroundColor = rectangle.custom && rectangle.custom.backgroundColor ? rectangle.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.rectangle.backgroundColor);
			rectangle._model.borderColor = rectangle.custom && rectangle.custom.borderColor ? rectangle.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.rectangle.borderColor);
			rectangle._model.borderWidth = rectangle.custom && rectangle.custom.borderWidth ? rectangle.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.rectangle.borderWidth);
		}

	});
};

},{}],16:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.bubble = {
		hover: {
			mode: "single"
		},

		scales: {
			xAxes: [{
				type: "linear", // bubble should probably use a linear scale by default
				position: "bottom",
				id: "x-axis-0" // need an ID so datasets can reference the scale
			}],
			yAxes: [{
				type: "linear",
				position: "left",
				id: "y-axis-0"
			}]
		},

		tooltips: {
			callbacks: {
				title: function(tooltipItems, data) {
					// Title doesn't make sense for scatter since we format the data as a point
					return '';
				},
				label: function(tooltipItem, data) {
					var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
					var dataPoint = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
					return datasetLabel + ': (' + dataPoint.x + ', ' + dataPoint.y + ', ' + dataPoint.r + ')';
				}
			}
		}
	};


	Chart.controllers.bubble = Chart.DatasetController.extend({
		addElements: function() {

			this.getDataset().metaData = this.getDataset().metaData || [];

			helpers.each(this.getDataset().data, function(value, index) {
				this.getDataset().metaData[index] = this.getDataset().metaData[index] || new Chart.elements.Point({
					_chart: this.chart.chart,
					_datasetIndex: this.index,
					_index: index
				});
			}, this);
		},
		addElementAndReset: function(index) {
			this.getDataset().metaData = this.getDataset().metaData || [];
			var point = new Chart.elements.Point({
				_chart: this.chart.chart,
				_datasetIndex: this.index,
				_index: index
			});

			// Reset the point
			this.updateElement(point, index, true);

			// Add to the points array
			this.getDataset().metaData.splice(index, 0, point);
		},

		update: function update(reset) {
			var points = this.getDataset().metaData;

			var yScale = this.getScaleForId(this.getDataset().yAxisID);
			var xScale = this.getScaleForId(this.getDataset().xAxisID);
			var scaleBase;

			if (yScale.min < 0 && yScale.max < 0) {
				scaleBase = yScale.getPixelForValue(yScale.max);
			} else if (yScale.min > 0 && yScale.max > 0) {
				scaleBase = yScale.getPixelForValue(yScale.min);
			} else {
				scaleBase = yScale.getPixelForValue(0);
			}

			// Update Points
			helpers.each(points, function(point, index) {
				this.updateElement(point, index, reset);
			}, this);

		},

		updateElement: function(point, index, reset) {
			var yScale = this.getScaleForId(this.getDataset().yAxisID);
			var xScale = this.getScaleForId(this.getDataset().xAxisID);
			var scaleBase;

			if (yScale.min < 0 && yScale.max < 0) {
				scaleBase = yScale.getPixelForValue(yScale.max);
			} else if (yScale.min > 0 && yScale.max > 0) {
				scaleBase = yScale.getPixelForValue(yScale.min);
			} else {
				scaleBase = yScale.getPixelForValue(0);
			}

			helpers.extend(point, {
				// Utility
				_chart: this.chart.chart,
				_xScale: xScale,
				_yScale: yScale,
				_datasetIndex: this.index,
				_index: index,

				// Desired view properties
				_model: {
					x: reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(this.getDataset().data[index], index, this.index, this.chart.isCombo),
					y: reset ? scaleBase : yScale.getPixelForValue(this.getDataset().data[index], index, this.index),
					// Appearance
					radius: reset ? 0 : point.custom && point.custom.radius ? point.custom.radius : this.getRadius(this.getDataset().data[index]),
					backgroundColor: point.custom && point.custom.backgroundColor ? point.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.point.backgroundColor),
					borderColor: point.custom && point.custom.borderColor ? point.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.point.borderColor),
					borderWidth: point.custom && point.custom.borderWidth ? point.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.point.borderWidth),

					// Tooltip
					hitRadius: point.custom && point.custom.hitRadius ? point.custom.hitRadius : helpers.getValueAtIndexOrDefault(this.getDataset().hitRadius, index, this.chart.options.elements.point.hitRadius)
				}
			});

			point._model.skip = point.custom && point.custom.skip ? point.custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));

			point.pivot();
		},

		getRadius: function(value) {
			return value.r || this.chart.options.elements.point.radius;
		},

		draw: function(ease) {
			var easingDecimal = ease || 1;

			// Transition and Draw the Points
			helpers.each(this.getDataset().metaData, function(point, index) {
				point.transition(easingDecimal);
				point.draw();
			});

		},

		setHoverStyle: function(point) {
			// Point
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var index = point._index;

			point._model.radius = point.custom && point.custom.hoverRadius ? point.custom.hoverRadius : (helpers.getValueAtIndexOrDefault(dataset.hoverRadius, index, this.chart.options.elements.point.hoverRadius)) + this.getRadius(this.getDataset().data[point._index]);
			point._model.backgroundColor = point.custom && point.custom.hoverBackgroundColor ? point.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.color(point._model.backgroundColor).saturate(0.5).darken(0.1).rgbString());
			point._model.borderColor = point.custom && point.custom.hoverBorderColor ? point.custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.color(point._model.borderColor).saturate(0.5).darken(0.1).rgbString());
			point._model.borderWidth = point.custom && point.custom.hoverBorderWidth ? point.custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, point._model.borderWidth);
		},

		removeHoverStyle: function(point) {
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var index = point._index;

			point._model.radius = point.custom && point.custom.radius ? point.custom.radius : this.getRadius(this.getDataset().data[point._index]);
			point._model.backgroundColor = point.custom && point.custom.backgroundColor ? point.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.point.backgroundColor);
			point._model.borderColor = point.custom && point.custom.borderColor ? point.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.point.borderColor);
			point._model.borderWidth = point.custom && point.custom.borderWidth ? point.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.point.borderWidth);
		}
	});
};
},{}],17:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.doughnut = {
		animation: {
			//Boolean - Whether we animate the rotation of the Doughnut
			animateRotate: true,
			//Boolean - Whether we animate scaling the Doughnut from the centre
			animateScale: false
		},
		aspectRatio: 1,
		hover: {
			mode: 'single'
		},
		legendCallback: function(chart) {
			var text = [];
			text.push('<ul class="' + chart.id + '-legend">');

			if (chart.data.datasets.length) {
				for (var i = 0; i < chart.data.datasets[0].data.length; ++i) {
					text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
					if (chart.data.labels[i]) {
						text.push(chart.data.labels[i]);
					}
					text.push('</span></li>');
				}
			}

			text.push('</ul>');
			return text.join("");
		},
		legend: {
			labels: {
				generateLabels: function(data) {
					if (data.labels.length && data.datasets.length) {
						return data.labels.map(function(label, i) {
							return {
								text: label,
								fillStyle: data.datasets[0].backgroundColor[i],
								hidden: isNaN(data.datasets[0].data[i]),

								// Extra data used for toggling the correct item
								index: i
							};
						});
					} else {
						return [];
					}
				}
			},
			onClick: function(e, legendItem) {
				helpers.each(this.chart.data.datasets, function(dataset) {
					dataset.metaHiddenData = dataset.metaHiddenData || [];
					var idx = legendItem.index;

					if (!isNaN(dataset.data[idx])) {
						dataset.metaHiddenData[idx] = dataset.data[idx];
						dataset.data[idx] = NaN;
					} else if (!isNaN(dataset.metaHiddenData[idx])) {
						dataset.data[idx] = dataset.metaHiddenData[idx];
					}
				});

				this.chart.update();
			}
		},

		//The percentage of the chart that we cut out of the middle.
		cutoutPercentage: 50,

		//The rotation of the chart, where the first data arc begins.
		rotation: Math.PI * -0.5,

		//The total circumference of the chart.
		circumference: Math.PI * 2.0,

		// Need to override these to give a nice default
		tooltips: {
			callbacks: {
				title: function() {
					return '';
				},
				label: function(tooltipItem, data) {
					return data.labels[tooltipItem.index] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
				}
			}
		}
	};

	Chart.defaults.pie = helpers.clone(Chart.defaults.doughnut);
	helpers.extend(Chart.defaults.pie, {
		cutoutPercentage: 0
	});


	Chart.controllers.doughnut = Chart.controllers.pie = Chart.DatasetController.extend({
		linkScales: function() {
			// no scales for doughnut
		},

		addElements: function() {
			this.getDataset().metaData = this.getDataset().metaData || [];
			helpers.each(this.getDataset().data, function(value, index) {
				this.getDataset().metaData[index] = this.getDataset().metaData[index] || new Chart.elements.Arc({
					_chart: this.chart.chart,
					_datasetIndex: this.index,
					_index: index
				});
			}, this);
		},
		addElementAndReset: function(index, colorForNewElement) {
			this.getDataset().metaData = this.getDataset().metaData || [];
			var arc = new Chart.elements.Arc({
				_chart: this.chart.chart,
				_datasetIndex: this.index,
				_index: index
			});

			if (colorForNewElement && helpers.isArray(this.getDataset().backgroundColor)) {
				this.getDataset().backgroundColor.splice(index, 0, colorForNewElement);
			}

			// Reset the point
			this.updateElement(arc, index, true);

			// Add to the points array
			this.getDataset().metaData.splice(index, 0, arc);
		},

		getVisibleDatasetCount: function getVisibleDatasetCount() {
			return helpers.where(this.chart.data.datasets, function(ds) {
				return helpers.isDatasetVisible(ds);
			}).length;
		},

		// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
		getRingIndex: function getRingIndex(datasetIndex) {
			var ringIndex = 0;

			for (var j = 0; j < datasetIndex; ++j) {
				if (helpers.isDatasetVisible(this.chart.data.datasets[j])) {
					++ringIndex;
				}
			}

			return ringIndex;
		},

		update: function update(reset) {
			var availableWidth = this.chart.chartArea.right - this.chart.chartArea.left - this.chart.options.elements.arc.borderWidth;
			var availableHeight = this.chart.chartArea.bottom - this.chart.chartArea.top - this.chart.options.elements.arc.borderWidth;
			var minSize = Math.min(availableWidth, availableHeight);
			var offset = {x: 0, y: 0};

			// If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
			if (this.chart.options.circumference && this.chart.options.circumference < Math.PI * 2.0) {
				var startAngle = this.chart.options.rotation % (Math.PI * 2.0);
				startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
				var endAngle = startAngle + this.chart.options.circumference;
				var start = {x: Math.cos(startAngle), y: Math.sin(startAngle)};
				var end = {x: Math.cos(endAngle), y: Math.sin(endAngle)};
				var contains0 = (startAngle <= 0 && 0 <= endAngle) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
				var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
				var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
				var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
				var cutout = this.chart.options.cutoutPercentage / 100.0;
				var min = {x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))};
				var max = {x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)), y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))};
				var size = {width: (max.x - min.x) * 0.5, height: (max.y - min.y) * 0.5};
				minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
				offset = {x: (max.x + min.x) * -0.5, y: (max.y + min.y) * -0.5};
			}

			this.chart.outerRadius = Math.max(minSize / 2, 0);
			this.chart.innerRadius = Math.max(this.chart.options.cutoutPercentage ? (this.chart.outerRadius / 100) * (this.chart.options.cutoutPercentage) : 1, 0);
			this.chart.radiusLength = (this.chart.outerRadius - this.chart.innerRadius) / this.getVisibleDatasetCount();
			this.chart.offsetX = offset.x * this.chart.outerRadius;
			this.chart.offsetY = offset.y * this.chart.outerRadius;

			this.getDataset().total = 0;
			helpers.each(this.getDataset().data, function(value) {
				if (!isNaN(value)) {
					this.getDataset().total += Math.abs(value);
				}
			}, this);

			this.outerRadius = this.chart.outerRadius - (this.chart.radiusLength * this.getRingIndex(this.index));
			this.innerRadius = this.outerRadius - this.chart.radiusLength;

			helpers.each(this.getDataset().metaData, function(arc, index) {
				this.updateElement(arc, index, reset);
			}, this);
		},
		updateElement: function(arc, index, reset) {
			var centerX = (this.chart.chartArea.left + this.chart.chartArea.right) / 2;
			var centerY = (this.chart.chartArea.top + this.chart.chartArea.bottom) / 2;
			var startAngle = this.chart.options.rotation || (Math.PI * -0.5); // non reset case handled later
			var endAngle = this.chart.options.rotation || (Math.PI * -0.5); // non reset case handled later
			var circumference = reset && this.chart.options.animation.animateRotate ? 0 : this.calculateCircumference(this.getDataset().data[index]) * ((this.chart.options.circumference || (2.0 * Math.PI)) / (2.0 * Math.PI));
			var innerRadius = reset && this.chart.options.animation.animateScale ? 0 : this.innerRadius;
			var outerRadius = reset && this.chart.options.animation.animateScale ? 0 : this.outerRadius;

			helpers.extend(arc, {
				// Utility
				_chart: this.chart.chart,
				_datasetIndex: this.index,
				_index: index,

				// Desired view properties
				_model: {
					x: centerX + this.chart.offsetX,
					y: centerY + this.chart.offsetY,
					startAngle: startAngle,
					endAngle: endAngle,
					circumference: circumference,
					outerRadius: outerRadius,
					innerRadius: innerRadius,

					backgroundColor: arc.custom && arc.custom.backgroundColor ? arc.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.arc.backgroundColor),
					hoverBackgroundColor: arc.custom && arc.custom.hoverBackgroundColor ? arc.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().hoverBackgroundColor, index, this.chart.options.elements.arc.hoverBackgroundColor),
					borderWidth: arc.custom && arc.custom.borderWidth ? arc.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.arc.borderWidth),
					borderColor: arc.custom && arc.custom.borderColor ? arc.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.arc.borderColor),

					label: helpers.getValueAtIndexOrDefault(this.getDataset().label, index, this.chart.data.labels[index])
				}
			});

			// Set correct angles if not resetting
			if (!reset) {

				if (index === 0) {
					arc._model.startAngle = this.chart.options.rotation || (Math.PI * -0.5);
				} else {
					arc._model.startAngle = this.getDataset().metaData[index - 1]._model.endAngle;
				}

				arc._model.endAngle = arc._model.startAngle + arc._model.circumference;
			}

			arc.pivot();
		},

		draw: function(ease) {
			var easingDecimal = ease || 1;
			helpers.each(this.getDataset().metaData, function(arc, index) {
				arc.transition(easingDecimal).draw();
			});
		},

		setHoverStyle: function(arc) {
			var dataset = this.chart.data.datasets[arc._datasetIndex];
			var index = arc._index;

			arc._model.backgroundColor = arc.custom && arc.custom.hoverBackgroundColor ? arc.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.color(arc._model.backgroundColor).saturate(0.5).darken(0.1).rgbString());
			arc._model.borderColor = arc.custom && arc.custom.hoverBorderColor ? arc.custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.color(arc._model.borderColor).saturate(0.5).darken(0.1).rgbString());
			arc._model.borderWidth = arc.custom && arc.custom.hoverBorderWidth ? arc.custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, arc._model.borderWidth);
		},

		removeHoverStyle: function(arc) {
			var dataset = this.chart.data.datasets[arc._datasetIndex];
			var index = arc._index;

			arc._model.backgroundColor = arc.custom && arc.custom.backgroundColor ? arc.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.arc.backgroundColor);
			arc._model.borderColor = arc.custom && arc.custom.borderColor ? arc.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.arc.borderColor);
			arc._model.borderWidth = arc.custom && arc.custom.borderWidth ? arc.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.arc.borderWidth);
		},

		calculateCircumference: function(value) {
			if (this.getDataset().total > 0 && !isNaN(value)) {
				return (Math.PI * 1.999999) * (value / this.getDataset().total);
			} else {
				return 0;
			}
		}
	});
};
},{}],18:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.line = {
		showLines: true,

		hover: {
			mode: "label"
		},

		scales: {
			xAxes: [{
				type: "category",
				id: 'x-axis-0'
			}],
			yAxes: [{
				type: "linear",
				id: 'y-axis-0'
			}]
		}
	};


	Chart.controllers.line = Chart.DatasetController.extend({
		addElements: function() {

			this.getDataset().metaData = this.getDataset().metaData || [];

			this.getDataset().metaDataset = this.getDataset().metaDataset || new Chart.elements.Line({
				_chart: this.chart.chart,
				_datasetIndex: this.index,
				_points: this.getDataset().metaData
			});

			helpers.each(this.getDataset().data, function(value, index) {
				this.getDataset().metaData[index] = this.getDataset().metaData[index] || new Chart.elements.Point({
					_chart: this.chart.chart,
					_datasetIndex: this.index,
					_index: index
				});
			}, this);
		},
		addElementAndReset: function(index) {
			this.getDataset().metaData = this.getDataset().metaData || [];
			var point = new Chart.elements.Point({
				_chart: this.chart.chart,
				_datasetIndex: this.index,
				_index: index
			});

			// Reset the point
			this.updateElement(point, index, true);

			// Add to the points array
			this.getDataset().metaData.splice(index, 0, point);

			// Make sure bezier control points are updated
			if (this.chart.options.showLines && this.chart.options.elements.line.tension !== 0)
				this.updateBezierControlPoints();
		},

		update: function update(reset) {
			var line = this.getDataset().metaDataset;
			var points = this.getDataset().metaData;

			var yScale = this.getScaleForId(this.getDataset().yAxisID);
			var xScale = this.getScaleForId(this.getDataset().xAxisID);
			var scaleBase;

			if (yScale.min < 0 && yScale.max < 0) {
				scaleBase = yScale.getPixelForValue(yScale.max);
			} else if (yScale.min > 0 && yScale.max > 0) {
				scaleBase = yScale.getPixelForValue(yScale.min);
			} else {
				scaleBase = yScale.getPixelForValue(0);
			}

			// Update Line
			if (this.chart.options.showLines) {
				// Utility
				line._scale = yScale;
				line._datasetIndex = this.index;
				// Data
				line._children = points;
				// Model
				line._model = {
					// Appearance
					tension: line.custom && line.custom.tension ? line.custom.tension : helpers.getValueOrDefault(this.getDataset().tension, this.chart.options.elements.line.tension),
					backgroundColor: line.custom && line.custom.backgroundColor ? line.custom.backgroundColor : (this.getDataset().backgroundColor || this.chart.options.elements.line.backgroundColor),
					borderWidth: line.custom && line.custom.borderWidth ? line.custom.borderWidth : (this.getDataset().borderWidth || this.chart.options.elements.line.borderWidth),
					borderColor: line.custom && line.custom.borderColor ? line.custom.borderColor : (this.getDataset().borderColor || this.chart.options.elements.line.borderColor),
					borderCapStyle: line.custom && line.custom.borderCapStyle ? line.custom.borderCapStyle : (this.getDataset().borderCapStyle || this.chart.options.elements.line.borderCapStyle),
					borderDash: line.custom && line.custom.borderDash ? line.custom.borderDash : (this.getDataset().borderDash || this.chart.options.elements.line.borderDash),
					borderDashOffset: line.custom && line.custom.borderDashOffset ? line.custom.borderDashOffset : (this.getDataset().borderDashOffset || this.chart.options.elements.line.borderDashOffset),
					borderJoinStyle: line.custom && line.custom.borderJoinStyle ? line.custom.borderJoinStyle : (this.getDataset().borderJoinStyle || this.chart.options.elements.line.borderJoinStyle),
					fill: line.custom && line.custom.fill ? line.custom.fill : (this.getDataset().fill !== undefined ? this.getDataset().fill : this.chart.options.elements.line.fill),
					// Scale
					scaleTop: yScale.top,
					scaleBottom: yScale.bottom,
					scaleZero: scaleBase
				};
				line.pivot();
			}

			// Update Points
			helpers.each(points, function(point, index) {
				this.updateElement(point, index, reset);
			}, this);

			if (this.chart.options.showLines && this.chart.options.elements.line.tension !== 0)
				this.updateBezierControlPoints();
		},

		getPointBackgroundColor: function(point, index) {
			var backgroundColor = this.chart.options.elements.point.backgroundColor;
			var dataset = this.getDataset();

			if (point.custom && point.custom.backgroundColor) {
				backgroundColor = point.custom.backgroundColor;
			} else if (dataset.pointBackgroundColor) {
				backgroundColor = helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, backgroundColor);
			} else if (dataset.backgroundColor) {
				backgroundColor = dataset.backgroundColor;
			}

			return backgroundColor;
		},
		getPointBorderColor: function(point, index) {
			var borderColor = this.chart.options.elements.point.borderColor;
			var dataset = this.getDataset();

			if (point.custom && point.custom.borderColor) {
				borderColor = point.custom.borderColor;
			} else if (dataset.pointBorderColor) {
				borderColor = helpers.getValueAtIndexOrDefault(this.getDataset().pointBorderColor, index, borderColor);
			} else if (dataset.borderColor) {
				borderColor = dataset.borderColor;
			}

			return borderColor;
		},
		getPointBorderWidth: function(point, index) {
			var borderWidth = this.chart.options.elements.point.borderWidth;
			var dataset = this.getDataset();

			if (point.custom && point.custom.borderWidth !== undefined) {
				borderWidth = point.custom.borderWidth;
			} else if (dataset.pointBorderWidth !== undefined) {
				borderWidth = helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, borderWidth);
			} else if (dataset.borderWidth !== undefined) {
				borderWidth = dataset.borderWidth;
			}

			return borderWidth;
		},

		updateElement: function(point, index, reset) {
			var yScale = this.getScaleForId(this.getDataset().yAxisID);
			var xScale = this.getScaleForId(this.getDataset().xAxisID);
			var scaleBase;

			if (yScale.min < 0 && yScale.max < 0) {
				scaleBase = yScale.getPixelForValue(yScale.max);
			} else if (yScale.min > 0 && yScale.max > 0) {
				scaleBase = yScale.getPixelForValue(yScale.min);
			} else {
				scaleBase = yScale.getPixelForValue(0);
			}

			// Utility
			point._chart = this.chart.chart;
			point._xScale = xScale;
			point._yScale = yScale;
			point._datasetIndex = this.index;
			point._index = index;

			// Desired view properties
			point._model = {
				x: xScale.getPixelForValue(this.getDataset().data[index], index, this.index, this.chart.isCombo),
				y: reset ? scaleBase : this.calculatePointY(this.getDataset().data[index], index, this.index, this.chart.isCombo),
				// Appearance
				tension: point.custom && point.custom.tension ? point.custom.tension : helpers.getValueOrDefault(this.getDataset().tension, this.chart.options.elements.line.tension),
				radius: point.custom && point.custom.radius ? point.custom.radius : helpers.getValueAtIndexOrDefault(this.getDataset().radius, index, this.chart.options.elements.point.radius),
				pointStyle: point.custom && point.custom.pointStyle ? point.custom.pointStyle : helpers.getValueAtIndexOrDefault(this.getDataset().pointStyle, index, this.chart.options.elements.point.pointStyle),
				backgroundColor: this.getPointBackgroundColor(point, index),
				borderColor: this.getPointBorderColor(point, index),
				borderWidth: this.getPointBorderWidth(point, index),
				// Tooltip
				hitRadius: point.custom && point.custom.hitRadius ? point.custom.hitRadius : helpers.getValueAtIndexOrDefault(this.getDataset().hitRadius, index, this.chart.options.elements.point.hitRadius)
			};

			point._model.skip = point.custom && point.custom.skip ? point.custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
		},

		calculatePointY: function(value, index, datasetIndex, isCombo) {

			var xScale = this.getScaleForId(this.getDataset().xAxisID);
			var yScale = this.getScaleForId(this.getDataset().yAxisID);

			if (yScale.options.stacked) {

				var sumPos = 0,
					sumNeg = 0;

				for (var i = 0; i < datasetIndex; i++) {
					var ds = this.chart.data.datasets[i];
					if (ds.type === 'line' && helpers.isDatasetVisible(ds)) {
						if (ds.data[index] < 0) {
							sumNeg += ds.data[index] || 0;
						} else {
							sumPos += ds.data[index] || 0;
						}
					}
				}

				if (value < 0) {
					return yScale.getPixelForValue(sumNeg + value);
				} else {
					return yScale.getPixelForValue(sumPos + value);
				}
			}

			return yScale.getPixelForValue(value);
		},

		updateBezierControlPoints: function() {
			// Update bezier control points
			helpers.each(this.getDataset().metaData, function(point, index) {
				var controlPoints = helpers.splineCurve(
					helpers.previousItem(this.getDataset().metaData, index)._model,
					point._model,
					helpers.nextItem(this.getDataset().metaData, index)._model,
					point._model.tension
				);

				// Prevent the bezier going outside of the bounds of the graph
				point._model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, this.chart.chartArea.right), this.chart.chartArea.left);
				point._model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, this.chart.chartArea.bottom), this.chart.chartArea.top);

				point._model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, this.chart.chartArea.right), this.chart.chartArea.left);
				point._model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, this.chart.chartArea.bottom), this.chart.chartArea.top);

				// Now pivot the point for animation
				point.pivot();
			}, this);
		},

		draw: function(ease) {
			var easingDecimal = ease || 1;

			// Transition Point Locations
			helpers.each(this.getDataset().metaData, function(point) {
				point.transition(easingDecimal);
			});

			// Transition and Draw the line
			if (this.chart.options.showLines)
				this.getDataset().metaDataset.transition(easingDecimal).draw();

			// Draw the points
			helpers.each(this.getDataset().metaData, function(point) {
				point.draw();
			});
		},

		setHoverStyle: function(point) {
			// Point
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var index = point._index;

			point._model.radius = point.custom && point.custom.hoverRadius ? point.custom.hoverRadius : helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
			point._model.backgroundColor = point.custom && point.custom.hoverBackgroundColor ? point.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.color(point._model.backgroundColor).saturate(0.5).darken(0.1).rgbString());
			point._model.borderColor = point.custom && point.custom.hoverBorderColor ? point.custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.color(point._model.borderColor).saturate(0.5).darken(0.1).rgbString());
			point._model.borderWidth = point.custom && point.custom.hoverBorderWidth ? point.custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, point._model.borderWidth);
		},

		removeHoverStyle: function(point) {
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var index = point._index;

			point._model.radius = point.custom && point.custom.radius ? point.custom.radius : helpers.getValueAtIndexOrDefault(this.getDataset().radius, index, this.chart.options.elements.point.radius);
			point._model.backgroundColor = this.getPointBackgroundColor(point, index);
			point._model.borderColor = this.getPointBorderColor(point, index);
			point._model.borderWidth = this.getPointBorderWidth(point, index);
		}
	});
};

},{}],19:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.polarArea = {

		scale: {
			type: "radialLinear",
			lineArc: true // so that lines are circular
		},

		//Boolean - Whether to animate the rotation of the chart
		animateRotate: true,
		animateScale: true,

		aspectRatio: 1,
		legendCallback: function(chart) {
			var text = [];
			text.push('<ul class="' + chart.id + '-legend">');

			if (chart.data.datasets.length) {
				for (var i = 0; i < chart.data.datasets[0].data.length; ++i) {
					text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
					if (chart.data.labels[i]) {
						text.push(chart.data.labels[i]);
					}
					text.push('</span></li>');
				}
			}

			text.push('</ul>');
			return text.join("");
		},
		legend: {
			labels: {
				generateLabels: function(data) {
					if (data.labels.length && data.datasets.length) {
						return data.labels.map(function(label, i) {
							return {
								text: label,
								fillStyle: data.datasets[0].backgroundColor[i],
								hidden: isNaN(data.datasets[0].data[i]),

								// Extra data used for toggling the correct item
								index: i
							};
						});
					} else {
						return [];
					}
				}
			},
			onClick: function(e, legendItem) {
				helpers.each(this.chart.data.datasets, function(dataset) {
					dataset.metaHiddenData = dataset.metaHiddenData || [];
					var idx = legendItem.index;

					if (!isNaN(dataset.data[idx])) {
						dataset.metaHiddenData[idx] = dataset.data[idx];
						dataset.data[idx] = NaN;
					} else if (!isNaN(dataset.metaHiddenData[idx])) {
						dataset.data[idx] = dataset.metaHiddenData[idx];
					}
				});

				this.chart.update();
			}
		},

		// Need to override these to give a nice default
		tooltips: {
			callbacks: {
				title: function() {
					return '';
				},
				label: function(tooltipItem, data) {
					return data.labels[tooltipItem.index] + ': ' + tooltipItem.yLabel;
				}
			}
		}
	};

	Chart.controllers.polarArea = Chart.DatasetController.extend({
		linkScales: function() {
			// no scales for doughnut
		},
		addElements: function() {
			this.getDataset().metaData = this.getDataset().metaData || [];
			helpers.each(this.getDataset().data, function(value, index) {
				this.getDataset().metaData[index] = this.getDataset().metaData[index] || new Chart.elements.Arc({
					_chart: this.chart.chart,
					_datasetIndex: this.index,
					_index: index
				});
			}, this);
		},
		addElementAndReset: function(index) {
			this.getDataset().metaData = this.getDataset().metaData || [];
			var arc = new Chart.elements.Arc({
				_chart: this.chart.chart,
				_datasetIndex: this.index,
				_index: index
			});

			// Reset the point
			this.updateElement(arc, index, true);

			// Add to the points array
			this.getDataset().metaData.splice(index, 0, arc);
		},
		getVisibleDatasetCount: function getVisibleDatasetCount() {
			return helpers.where(this.chart.data.datasets, function(ds) {
				return helpers.isDatasetVisible(ds);
			}).length;
		},

		update: function update(reset) {
			var minSize = Math.min(this.chart.chartArea.right - this.chart.chartArea.left, this.chart.chartArea.bottom - this.chart.chartArea.top);
			this.chart.outerRadius = Math.max((minSize - this.chart.options.elements.arc.borderWidth / 2) / 2, 0);
			this.chart.innerRadius = Math.max(this.chart.options.cutoutPercentage ? (this.chart.outerRadius / 100) * (this.chart.options.cutoutPercentage) : 1, 0);
			this.chart.radiusLength = (this.chart.outerRadius - this.chart.innerRadius) / this.getVisibleDatasetCount();

			this.getDataset().total = 0;
			helpers.each(this.getDataset().data, function(value) {
				this.getDataset().total += Math.abs(value);
			}, this);

			this.outerRadius = this.chart.outerRadius - (this.chart.radiusLength * this.index);
			this.innerRadius = this.outerRadius - this.chart.radiusLength;

			helpers.each(this.getDataset().metaData, function(arc, index) {
				this.updateElement(arc, index, reset);
			}, this);
		},

		updateElement: function(arc, index, reset) {
			var circumference = this.calculateCircumference(this.getDataset().data[index]);
			var centerX = (this.chart.chartArea.left + this.chart.chartArea.right) / 2;
			var centerY = (this.chart.chartArea.top + this.chart.chartArea.bottom) / 2;

			// If there is NaN data before us, we need to calculate the starting angle correctly.
			// We could be way more efficient here, but its unlikely that the polar area chart will have a lot of data
			var notNullIndex = 0;
			for (var i = 0; i < index; ++i) {
				if (!isNaN(this.getDataset().data[i])) {
					++notNullIndex;
				}
			}

			var startAngle = (-0.5 * Math.PI) + (circumference * notNullIndex);
			var endAngle = startAngle + circumference;

			var resetModel = {
				x: centerX,
				y: centerY,
				innerRadius: 0,
				outerRadius: this.chart.options.animateScale ? 0 : this.chart.scale.getDistanceFromCenterForValue(this.getDataset().data[index]),
				startAngle: this.chart.options.animateRotate ? Math.PI * -0.5 : startAngle,
				endAngle: this.chart.options.animateRotate ? Math.PI * -0.5 : endAngle,

				backgroundColor: arc.custom && arc.custom.backgroundColor ? arc.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.arc.backgroundColor),
				borderWidth: arc.custom && arc.custom.borderWidth ? arc.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.arc.borderWidth),
				borderColor: arc.custom && arc.custom.borderColor ? arc.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.arc.borderColor),

				label: helpers.getValueAtIndexOrDefault(this.chart.data.labels, index, this.chart.data.labels[index])
			};

			helpers.extend(arc, {
				// Utility
				_chart: this.chart.chart,
				_datasetIndex: this.index,
				_index: index,
				_scale: this.chart.scale,

				// Desired view properties
				_model: reset ? resetModel : {
					x: centerX,
					y: centerY,
					innerRadius: 0,
					outerRadius: this.chart.scale.getDistanceFromCenterForValue(this.getDataset().data[index]),
					startAngle: startAngle,
					endAngle: endAngle,

					backgroundColor: arc.custom && arc.custom.backgroundColor ? arc.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.arc.backgroundColor),
					borderWidth: arc.custom && arc.custom.borderWidth ? arc.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.arc.borderWidth),
					borderColor: arc.custom && arc.custom.borderColor ? arc.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.arc.borderColor),

					label: helpers.getValueAtIndexOrDefault(this.chart.data.labels, index, this.chart.data.labels[index])
				}
			});

			arc.pivot();
		},

		draw: function(ease) {
			var easingDecimal = ease || 1;
			helpers.each(this.getDataset().metaData, function(arc, index) {
				arc.transition(easingDecimal).draw();
			});
		},

		setHoverStyle: function(arc) {
			var dataset = this.chart.data.datasets[arc._datasetIndex];
			var index = arc._index;

			arc._model.backgroundColor = arc.custom && arc.custom.hoverBackgroundColor ? arc.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.color(arc._model.backgroundColor).saturate(0.5).darken(0.1).rgbString());
			arc._model.borderColor = arc.custom && arc.custom.hoverBorderColor ? arc.custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.color(arc._model.borderColor).saturate(0.5).darken(0.1).rgbString());
			arc._model.borderWidth = arc.custom && arc.custom.hoverBorderWidth ? arc.custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, arc._model.borderWidth);
		},

		removeHoverStyle: function(arc) {
			var dataset = this.chart.data.datasets[arc._datasetIndex];
			var index = arc._index;

			arc._model.backgroundColor = arc.custom && arc.custom.backgroundColor ? arc.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.arc.backgroundColor);
			arc._model.borderColor = arc.custom && arc.custom.borderColor ? arc.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.arc.borderColor);
			arc._model.borderWidth = arc.custom && arc.custom.borderWidth ? arc.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.arc.borderWidth);
		},

		calculateCircumference: function(value) {
			if (isNaN(value)) {
				return 0;
			} else {
				// Count the number of NaN values
				var numNaN = helpers.where(this.getDataset().data, function(data) {
					return isNaN(data);
				}).length;

				return (2 * Math.PI) / (this.getDataset().data.length - numNaN);
			}
		}
	});

};
},{}],20:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;


	Chart.defaults.radar = {
		scale: {
			type: "radialLinear"
		},
		elements: {
			line: {
				tension: 0 // no bezier in radar
			}
		}
	};

	Chart.controllers.radar = Chart.DatasetController.extend({
		linkScales: function() {
			// No need. Single scale only
		},

		addElements: function() {

			this.getDataset().metaData = this.getDataset().metaData || [];

			this.getDataset().metaDataset = this.getDataset().metaDataset || new Chart.elements.Line({
				_chart: this.chart.chart,
				_datasetIndex: this.index,
				_points: this.getDataset().metaData,
				_loop: true
			});

			helpers.each(this.getDataset().data, function(value, index) {
				this.getDataset().metaData[index] = this.getDataset().metaData[index] || new Chart.elements.Point({
					_chart: this.chart.chart,
					_datasetIndex: this.index,
					_index: index,
					_model: {
						x: 0, //xScale.getPixelForValue(null, index, true),
						y: 0 //this.chartArea.bottom,
					}
				});
			}, this);
		},
		addElementAndReset: function(index) {
			this.getDataset().metaData = this.getDataset().metaData || [];
			var point = new Chart.elements.Point({
				_chart: this.chart.chart,
				_datasetIndex: this.index,
				_index: index
			});

			// Reset the point
			this.updateElement(point, index, true);

			// Add to the points array
			this.getDataset().metaData.splice(index, 0, point);

			// Make sure bezier control points are updated
			this.updateBezierControlPoints();
		},

		update: function update(reset) {

			var line = this.getDataset().metaDataset;
			var points = this.getDataset().metaData;

			var scale = this.chart.scale;
			var scaleBase;

			if (scale.min < 0 && scale.max < 0) {
				scaleBase = scale.getPointPositionForValue(0, scale.max);
			} else if (scale.min > 0 && scale.max > 0) {
				scaleBase = scale.getPointPositionForValue(0, scale.min);
			} else {
				scaleBase = scale.getPointPositionForValue(0, 0);
			}

			helpers.extend(this.getDataset().metaDataset, {
				// Utility
				_datasetIndex: this.index,
				// Data
				_children: this.getDataset().metaData,
				// Model
				_model: {
					// Appearance
					tension: line.custom && line.custom.tension ? line.custom.tension : helpers.getValueOrDefault(this.getDataset().tension, this.chart.options.elements.line.tension),
					backgroundColor: line.custom && line.custom.backgroundColor ? line.custom.backgroundColor : (this.getDataset().backgroundColor || this.chart.options.elements.line.backgroundColor),
					borderWidth: line.custom && line.custom.borderWidth ? line.custom.borderWidth : (this.getDataset().borderWidth || this.chart.options.elements.line.borderWidth),
					borderColor: line.custom && line.custom.borderColor ? line.custom.borderColor : (this.getDataset().borderColor || this.chart.options.elements.line.borderColor),
					fill: line.custom && line.custom.fill ? line.custom.fill : (this.getDataset().fill !== undefined ? this.getDataset().fill : this.chart.options.elements.line.fill),
					borderCapStyle: line.custom && line.custom.borderCapStyle ? line.custom.borderCapStyle : (this.getDataset().borderCapStyle || this.chart.options.elements.line.borderCapStyle),
					borderDash: line.custom && line.custom.borderDash ? line.custom.borderDash : (this.getDataset().borderDash || this.chart.options.elements.line.borderDash),
					borderDashOffset: line.custom && line.custom.borderDashOffset ? line.custom.borderDashOffset : (this.getDataset().borderDashOffset || this.chart.options.elements.line.borderDashOffset),
					borderJoinStyle: line.custom && line.custom.borderJoinStyle ? line.custom.borderJoinStyle : (this.getDataset().borderJoinStyle || this.chart.options.elements.line.borderJoinStyle),

					// Scale
					scaleTop: scale.top,
					scaleBottom: scale.bottom,
					scaleZero: scaleBase
				}
			});

			this.getDataset().metaDataset.pivot();

			// Update Points
			helpers.each(points, function(point, index) {
				this.updateElement(point, index, reset);
			}, this);


			// Update bezier control points
			this.updateBezierControlPoints();
		},
		updateElement: function(point, index, reset) {
			var pointPosition = this.chart.scale.getPointPositionForValue(index, this.getDataset().data[index]);

			helpers.extend(point, {
				// Utility
				_datasetIndex: this.index,
				_index: index,
				_scale: this.chart.scale,

				// Desired view properties
				_model: {
					x: reset ? this.chart.scale.xCenter : pointPosition.x, // value not used in dataset scale, but we want a consistent API between scales
					y: reset ? this.chart.scale.yCenter : pointPosition.y,

					// Appearance
					tension: point.custom && point.custom.tension ? point.custom.tension : helpers.getValueOrDefault(this.getDataset().tension, this.chart.options.elements.line.tension),
					radius: point.custom && point.custom.radius ? point.custom.radius : helpers.getValueAtIndexOrDefault(this.getDataset().pointRadius, index, this.chart.options.elements.point.radius),
					backgroundColor: point.custom && point.custom.backgroundColor ? point.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().pointBackgroundColor, index, this.chart.options.elements.point.backgroundColor),
					borderColor: point.custom && point.custom.borderColor ? point.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().pointBorderColor, index, this.chart.options.elements.point.borderColor),
					borderWidth: point.custom && point.custom.borderWidth ? point.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().pointBorderWidth, index, this.chart.options.elements.point.borderWidth),
					pointStyle: point.custom && point.custom.pointStyle ? point.custom.pointStyle : helpers.getValueAtIndexOrDefault(this.getDataset().pointStyle, index, this.chart.options.elements.point.pointStyle),

					// Tooltip
					hitRadius: point.custom && point.custom.hitRadius ? point.custom.hitRadius : helpers.getValueAtIndexOrDefault(this.getDataset().hitRadius, index, this.chart.options.elements.point.hitRadius)
				}
			});

			point._model.skip = point.custom && point.custom.skip ? point.custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
		},
		updateBezierControlPoints: function() {
			helpers.each(this.getDataset().metaData, function(point, index) {
				var controlPoints = helpers.splineCurve(
					helpers.previousItem(this.getDataset().metaData, index, true)._model,
					point._model,
					helpers.nextItem(this.getDataset().metaData, index, true)._model,
					point._model.tension
				);

				// Prevent the bezier going outside of the bounds of the graph
				point._model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, this.chart.chartArea.right), this.chart.chartArea.left);
				point._model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, this.chart.chartArea.bottom), this.chart.chartArea.top);

				point._model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, this.chart.chartArea.right), this.chart.chartArea.left);
				point._model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, this.chart.chartArea.bottom), this.chart.chartArea.top);

				// Now pivot the point for animation
				point.pivot();
			}, this);
		},

		draw: function(ease) {
			var easingDecimal = ease || 1;

			// Transition Point Locations
			helpers.each(this.getDataset().metaData, function(point, index) {
				point.transition(easingDecimal);
			});

			// Transition and Draw the line
			this.getDataset().metaDataset.transition(easingDecimal).draw();

			// Draw the points
			helpers.each(this.getDataset().metaData, function(point) {
				point.draw();
			});
		},

		setHoverStyle: function(point) {
			// Point
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var index = point._index;

			point._model.radius = point.custom && point.custom.hoverRadius ? point.custom.hoverRadius : helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
			point._model.backgroundColor = point.custom && point.custom.hoverBackgroundColor ? point.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.color(point._model.backgroundColor).saturate(0.5).darken(0.1).rgbString());
			point._model.borderColor = point.custom && point.custom.hoverBorderColor ? point.custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.color(point._model.borderColor).saturate(0.5).darken(0.1).rgbString());
			point._model.borderWidth = point.custom && point.custom.hoverBorderWidth ? point.custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, point._model.borderWidth);
		},

		removeHoverStyle: function(point) {
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var index = point._index;

			point._model.radius = point.custom && point.custom.radius ? point.custom.radius : helpers.getValueAtIndexOrDefault(this.getDataset().radius, index, this.chart.options.elements.point.radius);
			point._model.backgroundColor = point.custom && point.custom.backgroundColor ? point.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().pointBackgroundColor, index, this.chart.options.elements.point.backgroundColor);
			point._model.borderColor = point.custom && point.custom.borderColor ? point.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().pointBorderColor, index, this.chart.options.elements.point.borderColor);
			point._model.borderWidth = point.custom && point.custom.borderWidth ? point.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().pointBorderWidth, index, this.chart.options.elements.point.borderWidth);
		}
	});
};
},{}],21:[function(require,module,exports){
/*global window: false */
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.animation = {
		duration: 1000,
		easing: "easeOutQuart",
		onProgress: helpers.noop,
		onComplete: helpers.noop
	};

	Chart.Animation = Chart.Element.extend({
		currentStep: null, // the current animation step
		numSteps: 60, // default number of steps
		easing: "", // the easing to use for this animation
		render: null, // render function used by the animation service

		onAnimationProgress: null, // user specified callback to fire on each step of the animation
		onAnimationComplete: null // user specified callback to fire when the animation finishes
	});

	Chart.animationService = {
		frameDuration: 17,
		animations: [],
		dropFrames: 0,
		request: null,
		addAnimation: function(chartInstance, animationObject, duration, lazy) {

			if (!lazy) {
				chartInstance.animating = true;
			}

			for (var index = 0; index < this.animations.length; ++index) {
				if (this.animations[index].chartInstance === chartInstance) {
					// replacing an in progress animation
					this.animations[index].animationObject = animationObject;
					return;
				}
			}

			this.animations.push({
				chartInstance: chartInstance,
				animationObject: animationObject
			});

			// If there are no animations queued, manually kickstart a digest, for lack of a better word
			if (this.animations.length === 1) {
				this.requestAnimationFrame();
			}
		},
		// Cancel the animation for a given chart instance
		cancelAnimation: function(chartInstance) {
			var index = helpers.findIndex(this.animations, function(animationWrapper) {
				return animationWrapper.chartInstance === chartInstance;
			});

			if (index !== -1) {
				this.animations.splice(index, 1);
				chartInstance.animating = false;
			}
		},
		requestAnimationFrame: function() {
			var me = this;
			if (me.request === null) {
				// Skip animation frame requests until the active one is executed.
				// This can happen when processing mouse events, e.g. 'mousemove'
				// and 'mouseout' events will trigger multiple renders.
				me.request = helpers.requestAnimFrame.call(window, function() {
					me.request = null;
					me.startDigest();
				});
			}
		},
		startDigest: function() {

			var startTime = Date.now();
			var framesToDrop = 0;

			if (this.dropFrames > 1) {
				framesToDrop = Math.floor(this.dropFrames);
				this.dropFrames = this.dropFrames % 1;
			}

			var i = 0;
			while (i < this.animations.length) {
				if (this.animations[i].animationObject.currentStep === null) {
					this.animations[i].animationObject.currentStep = 0;
				}

				this.animations[i].animationObject.currentStep += 1 + framesToDrop;

				if (this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps) {
					this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps;
				}

				this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject);
				if (this.animations[i].animationObject.onAnimationProgress && this.animations[i].animationObject.onAnimationProgress.call) {
					this.animations[i].animationObject.onAnimationProgress.call(this.animations[i].chartInstance, this.animations[i]);
				}

				if (this.animations[i].animationObject.currentStep === this.animations[i].animationObject.numSteps) {
					if (this.animations[i].animationObject.onAnimationComplete && this.animations[i].animationObject.onAnimationComplete.call) {
						this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance, this.animations[i]);
					}

					// executed the last frame. Remove the animation.
					this.animations[i].chartInstance.animating = false;

					this.animations.splice(i, 1);
				} else {
					++i;
				}
			}

			var endTime = Date.now();
			var dropFrames = (endTime - startTime) / this.frameDuration;

			this.dropFrames += dropFrames;

			// Do we have more stuff to animate?
			if (this.animations.length > 0) {
				this.requestAnimationFrame();
			}
		}
	};
};
},{}],22:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	//Create a dictionary of chart types, to allow for extension of existing types
	Chart.types = {};

	//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
	//Destroy method on the chart will remove the instance of the chart from this reference.
	Chart.instances = {};

	// Controllers available for dataset visualization eg. bar, line, slice, etc.
	Chart.controllers = {};

	// The main controller of a chart
	Chart.Controller = function(instance) {

		this.chart = instance;
		this.config = instance.config;
		this.options = this.config.options = helpers.configMerge(Chart.defaults.global, Chart.defaults[this.config.type], this.config.options || {});
		this.id = helpers.uid();

		Object.defineProperty(this, 'data', {
			get: function() {
				return this.config.data;
			}
		});

		//Add the chart instance to the global namespace
		Chart.instances[this.id] = this;

		if (this.options.responsive) {
			// Silent resize before chart draws
			this.resize(true);
		}

		this.initialize();

		return this;
	};

	helpers.extend(Chart.Controller.prototype, {

		initialize: function initialize() {

			// TODO
			// If BeforeInit(this) doesn't return false, proceed

			this.bindEvents();

			// Make sure controllers are built first so that each dataset is bound to an axis before the scales
			// are built
			this.ensureScalesHaveIDs();
			this.buildOrUpdateControllers();
			this.buildScales();
			this.buildSurroundingItems();
			this.updateLayout();
			this.resetElements();
			this.initToolTip();
			this.update();

			// TODO
			// If AfterInit(this) doesn't return false, proceed

			return this;
		},

		clear: function clear() {
			helpers.clear(this.chart);
			return this;
		},

		stop: function stop() {
			// Stops any current animation loop occuring
			Chart.animationService.cancelAnimation(this);
			return this;
		},

		resize: function resize(silent) {
			var canvas = this.chart.canvas;
			var newWidth = helpers.getMaximumWidth(this.chart.canvas);
			var newHeight = (this.options.maintainAspectRatio && isNaN(this.chart.aspectRatio) === false && isFinite(this.chart.aspectRatio) && this.chart.aspectRatio !== 0) ? newWidth / this.chart.aspectRatio : helpers.getMaximumHeight(this.chart.canvas);

			var sizeChanged = this.chart.width !== newWidth || this.chart.height !== newHeight;

			if (!sizeChanged)
				return this;

			canvas.width = this.chart.width = newWidth;
			canvas.height = this.chart.height = newHeight;

			helpers.retinaScale(this.chart);

			if (!silent) {
				this.stop();
				this.update(this.options.responsiveAnimationDuration);
			}

			return this;
		},
		ensureScalesHaveIDs: function ensureScalesHaveIDs() {
			var defaultXAxisID = 'x-axis-';
			var defaultYAxisID = 'y-axis-';

			if (this.options.scales) {
				if (this.options.scales.xAxes && this.options.scales.xAxes.length) {
					helpers.each(this.options.scales.xAxes, function(xAxisOptions, index) {
						xAxisOptions.id = xAxisOptions.id || (defaultXAxisID + index);
					});
				}

				if (this.options.scales.yAxes && this.options.scales.yAxes.length) {
					// Build the y axes
					helpers.each(this.options.scales.yAxes, function(yAxisOptions, index) {
						yAxisOptions.id = yAxisOptions.id || (defaultYAxisID + index);
					});
				}
			}
		},
		buildScales: function buildScales() {
			// Map of scale ID to scale object so we can lookup later
			this.scales = {};

			// Build the x axes
			if (this.options.scales) {
				if (this.options.scales.xAxes && this.options.scales.xAxes.length) {
					helpers.each(this.options.scales.xAxes, function(xAxisOptions, index) {
						var xType = helpers.getValueOrDefault(xAxisOptions.type, 'category');
						var ScaleClass = Chart.scaleService.getScaleConstructor(xType);
						if (ScaleClass) {
							var scale = new ScaleClass({
								ctx: this.chart.ctx,
								options: xAxisOptions,
								chart: this,
								id: xAxisOptions.id
							});

							this.scales[scale.id] = scale;
						}
					}, this);
				}

				if (this.options.scales.yAxes && this.options.scales.yAxes.length) {
					// Build the y axes
					helpers.each(this.options.scales.yAxes, function(yAxisOptions, index) {
						var yType = helpers.getValueOrDefault(yAxisOptions.type, 'linear');
						var ScaleClass = Chart.scaleService.getScaleConstructor(yType);
						if (ScaleClass) {
							var scale = new ScaleClass({
								ctx: this.chart.ctx,
								options: yAxisOptions,
								chart: this,
								id: yAxisOptions.id
							});

							this.scales[scale.id] = scale;
						}
					}, this);
				}
			}
			if (this.options.scale) {
				// Build radial axes
				var ScaleClass = Chart.scaleService.getScaleConstructor(this.options.scale.type);
				if (ScaleClass) {
					var scale = new ScaleClass({
						ctx: this.chart.ctx,
						options: this.options.scale,
						chart: this
					});

					this.scale = scale;

					this.scales.radialScale = scale;
				}
			}

			Chart.scaleService.addScalesToLayout(this);
		},

		buildSurroundingItems: function() {
			if (this.options.title) {
				this.titleBlock = new Chart.Title({
					ctx: this.chart.ctx,
					options: this.options.title,
					chart: this
				});

				Chart.layoutService.addBox(this, this.titleBlock);
			}

			if (this.options.legend) {
				this.legend = new Chart.Legend({
					ctx: this.chart.ctx,
					options: this.options.legend,
					chart: this
				});

				Chart.layoutService.addBox(this, this.legend);
			}
		},

		updateLayout: function() {
			Chart.layoutService.update(this, this.chart.width, this.chart.height);
		},

		buildOrUpdateControllers: function buildOrUpdateControllers() {
			var types = [];
			var newControllers = [];

			helpers.each(this.data.datasets, function(dataset, datasetIndex) {
				if (!dataset.type) {
					dataset.type = this.config.type;
				}

				var type = dataset.type;
				types.push(type);

				if (dataset.controller) {
					dataset.controller.updateIndex(datasetIndex);
				} else {
					dataset.controller = new Chart.controllers[type](this, datasetIndex);
					newControllers.push(dataset.controller);
				}
			}, this);

			if (types.length > 1) {
				for (var i = 1; i < types.length; i++) {
					if (types[i] !== types[i - 1]) {
						this.isCombo = true;
						break;
					}
				}
			}

			return newControllers;
		},

		resetElements: function resetElements() {
			helpers.each(this.data.datasets, function(dataset, datasetIndex) {
				dataset.controller.reset();
			});
		},

		update: function update(animationDuration, lazy) {
			// In case the entire data object changed
			this.tooltip._data = this.data;

			// Make sure dataset controllers are updated and new controllers are reset
			var newControllers = this.buildOrUpdateControllers();

			Chart.layoutService.update(this, this.chart.width, this.chart.height);

			// Can only reset the new controllers after the scales have been updated
			helpers.each(newControllers, function(controller) {
				controller.reset();
			});

			// Make sure all dataset controllers have correct meta data counts
			helpers.each(this.data.datasets, function(dataset, datasetIndex) {
				dataset.controller.buildOrUpdateElements();
			});

			// This will loop through any data and do the appropriate element update for the type
			helpers.each(this.data.datasets, function(dataset, datasetIndex) {
				dataset.controller.update();
			});
			this.render(animationDuration, lazy);
		},

		render: function render(duration, lazy) {

			if (this.options.animation && ((typeof duration !== 'undefined' && duration !== 0) || (typeof duration === 'undefined' && this.options.animation.duration !== 0))) {
				var animation = new Chart.Animation();
				animation.numSteps = (duration || this.options.animation.duration) / 16.66; //60 fps
				animation.easing = this.options.animation.easing;

				// render function
				animation.render = function(chartInstance, animationObject) {
					var easingFunction = helpers.easingEffects[animationObject.easing];
					var stepDecimal = animationObject.currentStep / animationObject.numSteps;
					var easeDecimal = easingFunction(stepDecimal);

					chartInstance.draw(easeDecimal, stepDecimal, animationObject.currentStep);
				};

				// user events
				animation.onAnimationProgress = this.options.animation.onProgress;
				animation.onAnimationComplete = this.options.animation.onComplete;

				Chart.animationService.addAnimation(this, animation, duration, lazy);
			} else {
				this.draw();
				if (this.options.animation && this.options.animation.onComplete && this.options.animation.onComplete.call) {
					this.options.animation.onComplete.call(this);
				}
			}
			return this;
		},

		draw: function(ease) {
			var easingDecimal = ease || 1;
			this.clear();

			// Draw all the scales
			helpers.each(this.boxes, function(box) {
				box.draw(this.chartArea);
			}, this);
			if (this.scale) {
				this.scale.draw();
			}

			// Clip out the chart area so that anything outside does not draw. This is necessary for zoom and pan to function
			this.chart.ctx.save();
			this.chart.ctx.beginPath();
			this.chart.ctx.rect(this.chartArea.left, this.chartArea.top, this.chartArea.right - this.chartArea.left, this.chartArea.bottom - this.chartArea.top);
			this.chart.ctx.clip();

			// Draw each dataset via its respective controller (reversed to support proper line stacking)
			helpers.each(this.data.datasets, function(dataset, datasetIndex) {
				if (helpers.isDatasetVisible(dataset)) {
					dataset.controller.draw(ease);
				}
			}, null, true);

			// Restore from the clipping operation
			this.chart.ctx.restore();

			// Finally draw the tooltip
			this.tooltip.transition(easingDecimal).draw();
		},

		// Get the single element that was clicked on
		// @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
		getElementAtEvent: function(e) {

			var eventPosition = helpers.getRelativePosition(e, this.chart);
			var elementsArray = [];

			helpers.each(this.data.datasets, function(dataset, datasetIndex) {
				if (helpers.isDatasetVisible(dataset)) {
					helpers.each(dataset.metaData, function(element, index) {
						if (element.inRange(eventPosition.x, eventPosition.y)) {
							elementsArray.push(element);
							return elementsArray;
						}
					});
				}
			});

			return elementsArray;
		},

		getElementsAtEvent: function(e) {
			var eventPosition = helpers.getRelativePosition(e, this.chart);
			var elementsArray = [];

			var found = (function() {
				if (this.data.datasets) {
					for (var i = 0; i < this.data.datasets.length; i++) {
						if (helpers.isDatasetVisible(this.data.datasets[i])) {
							for (var j = 0; j < this.data.datasets[i].metaData.length; j++) {
								if (this.data.datasets[i].metaData[j].inRange(eventPosition.x, eventPosition.y)) {
									return this.data.datasets[i].metaData[j];
								}
							}
						}
					}
				}
			}).call(this);

			if (!found) {
				return elementsArray;
			}

			helpers.each(this.data.datasets, function(dataset, dsIndex) {
				if (helpers.isDatasetVisible(dataset)) {
					elementsArray.push(dataset.metaData[found._index]);
				}
			});

			return elementsArray;
		},

		getDatasetAtEvent: function(e) {
			var elementsArray = this.getElementAtEvent(e);

			if (elementsArray.length > 0) {
				elementsArray = this.data.datasets[elementsArray[0]._datasetIndex].metaData;
			}

			return elementsArray;
		},

		generateLegend: function generateLegend() {
			return this.options.legendCallback(this);
		},

		destroy: function destroy() {
			this.clear();
			helpers.unbindEvents(this, this.events);
			helpers.removeResizeListener(this.chart.canvas.parentNode);

			// Reset canvas height/width attributes
			var canvas = this.chart.canvas;
			canvas.width = this.chart.width;
			canvas.height = this.chart.height;

			// if we scaled the canvas in response to a devicePixelRatio !== 1, we need to undo that transform here
			if (this.chart.originalDevicePixelRatio !== undefined) {
				this.chart.ctx.scale(1 / this.chart.originalDevicePixelRatio, 1 / this.chart.originalDevicePixelRatio);
			}

			// Reset to the old style since it may have been changed by the device pixel ratio changes
			canvas.style.width = this.chart.originalCanvasStyleWidth;
			canvas.style.height = this.chart.originalCanvasStyleHeight;

			delete Chart.instances[this.id];
		},

		toBase64Image: function toBase64Image() {
			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
		},

		initToolTip: function initToolTip() {
			this.tooltip = new Chart.Tooltip({
				_chart: this.chart,
				_chartInstance: this,
				_data: this.data,
				_options: this.options
			}, this);
		},

		bindEvents: function bindEvents() {
			helpers.bindEvents(this, this.options.events, function(evt) {
				this.eventHandler(evt);
			});
		},
		eventHandler: function eventHandler(e) {
			this.lastActive = this.lastActive || [];
			this.lastTooltipActive = this.lastTooltipActive || [];

			// Find Active Elements for hover and tooltips
			if (e.type === 'mouseout') {
				this.active = [];
				this.tooltipActive = [];
			} else {

				var _this = this;
				var getItemsForMode = function(mode) {
					switch (mode) {
						case 'single':
							return _this.getElementAtEvent(e);
						case 'label':
							return _this.getElementsAtEvent(e);
						case 'dataset':
							return _this.getDatasetAtEvent(e);
						default:
							return e;
					}
				};

				this.active = getItemsForMode(this.options.hover.mode);
				this.tooltipActive = getItemsForMode(this.options.tooltips.mode);
			}

			// On Hover hook
			if (this.options.hover.onHover) {
				this.options.hover.onHover.call(this, this.active);
			}

			if (e.type === 'mouseup' || e.type === 'click') {
				if (this.options.onClick) {
					this.options.onClick.call(this, e, this.active);
				}

				if (this.legend && this.legend.handleEvent) {
					this.legend.handleEvent(e);
				}
			}

			var dataset;
			var index;

			// Remove styling for last active (even if it may still be active)
			if (this.lastActive.length) {
				switch (this.options.hover.mode) {
					case 'single':
						this.data.datasets[this.lastActive[0]._datasetIndex].controller.removeHoverStyle(this.lastActive[0], this.lastActive[0]._datasetIndex, this.lastActive[0]._index);
						break;
					case 'label':
					case 'dataset':
						for (var i = 0; i < this.lastActive.length; i++) {
							if (this.lastActive[i])
								this.data.datasets[this.lastActive[i]._datasetIndex].controller.removeHoverStyle(this.lastActive[i], this.lastActive[i]._datasetIndex, this.lastActive[i]._index);
						}
						break;
					default:
						// Don't change anything
				}
			}

			// Built in hover styling
			if (this.active.length && this.options.hover.mode) {
				switch (this.options.hover.mode) {
					case 'single':
						this.data.datasets[this.active[0]._datasetIndex].controller.setHoverStyle(this.active[0]);
						break;
					case 'label':
					case 'dataset':
						for (var j = 0; j < this.active.length; j++) {
							if (this.active[j])
								this.data.datasets[this.active[j]._datasetIndex].controller.setHoverStyle(this.active[j]);
						}
						break;
					default:
						// Don't change anything
				}
			}


			// Built in Tooltips
			if (this.options.tooltips.enabled || this.options.tooltips.custom) {

				// The usual updates
				this.tooltip.initialize();
				this.tooltip._active = this.tooltipActive;
				this.tooltip.update();
			}

			// Hover animations
			this.tooltip.pivot();

			if (!this.animating) {
				var changed;

				helpers.each(this.active, function(element, index) {
					if (element !== this.lastActive[index]) {
						changed = true;
					}
				}, this);

				helpers.each(this.tooltipActive, function(element, index) {
					if (element !== this.lastTooltipActive[index]) {
						changed = true;
					}
				}, this);

				// If entering, leaving, or changing elements, animate the change via pivot
				if ((this.lastActive.length !== this.active.length) ||
					(this.lastTooltipActive.length !== this.tooltipActive.length) ||
					changed) {

					this.stop();

					if (this.options.tooltips.enabled || this.options.tooltips.custom) {
						this.tooltip.update(true);
					}

					// We only need to render at this point. Updating will cause scales to be recomputed generating flicker & using more
					// memory than necessary.
					this.render(this.options.hover.animationDuration, true);
				}
			}

			// Remember Last Actives
			this.lastActive = this.active;
			this.lastTooltipActive = this.tooltipActive;
			return this;
		}
	});
};

},{}],23:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	// Base class for all dataset controllers (line, bar, etc)
	Chart.DatasetController = function(chart, datasetIndex) {
		this.initialize.call(this, chart, datasetIndex);
	};

	helpers.extend(Chart.DatasetController.prototype, {
		initialize: function(chart, datasetIndex) {
			this.chart = chart;
			this.index = datasetIndex;
			this.linkScales();
			this.addElements();
		},
		updateIndex: function(datasetIndex) {
			this.index = datasetIndex;
		},

		linkScales: function() {
			if (!this.getDataset().xAxisID) {
				this.getDataset().xAxisID = this.chart.options.scales.xAxes[0].id;
			}

			if (!this.getDataset().yAxisID) {
				this.getDataset().yAxisID = this.chart.options.scales.yAxes[0].id;
			}
		},

		getDataset: function() {
			return this.chart.data.datasets[this.index];
		},

		getScaleForId: function(scaleID) {
			return this.chart.scales[scaleID];
		},

		reset: function() {
			this.update(true);
		},

		buildOrUpdateElements: function buildOrUpdateElements() {
			// Handle the number of data points changing
			var numData = this.getDataset().data.length;
			var numMetaData = this.getDataset().metaData.length;

			// Make sure that we handle number of datapoints changing
			if (numData < numMetaData) {
				// Remove excess bars for data points that have been removed
				this.getDataset().metaData.splice(numData, numMetaData - numData);
			} else if (numData > numMetaData) {
				// Add new elements
				for (var index = numMetaData; index < numData; ++index) {
					this.addElementAndReset(index);
				}
			}
		},

		// Controllers should implement the following
		addElements: helpers.noop,
		addElementAndReset: helpers.noop,
		draw: helpers.noop,
		removeHoverStyle: helpers.noop,
		setHoverStyle: helpers.noop,
		update: helpers.noop
	});

	Chart.DatasetController.extend = helpers.inherits;

};
},{}],24:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

  var helpers = Chart.helpers;

  Chart.elements = {};

  Chart.Element = function(configuration) {
    helpers.extend(this, configuration);
    this.initialize.apply(this, arguments);
  };
  helpers.extend(Chart.Element.prototype, {
    initialize: function() {},
    pivot: function() {
      if (!this._view) {
        this._view = helpers.clone(this._model);
      }
      this._start = helpers.clone(this._view);
      return this;
    },
    transition: function(ease) {
      if (!this._view) {
        this._view = helpers.clone(this._model);
      }

      // No animation -> No Transition
      if (ease === 1) {
        this._view = this._model;
        this._start = null;
        return this;
      }

      if (!this._start) {
        this.pivot();
      }

      helpers.each(this._model, function(value, key) {

        if (key[0] === '_' || !this._model.hasOwnProperty(key)) {
          // Only non-underscored properties
        }

        // Init if doesn't exist
        else if (!this._view.hasOwnProperty(key)) {
          if (typeof value === 'number' && !isNaN(this._view[key])) {
            this._view[key] = value * ease;
          } else {
            this._view[key] = value;
          }
        }

        // No unnecessary computations
        else if (value === this._view[key]) {
          // It's the same! Woohoo!
        }

        // Color transitions if possible
        else if (typeof value === 'string') {
          try {
            var color = helpers.color(this._start[key]).mix(helpers.color(this._model[key]), ease);
            this._view[key] = color.rgbString();
          } catch (err) {
            this._view[key] = value;
          }
        }
        // Number transitions
        else if (typeof value === 'number') {
          var startVal = this._start[key] !== undefined && isNaN(this._start[key]) === false ? this._start[key] : 0;
          this._view[key] = ((this._model[key] - startVal) * ease) + startVal;
        }
        // Everything else
        else {
          this._view[key] = value;
        }
      }, this);

      return this;
    },
    tooltipPosition: function() {
      return {
        x: this._model.x,
        y: this._model.y
      };
    },
    hasValue: function() {
      return helpers.isNumber(this._model.x) && helpers.isNumber(this._model.y);
    }
  });

  Chart.Element.extend = helpers.inherits;

};

},{}],25:[function(require,module,exports){
/*global window: false */
/*global document: false */
"use strict";

var color = require('chartjs-color');

module.exports = function(Chart) {

	//Global Chart helpers object for utility methods and classes
	var helpers = Chart.helpers = {};

	//-- Basic js utility methods
	helpers.each = function(loopable, callback, self, reverse) {
		// Check to see if null or undefined firstly.
		var i, len;
		if (helpers.isArray(loopable)) {
			len = loopable.length;
			if (reverse) {
				for (i = len - 1; i >= 0; i--) {
					callback.call(self, loopable[i], i);
				}
			} else {
				for (i = 0; i < len; i++) {
					callback.call(self, loopable[i], i);
				}
			}
		} else if (typeof loopable === 'object') {
			var keys = Object.keys(loopable);
			len = keys.length;
			for (i = 0; i < len; i++) {
				callback.call(self, loopable[keys[i]], keys[i]);
			}
		}
	};
	helpers.clone = function(obj) {
		var objClone = {};
		helpers.each(obj, function(value, key) {
			if (obj.hasOwnProperty(key)) {
				if (helpers.isArray(value)) {
					objClone[key] = value.slice(0);
				} else if (typeof value === 'object' && value !== null) {
					objClone[key] = helpers.clone(value);
				} else {
					objClone[key] = value;
				}
			}
		});
		return objClone;
	};
	helpers.extend = function(base) {
		var len = arguments.length;
		var additionalArgs = [];
		for (var i = 1; i < len; i++) {
			additionalArgs.push(arguments[i]);
		}
		helpers.each(additionalArgs, function(extensionObject) {
			helpers.each(extensionObject, function(value, key) {
				if (extensionObject.hasOwnProperty(key)) {
					base[key] = value;
				}
			});
		});
		return base;
	};
	// Need a special merge function to chart configs since they are now grouped
	helpers.configMerge = function(_base) {
		var base = helpers.clone(_base);
		helpers.each(Array.prototype.slice.call(arguments, 1), function(extension) {
			helpers.each(extension, function(value, key) {
				if (extension.hasOwnProperty(key)) {
					if (key === 'scales') {
						// Scale config merging is complex. Add out own function here for that
						base[key] = helpers.scaleMerge(base.hasOwnProperty(key) ? base[key] : {}, value);

					} else if (key === 'scale') {
						// Used in polar area & radar charts since there is only one scale
						base[key] = helpers.configMerge(base.hasOwnProperty(key) ? base[key] : {}, Chart.scaleService.getScaleDefaults(value.type), value);
					} else if (base.hasOwnProperty(key) && helpers.isArray(base[key]) && helpers.isArray(value)) {
						// In this case we have an array of objects replacing another array. Rather than doing a strict replace,
						// merge. This allows easy scale option merging
						var baseArray = base[key];

						helpers.each(value, function(valueObj, index) {

							if (index < baseArray.length) {
								if (typeof baseArray[index] === 'object' && baseArray[index] !== null && typeof valueObj === 'object' && valueObj !== null) {
									// Two objects are coming together. Do a merge of them.
									baseArray[index] = helpers.configMerge(baseArray[index], valueObj);
								} else {
									// Just overwrite in this case since there is nothing to merge
									baseArray[index] = valueObj;
								}
							} else {
								baseArray.push(valueObj); // nothing to merge
							}
						});

					} else if (base.hasOwnProperty(key) && typeof base[key] === "object" && base[key] !== null && typeof value === "object") {
						// If we are overwriting an object with an object, do a merge of the properties.
						base[key] = helpers.configMerge(base[key], value);

					} else {
						// can just overwrite the value in this case
						base[key] = value;
					}
				}
			});
		});

		return base;
	};
	helpers.extendDeep = function(_base) {
		return _extendDeep.apply(this, arguments);

		function _extendDeep(dst) {
			helpers.each(arguments, function(obj) {
				if (obj !== dst) {
					helpers.each(obj, function(value, key) {
						if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
							_extendDeep(dst[key], value);
						} else {
							dst[key] = value;
						}
					});
				}
			});
			return dst;
		}
	};
	helpers.scaleMerge = function(_base, extension) {
		var base = helpers.clone(_base);

		helpers.each(extension, function(value, key) {
			if (extension.hasOwnProperty(key)) {
				if (key === 'xAxes' || key === 'yAxes') {
					// These properties are arrays of items
					if (base.hasOwnProperty(key)) {
						helpers.each(value, function(valueObj, index) {
							var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
							var axisDefaults = Chart.scaleService.getScaleDefaults(axisType);
							if (index >= base[key].length || !base[key][index].type) {
								base[key].push(helpers.configMerge(axisDefaults, valueObj));
							} else if (valueObj.type && valueObj.type !== base[key][index].type) {
								// Type changed. Bring in the new defaults before we bring in valueObj so that valueObj can override the correct scale defaults
								base[key][index] = helpers.configMerge(base[key][index], axisDefaults, valueObj);
							} else {
								// Type is the same
								base[key][index] = helpers.configMerge(base[key][index], valueObj);
							}
						});
					} else {
						base[key] = [];
						helpers.each(value, function(valueObj) {
							var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
							base[key].push(helpers.configMerge(Chart.scaleService.getScaleDefaults(axisType), valueObj));
						});
					}
				} else if (base.hasOwnProperty(key) && typeof base[key] === "object" && base[key] !== null && typeof value === "object") {
					// If we are overwriting an object with an object, do a merge of the properties.
					base[key] = helpers.configMerge(base[key], value);

				} else {
					// can just overwrite the value in this case
					base[key] = value;
				}
			}
		});

		return base;
	};
	helpers.getValueAtIndexOrDefault = function(value, index, defaultValue) {
		if (value === undefined || value === null) {
			return defaultValue;
		}

		if (helpers.isArray(value)) {
			return index < value.length ? value[index] : defaultValue;
		}

		return value;
	};
	helpers.getValueOrDefault = function(value, defaultValue) {
		return value === undefined ? defaultValue : value;
	};
	helpers.indexOf = function(arrayToSearch, item) {
		if (Array.prototype.indexOf) {
			return arrayToSearch.indexOf(item);
		} else {
			for (var i = 0; i < arrayToSearch.length; i++) {
				if (arrayToSearch[i] === item)
					return i;
			}
			return -1;
		}
	};
	helpers.where = function(collection, filterCallback) {
		var filtered = [];

		helpers.each(collection, function(item) {
			if (filterCallback(item)) {
				filtered.push(item);
			}
		});

		return filtered;
	};
	helpers.findIndex = function(arrayToSearch, callback, thisArg) {
		var index = -1;
		if (Array.prototype.findIndex) {
			index = arrayToSearch.findIndex(callback, thisArg);
		} else {
			for (var i = 0; i < arrayToSearch.length; ++i) {
				thisArg = thisArg !== undefined ? thisArg : arrayToSearch;

				if (callback.call(thisArg, arrayToSearch[i], i, arrayToSearch)) {
					index = i;
					break;
				}
			}
		}

		return index;
	};
	helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to start of the array
		if (startIndex === undefined || startIndex === null) {
			startIndex = -1;
		}
		for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to end of the array
		if (startIndex === undefined || startIndex === null) {
			startIndex = arrayToSearch.length;
		}
		for (var i = startIndex - 1; i >= 0; i--) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers.inherits = function(extensions) {
		//Basic javascript inheritance based on the model created in Backbone.js
		var parent = this;
		var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function() {
			return parent.apply(this, arguments);
		};

		var Surrogate = function() {
			this.constructor = ChartElement;
		};
		Surrogate.prototype = parent.prototype;
		ChartElement.prototype = new Surrogate();

		ChartElement.extend = helpers.inherits;

		if (extensions) {
			helpers.extend(ChartElement.prototype, extensions);
		}

		ChartElement.__super__ = parent.prototype;

		return ChartElement;
	};
	helpers.noop = function() {};
	helpers.uid = (function() {
		var id = 0;
		return function() {
			return "chart-" + id++;
		};
	})();
	helpers.warn = function(str) {
		//Method for warning of errors
		if (console && typeof console.warn === "function") {
			console.warn(str);
		}
	};
	//-- Math methods
	helpers.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	helpers.almostEquals = function(x, y, epsilon) {
		return Math.abs(x - y) < epsilon;
	};
	helpers.max = function(array) {
		return array.reduce(function(max, value) {
			if (!isNaN(value)) {
				return Math.max(max, value);
			} else {
				return max;
			}
		}, Number.NEGATIVE_INFINITY);
	};
	helpers.min = function(array) {
		return array.reduce(function(min, value) {
			if (!isNaN(value)) {
				return Math.min(min, value);
			} else {
				return min;
			}
		}, Number.POSITIVE_INFINITY);
	};
	helpers.sign = function(x) {
		if (Math.sign) {
			return Math.sign(x);
		} else {
			x = +x; // convert to a number
			if (x === 0 || isNaN(x)) {
				return x;
			}
			return x > 0 ? 1 : -1;
		}
	};
	helpers.log10 = function(x) {
		if (Math.log10) {
			return Math.log10(x);
		} else {
			return Math.log(x) / Math.LN10;
		}
	};
	helpers.toRadians = function(degrees) {
		return degrees * (Math.PI / 180);
	};
	helpers.toDegrees = function(radians) {
		return radians * (180 / Math.PI);
	};
	// Gets the angle from vertical upright to the point about a centre.
	helpers.getAngleFromPoint = function(centrePoint, anglePoint) {
		var distanceFromXCenter = anglePoint.x - centrePoint.x,
			distanceFromYCenter = anglePoint.y - centrePoint.y,
			radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);

		var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

		if (angle < (-0.5 * Math.PI)) {
			angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
		}

		return {
			angle: angle,
			distance: radialDistanceFromCenter
		};
	};
	helpers.aliasPixel = function(pixelWidth) {
		return (pixelWidth % 2 === 0) ? 0 : 0.5;
	};
	helpers.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
		//Props to Rob Spencer at scaled innovation for his post on splining between points
		//http://scaledinnovation.com/analytics/splines/aboutSplines.html

		// This function must also respect "skipped" points

		var previous = firstPoint.skip ? middlePoint : firstPoint,
			current = middlePoint,
			next = afterPoint.skip ? middlePoint : afterPoint;

		var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
		var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));

		var s01 = d01 / (d01 + d12);
		var s12 = d12 / (d01 + d12);

		// If all points are the same, s01 & s02 will be inf
		s01 = isNaN(s01) ? 0 : s01;
		s12 = isNaN(s12) ? 0 : s12;

		var fa = t * s01; // scaling factor for triangle Ta
		var fb = t * s12;

		return {
			previous: {
				x: current.x - fa * (next.x - previous.x),
				y: current.y - fa * (next.y - previous.y)
			},
			next: {
				x: current.x + fb * (next.x - previous.x),
				y: current.y + fb * (next.y - previous.y)
			}
		};
	};
	helpers.nextItem = function(collection, index, loop) {
		if (loop) {
			return index >= collection.length - 1 ? collection[0] : collection[index + 1];
		}

		return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
	};
	helpers.previousItem = function(collection, index, loop) {
		if (loop) {
			return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
		}
		return index <= 0 ? collection[0] : collection[index - 1];
	};
	// Implementation of the nice number algorithm used in determining where axis labels will go
	helpers.niceNum = function(range, round) {
		var exponent = Math.floor(helpers.log10(range));
		var fraction = range / Math.pow(10, exponent);
		var niceFraction;

		if (round) {
			if (fraction < 1.5) {
				niceFraction = 1;
			} else if (fraction < 3) {
				niceFraction = 2;
			} else if (fraction < 7) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
		} else {
			if (fraction <= 1.0) {
				niceFraction = 1;
			} else if (fraction <= 2) {
				niceFraction = 2;
			} else if (fraction <= 5) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
		}

		return niceFraction * Math.pow(10, exponent);
	};
	//Easing functions adapted from Robert Penner's easing equations
	//http://www.robertpenner.com/easing/
	var easingEffects = helpers.easingEffects = {
		linear: function(t) {
			return t;
		},
		easeInQuad: function(t) {
			return t * t;
		},
		easeOutQuad: function(t) {
			return -1 * t * (t - 2);
		},
		easeInOutQuad: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t;
			}
			return -1 / 2 * ((--t) * (t - 2) - 1);
		},
		easeInCubic: function(t) {
			return t * t * t;
		},
		easeOutCubic: function(t) {
			return 1 * ((t = t / 1 - 1) * t * t + 1);
		},
		easeInOutCubic: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t * t;
			}
			return 1 / 2 * ((t -= 2) * t * t + 2);
		},
		easeInQuart: function(t) {
			return t * t * t * t;
		},
		easeOutQuart: function(t) {
			return -1 * ((t = t / 1 - 1) * t * t * t - 1);
		},
		easeInOutQuart: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t * t * t;
			}
			return -1 / 2 * ((t -= 2) * t * t * t - 2);
		},
		easeInQuint: function(t) {
			return 1 * (t /= 1) * t * t * t * t;
		},
		easeOutQuint: function(t) {
			return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
		},
		easeInOutQuint: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t * t * t * t;
			}
			return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
		},
		easeInSine: function(t) {
			return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
		},
		easeOutSine: function(t) {
			return 1 * Math.sin(t / 1 * (Math.PI / 2));
		},
		easeInOutSine: function(t) {
			return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
		},
		easeInExpo: function(t) {
			return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
		},
		easeOutExpo: function(t) {
			return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
		},
		easeInOutExpo: function(t) {
			if (t === 0) {
				return 0;
			}
			if (t === 1) {
				return 1;
			}
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * Math.pow(2, 10 * (t - 1));
			}
			return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
		},
		easeInCirc: function(t) {
			if (t >= 1) {
				return t;
			}
			return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
		},
		easeOutCirc: function(t) {
			return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
		},
		easeInOutCirc: function(t) {
			if ((t /= 1 / 2) < 1) {
				return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
			}
			return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
		},
		easeInElastic: function(t) {
			var s = 1.70158;
			var p = 0;
			var a = 1;
			if (t === 0) {
				return 0;
			}
			if ((t /= 1) === 1) {
				return 1;
			}
			if (!p) {
				p = 1 * 0.3;
			}
			if (a < Math.abs(1)) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
		},
		easeOutElastic: function(t) {
			var s = 1.70158;
			var p = 0;
			var a = 1;
			if (t === 0) {
				return 0;
			}
			if ((t /= 1) === 1) {
				return 1;
			}
			if (!p) {
				p = 1 * 0.3;
			}
			if (a < Math.abs(1)) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
		},
		easeInOutElastic: function(t) {
			var s = 1.70158;
			var p = 0;
			var a = 1;
			if (t === 0) {
				return 0;
			}
			if ((t /= 1 / 2) === 2) {
				return 1;
			}
			if (!p) {
				p = 1 * (0.3 * 1.5);
			}
			if (a < Math.abs(1)) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			if (t < 1) {
				return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
			}
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
		},
		easeInBack: function(t) {
			var s = 1.70158;
			return 1 * (t /= 1) * t * ((s + 1) * t - s);
		},
		easeOutBack: function(t) {
			var s = 1.70158;
			return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
		},
		easeInOutBack: function(t) {
			var s = 1.70158;
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
			}
			return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
		},
		easeInBounce: function(t) {
			return 1 - easingEffects.easeOutBounce(1 - t);
		},
		easeOutBounce: function(t) {
			if ((t /= 1) < (1 / 2.75)) {
				return 1 * (7.5625 * t * t);
			} else if (t < (2 / 2.75)) {
				return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
			} else if (t < (2.5 / 2.75)) {
				return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
			} else {
				return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
			}
		},
		easeInOutBounce: function(t) {
			if (t < 1 / 2) {
				return easingEffects.easeInBounce(t * 2) * 0.5;
			}
			return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
		}
	};
	//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	helpers.requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	})();
	helpers.cancelAnimFrame = (function() {
		return window.cancelAnimationFrame ||
			window.webkitCancelAnimationFrame ||
			window.mozCancelAnimationFrame ||
			window.oCancelAnimationFrame ||
			window.msCancelAnimationFrame ||
			function(callback) {
				return window.clearTimeout(callback, 1000 / 60);
			};
	})();
	//-- DOM methods
	helpers.getRelativePosition = function(evt, chart) {
		var mouseX, mouseY;
		var e = evt.originalEvent || evt,
			canvas = evt.currentTarget || evt.srcElement,
			boundingRect = canvas.getBoundingClientRect();

		if (e.touches && e.touches.length > 0) {
			mouseX = e.touches[0].clientX;
			mouseY = e.touches[0].clientY;

		} else {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}

		// Scale mouse coordinates into canvas coordinates
		// by following the pattern laid out by 'jerryj' in the comments of
		// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
		var paddingLeft = parseFloat(helpers.getStyle(canvas, 'padding-left'));
		var paddingTop = parseFloat(helpers.getStyle(canvas, 'padding-top'));
		var paddingRight = parseFloat(helpers.getStyle(canvas, 'padding-right'));
		var paddingBottom = parseFloat(helpers.getStyle(canvas, 'padding-bottom'));
		var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
		var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

		// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
		// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
		mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
		mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

		return {
			x: mouseX,
			y: mouseY
		};

	};
	helpers.addEvent = function(node, eventType, method) {
		if (node.addEventListener) {
			node.addEventListener(eventType, method);
		} else if (node.attachEvent) {
			node.attachEvent("on" + eventType, method);
		} else {
			node["on" + eventType] = method;
		}
	};
	helpers.removeEvent = function(node, eventType, handler) {
		if (node.removeEventListener) {
			node.removeEventListener(eventType, handler, false);
		} else if (node.detachEvent) {
			node.detachEvent("on" + eventType, handler);
		} else {
			node["on" + eventType] = helpers.noop;
		}
	};
	helpers.bindEvents = function(chartInstance, arrayOfEvents, handler) {
		// Create the events object if it's not already present
		if (!chartInstance.events)
			chartInstance.events = {};

		helpers.each(arrayOfEvents, function(eventName) {
			chartInstance.events[eventName] = function() {
				handler.apply(chartInstance, arguments);
			};
			helpers.addEvent(chartInstance.chart.canvas, eventName, chartInstance.events[eventName]);
		});
	};
	helpers.unbindEvents = function(chartInstance, arrayOfEvents) {
		helpers.each(arrayOfEvents, function(handler, eventName) {
			helpers.removeEvent(chartInstance.chart.canvas, eventName, handler);
		});
	};

	// Private helper function to convert max-width/max-height values that may be percentages into a number
	function parseMaxStyle(styleValue, node, parentProperty) {
		var valueInPixels;
		if (typeof(styleValue) === 'string') {
			valueInPixels = parseInt(styleValue, 10);

			if (styleValue.indexOf('%') != -1) {
				// percentage * size in dimension
				valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
			}
		} else {
			valueInPixels = styleValue;
		}

		return valueInPixels;
	}

	// Private helper to get a constraint dimension
	// @param domNode : the node to check the constraint on
	// @param maxStyle : the style that defines the maximum for the direction we are using (max-width / max-height)
	// @param percentageProperty : property of parent to use when calculating width as a percentage
	function getConstraintDimension(domNode, maxStyle, percentageProperty) {
		var constrainedDimension;
		var constrainedNode = document.defaultView.getComputedStyle(domNode)[maxStyle];
		var constrainedContainer = document.defaultView.getComputedStyle(domNode.parentNode)[maxStyle];
		var hasCNode = constrainedNode !== null && constrainedNode !== "none";
		var hasCContainer = constrainedContainer !== null && constrainedContainer !== "none";

		if (hasCNode || hasCContainer) {
			constrainedDimension = Math.min((hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : Number.POSITIVE_INFINITY), (hasCContainer ? parseMaxStyle(constrainedContainer, domNode.parentNode, percentageProperty) : Number.POSITIVE_INFINITY));
		}
		return constrainedDimension;
	}
	// returns Number or undefined if no constraint
	helpers.getConstraintWidth = function(domNode) {
		return getConstraintDimension(domNode, 'max-width', 'clientWidth');
	};
	// returns Number or undefined if no constraint
	helpers.getConstraintHeight = function(domNode) {
		return getConstraintDimension(domNode, 'max-height', 'clientHeight');
	};
	helpers.getMaximumWidth = function(domNode) {
		var container = domNode.parentNode;
		var padding = parseInt(helpers.getStyle(container, 'padding-left')) + parseInt(helpers.getStyle(container, 'padding-right'));

		var w = container.clientWidth - padding;
		var cw = helpers.getConstraintWidth(domNode);
		if (cw !== undefined) {
			w = Math.min(w, cw);
		}

		return w;
	};
	helpers.getMaximumHeight = function(domNode) {
		var container = domNode.parentNode;
		var padding = parseInt(helpers.getStyle(container, 'padding-top')) + parseInt(helpers.getStyle(container, 'padding-bottom'));

		var h = container.clientHeight - padding;
		var ch = helpers.getConstraintHeight(domNode);
		if (ch !== undefined) {
			h = Math.min(h, ch);
		}

		return h;
	};
	helpers.getStyle = function(el, property) {
		return el.currentStyle ?
			el.currentStyle[property] :
			document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
	};
	helpers.retinaScale = function(chart) {
		var ctx = chart.ctx;
		var width = chart.canvas.width;
		var height = chart.canvas.height;
		var pixelRatio = chart.currentDevicePixelRatio = window.devicePixelRatio || 1;

		if (pixelRatio !== 1) {
			ctx.canvas.height = height * pixelRatio;
			ctx.canvas.width = width * pixelRatio;
			ctx.scale(pixelRatio, pixelRatio);

			// Store the device pixel ratio so that we can go backwards in `destroy`.
			// The devicePixelRatio changes with zoom, so there are no guarantees that it is the same
			// when destroy is called
			chart.originalDevicePixelRatio = chart.originalDevicePixelRatio || pixelRatio;
		}

		ctx.canvas.style.width = width + 'px';
		ctx.canvas.style.height = height + 'px';
	};
	//-- Canvas methods
	helpers.clear = function(chart) {
		chart.ctx.clearRect(0, 0, chart.width, chart.height);
	};
	helpers.fontString = function(pixelSize, fontStyle, fontFamily) {
		return fontStyle + " " + pixelSize + "px " + fontFamily;
	};
	helpers.longestText = function(ctx, font, arrayOfStrings, cache) {
		cache = cache || {};
		cache.data = cache.data || {};
		cache.garbageCollect = cache.garbageCollect || [];

		if (cache.font !== font) {
			cache.data = {};
			cache.garbageCollect = [];
			cache.font = font;
		}

		ctx.font = font;
		var longest = 0;
		helpers.each(arrayOfStrings, function(string) {
			// Undefined strings should not be measured
			if (string !== undefined && string !== null) {
				var textWidth = cache.data[string];
				if (!textWidth) {
					textWidth = cache.data[string] = ctx.measureText(string).width;
					cache.garbageCollect.push(string);
				}

				if (textWidth > longest) {
					longest = textWidth;
				}
			}
		});

		var gcLen = cache.garbageCollect.length / 2;
		if (gcLen > arrayOfStrings.length) {
			for (var i = 0; i < gcLen; i++) {
				delete cache.data[cache.garbageCollect[i]];
			}
			cache.garbageCollect.splice(0, gcLen);
		}

		return longest;
	};
	helpers.drawRoundedRectangle = function(ctx, x, y, width, height, radius) {
		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.closePath();
	};
	helpers.color = function(c) {
		if (!color) {
			console.log('Color.js not found!');
			return c;
		}

		/* global CanvasGradient */
		if (c instanceof CanvasGradient) {
			return color(Chart.defaults.global.defaultColor);
		}

		return color(c);
	};
	helpers.addResizeListener = function(node, callback) {
		// Hide an iframe before the node
		var hiddenIframe = document.createElement('iframe');
		var hiddenIframeClass = 'chartjs-hidden-iframe';

		if (hiddenIframe.classlist) {
			// can use classlist
			hiddenIframe.classlist.add(hiddenIframeClass);
		} else {
			hiddenIframe.setAttribute('class', hiddenIframeClass);
		}

		// Set the style
		hiddenIframe.style.width = '100%';
		hiddenIframe.style.display = 'block';
		hiddenIframe.style.border = 0;
		hiddenIframe.style.height = 0;
		hiddenIframe.style.margin = 0;
		hiddenIframe.style.position = 'absolute';
		hiddenIframe.style.left = 0;
		hiddenIframe.style.right = 0;
		hiddenIframe.style.top = 0;
		hiddenIframe.style.bottom = 0;

		// Insert the iframe so that contentWindow is available
		node.insertBefore(hiddenIframe, node.firstChild);

		(hiddenIframe.contentWindow || hiddenIframe).onresize = function() {
			if (callback) {
				callback();
			}
		};
	};
	helpers.removeResizeListener = function(node) {
		var hiddenIframe = node.querySelector('.chartjs-hidden-iframe');

		// Remove the resize detect iframe
		if (hiddenIframe) {
			hiddenIframe.parentNode.removeChild(hiddenIframe);
		}
	};
	helpers.isArray = function(obj) {
		if (!Array.isArray) {
			return Object.prototype.toString.call(obj) === '[object Array]';
		}
		return Array.isArray(obj);
	};
	helpers.pushAllIfDefined = function(element, array) {
		if (typeof element === "undefined") {
			return;
		}

		if (helpers.isArray(element)) {
			array.push.apply(array, element);
		} else {
			array.push(element);
		}
	};
	helpers.isDatasetVisible = function(dataset) {
		return !dataset.hidden;
	};
	helpers.callCallback = function(fn, args, _tArg) {
		if (fn && typeof fn.call === 'function') {
			fn.apply(_tArg, args);
		}
	};

};

},{"chartjs-color":6}],26:[function(require,module,exports){
"use strict";

module.exports = function() {

	//Occupy the global variable of Chart, and create a simple base class
	var Chart = function(context, config) {
		this.config = config;

		// Support a jQuery'd canvas element
		if (context.length && context[0].getContext) {
			context = context[0];
		}

		// Support a canvas domnode
		if (context.getContext) {
			context = context.getContext("2d");
		}

		this.ctx = context;
		this.canvas = context.canvas;

		// Figure out what the size of the chart will be.
		// If the canvas has a specified width and height, we use those else
		// we look to see if the canvas node has a CSS width and height.
		// If there is still no height, fill the parent container
		this.width = context.canvas.width || parseInt(Chart.helpers.getStyle(context.canvas, 'width')) || Chart.helpers.getMaximumWidth(context.canvas);
		this.height = context.canvas.height || parseInt(Chart.helpers.getStyle(context.canvas, 'height')) || Chart.helpers.getMaximumHeight(context.canvas);

		this.aspectRatio = this.width / this.height;

		if (isNaN(this.aspectRatio) || isFinite(this.aspectRatio) === false) {
			// If the canvas has no size, try and figure out what the aspect ratio will be.
			// Some charts prefer square canvases (pie, radar, etc). If that is specified, use that
			// else use the canvas default ratio of 2
			this.aspectRatio = config.aspectRatio !== undefined ? config.aspectRatio : 2;
		}

		// Store the original style of the element so we can set it back
		this.originalCanvasStyleWidth = context.canvas.style.width;
		this.originalCanvasStyleHeight = context.canvas.style.height;

		// High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
		Chart.helpers.retinaScale(this);

		if (config) {
			this.controller = new Chart.Controller(this);
		}

		// Always bind this so that if the responsive state changes we still work
		var _this = this;
		Chart.helpers.addResizeListener(context.canvas.parentNode, function() {
			if (_this.controller && _this.controller.config.options.responsive) {
				_this.controller.resize();
			}
		});

		return this.controller ? this.controller : this;

	};

	//Globally expose the defaults to allow for user updating/changing
	Chart.defaults = {
		global: {
			responsive: true,
			responsiveAnimationDuration: 0,
			maintainAspectRatio: true,
			events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
			hover: {
				onHover: null,
				mode: 'single',
				animationDuration: 400
			},
			onClick: null,
			defaultColor: 'rgba(0,0,0,0.1)',
			defaultFontColor: '#666',
			defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			defaultFontSize: 12,
			defaultFontStyle: 'normal',
			showLines: true,

			// Element defaults defined in element extensions
			elements: {},

			// Legend callback string
			legendCallback: function(chart) {
				var text = [];
				text.push('<ul class="' + chart.id + '-legend">');
				for (var i = 0; i < chart.data.datasets.length; i++) {
					text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
					if (chart.data.datasets[i].label) {
						text.push(chart.data.datasets[i].label);
					}
					text.push('</li>');
				}
				text.push('</ul>');

				return text.join("");
			}
		}
	};

	return Chart;

};

},{}],27:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	// The layout service is very self explanatory.  It's responsible for the layout within a chart.
	// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
	// It is this service's responsibility of carrying out that layout.
	Chart.layoutService = {
		defaults: {},

		// Register a box to a chartInstance. A box is simply a reference to an object that requires layout. eg. Scales, Legend, Plugins.
		addBox: function(chartInstance, box) {
			if (!chartInstance.boxes) {
				chartInstance.boxes = [];
			}
			chartInstance.boxes.push(box);
		},

		removeBox: function(chartInstance, box) {
			if (!chartInstance.boxes) {
				return;
			}
			chartInstance.boxes.splice(chartInstance.boxes.indexOf(box), 1);
		},

		// The most important function
		update: function(chartInstance, width, height) {

			if (!chartInstance) {
				return;
			}

			var xPadding = 0;
			var yPadding = 0;

			var leftBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === "left";
			});
			var rightBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === "right";
			});
			var topBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === "top";
			});
			var bottomBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === "bottom";
			});

			// Boxes that overlay the chartarea such as the radialLinear scale
			var chartAreaBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === "chartArea";
			});

			function fullWidthSorter(a, b) {

			}

			// Ensure that full width boxes are at the very top / bottom
			topBoxes.sort(function(a, b) {
				return (b.options.fullWidth ? 1 : 0) - (a.options.fullWidth ? 1 : 0);
			});
			bottomBoxes.sort(function(a, b) {
				return (a.options.fullWidth ? 1 : 0) - (b.options.fullWidth ? 1 : 0);
			});

			// Essentially we now have any number of boxes on each of the 4 sides.
			// Our canvas looks like the following.
			// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
			// B1 is the bottom axis
			// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
			// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
			// an error will be thrown.
			//
			// |----------------------------------------------------|
			// |                  T1 (Full Width)                   |
			// |----------------------------------------------------|
			// |    |    |                 T2                  |    |
			// |    |----|-------------------------------------|----|
			// |    |    | C1 |                           | C2 |    |
			// |    |    |----|                           |----|    |
			// |    |    |                                     |    |
			// | L1 | L2 |           ChartArea (C0)            | R1 |
			// |    |    |                                     |    |
			// |    |    |----|                           |----|    |
			// |    |    | C3 |                           | C4 |    |
			// |    |----|-------------------------------------|----|
			// |    |    |                 B1                  |    |
			// |----------------------------------------------------|
			// |                  B2 (Full Width)                   |
			// |----------------------------------------------------|
			//
			// What we do to find the best sizing, we do the following
			// 1. Determine the minimum size of the chart area.
			// 2. Split the remaining width equally between each vertical axis
			// 3. Split the remaining height equally between each horizontal axis
			// 4. Give each layout the maximum size it can be. The layout will return it's minimum size
			// 5. Adjust the sizes of each axis based on it's minimum reported size.
			// 6. Refit each axis
			// 7. Position each axis in the final location
			// 8. Tell the chart the final location of the chart area
			// 9. Tell any axes that overlay the chart area the positions of the chart area

			// Step 1
			var chartWidth = width - (2 * xPadding);
			var chartHeight = height - (2 * yPadding);
			var chartAreaWidth = chartWidth / 2; // min 50%
			var chartAreaHeight = chartHeight / 2; // min 50%

			// Step 2
			var verticalBoxWidth = (width - chartAreaWidth) / (leftBoxes.length + rightBoxes.length);

			// Step 3
			var horizontalBoxHeight = (height - chartAreaHeight) / (topBoxes.length + bottomBoxes.length);

			// Step 4
			var maxChartAreaWidth = chartWidth;
			var maxChartAreaHeight = chartHeight;
			var minBoxSizes = [];

			helpers.each(leftBoxes.concat(rightBoxes, topBoxes, bottomBoxes), getMinimumBoxSize);

			function getMinimumBoxSize(box) {
				var minSize;
				var isHorizontal = box.isHorizontal();

				if (isHorizontal) {
					minSize = box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, horizontalBoxHeight);
					maxChartAreaHeight -= minSize.height;
				} else {
					minSize = box.update(verticalBoxWidth, chartAreaHeight);
					maxChartAreaWidth -= minSize.width;
				}

				minBoxSizes.push({
					horizontal: isHorizontal,
					minSize: minSize,
					box: box
				});
			}

			// At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
			// be if the axes are drawn at their minimum sizes.

			// Steps 5 & 6
			var totalLeftBoxesWidth = xPadding;
			var totalRightBoxesWidth = xPadding;
			var totalTopBoxesHeight = yPadding;
			var totalBottomBoxesHeight = yPadding;

			// Update, and calculate the left and right margins for the horizontal boxes
			helpers.each(leftBoxes.concat(rightBoxes), fitBox);

			helpers.each(leftBoxes, function(box) {
				totalLeftBoxesWidth += box.width;
			});

			helpers.each(rightBoxes, function(box) {
				totalRightBoxesWidth += box.width;
			});

			// Set the Left and Right margins for the horizontal boxes
			helpers.each(topBoxes.concat(bottomBoxes), fitBox);

			// Function to fit a box
			function fitBox(box) {
				var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBoxSize) {
					return minBoxSize.box === box;
				});

				if (minBoxSize) {
					if (box.isHorizontal()) {
						var scaleMargin = {
							left: totalLeftBoxesWidth,
							right: totalRightBoxesWidth,
							top: 0,
							bottom: 0
						};

						// Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
						// on the margin. Sometimes they need to increase in size slightly
						box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
					} else {
						box.update(minBoxSize.minSize.width, maxChartAreaHeight);
					}
				}
			}

			// Figure out how much margin is on the top and bottom of the vertical boxes
			helpers.each(topBoxes, function(box) {
				totalTopBoxesHeight += box.height;
			});

			helpers.each(bottomBoxes, function(box) {
				totalBottomBoxesHeight += box.height;
			});

			// Let the left layout know the final margin
			helpers.each(leftBoxes.concat(rightBoxes), finalFitVerticalBox);

			function finalFitVerticalBox(box) {
				var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBoxSize) {
					return minBoxSize.box === box;
				});

				var scaleMargin = {
					left: 0,
					right: 0,
					top: totalTopBoxesHeight,
					bottom: totalBottomBoxesHeight
				};

				if (minBoxSize) {
					box.update(minBoxSize.minSize.width, maxChartAreaHeight, scaleMargin);
				}
			}

			// Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
			totalLeftBoxesWidth = xPadding;
			totalRightBoxesWidth = xPadding;
			totalTopBoxesHeight = yPadding;
			totalBottomBoxesHeight = yPadding;

			helpers.each(leftBoxes, function(box) {
				totalLeftBoxesWidth += box.width;
			});

			helpers.each(rightBoxes, function(box) {
				totalRightBoxesWidth += box.width;
			});

			helpers.each(topBoxes, function(box) {
				totalTopBoxesHeight += box.height;
			});
			helpers.each(bottomBoxes, function(box) {
				totalBottomBoxesHeight += box.height;
			});

			// Figure out if our chart area changed. This would occur if the dataset layout label rotation
			// changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
			// without calling `fit` again
			var newMaxChartAreaHeight = height - totalTopBoxesHeight - totalBottomBoxesHeight;
			var newMaxChartAreaWidth = width - totalLeftBoxesWidth - totalRightBoxesWidth;

			if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
				helpers.each(leftBoxes, function(box) {
					box.height = newMaxChartAreaHeight;
				});

				helpers.each(rightBoxes, function(box) {
					box.height = newMaxChartAreaHeight;
				});

				helpers.each(topBoxes, function(box) {
					box.width = newMaxChartAreaWidth;
				});

				helpers.each(bottomBoxes, function(box) {
					box.width = newMaxChartAreaWidth;
				});

				maxChartAreaHeight = newMaxChartAreaHeight;
				maxChartAreaWidth = newMaxChartAreaWidth;
			}

			// Step 7 - Position the boxes
			var left = xPadding;
			var top = yPadding;
			var right = 0;
			var bottom = 0;

			helpers.each(leftBoxes.concat(topBoxes), placeBox);

			// Account for chart width and height
			left += maxChartAreaWidth;
			top += maxChartAreaHeight;

			helpers.each(rightBoxes, placeBox);
			helpers.each(bottomBoxes, placeBox);

			function placeBox(box) {
				if (box.isHorizontal()) {
					box.left = box.options.fullWidth ? xPadding : totalLeftBoxesWidth;
					box.right = box.options.fullWidth ? width - xPadding : totalLeftBoxesWidth + maxChartAreaWidth;
					box.top = top;
					box.bottom = top + box.height;

					// Move to next point
					top = box.bottom;

				} else {

					box.left = left;
					box.right = left + box.width;
					box.top = totalTopBoxesHeight;
					box.bottom = totalTopBoxesHeight + maxChartAreaHeight;

					// Move to next point
					left = box.right;
				}
			}

			// Step 8
			chartInstance.chartArea = {
				left: totalLeftBoxesWidth,
				top: totalTopBoxesHeight,
				right: totalLeftBoxesWidth + maxChartAreaWidth,
				bottom: totalTopBoxesHeight + maxChartAreaHeight
			};

			// Step 9
			helpers.each(chartAreaBoxes, function(box) {
				box.left = chartInstance.chartArea.left;
				box.top = chartInstance.chartArea.top;
				box.right = chartInstance.chartArea.right;
				box.bottom = chartInstance.chartArea.bottom;

				box.update(maxChartAreaWidth, maxChartAreaHeight);
			});
		}
	};
};

},{}],28:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.legend = {

		display: true,
		position: 'top',
		fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)
		reverse: false,

		// a callback that will handle
		onClick: function(e, legendItem) {
			var dataset = this.chart.data.datasets[legendItem.datasetIndex];
			dataset.hidden = !dataset.hidden;

			// We hid a dataset ... rerender the chart
			this.chart.update();
		},

		labels: {
			boxWidth: 40,
			padding: 10,
			// Generates labels shown in the legend
			// Valid properties to return:
			// text : text to display
			// fillStyle : fill of coloured box
			// strokeStyle: stroke of coloured box
			// hidden : if this legend item refers to a hidden item
			// lineCap : cap style for line
			// lineDash
			// lineDashOffset :
			// lineJoin :
			// lineWidth :
			generateLabels: function(data) {
				return helpers.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
					return {
						text: dataset.label,
						fillStyle: dataset.backgroundColor,
						hidden: dataset.hidden,
						lineCap: dataset.borderCapStyle,
						lineDash: dataset.borderDash,
						lineDashOffset: dataset.borderDashOffset,
						lineJoin: dataset.borderJoinStyle,
						lineWidth: dataset.borderWidth,
						strokeStyle: dataset.borderColor,

						// Below is extra data used for toggling the datasets
						datasetIndex: i
					};
				}, this) : [];
			}
		}
	};

	Chart.Legend = Chart.Element.extend({

		initialize: function(config) {
			helpers.extend(this, config);

			// Contains hit boxes for each dataset (in dataset order)
			this.legendHitBoxes = [];

			// Are we in doughnut mode which has a different data type
			this.doughnutMode = false;
		},

		// These methods are ordered by lifecyle. Utilities then follow.
		// Any function defined here is inherited by all legend types.
		// Any function can be extended by the legend type

		beforeUpdate: helpers.noop,
		update: function(maxWidth, maxHeight, margins) {

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			this.beforeUpdate();

			// Absorb the master measurements
			this.maxWidth = maxWidth;
			this.maxHeight = maxHeight;
			this.margins = margins;

			// Dimensions
			this.beforeSetDimensions();
			this.setDimensions();
			this.afterSetDimensions();
			// Labels
			this.beforeBuildLabels();
			this.buildLabels();
			this.afterBuildLabels();

			// Fit
			this.beforeFit();
			this.fit();
			this.afterFit();
			//
			this.afterUpdate();

			return this.minSize;

		},
		afterUpdate: helpers.noop,

		//

		beforeSetDimensions: helpers.noop,
		setDimensions: function() {
			// Set the unconstrained dimension before label rotation
			if (this.isHorizontal()) {
				// Reset position before calculating rotation
				this.width = this.maxWidth;
				this.left = 0;
				this.right = this.width;
			} else {
				this.height = this.maxHeight;

				// Reset position before calculating rotation
				this.top = 0;
				this.bottom = this.height;
			}

			// Reset padding
			this.paddingLeft = 0;
			this.paddingTop = 0;
			this.paddingRight = 0;
			this.paddingBottom = 0;

			// Reset minSize
			this.minSize = {
				width: 0,
				height: 0
			};
		},
		afterSetDimensions: helpers.noop,

		//

		beforeBuildLabels: helpers.noop,
		buildLabels: function() {
			this.legendItems = this.options.labels.generateLabels.call(this, this.chart.data);
			if(this.options.reverse){
				this.legendItems.reverse();
			}
		},
		afterBuildLabels: helpers.noop,

		//

		beforeFit: helpers.noop,
		fit: function() {

			var ctx = this.ctx;
			var fontSize = helpers.getValueOrDefault(this.options.labels.fontSize, Chart.defaults.global.defaultFontSize);
			var fontStyle = helpers.getValueOrDefault(this.options.labels.fontStyle, Chart.defaults.global.defaultFontStyle);
			var fontFamily = helpers.getValueOrDefault(this.options.labels.fontFamily, Chart.defaults.global.defaultFontFamily);
			var labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

			// Reset hit boxes
			this.legendHitBoxes = [];

			// Width
			if (this.isHorizontal()) {
				this.minSize.width = this.maxWidth; // fill all the width
			} else {
				this.minSize.width = this.options.display ? 10 : 0;
			}

			// height
			if (this.isHorizontal()) {
				this.minSize.height = this.options.display ? 10 : 0;
			} else {
				this.minSize.height = this.maxHeight; // fill all the height
			}

			// Increase sizes here
			if (this.options.display) {
				if (this.isHorizontal()) {
					// Labels

					// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
					this.lineWidths = [0];
					var totalHeight = this.legendItems.length ? fontSize + (this.options.labels.padding) : 0;

					ctx.textAlign = "left";
					ctx.textBaseline = 'top';
					ctx.font = labelFont;

					helpers.each(this.legendItems, function(legendItem, i) {
						var width = this.options.labels.boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
						if (this.lineWidths[this.lineWidths.length - 1] + width + this.options.labels.padding >= this.width) {
							totalHeight += fontSize + (this.options.labels.padding);
							this.lineWidths[this.lineWidths.length] = this.left;
						}

						// Store the hitbox width and height here. Final position will be updated in `draw`
						this.legendHitBoxes[i] = {
							left: 0,
							top: 0,
							width: width,
							height: fontSize
						};

						this.lineWidths[this.lineWidths.length - 1] += width + this.options.labels.padding;
					}, this);

					this.minSize.height += totalHeight;

				} else {
					// TODO vertical
				}
			}

			this.width = this.minSize.width;
			this.height = this.minSize.height;

		},
		afterFit: helpers.noop,

		// Shared Methods
		isHorizontal: function() {
			return this.options.position === "top" || this.options.position === "bottom";
		},

		// Actualy draw the legend on the canvas
		draw: function() {
			if (this.options.display) {
				var ctx = this.ctx;
				var cursor = {
					x: this.left + ((this.width - this.lineWidths[0]) / 2),
					y: this.top + this.options.labels.padding,
					line: 0
				};

				var fontColor = helpers.getValueOrDefault(this.options.labels.fontColor, Chart.defaults.global.defaultFontColor);
				var fontSize = helpers.getValueOrDefault(this.options.labels.fontSize, Chart.defaults.global.defaultFontSize);
				var fontStyle = helpers.getValueOrDefault(this.options.labels.fontStyle, Chart.defaults.global.defaultFontStyle);
				var fontFamily = helpers.getValueOrDefault(this.options.labels.fontFamily, Chart.defaults.global.defaultFontFamily);
				var labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

				// Horizontal
				if (this.isHorizontal()) {
					// Labels
					ctx.textAlign = "left";
					ctx.textBaseline = 'top';
					ctx.lineWidth = 0.5;
					ctx.strokeStyle = fontColor; // for strikethrough effect
					ctx.fillStyle = fontColor; // render in correct colour
					ctx.font = labelFont;

					helpers.each(this.legendItems, function(legendItem, i) {
						var textWidth = ctx.measureText(legendItem.text).width;
						var width = this.options.labels.boxWidth + (fontSize / 2) + textWidth;

						if (cursor.x + width >= this.width) {
							cursor.y += fontSize + (this.options.labels.padding);
							cursor.line++;
							cursor.x = this.left + ((this.width - this.lineWidths[cursor.line]) / 2);
						}

						// Set the ctx for the box
						ctx.save();

						var itemOrDefault = function(item, defaulVal) {
							return item !== undefined ? item : defaulVal;
						};

						ctx.fillStyle = itemOrDefault(legendItem.fillStyle, Chart.defaults.global.defaultColor);
						ctx.lineCap = itemOrDefault(legendItem.lineCap, Chart.defaults.global.elements.line.borderCapStyle);
						ctx.lineDashOffset = itemOrDefault(legendItem.lineDashOffset, Chart.defaults.global.elements.line.borderDashOffset);
						ctx.lineJoin = itemOrDefault(legendItem.lineJoin, Chart.defaults.global.elements.line.borderJoinStyle);
						ctx.lineWidth = itemOrDefault(legendItem.lineWidth, Chart.defaults.global.elements.line.borderWidth);
						ctx.strokeStyle = itemOrDefault(legendItem.strokeStyle, Chart.defaults.global.defaultColor);

						if (ctx.setLineDash) {
							// IE 9 and 10 do not support line dash
							ctx.setLineDash(itemOrDefault(legendItem.lineDash, Chart.defaults.global.elements.line.borderDash));
						}

						// Draw the box
						ctx.strokeRect(cursor.x, cursor.y, this.options.labels.boxWidth, fontSize);
						ctx.fillRect(cursor.x, cursor.y, this.options.labels.boxWidth, fontSize);

						ctx.restore();

						this.legendHitBoxes[i].left = cursor.x;
						this.legendHitBoxes[i].top = cursor.y;

						// Fill the actual label
						ctx.fillText(legendItem.text, this.options.labels.boxWidth + (fontSize / 2) + cursor.x, cursor.y);

						if (legendItem.hidden) {
							// Strikethrough the text if hidden
							ctx.beginPath();
							ctx.lineWidth = 2;
							ctx.moveTo(this.options.labels.boxWidth + (fontSize / 2) + cursor.x, cursor.y + (fontSize / 2));
							ctx.lineTo(this.options.labels.boxWidth + (fontSize / 2) + cursor.x + textWidth, cursor.y + (fontSize / 2));
							ctx.stroke();
						}

						cursor.x += width + (this.options.labels.padding);
					}, this);
				} else {

				}
			}
		},

		// Handle an event
		handleEvent: function(e) {
			var position = helpers.getRelativePosition(e, this.chart.chart);

			if (position.x >= this.left && position.x <= this.right && position.y >= this.top && position.y <= this.bottom) {
				// See if we are touching one of the dataset boxes
				for (var i = 0; i < this.legendHitBoxes.length; ++i) {
					var hitBox = this.legendHitBoxes[i];

					if (position.x >= hitBox.left && position.x <= hitBox.left + hitBox.width && position.y >= hitBox.top && position.y <= hitBox.top + hitBox.height) {
						// Touching an element
						if (this.options.onClick) {
							this.options.onClick.call(this, e, this.legendItems[i]);
						}
						break;
					}
				}
			}
		}
	});

};

},{}],29:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.scale = {
		display: true,

		// grid line settings
		gridLines: {
			display: true,
			color: "rgba(0, 0, 0, 0.1)",
			lineWidth: 1,
			drawOnChartArea: true,
			drawTicks: true,
			zeroLineWidth: 1,
			zeroLineColor: "rgba(0,0,0,0.25)",
			offsetGridLines: false
		},

		// scale label
		scaleLabel: {
			// actual label
			labelString: '',

			// display property
			display: false
		},

		// label settings
		ticks: {
			beginAtZero: false,
			maxRotation: 50,
			mirror: false,
			padding: 10,
			reverse: false,
			display: true,
			autoSkip: true,
			autoSkipPadding: 0,
			callback: function(value) {
				return '' + value;
			}
		}
	};

	Chart.Scale = Chart.Element.extend({

		// These methods are ordered by lifecyle. Utilities then follow.
		// Any function defined here is inherited by all scale types.
		// Any function can be extended by the scale type

		beforeUpdate: function() {
			helpers.callCallback(this.options.beforeUpdate, [this]);
		},
		update: function(maxWidth, maxHeight, margins) {

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			this.beforeUpdate();

			// Absorb the master measurements
			this.maxWidth = maxWidth;
			this.maxHeight = maxHeight;
			this.margins = helpers.extend({
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}, margins);

			// Dimensions
			this.beforeSetDimensions();
			this.setDimensions();
			this.afterSetDimensions();

			// Data min/max
			this.beforeDataLimits();
			this.determineDataLimits();
			this.afterDataLimits();

			// Ticks
			this.beforeBuildTicks();
			this.buildTicks();
			this.afterBuildTicks();

			this.beforeTickToLabelConversion();
			this.convertTicksToLabels();
			this.afterTickToLabelConversion();

			// Tick Rotation
			this.beforeCalculateTickRotation();
			this.calculateTickRotation();
			this.afterCalculateTickRotation();
			// Fit
			this.beforeFit();
			this.fit();
			this.afterFit();
			//
			this.afterUpdate();

			return this.minSize;

		},
		afterUpdate: function() {
			helpers.callCallback(this.options.afterUpdate, [this]);
		},

		//

		beforeSetDimensions: function() {
			helpers.callCallback(this.options.beforeSetDimensions, [this]);
		},
		setDimensions: function() {
			// Set the unconstrained dimension before label rotation
			if (this.isHorizontal()) {
				// Reset position before calculating rotation
				this.width = this.maxWidth;
				this.left = 0;
				this.right = this.width;
			} else {
				this.height = this.maxHeight;

				// Reset position before calculating rotation
				this.top = 0;
				this.bottom = this.height;
			}

			// Reset padding
			this.paddingLeft = 0;
			this.paddingTop = 0;
			this.paddingRight = 0;
			this.paddingBottom = 0;
		},
		afterSetDimensions: function() {
			helpers.callCallback(this.options.afterSetDimensions, [this]);
		},

		// Data limits
		beforeDataLimits: function() {
			helpers.callCallback(this.options.beforeDataLimits, [this]);
		},
		determineDataLimits: helpers.noop,
		afterDataLimits: function() {
			helpers.callCallback(this.options.afterDataLimits, [this]);
		},

		//
		beforeBuildTicks: function() {
			helpers.callCallback(this.options.beforeBuildTicks, [this]);
		},
		buildTicks: helpers.noop,
		afterBuildTicks: function() {
			helpers.callCallback(this.options.afterBuildTicks, [this]);
		},

		beforeTickToLabelConversion: function() {
			helpers.callCallback(this.options.beforeTickToLabelConversion, [this]);
		},
		convertTicksToLabels: function() {
			// Convert ticks to strings
			this.ticks = this.ticks.map(function(numericalTick, index, ticks) {
					if (this.options.ticks.userCallback) {
						return this.options.ticks.userCallback(numericalTick, index, ticks);
					}
					return this.options.ticks.callback(numericalTick, index, ticks);
				},
				this);
		},
		afterTickToLabelConversion: function() {
			helpers.callCallback(this.options.afterTickToLabelConversion, [this]);
		},

		//

		beforeCalculateTickRotation: function() {
			helpers.callCallback(this.options.beforeCalculateTickRotation, [this]);
		},
		calculateTickRotation: function() {
			//Get the width of each grid by calculating the difference
			//between x offsets between 0 and 1.
			var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
			var tickFontStyle = helpers.getValueOrDefault(this.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
			var tickFontFamily = helpers.getValueOrDefault(this.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
			var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
			this.ctx.font = tickLabelFont;

			var firstWidth = this.ctx.measureText(this.ticks[0]).width;
			var lastWidth = this.ctx.measureText(this.ticks[this.ticks.length - 1]).width;
			var firstRotated;

			this.labelRotation = 0;
			this.paddingRight = 0;
			this.paddingLeft = 0;

			if (this.options.display) {
				if (this.isHorizontal()) {
					this.paddingRight = lastWidth / 2 + 3;
					this.paddingLeft = firstWidth / 2 + 3;

					if (!this.longestTextCache) {
						this.longestTextCache = {};
					}
					var originalLabelWidth = helpers.longestText(this.ctx, tickLabelFont, this.ticks, this.longestTextCache);
					var labelWidth = originalLabelWidth;
					var cosRotation;
					var sinRotation;

					// Allow 3 pixels x2 padding either side for label readability
					// only the index matters for a dataset scale, but we want a consistent interface between scales
					var tickWidth = this.getPixelForTick(1) - this.getPixelForTick(0) - 6;

					//Max label rotation can be set or default to 90 - also act as a loop counter
					while (labelWidth > tickWidth && this.labelRotation < this.options.ticks.maxRotation) {
						cosRotation = Math.cos(helpers.toRadians(this.labelRotation));
						sinRotation = Math.sin(helpers.toRadians(this.labelRotation));

						firstRotated = cosRotation * firstWidth;

						// We're right aligning the text now.
						if (firstRotated + tickFontSize / 2 > this.yLabelWidth) {
							this.paddingLeft = firstRotated + tickFontSize / 2;
						}

						this.paddingRight = tickFontSize / 2;

						if (sinRotation * originalLabelWidth > this.maxHeight) {
							// go back one step
							this.labelRotation--;
							break;
						}

						this.labelRotation++;
						labelWidth = cosRotation * originalLabelWidth;
					}
				}
			}

			if (this.margins) {
				this.paddingLeft = Math.max(this.paddingLeft - this.margins.left, 0);
				this.paddingRight = Math.max(this.paddingRight - this.margins.right, 0);
			}
		},
		afterCalculateTickRotation: function() {
			helpers.callCallback(this.options.afterCalculateTickRotation, [this]);
		},

		//

		beforeFit: function() {
			helpers.callCallback(this.options.beforeFit, [this]);
		},
		fit: function() {

			this.minSize = {
				width: 0,
				height: 0
			};

			var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
			var tickFontStyle = helpers.getValueOrDefault(this.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
			var tickFontFamily = helpers.getValueOrDefault(this.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
			var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

			var scaleLabelFontSize = helpers.getValueOrDefault(this.options.scaleLabel.fontSize, Chart.defaults.global.defaultFontSize);
			var scaleLabelFontStyle = helpers.getValueOrDefault(this.options.scaleLabel.fontStyle, Chart.defaults.global.defaultFontStyle);
			var scaleLabelFontFamily = helpers.getValueOrDefault(this.options.scaleLabel.fontFamily, Chart.defaults.global.defaultFontFamily);
			var scaleLabelFont = helpers.fontString(scaleLabelFontSize, scaleLabelFontStyle, scaleLabelFontFamily);

			// Width
			if (this.isHorizontal()) {
				// subtract the margins to line up with the chartArea if we are a full width scale
				this.minSize.width = this.isFullWidth() ? this.maxWidth - this.margins.left - this.margins.right : this.maxWidth;
			} else {
				this.minSize.width = this.options.gridLines.display && this.options.display ? 10 : 0;
			}

			// height
			if (this.isHorizontal()) {
				this.minSize.height = this.options.gridLines.display && this.options.display ? 10 : 0;
			} else {
				this.minSize.height = this.maxHeight; // fill all the height
			}

			// Are we showing a title for the scale?
			if (this.options.scaleLabel.display) {
				if (this.isHorizontal()) {
					this.minSize.height += (scaleLabelFontSize * 1.5);
				} else {
					this.minSize.width += (scaleLabelFontSize * 1.5);
				}
			}

			if (this.options.ticks.display && this.options.display) {
				// Don't bother fitting the ticks if we are not showing them
				if (!this.longestTextCache) {
					this.longestTextCache = {};
				}

				var largestTextWidth = helpers.longestText(this.ctx, tickLabelFont, this.ticks, this.longestTextCache);

				if (this.isHorizontal()) {
					// A horizontal axis is more constrained by the height.
					this.longestLabelWidth = largestTextWidth;

					// TODO - improve this calculation
					var labelHeight = (Math.sin(helpers.toRadians(this.labelRotation)) * this.longestLabelWidth) + 1.5 * tickFontSize;

					this.minSize.height = Math.min(this.maxHeight, this.minSize.height + labelHeight);
					this.ctx.font = tickLabelFont;

					var firstLabelWidth = this.ctx.measureText(this.ticks[0]).width;
					var lastLabelWidth = this.ctx.measureText(this.ticks[this.ticks.length - 1]).width;

					// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned which means that the right padding is dominated
					// by the font height
					var cosRotation = Math.cos(helpers.toRadians(this.labelRotation));
					var sinRotation = Math.sin(helpers.toRadians(this.labelRotation));
					this.paddingLeft = this.labelRotation !== 0 ? (cosRotation * firstLabelWidth) + 3 : firstLabelWidth / 2 + 3; // add 3 px to move away from canvas edges
					this.paddingRight = this.labelRotation !== 0 ? (sinRotation * (tickFontSize / 2)) + 3 : lastLabelWidth / 2 + 3; // when rotated
				} else {
					// A vertical axis is more constrained by the width. Labels are the dominant factor here, so get that length first
					var maxLabelWidth = this.maxWidth - this.minSize.width;

					// Account for padding
					if (!this.options.ticks.mirror) {
						largestTextWidth += this.options.ticks.padding;
					}

					if (largestTextWidth < maxLabelWidth) {
						// We don't need all the room
						this.minSize.width += largestTextWidth;
					} else {
						// Expand to max size
						this.minSize.width = this.maxWidth;
					}

					this.paddingTop = tickFontSize / 2;
					this.paddingBottom = tickFontSize / 2;
				}
			}

			if (this.margins) {
				this.paddingLeft = Math.max(this.paddingLeft - this.margins.left, 0);
				this.paddingTop = Math.max(this.paddingTop - this.margins.top, 0);
				this.paddingRight = Math.max(this.paddingRight - this.margins.right, 0);
				this.paddingBottom = Math.max(this.paddingBottom - this.margins.bottom, 0);
			}

			this.width = this.minSize.width;
			this.height = this.minSize.height;

		},
		afterFit: function() {
			helpers.callCallback(this.options.afterFit, [this]);
		},

		// Shared Methods
		isHorizontal: function() {
			return this.options.position === "top" || this.options.position === "bottom";
		},
		isFullWidth: function() {
			return (this.options.fullWidth);
		},

		// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
		getRightValue: function getRightValue(rawValue) {
			// Null and undefined values first
			if (rawValue === null || typeof(rawValue) === 'undefined') {
				return NaN;
			}
			// isNaN(object) returns true, so make sure NaN is checking for a number
			if (typeof(rawValue) === 'number' && isNaN(rawValue)) {
				return NaN;
			}
			// If it is in fact an object, dive in one more level
			if (typeof(rawValue) === "object") {
				if (rawValue instanceof Date) {
					return rawValue;
				} else {
					return getRightValue(this.isHorizontal() ? rawValue.x : rawValue.y);
				}
			}

			// Value is good, return it
			return rawValue;
		},

		// Used to get the value to display in the tooltip for the data at the given index
		// function getLabelForIndex(index, datasetIndex)
		getLabelForIndex: helpers.noop,

		// Used to get data value locations.  Value can either be an index or a numerical value
		getPixelForValue: helpers.noop,

		// Used for tick location, should
		getPixelForTick: function(index, includeOffset) {
			if (this.isHorizontal()) {
				var innerWidth = this.width - (this.paddingLeft + this.paddingRight);
				var tickWidth = innerWidth / Math.max((this.ticks.length - ((this.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
				var pixel = (tickWidth * index) + this.paddingLeft;

				if (includeOffset) {
					pixel += tickWidth / 2;
				}

				var finalVal = this.left + Math.round(pixel);
				finalVal += this.isFullWidth() ? this.margins.left : 0;
				return finalVal;
			} else {
				var innerHeight = this.height - (this.paddingTop + this.paddingBottom);
				return this.top + (index * (innerHeight / (this.ticks.length - 1)));
			}
		},

		// Utility for getting the pixel location of a percentage of scale
		getPixelForDecimal: function(decimal /*, includeOffset*/ ) {
			if (this.isHorizontal()) {
				var innerWidth = this.width - (this.paddingLeft + this.paddingRight);
				var valueOffset = (innerWidth * decimal) + this.paddingLeft;

				var finalVal = this.left + Math.round(valueOffset);
				finalVal += this.isFullWidth() ? this.margins.left : 0;
				return finalVal;
			} else {
				return this.top + (decimal * this.height);
			}
		},

		// Actualy draw the scale on the canvas
		// @param {rectangle} chartArea : the area of the chart to draw full grid lines on
		draw: function(chartArea) {
			if (this.options.display) {

				var setContextLineSettings;
				var isRotated = this.labelRotation !== 0;
				var skipRatio;
				var scaleLabelX;
				var scaleLabelY;
				var useAutoskipper = this.options.ticks.autoSkip;


				// figure out the maximum number of gridlines to show
				var maxTicks;

				if (this.options.ticks.maxTicksLimit) {
					maxTicks = this.options.ticks.maxTicksLimit;
				}

				var tickFontColor = helpers.getValueOrDefault(this.options.ticks.fontColor, Chart.defaults.global.defaultFontColor);
				var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
				var tickFontStyle = helpers.getValueOrDefault(this.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
				var tickFontFamily = helpers.getValueOrDefault(this.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
				var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

				var scaleLabelFontColor = helpers.getValueOrDefault(this.options.scaleLabel.fontColor, Chart.defaults.global.defaultFontColor);
				var scaleLabelFontSize = helpers.getValueOrDefault(this.options.scaleLabel.fontSize, Chart.defaults.global.defaultFontSize);
				var scaleLabelFontStyle = helpers.getValueOrDefault(this.options.scaleLabel.fontStyle, Chart.defaults.global.defaultFontStyle);
				var scaleLabelFontFamily = helpers.getValueOrDefault(this.options.scaleLabel.fontFamily, Chart.defaults.global.defaultFontFamily);
				var scaleLabelFont = helpers.fontString(scaleLabelFontSize, scaleLabelFontStyle, scaleLabelFontFamily);

				var cosRotation = Math.cos(helpers.toRadians(this.labelRotation));
				var sinRotation = Math.sin(helpers.toRadians(this.labelRotation));
				var longestRotatedLabel = this.longestLabelWidth * cosRotation;
				var rotatedLabelHeight = tickFontSize * sinRotation;

				// Make sure we draw text in the correct color and font
				this.ctx.fillStyle = tickFontColor;

				if (this.isHorizontal()) {
					setContextLineSettings = true;
					var yTickStart = this.options.position === "bottom" ? this.top : this.bottom - 10;
					var yTickEnd = this.options.position === "bottom" ? this.top + 10 : this.bottom;
					skipRatio = false;

					if (((longestRotatedLabel / 2) + this.options.ticks.autoSkipPadding) * this.ticks.length > (this.width - (this.paddingLeft + this.paddingRight))) {
						skipRatio = 1 + Math.floor((((longestRotatedLabel / 2) + this.options.ticks.autoSkipPadding) * this.ticks.length) / (this.width - (this.paddingLeft + this.paddingRight)));
					}

					// if they defined a max number of ticks,
					// increase skipRatio until that number is met
					if (maxTicks && this.ticks.length > maxTicks) {
						while (!skipRatio || this.ticks.length / (skipRatio || 1) > maxTicks) {
							if (!skipRatio) {
								skipRatio = 1;
							}
							skipRatio += 1;
						}
					}

					if (!useAutoskipper) {
						skipRatio = false;
					}

					helpers.each(this.ticks, function(label, index) {
						// Blank ticks
						var isLastTick = this.ticks.length === index + 1;

						// Since we always show the last tick,we need may need to hide the last shown one before
						var shouldSkip = (skipRatio > 1 && index % skipRatio > 0) || (index % skipRatio === 0 && index + skipRatio > this.ticks.length);
						if (shouldSkip && !isLastTick || (label === undefined || label === null)) {
							return;
						}
						var xLineValue = this.getPixelForTick(index); // xvalues for grid lines
						var xLabelValue = this.getPixelForTick(index, this.options.gridLines.offsetGridLines); // x values for ticks (need to consider offsetLabel option)

						if (this.options.gridLines.display) {
							if (index === (typeof this.zeroLineIndex !== 'undefined' ? this.zeroLineIndex : 0)) {
								// Draw the first index specially
								this.ctx.lineWidth = this.options.gridLines.zeroLineWidth;
								this.ctx.strokeStyle = this.options.gridLines.zeroLineColor;
								setContextLineSettings = true; // reset next time
							} else if (setContextLineSettings) {
								this.ctx.lineWidth = this.options.gridLines.lineWidth;
								this.ctx.strokeStyle = this.options.gridLines.color;
								setContextLineSettings = false;
							}

							xLineValue += helpers.aliasPixel(this.ctx.lineWidth);

							// Draw the label area
							this.ctx.beginPath();

							if (this.options.gridLines.drawTicks) {
								this.ctx.moveTo(xLineValue, yTickStart);
								this.ctx.lineTo(xLineValue, yTickEnd);
							}

							// Draw the chart area
							if (this.options.gridLines.drawOnChartArea) {
								this.ctx.moveTo(xLineValue, chartArea.top);
								this.ctx.lineTo(xLineValue, chartArea.bottom);
							}

							// Need to stroke in the loop because we are potentially changing line widths & colours
							this.ctx.stroke();
						}

						if (this.options.ticks.display) {
							this.ctx.save();
							this.ctx.translate(xLabelValue, (isRotated) ? this.top + 12 : this.options.position === "top" ? this.bottom - 10 : this.top + 10);
							this.ctx.rotate(helpers.toRadians(this.labelRotation) * -1);
							this.ctx.font = tickLabelFont;
							this.ctx.textAlign = (isRotated) ? "right" : "center";
							this.ctx.textBaseline = (isRotated) ? "middle" : this.options.position === "top" ? "bottom" : "top";
							this.ctx.fillText(label, 0, 0);
							this.ctx.restore();
						}
					}, this);

					if (this.options.scaleLabel.display) {
						// Draw the scale label
						this.ctx.textAlign = "center";
						this.ctx.textBaseline = 'middle';
						this.ctx.fillStyle = scaleLabelFontColor; // render in correct colour
						this.ctx.font = scaleLabelFont;

						scaleLabelX = this.left + ((this.right - this.left) / 2); // midpoint of the width
						scaleLabelY = this.options.position === 'bottom' ? this.bottom - (scaleLabelFontSize / 2) : this.top + (scaleLabelFontSize / 2);

						this.ctx.fillText(this.options.scaleLabel.labelString, scaleLabelX, scaleLabelY);
					}

				} else {
					setContextLineSettings = true;
					var xTickStart = this.options.position === "right" ? this.left : this.right - 5;
					var xTickEnd = this.options.position === "right" ? this.left + 5 : this.right;

					helpers.each(this.ticks, function(label, index) {
						// If the callback returned a null or undefined value, do not draw this line
						if (label === undefined || label === null) {
							return;
						}

						var yLineValue = this.getPixelForTick(index); // xvalues for grid lines

						if (this.options.gridLines.display) {
							if (index === (typeof this.zeroLineIndex !== 'undefined' ? this.zeroLineIndex : 0)) {
								// Draw the first index specially
								this.ctx.lineWidth = this.options.gridLines.zeroLineWidth;
								this.ctx.strokeStyle = this.options.gridLines.zeroLineColor;
								setContextLineSettings = true; // reset next time
							} else if (setContextLineSettings) {
								this.ctx.lineWidth = this.options.gridLines.lineWidth;
								this.ctx.strokeStyle = this.options.gridLines.color;
								setContextLineSettings = false;
							}

							yLineValue += helpers.aliasPixel(this.ctx.lineWidth);

							// Draw the label area
							this.ctx.beginPath();

							if (this.options.gridLines.drawTicks) {
								this.ctx.moveTo(xTickStart, yLineValue);
								this.ctx.lineTo(xTickEnd, yLineValue);
							}

							// Draw the chart area
							if (this.options.gridLines.drawOnChartArea) {
								this.ctx.moveTo(chartArea.left, yLineValue);
								this.ctx.lineTo(chartArea.right, yLineValue);
							}

							// Need to stroke in the loop because we are potentially changing line widths & colours
							this.ctx.stroke();
						}

						if (this.options.ticks.display) {
							var xLabelValue;
							var yLabelValue = this.getPixelForTick(index, this.options.gridLines.offsetGridLines); // x values for ticks (need to consider offsetLabel option)

							this.ctx.save();

							if (this.options.position === "left") {
								if (this.options.ticks.mirror) {
									xLabelValue = this.right + this.options.ticks.padding;
									this.ctx.textAlign = "left";
								} else {
									xLabelValue = this.right - this.options.ticks.padding;
									this.ctx.textAlign = "right";
								}
							} else {
								// right side
								if (this.options.ticks.mirror) {
									xLabelValue = this.left - this.options.ticks.padding;
									this.ctx.textAlign = "right";
								} else {
									xLabelValue = this.left + this.options.ticks.padding;
									this.ctx.textAlign = "left";
								}
							}

							this.ctx.translate(xLabelValue, yLabelValue);
							this.ctx.rotate(helpers.toRadians(this.labelRotation) * -1);
							this.ctx.font = tickLabelFont;
							this.ctx.textBaseline = "middle";
							this.ctx.fillText(label, 0, 0);
							this.ctx.restore();
						}
					}, this);

					if (this.options.scaleLabel.display) {
						// Draw the scale label
						scaleLabelX = this.options.position === 'left' ? this.left + (scaleLabelFontSize / 2) : this.right - (scaleLabelFontSize / 2);
						scaleLabelY = this.top + ((this.bottom - this.top) / 2);
						var rotation = this.options.position === 'left' ? -0.5 * Math.PI : 0.5 * Math.PI;

						this.ctx.save();
						this.ctx.translate(scaleLabelX, scaleLabelY);
						this.ctx.rotate(rotation);
						this.ctx.textAlign = "center";
						this.ctx.fillStyle =scaleLabelFontColor; // render in correct colour
						this.ctx.font = scaleLabelFont;
						this.ctx.textBaseline = 'middle';
						this.ctx.fillText(this.options.scaleLabel.labelString, 0, 0);
						this.ctx.restore();
					}
				}

				// Draw the line at the edge of the axis
				this.ctx.lineWidth = this.options.gridLines.lineWidth;
				this.ctx.strokeStyle = this.options.gridLines.color;
				var x1 = this.left,
					x2 = this.right,
					y1 = this.top,
					y2 = this.bottom;

				if (this.isHorizontal()) {
					y1 = y2 = this.options.position === 'top' ? this.bottom : this.top;
					y1 += helpers.aliasPixel(this.ctx.lineWidth);
					y2 += helpers.aliasPixel(this.ctx.lineWidth);
				} else {
					x1 = x2 = this.options.position === 'left' ? this.right : this.left;
					x1 += helpers.aliasPixel(this.ctx.lineWidth);
					x2 += helpers.aliasPixel(this.ctx.lineWidth);
				}

				this.ctx.beginPath();
				this.ctx.moveTo(x1, y1);
				this.ctx.lineTo(x2, y2);
				this.ctx.stroke();
			}
		}
	});
};

},{}],30:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.scaleService = {
		// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
		// use the new chart options to grab the correct scale
		constructors: {},
		// Use a registration function so that we can move to an ES6 map when we no longer need to support
		// old browsers

		// Scale config defaults
		defaults: {},
		registerScaleType: function(type, scaleConstructor, defaults) {
			this.constructors[type] = scaleConstructor;
			this.defaults[type] = helpers.clone(defaults);
		},
		getScaleConstructor: function(type) {
			return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
		},
		getScaleDefaults: function(type) {
			// Return the scale defaults merged with the global settings so that we always use the latest ones
			return this.defaults.hasOwnProperty(type) ? helpers.scaleMerge(Chart.defaults.scale, this.defaults[type]) : {};
		},
		addScalesToLayout: function(chartInstance) {
			// Adds each scale to the chart.boxes array to be sized accordingly
			helpers.each(chartInstance.scales, function(scale) {
				Chart.layoutService.addBox(chartInstance, scale);
			});
		}
	};
};
},{}],31:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.title = {
		display: false,
		position: 'top',
		fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)

		fontStyle: 'bold',
		padding: 10,

		// actual title
		text: ''
	};

	Chart.Title = Chart.Element.extend({

		initialize: function(config) {
			helpers.extend(this, config);
			this.options = helpers.configMerge(Chart.defaults.global.title, config.options);

			// Contains hit boxes for each dataset (in dataset order)
			this.legendHitBoxes = [];
		},

		// These methods are ordered by lifecyle. Utilities then follow.

		beforeUpdate: helpers.noop,
		update: function(maxWidth, maxHeight, margins) {

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			this.beforeUpdate();

			// Absorb the master measurements
			this.maxWidth = maxWidth;
			this.maxHeight = maxHeight;
			this.margins = margins;

			// Dimensions
			this.beforeSetDimensions();
			this.setDimensions();
			this.afterSetDimensions();
			// Labels
			this.beforeBuildLabels();
			this.buildLabels();
			this.afterBuildLabels();

			// Fit
			this.beforeFit();
			this.fit();
			this.afterFit();
			//
			this.afterUpdate();

			return this.minSize;

		},
		afterUpdate: helpers.noop,

		//

		beforeSetDimensions: helpers.noop,
		setDimensions: function() {
			// Set the unconstrained dimension before label rotation
			if (this.isHorizontal()) {
				// Reset position before calculating rotation
				this.width = this.maxWidth;
				this.left = 0;
				this.right = this.width;
			} else {
				this.height = this.maxHeight;

				// Reset position before calculating rotation
				this.top = 0;
				this.bottom = this.height;
			}

			// Reset padding
			this.paddingLeft = 0;
			this.paddingTop = 0;
			this.paddingRight = 0;
			this.paddingBottom = 0;

			// Reset minSize
			this.minSize = {
				width: 0,
				height: 0
			};
		},
		afterSetDimensions: helpers.noop,

		//

		beforeBuildLabels: helpers.noop,
		buildLabels: helpers.noop,
		afterBuildLabels: helpers.noop,

		//

		beforeFit: helpers.noop,
		fit: function() {

			var ctx = this.ctx;
			var fontSize = helpers.getValueOrDefault(this.options.fontSize, Chart.defaults.global.defaultFontSize);
			var fontStyle = helpers.getValueOrDefault(this.options.fontStyle, Chart.defaults.global.defaultFontStyle);
			var fontFamily = helpers.getValueOrDefault(this.options.fontFamily, Chart.defaults.global.defaultFontFamily);
			var titleFont = helpers.fontString(fontSize, fontStyle, fontFamily);

			// Width
			if (this.isHorizontal()) {
				this.minSize.width = this.maxWidth; // fill all the width
			} else {
				this.minSize.width = 0;
			}

			// height
			if (this.isHorizontal()) {
				this.minSize.height = 0;
			} else {
				this.minSize.height = this.maxHeight; // fill all the height
			}

			// Increase sizes here
			if (this.isHorizontal()) {

				// Title
				if (this.options.display) {
					this.minSize.height += fontSize + (this.options.padding * 2);
				}
			} else {
				if (this.options.display) {
					this.minSize.width += fontSize + (this.options.padding * 2);
				}
			}

			this.width = this.minSize.width;
			this.height = this.minSize.height;

		},
		afterFit: helpers.noop,

		// Shared Methods
		isHorizontal: function() {
			return this.options.position === "top" || this.options.position === "bottom";
		},

		// Actualy draw the title block on the canvas
		draw: function() {
			if (this.options.display) {
				var ctx = this.ctx;
				var titleX, titleY;

				var fontColor = helpers.getValueOrDefault(this.options.fontColor, Chart.defaults.global.defaultFontColor);
				var fontSize = helpers.getValueOrDefault(this.options.fontSize, Chart.defaults.global.defaultFontSize);
				var fontStyle = helpers.getValueOrDefault(this.options.fontStyle, Chart.defaults.global.defaultFontStyle);
				var fontFamily = helpers.getValueOrDefault(this.options.fontFamily, Chart.defaults.global.defaultFontFamily);
				var titleFont = helpers.fontString(fontSize, fontStyle, fontFamily);

				ctx.fillStyle = fontColor; // render in correct colour
				ctx.font = titleFont;

				// Horizontal
				if (this.isHorizontal()) {
					// Title
					ctx.textAlign = "center";
					ctx.textBaseline = 'middle';

					titleX = this.left + ((this.right - this.left) / 2); // midpoint of the width
					titleY = this.top + ((this.bottom - this.top) / 2); // midpoint of the height

					ctx.fillText(this.options.text, titleX, titleY);
				} else {

					// Title
					titleX = this.options.position === 'left' ? this.left + (fontSize / 2) : this.right - (fontSize / 2);
					titleY = this.top + ((this.bottom - this.top) / 2);
					var rotation = this.options.position === 'left' ? -0.5 * Math.PI : 0.5 * Math.PI;

					ctx.save();
					ctx.translate(titleX, titleY);
					ctx.rotate(rotation);
					ctx.textAlign = "center";
					ctx.textBaseline = 'middle';
					ctx.fillText(this.options.text, 0, 0);
					ctx.restore();
				}
			}
		}
	});
};
},{}],32:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.tooltips = {
		enabled: true,
		custom: null,
		mode: 'single',
		backgroundColor: "rgba(0,0,0,0.8)",
		titleFontStyle: "bold",
		titleSpacing: 2,
		titleMarginBottom: 6,
		titleColor: "#fff",
		titleAlign: "left",
		bodySpacing: 2,
		bodyColor: "#fff",
		bodyAlign: "left",
		footerFontStyle: "bold",
		footerSpacing: 2,
		footerMarginTop: 6,
		footerColor: "#fff",
		footerAlign: "left",
		yPadding: 6,
		xPadding: 6,
		yAlign : 'center',
		xAlign : 'center',
		caretSize: 5,
		cornerRadius: 6,
		multiKeyBackground: '#fff',
		callbacks: {
			// Args are: (tooltipItems, data)
			beforeTitle: helpers.noop,
			title: function(tooltipItems, data) {
				// Pick first xLabel for now
				var title = '';

				if (tooltipItems.length > 0) {
					if (tooltipItems[0].xLabel) {
						title = tooltipItems[0].xLabel;
					} else if (data.labels.length > 0 && tooltipItems[0].index < data.labels.length) {
						title = data.labels[tooltipItems[0].index];
					}
				}

				return title;
			},
			afterTitle: helpers.noop,

			// Args are: (tooltipItems, data)
			beforeBody: helpers.noop,

			// Args are: (tooltipItem, data)
			beforeLabel: helpers.noop,
			label: function(tooltipItem, data) {
				var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
				return datasetLabel + ': ' + tooltipItem.yLabel;
			},
			afterLabel: helpers.noop,

			// Args are: (tooltipItems, data)
			afterBody: helpers.noop,

			// Args are: (tooltipItems, data)
			beforeFooter: helpers.noop,
			footer: helpers.noop,
			afterFooter: helpers.noop
		}
	};

	// Helper to push or concat based on if the 2nd parameter is an array or not
	function pushOrConcat(base, toPush) {
		if (toPush) {
			if (helpers.isArray(toPush)) {
				base = base.concat(toPush);
			} else {
				base.push(toPush);
			}
		}

		return base;
	}

	Chart.Tooltip = Chart.Element.extend({
		initialize: function() {
			var options = this._options;
			helpers.extend(this, {
				_model: {
					// Positioning
					xPadding: options.tooltips.xPadding,
					yPadding: options.tooltips.yPadding,
					xAlign : options.tooltips.yAlign,
					yAlign : options.tooltips.xAlign,

					// Body
					bodyColor: options.tooltips.bodyColor,
					_bodyFontFamily: helpers.getValueOrDefault(options.tooltips.bodyFontFamily, Chart.defaults.global.defaultFontFamily),
					_bodyFontStyle: helpers.getValueOrDefault(options.tooltips.bodyFontStyle, Chart.defaults.global.defaultFontStyle),
					_bodyAlign: options.tooltips.bodyAlign,
					bodyFontSize: helpers.getValueOrDefault(options.tooltips.bodyFontSize, Chart.defaults.global.defaultFontSize),
					bodySpacing: options.tooltips.bodySpacing,

					// Title
					titleColor: options.tooltips.titleColor,
					_titleFontFamily: helpers.getValueOrDefault(options.tooltips.titleFontFamily, Chart.defaults.global.defaultFontFamily),
					_titleFontStyle: helpers.getValueOrDefault(options.tooltips.titleFontStyle, Chart.defaults.global.defaultFontStyle),
					titleFontSize: helpers.getValueOrDefault(options.tooltips.titleFontSize, Chart.defaults.global.defaultFontSize),
					_titleAlign: options.tooltips.titleAlign,
					titleSpacing: options.tooltips.titleSpacing,
					titleMarginBottom: options.tooltips.titleMarginBottom,

					// Footer
					footerColor: options.tooltips.footerColor,
					_footerFontFamily: helpers.getValueOrDefault(options.tooltips.footerFontFamily, Chart.defaults.global.defaultFontFamily),
					_footerFontStyle: helpers.getValueOrDefault(options.tooltips.footerFontStyle, Chart.defaults.global.defaultFontStyle),
					footerFontSize: helpers.getValueOrDefault(options.tooltips.footerFontSize, Chart.defaults.global.defaultFontSize),
					_footerAlign: options.tooltips.footerAlign,
					footerSpacing: options.tooltips.footerSpacing,
					footerMarginTop: options.tooltips.footerMarginTop,

					// Appearance
					caretSize: options.tooltips.caretSize,
					cornerRadius: options.tooltips.cornerRadius,
					backgroundColor: options.tooltips.backgroundColor,
					opacity: 0,
					legendColorBackground: options.tooltips.multiKeyBackground
				}
			});
		},

		// Get the title
		// Args are: (tooltipItem, data)
		getTitle: function() {
			var beforeTitle = this._options.tooltips.callbacks.beforeTitle.apply(this, arguments),
				title = this._options.tooltips.callbacks.title.apply(this, arguments),
				afterTitle = this._options.tooltips.callbacks.afterTitle.apply(this, arguments);

			var lines = [];
			lines = pushOrConcat(lines, beforeTitle);
			lines = pushOrConcat(lines, title);
			lines = pushOrConcat(lines, afterTitle);

			return lines;
		},

		// Args are: (tooltipItem, data)
		getBeforeBody: function() {
			var lines = this._options.tooltips.callbacks.beforeBody.apply(this, arguments);
			return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
		},

		// Args are: (tooltipItem, data)
		getBody: function(tooltipItems, data) {
			var lines = [];

			helpers.each(tooltipItems, function(bodyItem) {
				helpers.pushAllIfDefined(this._options.tooltips.callbacks.beforeLabel.call(this, bodyItem, data), lines);
				helpers.pushAllIfDefined(this._options.tooltips.callbacks.label.call(this, bodyItem, data), lines);
				helpers.pushAllIfDefined(this._options.tooltips.callbacks.afterLabel.call(this, bodyItem, data), lines);
			}, this);

			return lines;
		},

		// Args are: (tooltipItem, data)
		getAfterBody: function() {
			var lines = this._options.tooltips.callbacks.afterBody.apply(this, arguments);
			return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
		},

		// Get the footer and beforeFooter and afterFooter lines
		// Args are: (tooltipItem, data)
		getFooter: function() {
			var beforeFooter = this._options.tooltips.callbacks.beforeFooter.apply(this, arguments);
			var footer = this._options.tooltips.callbacks.footer.apply(this, arguments);
			var afterFooter = this._options.tooltips.callbacks.afterFooter.apply(this, arguments);

			var lines = [];
			lines = pushOrConcat(lines, beforeFooter);
			lines = pushOrConcat(lines, footer);
			lines = pushOrConcat(lines, afterFooter);

			return lines;
		},

		getAveragePosition: function(elements) {

			if (!elements.length) {
				return false;
			}

			var xPositions = [];
			var yPositions = [];

			helpers.each(elements, function(el) {
				if (el) {
					var pos = el.tooltipPosition();
					xPositions.push(pos.x);
					yPositions.push(pos.y);
				}
			});

			var x = 0,
				y = 0;
			for (var i = 0; i < xPositions.length; i++) {
				x += xPositions[i];
				y += yPositions[i];
			}

			return {
				x: Math.round(x / xPositions.length),
				y: Math.round(y / xPositions.length)
			};

		},

		update: function(changed) {
			if (this._active.length) {
				this._model.opacity = 1;

				var element = this._active[0],
					labelColors = [],
					tooltipPosition;

				var tooltipItems = [];

				if (this._options.tooltips.mode === 'single') {
					var yScale = element._yScale || element._scale; // handle radar || polarArea charts
					tooltipItems.push({
						xLabel: element._xScale ? element._xScale.getLabelForIndex(element._index, element._datasetIndex) : '',
						yLabel: yScale ? yScale.getLabelForIndex(element._index, element._datasetIndex) : '',
						index: element._index,
						datasetIndex: element._datasetIndex
					});
					tooltipPosition = this.getAveragePosition(this._active);
				} else {
					helpers.each(this._data.datasets, function(dataset, datasetIndex) {
						if (!helpers.isDatasetVisible(dataset)) {
							return;
						}
						var currentElement = dataset.metaData[element._index];
						if (currentElement) {
							var yScale = element._yScale || element._scale; // handle radar || polarArea charts

							tooltipItems.push({
								xLabel: currentElement._xScale ? currentElement._xScale.getLabelForIndex(currentElement._index, currentElement._datasetIndex) : '',
								yLabel: yScale ? yScale.getLabelForIndex(currentElement._index, currentElement._datasetIndex) : '',
								index: element._index,
								datasetIndex: datasetIndex
							});
						}
					}, null, element._yScale.options.stacked);

					helpers.each(this._active, function(active) {
						if (active) {
							labelColors.push({
								borderColor: active._view.borderColor,
								backgroundColor: active._view.backgroundColor
							});
						}
					}, null, element._yScale.options.stacked);

					tooltipPosition = this.getAveragePosition(this._active);
					tooltipPosition.y = this._active[0]._yScale.getPixelForDecimal(0.5);
				}

				// Build the Text Lines
				helpers.extend(this._model, {
					title: this.getTitle(tooltipItems, this._data),
					beforeBody: this.getBeforeBody(tooltipItems, this._data),
					body: this.getBody(tooltipItems, this._data),
					afterBody: this.getAfterBody(tooltipItems, this._data),
					footer: this.getFooter(tooltipItems, this._data)
				});

				helpers.extend(this._model, {
					x: Math.round(tooltipPosition.x),
					y: Math.round(tooltipPosition.y),
					caretPadding: helpers.getValueOrDefault(tooltipPosition.padding, 2),
					labelColors: labelColors
				});

				// We need to determine alignment of
				var tooltipSize = this.getTooltipSize(this._model);
				this.determineAlignment(tooltipSize); // Smart Tooltip placement to stay on the canvas

				helpers.extend(this._model, this.getBackgroundPoint(this._model, tooltipSize));
			} else {
				this._model.opacity = 0;
			}

			if (changed && this._options.tooltips.custom) {
				this._options.tooltips.custom.call(this, this._model);
			}

			return this;
		},
		getTooltipSize: function getTooltipSize(vm) {
			var ctx = this._chart.ctx;

			var size = {
				height: vm.yPadding * 2, // Tooltip Padding
				width: 0
			};
			var combinedBodyLength = vm.body.length + vm.beforeBody.length + vm.afterBody.length;

			size.height += vm.title.length * vm.titleFontSize; // Title Lines
			size.height += (vm.title.length - 1) * vm.titleSpacing; // Title Line Spacing
			size.height += vm.title.length ? vm.titleMarginBottom : 0; // Title's bottom Margin
			size.height += combinedBodyLength * vm.bodyFontSize; // Body Lines
			size.height += combinedBodyLength ? (combinedBodyLength - 1) * vm.bodySpacing : 0; // Body Line Spacing
			size.height += vm.footer.length ? vm.footerMarginTop : 0; // Footer Margin
			size.height += vm.footer.length * (vm.footerFontSize); // Footer Lines
			size.height += vm.footer.length ? (vm.footer.length - 1) * vm.footerSpacing : 0; // Footer Line Spacing

			// Width
			ctx.font = helpers.fontString(vm.titleFontSize, vm._titleFontStyle, vm._titleFontFamily);
			helpers.each(vm.title, function(line) {
				size.width = Math.max(size.width, ctx.measureText(line).width);
			});

			ctx.font = helpers.fontString(vm.bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
			helpers.each(vm.beforeBody.concat(vm.afterBody), function(line) {
				size.width = Math.max(size.width, ctx.measureText(line).width);
			});
			helpers.each(vm.body, function(line) {
				size.width = Math.max(size.width, ctx.measureText(line).width + (this._options.tooltips.mode !== 'single' ? (vm.bodyFontSize + 2) : 0));
			}, this);

			ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);
			helpers.each(vm.footer, function(line) {
				size.width = Math.max(size.width, ctx.measureText(line).width);
			});
			size.width += 2 * vm.xPadding;

			return size;
		},
		determineAlignment: function determineAlignment(size) {
			if (this._model.y < size.height) {
				this._model.yAlign = 'top';
			} else if (this._model.y > (this._chart.height - size.height)) {
				this._model.yAlign = 'bottom';
			}

			var lf, rf; // functions to determine left, right alignment
			var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
			var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
			var _this = this;
			var midX = (this._chartInstance.chartArea.left + this._chartInstance.chartArea.right) / 2;
			var midY = (this._chartInstance.chartArea.top + this._chartInstance.chartArea.bottom) / 2;

			if (this._model.yAlign === 'center') {
				lf = function(x) {
					return x <= midX;
				};
				rf = function(x) {
					return x > midX;
				};
			} else {
				lf = function(x) {
					return x <= (size.width / 2);
				};
				rf = function(x) {
					return x >= (_this._chart.width - (size.width / 2));
				};
			}

			olf = function(x) {
				return x + size.width > _this._chart.width;
			};
			orf = function(x) {
				return x - size.width < 0;
			};
			yf = function(y) {
				return y <= midY ? 'top' : 'bottom';
			};

			if (lf(this._model.x)) {
				this._model.xAlign = 'left';

				// Is tooltip too wide and goes over the right side of the chart.?
				if (olf(this._model.x)) {
					this._model.xAlign = 'center';
					this._model.yAlign = yf(this._model.y);
				}
			} else if (rf(this._model.x)) {
				this._model.xAlign = 'right';

				// Is tooltip too wide and goes outside left edge of canvas?
				if (orf(this._model.x)) {
					this._model.xAlign = 'center';
					this._model.yAlign = yf(this._model.y);
				}
			}
		},
		getBackgroundPoint: function getBackgroundPoint(vm, size) {
			// Background Position
			var pt = {
				x: vm.x,
				y: vm.y
			};

			if (vm.xAlign === 'right') {
				pt.x -= size.width;
			} else if (vm.xAlign === 'center') {
				pt.x -= (size.width / 2);
			}

			if (vm.yAlign === 'top') {
				pt.y += vm.caretPadding + vm.caretSize;
			} else if (vm.yAlign === 'bottom') {
				pt.y -= size.height + vm.caretPadding + vm.caretSize;
			} else {
				pt.y -= (size.height / 2);
			}

			if (vm.yAlign === 'center') {
				if (vm.xAlign === 'left') {
					pt.x += vm.caretPadding + vm.caretSize;
				} else if (vm.xAlign === 'right') {
					pt.x -= vm.caretPadding + vm.caretSize;
				}
			} else {
				if (vm.xAlign === 'left') {
					pt.x -= vm.cornerRadius + vm.caretPadding;
				} else if (vm.xAlign === 'right') {
					pt.x += vm.cornerRadius + vm.caretPadding;
				}
			}

			return pt;
		},
		drawCaret: function drawCaret(tooltipPoint, size, opacity, caretPadding) {
			var vm = this._view;
			var ctx = this._chart.ctx;
			var x1, x2, x3;
			var y1, y2, y3;

			if (vm.yAlign === 'center') {
				// Left or right side
				if (vm.xAlign === 'left') {
					x1 = tooltipPoint.x;
					x2 = x1 - vm.caretSize;
					x3 = x1;
				} else {
					x1 = tooltipPoint.x + size.width;
					x2 = x1 + vm.caretSize;
					x3 = x1;
				}

				y2 = tooltipPoint.y + (size.height / 2);
				y1 = y2 - vm.caretSize;
				y3 = y2 + vm.caretSize;
			} else {
				if (vm.xAlign === 'left') {
					x1 = tooltipPoint.x + vm.cornerRadius;
					x2 = x1 + vm.caretSize;
					x3 = x2 + vm.caretSize;
				} else if (vm.xAlign === 'right') {
					x1 = tooltipPoint.x + size.width - vm.cornerRadius;
					x2 = x1 - vm.caretSize;
					x3 = x2 - vm.caretSize;
				} else {
					x2 = tooltipPoint.x + (size.width / 2);
					x1 = x2 - vm.caretSize;
					x3 = x2 + vm.caretSize;
				}

				if (vm.yAlign === 'top') {
					y1 = tooltipPoint.y;
					y2 = y1 - vm.caretSize;
					y3 = y1;
				} else {
					y1 = tooltipPoint.y + size.height;
					y2 = y1 + vm.caretSize;
					y3 = y1;
				}
			}

			var bgColor = helpers.color(vm.backgroundColor);
			ctx.fillStyle = bgColor.alpha(opacity * bgColor.alpha()).rgbString();
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.lineTo(x3, y3);
			ctx.closePath();
			ctx.fill();
		},
		drawTitle: function drawTitle(pt, vm, ctx, opacity) {
			if (vm.title.length) {
				ctx.textAlign = vm._titleAlign;
				ctx.textBaseline = "top";
				
				var titleColor = helpers.color(vm.titleColor);
				ctx.fillStyle = titleColor.alpha(opacity * titleColor.alpha()).rgbString();
				ctx.font = helpers.fontString(vm.titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

				helpers.each(vm.title, function(title, i) {
					ctx.fillText(title, pt.x, pt.y);
					pt.y += vm.titleFontSize + vm.titleSpacing; // Line Height and spacing

					if (i + 1 === vm.title.length) {
						pt.y += vm.titleMarginBottom - vm.titleSpacing; // If Last, add margin, remove spacing
					}
				});
			}
		},
		drawBody: function drawBody(pt, vm, ctx, opacity) {
			ctx.textAlign = vm._bodyAlign;
			ctx.textBaseline = "top";

			var bodyColor = helpers.color(vm.bodyColor);
			ctx.fillStyle = bodyColor.alpha(opacity * bodyColor.alpha()).rgbString();
			ctx.font = helpers.fontString(vm.bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);

			// Before Body
			helpers.each(vm.beforeBody, function(beforeBody) {
				ctx.fillText(beforeBody, pt.x, pt.y);
				pt.y += vm.bodyFontSize + vm.bodySpacing;
			});

			helpers.each(vm.body, function(body, i) {
				// Draw Legend-like boxes if needed
				if (this._options.tooltips.mode !== 'single') {
					// Fill a white rect so that colours merge nicely if the opacity is < 1
					ctx.fillStyle = helpers.color(vm.legendColorBackground).alpha(opacity).rgbaString();
					ctx.fillRect(pt.x, pt.y, vm.bodyFontSize, vm.bodyFontSize);

					// Border
					ctx.strokeStyle = helpers.color(vm.labelColors[i].borderColor).alpha(opacity).rgbaString();
					ctx.strokeRect(pt.x, pt.y, vm.bodyFontSize, vm.bodyFontSize);

					// Inner square
					ctx.fillStyle = helpers.color(vm.labelColors[i].backgroundColor).alpha(opacity).rgbaString();
					ctx.fillRect(pt.x + 1, pt.y + 1, vm.bodyFontSize - 2, vm.bodyFontSize - 2);

					ctx.fillStyle = helpers.color(vm.bodyColor).alpha(opacity).rgbaString(); // Return fill style for text
				}

				// Body Line
				ctx.fillText(body, pt.x + (this._options.tooltips.mode !== 'single' ? (vm.bodyFontSize + 2) : 0), pt.y);

				pt.y += vm.bodyFontSize + vm.bodySpacing;
			}, this);

			// After Body
			helpers.each(vm.afterBody, function(afterBody) {
				ctx.fillText(afterBody, pt.x, pt.y);
				pt.y += vm.bodyFontSize;
			});

			pt.y -= vm.bodySpacing; // Remove last body spacing
		},
		drawFooter: function drawFooter(pt, vm, ctx, opacity) {
			if (vm.footer.length) {
				pt.y += vm.footerMarginTop;

				ctx.textAlign = vm._footerAlign;
				ctx.textBaseline = "top";
				
				var footerColor = helpers.color(vm.footerColor);
				ctx.fillStyle = footerColor.alpha(opacity * footerColor.alpha()).rgbString();
				ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

				helpers.each(vm.footer, function(footer) {
					ctx.fillText(footer, pt.x, pt.y);
					pt.y += vm.footerFontSize + vm.footerSpacing;
				});
			}
		},
		draw: function draw() {
			var ctx = this._chart.ctx;
			var vm = this._view;

			if (vm.opacity === 0) {
				return;
			}

			var caretPadding = vm.caretPadding;
			var tooltipSize = this.getTooltipSize(vm);
			var pt = {
				x: vm.x,
				y: vm.y
			};

			// IE11/Edge does not like very small opacities, so snap to 0
			var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

			if (this._options.tooltips.enabled) {
				// Draw Background
				var bgColor = helpers.color(vm.backgroundColor);
				ctx.fillStyle = bgColor.alpha(opacity * bgColor.alpha()).rgbString();
				helpers.drawRoundedRectangle(ctx, pt.x, pt.y, tooltipSize.width, tooltipSize.height, vm.cornerRadius);
				ctx.fill();

				// Draw Caret
				this.drawCaret(pt, tooltipSize, opacity, caretPadding);

				// Draw Title, Body, and Footer
				pt.x += vm.xPadding;
				pt.y += vm.yPadding;

				// Titles
				this.drawTitle(pt, vm, ctx, opacity);

				// Body
				this.drawBody(pt, vm, ctx, opacity);

				// Footer
				this.drawFooter(pt, vm, ctx, opacity);
			}
		}
	});
};

},{}],33:[function(require,module,exports){
"use strict";

module.exports = function(Chart, moment) {

  var helpers = Chart.helpers;

  Chart.defaults.global.elements.arc = {
    backgroundColor: Chart.defaults.global.defaultColor,
    borderColor: "#fff",
    borderWidth: 2
  };

  Chart.elements.Arc = Chart.Element.extend({
    inLabelRange: function(mouseX) {
      var vm = this._view;

      if (vm) {
        return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
      } else {
        return false;
      }
    },
    inRange: function(chartX, chartY) {

      var vm = this._view;

      if (vm) {
        var pointRelativePosition = helpers.getAngleFromPoint(vm, {
          x: chartX,
          y: chartY
        });

        //Sanitise angle range
        var startAngle = vm.startAngle;
        var endAngle = vm.endAngle;
        while (endAngle < startAngle) {
          endAngle += 2.0 * Math.PI;
        }
        while (pointRelativePosition.angle > endAngle) {
          pointRelativePosition.angle -= 2.0 * Math.PI;
        }
        while (pointRelativePosition.angle < startAngle) {
          pointRelativePosition.angle += 2.0 * Math.PI;
        }

        //Check if within the range of the open/close angle
        var betweenAngles = (pointRelativePosition.angle >= startAngle && pointRelativePosition.angle <= endAngle),
          withinRadius = (pointRelativePosition.distance >= vm.innerRadius && pointRelativePosition.distance <= vm.outerRadius);

        return (betweenAngles && withinRadius);
      } else {
        return false;
      }
    },
    tooltipPosition: function() {
      var vm = this._view;

      var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2),
        rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
      return {
        x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
        y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
      };
    },
    draw: function() {

      var ctx = this._chart.ctx;
      var vm = this._view;

      ctx.beginPath();

      ctx.arc(vm.x, vm.y, vm.outerRadius, vm.startAngle, vm.endAngle);

      ctx.arc(vm.x, vm.y, vm.innerRadius, vm.endAngle, vm.startAngle, true);

      ctx.closePath();
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = vm.borderWidth;

      ctx.fillStyle = vm.backgroundColor;

      ctx.fill();
      ctx.lineJoin = 'bevel';

      if (vm.borderWidth) {
        ctx.stroke();
      }
    }
  });
};

},{}],34:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.elements.line = {
		tension: 0.4,
		backgroundColor: Chart.defaults.global.defaultColor,
		borderWidth: 3,
		borderColor: Chart.defaults.global.defaultColor,
		borderCapStyle: 'butt',
		borderDash: [],
		borderDashOffset: 0.0,
		borderJoinStyle: 'miter',
		fill: true // do we fill in the area between the line and its base axis
	};

	Chart.elements.Line = Chart.Element.extend({
		lineToNextPoint: function(previousPoint, point, nextPoint, skipHandler, previousSkipHandler) {
			var ctx = this._chart.ctx;

			if (point._view.skip) {
				skipHandler.call(this, previousPoint, point, nextPoint);
			} else if (previousPoint._view.skip) {
				previousSkipHandler.call(this, previousPoint, point, nextPoint);
			} else if (point._view.tension === 0) {
				ctx.lineTo(point._view.x, point._view.y);
			} else {
				// Line between points
				ctx.bezierCurveTo(
					previousPoint._view.controlPointNextX,
					previousPoint._view.controlPointNextY,
					point._view.controlPointPreviousX,
					point._view.controlPointPreviousY,
					point._view.x,
					point._view.y
				);
			}
		},

		draw: function() {
			var _this = this;

			var vm = this._view;
			var ctx = this._chart.ctx;
			var first = this._children[0];
			var last = this._children[this._children.length - 1];

			function loopBackToStart(drawLineToCenter) {
				if (!first._view.skip && !last._view.skip) {
					// Draw a bezier line from last to first
					ctx.bezierCurveTo(
						last._view.controlPointNextX,
						last._view.controlPointNextY,
						first._view.controlPointPreviousX,
						first._view.controlPointPreviousY,
						first._view.x,
						first._view.y
					);
				} else if (drawLineToCenter) {
					// Go to center
					ctx.lineTo(_this._view.scaleZero.x, _this._view.scaleZero.y);
				}
			}

			ctx.save();

			// If we had points and want to fill this line, do so.
			if (this._children.length > 0 && vm.fill) {
				// Draw the background first (so the border is always on top)
				ctx.beginPath();

				helpers.each(this._children, function(point, index) {
					var previous = helpers.previousItem(this._children, index);
					var next = helpers.nextItem(this._children, index);

					// First point moves to it's starting position no matter what
					if (index === 0) {
						if (this._loop) {
							ctx.moveTo(vm.scaleZero.x, vm.scaleZero.y);
						} else {
							ctx.moveTo(point._view.x, vm.scaleZero);
						}

						if (point._view.skip) {
							if (!this._loop) {
								ctx.moveTo(next._view.x, this._view.scaleZero);
							}
						} else {
							ctx.lineTo(point._view.x, point._view.y);
						}
					} else {
						this.lineToNextPoint(previous, point, next, function(previousPoint, point, nextPoint) {
							if (this._loop) {
								// Go to center
								ctx.lineTo(this._view.scaleZero.x, this._view.scaleZero.y);
							} else {
								ctx.lineTo(previousPoint._view.x, this._view.scaleZero);
								ctx.moveTo(nextPoint._view.x, this._view.scaleZero);
							}
						}, function(previousPoint, point) {
							// If we skipped the last point, draw a line to ourselves so that the fill is nice
							ctx.lineTo(point._view.x, point._view.y);
						});
					}
				}, this);

				// For radial scales, loop back around to the first point
				if (this._loop) {
					loopBackToStart(true);
				} else {
					//Round off the line by going to the base of the chart, back to the start, then fill.
					ctx.lineTo(this._children[this._children.length - 1]._view.x, vm.scaleZero);
					ctx.lineTo(this._children[0]._view.x, vm.scaleZero);
				}

				ctx.fillStyle = vm.backgroundColor || Chart.defaults.global.defaultColor;
				ctx.closePath();
				ctx.fill();
			}

			// Now draw the line between all the points with any borders
			ctx.lineCap = vm.borderCapStyle || Chart.defaults.global.elements.line.borderCapStyle;

			// IE 9 and 10 do not support line dash
			if (ctx.setLineDash) {
				ctx.setLineDash(vm.borderDash || Chart.defaults.global.elements.line.borderDash);
			}

			ctx.lineDashOffset = vm.borderDashOffset || Chart.defaults.global.elements.line.borderDashOffset;
			ctx.lineJoin = vm.borderJoinStyle || Chart.defaults.global.elements.line.borderJoinStyle;
			ctx.lineWidth = vm.borderWidth || Chart.defaults.global.elements.line.borderWidth;
			ctx.strokeStyle = vm.borderColor || Chart.defaults.global.defaultColor;
			ctx.beginPath();

			helpers.each(this._children, function(point, index) {
				var previous = helpers.previousItem(this._children, index);
				var next = helpers.nextItem(this._children, index);

				if (index === 0) {
					ctx.moveTo(point._view.x, point._view.y);
				} else {
					this.lineToNextPoint(previous, point, next, function(previousPoint, point, nextPoint) {
						ctx.moveTo(nextPoint._view.x, nextPoint._view.y);
					}, function(previousPoint, point) {
						// If we skipped the last point, move up to our point preventing a line from being drawn
						ctx.moveTo(point._view.x, point._view.y);
					});
				}
			}, this);

			if (this._loop && this._children.length > 0) {
				loopBackToStart();
			}

			ctx.stroke();
			ctx.restore();
		}
	});
};
},{}],35:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.elements.point = {
		radius: 3,
		pointStyle: 'circle',
		backgroundColor: Chart.defaults.global.defaultColor,
		borderWidth: 1,
		borderColor: Chart.defaults.global.defaultColor,
		// Hover
		hitRadius: 1,
		hoverRadius: 4,
		hoverBorderWidth: 1
	};


	Chart.elements.Point = Chart.Element.extend({
		inRange: function(mouseX, mouseY) {
			var vm = this._view;

			if (vm) {
				var hoverRange = vm.hitRadius + vm.radius;
				return ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(hoverRange, 2));
			} else {
				return false;
			}
		},
		inLabelRange: function(mouseX) {
			var vm = this._view;

			if (vm) {
				return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hitRadius, 2));
			} else {
				return false;
			}
		},
		tooltipPosition: function() {
			var vm = this._view;
			return {
				x: vm.x,
				y: vm.y,
				padding: vm.radius + vm.borderWidth
			};
		},
		draw: function() {

			var vm = this._view;
			var ctx = this._chart.ctx;


			if (vm.skip) {
				return;
			}

			if (typeof vm.pointStyle === 'object' && ((vm.pointStyle.toString() === '[object HTMLImageElement]') || (vm.pointStyle.toString() === '[object HTMLCanvasElement]'))) {
				ctx.drawImage(vm.pointStyle, vm.x - vm.pointStyle.width / 2, vm.y - vm.pointStyle.height / 2);
				return;
			}

			if (!isNaN(vm.radius) && vm.radius > 0) {

				ctx.strokeStyle = vm.borderColor || Chart.defaults.global.defaultColor;
				ctx.lineWidth = helpers.getValueOrDefault(vm.borderWidth, Chart.defaults.global.elements.point.borderWidth);

				ctx.fillStyle = vm.backgroundColor || Chart.defaults.global.defaultColor;

				var radius = vm.radius;

				var xOffset;
				var yOffset;

				switch (vm.pointStyle) {
					// Default includes circle
					default: ctx.beginPath();
					ctx.arc(vm.x, vm.y, radius, 0, Math.PI * 2);
					ctx.closePath();
					ctx.fill();
					break;
					case 'triangle':
							ctx.beginPath();
						var edgeLength = 3 * radius / Math.sqrt(3);
						var height = edgeLength * Math.sqrt(3) / 2;
						ctx.moveTo(vm.x - edgeLength / 2, vm.y + height / 3);
						ctx.lineTo(vm.x + edgeLength / 2, vm.y + height / 3);
						ctx.lineTo(vm.x, vm.y - 2 * height / 3);
						ctx.closePath();
						ctx.fill();
						break;
					case 'rect':
							ctx.fillRect(vm.x - 1 / Math.SQRT2 * radius, vm.y - 1 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius);
						ctx.strokeRect(vm.x - 1 / Math.SQRT2 * radius, vm.y - 1 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius);
						break;
					case 'rectRot':
							ctx.translate(vm.x, vm.y);
						ctx.rotate(Math.PI / 4);
						ctx.fillRect(-1 / Math.SQRT2 * radius, -1 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius);
						ctx.strokeRect(-1 / Math.SQRT2 * radius, -1 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius);
						ctx.setTransform(1, 0, 0, 1, 0, 0);
						break;
					case 'cross':
							ctx.beginPath();
						ctx.moveTo(vm.x, vm.y + radius);
						ctx.lineTo(vm.x, vm.y - radius);
						ctx.moveTo(vm.x - radius, vm.y);
						ctx.lineTo(vm.x + radius, vm.y);
						ctx.closePath();
						break;
					case 'crossRot':
							ctx.beginPath();
						xOffset = Math.cos(Math.PI / 4) * radius;
						yOffset = Math.sin(Math.PI / 4) * radius;
						ctx.moveTo(vm.x - xOffset, vm.y - yOffset);
						ctx.lineTo(vm.x + xOffset, vm.y + yOffset);
						ctx.moveTo(vm.x - xOffset, vm.y + yOffset);
						ctx.lineTo(vm.x + xOffset, vm.y - yOffset);
						ctx.closePath();
						break;
					case 'star':
							ctx.beginPath();
						ctx.moveTo(vm.x, vm.y + radius);
						ctx.lineTo(vm.x, vm.y - radius);
						ctx.moveTo(vm.x - radius, vm.y);
						ctx.lineTo(vm.x + radius, vm.y);
						xOffset = Math.cos(Math.PI / 4) * radius;
						yOffset = Math.sin(Math.PI / 4) * radius;
						ctx.moveTo(vm.x - xOffset, vm.y - yOffset);
						ctx.lineTo(vm.x + xOffset, vm.y + yOffset);
						ctx.moveTo(vm.x - xOffset, vm.y + yOffset);
						ctx.lineTo(vm.x + xOffset, vm.y - yOffset);
						ctx.closePath();
						break;
					case 'line':
							ctx.beginPath();
						ctx.moveTo(vm.x - radius, vm.y);
						ctx.lineTo(vm.x + radius, vm.y);
						ctx.closePath();
						break;
					case 'dash':
							ctx.beginPath();
						ctx.moveTo(vm.x, vm.y);
						ctx.lineTo(vm.x + radius, vm.y);
						ctx.closePath();
						break;
				}

				ctx.stroke();
			}
		}
	});
};
},{}],36:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.elements.rectangle = {
		backgroundColor: Chart.defaults.global.defaultColor,
		borderWidth: 0,
		borderColor: Chart.defaults.global.defaultColor,
		borderSkipped: 'bottom'
	};

	Chart.elements.Rectangle = Chart.Element.extend({
		draw: function() {

			var ctx = this._chart.ctx;
			var vm = this._view;

			var halfWidth = vm.width / 2,
				leftX = vm.x - halfWidth,
				rightX = vm.x + halfWidth,
				top = vm.base - (vm.base - vm.y),
				halfStroke = vm.borderWidth / 2;

			// Canvas doesn't allow us to stroke inside the width so we can
			// adjust the sizes to fit if we're setting a stroke on the line
			if (vm.borderWidth) {
				leftX += halfStroke;
				rightX -= halfStroke;
				top += halfStroke;
			}

			ctx.beginPath();

			ctx.fillStyle = vm.backgroundColor;
			ctx.strokeStyle = vm.borderColor;
			ctx.lineWidth = vm.borderWidth;

			// Corner points, from bottom-left to bottom-right clockwise
			// | 1 2 |
			// | 0 3 |
			var corners = [
				[leftX, vm.base],
				[leftX, top],
				[rightX, top],
				[rightX, vm.base]
			];

			// Find first (starting) corner with fallback to 'bottom' 
			var borders = ['bottom', 'left', 'top', 'right'];
			var startCorner = borders.indexOf(vm.borderSkipped, 0);
			if (startCorner === -1)
				startCorner = 0;

			function cornerAt(index) {
				return corners[(startCorner + index) % 4];
			}

			// Draw rectangle from 'startCorner'
			ctx.moveTo.apply(ctx, cornerAt(0));
			for (var i = 1; i < 4; i++)
				ctx.lineTo.apply(ctx, cornerAt(i));

			ctx.fill();
			if (vm.borderWidth) {
				ctx.stroke();
			}
		},
		height: function() {
			var vm = this._view;
			return vm.base - vm.y;
		},
		inRange: function(mouseX, mouseY) {
			var vm = this._view;
			var inRange = false;

			if (vm) {
				if (vm.y < vm.base) {
					inRange = (mouseX >= vm.x - vm.width / 2 && mouseX <= vm.x + vm.width / 2) && (mouseY >= vm.y && mouseY <= vm.base);
				} else {
					inRange = (mouseX >= vm.x - vm.width / 2 && mouseX <= vm.x + vm.width / 2) && (mouseY >= vm.base && mouseY <= vm.y);
				}
			}

			return inRange;
		},
		inLabelRange: function(mouseX) {
			var vm = this._view;

			if (vm) {
				return (mouseX >= vm.x - vm.width / 2 && mouseX <= vm.x + vm.width / 2);
			} else {
				return false;
			}
		},
		tooltipPosition: function() {
			var vm = this._view;
			return {
				x: vm.x,
				y: vm.y
			};
		}
	});

};
},{}],37:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	// Default config for a category scale
	var defaultConfig = {
		position: "bottom"
	};

	var DatasetScale = Chart.Scale.extend({
		buildTicks: function(index) {
			this.startIndex = 0;
			this.endIndex = this.chart.data.labels.length;
			var findIndex;

			if (this.options.ticks.min !== undefined) {
				// user specified min value
				findIndex = helpers.indexOf(this.chart.data.labels, this.options.ticks.min);
				this.startIndex = findIndex !== -1 ? findIndex : this.startIndex;
			}

			if (this.options.ticks.max !== undefined) {
				// user specified max value
				findIndex = helpers.indexOf(this.chart.data.labels, this.options.ticks.max);
				this.endIndex = findIndex !== -1 ? findIndex : this.endIndex;
			}

			// If we are viewing some subset of labels, slice the original array
			this.ticks = (this.startIndex === 0 && this.endIndex === this.chart.data.labels.length) ? this.chart.data.labels : this.chart.data.labels.slice(this.startIndex, this.endIndex + 1);
		},

		getLabelForIndex: function(index, datasetIndex) {
			return this.ticks[index];
		},

		// Used to get data value locations.  Value can either be an index or a numerical value
		getPixelForValue: function(value, index, datasetIndex, includeOffset) {
			// 1 is added because we need the length but we have the indexes
			var offsetAmt = Math.max((this.ticks.length - ((this.options.gridLines.offsetGridLines) ? 0 : 1)), 1);

			if (this.isHorizontal()) {
				var innerWidth = this.width - (this.paddingLeft + this.paddingRight);
				var valueWidth = innerWidth / offsetAmt;
				var widthOffset = (valueWidth * (index - this.startIndex)) + this.paddingLeft;

				if (this.options.gridLines.offsetGridLines && includeOffset) {
					widthOffset += (valueWidth / 2);
				}

				return this.left + Math.round(widthOffset);
			} else {
				var innerHeight = this.height - (this.paddingTop + this.paddingBottom);
				var valueHeight = innerHeight / offsetAmt;
				var heightOffset = (valueHeight * (index - this.startIndex)) + this.paddingTop;

				if (this.options.gridLines.offsetGridLines && includeOffset) {
					heightOffset += (valueHeight / 2);
				}

				return this.top + Math.round(heightOffset);
			}
		},
		getPixelForTick: function(index, includeOffset) {
			return this.getPixelForValue(this.ticks[index], index + this.startIndex, null, includeOffset);
		}
	});

	Chart.scaleService.registerScaleType("category", DatasetScale, defaultConfig);

};
},{}],38:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	var defaultConfig = {
		position: "left",
		ticks: {
			callback: function(tickValue, index, ticks) {
				var delta = ticks[1] - ticks[0];

				// If we have a number like 2.5 as the delta, figure out how many decimal places we need
				if (Math.abs(delta) > 1) {
					if (tickValue !== Math.floor(tickValue)) {
						// not an integer
						delta = tickValue - Math.floor(tickValue);
					}
				}

				var logDelta = helpers.log10(Math.abs(delta));
				var tickString = '';

				if (tickValue !== 0) {
					var numDecimal = -1 * Math.floor(logDelta);
					numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
					tickString = tickValue.toFixed(numDecimal);
				} else {
					tickString = '0'; // never show decimal places for 0
				}

				return tickString;
			}
		}
	};

	var LinearScale = Chart.Scale.extend({
		determineDataLimits: function() {
			// First Calculate the range
			this.min = null;
			this.max = null;

			if (this.options.stacked) {
				var valuesPerType = {};
				var hasPositiveValues = false;
				var hasNegativeValues = false;

				helpers.each(this.chart.data.datasets, function(dataset) {
					if (valuesPerType[dataset.type] === undefined) {
						valuesPerType[dataset.type] = {
							positiveValues: [],
							negativeValues: []
						};
					}

					// Store these per type
					var positiveValues = valuesPerType[dataset.type].positiveValues;
					var negativeValues = valuesPerType[dataset.type].negativeValues;

					if (helpers.isDatasetVisible(dataset) && (this.isHorizontal() ? dataset.xAxisID === this.id : dataset.yAxisID === this.id)) {
						helpers.each(dataset.data, function(rawValue, index) {

							var value = +this.getRightValue(rawValue);
							if (isNaN(value)) {
								return;
							}

							positiveValues[index] = positiveValues[index] || 0;
							negativeValues[index] = negativeValues[index] || 0;

							if (this.options.relativePoints) {
								positiveValues[index] = 100;
							} else {
								if (value < 0) {
									hasNegativeValues = true;
									negativeValues[index] += value;
								} else {
									hasPositiveValues = true;
									positiveValues[index] += value;
								}
							}
						}, this);
					}
				}, this);

				helpers.each(valuesPerType, function(valuesForType) {
					var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
					var minVal = helpers.min(values);
					var maxVal = helpers.max(values);
					this.min = this.min === null ? minVal : Math.min(this.min, minVal);
					this.max = this.max === null ? maxVal : Math.max(this.max, maxVal);
				}, this);

			} else {
				helpers.each(this.chart.data.datasets, function(dataset) {
					if (helpers.isDatasetVisible(dataset) && (this.isHorizontal() ? dataset.xAxisID === this.id : dataset.yAxisID === this.id)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +this.getRightValue(rawValue);
							if (isNaN(value)) {
								return;
							}

							if (this.min === null) {
								this.min = value;
							} else if (value < this.min) {
								this.min = value;
							}

							if (this.max === null) {
								this.max = value;
							} else if (value > this.max) {
								this.max = value;
							}
						}, this);
					}
				}, this);
			}

			// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
			// do nothing since that would make the chart weird. If the user really wants a weird chart
			// axis, they can manually override it
			if (this.options.ticks.beginAtZero) {
				var minSign = helpers.sign(this.min);
				var maxSign = helpers.sign(this.max);

				if (minSign < 0 && maxSign < 0) {
					// move the top up to 0
					this.max = 0;
				} else if (minSign > 0 && maxSign > 0) {
					// move the botttom down to 0
					this.min = 0;
				}
			}

			if (this.options.ticks.min !== undefined) {
				this.min = this.options.ticks.min;
			} else if (this.options.ticks.suggestedMin !== undefined) {
				this.min = Math.min(this.min, this.options.ticks.suggestedMin);
			}

			if (this.options.ticks.max !== undefined) {
				this.max = this.options.ticks.max;
			} else if (this.options.ticks.suggestedMax !== undefined) {
				this.max = Math.max(this.max, this.options.ticks.suggestedMax);
			}

			if (this.min === this.max) {
				this.min--;
				this.max++;
			}
		},
		buildTicks: function() {

			// Then calulate the ticks
			this.ticks = [];

			// Figure out what the max number of ticks we can support it is based on the size of
			// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
			// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
			// the graph

			var maxTicks;

			if (this.isHorizontal()) {
				maxTicks = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.width / 50));
			} else {
				// The factor of 2 used to scale the font size has been experimentally determined.
				var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
				maxTicks = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.height / (2 * tickFontSize)));
			}

			// Make sure we always have at least 2 ticks
			maxTicks = Math.max(2, maxTicks);

			// To get a "nice" value for the tick spacing, we will use the appropriately named
			// "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
			// for details.

			var spacing;
			var fixedStepSizeSet = (this.options.ticks.fixedStepSize && this.options.ticks.fixedStepSize > 0) || (this.options.ticks.stepSize && this.options.ticks.stepSize > 0);
			if (fixedStepSizeSet) {
				spacing = helpers.getValueOrDefault(this.options.ticks.fixedStepSize, this.options.ticks.stepSize);
			} else {
				var niceRange = helpers.niceNum(this.max - this.min, false);
				spacing = helpers.niceNum(niceRange / (maxTicks - 1), true);
			}
			var niceMin = Math.floor(this.min / spacing) * spacing;
			var niceMax = Math.ceil(this.max / spacing) * spacing;
			var numSpaces = (niceMax - niceMin) / spacing;

			// If very close to our rounded value, use it.
			if (helpers.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
				numSpaces = Math.round(numSpaces);
			} else {
				numSpaces = Math.ceil(numSpaces);
			}

			// Put the values into the ticks array
			this.ticks.push(this.options.ticks.min !== undefined ? this.options.ticks.min : niceMin);
			for (var j = 1; j < numSpaces; ++j) {
				this.ticks.push(niceMin + (j * spacing));
			}
			this.ticks.push(this.options.ticks.max !== undefined ? this.options.ticks.max : niceMax);

			if (this.options.position === "left" || this.options.position === "right") {
				// We are in a vertical orientation. The top value is the highest. So reverse the array
				this.ticks.reverse();
			}

			// At this point, we need to update our max and min given the tick values since we have expanded the
			// range of the scale
			this.max = helpers.max(this.ticks);
			this.min = helpers.min(this.ticks);

			if (this.options.ticks.reverse) {
				this.ticks.reverse();

				this.start = this.max;
				this.end = this.min;
			} else {
				this.start = this.min;
				this.end = this.max;
			}
		},
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		convertTicksToLabels: function() {
			this.ticksAsNumbers = this.ticks.slice();
			this.zeroLineIndex = this.ticks.indexOf(0);

			Chart.Scale.prototype.convertTicksToLabels.call(this);
		},
		// Utils
		getPixelForValue: function(value, index, datasetIndex, includeOffset) {
			// This must be called after fit has been run so that
			//      this.left, this.top, this.right, and this.bottom have been defined
			var rightValue = +this.getRightValue(value);
			var pixel;
			var range = this.end - this.start;

			if (this.isHorizontal()) {
				var innerWidth = this.width - (this.paddingLeft + this.paddingRight);
				pixel = this.left + (innerWidth / range * (rightValue - this.start));
				return Math.round(pixel + this.paddingLeft);
			} else {
				var innerHeight = this.height - (this.paddingTop + this.paddingBottom);
				pixel = (this.bottom - this.paddingBottom) - (innerHeight / range * (rightValue - this.start));
				return Math.round(pixel);
			}
		},
		getPixelForTick: function(index, includeOffset) {
			return this.getPixelForValue(this.ticksAsNumbers[index], null, null, includeOffset);
		}
	});
	Chart.scaleService.registerScaleType("linear", LinearScale, defaultConfig);

};
},{}],39:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	var defaultConfig = {
		position: "left",

		// label settings
		ticks: {
			callback: function(value, index, arr) {
				var remain = value / (Math.pow(10, Math.floor(Chart.helpers.log10(value))));

				if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === arr.length - 1) {
					return value.toExponential();
				} else {
					return '';
				}
			}
		}
	};

	var LogarithmicScale = Chart.Scale.extend({
		determineDataLimits: function() {
			// Calculate Range
			this.min = null;
			this.max = null;

			if (this.options.stacked) {
				var valuesPerType = {};

				helpers.each(this.chart.data.datasets, function(dataset) {
					if (helpers.isDatasetVisible(dataset) && (this.isHorizontal() ? dataset.xAxisID === this.id : dataset.yAxisID === this.id)) {
						if (valuesPerType[dataset.type] === undefined) {
							valuesPerType[dataset.type] = [];
						}

						helpers.each(dataset.data, function(rawValue, index) {
							var values = valuesPerType[dataset.type];
							var value = +this.getRightValue(rawValue);
							if (isNaN(value)) {
								return;
							}

							values[index] = values[index] || 0;

							if (this.options.relativePoints) {
								values[index] = 100;
							} else {
								// Don't need to split positive and negative since the log scale can't handle a 0 crossing
								values[index] += value;
							}
						}, this);
					}
				}, this);

				helpers.each(valuesPerType, function(valuesForType) {
					var minVal = helpers.min(valuesForType);
					var maxVal = helpers.max(valuesForType);
					this.min = this.min === null ? minVal : Math.min(this.min, minVal);
					this.max = this.max === null ? maxVal : Math.max(this.max, maxVal);
				}, this);

			} else {
				helpers.each(this.chart.data.datasets, function(dataset) {
					if (helpers.isDatasetVisible(dataset) && (this.isHorizontal() ? dataset.xAxisID === this.id : dataset.yAxisID === this.id)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +this.getRightValue(rawValue);
							if (isNaN(value)) {
								return;
							}

							if (this.min === null) {
								this.min = value;
							} else if (value < this.min) {
								this.min = value;
							}

							if (this.max === null) {
								this.max = value;
							} else if (value > this.max) {
								this.max = value;
							}
						}, this);
					}
				}, this);
			}

			this.min = this.options.ticks.min !== undefined ? this.options.ticks.min : this.min;
			this.max = this.options.ticks.max !== undefined ? this.options.ticks.max : this.max;

			if (this.min === this.max) {
				if (this.min !== 0 && this.min !== null) {
					this.min = Math.pow(10, Math.floor(helpers.log10(this.min)) - 1);
					this.max = Math.pow(10, Math.floor(helpers.log10(this.max)) + 1);
				} else {
					this.min = 1;
					this.max = 10;
				}
			}
		},
		buildTicks: function() {
			// Reset the ticks array. Later on, we will draw a grid line at these positions
			// The array simply contains the numerical value of the spots where ticks will be
			this.ticks = [];

			// Figure out what the max number of ticks we can support it is based on the size of
			// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
			// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
			// the graph

			var tickVal = this.options.ticks.min !== undefined ? this.options.ticks.min : Math.pow(10, Math.floor(helpers.log10(this.min)));

			while (tickVal < this.max) {
				this.ticks.push(tickVal);

				var exp = Math.floor(helpers.log10(tickVal));
				var significand = Math.floor(tickVal / Math.pow(10, exp)) + 1;

				if (significand === 10) {
					significand = 1;
					++exp;
				}

				tickVal = significand * Math.pow(10, exp);
			}

			var lastTick = this.options.ticks.max !== undefined ? this.options.ticks.max : tickVal;
			this.ticks.push(lastTick);

			if (this.options.position === "left" || this.options.position === "right") {
				// We are in a vertical orientation. The top value is the highest. So reverse the array
				this.ticks.reverse();
			}

			// At this point, we need to update our max and min given the tick values since we have expanded the
			// range of the scale
			this.max = helpers.max(this.ticks);
			this.min = helpers.min(this.ticks);

			if (this.options.ticks.reverse) {
				this.ticks.reverse();

				this.start = this.max;
				this.end = this.min;
			} else {
				this.start = this.min;
				this.end = this.max;
			}
		},
		convertTicksToLabels: function() {
			this.tickValues = this.ticks.slice();

			Chart.Scale.prototype.convertTicksToLabels.call(this);
		},
		// Get the correct tooltip label
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		getPixelForTick: function(index, includeOffset) {
			return this.getPixelForValue(this.tickValues[index], null, null, includeOffset);
		},
		getPixelForValue: function(value, index, datasetIndex, includeOffset) {
			var pixel;

			var newVal = +this.getRightValue(value);
			var range = helpers.log10(this.end) - helpers.log10(this.start);

			if (this.isHorizontal()) {

				if (newVal === 0) {
					pixel = this.left + this.paddingLeft;
				} else {
					var innerWidth = this.width - (this.paddingLeft + this.paddingRight);
					pixel = this.left + (innerWidth / range * (helpers.log10(newVal) - helpers.log10(this.start)));
					pixel += this.paddingLeft;
				}
			} else {
				// Bottom - top since pixels increase downard on a screen
				if (newVal === 0) {
					pixel = this.top + this.paddingTop;
				} else {
					var innerHeight = this.height - (this.paddingTop + this.paddingBottom);
					pixel = (this.bottom - this.paddingBottom) - (innerHeight / range * (helpers.log10(newVal) - helpers.log10(this.start)));
				}
			}

			return pixel;
		}

	});
	Chart.scaleService.registerScaleType("logarithmic", LogarithmicScale, defaultConfig);

};
},{}],40:[function(require,module,exports){
"use strict";

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	var defaultConfig = {
		display: true,

		//Boolean - Whether to animate scaling the chart from the centre
		animate: true,
		lineArc: false,
		position: "chartArea",

		angleLines: {
			display: true,
			color: "rgba(0, 0, 0, 0.1)",
			lineWidth: 1
		},

		// label settings
		ticks: {
			//Boolean - Show a backdrop to the scale label
			showLabelBackdrop: true,

			//String - The colour of the label backdrop
			backdropColor: "rgba(255,255,255,0.75)",

			//Number - The backdrop padding above & below the label in pixels
			backdropPaddingY: 2,

			//Number - The backdrop padding to the side of the label in pixels
			backdropPaddingX: 2
		},

		pointLabels: {
			//Number - Point label font size in pixels
			fontSize: 10,

			//Function - Used to convert point labels
			callback: function(label) {
				return label;
			}
		}
	};

	var LinearRadialScale = Chart.Scale.extend({
		getValueCount: function() {
			return this.chart.data.labels.length;
		},
		setDimensions: function() {
			// Set the unconstrained dimension before label rotation
			this.width = this.maxWidth;
			this.height = this.maxHeight;
			this.xCenter = Math.round(this.width / 2);
			this.yCenter = Math.round(this.height / 2);

			var minSize = helpers.min([this.height, this.width]);
			var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
			this.drawingArea = (this.options.display) ? (minSize / 2) - (tickFontSize / 2 + this.options.ticks.backdropPaddingY) : (minSize / 2);
		},
		determineDataLimits: function() {
			this.min = null;
			this.max = null;

			helpers.each(this.chart.data.datasets, function(dataset) {
				if (helpers.isDatasetVisible(dataset)) {
					helpers.each(dataset.data, function(rawValue, index) {
						var value = +this.getRightValue(rawValue);
						if (isNaN(value)) {
							return;
						}

						if (this.min === null) {
							this.min = value;
						} else if (value < this.min) {
							this.min = value;
						}

						if (this.max === null) {
							this.max = value;
						} else if (value > this.max) {
							this.max = value;
						}
					}, this);
				}
			}, this);

			// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
			// do nothing since that would make the chart weird. If the user really wants a weird chart
			// axis, they can manually override it
			if (this.options.ticks.beginAtZero) {
				var minSign = helpers.sign(this.min);
				var maxSign = helpers.sign(this.max);

				if (minSign < 0 && maxSign < 0) {
					// move the top up to 0
					this.max = 0;
				} else if (minSign > 0 && maxSign > 0) {
					// move the botttom down to 0
					this.min = 0;
				}
			}

			if (this.options.ticks.min !== undefined) {
				this.min = this.options.ticks.min;
			} else if (this.options.ticks.suggestedMin !== undefined) {
				this.min = Math.min(this.min, this.options.ticks.suggestedMin);
			}

			if (this.options.ticks.max !== undefined) {
				this.max = this.options.ticks.max;
			} else if (this.options.ticks.suggestedMax !== undefined) {
				this.max = Math.max(this.max, this.options.ticks.suggestedMax);
			}

			if (this.min === this.max) {
				this.min--;
				this.max++;
			}
		},
		buildTicks: function() {


			this.ticks = [];

			// Figure out what the max number of ticks we can support it is based on the size of
			// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
			// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
			// the graph
			var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
			var maxTicks = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * tickFontSize)));
			maxTicks = Math.max(2, maxTicks); // Make sure we always have at least 2 ticks

			// To get a "nice" value for the tick spacing, we will use the appropriately named
			// "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
			// for details.

			var niceRange = helpers.niceNum(this.max - this.min, false);
			var spacing = helpers.niceNum(niceRange / (maxTicks - 1), true);
			var niceMin = Math.floor(this.min / spacing) * spacing;
			var niceMax = Math.ceil(this.max / spacing) * spacing;

			var numSpaces = Math.ceil((niceMax - niceMin) / spacing);

			// Put the values into the ticks array
			this.ticks.push(this.options.ticks.min !== undefined ? this.options.ticks.min : niceMin);
			for (var j = 1; j < numSpaces; ++j) {
				this.ticks.push(niceMin + (j * spacing));
			}
			this.ticks.push(this.options.ticks.max !== undefined ? this.options.ticks.max : niceMax);

			// At this point, we need to update our max and min given the tick values since we have expanded the
			// range of the scale
			this.max = helpers.max(this.ticks);
			this.min = helpers.min(this.ticks);

			if (this.options.ticks.reverse) {
				this.ticks.reverse();

				this.start = this.max;
				this.end = this.min;
			} else {
				this.start = this.min;
				this.end = this.max;
			}

			this.zeroLineIndex = this.ticks.indexOf(0);
		},
		convertTicksToLabels: function() {
			Chart.Scale.prototype.convertTicksToLabels.call(this);

			// Point labels
			this.pointLabels = this.chart.data.labels.map(this.options.pointLabels.callback, this);
		},
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		fit: function() {
			/*
			 * Right, this is really confusing and there is a lot of maths going on here
			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
			 *
			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
			 *
			 * Solution:
			 *
			 * We assume the radius of the polygon is half the size of the canvas at first
			 * at each index we check if the text overlaps.
			 *
			 * Where it does, we store that angle and that index.
			 *
			 * After finding the largest index and angle we calculate how much we need to remove
			 * from the shape radius to move the point inwards by that x.
			 *
			 * We average the left and right distances to get the maximum shape radius that can fit in the box
			 * along with labels.
			 *
			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
			 * on each side, removing that from the size, halving it and adding the left x protrusion width.
			 *
			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
			 * and position it in the most space efficient manner
			 *
			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
			 */

			var pointLabelFontSize = helpers.getValueOrDefault(this.options.pointLabels.fontSize, Chart.defaults.global.defaultFontSize);
			var pointLabeFontStyle = helpers.getValueOrDefault(this.options.pointLabels.fontStyle, Chart.defaults.global.defaultFontStyle);
			var pointLabeFontFamily = helpers.getValueOrDefault(this.options.pointLabels.fontFamily, Chart.defaults.global.defaultFontFamily);
			var pointLabeFont = helpers.fontString(pointLabelFontSize, pointLabeFontStyle, pointLabeFontFamily);

			// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
			// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
			var largestPossibleRadius = helpers.min([(this.height / 2 - pointLabelFontSize - 5), this.width / 2]),
				pointPosition,
				i,
				textWidth,
				halfTextWidth,
				furthestRight = this.width,
				furthestRightIndex,
				furthestRightAngle,
				furthestLeft = 0,
				furthestLeftIndex,
				furthestLeftAngle,
				xProtrusionLeft,
				xProtrusionRight,
				radiusReductionRight,
				radiusReductionLeft,
				maxWidthRadius;
			this.ctx.font = pointLabeFont;

			for (i = 0; i < this.getValueCount(); i++) {
				// 5px to space the text slightly out - similar to what we do in the draw function.
				pointPosition = this.getPointPosition(i, largestPossibleRadius);
				textWidth = this.ctx.measureText(this.pointLabels[i] ? this.pointLabels[i] : '').width + 5;
				if (i === 0 || i === this.getValueCount() / 2) {
					// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
					// of the radar chart, so text will be aligned centrally, so we'll half it and compare
					// w/left and right text sizes
					halfTextWidth = textWidth / 2;
					if (pointPosition.x + halfTextWidth > furthestRight) {
						furthestRight = pointPosition.x + halfTextWidth;
						furthestRightIndex = i;
					}
					if (pointPosition.x - halfTextWidth < furthestLeft) {
						furthestLeft = pointPosition.x - halfTextWidth;
						furthestLeftIndex = i;
					}
				} else if (i < this.getValueCount() / 2) {
					// Less than half the values means we'll left align the text
					if (pointPosition.x + textWidth > furthestRight) {
						furthestRight = pointPosition.x + textWidth;
						furthestRightIndex = i;
					}
				} else if (i > this.getValueCount() / 2) {
					// More than half the values means we'll right align the text
					if (pointPosition.x - textWidth < furthestLeft) {
						furthestLeft = pointPosition.x - textWidth;
						furthestLeftIndex = i;
					}
				}
			}

			xProtrusionLeft = furthestLeft;
			xProtrusionRight = Math.ceil(furthestRight - this.width);

			furthestRightAngle = this.getIndexAngle(furthestRightIndex);
			furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

			radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI / 2);
			radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI / 2);

			// Ensure we actually need to reduce the size of the chart
			radiusReductionRight = (helpers.isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
			radiusReductionLeft = (helpers.isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

			this.drawingArea = Math.round(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2);
			this.setCenterPoint(radiusReductionLeft, radiusReductionRight);
		},
		setCenterPoint: function(leftMovement, rightMovement) {

			var maxRight = this.width - rightMovement - this.drawingArea,
				maxLeft = leftMovement + this.drawingArea;

			this.xCenter = Math.round(((maxLeft + maxRight) / 2) + this.left);
			// Always vertically in the centre as the text height doesn't change
			this.yCenter = Math.round((this.height / 2) + this.top);
		},

		getIndexAngle: function(index) {
			var angleMultiplier = (Math.PI * 2) / this.getValueCount();
			// Start from the top instead of right, so remove a quarter of the circle

			return index * angleMultiplier - (Math.PI / 2);
		},
		getDistanceFromCenterForValue: function(value) {
			if (value === null) {
				return 0; // null always in center
			}

			// Take into account half font size + the yPadding of the top value
			var scalingFactor = this.drawingArea / (this.max - this.min);
			if (this.options.reverse) {
				return (this.max - value) * scalingFactor;
			} else {
				return (value - this.min) * scalingFactor;
			}
		},
		getPointPosition: function(index, distanceFromCenter) {
			var thisAngle = this.getIndexAngle(index);
			return {
				x: Math.round(Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
				y: Math.round(Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
			};
		},
		getPointPositionForValue: function(index, value) {
			return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
		},
		draw: function() {
			if (this.options.display) {
				var ctx = this.ctx;
				helpers.each(this.ticks, function(label, index) {
					// Don't draw a centre value (if it is minimum)
					if (index > 0 || this.options.reverse) {
						var yCenterOffset = this.getDistanceFromCenterForValue(this.ticks[index]);
						var yHeight = this.yCenter - yCenterOffset;

						// Draw circular lines around the scale
						if (this.options.gridLines.display) {
							ctx.strokeStyle = this.options.gridLines.color;
							ctx.lineWidth = this.options.gridLines.lineWidth;

							if (this.options.lineArc) {
								// Draw circular arcs between the points
								ctx.beginPath();
								ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI * 2);
								ctx.closePath();
								ctx.stroke();
							} else {
								// Draw straight lines connecting each index
								ctx.beginPath();
								for (var i = 0; i < this.getValueCount(); i++) {
									var pointPosition = this.getPointPosition(i, this.getDistanceFromCenterForValue(this.ticks[index]));
									if (i === 0) {
										ctx.moveTo(pointPosition.x, pointPosition.y);
									} else {
										ctx.lineTo(pointPosition.x, pointPosition.y);
									}
								}
								ctx.closePath();
								ctx.stroke();
							}
						}

						if (this.options.ticks.display) {
							var tickFontColor = helpers.getValueOrDefault(this.options.ticks.fontColor, Chart.defaults.global.defaultFontColor);
							var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
							var tickFontStyle = helpers.getValueOrDefault(this.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
							var tickFontFamily = helpers.getValueOrDefault(this.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
							var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
							ctx.font = tickLabelFont;

							if (this.options.ticks.showLabelBackdrop) {
								var labelWidth = ctx.measureText(label).width;
								ctx.fillStyle = this.options.ticks.backdropColor;
								ctx.fillRect(
									this.xCenter - labelWidth / 2 - this.options.ticks.backdropPaddingX,
									yHeight - tickFontSize / 2 - this.options.ticks.backdropPaddingY,
									labelWidth + this.options.ticks.backdropPaddingX * 2,
									tickFontSize + this.options.ticks.backdropPaddingY * 2
								);
							}

							ctx.textAlign = 'center';
							ctx.textBaseline = "middle";
							ctx.fillStyle = tickFontColor;
							ctx.fillText(label, this.xCenter, yHeight);
						}
					}
				}, this);

				if (!this.options.lineArc) {
					ctx.lineWidth = this.options.angleLines.lineWidth;
					ctx.strokeStyle = this.options.angleLines.color;

					for (var i = this.getValueCount() - 1; i >= 0; i--) {
						if (this.options.angleLines.display) {
							var outerPosition = this.getPointPosition(i, this.getDistanceFromCenterForValue(this.options.reverse ? this.min : this.max));
							ctx.beginPath();
							ctx.moveTo(this.xCenter, this.yCenter);
							ctx.lineTo(outerPosition.x, outerPosition.y);
							ctx.stroke();
							ctx.closePath();
						}
						// Extra 3px out for some label spacing
						var pointLabelPosition = this.getPointPosition(i, this.getDistanceFromCenterForValue(this.options.reverse ? this.min : this.max) + 5);
						
						var pointLabelFontColor = helpers.getValueOrDefault(this.options.pointLabels.fontColor, Chart.defaults.global.defaultFontColor);
						var pointLabelFontSize = helpers.getValueOrDefault(this.options.pointLabels.fontSize, Chart.defaults.global.defaultFontSize);
						var pointLabeFontStyle = helpers.getValueOrDefault(this.options.pointLabels.fontStyle, Chart.defaults.global.defaultFontStyle);
						var pointLabeFontFamily = helpers.getValueOrDefault(this.options.pointLabels.fontFamily, Chart.defaults.global.defaultFontFamily);
						var pointLabeFont = helpers.fontString(pointLabelFontSize, pointLabeFontStyle, pointLabeFontFamily);

						ctx.font = pointLabeFont;
						ctx.fillStyle = pointLabelFontColor;

						var labelsCount = this.pointLabels.length,
							halfLabelsCount = this.pointLabels.length / 2,
							quarterLabelsCount = halfLabelsCount / 2,
							upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
							exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
						if (i === 0) {
							ctx.textAlign = 'center';
						} else if (i === halfLabelsCount) {
							ctx.textAlign = 'center';
						} else if (i < halfLabelsCount) {
							ctx.textAlign = 'left';
						} else {
							ctx.textAlign = 'right';
						}

						// Set the correct text baseline based on outer positioning
						if (exactQuarter) {
							ctx.textBaseline = 'middle';
						} else if (upperHalf) {
							ctx.textBaseline = 'bottom';
						} else {
							ctx.textBaseline = 'top';
						}

						ctx.fillText(this.pointLabels[i] ? this.pointLabels[i] : '', pointLabelPosition.x, pointLabelPosition.y);
					}
				}
			}
		}
	});
	Chart.scaleService.registerScaleType("radialLinear", LinearRadialScale, defaultConfig);

};
},{}],41:[function(require,module,exports){
/*global window: false */
"use strict";

var moment = require('moment');
moment = typeof(moment) === 'function' ? moment : window.moment;

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var time = {
		units: [{
			name: 'millisecond',
			steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
		}, {
			name: 'second',
			steps: [1, 2, 5, 10, 30]
		}, {
			name: 'minute',
			steps: [1, 2, 5, 10, 30]
		}, {
			name: 'hour',
			steps: [1, 2, 3, 6, 12]
		}, {
			name: 'day',
			steps: [1, 2, 5]
		}, {
			name: 'week',
			maxStep: 4
		}, {
			name: 'month',
			maxStep: 3
		}, {
			name: 'quarter',
			maxStep: 4
		}, {
			name: 'year',
			maxStep: false
		}]
	};

	var defaultConfig = {
		position: "bottom",

		time: {
			parser: false, // false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
			format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
			unit: false, // false == automatic or override with week, month, year, etc.
			round: false, // none, or override with week, month, year, etc.
			displayFormat: false, // DEPRECATED

			// defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
			displayFormats: {
				'millisecond': 'h:mm:ss.SSS a', // 11:20:01.123 AM,
				'second': 'h:mm:ss a', // 11:20:01 AM
				'minute': 'h:mm:ss a', // 11:20:01 AM
				'hour': 'MMM D, hA', // Sept 4, 5PM
				'day': 'll', // Sep 4 2015
				'week': 'll', // Week 46, or maybe "[W]WW - YYYY" ?
				'month': 'MMM YYYY', // Sept 2015
				'quarter': '[Q]Q - YYYY', // Q3
				'year': 'YYYY' // 2015
			}
		},
		ticks: {
			autoSkip: false
		}
	};

	var TimeScale = Chart.Scale.extend({
		initialize: function() {
			if (!moment) {
				throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');
			}

			Chart.Scale.prototype.initialize.call(this);
		},
		getLabelMoment: function(datasetIndex, index) {
			return this.labelMoments[datasetIndex][index];
		},
		determineDataLimits: function() {
			this.labelMoments = [];

			// Only parse these once. If the dataset does not have data as x,y pairs, we will use
			// these
			var scaleLabelMoments = [];
			if (this.chart.data.labels && this.chart.data.labels.length > 0) {
				helpers.each(this.chart.data.labels, function(label, index) {
					var labelMoment = this.parseTime(label);
					if (this.options.time.round) {
						labelMoment.startOf(this.options.time.round);
					}
					scaleLabelMoments.push(labelMoment);
				}, this);

				this.firstTick = moment.min.call(this, scaleLabelMoments);
				this.lastTick = moment.max.call(this, scaleLabelMoments);
			} else {
				this.firstTick = null;
				this.lastTick = null;
			}

			helpers.each(this.chart.data.datasets, function(dataset, datasetIndex) {
				var momentsForDataset = [];

				if (typeof dataset.data[0] === 'object') {
					helpers.each(dataset.data, function(value, index) {
						var labelMoment = this.parseTime(this.getRightValue(value));
						if (this.options.time.round) {
							labelMoment.startOf(this.options.time.round);
						}
						momentsForDataset.push(labelMoment);

						// May have gone outside the scale ranges, make sure we keep the first and last ticks updated
						this.firstTick = this.firstTick !== null ? moment.min(this.firstTick, labelMoment) : labelMoment;
						this.lastTick = this.lastTick !== null ? moment.max(this.lastTick, labelMoment) : labelMoment;
					}, this);
				} else {
					// We have no labels. Use the ones from the scale
					momentsForDataset = scaleLabelMoments;
				}

				this.labelMoments.push(momentsForDataset);
			}, this);

			// Set these after we've done all the data
			if (this.options.time.min) {
				this.firstTick = this.parseTime(this.options.time.min);
			}

			if (this.options.time.max) {
				this.lastTick = this.parseTime(this.options.time.max);
			}

			// We will modify these, so clone for later
			this.firstTick = (this.firstTick || moment()).clone();
			this.lastTick = (this.lastTick || moment()).clone();
		},
		buildTicks: function(index) {

			this.ctx.save();
			var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
			var tickFontStyle = helpers.getValueOrDefault(this.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
			var tickFontFamily = helpers.getValueOrDefault(this.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
			var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
			this.ctx.font = tickLabelFont;

			this.ticks = [];
			this.unitScale = 1; // How much we scale the unit by, ie 2 means 2x unit per step
			this.scaleSizeInUnits = 0; // How large the scale is in the base unit (seconds, minutes, etc)

			// Set unit override if applicable
			if (this.options.time.unit) {
				this.tickUnit = this.options.time.unit || 'day';
				this.displayFormat = this.options.time.displayFormats[this.tickUnit];
				this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, true);
				this.unitScale = helpers.getValueOrDefault(this.options.time.unitStepSize, 1);
			} else {
				// Determine the smallest needed unit of the time
				var innerWidth = this.isHorizontal() ? this.width - (this.paddingLeft + this.paddingRight) : this.height - (this.paddingTop + this.paddingBottom);

				// Crude approximation of what the label length might be
				var tempFirstLabel = this.tickFormatFunction(this.firstTick, 0, []);
				var tickLabelWidth = this.ctx.measureText(tempFirstLabel).width;
				var cosRotation = Math.cos(helpers.toRadians(this.options.ticks.maxRotation));
				var sinRotation = Math.sin(helpers.toRadians(this.options.ticks.maxRotation));
				tickLabelWidth = (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
				var labelCapacity = innerWidth / (tickLabelWidth);

				// Start as small as possible
				this.tickUnit = 'millisecond';
				this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, true);
				this.displayFormat = this.options.time.displayFormats[this.tickUnit];

				var unitDefinitionIndex = 0;
				var unitDefinition = time.units[unitDefinitionIndex];

				// While we aren't ideal and we don't have units left
				while (unitDefinitionIndex < time.units.length) {
					// Can we scale this unit. If `false` we can scale infinitely
					this.unitScale = 1;

					if (helpers.isArray(unitDefinition.steps) && Math.ceil(this.scaleSizeInUnits / labelCapacity) < helpers.max(unitDefinition.steps)) {
						// Use one of the prefedined steps
						for (var idx = 0; idx < unitDefinition.steps.length; ++idx) {
							if (unitDefinition.steps[idx] >= Math.ceil(this.scaleSizeInUnits / labelCapacity)) {
								this.unitScale = helpers.getValueOrDefault(this.options.time.unitStepSize, unitDefinition.steps[idx]);
								break;
							}
						}

						break;
					} else if ((unitDefinition.maxStep === false) || (Math.ceil(this.scaleSizeInUnits / labelCapacity) < unitDefinition.maxStep)) {
						// We have a max step. Scale this unit
						this.unitScale = helpers.getValueOrDefault(this.options.time.unitStepSize, Math.ceil(this.scaleSizeInUnits / labelCapacity));
						break;
					} else {
						// Move to the next unit up
						++unitDefinitionIndex;
						unitDefinition = time.units[unitDefinitionIndex];

						this.tickUnit = unitDefinition.name;
						this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, true);
						this.displayFormat = this.options.time.displayFormats[unitDefinition.name];
					}
				}
			}

			var roundedStart;

			// Only round the first tick if we have no hard minimum
			if (!this.options.time.min) {
				this.firstTick.startOf(this.tickUnit);
				roundedStart = this.firstTick;
			} else {
				roundedStart = this.firstTick.clone().startOf(this.tickUnit);
			}

			// Only round the last tick if we have no hard maximum
			if (!this.options.time.max) {
				this.lastTick.endOf(this.tickUnit);
			}

			this.smallestLabelSeparation = this.width;

			helpers.each(this.chart.data.datasets, function(dataset, datasetIndex) {
				for (var i = 1; i < this.labelMoments[datasetIndex].length; i++) {
					this.smallestLabelSeparation = Math.min(this.smallestLabelSeparation, this.labelMoments[datasetIndex][i].diff(this.labelMoments[datasetIndex][i - 1], this.tickUnit, true));
				}
			}, this);

			// Tick displayFormat override
			if (this.options.time.displayFormat) {
				this.displayFormat = this.options.time.displayFormat;
			}

			// first tick. will have been rounded correctly if options.time.min is not specified
			this.ticks.push(this.firstTick.clone());

			// For every unit in between the first and last moment, create a moment and add it to the ticks tick
			for (var i = 1; i < this.scaleSizeInUnits; ++i) {
				var newTick = roundedStart.clone().add(i, this.tickUnit);

				// Are we greater than the max time
				if (this.options.time.max && newTick.diff(this.lastTick, this.tickUnit, true) >= 0) {
					break;
				}

				if (i % this.unitScale === 0) {
					this.ticks.push(newTick);
				}
			}

			// Always show the right tick
			if (this.ticks[this.ticks.length - 1].diff(this.lastTick, this.tickUnit) !== 0 || this.scaleSizeInUnits === 0) {
			// this is a weird case. If the <max> option is the same as the end option, we can't just diff the times because the tick was created from the roundedStart
			// but the last tick was not rounded.
				if (this.options.time.max) {
					this.ticks.push(this.lastTick.clone());
					this.scaleSizeInUnits = this.lastTick.diff(this.ticks[0], this.tickUnit, true);
				} else {
					this.scaleSizeInUnits = Math.ceil(this.scaleSizeInUnits / this.unitScale) * this.unitScale;
					this.ticks.push(this.firstTick.clone().add(this.scaleSizeInUnits, this.tickUnit));
					this.lastTick = this.ticks[this.ticks.length - 1].clone();
				}
			}
			this.ctx.restore();
		},
		// Get tooltip label
		getLabelForIndex: function(index, datasetIndex) {
			var label = this.chart.data.labels && index < this.chart.data.labels.length ? this.chart.data.labels[index] : '';

			if (typeof this.chart.data.datasets[datasetIndex].data[0] === 'object') {
				label = this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
			}

			// Format nicely
			if (this.options.time.tooltipFormat) {
				label = this.parseTime(label).format(this.options.time.tooltipFormat);
			}

			return label;
		},
		// Function to format an individual tick mark
		tickFormatFunction: function tickFormatFunction(tick, index, ticks) {
			var formattedTick = tick.format(this.displayFormat);

			if (this.options.ticks.userCallback) {
				return this.options.ticks.userCallback(formattedTick, index, ticks);
			} else {
				return formattedTick;
			}
		},
		convertTicksToLabels: function() {
			this.ticks = this.ticks.map(this.tickFormatFunction, this);
		},
		getPixelForValue: function(value, index, datasetIndex, includeOffset) {
			var labelMoment = this.getLabelMoment(datasetIndex, index);

			if (labelMoment) {
				var offset = labelMoment.diff(this.firstTick, this.tickUnit, true);

				var decimal = offset / this.scaleSizeInUnits;

				if (this.isHorizontal()) {
					var innerWidth = this.width - (this.paddingLeft + this.paddingRight);
					var valueWidth = innerWidth / Math.max(this.ticks.length - 1, 1);
					var valueOffset = (innerWidth * decimal) + this.paddingLeft;

					return this.left + Math.round(valueOffset);
				} else {
					var innerHeight = this.height - (this.paddingTop + this.paddingBottom);
					var valueHeight = innerHeight / Math.max(this.ticks.length - 1, 1);
					var heightOffset = (innerHeight * decimal) + this.paddingTop;

					return this.top + Math.round(heightOffset);
				}
			}
		},
		parseTime: function(label) {
			if (typeof this.options.time.parser === 'string') {
				return moment(label, this.options.time.parser);
			}
			if (typeof this.options.time.parser === 'function') {
				return this.options.time.parser(label);
			}
			// Date objects
			if (typeof label.getMonth === 'function' || typeof label === 'number') {
				return moment(label);
			}
			// Moment support
			if (label.isValid && label.isValid()) {
				return label;
			}
			// Custom parsing (return an instance of moment)
			if (typeof this.options.time.format !== 'string' && this.options.time.format.call) {
				console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale");
				return this.options.time.format(label);
			}
			// Moment format parsing
			return moment(label, this.options.time.format);
		}
	});
	Chart.scaleService.registerScaleType("time", TimeScale, defaultConfig);

};

},{"moment":1}]},{},[7]);


(function($){$.extend({tablesorter:new
function(){var parsers=[],widgets=[];this.defaults={cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",cssChildRow:"expand-child",sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,sortLocaleCompare:true,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:false,cancelSelection:true,sortList:[],headerList:[],dateFormat:"us",decimal:'/\.|\,/g',onRenderHeader:null,selectorHeaders:'thead th',debug:false};function benchmark(s,d){log(s+","+(new Date().getTime()-d.getTime())+"ms");}this.benchmark=benchmark;function log(s){if(typeof console!="undefined"&&typeof console.debug!="undefined"){console.log(s);}else{alert(s);}}function buildParserCache(table,$headers){if(table.config.debug){var parsersDebug="";}if(table.tBodies.length==0)return;var rows=table.tBodies[0].rows;if(rows[0]){var list=[],cells=rows[0].cells,l=cells.length;for(var i=0;i<l;i++){var p=false;if($.metadata&&($($headers[i]).metadata()&&$($headers[i]).metadata().sorter)){p=getParserById($($headers[i]).metadata().sorter);}else if((table.config.headers[i]&&table.config.headers[i].sorter)){p=getParserById(table.config.headers[i].sorter);}if(!p){p=detectParserForColumn(table,rows,-1,i);}if(table.config.debug){parsersDebug+="column:"+i+" parser:"+p.id+"\n";}list.push(p);}}if(table.config.debug){log(parsersDebug);}return list;};function detectParserForColumn(table,rows,rowIndex,cellIndex){var l=parsers.length,node=false,nodeValue=false,keepLooking=true;while(nodeValue==''&&keepLooking){rowIndex++;if(rows[rowIndex]){node=getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex);nodeValue=trimAndGetNodeText(table.config,node);if(table.config.debug){log('Checking if value was empty on row:'+rowIndex);}}else{keepLooking=false;}}for(var i=1;i<l;i++){if(parsers[i].is(nodeValue,table,node)){return parsers[i];}}return parsers[0];}function getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex){return rows[rowIndex].cells[cellIndex];}function trimAndGetNodeText(config,node){return $.trim(getElementText(config,node));}function getParserById(name){var l=parsers.length;for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==name.toLowerCase()){return parsers[i];}}return false;}function buildCache(table){if(table.config.debug){var cacheTime=new Date();}var totalRows=(table.tBodies[0]&&table.tBodies[0].rows.length)||0,totalCells=(table.tBodies[0].rows[0]&&table.tBodies[0].rows[0].cells.length)||0,parsers=table.config.parsers,cache={row:[],normalized:[]};for(var i=0;i<totalRows;++i){var c=$(table.tBodies[0].rows[i]),cols=[];if(c.hasClass(table.config.cssChildRow)){cache.row[cache.row.length-1]=cache.row[cache.row.length-1].add(c);continue;}cache.row.push(c);for(var j=0;j<totalCells;++j){cols.push(parsers[j].format(getElementText(table.config,c[0].cells[j]),table,c[0].cells[j]));}cols.push(cache.normalized.length);cache.normalized.push(cols);cols=null;};if(table.config.debug){benchmark("Building cache for "+totalRows+" rows:",cacheTime);}return cache;};function getElementText(config,node){var text="";if(!node)return"";if(!config.supportsTextContent)config.supportsTextContent=node.textContent||false;if(config.textExtraction=="simple"){if(config.supportsTextContent){text=node.textContent;}else{if(node.childNodes[0]&&node.childNodes[0].hasChildNodes()){text=node.childNodes[0].innerHTML;}else{text=node.innerHTML;}}}else{if(typeof(config.textExtraction)=="function"){text=config.textExtraction(node);}else{text=$(node).text();}}return text;}function appendToTable(table,cache){if(table.config.debug){var appendTime=new Date()}var c=cache,r=c.row,n=c.normalized,totalRows=n.length,checkCell=(n[0].length-1),tableBody=$(table.tBodies[0]),rows=[];for(var i=0;i<totalRows;i++){var pos=n[i][checkCell];rows.push(r[pos]);if(!table.config.appender){var l=r[pos].length;for(var j=0;j<l;j++){tableBody[0].appendChild(r[pos][j]);}}}if(table.config.appender){table.config.appender(table,rows);}rows=null;if(table.config.debug){benchmark("Rebuilt table:",appendTime);}applyWidget(table);setTimeout(function(){$(table).trigger("sortEnd");},0);};function buildHeaders(table){if(table.config.debug){var time=new Date();}var meta=($.metadata)?true:false;var header_index=computeTableHeaderCellIndexes(table);$tableHeaders=$(table.config.selectorHeaders,table).each(function(index){this.column=header_index[this.parentNode.rowIndex+"-"+this.cellIndex];this.order=formatSortingOrder(table.config.sortInitialOrder);this.count=this.order;if(checkHeaderMetadata(this)||checkHeaderOptions(table,index))this.sortDisabled=true;if(checkHeaderOptionsSortingLocked(table,index))this.order=this.lockedOrder=checkHeaderOptionsSortingLocked(table,index);if(!this.sortDisabled){var $th=$(this).addClass(table.config.cssHeader);if(table.config.onRenderHeader)table.config.onRenderHeader.apply($th);}table.config.headerList[index]=this;});if(table.config.debug){benchmark("Built headers:",time);log($tableHeaders);}return $tableHeaders;};function computeTableHeaderCellIndexes(t){var matrix=[];var lookup={};var thead=t.getElementsByTagName('THEAD')[0];var trs=thead.getElementsByTagName('TR');for(var i=0;i<trs.length;i++){var cells=trs[i].cells;for(var j=0;j<cells.length;j++){var c=cells[j];var rowIndex=c.parentNode.rowIndex;var cellId=rowIndex+"-"+c.cellIndex;var rowSpan=c.rowSpan||1;var colSpan=c.colSpan||1
var firstAvailCol;if(typeof(matrix[rowIndex])=="undefined"){matrix[rowIndex]=[];}for(var k=0;k<matrix[rowIndex].length+1;k++){if(typeof(matrix[rowIndex][k])=="undefined"){firstAvailCol=k;break;}}lookup[cellId]=firstAvailCol;for(var k=rowIndex;k<rowIndex+rowSpan;k++){if(typeof(matrix[k])=="undefined"){matrix[k]=[];}var matrixrow=matrix[k];for(var l=firstAvailCol;l<firstAvailCol+colSpan;l++){matrixrow[l]="x";}}}}return lookup;}function checkCellColSpan(table,rows,row){var arr=[],r=table.tHead.rows,c=r[row].cells;for(var i=0;i<c.length;i++){var cell=c[i];if(cell.colSpan>1){arr=arr.concat(checkCellColSpan(table,headerArr,row++));}else{if(table.tHead.length==1||(cell.rowSpan>1||!r[row+1])){arr.push(cell);}}}return arr;};function checkHeaderMetadata(cell){if(($.metadata)&&($(cell).metadata().sorter===false)){return true;};return false;}function checkHeaderOptions(table,i){if((table.config.headers[i])&&(table.config.headers[i].sorter===false)){return true;};return false;}function checkHeaderOptionsSortingLocked(table,i){if((table.config.headers[i])&&(table.config.headers[i].lockedOrder))return table.config.headers[i].lockedOrder;return false;}function applyWidget(table){var c=table.config.widgets;var l=c.length;for(var i=0;i<l;i++){getWidgetById(c[i]).format(table);}}function getWidgetById(name){var l=widgets.length;for(var i=0;i<l;i++){if(widgets[i].id.toLowerCase()==name.toLowerCase()){return widgets[i];}}};function formatSortingOrder(v){if(typeof(v)!="Number"){return(v.toLowerCase()=="desc")?1:0;}else{return(v==1)?1:0;}}function isValueInArray(v,a){var l=a.length;for(var i=0;i<l;i++){if(a[i][0]==v){return true;}}return false;}function setHeadersCss(table,$headers,list,css){$headers.removeClass(css[0]).removeClass(css[1]);var h=[];$headers.each(function(offset){if(!this.sortDisabled){h[this.column]=$(this);}});var l=list.length;for(var i=0;i<l;i++){h[list[i][0]].addClass(css[list[i][1]]);}}function fixColumnWidth(table,$headers){var c=table.config;if(c.widthFixed){var colgroup=$('<colgroup>');$("tr:first td",table.tBodies[0]).each(function(){colgroup.append($('<col>').css('width',$(this).width()));});$(table).prepend(colgroup);};}function updateHeaderSortCount(table,sortList){var c=table.config,l=sortList.length;for(var i=0;i<l;i++){var s=sortList[i],o=c.headerList[s[0]];o.count=s[1];o.count++;}}function multisort(table,sortList,cache){if(table.config.debug){var sortTime=new Date();}var dynamicExp="var sortWrapper = function(a,b) {",l=sortList.length;for(var i=0;i<l;i++){var c=sortList[i][0];var order=sortList[i][1];var s=(table.config.parsers[c].type=="text")?((order==0)?makeSortFunction("text","asc",c):makeSortFunction("text","desc",c)):((order==0)?makeSortFunction("numeric","asc",c):makeSortFunction("numeric","desc",c));var e="e"+i;dynamicExp+="var "+e+" = "+s;dynamicExp+="if("+e+") { return "+e+"; } ";dynamicExp+="else { ";}var orgOrderCol=cache.normalized[0].length-1;dynamicExp+="return a["+orgOrderCol+"]-b["+orgOrderCol+"];";for(var i=0;i<l;i++){dynamicExp+="}; ";}dynamicExp+="return 0; ";dynamicExp+="}; ";if(table.config.debug){benchmark("Evaling expression:"+dynamicExp,new Date());}eval(dynamicExp);cache.normalized.sort(sortWrapper);if(table.config.debug){benchmark("Sorting on "+sortList.toString()+" and dir "+order+" time:",sortTime);}return cache;};function makeSortFunction(type,direction,index){var a="a["+index+"]",b="b["+index+"]";if(type=='text'&&direction=='asc'){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+a+" < "+b+") ? -1 : 1 )));";}else if(type=='text'&&direction=='desc'){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+b+" < "+a+") ? -1 : 1 )));";}else if(type=='numeric'&&direction=='asc'){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+a+" - "+b+"));";}else if(type=='numeric'&&direction=='desc'){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+b+" - "+a+"));";}};function makeSortText(i){return"((a["+i+"] < b["+i+"]) ? -1 : ((a["+i+"] > b["+i+"]) ? 1 : 0));";};function makeSortTextDesc(i){return"((b["+i+"] < a["+i+"]) ? -1 : ((b["+i+"] > a["+i+"]) ? 1 : 0));";};function makeSortNumeric(i){return"a["+i+"]-b["+i+"];";};function makeSortNumericDesc(i){return"b["+i+"]-a["+i+"];";};function sortText(a,b){if(table.config.sortLocaleCompare)return a.localeCompare(b);return((a<b)?-1:((a>b)?1:0));};function sortTextDesc(a,b){if(table.config.sortLocaleCompare)return b.localeCompare(a);return((b<a)?-1:((b>a)?1:0));};function sortNumeric(a,b){return a-b;};function sortNumericDesc(a,b){return b-a;};function getCachedSortType(parsers,i){return parsers[i].type;};this.construct=function(settings){return this.each(function(){if(!this.tHead||!this.tBodies)return;var $this,$document,$headers,cache,config,shiftDown=0,sortOrder;this.config={};config=$.extend(this.config,$.tablesorter.defaults,settings);$this=$(this);$.data(this,"tablesorter",config);$headers=buildHeaders(this);this.config.parsers=buildParserCache(this,$headers);cache=buildCache(this);var sortCSS=[config.cssDesc,config.cssAsc];fixColumnWidth(this);$headers.click(function(e){var totalRows=($this[0].tBodies[0]&&$this[0].tBodies[0].rows.length)||0;if(!this.sortDisabled&&totalRows>0){$this.trigger("sortStart");var $cell=$(this);var i=this.column;this.order=this.count++%2;if(this.lockedOrder)this.order=this.lockedOrder;if(!e[config.sortMultiSortKey]){config.sortList=[];if(config.sortForce!=null){var a=config.sortForce;for(var j=0;j<a.length;j++){if(a[j][0]!=i){config.sortList.push(a[j]);}}}config.sortList.push([i,this.order]);}else{if(isValueInArray(i,config.sortList)){for(var j=0;j<config.sortList.length;j++){var s=config.sortList[j],o=config.headerList[s[0]];if(s[0]==i){o.count=s[1];o.count++;s[1]=o.count%2;}}}else{config.sortList.push([i,this.order]);}};setTimeout(function(){setHeadersCss($this[0],$headers,config.sortList,sortCSS);appendToTable($this[0],multisort($this[0],config.sortList,cache));},1);return false;}}).mousedown(function(){if(config.cancelSelection){this.onselectstart=function(){return false};return false;}});$this.bind("update",function(){var me=this;setTimeout(function(){me.config.parsers=buildParserCache(me,$headers);cache=buildCache(me);},1);}).bind("updateCell",function(e,cell){var config=this.config;var pos=[(cell.parentNode.rowIndex-1),cell.cellIndex];cache.normalized[pos[0]][pos[1]]=config.parsers[pos[1]].format(getElementText(config,cell),cell);}).bind("sorton",function(e,list){$(this).trigger("sortStart");config.sortList=list;var sortList=config.sortList;updateHeaderSortCount(this,sortList);setHeadersCss(this,$headers,sortList,sortCSS);appendToTable(this,multisort(this,sortList,cache));}).bind("appendCache",function(){appendToTable(this,cache);}).bind("applyWidgetId",function(e,id){getWidgetById(id).format(this);}).bind("applyWidgets",function(){applyWidget(this);});if($.metadata&&($(this).metadata()&&$(this).metadata().sortlist)){config.sortList=$(this).metadata().sortlist;}if(config.sortList.length>0){$this.trigger("sorton",[config.sortList]);}applyWidget(this);});};this.addParser=function(parser){var l=parsers.length,a=true;for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==parser.id.toLowerCase()){a=false;}}if(a){parsers.push(parser);};};this.addWidget=function(widget){widgets.push(widget);};this.formatFloat=function(s){var i=parseFloat(s);return(isNaN(i))?0:i;};this.formatInt=function(s){var i=parseInt(s);return(isNaN(i))?0:i;};this.isDigit=function(s,config){return/^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g,'')));};this.clearTableBody=function(table){if($.browser.msie){function empty(){while(this.firstChild)this.removeChild(this.firstChild);}empty.apply(table.tBodies[0]);}else{table.tBodies[0].innerHTML="";}};}});$.fn.extend({tablesorter:$.tablesorter.construct});var ts=$.tablesorter;ts.addParser({id:"text",is:function(s){return true;},format:function(s){return $.trim(s.toLocaleLowerCase());},type:"text"});ts.addParser({id:"digit",is:function(s,table){var c=table.config;return $.tablesorter.isDigit(s,c);},format:function(s){return $.tablesorter.formatFloat(s);},type:"numeric"});ts.addParser({id:"currency",is:function(s){return/^[£$€?.]/.test(s);},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g),""));},type:"numeric"});ts.addParser({id:"ipAddress",is:function(s){return/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);},format:function(s){var a=s.split("."),r="",l=a.length;for(var i=0;i<l;i++){var item=a[i];if(item.length==2){r+="0"+item;}else{r+=item;}}return $.tablesorter.formatFloat(r);},type:"numeric"});ts.addParser({id:"url",is:function(s){return/^(https?|ftp|file):\/\/$/.test(s);},format:function(s){return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//),''));},type:"text"});ts.addParser({id:"isoDate",is:function(s){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);},format:function(s){return $.tablesorter.formatFloat((s!="")?new Date(s.replace(new RegExp(/-/g),"/")).getTime():"0");},type:"numeric"});ts.addParser({id:"percent",is:function(s){return/\%$/.test($.trim(s));},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g),""));},type:"numeric"});ts.addParser({id:"usLongDate",is:function(s){return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));},format:function(s){return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"shortDate",is:function(s){return/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);},format:function(s,table){var c=table.config;s=s.replace(/\-/g,"/");if(c.dateFormat=="us"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$1/$2");}else if (c.dateFormat == "pt") {s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");} else if(c.dateFormat=="uk"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$2/$1");}else if(c.dateFormat=="dd/mm/yy"||c.dateFormat=="dd-mm-yy"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3");}return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"time",is:function(s){return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);},format:function(s){return $.tablesorter.formatFloat(new Date("2000/01/01 "+s).getTime());},type:"numeric"});ts.addParser({id:"metadata",is:function(s){return false;},format:function(s,table,cell){var c=table.config,p=(!c.parserMetadataName)?'sortValue':c.parserMetadataName;return $(cell).metadata()[p];},type:"numeric"});ts.addWidget({id:"zebra",format:function(table){if(table.config.debug){var time=new Date();}var $tr,row=-1,odd;$("tr:visible",table.tBodies[0]).each(function(i){$tr=$(this);if(!$tr.hasClass(table.config.cssChildRow))row++;odd=(row%2==0);$tr.removeClass(table.config.widgetZebra.css[odd?0:1]).addClass(table.config.widgetZebra.css[odd?1:0])});if(table.config.debug){$.tablesorter.benchmark("Applying Zebra widget",time);}}});})(jQuery);

/*
 CanvasJS HTML5 & JavaScript Charts - v1.8.1 Beta 2 - http://canvasjs.com/ 
 Copyright 2013 fenopix
*/
(function(){function T(a,c){a.prototype=Ja(c.prototype);a.prototype.constructor=a;a.base=c.prototype}function Ja(a){function c(){}c.prototype=a;return new c}function za(a,c,b){"millisecond"===b?a.setMilliseconds(a.getMilliseconds()+1*c):"second"===b?a.setSeconds(a.getSeconds()+1*c):"minute"===b?a.setMinutes(a.getMinutes()+1*c):"hour"===b?a.setHours(a.getHours()+1*c):"day"===b?a.setDate(a.getDate()+1*c):"week"===b?a.setDate(a.getDate()+7*c):"month"===b?a.setMonth(a.getMonth()+1*c):"year"===b&&a.setFullYear(a.getFullYear()+
1*c);return a}function Q(a,c){var b=!1;0>a&&(b=!0,a*=-1);a=""+a;for(c=c?c:1;a.length<c;)a="0"+a;return b?"-"+a:a}function ea(a){if(!a)return a;a=a.replace(/^\s\s*/,"");for(var c=/\s/,b=a.length;c.test(a.charAt(--b)););return a.slice(0,b+1)}function Ka(a){a.roundRect=function(a,b,d,e,f,g,h,q){h&&(this.fillStyle=h);q&&(this.strokeStyle=q);"undefined"===typeof f&&(f=5);this.lineWidth=g;this.beginPath();this.moveTo(a+f,b);this.lineTo(a+d-f,b);this.quadraticCurveTo(a+d,b,a+d,b+f);this.lineTo(a+d,b+e-f);
this.quadraticCurveTo(a+d,b+e,a+d-f,b+e);this.lineTo(a+f,b+e);this.quadraticCurveTo(a,b+e,a,b+e-f);this.lineTo(a,b+f);this.quadraticCurveTo(a,b,a+f,b);this.closePath();h&&this.fill();q&&0<g&&this.stroke()}}function Aa(a,c){return a-c}function Ba(a,c){return a.x-c.x}function C(a){var c=((a&16711680)>>16).toString(16),b=((a&65280)>>8).toString(16);a=((a&255)>>0).toString(16);c=2>c.length?"0"+c:c;b=2>b.length?"0"+b:b;a=2>a.length?"0"+a:a;return"#"+c+b+a}function La(a,c){var b=this.length>>>0,d=Number(c)||
0,d=0>d?Math.ceil(d):Math.floor(d);for(0>d&&(d+=b);d<b;d++)if(d in this&&this[d]===a)return d;return-1}function x(a){return null===a||"undefined"===typeof a}function Ca(a,c,b){b=b||"normal";var d=a+"_"+c+"_"+b,e=Da[d];if(isNaN(e)){try{a="position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:"+a+"; font-size:"+c+"px; font-weight:"+b+";";if(!Z){var f=document.body;Z=document.createElement("span");Z.innerHTML="";var g=document.createTextNode("Mpgyi");
Z.appendChild(g);f.appendChild(Z)}Z.style.display="";Z.setAttribute("style",a);e=Math.round(Z.offsetHeight);Z.style.display="none"}catch(h){e=Math.ceil(1.1*c)}e=Math.max(e,c);Da[d]=e}return e}function D(a,c){var b=[];if(b={solid:[],shortDash:[3,1],shortDot:[1,1],shortDashDot:[3,1,1,1],shortDashDotDot:[3,1,1,1,1,1],dot:[1,2],dash:[4,2],dashDot:[4,2,1,2],longDash:[8,2],longDashDot:[8,2,1,2],longDashDotDot:[8,2,1,2,1,2]}[a||"solid"])for(var d=0;d<b.length;d++)b[d]*=c;else b=[];return b}function J(a,
c,b,d){if(a.addEventListener)a.addEventListener(c,b,d||!1);else if(a.attachEvent)a.attachEvent("on"+c,function(c){c=c||window.event;c.preventDefault=c.preventDefault||function(){c.returnValue=!1};c.stopPropagation=c.stopPropagation||function(){c.cancelBubble=!0};b.call(a,c)});else return!1}function Ea(a,c,b){a*=N;c*=N;a=b.getImageData(a,c,2,2).data;c=!0;for(b=0;4>b;b++)if(a[b]!==a[b+4]|a[b]!==a[b+8]|a[b]!==a[b+12]){c=!1;break}return c?a[0]<<16|a[1]<<8|a[2]:0}function R(a,c,b){return a in c?c[a]:b[a]}
function ja(a,c,b){if(u&&Fa){var d=a.getContext("2d");ka=d.webkitBackingStorePixelRatio||d.mozBackingStorePixelRatio||d.msBackingStorePixelRatio||d.oBackingStorePixelRatio||d.backingStorePixelRatio||1;N=ta/ka;a.width=c*N;a.height=b*N;ta!==ka&&(a.style.width=c+"px",a.style.height=b+"px",d.scale(N,N))}else a.width=c,a.height=b}function $(a,c){var b=document.createElement("canvas");b.setAttribute("class","canvasjs-chart-canvas");ja(b,a,c);u||"undefined"===typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(b);
return b}function Ga(a,c,b){if(a&&c&&b){b=b+"."+c;var d="image/"+c;a=a.toDataURL(d);var e=!1,f=document.createElement("a");f.download=b;f.href=a;f.target="_blank";if("undefined"!==typeof Blob&&new Blob){for(var g=a.replace(/^data:[a-z/]*;base64,/,""),g=atob(g),h=new ArrayBuffer(g.length),h=new Uint8Array(h),q=0;q<g.length;q++)h[q]=g.charCodeAt(q);c=new Blob([h.buffer],{type:"image/"+c});try{window.navigator.msSaveBlob(c,b),e=!0}catch(k){f.dataset.downloadurl=[d,f.download,f.href].join(":"),f.href=
window.URL.createObjectURL(c)}}if(!e)try{event=document.createEvent("MouseEvents"),event.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),f.dispatchEvent?f.dispatchEvent(event):f.fireEvent&&f.fireEvent("onclick")}catch(n){c=window.open(),c.document.write("<img src='"+a+"'></img><div>Please right click on the image and save it to your device</div>"),c.document.close()}}}function U(a,c,b){c.getAttribute("state")!==b&&(c.setAttribute("state",b),c.setAttribute("type","button"),c.style.position=
"relative",c.style.margin="0px 0px 0px 0px",c.style.padding="3px 4px 0px 4px",c.style.cssFloat="left",c.setAttribute("title",a._cultureInfo[b+"Text"]),c.innerHTML="<img style='height:16px;' src='"+Ma[b].image+"' alt='"+a._cultureInfo[b+"Text"]+"' />")}function la(){for(var a=null,c=0;c<arguments.length;c++)a=arguments[c],a.style&&(a.style.display="inline")}function X(){for(var a=null,c=0;c<arguments.length;c++)(a=arguments[c])&&a.style&&(a.style.display="none")}function L(a,c,b,d){this._defaultsKey=
a;this.parent=d;this._eventListeners=[];d={};b&&(ca[b]&&ca[b][a])&&(d=ca[b][a]);this._options=c?c:{};this.setOptions(this._options,d)}function v(a,c,b){this._publicChartReference=b;c=c||{};v.base.constructor.call(this,"Chart",c,c.theme?c.theme:"theme1");var d=this;this._containerId=a;this._objectsInitialized=!1;this.overlaidCanvasCtx=this.ctx=null;this._indexLabels=[];this._panTimerId=0;this._lastTouchEventType="";this._lastTouchData=null;this.isAnimating=!1;this.renderCount=0;this.panEnabled=this.disableToolTip=
this.animatedRender=!1;this._defaultCursor="default";this.plotArea={canvas:null,ctx:null,x1:0,y1:0,x2:0,y2:0,width:0,height:0};this._dataInRenderedOrder=[];(this._container="string"===typeof this._containerId?document.getElementById(this._containerId):this._containerId)?(this._container.innerHTML="",c=a=0,a=this._options.width?this.width:0<this._container.clientWidth?this._container.clientWidth:this.width,c=this._options.height?this.height:0<this._container.clientHeight?this._container.clientHeight:
this.height,this.width=a,this.height=c,this.x1=this.y1=0,this.x2=this.width,this.y2=this.height,this._selectedColorSet="undefined"!==typeof aa[this.colorSet]?aa[this.colorSet]:aa.colorSet1,this._canvasJSContainer=document.createElement("div"),this._canvasJSContainer.setAttribute("class","canvasjs-chart-container"),this._canvasJSContainer.style.position="relative",this._canvasJSContainer.style.textAlign="left",this._canvasJSContainer.style.cursor="auto",u||(this._canvasJSContainer.style.height="0px"),
this._container.appendChild(this._canvasJSContainer),this.canvas=$(a,c),this.canvas.style.position="absolute",this.canvas.getContext&&(this._canvasJSContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.textBaseline="top",Ka(this.ctx),u?this.plotArea.ctx=this.ctx:(this.plotArea.canvas=$(a,c),this.plotArea.canvas.style.position="absolute",this.plotArea.canvas.setAttribute("class","plotAreaCanvas"),this._canvasJSContainer.appendChild(this.plotArea.canvas),this.plotArea.ctx=
this.plotArea.canvas.getContext("2d")),this.overlaidCanvas=$(a,c),this.overlaidCanvas.style.position="absolute",this._canvasJSContainer.appendChild(this.overlaidCanvas),this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d"),this.overlaidCanvasCtx.textBaseline="top",this._eventManager=new fa(this),J(window,"resize",function(){d._updateSize()&&d.render()}),this._toolBar=document.createElement("div"),this._toolBar.setAttribute("class","canvasjs-chart-toolbar"),this._toolBar.style.cssText="position: absolute; right: 1px; top: 1px;",
this._canvasJSContainer.appendChild(this._toolBar),this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},J(this.overlaidCanvas,"click",function(a){d._mouseEventHandler(a)}),J(this.overlaidCanvas,"mousemove",function(a){d._mouseEventHandler(a)}),J(this.overlaidCanvas,"mouseup",function(a){d._mouseEventHandler(a)}),J(this.overlaidCanvas,"mousedown",function(a){d._mouseEventHandler(a);X(d._dropdownMenu)}),J(this.overlaidCanvas,"mouseout",function(a){d._mouseEventHandler(a)}),J(this.overlaidCanvas,window.navigator.msPointerEnabled?
"MSPointerDown":"touchstart",function(a){d._touchEventHandler(a)}),J(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",function(a){d._touchEventHandler(a)}),J(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerUp":"touchend",function(a){d._touchEventHandler(a)}),J(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerCancel":"touchcancel",function(a){d._touchEventHandler(a)}),this._creditLink||(this._creditLink=document.createElement("a"),this._creditLink.setAttribute("class",
"canvasjs-chart-credit"),this._creditLink.setAttribute("style","outline:none;margin:0px;position:absolute;right:3px;top:"+(this.height-14)+"px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),this._creditLink.setAttribute("tabIndex",-1),this._creditLink.setAttribute("target","_blank")),this._toolTip=new V(this,this._options.toolTip,this.theme),this.axisY2=this.axisY=this.axisX=this.data=null,this.sessionVariables={axisX:{},axisY:{},
axisY2:{}})):window.console&&window.console.log('CanvasJS Error: Chart Container with id "'+this._containerId+'" was not found')}function ma(a,c){for(var b=[],d,e=0;e<a.length;e++)if(0==e)b.push(a[0]);else{var f,g,h;h=e-1;f=0===h?0:h-1;g=h===a.length-1?h:h+1;d=Math.abs((a[g].x-a[f].x)/(0===a[g].x-a[h].x?0.01:a[g].x-a[h].x))*(c-1)/2+1;var q=(a[g].x-a[f].x)/d;d=(a[g].y-a[f].y)/d;b[b.length]=a[h].x>a[f].x&&0<q||a[h].x<a[f].x&&0>q?{x:a[h].x+q/3,y:a[h].y+d/3}:{x:a[h].x,y:a[h].y+d/9};h=e;f=0===h?0:h-1;
g=h===a.length-1?h:h+1;d=Math.abs((a[g].x-a[f].x)/(0===a[h].x-a[f].x?0.01:a[h].x-a[f].x))*(c-1)/2+1;q=(a[g].x-a[f].x)/d;d=(a[g].y-a[f].y)/d;b[b.length]=a[h].x>a[f].x&&0<q||a[h].x<a[f].x&&0>q?{x:a[h].x-q/3,y:a[h].y-d/3}:{x:a[h].x,y:a[h].y-d/9};b[b.length]=a[e]}return b}function Ha(a,c){if(null===a||"undefined"===typeof a)return c;var b=parseFloat(a.toString())*(0<=a.toString().indexOf("%")?c/100:1);return!isNaN(b)&&b<=c&&0<=b?b:c}function da(a,c,b,d,e){"undefined"===typeof e&&(e=0);this._padding=e;
this._x1=a;this._y1=c;this._x2=b;this._y2=d;this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding}function O(a,c){O.base.constructor.call(this,"TextBlock",c);this.ctx=a;this._isDirty=!0;this._wrappedText=null;this._lineHeight=Ca(this.fontFamily,this.fontSize,this.fontWeight)}function ga(a,c){ga.base.constructor.call(this,"Title",c,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;if(x(this._options.margin)&&a._options.subtitles)for(var b=a._options.subtitles,
d=0;d<b.length;d++)if((x(b[d].horizontalAlign)&&"center"===this.horizontalAlign||b[d].horizontalAlign===this.horizontalAlign)&&(x(b[d].verticalAlign)&&"top"===this.verticalAlign||b[d].verticalAlign===this.verticalAlign)&&!b[d].dockInsidePlotArea===!this.dockInsidePlotArea){this.margin=0;break}"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function na(a,c){na.base.constructor.call(this,
"Subtitle",c,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function oa(a,c,b){oa.base.constructor.call(this,"Legend",c,b);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.ghostCtx=this.chart._eventManager.ghostCtx;this.items=[];this.height=this.width=0;this.orientation=null;this.dataSeries=
[];this.bounds={x1:null,y1:null,x2:null,y2:null};"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.lineHeight=Ca(this.fontFamily,this.fontSize,this.fontWeight);this.horizontalSpacing=this.fontSize}function ua(a,c){ua.base.constructor.call(this,c);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx}function Y(a,c,b,d,e){Y.base.constructor.call(this,"DataSeries",c,b);this.chart=a;this.canvas=a.canvas;this._ctx=a.canvas.ctx;this.index=d;
this.noDataPointsInPlotArea=0;this.id=e;this.chart._eventManager.objectMap[e]={id:e,objectType:"dataSeries",dataSeriesIndex:d};this.dataPointIds=[];this.plotUnit=[];this.axisY=this.axisX=null;null===this.fillOpacity&&(this.type.match(/area/i)?this.fillOpacity=0.7:this.fillOpacity=1);this.axisPlacement=this.getDefaultAxisPlacement();"undefined"===typeof this._options.indexLabelFontSize&&(this.indexLabelFontSize=this.chart.getAutoFontSize(this.indexLabelFontSize))}function F(a,c,b,d){F.base.constructor.call(this,
"Axis",c,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=a.ctx;this.intervalStartPosition=this.maxHeight=this.maxWidth=0;this.labels=[];this._stripLineLabels=this._labels=null;this.dataInfo={min:Infinity,max:-Infinity,viewPortMin:Infinity,viewPortMax:-Infinity,minDiff:Infinity};"axisX"===b?(this.sessionVariables=this.chart.sessionVariables[b],this._options.interval||(this.intervalType=null),"theme2"===this.chart.theme&&x(this._options.lineThickness)&&(this.lineThickness=2)):this.sessionVariables=
"left"===d||"top"===d?this.chart.sessionVariables.axisY:this.chart.sessionVariables.axisY2;"undefined"===typeof this._options.titleFontSize&&(this.titleFontSize=this.chart.getAutoFontSize(this.titleFontSize));"undefined"===typeof this._options.labelFontSize&&(this.labelFontSize=this.chart.getAutoFontSize(this.labelFontSize));this.type=b;"axisX"!==b||c&&"undefined"!==typeof c.gridThickness||(this.gridThickness=0);this._position=d;this.lineCoordinates={x1:null,y1:null,x2:null,y2:null,width:null};this.labelAngle=
(this.labelAngle%360+360)%360;90<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:270<this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360);if(this._options.stripLines&&0<this._options.stripLines.length)for(this.stripLines=[],c=0;c<this._options.stripLines.length;c++)this.stripLines.push(new pa(this.chart,this._options.stripLines[c],a.theme,++this.chart._eventManager.lastObjectId,this));this._titleTextBlock=null;this.hasOptionChanged("viewportMinimum")&&null===this.viewportMinimum&&
(this._options.viewportMinimum=void 0,this.sessionVariables.viewportMinimum=null);this.hasOptionChanged("viewportMinimum")||isNaN(this.sessionVariables.newViewportMinimum)||null===this.sessionVariables.newViewportMinimum?this.sessionVariables.newViewportMinimum=null:this.viewportMinimum=this.sessionVariables.newViewportMinimum;this.hasOptionChanged("viewportMaximum")&&null===this.viewportMaximum&&(this._options.viewportMaximum=void 0,this.sessionVariables.viewportMaximum=null);this.hasOptionChanged("viewportMaximum")||
isNaN(this.sessionVariables.newViewportMaximum)||null===this.sessionVariables.newViewportMaximum?this.sessionVariables.newViewportMaximum=null:this.viewportMaximum=this.sessionVariables.newViewportMaximum;null!==this.minimum&&null!==this.viewportMinimum&&(this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum));null!==this.maximum&&null!==this.viewportMaximum&&(this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum));this.trackChanges("viewportMinimum");this.trackChanges("viewportMaximum")}
function pa(a,c,b,d,e){pa.base.constructor.call(this,"StripLine",c,b,e);this.id=d;this.chart=a;this.ctx=this.chart.ctx;this.label=this.label;this._thicknessType="pixel";null!==this.startValue&&null!==this.endValue&&(this.value=((this.startValue.getTime?this.startValue.getTime():this.startValue)+(this.endValue.getTime?this.endValue.getTime():this.endValue))/2,this.thickness=Math.max(this.endValue-this.startValue),this._thicknessType="value")}function V(a,c,b){V.base.constructor.call(this,"ToolTip",
c,b);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.currentDataPointIndex=this.currentSeriesIndex=-1;this._timerId=0;this._prevY=this._prevX=NaN;this._initialize()}function fa(a){this.chart=a;this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;this.ghostCanvas=$(this.chart.width,this.chart.height);this.ghostCtx=this.ghostCanvas.getContext("2d");this.mouseoveredObjectMaps=[]}function ha(a){var c;a&&ia[a]&&(c=ia[a]);
ha.base.constructor.call(this,"CultureInfo",c)}function va(a){this.chart=a;this.ctx=this.chart.plotArea.ctx;this.animations=[];this.animationRequestId=null}var u=!!document.createElement("canvas").getContext,qa={Chart:{width:500,height:400,zoomEnabled:!1,zoomType:"x",backgroundColor:"white",theme:"theme1",animationEnabled:!1,animationDuration:1200,dataPointWidth:null,dataPointMinWidth:null,dataPointMaxWidth:null,colorSet:"colorSet1",culture:"en",creditText:"CanvasJS.com",interactivityEnabled:!0,exportEnabled:!1,
exportFileName:"Chart",rangeChanging:null,rangeChanged:null},Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:5,wrap:!0,maxWidth:null,dockInsidePlotArea:!1},Subtitle:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:14,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",
borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:2,wrap:!0,maxWidth:null,dockInsidePlotArea:!1},Legend:{name:null,verticalAlign:"center",horizontalAlign:"right",fontSize:14,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",cursor:null,itemmouseover:null,itemmouseout:null,itemmousemove:null,itemclick:null,dockInsidePlotArea:!1,reversed:!1,maxWidth:null,maxHeight:null,itemMaxWidth:null,itemWidth:null,itemWrap:!0,itemTextFormatter:null},ToolTip:{enabled:!0,
shared:!1,animationEnabled:!0,content:null,contentFormatter:null,reversed:!1,backgroundColor:null,borderColor:null,borderThickness:2,cornerRadius:5,fontSize:14,fontColor:null,fontFamily:"Calibri, Arial, Georgia, serif;",fontWeight:"normal",fontStyle:"italic"},Axis:{minimum:null,maximum:null,viewportMinimum:null,viewportMaximum:null,interval:null,intervalType:null,title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",titleFontWeight:"normal",titleFontStyle:"normal",titleWrap:!0,
titleMaxWidth:null,labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelAutoFit:!0,labelWrap:!0,labelMaxWidth:null,labelFormatter:null,prefix:"",suffix:"",includeZero:!0,tickLength:5,tickColor:"black",tickThickness:1,lineColor:"black",lineThickness:1,lineDashType:"solid",gridColor:"A0A0A0",gridThickness:0,gridDashType:"solid",interlacedColor:null,valueFormatString:null,margin:2,stripLines:[]},StripLine:{value:null,startValue:null,
endValue:null,color:"orange",opacity:null,thickness:2,lineDashType:"solid",label:"",labelPlacement:"inside",labelAlign:"far",labelWrap:!0,labelMaxWidth:null,labelBackgroundColor:"transparent",labelFontFamily:"arial",labelFontColor:"orange",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,showOnTop:!1},DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,highlightEnabled:!0,cursor:null,indexLabel:"",indexLabelPlacement:"auto",indexLabelOrientation:"horizontal",
indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:null,indexLabelLineThickness:1,indexLabelLineDashType:"solid",indexLabelMaxWidth:null,indexLabelWrap:!0,indexLabelFormatter:null,lineThickness:2,lineDashType:"solid",connectNullData:!1,nullDataLineDashType:"dash",color:null,lineColor:null,risingColor:"white",fillOpacity:null,startAngle:0,radius:null,innerRadius:null,
type:"column",xValueType:"number",axisYType:"primary",xValueFormatString:null,yValueFormatString:null,zValueFormatString:null,percentFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,legendMarkerBorderColor:null,legendMarkerBorderThickness:null,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:null,markerBorderThickness:null,mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null,visible:!0},TextBlock:{x:0,y:0,
width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",fontSize:12,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,textBaseline:"top"},CultureInfo:{decimalSeparator:".",digitGroupSeparator:",",zoomText:"Zoom",panText:"Pan",resetText:"Reset",menuText:"More Options",saveJPGText:"Save as JPEG",savePNGText:"Save as PNG",days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}},ia={en:{}},aa={colorSet1:"#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),colorSet2:"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),colorSet3:"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},
ca={theme1:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:u?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},Subtitle:{fontFamily:u?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",fontSize:16,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},Axis:{titleFontSize:26,titleFontColor:"#666666",titleFontFamily:u?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",
labelFontFamily:u?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"#BBBBBB",tickThickness:2,gridThickness:2,gridColor:"#BBBBBB",lineThickness:2,lineColor:"#BBBBBB"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:u?"monospace, sans-serif,arial black":"calibri"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:u?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineThickness:1}},
theme2:{Chart:{colorSet:"colorSet2"},Title:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:32,fontColor:"#333333",verticalAlign:"top",margin:5},Subtitle:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:14,fontColor:"#333333",verticalAlign:"top",margin:5},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:u?"monospace, sans-serif,arial black":"arial",titleFontWeight:"bold",labelFontFamily:u?"monospace, Courier New, Courier":"arial",labelFontSize:16,
labelFontColor:"grey",labelFontWeight:"bold",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineColor:"grey",lineThickness:0},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:u?"monospace, sans-serif,arial black":"arial"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:u?"Courier New, Courier, monospace":"arial",indexLabelFontWeight:"bold",indexLabelFontSize:18,indexLabelLineThickness:1}},theme3:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:u?"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif":
"calibri",fontSize:32,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},Subtitle:{fontFamily:u?"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif":"calibri",fontSize:16,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:u?"Verdana, Geneva, Calibri, sans-serif":"calibri",labelFontFamily:u?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,
labelFontColor:"grey",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:2,lineColor:"grey"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:u?"monospace, sans-serif,arial black":"calibri"},DataSeries:{bevelEnabled:!0,indexLabelFontColor:"grey",indexLabelFontFamily:u?"Candara, Optima, Calibri, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineColor:"lightgrey",indexLabelLineThickness:2}}},E={numberDuration:1,yearDuration:314496E5,
monthDuration:2592E6,weekDuration:6048E5,dayDuration:864E5,hourDuration:36E5,minuteDuration:6E4,secondDuration:1E3,millisecondDuration:1,dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")},Da={},Z=null,wa=function(){var a=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,c="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),b="Sun Mon Tue Wed Thu Fri Sat".split(" "),d="January February March April May June July August September October November December".split(" "),
e="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),f=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,g=/[^-+\dA-Z]/g;return function(h,q,k){var n=k?k.days:c,m=k?k.months:d,l=k?k.shortDays:b,p=k?k.shortMonths:e;k="";var r=!1;h=h&&h.getTime?h:h?new Date(h):new Date;if(isNaN(h))throw SyntaxError("invalid date");"UTC:"===q.slice(0,4)&&(q=q.slice(4),r=!0);k=r?"getUTC":"get";var t=h[k+"Date"](),y=h[k+"Day"](),
s=h[k+"Month"](),z=h[k+"FullYear"](),w=h[k+"Hours"](),u=h[k+"Minutes"](),W=h[k+"Seconds"](),x=h[k+"Milliseconds"](),v=r?0:h.getTimezoneOffset();return k=q.replace(a,function(a){switch(a){case "D":return t;case "DD":return Q(t,2);case "DDD":return l[y];case "DDDD":return n[y];case "M":return s+1;case "MM":return Q(s+1,2);case "MMM":return p[s];case "MMMM":return m[s];case "Y":return parseInt(String(z).slice(-2));case "YY":return Q(String(z).slice(-2),2);case "YYY":return Q(String(z).slice(-3),3);case "YYYY":return Q(z,
4);case "h":return w%12||12;case "hh":return Q(w%12||12,2);case "H":return w;case "HH":return Q(w,2);case "m":return u;case "mm":return Q(u,2);case "s":return W;case "ss":return Q(W,2);case "f":return String(x).slice(0,1);case "ff":return Q(String(x).slice(0,2),2);case "fff":return Q(String(x).slice(0,3),3);case "t":return 12>w?"a":"p";case "tt":return 12>w?"am":"pm";case "T":return 12>w?"A":"P";case "TT":return 12>w?"AM":"PM";case "K":return r?"UTC":(String(h).match(f)||[""]).pop().replace(g,"");
case "z":return(0<v?"-":"+")+Math.floor(Math.abs(v)/60);case "zz":return(0<v?"-":"+")+Q(Math.floor(Math.abs(v)/60),2);case "zzz":return(0<v?"-":"+")+Q(Math.floor(Math.abs(v)/60),2)+Q(Math.abs(v)%60,2);default:return a.slice(1,a.length-1)}})}}(),ba=function(a,c,b){if(null===a)return"";a=Number(a);var d=0>a?!0:!1;d&&(a*=-1);var e=b?b.decimalSeparator:".",f=b?b.digitGroupSeparator:",",g="";c=String(c);var g=1,h=b="",q=-1,k=[],n=[],m=0,l=0,p=0,r=!1,t=0,h=c.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
c=null;for(var y=0;h&&y<h.length;y++)if(c=h[y],"."===c&&0>q)q=y;else{if("%"===c)g*=100;else if("\u2030"===c){g*=1E3;continue}else if(","===c[0]&&"."===c[c.length-1]){g/=Math.pow(1E3,c.length-1);q=y+c.length-1;continue}else"E"!==c[0]&&"e"!==c[0]||"0"!==c[c.length-1]||(r=!0);0>q?(k.push(c),"#"===c||"0"===c?m++:","===c&&p++):(n.push(c),"#"!==c&&"0"!==c||l++)}r&&(c=Math.floor(a),t=(0===c?"":String(c)).length-m,g/=Math.pow(10,t));0>q&&(q=y);g=(a*g).toFixed(l);c=g.split(".");g=(c[0]+"").split("");a=(c[1]+
"").split("");g&&"0"===g[0]&&g.shift();for(y=r=h=l=q=0;0<k.length;)if(c=k.pop(),"#"===c||"0"===c)if(q++,q===m){var s=g,g=[];if("0"===c)for(c=m-l-(s?s.length:0);0<c;)s.unshift("0"),c--;for(;0<s.length;)b=s.pop()+b,y++,0===y%r&&(h===p&&0<s.length)&&(b=f+b);d&&(b="-"+b)}else 0<g.length?(b=g.pop()+b,l++,y++):"0"===c&&(b="0"+b,l++,y++),0===y%r&&(h===p&&0<g.length)&&(b=f+b);else"E"!==c[0]&&"e"!==c[0]||"0"!==c[c.length-1]||!/[eE][+-]*[0]+/.test(c)?","===c?(h++,r=y,y=0,0<g.length&&(b=f+b)):b=1<c.length&&
('"'===c[0]&&'"'===c[c.length-1]||"'"===c[0]&&"'"===c[c.length-1])?c.slice(1,c.length-1)+b:c+b:(c=0>t?c.replace("+","").replace("-",""):c.replace("-",""),b+=c.replace(/[0]+/,function(a){return Q(t,a.length)}));d="";for(f=!1;0<n.length;)c=n.shift(),"#"===c||"0"===c?0<a.length&&0!==Number(a.join(""))?(d+=a.shift(),f=!0):"0"===c&&(d+="0",f=!0):1<c.length&&('"'===c[0]&&'"'===c[c.length-1]||"'"===c[0]&&"'"===c[c.length-1])?d+=c.slice(1,c.length-1):"E"!==c[0]&&"e"!==c[0]||"0"!==c[c.length-1]||!/[eE][+-]*[0]+/.test(c)?
d+=c:(c=0>t?c.replace("+","").replace("-",""):c.replace("-",""),d+=c.replace(/[0]+/,function(a){return Q(t,a.length)}));return b+((f?e:"")+d)},ra=function(a){var c=0,b=0;a=a||window.event;a.offsetX||0===a.offsetX?(c=a.offsetX,b=a.offsetY):a.layerX||0==a.layerX?(c=a.layerX,b=a.layerY):(c=a.pageX-a.target.offsetLeft,b=a.pageY-a.target.offsetTop);return{x:c,y:b}},Fa=!0,ta=window.devicePixelRatio||1,ka=1,N=Fa?ta/ka:1,Ma={reset:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="},
pan:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="},
zoom:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="},
menu:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"}};L.prototype.setOptions=function(a,c){if(qa[this._defaultsKey]){var b=qa[this._defaultsKey],d;for(d in b)b.hasOwnProperty(d)&&(this[d]=a&&d in a?a[d]:c&&d in
c?c[d]:b[d])}};L.prototype.updateOption=function(a){var c=qa[this._defaultsKey],b=this._options.theme?this._options.theme:this.chart&&this.chart._options.theme?this.chart._options.theme:"theme1",d={},e=this[a];b&&(ca[b]&&ca[b][this._defaultsKey])&&(d=ca[b][this._defaultsKey]);a in c&&(e=a in this._options?this._options[a]:d&&a in d?d[a]:c[a]);if(e===this[a])return!1;this[a]=e;return!0};L.prototype.trackChanges=function(a){if(!this.sessionVariables)throw"Session Variable Store not set";this.sessionVariables[a]=
this._options[a]};L.prototype.isBeingTracked=function(a){this._options._oldOptions||(this._options._oldOptions={});return this._options._oldOptions[a]?!0:!1};L.prototype.hasOptionChanged=function(a){if(!this.sessionVariables)throw"Session Variable Store not set";return this.sessionVariables[a]!==this._options[a]};L.prototype.addEventListener=function(a,c,b){a&&c&&(this._eventListeners[a]=this._eventListeners[a]||[],this._eventListeners[a].push({context:b||this,eventHandler:c}))};L.prototype.removeEventListener=
function(a,c){if(a&&c&&this._eventListeners[a])for(var b=this._eventListeners[a],d=0;d<b.length;d++)if(b[d].eventHandler===c){b[d].splice(d,1);break}};L.prototype.removeAllEventListeners=function(){this._eventListeners=[]};L.prototype.dispatchEvent=function(a,c,b){if(a&&this._eventListeners[a]){c=c||{};for(var d=this._eventListeners[a],e=0;e<d.length;e++)d[e].eventHandler.call(d[e].context,c)}"function"===typeof this[a]&&this[a].call(b||this.chart._publicChartReference,c)};T(v,L);v.prototype._updateOptions=
function(){var a=this;this.updateOption("width");this.updateOption("height");this.updateOption("dataPointWidth");this.updateOption("dataPointMinWidth");this.updateOption("dataPointMaxWidth");this.updateOption("interactivityEnabled");this.updateOption("theme");this.updateOption("colorSet")&&(this._selectedColorSet="undefined"!==typeof aa[this.colorSet]?aa[this.colorSet]:aa.colorSet1);this.updateOption("backgroundColor");this.backgroundColor||(this.backgroundColor="rgba(0,0,0,0)");this.updateOption("culture");
this._cultureInfo=new ha(this._options.culture);this.updateOption("animationEnabled");this.animationEnabled=this.animationEnabled&&u;this.updateOption("animationDuration");this.updateOption("rangeChanging");this.updateOption("rangeChanged");this.updateOption("exportEnabled");this.updateOption("exportFileName");this.updateOption("zoomType");this._options.zoomEnabled?(this._zoomButton||(X(this._zoomButton=document.createElement("button")),U(this,this._zoomButton,"pan"),this._toolBar.appendChild(this._zoomButton),
J(this._zoomButton,"click",function(){a.zoomEnabled?(a.zoomEnabled=!1,a.panEnabled=!0,U(a,a._zoomButton,"zoom")):(a.zoomEnabled=!0,a.panEnabled=!1,U(a,a._zoomButton,"pan"));a.render()})),this._resetButton||(X(this._resetButton=document.createElement("button")),U(this,this._resetButton,"reset"),this._toolBar.appendChild(this._resetButton),J(this._resetButton,"click",function(){a._toolTip.hide();a.zoomEnabled||a.panEnabled?(a.zoomEnabled=!0,a.panEnabled=!1,U(a,a._zoomButton,"pan"),a._defaultCursor=
"default",a.overlaidCanvas.style.cursor=a._defaultCursor):(a.zoomEnabled=!1,a.panEnabled=!1);a.sessionVariables.axisX&&(a.sessionVariables.axisX.newViewportMinimum=null,a.sessionVariables.axisX.newViewportMaximum=null);a.sessionVariables.axisY&&(a.sessionVariables.axisY.newViewportMinimum=null,a.sessionVariables.axisY.newViewportMaximum=null);a.sessionVariables.axisY2&&(a.sessionVariables.axisY2.newViewportMinimum=null,a.sessionVariables.axisY2.newViewportMaximum=null);a.resetOverlayedCanvas();X(a._zoomButton,
a._resetButton);a._dispatchRangeEvent("rangeChanging","reset");a.render();a._dispatchRangeEvent("rangeChanged","reset")}),this.overlaidCanvas.style.cursor=a._defaultCursor),this.zoomEnabled||this.panEnabled||(this._zoomButton?(a._zoomButton.getAttribute("state")===a._cultureInfo.zoomText?(this.panEnabled=!0,this.zoomEnabled=!1):(this.zoomEnabled=!0,this.panEnabled=!1),la(a._zoomButton,a._resetButton)):(this.zoomEnabled=!0,this.panEnabled=!1))):this.panEnabled=this.zoomEnabled=!1;this._menuButton?
this.exportEnabled?la(this._menuButton):X(this._menuButton):this.exportEnabled&&u&&(this._menuButton=document.createElement("button"),U(this,this._menuButton,"menu"),this._toolBar.appendChild(this._menuButton),J(this._menuButton,"click",function(){"none"!==a._dropdownMenu.style.display||a._dropDownCloseTime&&500>=(new Date).getTime()-a._dropDownCloseTime.getTime()||(a._dropdownMenu.style.display="block",a._menuButton.blur(),a._dropdownMenu.focus())},!0));if(!this._dropdownMenu&&this.exportEnabled&&
u){this._dropdownMenu=document.createElement("div");this._dropdownMenu.setAttribute("tabindex",-1);this._dropdownMenu.style.cssText="position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;";
a._dropdownMenu.style.display="none";this._toolBar.appendChild(this._dropdownMenu);J(this._dropdownMenu,"blur",function(){X(a._dropdownMenu);a._dropDownCloseTime=new Date},!0);var c=document.createElement("div");c.style.cssText="padding: 2px 15px 2px 10px";c.innerHTML=this._cultureInfo.saveJPGText;this._dropdownMenu.appendChild(c);J(c,"mouseover",function(){this.style.backgroundColor="#EEEEEE"},!0);J(c,"mouseout",function(){this.style.backgroundColor="transparent"},!0);J(c,"click",function(){Ga(a.canvas,
"jpeg",a.exportFileName);X(a._dropdownMenu)},!0);c=document.createElement("div");c.style.cssText="padding: 2px 15px 2px 10px";c.innerHTML=this._cultureInfo.savePNGText;this._dropdownMenu.appendChild(c);J(c,"mouseover",function(){this.style.backgroundColor="#EEEEEE"},!0);J(c,"mouseout",function(){this.style.backgroundColor="transparent"},!0);J(c,"click",function(){Ga(a.canvas,"png",a.exportFileName);X(a._dropdownMenu)},!0)}"none"!==this._toolBar.style.display&&this._zoomButton&&(this.panEnabled?U(a,
a._zoomButton,"zoom"):U(a,a._zoomButton,"pan"),a._resetButton.getAttribute("state")!==a._cultureInfo.resetText&&U(a,a._resetButton,"reset"));if("undefined"===typeof qa.Chart.creditHref)this.creditHref="http://canvasjs.com/",this.creditText="CanvasJS.com";else var b=this.updateOption("creditText"),d=this.updateOption("creditHref");if(0===this.renderCount||b||d)this._creditLink.setAttribute("href",this.creditHref),this._creditLink.innerHTML=this.creditText;this.creditHref&&this.creditText?this._creditLink.parentElement||
this._canvasJSContainer.appendChild(this._creditLink):this._creditLink.parentElement&&this._canvasJSContainer.removeChild(this._creditLink);this._options.toolTip&&this._toolTip._options!==this._options.toolTip&&(this._toolTip._options=this._options.toolTip);for(var e in this._toolTip._options)this._toolTip._options.hasOwnProperty(e)&&this._toolTip.updateOption(e)};v.prototype._updateSize=function(){var a=0,c=0;this._options.width?a=this.width:this.width=a=0<this._container.clientWidth?this._container.clientWidth:
this.width;this._options.height?c=this.height:this.height=c=0<this._container.clientHeight?this._container.clientHeight:this.height;return this.canvas.width!==a*N||this.canvas.height!==c*N?(ja(this.canvas,a,c),ja(this.overlaidCanvas,a,c),ja(this._eventManager.ghostCanvas,a,c),!0):!1};v.prototype._initialize=function(){this._animator?this._animator.cancelAllAnimations():this._animator=new va(this);this.removeAllEventListeners();this.disableToolTip=!1;this._axes=[];this.pieDoughnutClickHandler=null;
this.animationRequestId&&this.cancelRequestAnimFrame.call(window,this.animationRequestId);this._updateOptions();this.animatedRender=u&&this.animationEnabled&&0===this.renderCount;this._updateSize();this.clearCanvas();this.ctx.beginPath();this.axisY2=this.axisY=this.axisX=null;this._indexLabels=[];this._dataInRenderedOrder=[];this._events=[];this._eventManager&&this._eventManager.reset();this.plotInfo={axisPlacement:null,axisXValueType:null,plotTypes:[]};this.layoutManager=new da(0,0,this.width,this.height,
2);this.plotArea.layoutManager&&this.plotArea.layoutManager.reset();this.data=[];var a=0;if(this._options.data)for(var c=0;c<this._options.data.length;c++)if(a++,!this._options.data[c].type||0<=v._supportedChartTypes.indexOf(this._options.data[c].type)){var b=new Y(this,this._options.data[c],this.theme,a-1,++this._eventManager.lastObjectId);null===b.name&&(b.name="DataSeries "+a);null===b.color?1<this._options.data.length?(b._colorSet=[this._selectedColorSet[b.index%this._selectedColorSet.length]],
b.color=this._selectedColorSet[b.index%this._selectedColorSet.length]):b._colorSet="line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type||"candlestick"===b.type||"ohlc"===b.type?[this._selectedColorSet[0]]:this._selectedColorSet:b._colorSet=[b.color];null===b.markerSize&&(("line"===b.type||"stepLine"===b.type||"spline"===b.type||0<=b.type.toLowerCase().indexOf("area"))&&
b.dataPoints&&b.dataPoints.length<this.width/16||"scatter"===b.type)&&(b.markerSize=8);"bubble"!==b.type&&"scatter"!==b.type||!b.dataPoints||(b.dataPoints.some?b.dataPoints.some(function(a){return a.x})&&b.dataPoints.sort(Ba):b.dataPoints.sort(Ba));this.data.push(b);var d=b.axisPlacement,e;"normal"===d?"xySwapped"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with pie chart':null===this.plotInfo.axisPlacement&&
(this.plotInfo.axisPlacement="normal"):"xySwapped"===d?"normal"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="xySwapped"):"none"==d&&("normal"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?e=
'You cannot combine "'+b.type+'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none"));if(e&&window.console){window.console.log(e);return}}this._objectsInitialized=!0};v._supportedChartTypes=function(a){a.indexOf||(a.indexOf=La);return a}("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc rangeColumn rangeBar rangeArea rangeSplineArea pie doughnut funnel".split(" "));
v.prototype.render=function(a){a&&(this._options=a);this._initialize();var c=[];for(a=0;a<this.data.length;a++)if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)this.data[a].axisYType&&"primary"!==this.data[a].axisYType?"secondary"===this.data[a].axisYType&&(this.axisY2||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY2=new F(this,this._options.axisY2,"axisY","right")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY2=new F(this,
this._options.axisY2,"axisY","top"))),this.data[a].axisY=this.axisY2):(this.axisY||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY=new F(this,this._options.axisY,"axisY","left")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY=new F(this,this._options.axisY,"axisY","bottom"))),this.data[a].axisY=this.axisY),this.axisX||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX=new F(this,this._options.axisX,"axisX","bottom")):"xySwapped"===this.plotInfo.axisPlacement&&
this._axes.push(this.axisX=new F(this,this._options.axisX,"axisX","left"))),this.data[a].axisX=this.axisX;this.axisY&&this.axisY2&&(0<this.axisY.gridThickness&&"undefined"===typeof this.axisY2._options.gridThickness?this.axisY2.gridThickness=0:0<this.axisY2.gridThickness&&"undefined"===typeof this.axisY._options.gridThickness&&(this.axisY.gridThickness=0));var b=!1;if(0<this._axes.length&&(this.zoomEnabled||this.panEnabled))for(a=0;a<this._axes.length;a++)if(null!==this._axes[a].viewportMinimum||
null!==this._axes[a].viewportMaximum){b=!0;break}b?la(this._zoomButton,this._resetButton):(X(this._zoomButton,this._resetButton),this._options.zoomEnabled&&(this.zoomEnabled=!0,this.panEnabled=!1));this._processData();this._options.title&&(this._title=new ga(this,this._options.title),this._title.dockInsidePlotArea?c.push(this._title):this._title.render());if(this._options.subtitles)for(a=0;a<this._options.subtitles.length;a++)this.subtitles=[],b=new na(this,this._options.subtitles[a]),this.subtitles.push(b),
b.dockInsidePlotArea?c.push(b):b.render();this.legend=new oa(this,this._options.legend,this.theme);for(a=0;a<this.data.length;a++)(this.data[a].showInLegend||"pie"===this.data[a].type||"doughnut"===this.data[a].type)&&this.legend.dataSeries.push(this.data[a]);this.legend.dockInsidePlotArea?c.push(this.legend):this.legend.render();if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)F.setLayoutAndRender(this.axisX,this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace());
else if("none"===this.plotInfo.axisPlacement)this.preparePlotArea();else return;for(a=0;a<c.length;a++)c[a].render();var d=[];if(this.animatedRender){var e=$(this.width,this.height);e.getContext("2d").drawImage(this.canvas,0,0,this.width,this.height)}for(a=0;a<this.plotInfo.plotTypes.length;a++)for(c=this.plotInfo.plotTypes[a],b=0;b<c.plotUnits.length;b++){var f=c.plotUnits[b],g=null;f.targetCanvas=null;this.animatedRender&&(f.targetCanvas=$(this.width,this.height),f.targetCanvasCtx=f.targetCanvas.getContext("2d"));
"line"===f.type?g=this.renderLine(f):"stepLine"===f.type?g=this.renderStepLine(f):"spline"===f.type?g=this.renderSpline(f):"column"===f.type?g=this.renderColumn(f):"bar"===f.type?g=this.renderBar(f):"area"===f.type?g=this.renderArea(f):"stepArea"===f.type?g=this.renderStepArea(f):"splineArea"===f.type?g=this.renderSplineArea(f):"stackedColumn"===f.type?g=this.renderStackedColumn(f):"stackedColumn100"===f.type?g=this.renderStackedColumn100(f):"stackedBar"===f.type?g=this.renderStackedBar(f):"stackedBar100"===
f.type?g=this.renderStackedBar100(f):"stackedArea"===f.type?g=this.renderStackedArea(f):"stackedArea100"===f.type?g=this.renderStackedArea100(f):"bubble"===f.type?g=g=this.renderBubble(f):"scatter"===f.type?g=this.renderScatter(f):"pie"===f.type?this.renderPie(f):"doughnut"===f.type?this.renderPie(f):"candlestick"===f.type?g=this.renderCandlestick(f):"ohlc"===f.type?g=this.renderCandlestick(f):"rangeColumn"===f.type?g=this.renderRangeColumn(f):"rangeBar"===f.type?g=this.renderRangeBar(f):"rangeArea"===
f.type?g=this.renderRangeArea(f):"rangeSplineArea"===f.type&&(g=this.renderRangeSplineArea(f));for(var h=0;h<f.dataSeriesIndexes.length;h++)this._dataInRenderedOrder.push(this.data[f.dataSeriesIndexes[h]]);this.animatedRender&&g&&d.push(g)}this.animatedRender&&0<this._indexLabels.length&&(a=$(this.width,this.height).getContext("2d"),d.push(this.renderIndexLabels(a)));var q=this;0<d.length?(q.disableToolTip=!0,q._animator.animate(200,q.animationDuration,function(a){q.ctx.clearRect(0,0,q.width,q.height);
q.ctx.drawImage(e,0,0,Math.floor(q.width*N),Math.floor(q.height*N),0,0,q.width,q.height);for(var b=0;b<d.length;b++)g=d[b],1>a&&"undefined"!==typeof g.startTimePercent?a>=g.startTimePercent&&g.animationCallback(g.easingFunction(a-g.startTimePercent,0,1,1-g.startTimePercent),g):g.animationCallback(g.easingFunction(a,0,1,1),g);q.dispatchEvent("dataAnimationIterationEnd",{chart:q})},function(){d=[];for(var a=0;a<q.plotInfo.plotTypes.length;a++)for(var b=q.plotInfo.plotTypes[a],c=0;c<b.plotUnits.length;c++)b.plotUnits[c].targetCanvas=
null;e=null;q.disableToolTip=!1})):(0<q._indexLabels.length&&q.renderIndexLabels(),q.dispatchEvent("dataAnimationIterationEnd",{chart:q}));this.attachPlotAreaEventHandlers();this.zoomEnabled||(this.panEnabled||!this._zoomButton||"none"===this._zoomButton.style.display)||X(this._zoomButton,this._resetButton);this._toolTip._updateToolTip();this.renderCount++};v.prototype.attachPlotAreaEventHandlers=function(){this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,mouseup:this._plotAreaMouseUp,
mousemove:this._plotAreaMouseMove,cursor:this.zoomEnabled?"col-resize":"move",cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.plotArea})};v.prototype.categoriseDataSeries=function(){for(var a="",c=0;c<this.data.length;c++)if(a=this.data[c],a.dataPoints&&(0!==a.dataPoints.length&&a.visible)&&0<=v._supportedChartTypes.indexOf(a.type)){for(var b=null,d=!1,e=null,f=!1,g=0;g<this.plotInfo.plotTypes.length;g++)if(this.plotInfo.plotTypes[g].type===a.type){d=!0;b=this.plotInfo.plotTypes[g];
break}d||(b={type:a.type,totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(b));for(g=0;g<b.plotUnits.length;g++)if(b.plotUnits[g].axisYType===a.axisYType){f=!0;e=b.plotUnits[g];break}f||(e={type:a.type,previousDataSeriesCount:0,index:b.plotUnits.length,plotType:b,axisYType:a.axisYType,axisY:"primary"===a.axisYType?this.axisY:this.axisY2,axisX:this.axisX,dataSeriesIndexes:[],yTotals:[]},b.plotUnits.push(e));b.totalDataSeries++;e.dataSeriesIndexes.push(c);a.plotUnit=e}for(c=0;c<this.plotInfo.plotTypes.length;c++)for(b=
this.plotInfo.plotTypes[c],g=a=0;g<b.plotUnits.length;g++)b.plotUnits[g].previousDataSeriesCount=a,a+=b.plotUnits[g].dataSeriesIndexes.length};v.prototype.assignIdToDataPoints=function(){for(var a=0;a<this.data.length;a++){var c=this.data[a];if(c.dataPoints)for(var b=c.dataPoints.length,d=0;d<b;d++)c.dataPointIds[d]=++this._eventManager.lastObjectId}};v.prototype._processData=function(){this.assignIdToDataPoints();this.categoriseDataSeries();for(var a=0;a<this.plotInfo.plotTypes.length;a++)for(var c=
this.plotInfo.plotTypes[a],b=0;b<c.plotUnits.length;b++){var d=c.plotUnits[b];"line"===d.type||"stepLine"===d.type||"spline"===d.type||"column"===d.type||"area"===d.type||"stepArea"===d.type||"splineArea"===d.type||"bar"===d.type||"bubble"===d.type||"scatter"===d.type?this._processMultiseriesPlotUnit(d):"stackedColumn"===d.type||"stackedBar"===d.type||"stackedArea"===d.type?this._processStackedPlotUnit(d):"stackedColumn100"===d.type||"stackedBar100"===d.type||"stackedArea100"===d.type?this._processStacked100PlotUnit(d):
"candlestick"!==d.type&&"ohlc"!==d.type&&"rangeColumn"!==d.type&&"rangeBar"!==d.type&&"rangeArea"!==d.type&&"rangeSplineArea"!==d.type||this._processMultiYPlotUnit(d)}};v.prototype._processMultiseriesPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var c=a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,f=!1,g=0;g<a.dataSeriesIndexes.length;g++){var h=this.data[a.dataSeriesIndexes[g]],q=0,k=!1,n=!1,m;if("normal"===h.axisPlacement||"xySwapped"===h.axisPlacement)var l=this.sessionVariables.axisX.newViewportMinimum?
this.sessionVariables.axisX.newViewportMinimum:this._options.axisX&&this._options.axisX.viewportMinimum?this._options.axisX.viewportMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,p=this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:this._options.axisX&&this._options.axisX.viewportMaximum?this._options.axisX.viewportMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;
if(h.dataPoints[q].x&&h.dataPoints[q].x.getTime||"dateTime"===h.xValueType)f=!0;for(q=0;q<h.dataPoints.length;q++){"undefined"===typeof h.dataPoints[q].x&&(h.dataPoints[q].x=q);h.dataPoints[q].x.getTime?(f=!0,d=h.dataPoints[q].x.getTime()):d=h.dataPoints[q].x;e=h.dataPoints[q].y;d<b.min&&(b.min=d);d>b.max&&(b.max=d);e<c.min&&(c.min=e);e>c.max&&(c.max=e);if(0<q){var r=d-h.dataPoints[q-1].x;0>r&&(r*=-1);b.minDiff>r&&0!==r&&(b.minDiff=r);null!==e&&null!==h.dataPoints[q-1].y&&(r=e-h.dataPoints[q-1].y,
0>r&&(r*=-1),c.minDiff>r&&0!==r&&(c.minDiff=r))}if(d<l&&!k)null!==e&&(m=d);else{if(!k&&(k=!0,0<q)){q-=2;continue}if(d>p&&!n)n=!0;else if(d>p&&n)continue;h.dataPoints[q].label&&(a.axisX.labels[d]=h.dataPoints[q].label);d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=d);null===e?b.viewPortMin===d&&m<d&&(b.viewPortMin=m):(e<c.viewPortMin&&(c.viewPortMin=e),e>c.viewPortMax&&(c.viewPortMax=e))}}this.plotInfo.axisXValueType=h.xValueType=f?"dateTime":"number"}};v.prototype._processStackedPlotUnit=
function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var c=a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,f=!1,g=[],h=[],q=Infinity,k=0;k<a.dataSeriesIndexes.length;k++){var n=this.data[a.dataSeriesIndexes[k]],m=0,l=!1,p=!1,r;if("normal"===n.axisPlacement||"xySwapped"===n.axisPlacement)var t=this.sessionVariables.axisX.newViewportMinimum?this.sessionVariables.axisX.newViewportMinimum:this._options.axisX&&this._options.axisX.viewportMinimum?this._options.axisX.viewportMinimum:this._options.axisX&&
this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,y=this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:this._options.axisX&&this._options.axisX.viewportMaximum?this._options.axisX.viewportMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(n.dataPoints[m].x&&n.dataPoints[m].x.getTime||"dateTime"===n.xValueType)f=!0;for(m=0;m<n.dataPoints.length;m++){"undefined"===typeof n.dataPoints[m].x&&(n.dataPoints[m].x=
m);n.dataPoints[m].x.getTime?(f=!0,d=n.dataPoints[m].x.getTime()):d=n.dataPoints[m].x;x(n.dataPoints[m].y)?e=0:(e=n.dataPoints[m].y,0===k&&(q=Math.min(e,q)));d<b.min&&(b.min=d);d>b.max&&(b.max=d);if(0<m){var s=d-n.dataPoints[m-1].x;0>s&&(s*=-1);b.minDiff>s&&0!==s&&(b.minDiff=s);null!==e&&null!==n.dataPoints[m-1].y&&(s=e-n.dataPoints[m-1].y,0>s&&(s*=-1),c.minDiff>s&&0!==s&&(c.minDiff=s))}if(d<t&&!l)null!==n.dataPoints[m].y&&(r=d);else{if(!l&&(l=!0,0<m)){m-=2;continue}if(d>y&&!p)p=!0;else if(d>y&&p)continue;
n.dataPoints[m].label&&(a.axisX.labels[d]=n.dataPoints[m].label);d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=d);null===n.dataPoints[m].y?b.viewPortMin===d&&r<d&&(b.viewPortMin=r):(a.yTotals[d]=(a.yTotals[d]?a.yTotals[d]:0)+Math.abs(e),0<=e?g[d]=g[d]?g[d]+e:e:h[d]=h[d]?h[d]+e:e)}}this.plotInfo.axisXValueType=n.xValueType=f?"dateTime":"number"}for(m in g)g.hasOwnProperty(m)&&!isNaN(m)&&(a=g[m],a<c.min&&(c.min=Math.min(a,q)),a>c.max&&(c.max=a),m<b.viewPortMin||m>b.viewPortMax||
(a<c.viewPortMin&&(c.viewPortMin=Math.min(a,q)),a>c.viewPortMax&&(c.viewPortMax=a)));for(m in h)h.hasOwnProperty(m)&&!isNaN(m)&&(a=h[m],a<c.min&&(c.min=Math.min(a,q)),a>c.max&&(c.max=a),m<b.viewPortMin||m>b.viewPortMax||(a<c.viewPortMin&&(c.viewPortMin=Math.min(a,q)),a>c.viewPortMax&&(c.viewPortMax=a)))}};v.prototype._processStacked100PlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var c=a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,f=!1,g=!1,h=!1,q=[],k=0;k<a.dataSeriesIndexes.length;k++){var n=
this.data[a.dataSeriesIndexes[k]],m=0,l=!1,p=!1,r;if("normal"===n.axisPlacement||"xySwapped"===n.axisPlacement)var t=this.sessionVariables.axisX.newViewportMinimum?this.sessionVariables.axisX.newViewportMinimum:this._options.axisX&&this._options.axisX.viewportMinimum?this._options.axisX.viewportMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,y=this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:this._options.axisX&&
this._options.axisX.viewportMaximum?this._options.axisX.viewportMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(n.dataPoints[m].x&&n.dataPoints[m].x.getTime||"dateTime"===n.xValueType)f=!0;for(m=0;m<n.dataPoints.length;m++){"undefined"===typeof n.dataPoints[m].x&&(n.dataPoints[m].x=m);n.dataPoints[m].x.getTime?(f=!0,d=n.dataPoints[m].x.getTime()):d=n.dataPoints[m].x;e=x(n.dataPoints[m].y)?null:n.dataPoints[m].y;d<b.min&&(b.min=d);d>b.max&&(b.max=d);
if(0<m){var s=d-n.dataPoints[m-1].x;0>s&&(s*=-1);b.minDiff>s&&0!==s&&(b.minDiff=s);x(e)||null===n.dataPoints[m-1].y||(s=e-n.dataPoints[m-1].y,0>s&&(s*=-1),c.minDiff>s&&0!==s&&(c.minDiff=s))}if(d<t&&!l)null!==e&&(r=d);else{if(!l&&(l=!0,0<m)){m-=2;continue}if(d>y&&!p)p=!0;else if(d>y&&p)continue;n.dataPoints[m].label&&(a.axisX.labels[d]=n.dataPoints[m].label);d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=d);null===e?b.viewPortMin===d&&r<d&&(b.viewPortMin=r):(a.yTotals[d]=(a.yTotals[d]?
a.yTotals[d]:0)+Math.abs(e),0<=e?g=!0:0>e&&(h=!0),q[d]=q[d]?q[d]+Math.abs(e):Math.abs(e))}}this.plotInfo.axisXValueType=n.xValueType=f?"dateTime":"number"}g&&!h?(c.max=x(c.viewPortMax)?99:Math.max(c.viewPortMax,99),c.min=x(c.viewPortMin)?1:Math.min(c.viewPortMin,1)):g&&h?(c.max=x(c.viewPortMax)?99:Math.max(c.viewPortMax,99),c.min=x(c.viewPortMin)?-99:Math.min(c.viewPortMin,-99)):!g&&h&&(c.max=x(c.viewPortMax)?-1:Math.max(c.viewPortMax,-1),c.min=x(c.viewPortMin)?-99:Math.min(c.viewPortMin,-99));c.viewPortMin=
c.min;c.viewPortMax=c.max;a.dataPointYSums=q}};v.prototype._processMultiYPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var c=a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,f,g,h=!1,q=0;q<a.dataSeriesIndexes.length;q++){var k=this.data[a.dataSeriesIndexes[q]],n=0,m=!1,l=!1,p,r,t;if("normal"===k.axisPlacement||"xySwapped"===k.axisPlacement)var y=this.sessionVariables.axisX.newViewportMinimum?this.sessionVariables.axisX.newViewportMinimum:this._options.axisX&&this._options.axisX.viewportMinimum?
this._options.axisX.viewportMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,s=this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:this._options.axisX&&this._options.axisX.viewportMaximum?this._options.axisX.viewportMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(k.dataPoints[n].x&&k.dataPoints[n].x.getTime||"dateTime"===k.xValueType)h=!0;for(n=0;n<k.dataPoints.length;n++){"undefined"===
typeof k.dataPoints[n].x&&(k.dataPoints[n].x=n);k.dataPoints[n].x.getTime?(h=!0,d=k.dataPoints[n].x.getTime()):d=k.dataPoints[n].x;if((e=k.dataPoints[n].y)&&e.length){f=Math.min.apply(null,e);g=Math.max.apply(null,e);r=!0;for(var z=0;z<e.length;z++)null===e.k&&(r=!1);r&&(m||(t=p),p=d)}d<b.min&&(b.min=d);d>b.max&&(b.max=d);f<c.min&&(c.min=f);g>c.max&&(c.max=g);0<n&&(r=d-k.dataPoints[n-1].x,0>r&&(r*=-1),b.minDiff>r&&0!==r&&(b.minDiff=r),e&&(null!==e[0]&&k.dataPoints[n-1].y&&null!==k.dataPoints[n-1].y[0])&&
(r=e[0]-k.dataPoints[n-1].y[0],0>r&&(r*=-1),c.minDiff>r&&0!==r&&(c.minDiff=r)));if(!(d<y)||m){if(!m&&(m=!0,0<n)){n-=2;p=t;continue}if(d>s&&!l)l=!0;else if(d>s&&l)continue;k.dataPoints[n].label&&(a.axisX.labels[d]=k.dataPoints[n].label);d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=d);if(b.viewPortMin===d&&e)for(z=0;z<e.length;z++)if(null===e[z]&&p<d){b.viewPortMin=p;break}null===e?b.viewPortMin===d&&p<d&&(b.viewPortMin=p):(f<c.viewPortMin&&(c.viewPortMin=f),g>c.viewPortMax&&(c.viewPortMax=
g))}}this.plotInfo.axisXValueType=k.xValueType=h?"dateTime":"number"}};v.prototype.getDataPointAtXY=function(a,c,b){b=b||!1;for(var d=[],e=this._dataInRenderedOrder.length-1;0<=e;e--){var f=null;(f=this._dataInRenderedOrder[e].getDataPointAtXY(a,c,b))&&d.push(f)}a=null;c=!1;for(b=0;b<d.length;b++)if("line"===d[b].dataSeries.type||"stepLine"===d[b].dataSeries.type||"area"===d[b].dataSeries.type||"stepArea"===d[b].dataSeries.type)if(e=R("markerSize",d[b].dataPoint,d[b].dataSeries)||8,d[b].distance<=
e/2){c=!0;break}for(b=0;b<d.length;b++)c&&"line"!==d[b].dataSeries.type&&"stepLine"!==d[b].dataSeries.type&&"area"!==d[b].dataSeries.type&&"stepArea"!==d[b].dataSeries.type||(a?d[b].distance<=a.distance&&(a=d[b]):a=d[b]);return a};v.prototype.getObjectAtXY=function(a,c,b){var d=null;if(b=this.getDataPointAtXY(a,c,b||!1))d=b.dataSeries.dataPointIds[b.dataPointIndex];else if(u)d=Ea(a,c,this._eventManager.ghostCtx);else for(b=0;b<this.legend.items.length;b++){var e=this.legend.items[b];a>=e.x1&&(a<=
e.x2&&c>=e.y1&&c<=e.y2)&&(d=e.id)}return d};v.prototype.getAutoFontSize=function(a,c,b){a/=400;return Math.round(Math.min(this.width,this.height)*a)};v.prototype.resetOverlayedCanvas=function(){this.overlaidCanvasCtx.clearRect(0,0,this.width,this.height)};v.prototype.clearCanvas=function(){this.ctx.clearRect(0,0,this.width,this.height);this.backgroundColor&&(this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height))};v.prototype.attachEvent=function(a){this._events.push(a)};
v.prototype._touchEventHandler=function(a){if(a.changedTouches&&this.interactivityEnabled){var c=[],b=a.changedTouches,d=b?b[0]:a,e=null;switch(a.type){case "touchstart":case "MSPointerDown":c=["mousemove","mousedown"];this._lastTouchData=ra(d);this._lastTouchData.time=new Date;break;case "touchmove":case "MSPointerMove":c=["mousemove"];break;case "touchend":case "MSPointerUp":c="touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType?["mouseup","click"]:["mouseup"];break;
default:return}if(!(b&&1<b.length)){e=ra(d);e.time=new Date;try{var f=e.y-this._lastTouchData.y,g=e.time-this._lastTouchData.time;if(15<Math.abs(f)&&(this._lastTouchData.scroll||200>g)){this._lastTouchData.scroll=!0;var h=window.parent||window;h&&h.scrollBy&&h.scrollBy(0,-f)}}catch(q){}this._lastTouchEventType=a.type;if(this._lastTouchData.scroll&&this.zoomEnabled)this.isDrag&&this.resetOverlayedCanvas(),this.isDrag=!1;else for(b=0;b<c.length;b++)e=c[b],f=document.createEvent("MouseEvent"),f.initMouseEvent(e,
!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),d.target.dispatchEvent(f),a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault()}}};v.prototype._dispatchRangeEvent=function(a,c){var b={};b.chart=this._publicChartReference;b.type=a;b.trigger=c;var d=[];this.axisX&&d.push("axisX");this.axisY&&d.push("axisY");this.axisY2&&d.push("axisY2");for(var e=0;e<d.length;e++)b[d[e]]={viewportMinimum:this[d[e]].sessionVariables.newViewportMinimum,viewportMaximum:this[d[e]].sessionVariables.newViewportMaximum};
this.dispatchEvent(a,b,this._publicChartReference)};v.prototype._mouseEventHandler=function(a){if(this.interactivityEnabled)if(this._ignoreNextEvent)this._ignoreNextEvent=!1;else{a.preventManipulation&&a.preventManipulation();a.preventDefault&&a.preventDefault();"undefined"===typeof a.target&&a.srcElement&&(a.target=a.srcElement);var c=ra(a),b=a.type,d,e;a.which?e=3==a.which:a.button&&(e=2==a.button);if(!e){if(v.capturedEventParam)d=v.capturedEventParam,"mouseup"===b&&(v.capturedEventParam=null,d.chart.overlaidCanvas.releaseCapture?
d.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",d.chart._mouseEventHandler,!1)),d.hasOwnProperty(b)&&d[b].call(d.context,c.x,c.y);else if(this._events){for(e=0;e<this._events.length;e++)if(this._events[e].hasOwnProperty(b)){d=this._events[e];var f=d.bounds;if(c.x>=f.x1&&c.x<=f.x2&&c.y>=f.y1&&c.y<=f.y2){d[b].call(d.context,c.x,c.y);"mousedown"===b&&!0===d.capture?(v.capturedEventParam=d,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():document.body.addEventListener("mouseup",
this._mouseEventHandler,!1)):"mouseup"===b&&(d.chart.overlaidCanvas.releaseCapture?d.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",this._mouseEventHandler,!1));break}else d=null}a.target.style.cursor=d&&d.cursor?d.cursor:this._defaultCursor}this._toolTip&&this._toolTip.enabled&&(b=this.plotArea,(c.x<b.x1||c.x>b.x2||c.y<b.y1||c.y>b.y2)&&this._toolTip.hide());this.isDrag&&this.zoomEnabled||!this._eventManager||this._eventManager.mouseEventHandler(a)}}};v.prototype._plotAreaMouseDown=
function(a,c){this.isDrag=!0;this.dragStartPoint={x:a,y:c}};v.prototype._plotAreaMouseUp=function(a,c){if(("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&this.isDrag){var b=c-this.dragStartPoint.y,d=a-this.dragStartPoint.x,e=0<=this.zoomType.indexOf("x"),f=0<=this.zoomType.indexOf("y"),g=!1;this.resetOverlayedCanvas();if("xySwapped"===this.plotInfo.axisPlacement)var h=f,f=e,e=h;if(this.panEnabled||this.zoomEnabled){if(this.panEnabled)for(e=f=0;e<this._axes.length;e++)b=
this._axes[e],b.viewportMinimum<b.minimum?(f=b.minimum-b.viewportMinimum,b.sessionVariables.newViewportMinimum=b.viewportMinimum+f,b.sessionVariables.newViewportMaximum=b.viewportMaximum+f,g=!0):b.viewportMaximum>b.maximum&&(f=b.viewportMaximum-b.maximum,b.sessionVariables.newViewportMinimum=b.viewportMinimum-f,b.sessionVariables.newViewportMaximum=b.viewportMaximum-f,g=!0);else if((!e||2<Math.abs(d))&&(!f||2<Math.abs(b))&&this.zoomEnabled){if(!this.dragStartPoint)return;b=e?this.dragStartPoint.x:
this.plotArea.x1;d=f?this.dragStartPoint.y:this.plotArea.y1;e=e?a:this.plotArea.x2;f=f?c:this.plotArea.y2;2<Math.abs(b-e)&&2<Math.abs(d-f)&&this._zoomPanToSelectedRegion(b,d,e,f)&&(g=!0)}g&&(this._ignoreNextEvent=!0,this._dispatchRangeEvent("rangeChanging","zoom"),this.render(),this._dispatchRangeEvent("rangeChanged","zoom"),g&&(this.zoomEnabled&&"none"===this._zoomButton.style.display)&&(la(this._zoomButton,this._resetButton),U(this,this._zoomButton,"pan"),U(this,this._resetButton,"reset")))}}this.isDrag=
!1};v.prototype._plotAreaMouseMove=function(a,c){if(this.isDrag&&"none"!==this.plotInfo.axisPlacement){var b=0,d=0,e=b=null,e=0<=this.zoomType.indexOf("x"),f=0<=this.zoomType.indexOf("y");"xySwapped"===this.plotInfo.axisPlacement&&(b=f,f=e,e=b);b=this.dragStartPoint.x-a;d=this.dragStartPoint.y-c;2<Math.abs(b)&&8>Math.abs(b)&&(this.panEnabled||this.zoomEnabled)?this._toolTip.hide():this.panEnabled||this.zoomEnabled||this._toolTip.mouseMoveHandler(a,c);if((!e||2<Math.abs(b)||!f||2<Math.abs(d))&&(this.panEnabled||
this.zoomEnabled))if(this.panEnabled)e={x1:e?this.plotArea.x1+b:this.plotArea.x1,y1:f?this.plotArea.y1+d:this.plotArea.y1,x2:e?this.plotArea.x2+b:this.plotArea.x2,y2:f?this.plotArea.y2+d:this.plotArea.y2},this._zoomPanToSelectedRegion(e.x1,e.y1,e.x2,e.y2,!0)&&(this._dispatchRangeEvent("rangeChanging","pan"),this.render(),this._dispatchRangeEvent("rangeChanged","pan"),this.dragStartPoint.x=a,this.dragStartPoint.y=c);else if(this.zoomEnabled){this.resetOverlayedCanvas();b=this.overlaidCanvasCtx.globalAlpha;
this.overlaidCanvasCtx.fillStyle="#A89896";var d=e?this.dragStartPoint.x:this.plotArea.x1,g=f?this.dragStartPoint.y:this.plotArea.y1,h=e?a-this.dragStartPoint.x:this.plotArea.x2-this.plotArea.x1,q=f?c-this.dragStartPoint.y:this.plotArea.y2-this.plotArea.y1;this.validateRegion(d,g,e?a:this.plotArea.x2-this.plotArea.x1,f?c:this.plotArea.y2-this.plotArea.y1,"xy"!==this.zoomType).isValid&&(this.resetOverlayedCanvas(),this.overlaidCanvasCtx.fillStyle="#99B2B5");this.overlaidCanvasCtx.globalAlpha=0.7;this.overlaidCanvasCtx.fillRect(d,
g,h,q);this.overlaidCanvasCtx.globalAlpha=b}}else this._toolTip.mouseMoveHandler(a,c)};v.prototype._zoomPanToSelectedRegion=function(a,c,b,d,e){a=this.validateRegion(a,c,b,d,e);c=a.axesWithValidRange;b=a.axesRanges;if(a.isValid)for(d=0;d<c.length;d++)e=b[d],c[d].setViewPortRange(e.val1,e.val2);return a.isValid};v.prototype.validateRegion=function(a,c,b,d,e){e=e||!1;var f=0<=this.zoomType.indexOf("x"),g=0<=this.zoomType.indexOf("y"),h=!1,q=[],k=[],n=[];this.axisX&&f&&k.push(this.axisX);this.axisY&&
g&&k.push(this.axisY);this.axisY2&&g&&k.push(this.axisY2);for(f=0;f<k.length;f++){var g=k[f],m=g.convertPixelToValue({x:a,y:c}),l=g.convertPixelToValue({x:b,y:d});if(m>l)var p=l,l=m,m=p;if(isFinite(g.dataInfo.minDiff))if(!(Math.abs(l-m)<3*Math.abs(g.dataInfo.minDiff)||m<g.minimum||l>g.maximum))q.push(g),n.push({val1:m,val2:l}),h=!0;else if(!e){h=!1;break}}return{isValid:h,axesWithValidRange:q,axesRanges:n}};v.prototype.preparePlotArea=function(){var a=this.plotArea,c=this.axisY?this.axisY:this.axisY2;
!u&&(0<a.x1||0<a.y1)&&a.ctx.translate(a.x1,a.y1);this.axisX&&c?(a.x1=this.axisX.lineCoordinates.x1<this.axisX.lineCoordinates.x2?this.axisX.lineCoordinates.x1:c.lineCoordinates.x1,a.y1=this.axisX.lineCoordinates.y1<c.lineCoordinates.y1?this.axisX.lineCoordinates.y1:c.lineCoordinates.y1,a.x2=this.axisX.lineCoordinates.x2>c.lineCoordinates.x2?this.axisX.lineCoordinates.x2:c.lineCoordinates.x2,a.y2=this.axisX.lineCoordinates.y2>this.axisX.lineCoordinates.y1?this.axisX.lineCoordinates.y2:c.lineCoordinates.y2,
a.width=a.x2-a.x1,a.height=a.y2-a.y1):(c=this.layoutManager.getFreeSpace(),a.x1=c.x1,a.x2=c.x2,a.y1=c.y1,a.y2=c.y2,a.width=c.width,a.height=c.height);u||(a.canvas.width=a.width,a.canvas.height=a.height,a.canvas.style.left=a.x1+"px",a.canvas.style.top=a.y1+"px",(0<a.x1||0<a.y1)&&a.ctx.translate(-a.x1,-a.y1));a.layoutManager=new da(a.x1,a.y1,a.x2,a.y2,2)};v.prototype.getPixelCoordinatesOnPlotArea=function(a,c){return{x:this.axisX.getPixelCoordinatesOnAxis(a).x,y:this.axisY.getPixelCoordinatesOnAxis(c).y}};
v.prototype.renderIndexLabels=function(a){a=a||this.plotArea.ctx;for(var c=this.plotArea,b=0,d=0,e=0,f=0,g=b=f=d=e=0,h=0,q=0;q<this._indexLabels.length;q++){var k=this._indexLabels[q],n=k.chartType.toLowerCase(),m,l,p=R("indexLabelFontColor",k.dataPoint,k.dataSeries),g=R("indexLabelFontSize",k.dataPoint,k.dataSeries),h=R("indexLabelFontFamily",k.dataPoint,k.dataSeries);m=R("indexLabelFontStyle",k.dataPoint,k.dataSeries);l=R("indexLabelFontWeight",k.dataPoint,k.dataSeries);var f=R("indexLabelBackgroundColor",
k.dataPoint,k.dataSeries),d=R("indexLabelMaxWidth",k.dataPoint,k.dataSeries),e=R("indexLabelWrap",k.dataPoint,k.dataSeries),r=R("indexLabelLineDashType",k.dataPoint,k.dataSeries),t=R("indexLabelLineColor",k.dataPoint,k.dataSeries),y=x(k.dataPoint.indexLabelLineThickness)?x(k.dataSeries._options.indexLabelLineThickness)?0:k.dataSeries._options.indexLabelLineThickness:k.dataPoint.indexLabelLineThickness,b=0<y?Math.min(10,("normal"===this.plotInfo.axisPlacement?this.plotArea.height:this.plotArea.width)<<
0):0,s={percent:null,total:null},z=null;if(0<=k.dataSeries.type.indexOf("stacked")||"pie"===k.dataSeries.type||"doughnut"===k.dataSeries.type)s=this.getPercentAndTotal(k.dataSeries,k.dataPoint);if(k.dataSeries.indexLabelFormatter||k.dataPoint.indexLabelFormatter)z={chart:this._publicChartReference,dataSeries:k.dataSeries,dataPoint:k.dataPoint,index:k.indexKeyword,total:s.total,percent:s.percent};var w=k.dataPoint.indexLabelFormatter?k.dataPoint.indexLabelFormatter(z):k.dataPoint.indexLabel?this.replaceKeywordsWithValue(k.dataPoint.indexLabel,
k.dataPoint,k.dataSeries,null,k.indexKeyword):k.dataSeries.indexLabelFormatter?k.dataSeries.indexLabelFormatter(z):k.dataSeries.indexLabel?this.replaceKeywordsWithValue(k.dataSeries.indexLabel,k.dataPoint,k.dataSeries,null,k.indexKeyword):null;if(null!==w&&""!==w){var s=R("indexLabelPlacement",k.dataPoint,k.dataSeries),z=R("indexLabelOrientation",k.dataPoint,k.dataSeries),u=k.direction,W=k.dataSeries.axisX,A=k.dataSeries.axisY,v=!1,p=new O(a,{x:0,y:0,maxWidth:d?d:0.5*this.width,maxHeight:e?5*g:1.5*
g,angle:"horizontal"===z?0:-90,text:w,padding:0,backgroundColor:f,horizontalAlign:"left",fontSize:g,fontFamily:h,fontWeight:l,fontColor:p,fontStyle:m,textBaseline:"top"});p.measureText();if(0<=n.indexOf("line")||0<=n.indexOf("area")||0<=n.indexOf("bubble")||0<=n.indexOf("scatter")){if(k.dataPoint.x<W.viewportMinimum||k.dataPoint.x>W.viewportMaximum||k.dataPoint.y<A.viewportMinimum||k.dataPoint.y>A.viewportMaximum)continue}else if(0<=n.indexOf("column")){if(k.dataPoint.x<W.viewportMinimum||k.dataPoint.x>
W.viewportMaximum||k.bounds.y1>c.y2||k.bounds.y2<c.y1)continue}else if(0<=n.indexOf("bar")){if(k.dataPoint.x<W.viewportMinimum||k.dataPoint.x>W.viewportMaximum||k.bounds.x1>c.x2||k.bounds.x2<c.x1)continue}else if(k.dataPoint.x<W.viewportMinimum||k.dataPoint.x>W.viewportMaximum)continue;d=f=2;"horizontal"===z?(g=p.width,h=p.height):(h=p.width,g=p.height);if("normal"===this.plotInfo.axisPlacement){if(0<=n.indexOf("line")||0<=n.indexOf("area"))s="auto",f=4;else if(0<=n.indexOf("stacked"))"auto"===s&&
(s="inside");else if("bubble"===n||"scatter"===n)s="inside";m=k.point.x-g/2;"inside"!==s?(d=c.y1,e=c.y2,0<u?(l=k.point.y-h-f-b,l<d&&(l="auto"===s?Math.max(k.point.y,d)+f+b:d+f+b,v=l+h>k.point.y)):(l=k.point.y+f+b,l>e-h-f-b&&(l="auto"===s?Math.min(k.point.y,e)-h-f-b:e-h-f-b,v=l<k.point.y))):(d=Math.max(k.bounds.y1,c.y1),e=Math.min(k.bounds.y2,c.y2),b=0<=n.indexOf("range")?0<u?Math.max(k.bounds.y1,c.y1)+h/2+f:Math.min(k.bounds.y2,c.y2)-h/2-f:(Math.max(k.bounds.y1,c.y1)+Math.min(k.bounds.y2,c.y2))/2,
0<u?(l=Math.max(k.point.y,b)-h/2,l<d&&("bubble"===n||"scatter"===n)&&(l=Math.max(k.point.y-h-f,c.y1+f))):(l=Math.min(k.point.y,b)-h/2,l>e-h-f&&("bubble"===n||"scatter"===n)&&(l=Math.min(k.point.y+f,c.y2-h-f))),l=Math.min(l,e-h))}else 0<=n.indexOf("line")||0<=n.indexOf("area")||0<=n.indexOf("scatter")?(s="auto",d=4):0<=n.indexOf("stacked")?"auto"===s&&(s="inside"):"bubble"===n&&(s="inside"),l=k.point.y-h/2,"inside"!==s?(f=c.x1,e=c.x2,0>u?(m=k.point.x-g-d-b,m<f&&(m="auto"===s?Math.max(k.point.x,f)+
d+b:f+d+b,v=m+g>k.point.x)):(m=k.point.x+d+b,m>e-g-d-b&&(m="auto"===s?Math.min(k.point.x,e)-g-d-b:e-g-d-b,v=m<k.point.x))):(f=Math.max(k.bounds.x1,c.x1),Math.min(k.bounds.x2,c.x2),b=0<=n.indexOf("range")?0>u?Math.max(k.bounds.x1,c.x1)+g/2+d:Math.min(k.bounds.x2,c.x2)-g/2-d:(Math.max(k.bounds.x1,c.x1)+Math.min(k.bounds.x2,c.x2))/2,m=0>u?Math.max(k.point.x,b)-g/2:Math.min(k.point.x,b)-g/2,m=Math.max(m,f));"vertical"===z&&(l+=h);p.x=m;p.y=l;p.render(!0);y&&("inside"!==s&&(0>n.indexOf("bar")&&k.point.x>
c.x1&&k.point.x<c.x2||!v)&&(0>n.indexOf("column")&&k.point.y>c.y1&&k.point.y<c.y2||!v))&&(a.lineWidth=y,a.strokeStyle=t?t:"gray",a.setLineDash&&a.setLineDash(D(r,y)),a.beginPath(),a.moveTo(k.point.x,k.point.y),0<=n.indexOf("bar")?a.lineTo(m+(0<k.direction?0:g),l+("horizontal"===z?h:-h)/2):0<=n.indexOf("column")?a.lineTo(m+g/2,l+((0<k.direction?h:-h)+("horizontal"===z?h:-h))/2):a.lineTo(m+g/2,l+((l<k.point.y?h:-h)+("horizontal"===z?h:-h))/2),a.stroke())}}return{source:a,dest:this.plotArea.ctx,animationCallback:B.fadeInAnimation,
easingFunction:B.easing.easeInQuad,animationBase:0,startTimePercent:0.7}};v.prototype.renderLine=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx;c.save();var d=this.plotArea;c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var f=a.dataSeriesIndexes[e],g=this.data[f];c.lineWidth=g.lineThickness;var h=g.dataPoints,q="solid";if(c.setLineDash){var k=D(g.nullDataLineDashType,
g.lineThickness),q=g.lineDashType,n=D(q,g.lineThickness);c.setLineDash(n)}var m=g.id;this._eventManager.objectMap[m]={objectType:"dataSeries",dataSeriesIndex:f};m=C(m);b.strokeStyle=m;b.lineWidth=0<g.lineThickness?Math.max(g.lineThickness,4):0;var m=g._colorSet,l=m=g._options.lineColor?g._options.lineColor:m[0];c.strokeStyle=m;var p=!0,r=0,t,y;c.beginPath();if(0<h.length){for(var s=!1,r=0;r<h.length;r++)if(t=h[r].x.getTime?h[r].x.getTime():h[r].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax&&
(!g.connectNullData||!s)))if("number"!==typeof h[r].y)0<r&&!(g.connectNullData||s||p)&&(c.stroke(),u&&b.stroke()),s=!0;else{t=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(t-a.axisX.conversionParameters.minimum)+0.5<<0;y=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(h[r].y-a.axisY.conversionParameters.minimum)+0.5<<0;var z=g.dataPointIds[r];this._eventManager.objectMap[z]={id:z,objectType:"dataPoint",dataSeriesIndex:f,dataPointIndex:r,
x1:t,y1:y};p||s?(!p&&g.connectNullData?(c.setLineDash&&(g._options.nullDataLineDashType||q===g.lineDashType&&g.lineDashType!==g.nullDataLineDashType)&&(c.stroke(),q=g.nullDataLineDashType,c.setLineDash(k)),c.lineTo(t,y),u&&b.lineTo(t,y)):(c.beginPath(),c.moveTo(t,y),u&&(b.beginPath(),b.moveTo(t,y))),s=p=!1):(c.lineTo(t,y),u&&b.lineTo(t,y),0==r%500&&(c.stroke(),c.beginPath(),c.moveTo(t,y),u&&(b.stroke(),b.beginPath(),b.moveTo(t,y))));r<h.length-1&&(l!==(h[r].lineColor||m)||q!==(h[r].lineDashType||
g.lineDashType))&&(c.stroke(),c.beginPath(),c.moveTo(t,y),l=h[r].lineColor||m,c.strokeStyle=l,c.setLineDash&&(h[r].lineDashType?(q=h[r].lineDashType,c.setLineDash(D(q,g.lineThickness))):(q=g.lineDashType,c.setLineDash(n))));if(0<h[r].markerSize||0<g.markerSize){var w=g.getMarkerProperties(r,t,y,c);d.push(w);z=C(z);u&&d.push({x:t,y:y,ctx:b,type:w.type,size:w.size,color:z,borderColor:z,borderThickness:w.borderThickness})}(h[r].indexLabel||g.indexLabel||h[r].indexLabelFormatter||g.indexLabelFormatter)&&
this._indexLabels.push({chartType:"line",dataPoint:h[r],dataSeries:g,point:{x:t,y:y},direction:0<=h[r].y?1:-1,color:m})}c.stroke();u&&b.stroke()}}P.drawMarkers(d);c.restore();c.beginPath();u&&b.beginPath();return{source:c,dest:this.plotArea.ctx,animationCallback:B.xClipAnimation,easingFunction:B.easing.linear,animationBase:0}}};v.prototype.renderStepLine=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx;c.save();var d=this.plotArea;
c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var f=a.dataSeriesIndexes[e],g=this.data[f];c.lineWidth=g.lineThickness;var h=g.dataPoints,q="solid";if(c.setLineDash){var k=D(g.nullDataLineDashType,g.lineThickness),q=g.lineDashType,n=D(q,g.lineThickness);c.setLineDash(n)}var m=g.id;this._eventManager.objectMap[m]={objectType:"dataSeries",dataSeriesIndex:f};m=C(m);b.strokeStyle=m;b.lineWidth=0<g.lineThickness?Math.max(g.lineThickness,4):
0;var m=g._colorSet,l=m=g._options.lineColor?g._options.lineColor:m[0];c.strokeStyle=m;var p=!0,r=0,t,y;c.beginPath();if(0<h.length){for(var s=!1,r=0;r<h.length;r++)if(t=h[r].getTime?h[r].x.getTime():h[r].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax&&(!g.connectNullData||!s)))if("number"!==typeof h[r].y)0<r&&!(g.connectNullData||s||p)&&(c.stroke(),u&&b.stroke()),s=!0;else{var z=y;t=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(t-a.axisX.conversionParameters.minimum)+
0.5<<0;y=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(h[r].y-a.axisY.conversionParameters.minimum)+0.5<<0;var w=g.dataPointIds[r];this._eventManager.objectMap[w]={id:w,objectType:"dataPoint",dataSeriesIndex:f,dataPointIndex:r,x1:t,y1:y};p||s?(!p&&g.connectNullData?(c.setLineDash&&(g._options.nullDataLineDashType||q===g.lineDashType&&g.lineDashType!==g.nullDataLineDashType)&&(c.stroke(),q=g.nullDataLineDashType,c.setLineDash(k)),c.lineTo(t,z),c.lineTo(t,y),u&&(b.lineTo(t,
z),b.lineTo(t,y))):(c.beginPath(),c.moveTo(t,y),u&&(b.beginPath(),b.moveTo(t,y))),s=p=!1):(c.lineTo(t,z),u&&b.lineTo(t,z),c.lineTo(t,y),u&&b.lineTo(t,y),0==r%500&&(c.stroke(),c.beginPath(),c.moveTo(t,y),u&&(b.stroke(),b.beginPath(),b.moveTo(t,y))));r<h.length-1&&(l!==(h[r].lineColor||m)||q!==(h[r].lineDashType||g.lineDashType))&&(c.stroke(),c.beginPath(),c.moveTo(t,y),l=h[r].lineColor||m,c.strokeStyle=l,c.setLineDash&&(h[r].lineDashType?(q=h[r].lineDashType,c.setLineDash(D(q,g.lineThickness))):(q=
g.lineDashType,c.setLineDash(n))));if(0<h[r].markerSize||0<g.markerSize)z=g.getMarkerProperties(r,t,y,c),d.push(z),w=C(w),u&&d.push({x:t,y:y,ctx:b,type:z.type,size:z.size,color:w,borderColor:w,borderThickness:z.borderThickness});(h[r].indexLabel||g.indexLabel||h[r].indexLabelFormatter||g.indexLabelFormatter)&&this._indexLabels.push({chartType:"stepLine",dataPoint:h[r],dataSeries:g,point:{x:t,y:y},direction:0<=h[r].y?1:-1,color:m})}c.stroke();u&&b.stroke()}}P.drawMarkers(d);c.restore();c.beginPath();
u&&b.beginPath();return{source:c,dest:this.plotArea.ctx,animationCallback:B.xClipAnimation,easingFunction:B.easing.linear,animationBase:0}}};v.prototype.renderSpline=function(a){function c(a){a=ma(a,2);if(0<a.length){b.beginPath();u&&d.beginPath();b.moveTo(a[0].x,a[0].y);a[0].newStrokeStyle&&(b.strokeStyle=a[0].newStrokeStyle);a[0].newLineDashArray&&b.setLineDash(a[0].newLineDashArray);u&&d.moveTo(a[0].x,a[0].y);for(var c=0;c<a.length-3;c+=3)if(b.bezierCurveTo(a[c+1].x,a[c+1].y,a[c+2].x,a[c+2].y,
a[c+3].x,a[c+3].y),u&&d.bezierCurveTo(a[c+1].x,a[c+1].y,a[c+2].x,a[c+2].y,a[c+3].x,a[c+3].y),0<c&&0===c%3E3||a[c+3].newStrokeStyle||a[c+3].newLineDashArray)b.stroke(),b.beginPath(),b.moveTo(a[c+3].x,a[c+3].y),a[c+3].newStrokeStyle&&(b.strokeStyle=a[c+3].newStrokeStyle),a[c+3].newLineDashArray&&b.setLineDash(a[c+3].newLineDashArray),u&&(d.stroke(),d.beginPath(),d.moveTo(a[c+3].x,a[c+3].y));b.stroke();u&&d.stroke()}}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=
this._eventManager.ghostCtx;b.save();var e=this.plotArea;b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();for(var e=[],f=0;f<a.dataSeriesIndexes.length;f++){var g=a.dataSeriesIndexes[f],h=this.data[g];b.lineWidth=h.lineThickness;var q=h.dataPoints,k="solid";if(b.setLineDash){var n=D(h.nullDataLineDashType,h.lineThickness),k=h.lineDashType,m=D(k,h.lineThickness);b.setLineDash(m)}var l=h.id;this._eventManager.objectMap[l]={objectType:"dataSeries",dataSeriesIndex:g};l=C(l);d.strokeStyle=l;d.lineWidth=
0<h.lineThickness?Math.max(h.lineThickness,4):0;var l=h._colorSet,p=l=h._options.lineColor?h._options.lineColor:l[0];b.strokeStyle=l;var r=0,t,y,s=[];b.beginPath();if(0<q.length)for(y=!1,r=0;r<q.length;r++)if(t=q[r].getTime?q[r].x.getTime():q[r].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax&&(!h.connectNullData||!y)))if("number"!==typeof q[r].y)0<r&&!y&&(h.connectNullData?b.setLineDash&&(0<s.length&&(h._options.nullDataLineDashType||!q[r-1].lineDashType))&&(s[s.length-1].newLineDashArray=
n,k=h.nullDataLineDashType):(c(s),s=[])),y=!0;else{t=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(t-a.axisX.conversionParameters.minimum)+0.5<<0;y=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(q[r].y-a.axisY.conversionParameters.minimum)+0.5<<0;var z=h.dataPointIds[r];this._eventManager.objectMap[z]={id:z,objectType:"dataPoint",dataSeriesIndex:g,dataPointIndex:r,x1:t,y1:y};s[s.length]={x:t,y:y};r<q.length-1&&(p!==(q[r].lineColor||
l)||k!==(q[r].lineDashType||h.lineDashType))&&(p=q[r].lineColor||l,s[s.length-1].newStrokeStyle=p,b.setLineDash&&(q[r].lineDashType?(k=q[r].lineDashType,s[s.length-1].newLineDashArray=D(k,h.lineThickness)):(k=h.lineDashType,s[s.length-1].newLineDashArray=m)));if(0<q[r].markerSize||0<h.markerSize){var w=h.getMarkerProperties(r,t,y,b);e.push(w);z=C(z);u&&e.push({x:t,y:y,ctx:d,type:w.type,size:w.size,color:z,borderColor:z,borderThickness:w.borderThickness})}(q[r].indexLabel||h.indexLabel||q[r].indexLabelFormatter||
h.indexLabelFormatter)&&this._indexLabels.push({chartType:"spline",dataPoint:q[r],dataSeries:h,point:{x:t,y:y},direction:0<=q[r].y?1:-1,color:l});y=!1}c(s)}P.drawMarkers(e);b.restore();b.beginPath();u&&d.beginPath();return{source:b,dest:this.plotArea.ctx,animationCallback:B.xClipAnimation,easingFunction:B.easing.linear,animationBase:0}}};var M=function(a,c,b,d,e,f,g,h,q,k,n,m,l){"undefined"===typeof l&&(l=1);g=g||0;h=h||"black";var p=15<d-c&&15<e-b?8:0.35*Math.min(d-c,e-b);a.beginPath();a.moveTo(c,
b);a.save();a.fillStyle=f;a.globalAlpha=l;a.fillRect(c,b,d-c,e-b);a.globalAlpha=1;0<g&&(l=0===g%2?0:0.5,a.beginPath(),a.lineWidth=g,a.strokeStyle=h,a.moveTo(c,b),a.rect(c-l,b-l,d-c+2*l,e-b+2*l),a.stroke());a.restore();!0===q&&(a.save(),a.beginPath(),a.moveTo(c,b),a.lineTo(c+p,b+p),a.lineTo(d-p,b+p),a.lineTo(d,b),a.closePath(),g=a.createLinearGradient((d+c)/2,b+p,(d+c)/2,b),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, .4)"),a.fillStyle=g,a.fill(),a.restore());!0===k&&(a.save(),a.beginPath(),
a.moveTo(c,e),a.lineTo(c+p,e-p),a.lineTo(d-p,e-p),a.lineTo(d,e),a.closePath(),g=a.createLinearGradient((d+c)/2,e-p,(d+c)/2,e),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, .4)"),a.fillStyle=g,a.fill(),a.restore());!0===n&&(a.save(),a.beginPath(),a.moveTo(c,b),a.lineTo(c+p,b+p),a.lineTo(c+p,e-p),a.lineTo(c,e),a.closePath(),g=a.createLinearGradient(c+p,(e+b)/2,c,(e+b)/2),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=g,a.fill(),a.restore());!0===m&&(a.save(),
a.beginPath(),a.moveTo(d,b),a.lineTo(d-p,b+p),a.lineTo(d-p,e-p),a.lineTo(d,e),g=a.createLinearGradient(d-p,(e+b)/2,d,(e+b)/2),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=g,g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=g,a.fill(),a.closePath(),a.restore())};v.prototype.renderColumn=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=0,f,g,h,q=a.axisY.conversionParameters.reference+
a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,k=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.width,0.9*(this.plotArea.width/a.plotType.totalDataSeries))<<0,n=a.axisX.dataInfo.minDiff;isFinite(n)||(n=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));n=this.dataPointWidth?this.dataPointWidth:0.9*(d.width/
Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(n)/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&e>k&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,k));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&k<e)&&(k=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));n<e&&(n=e);n>k&&(n=k);c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),
this._eventManager.ghostCtx.clip());for(d=0;d<a.dataSeriesIndexes.length;d++){var k=a.dataSeriesIndexes[d],m=this.data[k],l=m.dataPoints;if(0<l.length)for(var p=5<n&&m.bevelEnabled?!0:!1,e=0;e<l.length;e++)if(l[e].getTime?h=l[e].x.getTime():h=l[e].x,!(h<a.axisX.dataInfo.viewPortMin||h>a.axisX.dataInfo.viewPortMax)&&"number"===typeof l[e].y){f=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(h-a.axisX.conversionParameters.minimum)+0.5<<0;g=a.axisY.conversionParameters.reference+
a.axisY.conversionParameters.pixelPerUnit*(l[e].y-a.axisY.conversionParameters.minimum)+0.5<<0;f=f-a.plotType.totalDataSeries*n/2+(a.previousDataSeriesCount+d)*n<<0;var r=f+n<<0,t;0<=l[e].y?t=q:(t=g,g=q);g>t&&(t=g=t);b=l[e].color?l[e].color:m._colorSet[e%m._colorSet.length];M(c,f,g,r,t,b,0,null,p&&0<=l[e].y,0>l[e].y&&p,!1,!1,m.fillOpacity);b=m.dataPointIds[e];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:e,x1:f,y1:g,x2:r,y2:t};b=C(b);u&&M(this._eventManager.ghostCtx,
f,g,r,t,b,0,null,!1,!1,!1,!1);(l[e].indexLabel||m.indexLabel||l[e].indexLabelFormatter||m.indexLabelFormatter)&&this._indexLabels.push({chartType:"column",dataPoint:l[e],dataSeries:m,point:{x:f+(r-f)/2,y:0<=l[e].y?g:t},direction:0<=l[e].y?1:-1,bounds:{x1:f,y1:Math.min(g,t),x2:r,y2:Math.max(g,t)},color:b})}}c.restore();u&&this._eventManager.ghostCtx.restore();a=Math.min(q,a.axisY.boundingRect.y2);return{source:c,dest:this.plotArea.ctx,animationCallback:B.yScaleAnimation,easingFunction:B.easing.easeOutQuart,
animationBase:a}}};v.prototype.renderStackedColumn=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],f=[],g=0,h,q=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,g=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,k=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.width<<
0,n=a.axisX.dataInfo.minDiff;isFinite(n)||(n=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));n=this.dataPointWidth?this.dataPointWidth:0.9*(d.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(n)/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&g>k&&(g=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,k));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&k<g)&&(k=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,g));n<g&&(n=g);n>k&&(n=k);
c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(k=0;k<a.dataSeriesIndexes.length;k++){var m=a.dataSeriesIndexes[k],l=this.data[m],p=l.dataPoints;if(0<p.length){var r=5<n&&l.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(g=0;g<p.length;g++)if(b=p[g].x.getTime?p[g].x.getTime():p[g].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&
"number"===typeof p[g].y){d=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(b-a.axisX.conversionParameters.minimum)+0.5<<0;h=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(p[g].y-a.axisY.conversionParameters.minimum);var t=d-a.plotType.plotUnits.length*n/2+a.index*n<<0,y=t+n<<0,s;if(0<=p[g].y){var z=e[b]?e[b]:0;h-=z;s=q-z;e[b]=z+(s-h)}else z=f[b]?f[b]:0,s=h+z,h=q+z,f[b]=z+(s-h);b=p[g].color?p[g].color:l._colorSet[g%l._colorSet.length];
M(c,t,h,y,s,b,0,null,r&&0<=p[g].y,0>p[g].y&&r,!1,!1,l.fillOpacity);b=l.dataPointIds[g];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:g,x1:t,y1:h,x2:y,y2:s};b=C(b);u&&M(this._eventManager.ghostCtx,t,h,y,s,b,0,null,!1,!1,!1,!1);(p[g].indexLabel||l.indexLabel||p[g].indexLabelFormatter||l.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedColumn",dataPoint:p[g],dataSeries:l,point:{x:d,y:0<=p[g].y?h:s},direction:0<=p[g].y?1:-1,bounds:{x1:t,y1:Math.min(h,
s),x2:y,y2:Math.max(h,s)},color:b})}}}c.restore();u&&this._eventManager.ghostCtx.restore();a=Math.min(q,a.axisY.boundingRect.y2);return{source:c,dest:this.plotArea.ctx,animationCallback:B.yScaleAnimation,easingFunction:B.easing.easeOutQuart,animationBase:a}}};v.prototype.renderStackedColumn100=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],f=[],g=0,h,q=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*
(0-a.axisY.conversionParameters.minimum)<<0,g=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,k=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.width<<0,n=a.axisX.dataInfo.minDiff;isFinite(n)||(n=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));n=this.dataPointWidth?this.dataPointWidth:0.9*(d.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(n)/a.plotType.plotUnits.length)<<
0;this.dataPointMaxWidth&&g>k&&(g=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,k));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&k<g)&&(k=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,g));n<g&&(n=g);n>k&&(n=k);c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(k=0;k<a.dataSeriesIndexes.length;k++){var m=a.dataSeriesIndexes[k],
l=this.data[m],p=l.dataPoints;if(0<p.length)for(var r=5<n&&l.bevelEnabled?!0:!1,g=0;g<p.length;g++)if(b=p[g].x.getTime?p[g].x.getTime():p[g].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof p[g].y){d=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(b-a.axisX.conversionParameters.minimum)+0.5<<0;h=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*((0!==a.dataPointYSums[b]?100*(p[g].y/a.dataPointYSums[b]):
0)-a.axisY.conversionParameters.minimum);var t=d-a.plotType.plotUnits.length*n/2+a.index*n<<0,y=t+n<<0,s;if(0<=p[g].y){var z=e[b]?e[b]:0;h-=z;s=q-z;e[b]=z+(s-h)}else z=f[b]?f[b]:0,s=h+z,h=q+z,f[b]=z+(s-h);b=p[g].color?p[g].color:l._colorSet[g%l._colorSet.length];M(c,t,h,y,s,b,0,null,r&&0<=p[g].y,0>p[g].y&&r,!1,!1,l.fillOpacity);b=l.dataPointIds[g];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:g,x1:t,y1:h,x2:y,y2:s};b=C(b);u&&M(this._eventManager.ghostCtx,
t,h,y,s,b,0,null,!1,!1,!1,!1);(p[g].indexLabel||l.indexLabel||p[g].indexLabelFormatter||l.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedColumn100",dataPoint:p[g],dataSeries:l,point:{x:d,y:0<=p[g].y?h:s},direction:0<=p[g].y?1:-1,bounds:{x1:t,y1:Math.min(h,s),x2:y,y2:Math.max(h,s)},color:b})}}c.restore();u&&this._eventManager.ghostCtx.restore();a=Math.min(q,a.axisY.boundingRect.y2);return{source:c,dest:this.plotArea.ctx,animationCallback:B.yScaleAnimation,easingFunction:B.easing.easeOutQuart,
animationBase:a}}};v.prototype.renderBar=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=0,f,g,h,q=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,k=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,
0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0,n=a.axisX.dataInfo.minDiff;isFinite(n)||(n=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));n=this.dataPointWidth?this.dataPointWidth:0.9*(d.height/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(n)/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&e>k&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,k));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&k<e)&&(k=Math.max(this.dataPointWidth?
this.dataPointWidth:-Infinity,e));n<e&&(n=e);n>k&&(n=k);c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(d=0;d<a.dataSeriesIndexes.length;d++){var k=a.dataSeriesIndexes[d],m=this.data[k],l=m.dataPoints;if(0<l.length){var p=5<n&&m.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(e=0;e<l.length;e++)if(l[e].getTime?h=l[e].x.getTime():h=l[e].x,
!(h<a.axisX.dataInfo.viewPortMin||h>a.axisX.dataInfo.viewPortMax)&&"number"===typeof l[e].y){g=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(h-a.axisX.conversionParameters.minimum)+0.5<<0;f=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(l[e].y-a.axisY.conversionParameters.minimum)+0.5<<0;g=g-a.plotType.totalDataSeries*n/2+(a.previousDataSeriesCount+d)*n<<0;var r=g+n<<0,t;0<=l[e].y?t=q:(t=f,f=q);b=l[e].color?l[e].color:m._colorSet[e%
m._colorSet.length];M(c,t,g,f,r,b,0,null,p,!1,!1,!1,m.fillOpacity);b=m.dataPointIds[e];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:e,x1:t,y1:g,x2:f,y2:r};b=C(b);u&&M(this._eventManager.ghostCtx,t,g,f,r,b,0,null,!1,!1,!1,!1);(l[e].indexLabel||m.indexLabel||l[e].indexLabelFormatter||m.indexLabelFormatter)&&this._indexLabels.push({chartType:"bar",dataPoint:l[e],dataSeries:m,point:{x:0<=l[e].y?f:t,y:g+(r-g)/2},direction:0<=l[e].y?1:-1,bounds:{x1:Math.min(t,
f),y1:g,x2:Math.max(t,f),y2:r},color:b})}}}c.restore();u&&this._eventManager.ghostCtx.restore();a=Math.max(q,a.axisX.boundingRect.x2);return{source:c,dest:this.plotArea.ctx,animationCallback:B.xScaleAnimation,easingFunction:B.easing.easeOutQuart,animationBase:a}}};v.prototype.renderStackedBar=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],f=[],g=0,h,q=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*
(0-a.axisY.conversionParameters.minimum)<<0,g=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,k=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.height<<0,n=a.axisX.dataInfo.minDiff;isFinite(n)||(n=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));n=this.dataPointWidth?this.dataPointWidth:0.9*(d.height/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(n)/a.plotType.plotUnits.length)<<
0;this.dataPointMaxWidth&&g>k&&(g=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,k));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&k<g)&&(k=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,g));n<g&&(n=g);n>k&&(n=k);c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(k=0;k<a.dataSeriesIndexes.length;k++){var m=a.dataSeriesIndexes[k],
l=this.data[m],p=l.dataPoints;if(0<p.length){var r=5<n&&l.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(g=0;g<p.length;g++)if(b=p[g].x.getTime?p[g].x.getTime():p[g].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof p[g].y){d=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(b-a.axisX.conversionParameters.minimum)+0.5<<0;h=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(p[g].y-a.axisY.conversionParameters.minimum);
var t=d-a.plotType.plotUnits.length*n/2+a.index*n<<0,y=t+n<<0,s;if(0<=p[g].y){var z=e[b]?e[b]:0;s=q+z;h+=z;e[b]=z+(h-s)}else z=f[b]?f[b]:0,s=h-z,h=q-z,f[b]=z+(h-s);b=p[g].color?p[g].color:l._colorSet[g%l._colorSet.length];M(c,s,t,h,y,b,0,null,r,!1,!1,!1,l.fillOpacity);b=l.dataPointIds[g];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:g,x1:s,y1:t,x2:h,y2:y};b=C(b);u&&M(this._eventManager.ghostCtx,s,t,h,y,b,0,null,!1,!1,!1,!1);(p[g].indexLabel||l.indexLabel||
p[g].indexLabelFormatter||l.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar",dataPoint:p[g],dataSeries:l,point:{x:0<=p[g].y?h:s,y:d},direction:0<=p[g].y?1:-1,bounds:{x1:Math.min(s,h),y1:t,x2:Math.max(s,h),y2:y},color:b})}}}c.restore();u&&this._eventManager.ghostCtx.restore();a=Math.max(q,a.axisX.boundingRect.x2);return{source:c,dest:this.plotArea.ctx,animationCallback:B.xScaleAnimation,easingFunction:B.easing.easeOutQuart,animationBase:a}}};v.prototype.renderStackedBar100=function(a){var c=
a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],f=[],g=0,h,q=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,g=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,k=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.height<<0,n=a.axisX.dataInfo.minDiff;isFinite(n)||(n=0.3*Math.abs(a.axisX.viewportMaximum-
a.axisX.viewportMinimum));n=this.dataPointWidth?this.dataPointWidth:0.9*(d.height/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(n)/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&g>k&&(g=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,k));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&k<g)&&(k=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,g));n<g&&(n=g);n>k&&(n=k);c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,
d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(k=0;k<a.dataSeriesIndexes.length;k++){var m=a.dataSeriesIndexes[k],l=this.data[m],p=l.dataPoints;if(0<p.length){var r=5<n&&l.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(g=0;g<p.length;g++)if(b=p[g].x.getTime?p[g].x.getTime():p[g].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof p[g].y){d=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*
(b-a.axisX.conversionParameters.minimum)+0.5<<0;h=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*((0!==a.dataPointYSums[b]?100*(p[g].y/a.dataPointYSums[b]):0)-a.axisY.conversionParameters.minimum);var t=d-a.plotType.plotUnits.length*n/2+a.index*n<<0,y=t+n<<0,s;if(0<=p[g].y){var z=e[b]?e[b]:0;s=q+z;h+=z;e[b]=z+(h-s)}else z=f[b]?f[b]:0,s=h-z,h=q-z,f[b]=z+(h-s);b=p[g].color?p[g].color:l._colorSet[g%l._colorSet.length];M(c,s,t,h,y,b,0,null,r,!1,!1,!1,l.fillOpacity);b=
l.dataPointIds[g];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:g,x1:s,y1:t,x2:h,y2:y};b=C(b);u&&M(this._eventManager.ghostCtx,s,t,h,y,b,0,null,!1,!1,!1,!1);(p[g].indexLabel||l.indexLabel||p[g].indexLabelFormatter||l.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar100",dataPoint:p[g],dataSeries:l,point:{x:0<=p[g].y?h:s,y:d},direction:0<=p[g].y?1:-1,bounds:{x1:Math.min(s,h),y1:t,x2:Math.max(s,h),y2:y},color:b})}}}c.restore();u&&this._eventManager.ghostCtx.restore();
a=Math.max(q,a.axisX.boundingRect.x2);return{source:c,dest:this.plotArea.ctx,animationCallback:B.xScaleAnimation,easingFunction:B.easing.easeOutQuart,animationBase:a}}};v.prototype.renderArea=function(a){function c(){z&&(0<k.lineThickness&&b.stroke(),0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?s=y:0>a.axisY.viewportMaximum?s=f.y1:0<a.axisY.viewportMinimum&&(s=e.y2),b.lineTo(p,s),b.lineTo(z.x,s),b.closePath(),b.globalAlpha=k.fillOpacity,b.fill(),b.globalAlpha=1,u&&(d.lineTo(p,s),d.lineTo(z.x,
s),d.closePath(),d.fill()),b.beginPath(),b.moveTo(p,r),d.beginPath(),d.moveTo(p,r),z={x:p,y:r})}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=a.axisX.lineCoordinates,f=a.axisY.lineCoordinates,g=[],h=this.plotArea;b.save();u&&d.save();b.beginPath();b.rect(h.x1,h.y1,h.width,h.height);b.clip();u&&(d.beginPath(),d.rect(h.x1,h.y1,h.width,h.height),d.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var q=a.dataSeriesIndexes[h],k=this.data[q],
n=k.dataPoints,g=k.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:q};g=C(g);d.fillStyle=g;var g=[],m=!0,l=0,p,r,t,y=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)+0.5<<0,s,z=null;if(0<n.length){var w=k._colorSet[l%k._colorSet.length],x=k._options.lineColor||w,v=x;b.fillStyle=w;b.strokeStyle=x;b.lineWidth=k.lineThickness;var A="solid";if(b.setLineDash){var H=D(k.nullDataLineDashType,k.lineThickness),
A=k.lineDashType,K=D(A,k.lineThickness);b.setLineDash(K)}for(var I=!0;l<n.length;l++)if(t=n[l].x.getTime?n[l].x.getTime():n[l].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax&&(!k.connectNullData||!I)))if("number"!==typeof n[l].y)k.connectNullData||(I||m)||c(),I=!0;else{p=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(t-a.axisX.conversionParameters.minimum)+0.5<<0;r=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*
(n[l].y-a.axisY.conversionParameters.minimum)+0.5<<0;m||I?(!m&&k.connectNullData?(b.setLineDash&&(k._options.nullDataLineDashType||A===k.lineDashType&&k.lineDashType!==k.nullDataLineDashType)&&(b.stroke(),A=k.nullDataLineDashType,b.setLineDash(H)),b.lineTo(p,r),u&&d.lineTo(p,r)):(b.beginPath(),b.moveTo(p,r),u&&(d.beginPath(),d.moveTo(p,r)),z={x:p,y:r}),I=m=!1):(b.lineTo(p,r),u&&d.lineTo(p,r),0==l%250&&c());l<n.length-1&&(v!==(n[l].lineColor||x)||A!==(n[l].lineDashType||k.lineDashType))&&(c(),v=n[l].lineColor||
x,b.strokeStyle=v,b.setLineDash&&(n[l].lineDashType?(A=n[l].lineDashType,b.setLineDash(D(A,k.lineThickness))):(A=k.lineDashType,b.setLineDash(K))));var G=k.dataPointIds[l];this._eventManager.objectMap[G]={id:G,objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:l,x1:p,y1:r};0!==n[l].markerSize&&(0<n[l].markerSize||0<k.markerSize)&&(t=k.getMarkerProperties(l,p,r,b),g.push(t),G=C(G),u&&g.push({x:p,y:r,ctx:d,type:t.type,size:t.size,color:G,borderColor:G,borderThickness:t.borderThickness}));(n[l].indexLabel||
k.indexLabel||n[l].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"area",dataPoint:n[l],dataSeries:k,point:{x:p,y:r},direction:0<=n[l].y?1:-1,color:w})}c();P.drawMarkers(g)}}b.restore();u&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:B.xClipAnimation,easingFunction:B.easing.linear,animationBase:0}}};v.prototype.renderSplineArea=function(a){function c(){var c=ma(s,2);if(0<c.length){if(0<k.lineThickness){b.beginPath();
b.moveTo(c[0].x,c[0].y);c[0].newStrokeStyle&&(b.strokeStyle=c[0].newStrokeStyle);c[0].newLineDashArray&&b.setLineDash(c[0].newLineDashArray);for(var g=0;g<c.length-3;g+=3)if(b.bezierCurveTo(c[g+1].x,c[g+1].y,c[g+2].x,c[g+2].y,c[g+3].x,c[g+3].y),u&&d.bezierCurveTo(c[g+1].x,c[g+1].y,c[g+2].x,c[g+2].y,c[g+3].x,c[g+3].y),c[g+3].newStrokeStyle||c[g+3].newLineDashArray)b.stroke(),b.beginPath(),b.moveTo(c[g+3].x,c[g+3].y),c[g+3].newStrokeStyle&&(b.strokeStyle=c[g+3].newStrokeStyle),c[g+3].newLineDashArray&&
b.setLineDash(c[g+3].newLineDashArray);b.stroke()}b.beginPath();b.moveTo(c[0].x,c[0].y);u&&(d.beginPath(),d.moveTo(c[0].x,c[0].y));for(g=0;g<c.length-3;g+=3)b.bezierCurveTo(c[g+1].x,c[g+1].y,c[g+2].x,c[g+2].y,c[g+3].x,c[g+3].y),u&&d.bezierCurveTo(c[g+1].x,c[g+1].y,c[g+2].x,c[g+2].y,c[g+3].x,c[g+3].y);0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?t=r:0>a.axisY.viewportMaximum?t=f.y1:0<a.axisY.viewportMinimum&&(t=e.y2);y={x:c[0].x,y:c[0].y};b.lineTo(c[c.length-1].x,t);b.lineTo(y.x,t);b.closePath();
b.globalAlpha=k.fillOpacity;b.fill();b.globalAlpha=1;u&&(d.lineTo(c[c.length-1].x,t),d.lineTo(y.x,t),d.closePath(),d.fill())}}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=a.axisX.lineCoordinates,f=a.axisY.lineCoordinates,g=[],h=this.plotArea;b.save();u&&d.save();b.beginPath();b.rect(h.x1,h.y1,h.width,h.height);b.clip();u&&(d.beginPath(),d.rect(h.x1,h.y1,h.width,h.height),d.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var q=
a.dataSeriesIndexes[h],k=this.data[q],n=k.dataPoints,g=k.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:q};g=C(g);d.fillStyle=g;var g=[],m=0,l,p,r=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)+0.5<<0,t,y=null,s=[];if(0<n.length){var z=k._colorSet[m%k._colorSet.length],w=k._options.lineColor||z,x=w;b.fillStyle=z;b.strokeStyle=w;b.lineWidth=k.lineThickness;var v="solid";if(b.setLineDash){var A=D(k.nullDataLineDashType,
k.lineThickness),v=k.lineDashType,H=D(v,k.lineThickness);b.setLineDash(H)}for(p=!1;m<n.length;m++)if(l=n[m].x.getTime?n[m].x.getTime():n[m].x,!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax&&(!k.connectNullData||!p)))if("number"!==typeof n[m].y)0<m&&!p&&(k.connectNullData?b.setLineDash&&(0<s.length&&(k._options.nullDataLineDashType||!n[m-1].lineDashType))&&(s[s.length-1].newLineDashArray=A,v=k.nullDataLineDashType):(c(),s=[])),p=!0;else{l=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*
(l-a.axisX.conversionParameters.minimum)+0.5<<0;p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(n[m].y-a.axisY.conversionParameters.minimum)+0.5<<0;var K=k.dataPointIds[m];this._eventManager.objectMap[K]={id:K,objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:m,x1:l,y1:p};s[s.length]={x:l,y:p};m<n.length-1&&(x!==(n[m].lineColor||w)||v!==(n[m].lineDashType||k.lineDashType))&&(x=n[m].lineColor||w,s[s.length-1].newStrokeStyle=x,b.setLineDash&&(n[m].lineDashType?
(v=n[m].lineDashType,s[s.length-1].newLineDashArray=D(v,k.lineThickness)):(v=k.lineDashType,s[s.length-1].newLineDashArray=H)));if(0!==n[m].markerSize&&(0<n[m].markerSize||0<k.markerSize)){var I=k.getMarkerProperties(m,l,p,b);g.push(I);K=C(K);u&&g.push({x:l,y:p,ctx:d,type:I.type,size:I.size,color:K,borderColor:K,borderThickness:I.borderThickness})}(n[m].indexLabel||k.indexLabel||n[m].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"splineArea",dataPoint:n[m],dataSeries:k,
point:{x:l,y:p},direction:0<=n[m].y?1:-1,color:z});p=!1}c();P.drawMarkers(g)}}b.restore();u&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:B.xClipAnimation,easingFunction:B.easing.linear,animationBase:0}}};v.prototype.renderStepArea=function(a){function c(){z&&(0<k.lineThickness&&b.stroke(),0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?s=y:0>a.axisY.viewportMaximum?s=f.y1:0<a.axisY.viewportMinimum&&(s=e.y2),b.lineTo(p,s),b.lineTo(z.x,s),b.closePath(),
b.globalAlpha=k.fillOpacity,b.fill(),b.globalAlpha=1,u&&(d.lineTo(p,s),d.lineTo(z.x,s),d.closePath(),d.fill()),b.beginPath(),b.moveTo(p,r),d.beginPath(),d.moveTo(p,r),z={x:p,y:r})}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=a.axisX.lineCoordinates,f=a.axisY.lineCoordinates,g=[],h=this.plotArea;b.save();u&&d.save();b.beginPath();b.rect(h.x1,h.y1,h.width,h.height);b.clip();u&&(d.beginPath(),d.rect(h.x1,h.y1,h.width,h.height),d.clip());
for(h=0;h<a.dataSeriesIndexes.length;h++){var q=a.dataSeriesIndexes[h],k=this.data[q],n=k.dataPoints,g=k.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:q};g=C(g);d.fillStyle=g;var g=[],m=!0,l=0,p,r,t,y=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)+0.5<<0,s,z=null,w=!1;if(0<n.length){var x=k._colorSet[l%k._colorSet.length],v=k._options.lineColor||x,A=v;b.fillStyle=x;b.strokeStyle=v;b.lineWidth=
k.lineThickness;var H="solid";if(b.setLineDash){var K=D(k.nullDataLineDashType,k.lineThickness),H=k.lineDashType,I=D(H,k.lineThickness);b.setLineDash(I)}for(;l<n.length;l++)if(t=n[l].x.getTime?n[l].x.getTime():n[l].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax&&(!k.connectNullData||!w))){var G=r;"number"!==typeof n[l].y?(k.connectNullData||(w||m)||c(),w=!0):(p=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(t-a.axisX.conversionParameters.minimum)+
0.5<<0,r=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(n[l].y-a.axisY.conversionParameters.minimum)+0.5<<0,m||w?(!m&&k.connectNullData?(b.setLineDash&&(k._options.nullDataLineDashType||H===k.lineDashType&&k.lineDashType!==k.nullDataLineDashType)&&(b.stroke(),H=k.nullDataLineDashType,b.setLineDash(K)),b.lineTo(p,G),b.lineTo(p,r),u&&(d.lineTo(p,G),d.lineTo(p,r))):(b.beginPath(),b.moveTo(p,r),u&&(d.beginPath(),d.moveTo(p,r)),z={x:p,y:r}),w=m=!1):(b.lineTo(p,G),u&&
d.lineTo(p,G),b.lineTo(p,r),u&&d.lineTo(p,r),0==l%250&&c()),l<n.length-1&&(A!==(n[l].lineColor||v)||H!==(n[l].lineDashType||k.lineDashType))&&(c(),A=n[l].lineColor||v,b.strokeStyle=A,b.setLineDash&&(n[l].lineDashType?(H=n[l].lineDashType,b.setLineDash(D(H,k.lineThickness))):(H=k.lineDashType,b.setLineDash(I)))),G=k.dataPointIds[l],this._eventManager.objectMap[G]={id:G,objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:l,x1:p,y1:r},0!==n[l].markerSize&&(0<n[l].markerSize||0<k.markerSize)&&(t=
k.getMarkerProperties(l,p,r,b),g.push(t),G=C(G),u&&g.push({x:p,y:r,ctx:d,type:t.type,size:t.size,color:G,borderColor:G,borderThickness:t.borderThickness})),(n[l].indexLabel||k.indexLabel||n[l].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"stepArea",dataPoint:n[l],dataSeries:k,point:{x:p,y:r},direction:0<=n[l].y?1:-1,color:x}))}c();P.drawMarkers(g)}}b.restore();u&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:B.xClipAnimation,
easingFunction:B.easing.linear,animationBase:0}}};v.prototype.renderStackedArea=function(a){function c(){if(!(1>h.length)){for(0<s.lineThickness&&b.stroke();0<h.length;){var a=h.pop();b.lineTo(a.x,a.y);u&&r.lineTo(a.x,a.y)}b.closePath();b.globalAlpha=s.fillOpacity;b.fill();b.globalAlpha=1;b.beginPath();u&&(r.closePath(),r.fill(),r.beginPath());h=[]}}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=null,e=[],f=this.plotArea,g=[],h=[],q=[],k=0,n,m,l,p=a.axisY.conversionParameters.reference+
a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,r=this._eventManager.ghostCtx;u&&r.beginPath();b.save();u&&r.save();b.beginPath();b.rect(f.x1,f.y1,f.width,f.height);b.clip();u&&(r.beginPath(),r.rect(f.x1,f.y1,f.width,f.height),r.clip());for(var t=[],f=0;f<a.dataSeriesIndexes.length;f++){var y=a.dataSeriesIndexes[f],s=this.data[y],z=s.dataPoints;s.dataPointIndexes=[];for(k=0;k<z.length;k++)y=z[k].x.getTime?z[k].x.getTime():z[k].x,s.dataPointIndexes[y]=k,t[y]||
(q.push(y),t[y]=!0);q.sort(Aa)}for(f=0;f<a.dataSeriesIndexes.length;f++){y=a.dataSeriesIndexes[f];s=this.data[y];z=s.dataPoints;t=!0;h=[];k=s.id;this._eventManager.objectMap[k]={objectType:"dataSeries",dataSeriesIndex:y};k=C(k);r.fillStyle=k;if(0<q.length){var d=s._colorSet[0],w=s._options.lineColor||d,x=w;b.fillStyle=d;b.strokeStyle=w;b.lineWidth=s.lineThickness;var v="solid";if(b.setLineDash){var A=D(s.nullDataLineDashType,s.lineThickness),v=s.lineDashType,H=D(v,s.lineThickness);b.setLineDash(H)}for(var K=
!0,k=0;k<q.length;k++){l=q[k];var I=null,I=0<=s.dataPointIndexes[l]?z[s.dataPointIndexes[l]]:{x:l,y:null};if(!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax&&(!s.connectNullData||!K)))if("number"!==typeof I.y)s.connectNullData||(K||t)||c(),K=!0;else{n=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(l-a.axisX.conversionParameters.minimum)+0.5<<0;m=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(I.y-a.axisY.conversionParameters.minimum);
var G=g[l]?g[l]:0;m-=G;h.push({x:n,y:p-G});g[l]=p-m;t||K?(!t&&s.connectNullData?(b.setLineDash&&(s._options.nullDataLineDashType||v===s.lineDashType&&s.lineDashType!==s.nullDataLineDashType)&&(b.stroke(),v=s.nullDataLineDashType,b.setLineDash(A)),b.lineTo(n,m),u&&r.lineTo(n,m)):(b.beginPath(),b.moveTo(n,m),u&&(r.beginPath(),r.moveTo(n,m))),K=t=!1):(b.lineTo(n,m),u&&r.lineTo(n,m),0==k%250&&(c(),b.moveTo(n,m),u&&r.moveTo(n,m),h.push({x:n,y:p-G})));k<z.length-1&&(x!==(z[k].lineColor||w)||v!==(z[k].lineDashType||
s.lineDashType))&&(c(),b.beginPath(),b.moveTo(n,m),h.push({x:n,y:p-G}),x=z[k].lineColor||w,b.strokeStyle=x,b.setLineDash&&(z[k].lineDashType?(v=z[k].lineDashType,b.setLineDash(D(v,s.lineThickness))):(v=s.lineDashType,b.setLineDash(H))));if(0<=s.dataPointIndexes[l]){var S=s.dataPointIds[s.dataPointIndexes[l]];this._eventManager.objectMap[S]={id:S,objectType:"dataPoint",dataSeriesIndex:y,dataPointIndex:s.dataPointIndexes[l],x1:n,y1:m}}0<=s.dataPointIndexes[l]&&0!==I.markerSize&&(0<I.markerSize||0<s.markerSize)&&
(l=s.getMarkerProperties(k,n,m,b),e.push(l),markerColor=C(S),u&&e.push({x:n,y:m,ctx:r,type:l.type,size:l.size,color:markerColor,borderColor:markerColor,borderThickness:l.borderThickness}));(I.indexLabel||s.indexLabel||I.indexLabelFormatter||s.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:I,dataSeries:s,point:{x:n,y:m},direction:0<=z[k].y?1:-1,color:d})}}c();b.moveTo(n,m);u&&r.moveTo(n,m)}delete s.dataPointIndexes}P.drawMarkers(e);b.restore();u&&r.restore();return{source:b,
dest:this.plotArea.ctx,animationCallback:B.xClipAnimation,easingFunction:B.easing.linear,animationBase:0}}};v.prototype.renderStackedArea100=function(a){function c(){for(0<w.lineThickness&&b.stroke();0<h.length;){var a=h.pop();b.lineTo(a.x,a.y);u&&y.lineTo(a.x,a.y)}b.closePath();b.globalAlpha=w.fillOpacity;b.fill();b.globalAlpha=1;b.beginPath();u&&(y.closePath(),y.fill(),y.beginPath());h=[]}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=null,e=this.plotArea,
f=[],g=[],h=[],q=[],k=0,n,m,l,p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,r=this.dataPointMaxWidth?this.dataPointMaxWidth:0.15*this.width<<0,t=a.axisX.dataInfo.minDiff,t=0.9*e.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(t)<<0,y=this._eventManager.ghostCtx;b.save();u&&y.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();u&&(y.beginPath(),y.rect(e.x1,e.y1,e.width,e.height),y.clip());
for(var s=[],e=0;e<a.dataSeriesIndexes.length;e++){var z=a.dataSeriesIndexes[e],w=this.data[z],x=w.dataPoints;w.dataPointIndexes=[];for(k=0;k<x.length;k++)z=x[k].x.getTime?x[k].x.getTime():x[k].x,w.dataPointIndexes[z]=k,s[z]||(q.push(z),s[z]=!0);q.sort(Aa)}for(e=0;e<a.dataSeriesIndexes.length;e++){z=a.dataSeriesIndexes[e];w=this.data[z];x=w.dataPoints;s=!0;d=w.id;this._eventManager.objectMap[d]={objectType:"dataSeries",dataSeriesIndex:z};d=C(d);y.fillStyle=d;1==x.length&&(t=r);1>t?t=1:t>r&&(t=r);
h=[];if(0<q.length){var d=w._colorSet[k%w._colorSet.length],v=w._options.lineColor||d,A=v;b.fillStyle=d;b.strokeStyle=v;b.lineWidth=w.lineThickness;var H="solid";if(b.setLineDash){var K=D(w.nullDataLineDashType,w.lineThickness),H=w.lineDashType,I=D(H,w.lineThickness);b.setLineDash(I)}for(var G=!0,k=0;k<q.length;k++){l=q[k];var S=null,S=0<=w.dataPointIndexes[l]?x[w.dataPointIndexes[l]]:{x:l,y:null};if(!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax&&(!w.connectNullData||!G)))if("number"!==
typeof S.y)w.connectNullData||(G||s)||c(),G=!0;else{m=0!==a.dataPointYSums[l]?100*(S.y/a.dataPointYSums[l]):0;n=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(l-a.axisX.conversionParameters.minimum)+0.5<<0;m=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(m-a.axisY.conversionParameters.minimum);var sa=g[l]?g[l]:0;m-=sa;h.push({x:n,y:p-sa});g[l]=p-m;s||G?(!s&&w.connectNullData?(b.setLineDash&&(w._options.nullDataLineDashType||H===
w.lineDashType&&w.lineDashType!==w.nullDataLineDashType)&&(b.stroke(),H=w.nullDataLineDashType,b.setLineDash(K)),b.lineTo(n,m),u&&y.lineTo(n,m)):(b.beginPath(),b.moveTo(n,m),u&&(y.beginPath(),y.moveTo(n,m))),G=s=!1):(b.lineTo(n,m),u&&y.lineTo(n,m),0==k%250&&(c(),b.moveTo(n,m),u&&y.moveTo(n,m),h.push({x:n,y:p-sa})));k<x.length-1&&(A!==(x[k].lineColor||v)||H!==(x[k].lineDashType||w.lineDashType))&&(c(),b.beginPath(),b.moveTo(n,m),h.push({x:n,y:p-sa}),A=x[k].lineColor||v,b.strokeStyle=A,b.setLineDash&&
(x[k].lineDashType?(H=x[k].lineDashType,b.setLineDash(D(H,w.lineThickness))):(H=w.lineDashType,b.setLineDash(I))));if(0<=w.dataPointIndexes[l]){var xa=w.dataPointIds[w.dataPointIndexes[l]];this._eventManager.objectMap[xa]={id:xa,objectType:"dataPoint",dataSeriesIndex:z,dataPointIndex:w.dataPointIndexes[l],x1:n,y1:m}}0<=w.dataPointIndexes[l]&&0!==S.markerSize&&(0<S.markerSize||0<w.markerSize)&&(l=w.getMarkerProperties(k,n,m,b),f.push(l),markerColor=C(xa),u&&f.push({x:n,y:m,ctx:y,type:l.type,size:l.size,
color:markerColor,borderColor:markerColor,borderThickness:l.borderThickness}));(S.indexLabel||w.indexLabel||S.indexLabelFormatter||w.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea100",dataPoint:S,dataSeries:w,point:{x:n,y:m},direction:0<=x[k].y?1:-1,color:d})}}c();b.moveTo(n,m);u&&y.moveTo(n,m)}delete w.dataPointIndexes}P.drawMarkers(f);b.restore();u&&y.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:B.xClipAnimation,easingFunction:B.easing.linear,animationBase:0}}};
v.prototype.renderBubble=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx,b=a.dataSeriesIndexes.length;if(!(0>=b)){var d=this.plotArea,e=0,f,g,h=this.dataPointMaxWidth?this.dataPointMaxWidth:0.15*this.width<<0,e=a.axisX.dataInfo.minDiff,b=0.9*(d.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(e)/b)<<0;c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),
this._eventManager.ghostCtx.clip());for(var q=-Infinity,k=Infinity,n=0;n<a.dataSeriesIndexes.length;n++)for(var m=a.dataSeriesIndexes[n],l=this.data[m],p=l.dataPoints,r=0,e=0;e<p.length;e++)f=p[e].getTime?f=p[e].x.getTime():f=p[e].x,f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax||"undefined"===typeof p[e].z||(r=p[e].z,r>q&&(q=r),r<k&&(k=r));for(var t=25*Math.PI,d=Math.max(Math.pow(0.25*Math.min(d.height,d.width)/2,2)*Math.PI,t),n=0;n<a.dataSeriesIndexes.length;n++)if(m=a.dataSeriesIndexes[n],
l=this.data[m],p=l.dataPoints,1==p.length&&(b=h),1>b?b=1:b>h&&(b=h),0<p.length)for(c.strokeStyle="#4572A7 ",e=0;e<p.length;e++)if(f=p[e].getTime?f=p[e].x.getTime():f=p[e].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&"number"===typeof p[e].y){f=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(f-a.axisX.conversionParameters.minimum)+0.5<<0;g=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(p[e].y-a.axisY.conversionParameters.minimum)+
0.5<<0;var r=p[e].z,y=2*Math.max(Math.sqrt((q===k?d/2:t+(d-t)/(q-k)*(r-k))/Math.PI)<<0,1),r=l.getMarkerProperties(e,c);r.size=y;c.globalAlpha=l.fillOpacity;P.drawMarker(f,g,c,r.type,r.size,r.color,r.borderColor,r.borderThickness);c.globalAlpha=1;var s=l.dataPointIds[e];this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:e,x1:f,y1:g,size:y};y=C(s);u&&P.drawMarker(f,g,this._eventManager.ghostCtx,r.type,r.size,y,y,r.borderThickness);(p[e].indexLabel||l.indexLabel||
p[e].indexLabelFormatter||l.indexLabelFormatter)&&this._indexLabels.push({chartType:"bubble",dataPoint:p[e],dataSeries:l,point:{x:f,y:g},direction:1,bounds:{x1:f-r.size/2,y1:g-r.size/2,x2:f+r.size/2,y2:g+r.size/2},color:null})}c.restore();u&&this._eventManager.ghostCtx.restore();return{source:c,dest:this.plotArea.ctx,animationCallback:B.fadeInAnimation,easingFunction:B.easing.easeInQuad,animationBase:0}}};v.prototype.renderScatter=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx,b=a.dataSeriesIndexes.length;
if(!(0>=b)){var d=this.plotArea,e=0,f,g,h=this.dataPointMaxWidth?this.dataPointMaxWidth:0.15*this.width<<0,e=a.axisX.dataInfo.minDiff,b=0.9*(d.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(e)/b)<<0;c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var q=0;q<a.dataSeriesIndexes.length;q++){var k=a.dataSeriesIndexes[q],
n=this.data[k],m=n.dataPoints;1==m.length&&(b=h);1>b?b=1:b>h&&(b=h);if(0<m.length){c.strokeStyle="#4572A7 ";Math.pow(0.3*Math.min(d.height,d.width)/2,2);for(var l=0,p=0,e=0;e<m.length;e++)if(f=m[e].getTime?f=m[e].x.getTime():f=m[e].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&"number"===typeof m[e].y){f=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(f-a.axisX.conversionParameters.minimum)+0.5<<0;g=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*
(m[e].y-a.axisY.conversionParameters.minimum)+0.5<<0;var r=n.getMarkerProperties(e,f,g,c);c.globalAlpha=n.fillOpacity;P.drawMarker(r.x,r.y,r.ctx,r.type,r.size,r.color,r.borderColor,r.borderThickness);c.globalAlpha=1;Math.sqrt((l-f)*(l-f)+(p-g)*(p-g))<Math.min(r.size,5)&&m.length>Math.min(this.plotArea.width,this.plotArea.height)||(l=n.dataPointIds[e],this._eventManager.objectMap[l]={id:l,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:e,x1:f,y1:g},l=C(l),u&&P.drawMarker(r.x,r.y,this._eventManager.ghostCtx,
r.type,r.size,l,l,r.borderThickness),(m[e].indexLabel||n.indexLabel||m[e].indexLabelFormatter||n.indexLabelFormatter)&&this._indexLabels.push({chartType:"scatter",dataPoint:m[e],dataSeries:n,point:{x:f,y:g},direction:1,bounds:{x1:f-r.size/2,y1:g-r.size/2,x2:f+r.size/2,y2:g+r.size/2},color:null}),l=f,p=g)}}}c.restore();u&&this._eventManager.ghostCtx.restore();return{source:c,dest:this.plotArea.ctx,animationCallback:B.fadeInAnimation,easingFunction:B.easing.easeInQuad,animationBase:0}}};v.prototype.renderCandlestick=
function(a){var c=a.targetCanvasCtx||this.plotArea.ctx,b=this._eventManager.ghostCtx;if(!(0>=a.dataSeriesIndexes.length)){var d=null,d=this.plotArea,e=0,f,g,h,q,k,n,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;f=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.015*this.width;var m=a.axisX.dataInfo.minDiff;isFinite(m)||(m=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));m=this.dataPointWidth?this.dataPointWidth:
0.7*d.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(m)<<0;this.dataPointMaxWidth&&e>f&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,f));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&f<e)&&(f=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));m<e&&(m=e);m>f&&(m=f);c.save();u&&b.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(b.rect(d.x1,d.y1,d.width,d.height),b.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var p=
a.dataSeriesIndexes[l],r=this.data[p],t=r.dataPoints;if(0<t.length)for(var y=5<m&&r.bevelEnabled?!0:!1,e=0;e<t.length;e++)if(t[e].getTime?n=t[e].x.getTime():n=t[e].x,!(n<a.axisX.dataInfo.viewPortMin||n>a.axisX.dataInfo.viewPortMax)&&null!==t[e].y&&t[e].y.length&&"number"===typeof t[e].y[0]&&"number"===typeof t[e].y[1]&&"number"===typeof t[e].y[2]&&"number"===typeof t[e].y[3]){f=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(n-a.axisX.conversionParameters.minimum)+
0.5<<0;g=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(t[e].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;h=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(t[e].y[1]-a.axisY.conversionParameters.minimum)+0.5<<0;q=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(t[e].y[2]-a.axisY.conversionParameters.minimum)+0.5<<0;k=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*
(t[e].y[3]-a.axisY.conversionParameters.minimum)+0.5<<0;var s=f-m/2<<0,z=s+m<<0,d=t[e].color?t[e].color:r._colorSet[0],w=Math.round(Math.max(1,0.15*m)),x=0===w%2?0:0.5,v=r.dataPointIds[e];this._eventManager.objectMap[v]={id:v,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:e,x1:s,y1:g,x2:z,y2:h,x3:f,y3:q,x4:f,y4:k,borderThickness:w,color:d};c.strokeStyle=d;c.beginPath();c.lineWidth=w;b.lineWidth=Math.max(w,4);"candlestick"===r.type?(c.moveTo(f-x,h),c.lineTo(f-x,Math.min(g,k)),c.stroke(),c.moveTo(f-
x,Math.max(g,k)),c.lineTo(f-x,q),c.stroke(),M(c,s,Math.min(g,k),z,Math.max(g,k),t[e].y[0]<=t[e].y[3]?r.risingColor:d,w,d,y,y,!1,!1,r.fillOpacity),u&&(d=C(v),b.strokeStyle=d,b.moveTo(f-x,h),b.lineTo(f-x,Math.min(g,k)),b.stroke(),b.moveTo(f-x,Math.max(g,k)),b.lineTo(f-x,q),b.stroke(),M(b,s,Math.min(g,k),z,Math.max(g,k),d,0,null,!1,!1,!1,!1))):"ohlc"===r.type&&(c.moveTo(f-x,h),c.lineTo(f-x,q),c.stroke(),c.beginPath(),c.moveTo(f,g),c.lineTo(s,g),c.stroke(),c.beginPath(),c.moveTo(f,k),c.lineTo(z,k),c.stroke(),
u&&(d=C(v),b.strokeStyle=d,b.moveTo(f-x,h),b.lineTo(f-x,q),b.stroke(),b.beginPath(),b.moveTo(f,g),b.lineTo(s,g),b.stroke(),b.beginPath(),b.moveTo(f,k),b.lineTo(z,k),b.stroke()));(t[e].indexLabel||r.indexLabel||t[e].indexLabelFormatter||r.indexLabelFormatter)&&this._indexLabels.push({chartType:r.type,dataPoint:t[e],dataSeries:r,point:{x:s+(z-s)/2,y:h},direction:1,bounds:{x1:s,y1:Math.min(h,q),x2:z,y2:Math.max(h,q)},color:d})}}c.restore();u&&b.restore();return{source:c,dest:this.plotArea.ctx,animationCallback:B.fadeInAnimation,
easingFunction:B.easing.easeInQuad,animationBase:0}}};v.prototype.renderRangeColumn=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=0,f,g,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;f=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.03*this.width;var h=a.axisX.dataInfo.minDiff;isFinite(h)||(h=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));
h=this.dataPointWidth?this.dataPointWidth:0.9*(d.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(h)/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&e>f&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,f));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&f<e)&&(f=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));h<e&&(h=e);h>f&&(h=f);c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&
(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var q=0;q<a.dataSeriesIndexes.length;q++){var k=a.dataSeriesIndexes[q],n=this.data[k],m=n.dataPoints;if(0<m.length)for(var l=5<h&&n.bevelEnabled?!0:!1,e=0;e<m.length;e++)if(m[e].getTime?g=m[e].x.getTime():g=m[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&null!==m[e].y&&m[e].y.length&&"number"===typeof m[e].y[0]&&"number"===typeof m[e].y[1]){b=a.axisX.conversionParameters.reference+
a.axisX.conversionParameters.pixelPerUnit*(g-a.axisX.conversionParameters.minimum)+0.5<<0;d=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(m[e].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;f=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(m[e].y[1]-a.axisY.conversionParameters.minimum)+0.5<<0;var p=b-a.plotType.totalDataSeries*h/2+(a.previousDataSeriesCount+q)*h<<0,r=p+h<<0,b=m[e].color?m[e].color:n._colorSet[e%n._colorSet.length];
if(d>f){var t=d,d=f;f=t}t=n.dataPointIds[e];this._eventManager.objectMap[t]={id:t,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:e,x1:p,y1:d,x2:r,y2:f};M(c,p,d,r,f,b,0,b,l,l,!1,!1,n.fillOpacity);b=C(t);u&&M(this._eventManager.ghostCtx,p,d,r,f,b,0,null,!1,!1,!1,!1);if(m[e].indexLabel||n.indexLabel||m[e].indexLabelFormatter||n.indexLabelFormatter)this._indexLabels.push({chartType:"rangeColumn",dataPoint:m[e],dataSeries:n,indexKeyword:0,point:{x:p+(r-p)/2,y:m[e].y[1]>=m[e].y[0]?f:d},direction:m[e].y[1]>=
m[e].y[0]?-1:1,bounds:{x1:p,y1:Math.min(d,f),x2:r,y2:Math.max(d,f)},color:b}),this._indexLabels.push({chartType:"rangeColumn",dataPoint:m[e],dataSeries:n,indexKeyword:1,point:{x:p+(r-p)/2,y:m[e].y[1]>=m[e].y[0]?d:f},direction:m[e].y[1]>=m[e].y[0]?1:-1,bounds:{x1:p,y1:Math.min(d,f),x2:r,y2:Math.max(d,f)},color:b})}}c.restore();u&&this._eventManager.ghostCtx.restore();return{source:c,dest:this.plotArea.ctx,animationCallback:B.fadeInAnimation,easingFunction:B.easing.easeInQuad,animationBase:0}}};v.prototype.renderRangeBar=
function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=0,f,g,h,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;f=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0;var q=a.axisX.dataInfo.minDiff;isFinite(q)||(q=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));
q=this.dataPointWidth?this.dataPointWidth:0.9*(d.height/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(q)/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&e>f&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,f));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&f<e)&&(f=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));q<e&&(q=e);q>f&&(q=f);c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&
(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var k=0;k<a.dataSeriesIndexes.length;k++){var n=a.dataSeriesIndexes[k],m=this.data[n],l=m.dataPoints;if(0<l.length){var p=5<q&&m.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(e=0;e<l.length;e++)if(l[e].getTime?h=l[e].x.getTime():h=l[e].x,!(h<a.axisX.dataInfo.viewPortMin||h>a.axisX.dataInfo.viewPortMax)&&null!==l[e].y&&l[e].y.length&&"number"===typeof l[e].y[0]&&"number"===typeof l[e].y[1]){d=a.axisY.conversionParameters.reference+
a.axisY.conversionParameters.pixelPerUnit*(l[e].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;f=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(l[e].y[1]-a.axisY.conversionParameters.minimum)+0.5<<0;g=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(h-a.axisX.conversionParameters.minimum)+0.5<<0;g=g-a.plotType.totalDataSeries*q/2+(a.previousDataSeriesCount+k)*q<<0;var r=g+q<<0;d>f&&(b=d,d=f,f=b);b=l[e].color?l[e].color:m._colorSet[e%
m._colorSet.length];M(c,d,g,f,r,b,0,null,p,!1,!1,!1,m.fillOpacity);b=m.dataPointIds[e];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:e,x1:d,y1:g,x2:f,y2:r};b=C(b);u&&M(this._eventManager.ghostCtx,d,g,f,r,b,0,null,!1,!1,!1,!1);if(l[e].indexLabel||m.indexLabel||l[e].indexLabelFormatter||m.indexLabelFormatter)this._indexLabels.push({chartType:"rangeBar",dataPoint:l[e],dataSeries:m,indexKeyword:0,point:{x:l[e].y[1]>=l[e].y[0]?d:f,y:g+(r-g)/2},direction:l[e].y[1]>=
l[e].y[0]?-1:1,bounds:{x1:Math.min(d,f),y1:g,x2:Math.max(d,f),y2:r},color:b}),this._indexLabels.push({chartType:"rangeBar",dataPoint:l[e],dataSeries:m,indexKeyword:1,point:{x:l[e].y[1]>=l[e].y[0]?f:d,y:g+(r-g)/2},direction:l[e].y[1]>=l[e].y[0]?1:-1,bounds:{x1:Math.min(d,f),y1:g,x2:Math.max(d,f),y2:r},color:b})}}}c.restore();u&&this._eventManager.ghostCtx.restore();return{source:c,dest:this.plotArea.ctx,animationCallback:B.fadeInAnimation,easingFunction:B.easing.easeInQuad,animationBase:0}}};v.prototype.renderRangeArea=
function(a){function c(){if(y){var a=null;0<q.lineThickness&&b.stroke();for(var c=g.length-1;0<=c;c--)a=g[c],b.lineTo(a.x,a.y),d.lineTo(a.x,a.y);b.closePath();b.globalAlpha=q.fillOpacity;b.fill();b.globalAlpha=1;d.fill();if(0<q.lineThickness){b.beginPath();b.moveTo(a.x,a.y);for(c=0;c<g.length;c++)a=g[c],b.lineTo(a.x,a.y);b.stroke()}b.beginPath();b.moveTo(l,p);d.beginPath();d.moveTo(l,p);y={x:l,y:p};g=[];g.push({x:l,y:r})}}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=
this._eventManager.ghostCtx,e=[],f=this.plotArea;b.save();u&&d.save();b.beginPath();b.rect(f.x1,f.y1,f.width,f.height);b.clip();u&&(d.beginPath(),d.rect(f.x1,f.y1,f.width,f.height),d.clip());for(f=0;f<a.dataSeriesIndexes.length;f++){var g=[],h=a.dataSeriesIndexes[f],q=this.data[h],k=q.dataPoints,e=q.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:h};e=C(e);d.fillStyle=e;var e=[],n=!0,m=0,l,p,r,t,y=null;if(0<k.length){var s=q._colorSet[m%q._colorSet.length],z=q._options.lineColor||
s,w=z;b.fillStyle=s;b.strokeStyle=z;b.lineWidth=q.lineThickness;var x="solid";if(b.setLineDash){var v=D(q.nullDataLineDashType,q.lineThickness),x=q.lineDashType,A=D(x,q.lineThickness);b.setLineDash(A)}for(var H=!0;m<k.length;m++)if(t=k[m].x.getTime?k[m].x.getTime():k[m].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax&&(!q.connectNullData||!H)))if(null!==k[m].y&&k[m].y.length&&"number"===typeof k[m].y[0]&&"number"===typeof k[m].y[1]){l=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*
(t-a.axisX.conversionParameters.minimum)+0.5<<0;p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(k[m].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;r=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(k[m].y[1]-a.axisY.conversionParameters.minimum)+0.5<<0;n||H?(q.connectNullData&&!n?(b.setLineDash&&(q._options.nullDataLineDashType||x===q.lineDashType&&q.lineDashType!==q.nullDataLineDashType)&&(g[g.length-1].newLineDashArray=A,x=
q.nullDataLineDashType,b.setLineDash(v)),b.lineTo(l,p),u&&d.lineTo(l,p),g.push({x:l,y:r})):(b.beginPath(),b.moveTo(l,p),y={x:l,y:p},g=[],g.push({x:l,y:r}),u&&(d.beginPath(),d.moveTo(l,p))),H=n=!1):(b.lineTo(l,p),g.push({x:l,y:r}),u&&d.lineTo(l,p),0==m%250&&c());t=q.dataPointIds[m];this._eventManager.objectMap[t]={id:t,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:m,x1:l,y1:p,y2:r};m<k.length-1&&(w!==(k[m].lineColor||z)||x!==(k[m].lineDashType||q.lineDashType))&&(c(),w=k[m].lineColor||z,
g[g.length-1].newStrokeStyle=w,b.strokeStyle=w,b.setLineDash&&(k[m].lineDashType?(x=k[m].lineDashType,g[g.length-1].newLineDashArray=D(x,q.lineThickness),b.setLineDash(g[g.length-1].newLineDashArray)):(x=q.lineDashType,g[g.length-1].newLineDashArray=A,b.setLineDash(A))));if(0!==k[m].markerSize&&(0<k[m].markerSize||0<q.markerSize)){var K=q.getMarkerProperties(m,l,r,b);e.push(K);var I=C(t);u&&e.push({x:l,y:r,ctx:d,type:K.type,size:K.size,color:I,borderColor:I,borderThickness:K.borderThickness});K=q.getMarkerProperties(m,
l,p,b);e.push(K);I=C(t);u&&e.push({x:l,y:p,ctx:d,type:K.type,size:K.size,color:I,borderColor:I,borderThickness:K.borderThickness})}if(k[m].indexLabel||q.indexLabel||k[m].indexLabelFormatter||q.indexLabelFormatter)this._indexLabels.push({chartType:"rangeArea",dataPoint:k[m],dataSeries:q,indexKeyword:0,point:{x:l,y:p},direction:k[m].y[0]<=k[m].y[1]?-1:1,color:s}),this._indexLabels.push({chartType:"rangeArea",dataPoint:k[m],dataSeries:q,indexKeyword:1,point:{x:l,y:r},direction:k[m].y[0]<=k[m].y[1]?1:
-1,color:s})}else H||n||c(),H=!0;c();P.drawMarkers(e)}}b.restore();u&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:B.xClipAnimation,easingFunction:B.easing.linear,animationBase:0}}};v.prototype.renderRangeSplineArea=function(a){function c(a,c){var e=ma(p,2);if(0<e.length){if(0<h.lineThickness){b.strokeStyle=c;b.setLineDash&&b.setLineDash(a);b.beginPath();b.moveTo(e[0].x,e[0].y);for(var f=0;f<e.length-3;f+=3){if(e[f].newStrokeStyle||e[f].newLineDashArray)b.stroke(),
b.beginPath(),b.moveTo(e[f].x,e[f].y),e[f].newStrokeStyle&&(b.strokeStyle=e[f].newStrokeStyle),e[f].newLineDashArray&&b.setLineDash(e[f].newLineDashArray);b.bezierCurveTo(e[f+1].x,e[f+1].y,e[f+2].x,e[f+2].y,e[f+3].x,e[f+3].y)}b.stroke()}b.beginPath();b.moveTo(e[0].x,e[0].y);u&&(d.beginPath(),d.moveTo(e[0].x,e[0].y));for(f=0;f<e.length-3;f+=3)b.bezierCurveTo(e[f+1].x,e[f+1].y,e[f+2].x,e[f+2].y,e[f+3].x,e[f+3].y),u&&d.bezierCurveTo(e[f+1].x,e[f+1].y,e[f+2].x,e[f+2].y,e[f+3].x,e[f+3].y);e=ma(r,2);b.lineTo(r[r.length-
1].x,r[r.length-1].y);for(f=e.length-1;2<f;f-=3)b.bezierCurveTo(e[f-1].x,e[f-1].y,e[f-2].x,e[f-2].y,e[f-3].x,e[f-3].y),u&&d.bezierCurveTo(e[f-1].x,e[f-1].y,e[f-2].x,e[f-2].y,e[f-3].x,e[f-3].y);b.closePath();b.globalAlpha=h.fillOpacity;b.fill();u&&(d.closePath(),d.fill());b.globalAlpha=1;if(0<h.lineThickness){b.strokeStyle=c;b.setLineDash&&b.setLineDash(a);b.beginPath();b.moveTo(e[0].x,e[0].y);for(var g=f=0;f<e.length-3;f+=3,g++){if(p[g].newStrokeStyle||p[g].newLineDashArray)b.stroke(),b.beginPath(),
b.moveTo(e[f].x,e[f].y),p[g].newStrokeStyle&&(b.strokeStyle=p[g].newStrokeStyle),p[g].newLineDashArray&&b.setLineDash(p[g].newLineDashArray);b.bezierCurveTo(e[f+1].x,e[f+1].y,e[f+2].x,e[f+2].y,e[f+3].x,e[f+3].y)}b.stroke()}b.beginPath()}}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=[],f=this.plotArea;b.save();u&&d.save();b.beginPath();b.rect(f.x1,f.y1,f.width,f.height);b.clip();u&&(d.beginPath(),d.rect(f.x1,f.y1,f.width,f.height),
d.clip());for(f=0;f<a.dataSeriesIndexes.length;f++){var g=a.dataSeriesIndexes[f],h=this.data[g],q=h.dataPoints,e=h.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:g};e=C(e);d.fillStyle=e;var e=[],k=0,n,m,l,p=[],r=[];if(0<q.length){var t=h._colorSet[k%h._colorSet.length],y=h._options.lineColor||t,s=y;b.fillStyle=t;b.lineWidth=h.lineThickness;var z="solid",w;if(b.setLineDash){var x=D(h.nullDataLineDashType,h.lineThickness),z=h.lineDashType;w=D(z,h.lineThickness)}for(m=!1;k<
q.length;k++)if(n=q[k].x.getTime?q[k].x.getTime():q[k].x,!(n<a.axisX.dataInfo.viewPortMin||n>a.axisX.dataInfo.viewPortMax&&(!h.connectNullData||!m)))if(null!==q[k].y&&q[k].y.length&&"number"===typeof q[k].y[0]&&"number"===typeof q[k].y[1]){n=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(n-a.axisX.conversionParameters.minimum)+0.5<<0;m=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(q[k].y[0]-a.axisY.conversionParameters.minimum)+
0.5<<0;l=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(q[k].y[1]-a.axisY.conversionParameters.minimum)+0.5<<0;var v=h.dataPointIds[k];this._eventManager.objectMap[v]={id:v,objectType:"dataPoint",dataSeriesIndex:g,dataPointIndex:k,x1:n,y1:m,y2:l};p[p.length]={x:n,y:m};r[r.length]={x:n,y:l};k<q.length-1&&(s!==(q[k].lineColor||y)||z!==(q[k].lineDashType||h.lineDashType))&&(s=q[k].lineColor||y,p[p.length-1].newStrokeStyle=s,b.setLineDash&&(q[k].lineDashType?(z=q[k].lineDashType,
p[p.length-1].newLineDashArray=D(z,h.lineThickness)):(z=h.lineDashType,p[p.length-1].newLineDashArray=w)));if(0!==q[k].markerSize&&(0<q[k].markerSize||0<h.markerSize)){var A=h.getMarkerProperties(k,n,m,b);e.push(A);var H=C(v);u&&e.push({x:n,y:m,ctx:d,type:A.type,size:A.size,color:H,borderColor:H,borderThickness:A.borderThickness});A=h.getMarkerProperties(k,n,l,b);e.push(A);H=C(v);u&&e.push({x:n,y:l,ctx:d,type:A.type,size:A.size,color:H,borderColor:H,borderThickness:A.borderThickness})}if(q[k].indexLabel||
h.indexLabel||q[k].indexLabelFormatter||h.indexLabelFormatter)this._indexLabels.push({chartType:"splineArea",dataPoint:q[k],dataSeries:h,indexKeyword:0,point:{x:n,y:m},direction:q[k].y[0]<=q[k].y[1]?-1:1,color:t}),this._indexLabels.push({chartType:"splineArea",dataPoint:q[k],dataSeries:h,indexKeyword:1,point:{x:n,y:l},direction:q[k].y[0]<=q[k].y[1]?1:-1,color:t});m=!1}else 0<k&&!m&&(h.connectNullData?b.setLineDash&&(0<p.length&&(h._options.nullDataLineDashType||!q[k-1].lineDashType))&&(p[p.length-
1].newLineDashArray=x,z=h.nullDataLineDashType):(c(w,y),p=[],r=[])),m=!0;c(w,y);P.drawMarkers(e)}}b.restore();u&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:B.xClipAnimation,easingFunction:B.easing.linear,animationBase:0}}};var ya=function(a,c,b,d,e,f,g,h,q){if(!(0>b)){"undefined"===typeof h&&(h=1);if(!u){var k=Number((g%(2*Math.PI)).toFixed(8));Number((f%(2*Math.PI)).toFixed(8))===k&&(g-=1E-4)}a.save();a.globalAlpha=h;"pie"===e?(a.beginPath(),a.moveTo(c.x,
c.y),a.arc(c.x,c.y,b,f,g,!1),a.fillStyle=d,a.strokeStyle="white",a.lineWidth=2,a.closePath(),a.fill()):"doughnut"===e&&(a.beginPath(),a.arc(c.x,c.y,b,f,g,!1),0<=q&&a.arc(c.x,c.y,q*b,g,f,!0),a.closePath(),a.fillStyle=d,a.strokeStyle="white",a.lineWidth=2,a.fill());a.globalAlpha=1;a.restore()}};v.prototype.renderPie=function(a){function c(){if(k&&n){for(var a=0,b=0,c=0,d=0,e=0;e<n.length;e++){var f=n[e],g=k.dataPointIds[e],h={id:g,objectType:"dataPoint",dataPointIndex:e,dataSeriesIndex:0};p.push(h);
var m={percent:null,total:null},r=null,m=q.getPercentAndTotal(k,f);if(k.indexLabelFormatter||f.indexLabelFormatter)r={chart:q._options,dataSeries:k,dataPoint:f,total:m.total,percent:m.percent};m=f.indexLabelFormatter?f.indexLabelFormatter(r):f.indexLabel?q.replaceKeywordsWithValue(f.indexLabel,f,k,e):k.indexLabelFormatter?k.indexLabelFormatter(r):k.indexLabel?q.replaceKeywordsWithValue(k.indexLabel,f,k,e):f.label?f.label:"";q._eventManager.objectMap[g]=h;h.center={x:w.x,y:w.y};h.y=f.y;h.radius=A;
h.percentInnerRadius=K;h.indexLabelText=m;h.indexLabelPlacement=k.indexLabelPlacement;h.indexLabelLineColor=f.indexLabelLineColor?f.indexLabelLineColor:k.indexLabelLineColor?k.indexLabelLineColor:f.color?f.color:k._colorSet[e%k._colorSet.length];h.indexLabelLineThickness=x(f.indexLabelLineThickness)?k.indexLabelLineThickness:f.indexLabelLineThickness;h.indexLabelLineDashType=f.indexLabelLineDashType?f.indexLabelLineDashType:k.indexLabelLineDashType;h.indexLabelFontColor=f.indexLabelFontColor?f.indexLabelFontColor:
k.indexLabelFontColor;h.indexLabelFontStyle=f.indexLabelFontStyle?f.indexLabelFontStyle:k.indexLabelFontStyle;h.indexLabelFontWeight=f.indexLabelFontWeight?f.indexLabelFontWeight:k.indexLabelFontWeight;h.indexLabelFontSize=f.indexLabelFontSize?f.indexLabelFontSize:k.indexLabelFontSize;h.indexLabelFontFamily=f.indexLabelFontFamily?f.indexLabelFontFamily:k.indexLabelFontFamily;h.indexLabelBackgroundColor=f.indexLabelBackgroundColor?f.indexLabelBackgroundColor:k.indexLabelBackgroundColor?k.indexLabelBackgroundColor:
null;h.indexLabelMaxWidth=f.indexLabelMaxWidth?f.indexLabelMaxWidth:k.indexLabelMaxWidth?k.indexLabelMaxWidth:0.33*l.width;h.indexLabelWrap="undefined"!==typeof f.indexLabelWrap?f.indexLabelWrap:k.indexLabelWrap;h.startAngle=0===e?k.startAngle?k.startAngle/180*Math.PI:0:p[e-1].endAngle;h.startAngle=(h.startAngle+2*Math.PI)%(2*Math.PI);h.endAngle=h.startAngle+2*Math.PI/v*Math.abs(f.y);f=(h.endAngle+h.startAngle)/2;f=(f+2*Math.PI)%(2*Math.PI);h.midAngle=f;if(h.midAngle>Math.PI/2-s&&h.midAngle<Math.PI/
2+s){if(0===a||p[c].midAngle>h.midAngle)c=e;a++}else if(h.midAngle>3*Math.PI/2-s&&h.midAngle<3*Math.PI/2+s){if(0===b||p[d].midAngle>h.midAngle)d=e;b++}h.hemisphere=f>Math.PI/2&&f<=3*Math.PI/2?"left":"right";h.indexLabelTextBlock=new O(q.plotArea.ctx,{fontSize:h.indexLabelFontSize,fontFamily:h.indexLabelFontFamily,fontColor:h.indexLabelFontColor,fontStyle:h.indexLabelFontStyle,fontWeight:h.indexLabelFontWeight,horizontalAlign:"left",backgroundColor:h.indexLabelBackgroundColor,maxWidth:h.indexLabelMaxWidth,
maxHeight:h.indexLabelWrap?5*h.indexLabelFontSize:1.5*h.indexLabelFontSize,text:h.indexLabelText,padding:0,textBaseline:"top"});h.indexLabelTextBlock.measureText()}g=f=0;m=!1;for(e=0;e<n.length;e++)h=p[(c+e)%n.length],1<a&&(h.midAngle>Math.PI/2-s&&h.midAngle<Math.PI/2+s)&&(f<=a/2&&!m?(h.hemisphere="right",f++):(h.hemisphere="left",m=!0));m=!1;for(e=0;e<n.length;e++)h=p[(d+e)%n.length],1<b&&(h.midAngle>3*Math.PI/2-s&&h.midAngle<3*Math.PI/2+s)&&(g<=b/2&&!m?(h.hemisphere="left",g++):(h.hemisphere="right",
m=!0))}}function b(a){var b=q.plotArea.ctx;b.clearRect(l.x1,l.y1,l.width,l.height);b.fillStyle=q.backgroundColor;b.fillRect(l.x1,l.y1,l.width,l.height);for(b=0;b<n.length;b++){var c=p[b].startAngle,d=p[b].endAngle;if(d>c){var e=0.07*A*Math.cos(p[b].midAngle),f=0.07*A*Math.sin(p[b].midAngle),g=!1;if(n[b].exploded){if(1E-9<Math.abs(p[b].center.x-(w.x+e))||1E-9<Math.abs(p[b].center.y-(w.y+f)))p[b].center.x=w.x+e*a,p[b].center.y=w.y+f*a,g=!0}else if(0<Math.abs(p[b].center.x-w.x)||0<Math.abs(p[b].center.y-
w.y))p[b].center.x=w.x+e*(1-a),p[b].center.y=w.y+f*(1-a),g=!0;g&&(e={},e.dataSeries=k,e.dataPoint=k.dataPoints[b],e.index=b,q._toolTip.highlightObjects([e]));ya(q.plotArea.ctx,p[b].center,p[b].radius,n[b].color?n[b].color:k._colorSet[b%k._colorSet.length],k.type,c,d,k.fillOpacity,p[b].percentInnerRadius)}}a=q.plotArea.ctx;a.save();a.fillStyle="black";a.strokeStyle="grey";a.textBaseline="middle";a.lineJoin="round";for(b=b=0;b<n.length;b++)c=p[b],c.indexLabelText&&(c.indexLabelTextBlock.y-=c.indexLabelTextBlock.height/
2,d=0,d="left"===c.hemisphere?"inside"!==k.indexLabelPlacement?-(c.indexLabelTextBlock.width+m):-c.indexLabelTextBlock.width/2:"inside"!==k.indexLabelPlacement?m:-c.indexLabelTextBlock.width/2,c.indexLabelTextBlock.x+=d,c.indexLabelTextBlock.render(!0),c.indexLabelTextBlock.x-=d,c.indexLabelTextBlock.y+=c.indexLabelTextBlock.height/2,"inside"!==c.indexLabelPlacement&&0<c.indexLabelLineThickness&&(d=c.center.x+A*Math.cos(c.midAngle),e=c.center.y+A*Math.sin(c.midAngle),a.strokeStyle=c.indexLabelLineColor,
a.lineWidth=c.indexLabelLineThickness,a.setLineDash&&a.setLineDash(D(c.indexLabelLineDashType,c.indexLabelLineThickness)),a.beginPath(),a.moveTo(d,e),a.lineTo(c.indexLabelTextBlock.x,c.indexLabelTextBlock.y),a.lineTo(c.indexLabelTextBlock.x+("left"===c.hemisphere?-m:m),c.indexLabelTextBlock.y),a.stroke()),a.lineJoin="miter");a.save()}function d(a,b){var c=0,c=a.indexLabelTextBlock.y-a.indexLabelTextBlock.height/2,d=a.indexLabelTextBlock.y+a.indexLabelTextBlock.height/2,e=b.indexLabelTextBlock.y-b.indexLabelTextBlock.height/
2,f=b.indexLabelTextBlock.y+b.indexLabelTextBlock.height/2;return c=b.indexLabelTextBlock.y>a.indexLabelTextBlock.y?e-d:c-f}function e(a){for(var b=null,c=1;c<n.length;c++)if(b=(a+c+p.length)%p.length,p[b].hemisphere!==p[a].hemisphere){b=null;break}else if(p[b].indexLabelText&&b!==a&&(0>d(p[b],p[a])||("right"===p[a].hemisphere?p[b].indexLabelTextBlock.y>=p[a].indexLabelTextBlock.y:p[b].indexLabelTextBlock.y<=p[a].indexLabelTextBlock.y)))break;else b=null;return b}function f(a,b,c){c=(c||0)+1;if(1E3<
c)return 0;b=b||0;var g=0,k=w.y-1*t,h=w.y+1*t;if(0<=a&&a<n.length){var l=p[a];if(0>b&&l.indexLabelTextBlock.y<k||0<b&&l.indexLabelTextBlock.y>h)return 0;var m=0,q=0,q=m=m=0;0>b?l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2>k&&l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2+b<k&&(b=-(k-(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2+b))):l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2<k&&l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2+b>h&&(b=l.indexLabelTextBlock.y+
l.indexLabelTextBlock.height/2+b-h);b=l.indexLabelTextBlock.y+b;k=0;k="right"===l.hemisphere?w.x+Math.sqrt(Math.pow(t,2)-Math.pow(b-w.y,2)):w.x-Math.sqrt(Math.pow(t,2)-Math.pow(b-w.y,2));q=w.x+A*Math.cos(l.midAngle);m=w.y+A*Math.sin(l.midAngle);m=Math.sqrt(Math.pow(k-q,2)+Math.pow(b-m,2));q=Math.acos(A/t);m=Math.acos((t*t+A*A-m*m)/(2*A*t));b=m<q?b-l.indexLabelTextBlock.y:0;k=null;for(h=1;h<n.length;h++)if(k=(a-h+p.length)%p.length,p[k].hemisphere!==p[a].hemisphere){k=null;break}else if(p[k].indexLabelText&&
p[k].hemisphere===p[a].hemisphere&&k!==a&&(0>d(p[k],p[a])||("right"===p[a].hemisphere?p[k].indexLabelTextBlock.y<=p[a].indexLabelTextBlock.y:p[k].indexLabelTextBlock.y>=p[a].indexLabelTextBlock.y)))break;else k=null;q=k;m=e(a);h=k=0;0>b?(h="right"===l.hemisphere?q:m,g=b,null!==h&&(q=-b,b=l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-(p[h].indexLabelTextBlock.y+p[h].indexLabelTextBlock.height/2),b-q<r&&(k=-q,h=f(h,k,c+1),+h.toFixed(u)>+k.toFixed(u)&&(g=b>r?-(b-r):-(q-(h-k)))))):0<b&&(h="right"===
l.hemisphere?m:q,g=b,null!==h&&(q=b,b=p[h].indexLabelTextBlock.y-p[h].indexLabelTextBlock.height/2-(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2),b-q<r&&(k=q,h=f(h,k,c+1),+h.toFixed(u)<+k.toFixed(u)&&(g=b>r?b-r:q-(k-h)))));g&&(c=l.indexLabelTextBlock.y+g,b=0,b="right"===l.hemisphere?w.x+Math.sqrt(Math.pow(t,2)-Math.pow(c-w.y,2)):w.x-Math.sqrt(Math.pow(t,2)-Math.pow(c-w.y,2)),l.midAngle>Math.PI/2-s&&l.midAngle<Math.PI/2+s?(k=(a-1+p.length)%p.length,k=p[k],a=p[(a+1+p.length)%p.length],"left"===
l.hemisphere&&"right"===k.hemisphere&&b>k.indexLabelTextBlock.x?b=k.indexLabelTextBlock.x-15:"right"===l.hemisphere&&("left"===a.hemisphere&&b<a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x+15)):l.midAngle>3*Math.PI/2-s&&l.midAngle<3*Math.PI/2+s&&(k=(a-1+p.length)%p.length,k=p[k],a=p[(a+1+p.length)%p.length],"right"===l.hemisphere&&"left"===k.hemisphere&&b<k.indexLabelTextBlock.x?b=k.indexLabelTextBlock.x+15:"left"===l.hemisphere&&("right"===a.hemisphere&&b>a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x-
15)),l.indexLabelTextBlock.y=c,l.indexLabelTextBlock.x=b,l.indexLabelAngle=Math.atan2(l.indexLabelTextBlock.y-w.y,l.indexLabelTextBlock.x-w.x))}return g}function g(){var a=q.plotArea.ctx;a.fillStyle="grey";a.strokeStyle="grey";a.font="16px Arial";a.textBaseline="middle";for(var b=a=0,c=0,g=!0,b=0;10>b&&(1>b||0<c);b++){if(k.radius||!k.radius&&"undefined"!==typeof k.innerRadius&&null!==k.innerRadius&&A-c<=H)g=!1;g&&(A-=c);c=0;if("inside"!==k.indexLabelPlacement){t=A*y;for(a=0;a<n.length;a++){var h=
p[a];h.indexLabelTextBlock.x=w.x+t*Math.cos(h.midAngle);h.indexLabelTextBlock.y=w.y+t*Math.sin(h.midAngle);h.indexLabelAngle=h.midAngle;h.radius=A;h.percentInnerRadius=K}for(var s,x,a=0;a<n.length;a++){var h=p[a],v=e(a);if(null!==v){s=p[a];x=p[v];var B=0,B=d(s,x)-r;if(0>B){for(var C=x=0,D=0;D<n.length;D++)D!==a&&p[D].hemisphere===h.hemisphere&&(p[D].indexLabelTextBlock.y<h.indexLabelTextBlock.y?x++:C++);x=B/(x+C||1)*C;var C=-1*(B-x),E=D=0;"right"===h.hemisphere?(D=f(a,x),C=-1*(B-D),E=f(v,C),+E.toFixed(u)<
+C.toFixed(u)&&+D.toFixed(u)<=+x.toFixed(u)&&f(a,-(C-E))):(D=f(v,x),C=-1*(B-D),E=f(a,C),+E.toFixed(u)<+C.toFixed(u)&&+D.toFixed(u)<=+x.toFixed(u)&&f(v,-(C-E)))}}}}else for(a=0;a<n.length;a++)h=p[a],t="pie"===k.type?0.7*A:0.8*A,v=w.x+t*Math.cos(h.midAngle),x=w.y+t*Math.sin(h.midAngle),h.indexLabelTextBlock.x=v,h.indexLabelTextBlock.y=x;for(a=0;a<n.length;a++)if(h=p[a],v=h.indexLabelTextBlock.measureText(),0!==v.height&&0!==v.width)v=v=0,"right"===h.hemisphere?(v=l.x2-(h.indexLabelTextBlock.x+h.indexLabelTextBlock.width+
m),v*=-1):v=l.x1-(h.indexLabelTextBlock.x-h.indexLabelTextBlock.width-m),0<v&&(!g&&h.indexLabelText&&(x="right"===h.hemisphere?l.x2-h.indexLabelTextBlock.x:h.indexLabelTextBlock.x-l.x1,0.3*h.indexLabelTextBlock.maxWidth>x?h.indexLabelText="":h.indexLabelTextBlock.maxWidth=0.85*x,0.3*h.indexLabelTextBlock.maxWidth<x&&(h.indexLabelTextBlock.x-="right"===h.hemisphere?2:-2)),Math.abs(h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2-w.y)<A||Math.abs(h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/
2-w.y)<A)&&(v/=Math.abs(Math.cos(h.indexLabelAngle)),9<v&&(v*=0.3),v>c&&(c=v)),v=v=0,0<h.indexLabelAngle&&h.indexLabelAngle<Math.PI?(v=l.y2-(h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/2+5),v*=-1):v=l.y1-(h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2-5),0<v&&(!g&&h.indexLabelText&&(x=0<h.indexLabelAngle&&h.indexLabelAngle<Math.PI?-1:1,0===f(a,v*x)&&f(a,2*x)),Math.abs(h.indexLabelTextBlock.x-w.x)<A&&(v/=Math.abs(Math.sin(h.indexLabelAngle)),9<v&&(v*=0.3),v>c&&(c=v)));var F=function(a,
b,c){for(var d=[],e=0;d.push(p[b]),b!==c;b=(b+1+n.length)%n.length);d.sort(function(a,b){return a.y-b.y});for(b=0;b<d.length;b++)if(c=d[b],e<0.7*a)e+=c.indexLabelTextBlock.height,c.indexLabelTextBlock.text="",c.indexLabelText="",c.indexLabelTextBlock.measureText();else break};(function(){for(var a=-1,b=-1,c=0,f=!1,g=0;g<n.length;g++)if(f=!1,s=p[g],s.indexLabelText){var h=e(g);if(null!==h){var k=p[h];B=0;B=d(s,k);var l;if(l=0>B){l=s.indexLabelTextBlock.x;var q=s.indexLabelTextBlock.y-s.indexLabelTextBlock.height/
2,r=s.indexLabelTextBlock.y+s.indexLabelTextBlock.height/2,t=k.indexLabelTextBlock.y-k.indexLabelTextBlock.height/2,u=k.indexLabelTextBlock.x+k.indexLabelTextBlock.width,y=k.indexLabelTextBlock.y+k.indexLabelTextBlock.height/2;l=s.indexLabelTextBlock.x+s.indexLabelTextBlock.width<k.indexLabelTextBlock.x-m||l>u+m||q>y+m||r<t-m?!1:!0}l?(0>a&&(a=g),h!==a&&(b=h,c+=-B),0===g%Math.max(n.length/10,3)&&(f=!0)):f=!0;f&&(0<c&&0<=a&&0<=b)&&(F(c,a,b),b=a=-1,c=0)}}0<c&&F(c,a,b)})()}}function h(){q.plotArea.layoutManager.reset();
q._title&&(q._title.dockInsidePlotArea||"center"===q._title.horizontalAlign&&"center"===q._title.verticalAlign)&&q._title.render();if(q.subtitles)for(var a=0;a<q.subtitles.length;a++){var b=q.subtitles[a];(b.dockInsidePlotArea||"center"===b.horizontalAlign&&"center"===b.verticalAlign)&&b.render()}q.legend&&(q.legend.dockInsidePlotArea||"center"===q.legend.horizontalAlign&&"center"===q.legend.verticalAlign)&&q.legend.render()}var q=this;if(!(0>=a.dataSeriesIndexes.length)){var k=this.data[a.dataSeriesIndexes[0]],
n=k.dataPoints,m=10,l=this.plotArea,p=[],r=2,t,y=1.3,s=20/180*Math.PI,u=6,w={x:(l.x2+l.x1)/2,y:(l.y2+l.y1)/2},v=0;a=!1;for(var B=0;B<n.length;B++)v+=Math.abs(n[B].y),!a&&("undefined"!==typeof n[B].indexLabel&&null!==n[B].indexLabel&&0<n[B].indexLabel.toString().length)&&(a=!0),!a&&("undefined"!==typeof n[B].label&&null!==n[B].label&&0<n[B].label.toString().length)&&(a=!0);if(0!==v){a=a||"undefined"!==typeof k.indexLabel&&null!==k.indexLabel&&0<k.indexLabel.toString().length;var A="inside"!==k.indexLabelPlacement&&
a?0.75*Math.min(l.width,l.height)/2:0.92*Math.min(l.width,l.height)/2;k.radius&&(A=Ha(k.radius,A));var H="undefined"!==typeof k.innerRadius&&null!==k.innerRadius?Ha(k.innerRadius,A):0.7*A,K=Math.min(H/A,(A-1)/A);this.pieDoughnutClickHandler=function(a){q.isAnimating||!x(a.dataSeries.explodeOnClick)&&!a.dataSeries.explodeOnClick||(a=a.dataPoint,a.exploded=a.exploded?!1:!0,1<this.dataPoints.length&&q._animator.animate(0,500,function(a){b(a);h()}))};c();g();g();g();g();this.disableToolTip=!0;this._animator.animate(0,
this.animatedRender?this.animationDuration:0,function(a){var b=q.plotArea.ctx;b.clearRect(l.x1,l.y1,l.width,l.height);b.fillStyle=q.backgroundColor;b.fillRect(l.x1,l.y1,l.width,l.height);a=p[0].startAngle+2*Math.PI*a;for(b=0;b<n.length;b++){var c=0===b?p[b].startAngle:d,d=c+(p[b].endAngle-p[b].startAngle),e=!1;d>a&&(d=a,e=!0);var f=n[b].color?n[b].color:k._colorSet[b%k._colorSet.length];d>c&&ya(q.plotArea.ctx,p[b].center,p[b].radius,f,k.type,c,d,k.fillOpacity,p[b].percentInnerRadius);if(e)break}h()},
function(){q.disableToolTip=!1;q._animator.animate(0,q.animatedRender?500:0,function(a){b(a);h()})})}}};v.prototype.animationRequestId=null;v.prototype.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();v.prototype.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||
window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;da.prototype.registerSpace=function(a,c){"top"===a?this._topOccupied+=c.height:"bottom"===a?this._bottomOccupied+=c.height:"left"===a?this._leftOccupied+=c.width:"right"===a&&(this._rightOccupied+=c.width)};da.prototype.unRegisterSpace=function(a,c){"top"===a?this._topOccupied-=c.height:"bottom"===a?this._bottomOccupied-=c.height:"left"===a?this._leftOccupied-=c.width:"right"===a&&(this._rightOccupied-=c.width)};
da.prototype.getFreeSpace=function(){return{x1:this._x1+this._leftOccupied,y1:this._y1+this._topOccupied,x2:this._x2-this._rightOccupied,y2:this._y2-this._bottomOccupied,width:this._x2-this._x1-this._rightOccupied-this._leftOccupied,height:this._y2-this._y1-this._bottomOccupied-this._topOccupied}};da.prototype.reset=function(){this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding};T(O,L);O.prototype.render=function(a){a&&this.ctx.save();var c=this.ctx.font;this.ctx.textBaseline=
this.textBaseline;var b=0;this._isDirty&&this.measureText(this.ctx);this.ctx.translate(this.x,this.y+b);"middle"===this.textBaseline&&(b=-this._lineHeight/2);this.ctx.font=this._getFontString();this.ctx.rotate(Math.PI/180*this.angle);var d=0,e=this.padding,f=null;(0<this.borderThickness&&this.borderColor||this.backgroundColor)&&this.ctx.roundRect(0,b,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor);this.ctx.fillStyle=this.fontColor;for(b=0;b<this._wrappedText.lines.length;b++)f=
this._wrappedText.lines[b],"right"===this.horizontalAlign?d=this.width-f.width-this.padding:"left"===this.horizontalAlign?d=this.padding:"center"===this.horizontalAlign&&(d=(this.width-2*this.padding)/2-f.width/2+this.padding),this.ctx.fillText(f.text,d,e),e+=f.height;this.ctx.font=c;a&&this.ctx.restore()};O.prototype.setText=function(a){this.text=a;this._isDirty=!0;this._wrappedText=null};O.prototype.measureText=function(){if(null===this.maxWidth)throw"Please set maxWidth and height for TextBlock";
this._wrapText(this.ctx);this._isDirty=!1;return{width:this.width,height:this.height}};O.prototype._getLineWithWidth=function(a,c,b){a=String(a);if(!a)return{text:"",width:0};var d=b=0,e=a.length-1,f=Infinity;for(this.ctx.font=this._getFontString();d<=e;){var f=Math.floor((d+e)/2),g=a.substr(0,f+1);b=this.ctx.measureText(g).width;if(b<c)d=f+1;else if(b>c)e=f-1;else break}b>c&&1<g.length&&(g=g.substr(0,g.length-1),b=this.ctx.measureText(g).width);c=!0;if(g.length===a.length||" "===a[g.length])c=!1;
c&&(a=g.split(" "),1<a.length&&a.pop(),g=a.join(" "),b=this.ctx.measureText(g).width);return{text:g,width:b}};O.prototype._wrapText=function(){var a=new String(ea(String(this.text))),c=[],b=this.ctx.font,d=0,e=0;for(this.ctx.font=this._getFontString();0<a.length;){var f=this.maxHeight-2*this.padding,g=this._getLineWithWidth(a,this.maxWidth-2*this.padding,!1);g.height=this._lineHeight;c.push(g);e=Math.max(e,g.width);d+=g.height;a=ea(a.slice(g.text.length,a.length));f&&d>f&&(g=c.pop(),d-=g.height)}this._wrappedText=
{lines:c,width:e,height:d};this.width=e+2*this.padding;this.height=d+2*this.padding;this.ctx.font=b};O.prototype._getFontString=function(){var a;a=""+(this.fontStyle?this.fontStyle+" ":"");a+=this.fontWeight?this.fontWeight+" ":"";a+=this.fontSize?this.fontSize+"px ":"";var c=this.fontFamily?this.fontFamily+"":"";!u&&c&&(c=c.split(",")[0],"'"!==c[0]&&'"'!==c[0]&&(c="'"+c+"'"));return a+=c};T(ga,L);ga.prototype.render=function(){if(this.text){var a=this.dockInsidePlotArea?this.chart.plotArea:this.chart,
c=a.layoutManager.getFreeSpace(),b=c.x1,d=c.y1,e=0,f=0,g=this.chart._menuButton&&this.chart.exportEnabled&&"top"===this.verticalAlign?22:0,h,q;"top"===this.verticalAlign||"bottom"===this.verticalAlign?(null===this.maxWidth&&(this.maxWidth=c.width-4-g*("center"===this.horizontalAlign?2:1)),f=0.5*c.height-this.margin-2,e=0):"center"===this.verticalAlign&&("left"===this.horizontalAlign||"right"===this.horizontalAlign?(null===this.maxWidth&&(this.maxWidth=c.height-4),f=0.5*c.width-this.margin-2):"center"===
this.horizontalAlign&&(null===this.maxWidth&&(this.maxWidth=c.width-4),f=0.5*c.height-4));this.wrap||(f=Math.min(f,Math.max(1.5*this.fontSize,this.fontSize+2.5*this.padding)));var f=new O(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,fontColor:this.fontColor,fontStyle:this.fontStyle,fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,verticalAlign:this.verticalAlign,borderColor:this.borderColor,borderThickness:this.borderThickness,backgroundColor:this.backgroundColor,maxWidth:this.maxWidth,
maxHeight:f,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:"top"}),k=f.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(d=c.y1+2,q="top"):"bottom"===this.verticalAlign&&(d=c.y2-2-k.height,q="bottom"),"left"===this.horizontalAlign?b=c.x1+2:"center"===this.horizontalAlign?b=c.x1+c.width/2-k.width/2:"right"===this.horizontalAlign&&(b=c.x2-2-k.width-g),h=this.horizontalAlign,this.width=k.width,this.height=k.height):"center"===
this.verticalAlign&&("left"===this.horizontalAlign?(b=c.x1+2,d=c.y2-2-(this.maxWidth/2-k.width/2),e=-90,q="left",this.width=k.height,this.height=k.width):"right"===this.horizontalAlign?(b=c.x2-2,d=c.y1+2+(this.maxWidth/2-k.width/2),e=90,q="right",this.width=k.height,this.height=k.width):"center"===this.horizontalAlign&&(d=a.y1+(a.height/2-k.height/2),b=a.x1+(a.width/2-k.width/2),q="center",this.width=k.width,this.height=k.height),h="center");f.x=b;f.y=d;f.angle=e;f.horizontalAlign=h;f.render(!0);
a.layoutManager.registerSpace(q,{width:this.width+("left"===q||"right"===q?this.margin+2:0),height:this.height+("top"===q||"bottom"===q?this.margin+2:0)});this.bounds={x1:b,y1:d,x2:b+this.width,y2:d+this.height};this.ctx.textBaseline="top"}};T(na,L);na.prototype.render=ga.prototype.render;T(oa,L);oa.prototype.render=function(){var a=this.dockInsidePlotArea?this.chart.plotArea:this.chart,c=a.layoutManager.getFreeSpace(),b=null,d=0,e=0,f=0,g=0,h=this.chart._options.legend&&!x(this.chart._options.legend.markerMargin)?
this.chart._options.legend.markerMargin:0.3*this.fontSize,q=[],k=[];"top"===this.verticalAlign||"bottom"===this.verticalAlign?(this.orientation="horizontal",b=this.verticalAlign,f=null!==this.maxWidth?this.maxWidth:0.7*c.width,g=null!==this.maxHeight?this.maxHeight:0.5*c.height):"center"===this.verticalAlign&&(this.orientation="vertical",b=this.horizontalAlign,f=null!==this.maxWidth?this.maxWidth:0.5*c.width,g=null!==this.maxHeight?this.maxHeight:0.7*c.height);for(var n=0;n<this.dataSeries.length;n++){var m=
this.dataSeries[n];if("pie"!==m.type&&"doughnut"!==m.type&&"funnel"!==m.type){var l=m.legendMarkerType?m.legendMarkerType:"line"!==m.type&&"stepLine"!==m.type&&"spline"!==m.type&&"scatter"!==m.type&&"bubble"!==m.type||!m.markerType?Y.getDefaultLegendMarker(m.type):m.markerType,p=m.legendText?m.legendText:this.itemTextFormatter?this.itemTextFormatter({chart:this.chart._publicChartReference,legend:this._options,dataSeries:m,dataPoint:null}):m.name,r=m.legendMarkerColor?m.legendMarkerColor:m.markerColor?
m.markerColor:m._colorSet[0],t=m.markerSize||"line"!==m.type&&"stepLine"!==m.type&&"spline"!==m.type?0.75*this.lineHeight:0,u=m.legendMarkerBorderColor?m.legendMarkerBorderColor:m.markerBorderColor,s=m.legendMarkerBorderThickness?m.legendMarkerBorderThickness:m.markerBorderThickness?Math.max(1,Math.round(0.2*t)):0,p=this.chart.replaceKeywordsWithValue(p,m.dataPoints[0],m,n),l={markerType:l,markerColor:r,text:p,textBlock:null,chartType:m.type,markerSize:t,lineColor:m._colorSet[0],dataSeriesIndex:m.index,
dataPointIndex:null,markerBorderColor:u,markerBorderThickness:s};q.push(l)}else for(var v=0;v<m.dataPoints.length;v++){var w=m.dataPoints[v],l=w.legendMarkerType?w.legendMarkerType:m.legendMarkerType?m.legendMarkerType:Y.getDefaultLegendMarker(m.type),p=w.legendText?w.legendText:m.legendText?m.legendText:this.itemTextFormatter?this.itemTextFormatter({chart:this.chart._publicChartReference,legend:this._options,dataSeries:m,dataPoint:w}):w.name?w.name:"DataPoint: "+(v+1),r=w.legendMarkerColor?w.legendMarkerColor:
m.legendMarkerColor?m.legendMarkerColor:w.color?w.color:m.color?m.color:m._colorSet[v%m._colorSet.length],t=0.75*this.lineHeight,u=w.legendMarkerBorderColor?w.legendMarkerBorderColor:m.legendMarkerBorderColor?m.legendMarkerBorderColor:w.markerBorderColor?w.markerBorderColor:m.markerBorderColor,s=w.legendMarkerBorderThickness?w.legendMarkerBorderThickness:m.legendMarkerBorderThickness?m.legendMarkerBorderThickness:w.markerBorderThickness||m.markerBorderThickness?Math.max(1,Math.round(0.2*t)):0,p=this.chart.replaceKeywordsWithValue(p,
w,m,v),l={markerType:l,markerColor:r,text:p,textBlock:null,chartType:m.type,markerSize:t,dataSeriesIndex:n,dataPointIndex:v,markerBorderColor:u,markerBorderThickness:s};(w.showInLegend||m.showInLegend&&!1!==w.showInLegend)&&q.push(l)}}!0===this.reversed&&q.reverse();if(0<q.length){m=null;v=p=w=0;p=null!==this.itemWidth?null!==this.itemMaxWidth?Math.min(this.itemWidth,this.itemMaxWidth,f):Math.min(this.itemWidth,f):null!==this.itemMaxWidth?Math.min(this.itemMaxWidth,f):f;t=0===t?0.75*this.lineHeight:
t;p-=t+h;for(n=0;n<q.length;n++){l=q[n];if("line"===l.chartType||"spline"===l.chartType||"stepLine"===l.chartType)p-=2*0.1*this.lineHeight;if(!(0>=g||"undefined"===typeof g||0>=p||"undefined"===typeof p)){if("horizontal"===this.orientation){l.textBlock=new O(this.ctx,{x:0,y:0,maxWidth:p,maxHeight:this.itemWrap?g:this.lineHeight,angle:0,text:l.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"middle"});
l.textBlock.measureText();null!==this.itemWidth&&(l.textBlock.width=this.itemWidth-(t+h+("line"===l.chartType||"spline"===l.chartType||"stepLine"===l.chartType?2*0.1*this.lineHeight:0)));if(!m||m.width+Math.round(l.textBlock.width+t+h+(0===m.width?0:this.horizontalSpacing)+("line"===l.chartType||"spline"===l.chartType||"stepLine"===l.chartType?2*0.1*this.lineHeight:0))>f)m={items:[],width:0},k.push(m),this.height+=v,v=0;v=Math.max(v,l.textBlock.height)}else l.textBlock=new O(this.ctx,{x:0,y:0,maxWidth:p,
maxHeight:!0===this.itemWrap?g:1.5*this.fontSize,angle:0,text:l.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"middle"}),l.textBlock.measureText(),null!==this.itemWidth&&(l.textBlock.width=this.itemWidth-(t+h+("line"===l.chartType||"spline"===l.chartType||"stepLine"===l.chartType?2*0.1*this.lineHeight:0))),this.height<g-this.lineHeight?(m={items:[],width:0},k.push(m)):(m=k[w],
w=(w+1)%k.length),this.height+=l.textBlock.height;l.textBlock.x=m.width;l.textBlock.y=0;m.width+=Math.round(l.textBlock.width+t+h+(0===m.width?0:this.horizontalSpacing)+("line"===l.chartType||"spline"===l.chartType||"stepLine"===l.chartType?2*0.1*this.lineHeight:0));m.items.push(l);this.width=Math.max(m.width,this.width)}}this.height=!1===this.itemWrap?k.length*this.lineHeight:this.height+v;this.height=Math.min(g,this.height);this.width=Math.min(f,this.width)}"top"===this.verticalAlign?(e="left"===
this.horizontalAlign?c.x1:"right"===this.horizontalAlign?c.x2-this.width:c.x1+c.width/2-this.width/2,d=c.y1):"center"===this.verticalAlign?(e="left"===this.horizontalAlign?c.x1:"right"===this.horizontalAlign?c.x2-this.width:c.x1+c.width/2-this.width/2,d=c.y1+c.height/2-this.height/2):"bottom"===this.verticalAlign&&(e="left"===this.horizontalAlign?c.x1:"right"===this.horizontalAlign?c.x2-this.width:c.x1+c.width/2-this.width/2,d=c.y2-this.height);this.items=q;for(n=0;n<this.items.length;n++)l=q[n],
l.id=++this.chart._eventManager.lastObjectId,this.chart._eventManager.objectMap[l.id]={id:l.id,objectType:"legendItem",legendItemIndex:n,dataSeriesIndex:l.dataSeriesIndex,dataPointIndex:l.dataPointIndex};for(n=c=0;n<k.length;n++){m=k[n];for(w=v=0;w<m.items.length;w++){l=m.items[w];r=l.textBlock.x+e+(0===w?0.2*t:this.horizontalSpacing);u=d+c;p=r;this.chart.data[l.dataSeriesIndex].visible||(this.ctx.globalAlpha=0.5);this.ctx.save();this.ctx.rect(e,d,f,Math.max(g-g%this.lineHeight,d));this.ctx.clip();
if("line"===l.chartType||"stepLine"===l.chartType||"spline"===l.chartType)this.ctx.strokeStyle=l.lineColor,this.ctx.lineWidth=Math.ceil(this.lineHeight/8),this.ctx.beginPath(),this.ctx.moveTo(r-0.1*this.lineHeight,u+this.lineHeight/2),this.ctx.lineTo(r+0.85*this.lineHeight,u+this.lineHeight/2),this.ctx.stroke(),p-=0.1*this.lineHeight;P.drawMarker(r+t/2,u+this.lineHeight/2,this.ctx,l.markerType,l.markerSize,l.markerColor,l.markerBorderColor,l.markerBorderThickness);l.textBlock.x=r+h+t;if("line"===
l.chartType||"stepLine"===l.chartType||"spline"===l.chartType)l.textBlock.x+=0.1*this.lineHeight;l.textBlock.y=Math.round(u+this.lineHeight/2);l.textBlock.render(!0);this.ctx.restore();v=0<w?Math.max(v,l.textBlock.height):l.textBlock.height;this.chart.data[l.dataSeriesIndex].visible||(this.ctx.globalAlpha=1);r=C(l.id);this.ghostCtx.fillStyle=r;this.ghostCtx.beginPath();this.ghostCtx.fillRect(p,l.textBlock.y-this.lineHeight/2,l.textBlock.x+l.textBlock.width-p,l.textBlock.height);l.x1=this.chart._eventManager.objectMap[l.id].x1=
p;l.y1=this.chart._eventManager.objectMap[l.id].y1=l.textBlock.y-this.lineHeight/2;l.x2=this.chart._eventManager.objectMap[l.id].x2=l.textBlock.x+l.textBlock.width;l.y2=this.chart._eventManager.objectMap[l.id].y2=l.textBlock.y+l.textBlock.height-this.lineHeight/2}c+=v}0<q.length&&a.layoutManager.registerSpace(b,{width:this.width+2+2,height:this.height+5+5});this.bounds={x1:e,y1:d,x2:e+this.width,y2:d+this.height}};T(ua,L);ua.prototype.render=function(){var a=this.chart.layoutManager.getFreeSpace();
this.ctx.fillStyle="red";this.ctx.fillRect(a.x1,a.y1,a.x2,a.y2)};T(Y,L);Y.prototype.getDefaultAxisPlacement=function(){var a=this.type;if("column"===a||"line"===a||"stepLine"===a||"spline"===a||"area"===a||"stepArea"===a||"splineArea"===a||"stackedColumn"===a||"stackedLine"===a||"bubble"===a||"scatter"===a||"stackedArea"===a||"stackedColumn100"===a||"stackedLine100"===a||"stackedArea100"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeArea"===a||"rangeSplineArea"===a)return"normal";if("bar"===
a||"stackedBar"===a||"stackedBar100"===a||"rangeBar"===a)return"xySwapped";if("pie"===a||"doughnut"===a||"funnel"===a)return"none";window.console.log("Unknown Chart Type: "+a);return null};Y.getDefaultLegendMarker=function(a){if("column"===a||"stackedColumn"===a||"stackedLine"===a||"bar"===a||"stackedBar"===a||"stackedBar100"===a||"bubble"===a||"scatter"===a||"stackedColumn100"===a||"stackedLine100"===a||"stepArea"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeBar"===a||"rangeArea"===
a||"rangeSplineArea"===a)return"square";if("line"===a||"stepLine"===a||"spline"===a||"pie"===a||"doughnut"===a||"funnel"===a)return"circle";if("area"===a||"splineArea"===a||"stackedArea"===a||"stackedArea100"===a)return"triangle";window.console.log("Unknown Chart Type: "+a);return null};Y.prototype.getDataPointAtX=function(a,c){if(!this.dataPoints||0===this.dataPoints.length)return null;var b={dataPoint:null,distance:Infinity,index:NaN},d=null,e=0,f=0,g=1,h=Infinity,q=0,k=0,n=0;"none"!==this.chart.plotInfo.axisPlacement&&
(n=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,n=0<n?Math.min(Math.max((this.dataPoints.length-1)/n*(a-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0);for(;;){f=0<g?n+e:n-e;if(0<=f&&f<this.dataPoints.length){var d=this.dataPoints[f],m=Math.abs(d.x-a);m<b.distance&&(b.dataPoint=d,b.distance=m,b.index=f);d=Math.abs(d.x-a);d<=h?h=d:0<g?q++:k++;if(1E3<q&&1E3<k)break}else if(0>n-e&&n+e>=this.dataPoints.length)break;-1===g?(e++,g=1):g=-1}return c||b.dataPoint.x!==a?c&&null!==
b.dataPoint?b:null:b};Y.prototype.getDataPointAtXY=function(a,c,b){if(!this.dataPoints||0===this.dataPoints.length||a<this.chart.plotArea.x1||a>this.chart.plotArea.x2||c<this.chart.plotArea.y1||c>this.chart.plotArea.y2)return null;b=b||!1;var d=[],e=0,f=0,g=1,h=!1,q=Infinity,k=0,n=0,m=0;"none"!==this.chart.plotInfo.axisPlacement&&(m=this.chart.axisX.getXValueAt({x:a,y:c}),f=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,m=0<f?Math.min(Math.max((this.dataPoints.length-1)/f*(m-this.dataPoints[0].x)>>
0,0),this.dataPoints.length):0);for(;;){f=0<g?m+e:m-e;if(0<=f&&f<this.dataPoints.length){var l=this.chart._eventManager.objectMap[this.dataPointIds[f]],p=this.dataPoints[f],r=null;if(l){switch(this.type){case "column":case "stackedColumn":case "stackedColumn100":case "bar":case "stackedBar":case "stackedBar100":case "rangeColumn":case "rangeBar":a>=l.x1&&(a<=l.x2&&c>=l.y1&&c<=l.y2)&&(d.push({dataPoint:p,dataPointIndex:f,dataSeries:this,distance:Math.min(Math.abs(l.x1-a),Math.abs(l.x2-a),Math.abs(l.y1-
c),Math.abs(l.y2-c))}),h=!0);break;case "line":case "stepLine":case "spline":case "area":case "stepArea":case "stackedArea":case "stackedArea100":case "splineArea":case "scatter":var t=R("markerSize",p,this)||4,u=b?20:t,r=Math.sqrt(Math.pow(l.x1-a,2)+Math.pow(l.y1-c,2));r<=u&&d.push({dataPoint:p,dataPointIndex:f,dataSeries:this,distance:r});f=Math.abs(l.x1-a);f<=q?q=f:0<g?k++:n++;r<=t/2&&(h=!0);break;case "rangeArea":case "rangeSplineArea":t=R("markerSize",p,this)||4;u=b?20:t;r=Math.min(Math.sqrt(Math.pow(l.x1-
a,2)+Math.pow(l.y1-c,2)),Math.sqrt(Math.pow(l.x1-a,2)+Math.pow(l.y2-c,2)));r<=u&&d.push({dataPoint:p,dataPointIndex:f,dataSeries:this,distance:r});f=Math.abs(l.x1-a);f<=q?q=f:0<g?k++:n++;r<=t/2&&(h=!0);break;case "bubble":t=l.size;r=Math.sqrt(Math.pow(l.x1-a,2)+Math.pow(l.y1-c,2));r<=t/2&&(d.push({dataPoint:p,dataPointIndex:f,dataSeries:this,distance:r}),h=!0);break;case "pie":case "doughnut":t=l.center;u="doughnut"===this.type?l.percentInnerRadius*l.radius:0;r=Math.sqrt(Math.pow(t.x-a,2)+Math.pow(t.y-
c,2));r<l.radius&&r>u&&(r=Math.atan2(c-t.y,a-t.x),0>r&&(r+=2*Math.PI),r=Number(((180*(r/Math.PI)%360+360)%360).toFixed(12)),t=Number(((180*(l.startAngle/Math.PI)%360+360)%360).toFixed(12)),u=Number(((180*(l.endAngle/Math.PI)%360+360)%360).toFixed(12)),0===u&&1<l.endAngle&&(u=360),t>=u&&0!==p.y&&(u+=360,r<t&&(r+=360)),r>t&&r<u&&(d.push({dataPoint:p,dataPointIndex:f,dataSeries:this,distance:0}),h=!0));break;case "candlestick":if(a>=l.x1-l.borderThickness/2&&a<=l.x2+l.borderThickness/2&&c>=l.y2-l.borderThickness/
2&&c<=l.y3+l.borderThickness/2||Math.abs(l.x2-a+l.x1-a)<l.borderThickness&&c>=l.y1&&c<=l.y4)d.push({dataPoint:p,dataPointIndex:f,dataSeries:this,distance:Math.min(Math.abs(l.x1-a),Math.abs(l.x2-a),Math.abs(l.y2-c),Math.abs(l.y3-c))}),h=!0;break;case "ohlc":if(Math.abs(l.x2-a+l.x1-a)<l.borderThickness&&c>=l.y2&&c<=l.y3||a>=l.x1&&a<=(l.x2+l.x1)/2&&c>=l.y1-l.borderThickness/2&&c<=l.y1+l.borderThickness/2||a>=(l.x1+l.x2)/2&&a<=l.x2&&c>=l.y4-l.borderThickness/2&&c<=l.y4+l.borderThickness/2)d.push({dataPoint:p,
dataPointIndex:f,dataSeries:this,distance:Math.min(Math.abs(l.x1-a),Math.abs(l.x2-a),Math.abs(l.y2-c),Math.abs(l.y3-c))}),h=!0}if(h||1E3<k&&1E3<n)break}}else if(0>m-e&&m+e>=this.dataPoints.length)break;-1===g?(e++,g=1):g=-1}a=null;for(c=0;c<d.length;c++)a?d[c].distance<=a.distance&&(a=d[c]):a=d[c];return a};Y.prototype.getMarkerProperties=function(a,c,b,d){var e=this.dataPoints;return{x:c,y:b,ctx:d,type:e[a].markerType?e[a].markerType:this.markerType,size:e[a].markerSize?e[a].markerSize:this.markerSize,
color:e[a].markerColor?e[a].markerColor:this.markerColor?this.markerColor:e[a].color?e[a].color:this.color?this.color:this._colorSet[a%this._colorSet.length],borderColor:e[a].markerBorderColor?e[a].markerBorderColor:this.markerBorderColor?this.markerBorderColor:null,borderThickness:e[a].markerBorderThickness?e[a].markerBorderThickness:this.markerBorderThickness?this.markerBorderThickness:null}};T(F,L);F.prototype.createLabels=function(){var a,c,b=0,b=0,d,e=0,f=0,g=0,h=0,q=0;if("bottom"===this._position||
"top"===this._position)q=this.lineCoordinates.width/Math.abs(this.viewportMaximum-this.viewportMinimum)*E[this.intervalType+"Duration"]*this.interval,e="undefined"===typeof this._options.labelMaxWidth?0.5*this.chart.width>>0:this._options.labelMaxWidth,this.chart.panEnabled||(g="undefined"===typeof this._options.labelWrap||this.labelWrap?0.8*this.chart.height>>0:1.5*this.labelFontSize);else if("left"===this._position||"right"===this._position)q=this.lineCoordinates.height/Math.abs(this.viewportMaximum-
this.viewportMinimum)*E[this.intervalType+"Duration"]*this.interval,this.chart.panEnabled||(e="undefined"===typeof this._options.labelMaxWidth?0.3*this.chart.width>>0:this._options.labelMaxWidth),g="undefined"===typeof this._options.labelWrap||this.labelWrap?0.3*this.chart.height>>0:1.5*this.labelFontSize;if("axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType)for(this.intervalStartPosition=this.getLabelStartPoint(new Date(this.viewportMinimum),this.intervalType,this.interval),d=za(new Date(this.viewportMaximum),
this.interval,this.intervalType),b=this.intervalStartPosition;b<d;za(b,this.interval,this.intervalType))a=b.getTime(),a=this.labelFormatter?this.labelFormatter({chart:this.chart._publicChartReference,axis:this._options,value:b,label:this.labels[b]?this.labels[b]:null}):"axisX"===this.type&&this.labels[a]?this.labels[a]:wa(b,this.valueFormatString,this.chart._cultureInfo),a=new O(this.ctx,{x:0,y:0,maxWidth:e,maxHeight:g,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,
fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:b.getTime(),textBlock:a,effectiveHeight:null});else{d=this.viewportMaximum;if(this.labels&&this.labels.length){a=Math.ceil(this.interval);for(var k=Math.ceil(this.intervalStartPosition),f=!1,b=k;b<this.viewportMaximum;b+=a)if(this.labels[b])f=!0;else{f=!1;break}f&&(this.interval=a,this.intervalStartPosition=k)}for(b=this.intervalStartPosition;b<=
d;b=parseFloat((b+this.interval).toFixed(14)))a=this.labelFormatter?this.labelFormatter({chart:this.chart._publicChartReference,axis:this._options,value:b,label:this.labels[b]?this.labels[b]:null}):"axisX"===this.type&&this.labels[b]?this.labels[b]:ba(b,this.valueFormatString,this.chart._cultureInfo),a=new O(this.ctx,{x:0,y:0,maxWidth:e,maxHeight:g,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,
fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:b,textBlock:a,effectiveHeight:null})}d=[];f=[];if(this.labelAutoFit||this._options.labelAutoFit)if("bottom"===this._position||"top"===this._position)if(h=0,e=0.9*q>>0,x(this.labelAngle)||(this.labelAngle=(this.labelAngle%360+360)%360,90<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:270<this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360)),!this.chart.panEnabled&&
1<=this._labels.length){this.sessionVariables.labelFontSize=this.labelFontSize;this.sessionVariables.labelMaxWidth=e;this.sessionVariables.labelMaxHeight=g;this.sessionVariables.labelAngle=this.labelAngle;this.sessionVariables.labelWrap=!0;for(b=0;b<this._labels.length;b++)(a=this._labels[b].textBlock,k=a.measureText(),b<this._labels.length-1&&(h=b+1,c=this._labels[h].textBlock,c=c.measureText()),d.push(a.height),this.sessionVariables.labelMaxHeight=Math.max.apply(Math,d),f=e*Math.cos(Math.PI/180*
Math.abs(this.labelAngle))+(g-a.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle)),h=e*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(g-a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)),x(this._options.labelAngle)&&isNaN(this._options.labelAngle)&&0!==this._options.labelAngle)?(this.sessionVariables.labelMaxHeight=0===this.labelAngle?g:Math.min((h-e*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)),h),x(this._options.labelWrap))?
x(this._options.labelWrap)&&(x(this._options.labelMaxWidth)?x(c)||(k.width+c.width>>0>=2*e&&k.width+c.width>>0<2.4*e?(k=this.labelFontSize,this.sessionVariables.labelMaxWidth=1.2*e,x(this._options.labelFontSize)&&12<k&&(k=Math.floor(12/13*k),a.measureText()),this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?k:this._options.labelFontSize,this.sessionVariables.labelAngle=this.labelAngle):k.width+c.width>>0>=2.4*e&&k.width+c.width<2.8*e?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=
2.5*e,this.sessionVariables.labelFontSize=this.labelFontSize):k.width+c.width>>0>=2.8*e&&k.width+c.width<3.2*e?(this.sessionVariables.labelMaxWidth=1.2*e,this.sessionVariables.labelWrap=!0,x(this._options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?this.labelFontSize:this._options.labelFontSize,this.sessionVariables.labelAngle=this.labelAngle):k.width+c.width>>0>=
3.2*e&&k.width+c.width<3.6*e?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=2.5*e,this.sessionVariables.labelFontSize=this.labelFontSize):k.width+c.width>3.6*e&&k.width+c.width<5*e?(x(this._options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?this.labelFontSize:this._options.labelFontSize,this.sessionVariables.labelWrap=
!0,this.sessionVariables.labelMaxWidth=e,this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelWrap=!0):k.width+c.width>5*e&&(this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=e,this.sessionVariables.labelFontSize=this.labelFontSize,this.sessionVariables.labelMaxHeight=g,this.sessionVariables.labelAngle=this.labelAngle)):this._options.labelMaxWidth<e?(this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth,this.sessionVariables.labelMaxHeight=h):
(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=x(this._options.labelMaxWidth)?e:this._options.labelMaxWidth>0.3*this.chart.width>>0?0.3*this.chart.width>>0:this._options.labelMaxWidth,this.sessionVariables.labelMaxHeight=2.5*this.labelFontSize)):this._options.labelWrap?(this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth:e,this.sessionVariables.labelAngle=this._options.labelMaxWidth>e?-25:this.sessionVariables.labelAngle,this.sessionVariables.labelMaxHeight=
h):x(this._options.labelMaxWidth)?(this.sessionVariables.labelMaxWidth=e,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=g):(this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth:e,this.sessionVariables.labelAngle=this._options.labelMaxWidth>e?-25:this.sessionVariables.labelAngle,this.sessionVariables.labelMaxHeight=g,this.sessionVariables.labelWrap=this.labelWrap):(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxHeight=
0===this.labelAngle?g:Math.min((h-e*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)),h),x(this._options.labelWrap))?x(this._options.labelWrap)&&(this.labelWrap&&!x(this._options.labelMaxWidth)?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth>0.8*this.chart.height>>0?0.8*this.chart.height>>0:this._options.labelMaxWidth:e,this.sessionVariables.labelMaxHeight=g):
(this.sessionVariables.labelMaxWidth=f>0.5*this.chart.height?0.5*this.chart.height:f,this.sessionVariables.labelMaxHeight=h<0.9*q?0.9*q:h<this.labelFontSize?2.5*this.labelFontSize:h-this.labelFontSize,this.sessionVariables.labelWrap=this.labelWrap,x(this._options.labelMaxWidth)&&(this.sessionVariables.labelAngle=this.labelAngle))):(this._options.labelWrap?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth>0.8*
this.chart.height>>0?0.8*this.chart.height>>0:this._options.labelMaxWidth:e):(x(this._options.labelMaxWidth),this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth>0.8*this.chart.height>>0?0.8*this.chart.height>>0:this._options.labelMaxWidth:f,this.sessionVariables.labelWrap=this.labelWrap),this.sessionVariables.labelMaxHeight=g);for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=
this.labelFontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText()}else for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=x(this._options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:this._options.labelMaxWidth,a.fontSize=this.labelFontSize=x(this._options.labelFontSize)?this.sessionVariables.labelFontSize:
this._options.labelFontSize,a.angle=this.labelAngle=x(this._options.labelAngle)?this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=x(this._options.labelWrap)?this.sessionVariables.labelWrap:this._options.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();else if("left"===this._position||"right"===this._position)if(e=x(this._options.labelMaxWidth)?0.3*this.chart.width>>0:this._options.labelMaxWidth,x(this.labelAngle)||(this.labelAngle=(this.labelAngle%360+
360)%360,90<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:270<this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360)),!this.chart.panEnabled&&1<=this._labels.length){this.sessionVariables.labelFontSize=this.labelFontSize;this.sessionVariables.labelMaxWidth=e;this.sessionVariables.labelMaxHeight=g;this.sessionVariables.labelAngle=x(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle;this.sessionVariables.labelWrap=!0;for(b=0;b<this._labels.length;b++)(a=this._labels[b].textBlock,
k=a.measureText(),b<this._labels.length-1&&(h=b+1,c=this._labels[h].textBlock,c=c.measureText()),f.push(a.height),this.sessionVariables.labelMaxHeight=Math.max.apply(Math,f),h=e*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(g-a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)),Math.cos(Math.PI/180*Math.abs(this.labelAngle)),Math.sin(Math.PI/180*Math.abs(this.labelAngle)),x(this._options.labelAngle)&&isNaN(this._options.labelAngle)&&0!==this._options.labelAngle)?x(this._options.labelWrap)?
x(this._options.labelWrap)&&(x(this._options.labelMaxWidth)?x(c)||(k.height+c.height>>0>=2*this.labelMaxHeight&&k.height+c.height>>0<2.4*this.labelMaxHeight?(x(this._options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelMaxHeight=this.labelMaxHeight,this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?this.labelFontSize:this._options.labelFontSize):k.height+c.height>>0>=2.4*this.labelMaxHeight&&
k.height+c.height<2.8*this.labelMaxHeight?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelFontSize=this.labelFontSize,this.sessionVariables.labelWrap=!0):k.height+c.height>>0>=2.8*this.labelMaxHeight&&k.height+c.height<3.2*this.labelMaxHeight?(this.sessionVariables.labelMaxHeight=this.labelMaxHeight,this.sessionVariables.labelWrap=!0,x(this._options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),
a.measureText()),this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?this.labelFontSize:this._options.labelFontSize,this.sessionVariables.labelAngle=x(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):k.height+c.height>>0>=3.2*this.labelMaxHeight&&k.height+c.height<3.6*this.labelMaxHeight?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelFontSize=this.labelFontSize):k.height+
c.height>3.6*this.labelMaxHeight&&k.height+c.height<10*this.labelMaxHeight?(x(this._options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?this.labelFontSize:this._options.labelFontSize,this.sessionVariables.labelMaxWidth=e,this.sessionVariables.labelMaxHeight=this.labelMaxHeight,this.sessionVariables.labelAngle=x(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):
k.height+c.height>10*this.labelMaxHeight&&k.height+c.height<50*this.labelMaxHeight&&(x(this._options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?this.labelFontSize:this._options.labelFontSize,this.sessionVariables.labelMaxHeight=this.labelMaxHeight,this.sessionVariables.labelMaxWidth=e,this.sessionVariables.labelAngle=x(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle)):
this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth<e?this._options.labelMaxWidth:this._options.labelMaxWidth?this._options.labelMaxWidth>0.3*this.chart.width>>0?0.3*this.chart.width>>0:this._options.labelMaxWidth:this.sessionVariables.labelMaxWidth):this._options.labelWrap?this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth>0.3*this.chart.width>>0?0.3*this.chart.width>>0:this._options.labelMaxWidth:this.sessionVariables.labelMaxWidth:this._options.labelMaxWidth?
this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth>0.3*this.chart.width>>0?0.3*this.chart.width>>0:this._options.labelMaxWidth:this.sessionVariables.labelMaxWidth:(this.sessionVariables.labelMaxWidth=e,this.sessionVariables.labelAngle=-25):(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxWidth=0===this.labelAngle?e:Math.min((h-g*Math.sin(Math.PI/180*Math.abs(this.labelAngle)))/Math.cos(Math.PI/180*Math.abs(this.labelAngle)),g),
x(this._options.labelWrap))?x(this._options.labelWrap)&&(this.labelWrap&&!x(this._options.labelMaxWidth)?(this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth>0.8*this.chart.height>>0?0.8*this.chart.height>>0:this._options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=h):(this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth>0.8*this.chart.height>>
0?0.8*this.chart.height>>0:this._options.labelMaxWidth:e,this.sessionVariables.labelMaxHeight=0===this.labelAngle?g:h,x(this._options.labelMaxWidth)&&(this.sessionVariables.labelAngle=this.labelAngle))):this._options.labelWrap?(this.sessionVariables.labelMaxHeight=0===this.labelAngle?g:h,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=e):(x(this._options.labelMaxWidth),this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth>0.8*
this.chart.height>>0?0.8*this.chart.height>>0:this._options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap);for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=this.labelFontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,
a.measureText()}else for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=x(this._options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:this._options.labelMaxWidth,a.fontSize=this.labelFontSize=x(this._options.labelFontSize)?this.sessionVariables.labelFontSize:this._options.labelFontSize,a.angle=this.labelAngle=x(this._options.labelAngle)?this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=x(this._options.labelWrap)?this.sessionVariables.labelWrap:
this._options.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();for(b=0;b<this.stripLines.length;b++)c=this.stripLines[b],e="bottom"===this._position||"top"===this._position?0.9*this.chart.width>>0:0.9*this.chart.height>>0,a=new O(this.ctx,{x:0,y:0,backgroundColor:"outside"===c.labelPlacement?c._options.labelBackgroundColor?c._options.labelBackgroundColor:"#EEEEEE":c.startValue?"#EEEEEE":c.labelBackgroundColor,maxWidth:c._options.labelMaxWidth?c._options.labelMaxWidth:e,maxHeight:"undefined"===
typeof c._options.labelWrap||c.labelWrap?e:1.5*this.labelFontSize,angle:this.labelAngle,text:c.labelFormatter?c.labelFormatter({chart:this.chart._publicChartReference,axis:this,stripLine:c}):c.label,horizontalAlign:"left",fontSize:"outside"===c.labelPlacement?c._options.labelFontSize?c._options.labelFontSize:this.labelFontSize:c.labelFontSize,fontFamily:"outside"===c.labelPlacement?c._options.labelFontFamily?c._options.labelFontFamily:this.labelFontFamily:c.labelFontFamily,fontWeight:"outside"===
c.labelPlacement?c._options.fontWeight?c._options.fontWeight:this.fontWeight:c.fontWeight,fontColor:c._options.labelFontColor||c.labelFontColor,fontStyle:"outside"===c.labelPlacement?c._options.fontStyle?c._options.fontStyle:this.fontWeight:c.fontStyle,textBaseline:"middle",borderThickness:0}),this._stripLineLabels.push({position:c.value,textBlock:a,effectiveHeight:null,stripLine:c})};F.prototype.createLabelsAndCalculateWidth=function(){var a=0,c=0;this._labels=[];this._stripLineLabels=[];if("left"===
this._position||"right"===this._position){this.createLabels();for(c=0;c<this._labels.length;c++){var b=this._labels[c].textBlock,d=b.measureText(),e=0,e=0===this.labelAngle?d.width:d.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(d.height-b.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle));a<e&&(a=e);this._labels[c].effectiveWidth=e}for(c=0;c<this._stripLineLabels.length;c++)"outside"===this._stripLineLabels[c].stripLine.labelPlacement&&(b=this._stripLineLabels[c].textBlock,d=b.measureText(),
e=0===this.labelAngle?d.width:d.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(d.height-b.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle)),a<e&&(a=e),this._stripLineLabels[c].effectiveWidth=e)}return(this.title?this._titleTextBlock.measureText().height+2:0)+a+this.tickLength+5};F.prototype.createLabelsAndCalculateHeight=function(){var a=0;this._labels=[];this._stripLineLabels=[];var c,b=0;this.createLabels();if("bottom"===this._position||"top"===this._position){for(b=0;b<this._labels.length;b++){c=
this._labels[b].textBlock;var d=c.measureText(),e=0,e=0===this.labelAngle?d.height:d.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(d.height-c.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle));a<e&&(a=e);this._labels[b].effectiveHeight=e}for(b=0;b<this._stripLineLabels.length;b++)"outside"===this._stripLineLabels[b].stripLine.labelPlacement&&(c=this._stripLineLabels[b].textBlock,d=c.measureText(),e=0===this.labelAngle?d.height:d.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+
(d.height-c.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)),a<e&&(a=e),this._labels[b].effectiveHeight=e)}return(this.title?this._titleTextBlock.measureText().height+2:0)+a+this.tickLength+5};F.setLayoutAndRender=function(a,c,b,d,e){var f,g,h,q=a.chart,k=q.ctx;a.calculateAxisParameters();c&&c.calculateAxisParameters();b&&b.calculateAxisParameters();var n=c?c.margin:0,m=b?b.margin:0,l=0,p=0,r=0,t,u,s,v,w,B,C=0,A=0,D,E,I;D=E=I=!1;a&&a.title&&(a._titleTextBlock=new O(a.ctx,{text:a.title,
horizontalAlign:"center",fontSize:a.titleFontSize,fontFamily:a.titleFontFamily,fontWeight:a.titleFontWeight,fontColor:a.titleFontColor,fontStyle:a.titleFontStyle,textBaseline:"top"}));c&&c.title&&(c._titleTextBlock=new O(c.ctx,{text:c.title,horizontalAlign:"center",fontSize:c.titleFontSize,fontFamily:c.titleFontFamily,fontWeight:c.titleFontWeight,fontColor:c.titleFontColor,fontStyle:c.titleFontStyle,textBaseline:"top"}));b&&b.title&&(b._titleTextBlock=new O(b.ctx,{text:b.title,horizontalAlign:"center",
fontSize:b.titleFontSize,fontFamily:b.titleFontFamily,fontWeight:b.titleFontWeight,fontColor:b.titleFontColor,fontStyle:b.titleFontStyle,textBaseline:"top"}));if("normal"===d){var G=[],F=[],J=[];a&&a.title&&(a._titleTextBlock.maxWidth=a.titleMaxWidth||e.width,a._titleTextBlock.maxHeight=a.titleWrap?0.8*e.height:1.5*a.titleFontSize,a._titleTextBlock.angle=0);c&&c.title&&(c._titleTextBlock.maxWidth=c.titleMaxWidth||e.height,c._titleTextBlock.maxHeight=c.titleWrap?0.8*e.width:1.5*c.titleFontSize,c._titleTextBlock.angle=
-90);b&&b.title&&(b._titleTextBlock.maxWidth=b.titleMaxWidth||e.height,b._titleTextBlock.maxHeight=b.titleWrap?0.8*e.width:1.5*b.titleFontSize,b._titleTextBlock.angle=90);for(;4>l++;){a.lineCoordinates={};t=Math.ceil(c?c.createLabelsAndCalculateWidth():0);F.push(t);f=Math.round(e.x1+t+n);u=Math.ceil(b?b.createLabelsAndCalculateWidth():0);J.push(u);g=Math.round(e.x2-u-m>a.chart.width-10?a.chart.width-10:e.x2-u-m);!a.labelAutoFit||(x(w)||x(B))||(0<a.labelAngle?B+r>g&&(C+=0<a.labelAngle?B+r-g-u:0):0>
a.labelAngle?w-p<f&&w-p<a.viewportMinimum&&(A=f-(n+a.tickLength+t+w-p+a.labelFontSize/2)):0===a.labelAngle&&(B+r>g&&(C=B+r/2-g-u),w-p<f&&w-p<a.viewportMinimum&&(A=f-n-a.tickLength-t-w+p/2)),a.viewportMaximum===a.maximum&&a.viewportMinimum===a.minimum&&0<a.labelAngle&&0<C?g-=C:a.viewportMaximum===a.maximum&&a.viewportMinimum===a.minimum&&0>a.labelAngle&&0<A?f+=A:a.viewportMaximum===a.maximum&&a.viewportMinimum===a.minimum&&0===a.labelAngle&&(0<A&&(f+=A),0<C&&(g-=C)));a.lineCoordinates.x1=f;a.lineCoordinates.x2=
g;a.lineCoordinates.width=Math.abs(g-f);a.title&&(a._titleTextBlock.maxWidth=0<a.titleMaxWidth&&a.titleMaxWidth<a.lineCoordinates.width?a.titleMaxWidth:a.lineCoordinates.width);s=Math.ceil(a.createLabelsAndCalculateHeight());G.push(s);a._labels&&1<a._labels.length&&(d=h=0,h=a._labels[1],d="dateTime"===a.chart.plotInfo.axisXValueType?a._labels[a._labels.length-2]:a._labels[a._labels.length-1],p=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+(h.textBlock.height-d.textBlock.fontSize/
2)*Math.sin(Math.PI/180*Math.abs(h.textBlock.angle)),r=d.textBlock.width*Math.cos(Math.PI/180*Math.abs(d.textBlock.angle))+(d.textBlock.height-d.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(d.textBlock.angle)));q.panEnabled?s=q.sessionVariables.axisX.height:q.sessionVariables.axisX.height=s;d=Math.round(e.y2-s-a.margin);h=Math.round(e.y2-a.margin);a.lineCoordinates.y1=d;a.lineCoordinates.y2=d;a.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:h-d};c&&(f=Math.round(e.x1+c.margin),d=Math.round(10>
e.y1?10:e.y1),g=Math.round(e.x1+t+c.margin),h=Math.round(e.y2-s-a.margin),c.lineCoordinates={x1:g,y1:d,x2:g,y2:h,height:Math.abs(h-d)},c.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:h-d},c.title&&(c._titleTextBlock.maxWidth=0<c.titleMaxWidth&&c.titleMaxWidth<c.lineCoordinates.height?c.titleMaxWidth:c.lineCoordinates.height));b&&(f=Math.round(a.lineCoordinates.x2),d=Math.round(10>e.y1?10:e.y1),g=Math.round(f+u),h=Math.round(e.y2-s-a.margin),b.lineCoordinates={x1:f,y1:d,x2:f,y2:h,height:Math.abs(h-
d)},b.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:h-d},b.title&&(b._titleTextBlock.maxWidth=0<b.titleMaxWidth&&b.titleMaxWidth<b.lineCoordinates.height?b.titleMaxWidth:b.lineCoordinates.height));a.calculateValueToPixelConversionParameters();a._labels&&1<a._labels.length&&(w=(a._labels[1].position-a.viewportMinimum)*a.conversionParameters.pixelPerUnit+a.lineCoordinates.x1,B="dateTime"===a.chart.plotInfo.axisXValueType?(a._labels[a._labels.length-2].position-a.viewportMinimum)*a.conversionParameters.pixelPerUnit+
a.lineCoordinates.x1:(a._labels[a._labels.length-1].position-a.viewportMinimum)*a.conversionParameters.pixelPerUnit+a.lineCoordinates.x1);c&&c.calculateValueToPixelConversionParameters();b&&b.calculateValueToPixelConversionParameters();if(a||c||b){if(!x(G))for(l=0;l<G.length;l++)for(j=l+1;j<G.length;j++)G[l]==G[j]&&(D=!0);if(!x(F))for(l=0;l<F.length;l++)for(j=l+1;j<F.length;j++)F[l]==F[j]&&(E=!0);if(!x(J))for(l=0;l<J.length;l++)for(j=l+1;j<J.length;j++)J[l]==J[j]&&(I=!0)}if(D&&E&&I)break}k.save();
k.rect(5,a.boundingRect.y1,a.chart.width-10,a.boundingRect.height);k.clip();a.renderLabelsTicksAndTitle();k.restore();c&&c.renderLabelsTicksAndTitle();b&&b.renderLabelsTicksAndTitle()}else{m=[];w=[];B=[];a&&a.title&&(a._titleTextBlock.maxWidth=a.titleMaxWidth||e.height,a._titleTextBlock.maxHeight=a.titleWrap?0.8*e.width:1.5*a.titleFontSize,a._titleTextBlock.angle=-90);c&&c.title&&(c._titleTextBlock.maxWidth=c.titleMaxWidth||e.width,c._titleTextBlock.maxHeight=c.titleWrap?0.8*e.height:1.5*c.titleFontSize,
c._titleTextBlock.angle=0);b&&b.title&&(b._titleTextBlock.maxWidth=c.titleMaxWidth||e.width,b._titleTextBlock.maxHeight=b.titleWrap?0.8*e.height:1.5*b.titleFontSize,b._titleTextBlock.angle=0);for(;4>l++;){C=Math.ceil(a.createLabelsAndCalculateWidth());m.push(C);c&&(c.lineCoordinates={},f=Math.round(e.x1+C+a.margin),g=Math.round(e.x2>c.chart.width-10?c.chart.width-10:e.x2),c.labelAutoFit&&!x(t)&&(f=0>c.labelAngle?Math.max(f,t):0===c.labelAngle?Math.max(f,t/2):f,g=0<c.labelAngle?g-u:0===c.labelAngle?
g-u/2:g),c.lineCoordinates.x1=f,c.lineCoordinates.x2=g,c.lineCoordinates.width=Math.abs(g-f),c.title&&(c._titleTextBlock.maxWidth=0<c.titleMaxWidth&&c.titleMaxWidth<c.lineCoordinates.width?c.titleMaxWidth:c.lineCoordinates.width));b&&(b.lineCoordinates={},f=Math.round(e.x1+C+a.margin),g=Math.round(e.x2>b.chart.width-10?b.chart.width-10:e.x2),c&&c.labelAutoFit&&!x(s)&&(f=0<b.labelAngle?Math.max(f,s):0===b.labelAngle?Math.max(f,s/2):f,g-=v/2),b.lineCoordinates.x1=f,b.lineCoordinates.x2=g,b.lineCoordinates.width=
Math.abs(g-f),b.title&&(b._titleTextBlock.maxWidth=0<b.titleMaxWidth&&b.titleMaxWidth<b.lineCoordinates.width?b.titleMaxWidth:b.lineCoordinates.width));A=Math.ceil(c?c.createLabelsAndCalculateHeight():0);p=Math.ceil(b?b.createLabelsAndCalculateHeight():0);w.push(A);B.push(p);c&&0<c._labels.length&&(h=c._labels[0],d=c._labels[c._labels.length-1],t=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+(h.textBlock.height-d.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(h.textBlock.angle)),
u=d.textBlock.width*Math.cos(Math.PI/180*Math.abs(d.textBlock.angle))+(d.textBlock.height-d.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(d.textBlock.angle)));b&&0<b._labels.length&&(h=b._labels[0],d=b._labels[b._labels.length-1],s=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+(h.textBlock.height-d.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(h.textBlock.angle)),v=d.textBlock.width*Math.cos(Math.PI/180*Math.abs(d.textBlock.angle))+(d.textBlock.height-d.textBlock.fontSize/
2)*Math.sin(Math.PI/180*Math.abs(d.textBlock.angle)));q.panEnabled?A=q.sessionVariables.axisY.height:q.sessionVariables.axisY.height=A;c&&(d=Math.round(e.y2-A-c.margin),h=Math.round(e.y2-n>c.chart.height-10?c.chart.height-10:e.y2-n),c.lineCoordinates.y1=d,c.lineCoordinates.y2=d,c.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:A},c.title&&(c._titleTextBlock.maxWidth=0<c.titleMaxWidth&&c.titleMaxWidth<c.lineCoordinates.width?c.titleMaxWidth:c.lineCoordinates.width));b&&(d=Math.round(e.y1+b.margin),
h=e.y1+b.margin+p,b.lineCoordinates.y1=h,b.lineCoordinates.y2=h,b.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:p},b.title&&(b._titleTextBlock.maxWidth=0<b.titleMaxWidth&&b.titleMaxWidth<b.lineCoordinates.width?b.titleMaxWidth:b.lineCoordinates.width));f=Math.round(e.x1+a.margin);d=Math.round(b?b.lineCoordinates.y2:10>e.y1?10:e.y1);g=Math.round(e.x1+C+a.margin);h=Math.round(c?c.lineCoordinates.y1:e.y2-n>a.chart.height-10?a.chart.height-10:e.y2-n);c&&c.labelAutoFit&&(g=0>c.labelAngle?Math.max(g,
t):0===c.labelAngle?Math.max(g,t/2):g,f=0>c.labelAngle||0===c.labelAngle?g-C:f);b&&b.labelAutoFit&&(g=b.lineCoordinates.x1,f=g-C);a.lineCoordinates={x1:g,y1:d,x2:g,y2:h,height:Math.abs(h-d)};a.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:h-d};a.title&&(a._titleTextBlock.maxWidth=0<a.titleMaxWidth&&a.titleMaxWidth<a.lineCoordinates.height?a.titleMaxWidth:a.lineCoordinates.height);a.calculateValueToPixelConversionParameters();c&&c.calculateValueToPixelConversionParameters();b&&b.calculateValueToPixelConversionParameters();
if(a||c||b){if(!x(G))for(l=0;l<G.length;l++)for(j=l+1;j<G.length;j++)G[l]==G[j]&&(D=!0);if(!x(F))for(l=0;l<F.length;l++)for(j=l+1;j<F.length;j++)F[l]==F[j]&&(E=!0);if(!x(J))for(l=0;l<J.length;l++)for(j=l+1;j<J.length;j++)J[l]==J[j]&&(I=!0)}if(D&&E&&I)break}c&&c.renderLabelsTicksAndTitle();b&&b.renderLabelsTicksAndTitle();a.renderLabelsTicksAndTitle()}q.preparePlotArea();e=a.chart.plotArea;k.save();k.rect(e.x1,e.y1,Math.abs(e.x2-e.x1),Math.abs(e.y2-e.y1));k.clip();a.renderStripLinesOfThicknessType("value");
c&&c.renderStripLinesOfThicknessType("value");b&&b.renderStripLinesOfThicknessType("value");a.renderInterlacedColors();c&&c.renderInterlacedColors();b&&b.renderInterlacedColors();k.restore();a.renderGrid();c&&c.renderGrid();b&&b.renderGrid();a.renderAxisLine();c&&c.renderAxisLine();b&&b.renderAxisLine();a.renderStripLinesOfThicknessType("pixel");c&&c.renderStripLinesOfThicknessType("pixel");b&&b.renderStripLinesOfThicknessType("pixel")};F.prototype.renderLabelsTicksAndTitle=function(){var a=!1,c=
0,b=1,d=0;0!==this.labelAngle&&360!==this.labelAngle&&(b=1.2);if("undefined"===typeof this._options.interval){if("bottom"===this._position||"top"===this._position){for(var e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.viewportMinimum||(f=f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+f.textBlock.height*Math.sin(Math.PI/180*this.labelAngle),c+=f);c>this.lineCoordinates.width*b&&this.labelAutoFit&&(a=!0)}if("left"===this._position||"right"===this._position){for(e=0;e<this._labels.length;e++)f=
this._labels[e],f.position<this.viewportMinimum||(f=f.textBlock.height*Math.cos(Math.PI/180*this.labelAngle)+f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),c+=f);c>this.lineCoordinates.height*b&&this.labelAutoFit&&(a=!0)}}if("bottom"===this._position){for(var f,e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.viewportMinimum||f.position>this.viewportMaximum||(c=this.getPixelCoordinatesOnAxis(f.position),this.tickThickness&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=
this.tickColor,b=1===this.ctx.lineWidth%2?(c.x<<0)+0.5:c.x<<0,this.ctx.beginPath(),this.ctx.moveTo(b,c.y<<0),this.ctx.lineTo(b,c.y+this.tickLength<<0),this.ctx.stroke()),a&&0!==d++%2&&this.labelAutoFit||(0===f.textBlock.angle?(c.x-=f.textBlock.width/2,c.y+=this.tickLength+f.textBlock.fontSize/2):(c.x-=0>this.labelAngle?f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,c.y+=this.tickLength+Math.abs(0>this.labelAngle?f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)-5:5)),f.textBlock.x=
c.x,f.textBlock.y=c.y,f.textBlock.render(!0)));this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.boundingRect.y2-this._titleTextBlock.height-3,this._titleTextBlock.render(!0))}else if("top"===this._position){for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.viewportMinimum||f.position>this.viewportMaximum||(c=this.getPixelCoordinatesOnAxis(f.position),
this.tickThickness&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,b=1===this.ctx.lineWidth%2?(c.x<<0)+0.5:c.x<<0,this.ctx.beginPath(),this.ctx.moveTo(b,c.y<<0),this.ctx.lineTo(b,c.y-this.tickLength<<0),this.ctx.stroke()),a&&0!==d++%2&&this.labelAutoFit||(0===f.textBlock.angle?(c.x-=f.textBlock.width/2,c.y-=this.tickLength+f.textBlock.height):(c.x+=(f.textBlock.height-this.tickLength-this.labelFontSize/2)*Math.sin(Math.PI/180*this.labelAngle)-(0<this.labelAngle?f.textBlock.width*
Math.cos(Math.PI/180*this.labelAngle):0),c.y-=this.tickLength+(f.textBlock.height*Math.cos(Math.PI/180*this.labelAngle)+(0<this.labelAngle?f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0))),f.textBlock.x=c.x,f.textBlock.y=c.y,f.textBlock.render(!0)));this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.boundingRect.y1+1,this._titleTextBlock.render(!0))}else if("left"===
this._position){for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.viewportMinimum||f.position>this.viewportMaximum||(c=this.getPixelCoordinatesOnAxis(f.position),this.tickThickness&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,b=1===this.ctx.lineWidth%2?(c.y<<0)+0.5:c.y<<0,this.ctx.beginPath(),this.ctx.moveTo(c.x<<0,b),this.ctx.lineTo(c.x-this.tickLength<<0,b),this.ctx.stroke()),a&&0!==d++%2&&this.labelAutoFit||(0===this.labelAngle?(f.textBlock.y=c.y,
f.textBlock.x=c.x-f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5):(f.textBlock.y=c.y-f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),f.textBlock.x=0<this.labelAngle?c.x-f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:c.x-f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(f.textBlock.height-f.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength),f.textBlock.render(!0)));this.title&&(this._titleTextBlock.measureText(),
this._titleTextBlock.x=this.boundingRect.x1+1,this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}else if("right"===this._position){for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.viewportMinimum||f.position>this.viewportMaximum||(c=this.getPixelCoordinatesOnAxis(f.position),this.tickThickness&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,b=1===this.ctx.lineWidth%
2?(c.y<<0)+0.5:c.y<<0,this.ctx.beginPath(),this.ctx.moveTo(c.x<<0,b),this.ctx.lineTo(c.x+this.tickLength<<0,b),this.ctx.stroke()),a&&0!==d++%2&&this.labelAutoFit||(0===this.labelAngle?(f.textBlock.y=c.y,f.textBlock.x=c.x+this.tickLength+5):(f.textBlock.y=0>this.labelAngle?c.y:c.y-(f.textBlock.height-f.textBlock.fontSize/2-5)*Math.cos(Math.PI/180*this.labelAngle),f.textBlock.x=0<this.labelAngle?c.x+(f.textBlock.height-f.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:
c.x+this.tickLength+5),f.textBlock.render(!0)));this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.boundingRect.x2-1,this._titleTextBlock.y=this.lineCoordinates.height/2-this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}};F.prototype.renderInterlacedColors=function(){var a=this.chart.plotArea.ctx,c,b,d=this.chart.plotArea,e=0;c=!0;if(("bottom"===this._position||"top"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,
e=0;e<this._labels.length;e++)this._labels[e].stripLine||(c?(c=this.getPixelCoordinatesOnAxis(this._labels[e].position),b=e+1>=this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(c.x,d.y1,Math.abs(b.x-c.x),Math.abs(d.y1-d.y2)),c=!1):c=!0);else if(("left"===this._position||"right"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,e=0;e<this._labels.length;e++)this._labels[e].stripLine||
(c?(b=this.getPixelCoordinatesOnAxis(this._labels[e].position),c=e+1>=this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(d.x1,c.y,Math.abs(d.x1-d.x2),Math.abs(c.y-b.y)),c=!1):c=!0);a.beginPath()};F.prototype.renderStripLinesOfThicknessType=function(a){if(this.stripLines&&0<this.stripLines.length&&a){for(var c=this,b,d=0,d=0;d<this.stripLines.length;d++){var e=this.stripLines[d];e._thicknessType===a&&("pixel"===
a&&(e.value<this.viewportMinimum||e.value>this.viewportMaximum)||(e.showOnTop?this.chart.addEventListener("dataAnimationIterationEnd",function(){this.ctx.save();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();e.render();this.ctx.restore()},e):e.render()))}for(d=0;d<this._stripLineLabels.length;d++)if(e=this.stripLines[d],b=this._stripLineLabels[d],!(b.position<this.viewportMinimum||b.position>this.viewportMaximum))if(a=
this.getPixelCoordinatesOnAxis(b.position),"outside"===b.stripLine.labelPlacement){e&&"pixel"===e._thicknessType&&(this.ctx.lineWidth=e.thickness,this.ctx.strokeStyle=e.color);if("bottom"===this._position){var f=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0;this.ctx.beginPath();this.ctx.moveTo(f,a.y<<0);this.ctx.lineTo(f,a.y+this.tickLength<<0);this.ctx.stroke();0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y+=this.tickLength+b.textBlock.fontSize/2):(a.x-=0>this.labelAngle?b.textBlock.width*Math.cos(Math.PI/
180*this.labelAngle):0,a.y+=this.tickLength+Math.abs(0>this.labelAngle?b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)+5:5))}else"top"===this._position?(f=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,this.ctx.beginPath(),this.ctx.moveTo(f,a.y<<0),this.ctx.lineTo(f,a.y-this.tickLength<<0),this.ctx.stroke(),0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y-=this.tickLength+b.textBlock.height):(a.x+=(b.textBlock.height-this.tickLength-this.labelFontSize/2)*Math.sin(Math.PI/180*this.labelAngle)-
(0<this.labelAngle?b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),a.y-=this.tickLength+(b.textBlock.height*Math.cos(Math.PI/180*this.labelAngle)+(0<this.labelAngle?b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)))):"left"===this._position?(f=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,f),this.ctx.lineTo(a.x-this.tickLength<<0,f),this.ctx.stroke(),0===this.labelAngle?a.x=a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-
this.tickLength-5:(a.y-=b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),a.x=0<this.labelAngle?a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength)):"right"===this._position&&(f=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,f),this.ctx.lineTo(a.x+this.tickLength<<0,
f),this.ctx.stroke(),0===this.labelAngle?a.x=a.x+this.tickLength+5:(a.y=0>this.labelAngle?a.y:a.y-(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.cos(Math.PI/180*this.labelAngle),a.x=0<this.labelAngle?a.x+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:a.x+this.tickLength+5));b.textBlock.x=a.x;b.textBlock.y=a.y;e.showOnTop?this.chart.addEventListener("dataAnimationIterationEnd",b.textBlock.render,b.textBlock):b.textBlock.render(!0)}else b.textBlock.angle=
-90,"bottom"===this._position?(b.textBlock.maxWidth=this._options.stripLines[d].labelMaxWidth?this._options.stripLines[d].labelMaxWidth:this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?x(e.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/2:a.x-=b.textBlock.height/2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,x(e.startValue)?a.x+=b.textBlock.height-b.textBlock.fontSize/2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?
"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y1+b.textBlock.width+3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-b.textBlock.width-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y1+3):"top"===this._position?(b.textBlock.maxWidth=this._options.stripLines[d].labelMaxWidth?this._options.stripLines[d].labelMaxWidth:
this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?x(e.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/2:a.x-=b.textBlock.height/2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,x(e.startValue)?a.x+=b.textBlock.height-b.textBlock.fontSize/2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+b.textBlock.width+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+
this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y2-3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y2-b.textBlock.width-3):"left"===this._position?(b.textBlock.maxWidth=this._options.stripLines[d].labelMaxWidth?this._options.stripLines[d].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-b.textBlock.height>this.chart.plotArea.y1?
x(e.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize+3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:x(e.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x2-b.textBlock.width-
3):"right"===this._position&&(b.textBlock.maxWidth=this._options.stripLines[d].labelMaxWidth?this._options.stripLines[d].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-+b.textBlock.height>this.chart.plotArea.y1?x(e.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2-3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:x(e.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/
2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x2-b.textBlock.width-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x1+3),b.textBlock.x=a.x,b.textBlock.y=a.y,e.showOnTop?(this.ctx.save(),this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height),this.ctx.clip(),this.chart.addEventListener("dataAnimationIterationEnd",
function(){b.textBlock.render(!0);c.ctx.restore()},b.textBlock)):(this.ctx.save(),this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height),this.ctx.clip(),b.textBlock.render(!0),this.ctx.restore())}};F.prototype.renderGrid=function(){if(this.gridThickness&&0<this.gridThickness){var a=this.chart.ctx;a.save();var c,b=this.chart.plotArea;a.lineWidth=this.gridThickness;a.strokeStyle=this.gridColor;a.setLineDash&&a.setLineDash(D(this.gridDashType,
this.gridThickness));if("bottom"===this._position||"top"===this._position)for(d=0;d<this._labels.length&&!this._labels[d].stripLine;d++)this._labels[d].position<this.viewportMinimum||this._labels[d].position>this.viewportMaximum||(a.beginPath(),c=this.getPixelCoordinatesOnAxis(this._labels[d].position),c=1===a.lineWidth%2?(c.x<<0)+0.5:c.x<<0,a.moveTo(c,b.y1<<0),a.lineTo(c,b.y2<<0),a.stroke());else if("left"===this._position||"right"===this._position)for(var d=0;d<this._labels.length&&!this._labels[d].stripLine;d++)this._labels[d].position<
this.viewportMinimum||this._labels[d].position>this.viewportMaximum||(a.beginPath(),c=this.getPixelCoordinatesOnAxis(this._labels[d].position),c=1===a.lineWidth%2?(c.y<<0)+0.5:c.y<<0,a.moveTo(b.x1<<0,c),a.lineTo(b.x2<<0,c),a.stroke());a.restore()}};F.prototype.renderAxisLine=function(){var a=this.chart.ctx;a.save();if("bottom"===this._position||"top"===this._position){if(this.lineThickness){a.lineWidth=this.lineThickness;a.strokeStyle=this.lineColor?this.lineColor:"black";a.setLineDash&&a.setLineDash(D(this.lineDashType,
this.lineThickness));var c=1===this.lineThickness%2?(this.lineCoordinates.y1<<0)+0.5:this.lineCoordinates.y1<<0;a.beginPath();a.moveTo(this.lineCoordinates.x1,c);a.lineTo(this.lineCoordinates.x2,c);a.stroke()}}else"left"!==this._position&&"right"!==this._position||!this.lineThickness||(a.lineWidth=this.lineThickness,a.strokeStyle=this.lineColor,a.setLineDash&&a.setLineDash(D(this.lineDashType,this.lineThickness)),c=1===this.lineThickness%2?(this.lineCoordinates.x1<<0)+0.5:this.lineCoordinates.x1<<
0,a.beginPath(),a.moveTo(c,this.lineCoordinates.y1),a.lineTo(c,this.lineCoordinates.y2),a.stroke());a.restore()};F.prototype.getPixelCoordinatesOnAxis=function(a){var c={};if("bottom"===this._position||"top"===this._position){var b=this.conversionParameters.pixelPerUnit;c.x=this.conversionParameters.reference+b*(a-this.viewportMinimum);c.y=this.lineCoordinates.y1}if("left"===this._position||"right"===this._position)b=-this.conversionParameters.pixelPerUnit,c.y=this.conversionParameters.reference-
b*(a-this.viewportMinimum),c.x=this.lineCoordinates.x2;return c};F.prototype.convertPixelToValue=function(a){if(!a)return null;var c=0;return c=this.conversionParameters.minimum+(("left"===this._position||"right"===this._position?a.y:a.x)-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit};F.prototype.setViewPortRange=function(a,c){this.sessionVariables.newViewportMinimum=this.viewportMinimum=Math.min(a,c);this.sessionVariables.newViewportMaximum=this.viewportMaximum=Math.max(a,
c)};F.prototype.getXValueAt=function(a){if(!a)return null;var c=null;"left"===this._position?c=(this.chart.axisX.viewportMaximum-this.chart.axisX.viewportMinimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-a.y)+this.chart.axisX.viewportMinimum:"bottom"===this._position&&(c=(this.chart.axisX.viewportMaximum-this.chart.axisX.viewportMinimum)/this.chart.axisX.lineCoordinates.width*(a.x-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.viewportMinimum);return c};
F.prototype.calculateValueToPixelConversionParameters=function(a){this.reversed=!1;a={pixelPerUnit:null,minimum:null,reference:null};var c=this.lineCoordinates.width,b=this.lineCoordinates.height;a.minimum=this.viewportMinimum;if("bottom"===this._position||"top"===this._position)a.pixelPerUnit=(this.reversed?-1:1)*c/Math.abs(this.viewportMaximum-this.viewportMinimum),a.reference=this.reversed?this.lineCoordinates.x2:this.lineCoordinates.x1;if("left"===this._position||"right"===this._position)a.pixelPerUnit=
(this.reversed?1:-1)*b/Math.abs(this.viewportMaximum-this.viewportMinimum),a.reference=this.reversed?this.lineCoordinates.y1:this.lineCoordinates.y2;this.conversionParameters=a};F.prototype.calculateAxisParameters=function(){var a=this.chart.layoutManager.getFreeSpace(),c=!1;"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?500>this.maxWidth?8:Math.max(6,Math.floor(this.maxWidth/
62)):Math.max(Math.floor(this.maxWidth/40),2),b,d,e,f;f=0;if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;"axisX"===this.type?(b=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,d=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,0===d-b&&(f="undefined"===typeof this._options.interval?0.4:this._options.interval,
d+=f,b-=f),Infinity!==this.dataInfo.minDiff?e=this.dataInfo.minDiff:1<d-b?e=0.5*Math.abs(d-b):(e=1,"dateTime"===this.chart.plotInfo.axisXValueType&&(c=!0))):"axisY"===this.type&&(b=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,d=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,isFinite(b)||isFinite(d)?isFinite(b)?isFinite(d)||(d=b):b=d:(d="undefined"===typeof this._options.interval?-Infinity:this._options.interval,b=0),0===b&&0===d?(d+=9,b=0):
0===d-b?(f=Math.min(Math.abs(0.01*Math.abs(d)),5),d+=f,b-=f):b>d?(f=Math.min(Math.abs(0.01*Math.abs(d-b)),5),0<=d?b=d-f:d=b+f):(f=Math.min(Math.abs(0.01*Math.abs(d-b)),0.05),0!==d&&(d+=f),0!==b&&(b-=f)),e=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<d-b?0.5*Math.abs(d-b):1,this.includeZero&&(null===this.viewportMinimum||isNaN(this.viewportMinimum))&&0<b&&(b=0),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&0>d&&(d=0));f=(isNaN(this.viewportMaximum)||null===
this.viewportMaximum?d:this.viewportMaximum)-(isNaN(this.viewportMinimum)||null===this.viewportMinimum?b:this.viewportMinimum);if("axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType){this.intervalType||(f/1<=a?(this.interval=1,this.intervalType="millisecond"):f/2<=a?(this.interval=2,this.intervalType="millisecond"):f/5<=a?(this.interval=5,this.intervalType="millisecond"):f/10<=a?(this.interval=10,this.intervalType="millisecond"):f/20<=a?(this.interval=20,this.intervalType="millisecond"):
f/50<=a?(this.interval=50,this.intervalType="millisecond"):f/100<=a?(this.interval=100,this.intervalType="millisecond"):f/200<=a?(this.interval=200,this.intervalType="millisecond"):f/250<=a?(this.interval=250,this.intervalType="millisecond"):f/300<=a?(this.interval=300,this.intervalType="millisecond"):f/400<=a?(this.interval=400,this.intervalType="millisecond"):f/500<=a?(this.interval=500,this.intervalType="millisecond"):f/(1*E.secondDuration)<=a?(this.interval=1,this.intervalType="second"):f/(2*
E.secondDuration)<=a?(this.interval=2,this.intervalType="second"):f/(5*E.secondDuration)<=a?(this.interval=5,this.intervalType="second"):f/(10*E.secondDuration)<=a?(this.interval=10,this.intervalType="second"):f/(15*E.secondDuration)<=a?(this.interval=15,this.intervalType="second"):f/(20*E.secondDuration)<=a?(this.interval=20,this.intervalType="second"):f/(30*E.secondDuration)<=a?(this.interval=30,this.intervalType="second"):f/(1*E.minuteDuration)<=a?(this.interval=1,this.intervalType="minute"):f/
(2*E.minuteDuration)<=a?(this.interval=2,this.intervalType="minute"):f/(5*E.minuteDuration)<=a?(this.interval=5,this.intervalType="minute"):f/(10*E.minuteDuration)<=a?(this.interval=10,this.intervalType="minute"):f/(15*E.minuteDuration)<=a?(this.interval=15,this.intervalType="minute"):f/(20*E.minuteDuration)<=a?(this.interval=20,this.intervalType="minute"):f/(30*E.minuteDuration)<=a?(this.interval=30,this.intervalType="minute"):f/(1*E.hourDuration)<=a?(this.interval=1,this.intervalType="hour"):f/
(2*E.hourDuration)<=a?(this.interval=2,this.intervalType="hour"):f/(3*E.hourDuration)<=a?(this.interval=3,this.intervalType="hour"):f/(6*E.hourDuration)<=a?(this.interval=6,this.intervalType="hour"):f/(1*E.dayDuration)<=a?(this.interval=1,this.intervalType="day"):f/(2*E.dayDuration)<=a?(this.interval=2,this.intervalType="day"):f/(4*E.dayDuration)<=a?(this.interval=4,this.intervalType="day"):f/(1*E.weekDuration)<=a?(this.interval=1,this.intervalType="week"):f/(2*E.weekDuration)<=a?(this.interval=2,
this.intervalType="week"):f/(3*E.weekDuration)<=a?(this.interval=3,this.intervalType="week"):f/(1*E.monthDuration)<=a?(this.interval=1,this.intervalType="month"):f/(2*E.monthDuration)<=a?(this.interval=2,this.intervalType="month"):f/(3*E.monthDuration)<=a?(this.interval=3,this.intervalType="month"):f/(6*E.monthDuration)<=a?(this.interval=6,this.intervalType="month"):(this.interval=f/(1*E.yearDuration)<=a?1:f/(2*E.yearDuration)<=a?2:f/(4*E.yearDuration)<=a?4:Math.floor(F.getNiceNumber(f/(a-1),!0)/
E.yearDuration),this.intervalType="year"));if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=b-e/2;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=d+e/2;c?this.autoValueFormatString="MMM DD YYYY HH:mm":"year"===this.intervalType?this.autoValueFormatString="YYYY":"month"===this.intervalType?this.autoValueFormatString="MMM YYYY":"week"===this.intervalType?this.autoValueFormatString="MMM DD YYYY":"day"===this.intervalType?this.autoValueFormatString=
"MMM DD YYYY":"hour"===this.intervalType?this.autoValueFormatString="hh:mm TT":"minute"===this.intervalType?this.autoValueFormatString="hh:mm TT":"second"===this.intervalType?this.autoValueFormatString="hh:mm:ss TT":"millisecond"===this.intervalType&&(this.autoValueFormatString="fff'ms'");this.valueFormatString||(this.valueFormatString=this.autoValueFormatString)}else{this.intervalType="number";f=F.getNiceNumber(f,!1);this.interval=this._options&&0<this._options.interval?this._options.interval:F.getNiceNumber(f/
(a-1),!0);if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?b-e/2:Math.floor(b/this.interval)*this.interval;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum="axisX"===this.type?d+e/2:Math.ceil(d/this.interval)*this.interval;0===this.viewportMaximum&&0===this.viewportMinimum&&(0===this._options.viewportMinimum?this.viewportMaximum+=10:0===this._options.viewportMaximum&&(this.viewportMinimum-=10),this._options&&"undefined"===
typeof this._options.interval&&(this.interval=F.getNiceNumber((this.viewportMaximum-this.viewportMinimum)/(a-1),!0)))}if(null===this.minimum||null===this.maximum)if("axisX"===this.type?(b=null!==this.minimum?this.minimum:this.dataInfo.min,d=null!==this.maximum?this.maximum:this.dataInfo.max,0===d-b&&(f="undefined"===typeof this._options.interval?0.4:this._options.interval,d+=f,b-=f),e=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<d-b?0.5*Math.abs(d-b):1):"axisY"===this.type&&(b=null!==
this.minimum?this.minimum:this.dataInfo.min,d=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(b)||isFinite(d)?0===b&&0===d?(d+=9,b=0):0===d-b?(f=Math.min(Math.abs(0.01*Math.abs(d)),5),d+=f,b-=f):b>d?(f=Math.min(Math.abs(0.01*Math.abs(d-b)),5),0<=d?b=d-f:d=b+f):(f=Math.min(Math.abs(0.01*Math.abs(d-b)),0.05),0!==d&&(d+=f),0!==b&&(b-=f)):(d="undefined"===typeof this._options.interval?-Infinity:this._options.interval,b=0),e=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<d-b?0.5*
Math.abs(d-b):1,this.includeZero&&(null===this.minimum||isNaN(this.minimum))&&0<b&&(b=0),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&0>d&&(d=0)),"axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType){if(null===this.minimum||isNaN(this.minimum))this.minimum=b-e/2;if(null===this.maximum||isNaN(this.maximum))this.maximum=d+e/2}else this.intervalType="number",null===this.minimum&&(this.minimum="axisX"===this.type?b-e/2:Math.floor(b/this.interval)*this.interval,this.minimum=
Math.min(this.minimum,null===this.sessionVariables.viewportMinimum||isNaN(this.sessionVariables.viewportMinimum)?Infinity:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum="axisX"===this.type?d+e/2:Math.ceil(d/this.interval)*this.interval,this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||isNaN(this.sessionVariables.viewportMaximum)?-Infinity:this.sessionVariables.viewportMaximum)),0===this.maximum&&0===this.minimum&&(0===this._options.minimum?
this.maximum+=10:0===this._options.maximum&&(this.minimum-=10));this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum);this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum);this.intervalStartPosition="axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType?this.getLabelStartPoint(new Date(this.viewportMinimum),this.intervalType,this.interval):Math.floor((this.viewportMinimum+0.2*this.interval)/this.interval)*this.interval;if(!this.valueFormatString&&(this.valueFormatString=
"#,##0.##",f=Math.abs(this.viewportMaximum-this.viewportMinimum),1>f)){c=Math.floor(Math.abs(Math.log(f)/Math.LN10))+2;if(isNaN(c)||!isFinite(c))c=2;if(2<c)for(b=0;b<c-2;b++)this.valueFormatString+="#"}};F.getNiceNumber=function(a,c){var b=Math.floor(Math.log(a)/Math.LN10),d=a/Math.pow(10,b);return Number(((c?1.5>d?1:3>d?2:7>d?5:10:1>=d?1:2>=d?2:5>=d?5:10)*Math.pow(10,b)).toFixed(20))};F.prototype.getLabelStartPoint=function(){var a=E[this.intervalType+"Duration"]*this.interval,a=new Date(Math.floor(this.viewportMinimum/
a)*a);if("millisecond"!==this.intervalType)if("second"===this.intervalType)0<a.getMilliseconds()&&(a.setSeconds(a.getSeconds()+1),a.setMilliseconds(0));else if("minute"===this.intervalType){if(0<a.getSeconds()||0<a.getMilliseconds())a.setMinutes(a.getMinutes()+1),a.setSeconds(0),a.setMilliseconds(0)}else if("hour"===this.intervalType){if(0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setHours(a.getHours()+1),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("day"===this.intervalType){if(0<
a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("week"===this.intervalType){if(0<a.getDay()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+(7-a.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("month"===this.intervalType){if(1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||
0<a.getMilliseconds())a.setMonth(a.getMonth()+1),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else"year"===this.intervalType&&(0<a.getMonth()||1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())&&(a.setFullYear(a.getFullYear()+1),a.setMonth(0),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0));return a};T(pa,L);pa.prototype.render=function(){this.ctx.save();var a=this.parent.getPixelCoordinatesOnAxis(this.value),
c=Math.abs("pixel"===this._thicknessType?this.thickness:this.parent.conversionParameters.pixelPerUnit*this.thickness);if(0<c){var b=null===this.opacity?1:this.opacity;this.ctx.strokeStyle=this.color;this.ctx.beginPath();var d=this.ctx.globalAlpha;this.ctx.globalAlpha=b;C(this.id);var e,f,g,h;this.ctx.lineWidth=c;this.ctx.setLineDash&&this.ctx.setLineDash(D(this.lineDashType,c));if("bottom"===this.parent._position||"top"===this.parent._position)e=f=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,g=this.chart.plotArea.y1,
h=this.chart.plotArea.y2;else if("left"===this.parent._position||"right"===this.parent._position)g=h=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,e=this.chart.plotArea.x1,f=this.chart.plotArea.x2;this.ctx.moveTo(e,g);this.ctx.lineTo(f,h);this.ctx.stroke();this.ctx.globalAlpha=d}this.ctx.restore()};T(V,L);V.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div");this.container.setAttribute("class","canvasjs-chart-tooltip");this.container.style.position="absolute";
this.container.style.height="auto";this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)";this.container.style.zIndex="1000";this.container.style.display="none";var a;a='<div style=" width: auto;height: auto;min-width: 50px;';a+="line-height: auto;";a+="margin: 0px 0px 0px 0px;";a+="padding: 5px;";a+="font-family: Calibri, Arial, Georgia, serif;";a+="font-weight: normal;";a+="font-style: "+(u?"italic;":"normal;");a+="font-size: 14px;";a+="color: #000000;";a+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
a+="text-align: left;";a+="border: 2px solid gray;";a+=u?"background: rgba(255,255,255,.9);":"background: rgb(255,255,255);";a+="text-indent: 0px;";a+="white-space: nowrap;";a+="border-radius: 5px;";a+="-moz-user-select:none;";a+="-khtml-user-select: none;";a+="-webkit-user-select: none;";a+="-ms-user-select: none;";a+="user-select: none;";u||(a+="filter: alpha(opacity = 90);",a+="filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");a+='} "> Sample Tooltip</div>';
this.container.innerHTML=a;this.contentDiv=this.container.firstChild;this.container.style.borderRadius=this.contentDiv.style.borderRadius;this.chart._canvasJSContainer.appendChild(this.container)}};V.prototype.mouseMoveHandler=function(a,c){this._lastUpdated&&40>(new Date).getTime()-this._lastUpdated||(this._lastUpdated=(new Date).getTime(),this._updateToolTip(a,c))};V.prototype._updateToolTip=function(a,c){if(!this.chart.disableToolTip){if("undefined"===typeof a||"undefined"===typeof c){if(isNaN(this._prevX)||
isNaN(this._prevY))return;a=this._prevX;c=this._prevY}else this._prevX=a,this._prevY=c;var b=null,d=null,e=[],f=0;if(this.shared&&this.enabled&&"none"!==this.chart.plotInfo.axisPlacement){f="xySwapped"===this.chart.plotInfo.axisPlacement?(this.chart.axisX.viewportMaximum-this.chart.axisX.viewportMinimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-c)+this.chart.axisX.viewportMinimum:(this.chart.axisX.viewportMaximum-this.chart.axisX.viewportMinimum)/this.chart.axisX.lineCoordinates.width*
(a-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.viewportMinimum;d=[];for(b=0;b<this.chart.data.length;b++){var g=this.chart.data[b].getDataPointAtX(f,!0);g&&0<=g.index&&(g.dataSeries=this.chart.data[b],null!==g.dataPoint.y&&d.push(g))}if(0===d.length)return;d.sort(function(a,b){return a.distance-b.distance});f=d[0];for(b=0;b<d.length;b++)d[b].dataPoint.x.valueOf()===f.dataPoint.x.valueOf()&&e.push(d[b]);d=null}else{if(g=this.chart.getDataPointAtXY(a,c,!0))this.currentDataPointIndex=g.dataPointIndex,
this.currentSeriesIndex=g.dataSeries.index;else if(u)if(g=Ea(a,c,this.chart._eventManager.ghostCtx),0<g&&"undefined"!==typeof this.chart._eventManager.objectMap[g]){g=this.chart._eventManager.objectMap[g];if("legendItem"===g.objectType)return;this.currentSeriesIndex=g.dataSeriesIndex;this.currentDataPointIndex=0<=g.dataPointIndex?g.dataPointIndex:-1}else this.currentDataPointIndex=-1;else this.currentDataPointIndex=-1;if(0<=this.currentSeriesIndex){d=this.chart.data[this.currentSeriesIndex];g={};
if(0<=this.currentDataPointIndex)b=d.dataPoints[this.currentDataPointIndex],g.dataSeries=d,g.dataPoint=b,g.index=this.currentDataPointIndex,g.distance=Math.abs(b.x-f);else{if(!this.enabled||"line"!==d.type&&"stepLine"!==d.type&&"spline"!==d.type&&"area"!==d.type&&"stepArea"!==d.type&&"splineArea"!==d.type&&"stackedArea"!==d.type&&"stackedArea100"!==d.type&&"rangeArea"!==d.type&&"rangeSplineArea"!==d.type&&"candlestick"!==d.type&&"ohlc"!==d.type)return;f=d.axisX.conversionParameters.minimum+(a-d.axisX.conversionParameters.reference)/
d.axisX.conversionParameters.pixelPerUnit;g=d.getDataPointAtX(f,!0);g.dataSeries=d;this.currentDataPointIndex=g.index;b=g.dataPoint}if(!x(g.dataPoint.y))if(g.dataSeries.axisY)if(0<g.dataPoint.y.length){for(b=f=0;b<g.dataPoint.y.length;b++)g.dataPoint.y[b]<g.dataSeries.axisY.viewportMinimum?f--:g.dataPoint.y[b]>g.dataSeries.axisY.viewportMaximum&&f++;f<g.dataPoint.y.length&&f>-g.dataPoint.y.length&&e.push(g)}else"column"===d.type||"bar"===d.type?0>g.dataPoint.y?0>g.dataSeries.axisY.viewportMinimum&&
g.dataSeries.axisY.viewportMaximum>=g.dataPoint.y&&e.push(g):g.dataSeries.axisY.viewportMinimum<=g.dataPoint.y&&0<=g.dataSeries.axisY.viewportMaximum&&e.push(g):"bubble"===d.type?(f=this.chart._eventManager.objectMap[d.dataPointIds[g.index]].size/2,g.dataPoint.y>=g.dataSeries.axisY.viewportMinimum-f&&g.dataPoint.y<=g.dataSeries.axisY.viewportMaximum+f&&e.push(g)):(0<=g.dataSeries.type.indexOf("100")||"stackedColumn"===d.type||"stackedBar"===d.type||g.dataPoint.y>=g.dataSeries.axisY.viewportMinimum&&
g.dataPoint.y<=g.dataSeries.axisY.viewportMaximum)&&e.push(g);else e.push(g)}}if(0<e.length&&(this.highlightObjects(e),this.enabled))if(f="",f=this.getToolTipInnerHTML({entries:e}),null!==f){this.contentDiv.innerHTML=f;this.contentDiv.innerHTML=f;f=!1;"none"===this.container.style.display&&(f=!0,this.container.style.display="block");try{this.contentDiv.style.background=this.backgroundColor?this.backgroundColor:u?"rgba(255,255,255,.9)":"rgb(255,255,255)",this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=
this.contentDiv.style.borderColor=this.borderColor?this.borderColor:e[0].dataPoint.color?e[0].dataPoint.color:e[0].dataSeries.color?e[0].dataSeries.color:e[0].dataSeries._colorSet[e[0].index%e[0].dataSeries._colorSet.length],this.contentDiv.style.borderWidth=this.borderThickness||0===this.borderThickness?this.borderThickness+"px":"2px",this.contentDiv.style.borderRadius=this.cornerRadius||0===this.cornerRadius?this.cornerRadius+"px":"5px",this.container.style.borderRadius=this.contentDiv.style.borderRadius,
this.contentDiv.style.fontSize=this.fontSize||0===this.fontSize?this.fontSize+"px":"14px",this.contentDiv.style.color=this.fontColor?this.fontColor:"#000000",this.contentDiv.style.fontFamily=this.fontFamily?this.fontFamily:"Calibri, Arial, Georgia, serif;",this.contentDiv.style.fontWeight=this.fontWeight?this.fontWeight:"normal",this.contentDiv.style.fontStyle=this.fontStyle?this.fontStyle:u?"italic":"normal"}catch(h){}"pie"===e[0].dataSeries.type||"doughnut"===e[0].dataSeries.type||"funnel"===e[0].dataSeries.type||
"bar"===e[0].dataSeries.type||"rangeBar"===e[0].dataSeries.type||"stackedBar"===e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?g=a-10-this.container.clientWidth:(g=e[0].dataSeries.axisX.conversionParameters.reference+e[0].dataSeries.axisX.conversionParameters.pixelPerUnit*(e[0].dataPoint.x-e[0].dataSeries.axisX.conversionParameters.minimum)-this.container.clientWidth<<0,g-=10);0>g&&(g+=this.container.clientWidth+20);g+this.container.clientWidth>Math.max(this.chart._container.clientWidth,
this.chart.width)&&(g=Math.max(0,Math.max(this.chart._container.clientWidth,this.chart.width)-this.container.clientWidth));e=1!==e.length||this.shared||"line"!==e[0].dataSeries.type&&"stepLine"!==e[0].dataSeries.type&&"spline"!==e[0].dataSeries.type&&"area"!==e[0].dataSeries.type&&"stepArea"!==e[0].dataSeries.type&&"splineArea"!==e[0].dataSeries.type&&"stackedArea"!==e[0].dataSeries.type&&"stackedArea100"!==e[0].dataSeries.type?"bar"===e[0].dataSeries.type||"rangeBar"===e[0].dataSeries.type||"stackedBar"===
e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?e[0].dataSeries.axisX.conversionParameters.reference+e[0].dataSeries.axisX.conversionParameters.pixelPerUnit*(e[0].dataPoint.x-e[0].dataSeries.axisX.viewportMinimum)+0.5<<0:c:e[0].dataSeries.axisY.conversionParameters.reference+e[0].dataSeries.axisY.conversionParameters.pixelPerUnit*(e[0].dataPoint.y-e[0].dataSeries.axisY.viewportMinimum)+0.5<<0;e=-e+10;0<e+this.container.clientHeight+5&&(e-=e+this.container.clientHeight+5-0);this.container.style.left=
g+"px";this.container.style.bottom=e+"px";!this.animationEnabled||f?this.disableAnimation():this.enableAnimation()}else this.hide(!1)}};V.prototype.highlightObjects=function(a){var c=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas();c.clearRect(0,0,this.chart.width,this.chart.height);c.save();var b=this.chart.plotArea,d=0;c.rect(b.x1,b.y1,b.x2-b.x1,b.y2-b.y1);c.clip();for(b=0;b<a.length;b++){var e=a[b];if((e=this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]])&&e.objectType&&
"dataPoint"===e.objectType){var d=this.chart.data[e.dataSeriesIndex],f=d.dataPoints[e.dataPointIndex],g=e.dataPointIndex;!1===f.highlightEnabled||!0!==d.highlightEnabled&&!0!==f.highlightEnabled||("line"===d.type||"stepLine"===d.type||"spline"===d.type||"scatter"===d.type||"area"===d.type||"stepArea"===d.type||"splineArea"===d.type||"stackedArea"===d.type||"stackedArea100"===d.type||"rangeArea"===d.type||"rangeSplineArea"===d.type?(f=d.getMarkerProperties(g,e.x1,e.y1,this.chart.overlaidCanvasCtx),
f.size=Math.max(1.5*f.size<<0,10),f.borderColor=f.borderColor||"#FFFFFF",f.borderThickness=f.borderThickness||Math.ceil(0.1*f.size),P.drawMarkers([f]),"undefined"!==typeof e.y2&&(f=d.getMarkerProperties(g,e.x1,e.y2,this.chart.overlaidCanvasCtx),f.size=Math.max(1.5*f.size<<0,10),f.borderColor=f.borderColor||"#FFFFFF",f.borderThickness=f.borderThickness||Math.ceil(0.1*f.size),P.drawMarkers([f]))):"bubble"===d.type?(f=d.getMarkerProperties(g,e.x1,e.y1,this.chart.overlaidCanvasCtx),f.size=e.size,f.color=
"white",f.borderColor="white",c.globalAlpha=0.3,P.drawMarkers([f]),c.globalAlpha=1):"column"===d.type||"stackedColumn"===d.type||"stackedColumn100"===d.type||"bar"===d.type||"rangeBar"===d.type||"stackedBar"===d.type||"stackedBar100"===d.type||"rangeColumn"===d.type?M(c,e.x1,e.y1,e.x2,e.y2,"white",0,null,!1,!1,!1,!1,0.3):"pie"===d.type||"doughnut"===d.type?ya(c,e.center,e.radius,"white",d.type,e.startAngle,e.endAngle,0.3,e.percentInnerRadius):"candlestick"===d.type?(c.globalAlpha=1,c.strokeStyle=
e.color,c.lineWidth=2*e.borderThickness,d=0===c.lineWidth%2?0:0.5,c.beginPath(),c.moveTo(e.x3-d,e.y2),c.lineTo(e.x3-d,Math.min(e.y1,e.y4)),c.stroke(),c.beginPath(),c.moveTo(e.x3-d,Math.max(e.y1,e.y4)),c.lineTo(e.x3-d,e.y3),c.stroke(),M(c,e.x1,Math.min(e.y1,e.y4),e.x2,Math.max(e.y1,e.y4),"transparent",2*e.borderThickness,e.color,!1,!1,!1,!1),c.globalAlpha=1):"ohlc"===d.type&&(c.globalAlpha=1,c.strokeStyle=e.color,c.lineWidth=2*e.borderThickness,d=0===c.lineWidth%2?0:0.5,c.beginPath(),c.moveTo(e.x3-
d,e.y2),c.lineTo(e.x3-d,e.y3),c.stroke(),c.beginPath(),c.moveTo(e.x3,e.y1),c.lineTo(e.x1,e.y1),c.stroke(),c.beginPath(),c.moveTo(e.x3,e.y4),c.lineTo(e.x2,e.y4),c.stroke(),c.globalAlpha=1))}}c.restore();c.globalAlpha=1;c.beginPath()};V.prototype.getToolTipInnerHTML=function(a){a=a.entries;for(var c=null,b=null,d=null,e=0,f="",g=!0,h=0;h<a.length;h++)if(a[h].dataSeries.toolTipContent||a[h].dataPoint.toolTipContent){g=!1;break}if(g&&(this.content&&"function"===typeof this.content||this.contentFormatter))a=
{chart:this.chart._publicChartReference,toolTip:this._options,entries:a},c=this.contentFormatter?this.contentFormatter(a):this.content(a);else if(this.shared&&"none"!==this.chart.plotInfo.axisPlacement){for(var q="",h=0;h<a.length;h++)if(b=a[h].dataSeries,d=a[h].dataPoint,e=a[h].index,f="",0===h&&(g&&!this.content)&&(q+="undefined"!==typeof this.chart.axisX.labels[d.x]?this.chart.axisX.labels[d.x]:"{x}",q+="</br>",q=this.chart.replaceKeywordsWithValue(q,d,b,e)),null!==d.toolTipContent&&("undefined"!==
typeof d.toolTipContent||null!==b._options.toolTipContent)){if("line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"column"===b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type)f+=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?
this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}";else if("bubble"===b.type)f+=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";else if("rangeColumn"===b.type||"rangeBar"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type)f+=d.toolTipContent?d.toolTipContent:
b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}";else if("candlestick"===b.type||"ohlc"===b.type)f+=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
null===c&&(c="");!0===this.reversed?(c=this.chart.replaceKeywordsWithValue(f,d,b,e)+c,h<a.length-1&&(c="</br>"+c)):(c+=this.chart.replaceKeywordsWithValue(f,d,b,e),h<a.length-1&&(c+="</br>"))}null!==c&&(c=q+c)}else{b=a[0].dataSeries;d=a[0].dataPoint;e=a[0].index;if(null===d.toolTipContent||"undefined"===typeof d.toolTipContent&&null===b._options.toolTipContent)return null;if("line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"column"===
b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type)f=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}";else if("bubble"===b.type)f=d.toolTipContent?d.toolTipContent:
b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";else if("pie"===b.type||"doughnut"===b.type||"funnel"===b.type)f=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.name?"{name}:</span>&nbsp;&nbsp;":
d.label?"{label}:</span>&nbsp;&nbsp;":"</span>")+"{y}";else if("rangeColumn"===b.type||"rangeBar"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type)f=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}";else if("candlestick"===b.type||"ohlc"===b.type)f=d.toolTipContent?d.toolTipContent:
b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.label?"{label}":"{x}")+"</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";null===c&&(c="");c+=this.chart.replaceKeywordsWithValue(f,d,b,e)}return c};V.prototype.enableAnimation=function(){this.container.style.WebkitTransition||(this.container.style.WebkitTransition=
"left .2s ease-out, bottom .2s ease-out",this.container.style.MozTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MsTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.transition="left .2s ease-out, bottom .2s ease-out")};V.prototype.disableAnimation=function(){this.container.style.WebkitTransition&&(this.container.style.WebkitTransition="",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")};V.prototype.hide=
function(a){this.enabled&&(this.container.style.display="none",this.currentSeriesIndex=-1,this._prevY=this._prevX=NaN,("undefined"===typeof a||a)&&this.chart.resetOverlayedCanvas())};v.prototype.getPercentAndTotal=function(a,c){var b=null,d=null,e=null;if(0<=a.type.indexOf("stacked"))d=0,b=c.x.getTime?c.x.getTime():c.x,b in a.plotUnit.yTotals&&(d=a.plotUnit.yTotals[b],e=isNaN(c.y)?0:0===d?0:100*(c.y/d));else if("pie"===a.type||"doughnut"===a.type){for(i=d=0;i<a.dataPoints.length;i++)isNaN(a.dataPoints[i].y)||
(d+=a.dataPoints[i].y);e=isNaN(c.y)?0:100*(c.y/d)}return{percent:e,total:d}};v.prototype.replaceKeywordsWithValue=function(a,c,b,d,e){var f=this;e="undefined"===typeof e?0:e;if((0<=b.type.indexOf("stacked")||"pie"===b.type||"doughnut"===b.type)&&(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))){var g="#percent",h="#total",q=this.getPercentAndTotal(b,c),h=isNaN(q.total)?h:q.total,g=isNaN(q.percent)?g:q.percent;do{q="";if(b.percentFormatString)q=b.percentFormatString;else{var q="#,##0.",k=Math.max(Math.ceil(Math.log(1/
Math.abs(g))/Math.LN10),2);if(isNaN(k)||!isFinite(k))k=2;for(var n=0;n<k;n++)q+="#"}a=a.replace("#percent",ba(g,q,f._cultureInfo));a=a.replace("#total",ba(h,b.yValueFormatString?b.yValueFormatString:"#,##0.########"))}while(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))}return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g,function(a){if('"'===a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1])return a.slice(1,a.length-1);a=ea(a.slice(1,a.length-1));a=a.replace("#index",e);var g=null;try{var h=a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
h&&0<h.length&&(g=ea(h[2]),a=ea(h[1]))}catch(k){}h=null;if("color"===a)return c.color?c.color:b.color?b.color:b._colorSet[d%b._colorSet.length];if(c.hasOwnProperty(a))h=c;else if(b.hasOwnProperty(a))h=b;else return"";h=h[a];null!==g&&(h=h[g]);return"x"===a?"dateTime"===f.plotInfo.axisXValueType||"dateTime"===b.xValueType||c.x&&c.x.getTime?wa(h,c.xValueFormatString?c.xValueFormatString:b.xValueFormatString?b.xValueFormatString:f.axisX&&f.axisX.autoValueFormatString?f.axisX.autoValueFormatString:"DD MMM YY",
f._cultureInfo):ba(h,c.xValueFormatString?c.xValueFormatString:b.xValueFormatString?b.xValueFormatString:"#,##0.########",f._cultureInfo):"y"===a?ba(h,c.yValueFormatString?c.yValueFormatString:b.yValueFormatString?b.yValueFormatString:"#,##0.########",f._cultureInfo):"z"===a?ba(h,c.zValueFormatString?c.zValueFormatString:b.zValueFormatString?b.zValueFormatString:"#,##0.########",f._cultureInfo):h})};fa.prototype.reset=function(){this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=
[];this.previousDataPointEventObject=null;this.eventObjects=[];u&&(this.ghostCtx.clearRect(0,0,this.chart.width,this.chart.height),this.ghostCtx.beginPath())};fa.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId};fa.prototype.mouseEventHandler=function(a){if("mousemove"===a.type||"click"===a.type){var c=[],b=ra(a),d=null;if((d=this.chart.getObjectAtXY(b.x,b.y,!1))&&"undefined"!==typeof this.objectMap[d])if(d=this.objectMap[d],"dataPoint"===d.objectType){var e=this.chart.data[d.dataSeriesIndex],
f=e.dataPoints[d.dataPointIndex],g=d.dataPointIndex;d.eventParameter={x:b.x,y:b.y,dataPoint:f,dataSeries:e._options,dataPointIndex:g,dataSeriesIndex:e.index,chart:this.chart._publicChartReference};d.eventContext={context:f,userContext:f,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"};c.push(d);d=this.objectMap[e.id];d.eventParameter={x:b.x,y:b.y,dataPoint:f,dataSeries:e._options,dataPointIndex:g,dataSeriesIndex:e.index,chart:this.chart._publicChartReference};d.eventContext=
{context:e,userContext:e._options,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"};c.push(this.objectMap[e.id])}else"legendItem"===d.objectType&&(e=this.chart.data[d.dataSeriesIndex],f=null!==d.dataPointIndex?e.dataPoints[d.dataPointIndex]:null,d.eventParameter={x:b.x,y:b.y,dataSeries:e._options,dataPoint:f,dataPointIndex:d.dataPointIndex,dataSeriesIndex:d.dataSeriesIndex,chart:this.chart._publicChartReference},d.eventContext={context:this.chart.legend,userContext:this.chart.legend._options,
mouseover:"itemmouseover",mousemove:"itemmousemove",mouseout:"itemmouseout",click:"itemclick"},c.push(d));e=[];for(b=0;b<this.mouseoveredObjectMaps.length;b++){f=!0;for(d=0;d<c.length;d++)if(c[d].id===this.mouseoveredObjectMaps[b].id){f=!1;break}f?this.fireEvent(this.mouseoveredObjectMaps[b],"mouseout",a):e.push(this.mouseoveredObjectMaps[b])}this.mouseoveredObjectMaps=e;for(b=0;b<c.length;b++){e=!1;for(d=0;d<this.mouseoveredObjectMaps.length;d++)if(c[b].id===this.mouseoveredObjectMaps[d].id){e=!0;
break}e||(this.fireEvent(c[b],"mouseover",a),this.mouseoveredObjectMaps.push(c[b]));"click"===a.type?this.fireEvent(c[b],"click",a):"mousemove"===a.type&&this.fireEvent(c[b],"mousemove",a)}}};fa.prototype.fireEvent=function(a,c,b){if(a&&c){var d=a.eventParameter,e=a.eventContext,f=a.eventContext.userContext;f&&(e&&f[e[c]])&&f[e[c]].call(f,d);"mouseout"!==c?f.cursor&&f.cursor!==b.target.style.cursor&&(b.target.style.cursor=f.cursor):(b.target.style.cursor=this.chart._defaultCursor,delete a.eventParameter,
delete a.eventContext);"click"===c&&("dataPoint"===a.objectType&&this.chart.pieDoughnutClickHandler)&&this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex],d)}};T(ha,L);va.prototype.animate=function(a,c,b,d,e){var f=this;this.chart.isAnimating=!0;e=e||B.easing.linear;b&&this.animations.push({startTime:(new Date).getTime()+(a?a:0),duration:c,animationCallback:b,onComplete:d});for(a=[];0<this.animations.length;)if(c=this.animations.shift(),b=(new Date).getTime(),d=0,c.startTime<=
b&&(d=e(Math.min(b-c.startTime,c.duration),0,1,c.duration),d=Math.min(d,1),isNaN(d)||!isFinite(d))&&(d=1),1>d&&a.push(c),c.animationCallback(d),1<=d&&c.onComplete)c.onComplete();this.animations=a;0<this.animations.length?this.animationRequestId=this.chart.requestAnimFrame.call(window,function(){f.animate.call(f)}):this.chart.isAnimating=!1};va.prototype.cancelAllAnimations=function(){this.animations=[];this.animationRequestId&&this.chart.cancelRequestAnimFrame.call(window,this.animationRequestId);
this.animationRequestId=null;this.chart.isAnimating=!1};var B={yScaleAnimation:function(a,c){if(0!==a){var b=c.dest,d=c.source.canvas,e=c.animationBase;b.drawImage(d,0,0,d.width,d.height,0,e-e*a,b.canvas.width/N,a*b.canvas.height/N)}},xScaleAnimation:function(a,c){if(0!==a){var b=c.dest,d=c.source.canvas,e=c.animationBase;b.drawImage(d,0,0,d.width,d.height,e-e*a,0,a*b.canvas.width/N,b.canvas.height/N)}},xClipAnimation:function(a,c){if(0!==a){var b=c.dest,d=c.source.canvas;b.save();0<a&&b.drawImage(d,
0,0,d.width*a,d.height,0,0,d.width*a/N,d.height/N);b.restore()}},fadeInAnimation:function(a,c){if(0!==a){var b=c.dest,d=c.source.canvas;b.save();b.globalAlpha=a;b.drawImage(d,0,0,d.width,d.height,0,0,b.canvas.width/N,b.canvas.height/N);b.restore()}},easing:{linear:function(a,c,b,d){return b*a/d+c},easeOutQuad:function(a,c,b,d){return-b*(a/=d)*(a-2)+c},easeOutQuart:function(a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInQuad:function(a,c,b,d){return b*(a/=d)*a+c},easeInQuart:function(a,c,b,d){return b*
(a/=d)*a*a*a+c}}},P={drawMarker:function(a,c,b,d,e,f,g,h){if(b){var q=1;b.fillStyle=f?f:"#000000";b.strokeStyle=g?g:"#000000";b.lineWidth=h?h:0;"circle"===d?(b.moveTo(a,c),b.beginPath(),b.arc(a,c,e/2,0,2*Math.PI,!1),f&&b.fill(),h&&(g?b.stroke():(q=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=q))):"square"===d?(b.beginPath(),b.rect(a-e/2,c-e/2,e,e),f&&b.fill(),h&&(g?b.stroke():(q=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=q))):
"triangle"===d?(b.beginPath(),b.moveTo(a-e/2,c+e/2),b.lineTo(a+e/2,c+e/2),b.lineTo(a,c-e/2),b.closePath(),f&&b.fill(),h&&(g?b.stroke():(q=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=q)),b.beginPath()):"cross"===d&&(b.strokeStyle=f,b.lineWidth=e/4,b.beginPath(),b.moveTo(a-e/2,c-e/2),b.lineTo(a+e/2,c+e/2),b.stroke(),b.moveTo(a+e/2,c-e/2),b.lineTo(a-e/2,c+e/2),b.stroke())}},drawMarkers:function(a){for(var c=0;c<a.length;c++){var b=a[c];P.drawMarker(b.x,b.y,b.ctx,b.type,
b.size,b.color,b.borderColor,b.borderThickness)}}},Ia={Chart:function(a,c){var b=new v(a,c,this);this.render=function(){b.render(this.options)};this.options=b._options},addColorSet:function(a,c){aa[a]=c},addCultureInfo:function(a,c){ia[a]=c},formatNumber:function(a,c,b){b=b||"en";if(ia[b])return ba(a,c||"#,##0.##",new ha(b));throw"Unknown Culture Name";},formatDate:function(a,c,b){b=b||"en";if(ia[b])return wa(a,c||"DD MMM YYYY",new ha(b));throw"Unknown Culture Name";}};Ia.Chart.version="v1.8.1 Beta 2";
window.CanvasJS=Ia})();
/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext||function(){function V(){return this.context_||(this.context_=new C(this))}function W(a,b,c){var g=M.call(arguments,2);return function(){return a.apply(b,g.concat(M.call(arguments)))}}function N(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function O(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");
a.styleSheets.ex_canvas_||(a=a.createStyleSheet(),a.owningElement.id="ex_canvas_",a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")}function X(a){var b=a.srcElement;switch(a.propertyName){case "width":b.getContext().clearRect();b.style.width=b.attributes.width.nodeValue+"px";b.firstChild.style.width=b.clientWidth+"px";break;case "height":b.getContext().clearRect(),b.style.height=b.attributes.height.nodeValue+"px",b.firstChild.style.height=b.clientHeight+
"px"}}function Y(a){a=a.srcElement;a.firstChild&&(a.firstChild.style.width=a.clientWidth+"px",a.firstChild.style.height=a.clientHeight+"px")}function D(){return[[1,0,0],[0,1,0],[0,0,1]]}function t(a,b){for(var c=D(),g=0;3>g;g++)for(var e=0;3>e;e++){for(var f=0,d=0;3>d;d++)f+=a[g][d]*b[d][e];c[g][e]=f}return c}function P(a,b){b.fillStyle=a.fillStyle;b.lineCap=a.lineCap;b.lineJoin=a.lineJoin;b.lineWidth=a.lineWidth;b.miterLimit=a.miterLimit;b.shadowBlur=a.shadowBlur;b.shadowColor=a.shadowColor;b.shadowOffsetX=
a.shadowOffsetX;b.shadowOffsetY=a.shadowOffsetY;b.strokeStyle=a.strokeStyle;b.globalAlpha=a.globalAlpha;b.font=a.font;b.textAlign=a.textAlign;b.textBaseline=a.textBaseline;b.arcScaleX_=a.arcScaleX_;b.arcScaleY_=a.arcScaleY_;b.lineScale_=a.lineScale_}function Q(a){var b=a.indexOf("(",3),c=a.indexOf(")",b+1),b=a.substring(b+1,c).split(",");if(4!=b.length||"a"!=a.charAt(3))b[3]=1;return b}function E(a,b,c){return Math.min(c,Math.max(b,a))}function F(a,b,c){0>c&&c++;1<c&&c--;return 1>6*c?a+6*(b-a)*c:
1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a}function G(a){if(a in H)return H[a];var b,c=1;a=String(a);if("#"==a.charAt(0))b=a;else if(/^rgb/.test(a)){c=Q(a);b="#";for(var g,e=0;3>e;e++)g=-1!=c[e].indexOf("%")?Math.floor(255*(parseFloat(c[e])/100)):+c[e],b+=v[E(g,0,255)];c=+c[3]}else if(/^hsl/.test(a)){e=c=Q(a);b=parseFloat(e[0])/360%360;0>b&&b++;g=E(parseFloat(e[1])/100,0,1);e=E(parseFloat(e[2])/100,0,1);if(0==g)g=e=b=e;else{var f=0.5>e?e*(1+g):e+g-e*g,d=2*e-f;g=F(d,f,b+1/3);e=F(d,f,b);b=F(d,f,b-1/3)}b="#"+
v[Math.floor(255*g)]+v[Math.floor(255*e)]+v[Math.floor(255*b)];c=c[3]}else b=Z[a]||a;return H[a]={color:b,alpha:c}}function C(a){this.m_=D();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=1*q;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=a;var b="width:"+a.clientWidth+"px;height:"+a.clientHeight+"px;overflow:hidden;position:absolute",
c=a.ownerDocument.createElement("div");c.style.cssText=b;a.appendChild(c);b=c.cloneNode(!1);b.style.backgroundColor="red";b.style.filter="alpha(opacity=0)";a.appendChild(b);this.element_=c;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function R(a,b,c,g){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:g.x,y:g.y});a.currentX_=g.x;a.currentY_=g.y}function S(a,b){var c=G(a.strokeStyle),g=c.color,c=c.alpha*a.globalAlpha,e=a.lineScale_*a.lineWidth;1>e&&(c*=e);b.push("<g_vml_:stroke",
' opacity="',c,'"',' joinstyle="',a.lineJoin,'"',' miterlimit="',a.miterLimit,'"',' endcap="',$[a.lineCap]||"square",'"',' weight="',e,'px"',' color="',g,'" />')}function T(a,b,c,g){var e=a.fillStyle,f=a.arcScaleX_,d=a.arcScaleY_,k=g.x-c.x,n=g.y-c.y;if(e instanceof w){var h=0,l=g=0,u=0,m=1;if("gradient"==e.type_){h=e.x1_/f;c=e.y1_/d;var p=s(a,e.x0_/f,e.y0_/d),h=s(a,h,c),h=180*Math.atan2(h.x-p.x,h.y-p.y)/Math.PI;0>h&&(h+=360);1E-6>h&&(h=0)}else p=s(a,e.x0_,e.y0_),g=(p.x-c.x)/k,l=(p.y-c.y)/n,k/=f*q,
n/=d*q,m=x.max(k,n),u=2*e.r0_/m,m=2*e.r1_/m-u;f=e.colors_;f.sort(function(a,b){return a.offset-b.offset});d=f.length;p=f[0].color;c=f[d-1].color;k=f[0].alpha*a.globalAlpha;a=f[d-1].alpha*a.globalAlpha;for(var n=[],r=0;r<d;r++){var t=f[r];n.push(t.offset*m+u+" "+t.color)}b.push('<g_vml_:fill type="',e.type_,'"',' method="none" focus="100%"',' color="',p,'"',' color2="',c,'"',' colors="',n.join(","),'"',' opacity="',a,'"',' g_o_:opacity2="',k,'"',' angle="',h,'"',' focusposition="',g,",",l,'" />')}else e instanceof
I?k&&n&&b.push("<g_vml_:fill",' position="',-c.x/k*f*f,",",-c.y/n*d*d,'"',' type="tile"',' src="',e.src_,'" />'):(e=G(a.fillStyle),b.push('<g_vml_:fill color="',e.color,'" opacity="',e.alpha*a.globalAlpha,'" />'))}function s(a,b,c){a=a.m_;return{x:q*(b*a[0][0]+c*a[1][0]+a[2][0])-r,y:q*(b*a[0][1]+c*a[1][1]+a[2][1])-r}}function z(a,b,c){isFinite(b[0][0])&&(isFinite(b[0][1])&&isFinite(b[1][0])&&isFinite(b[1][1])&&isFinite(b[2][0])&&isFinite(b[2][1]))&&(a.m_=b,c&&(a.lineScale_=aa(ba(b[0][0]*b[1][1]-b[0][1]*
b[1][0]))))}function w(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function I(a,b){if(!a||1!=a.nodeType||"IMG"!=a.tagName)throw new A("TYPE_MISMATCH_ERR");if("complete"!=a.readyState)throw new A("INVALID_STATE_ERR");switch(b){case "repeat":case null:case "":this.repetition_="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":this.repetition_=b;break;default:throw new A("SYNTAX_ERR");}this.src_=a.src;this.width_=a.width;this.height_=a.height}
function A(a){this.code=this[a];this.message=a+": DOM Exception "+this.code}var x=Math,k=x.round,J=x.sin,K=x.cos,ba=x.abs,aa=x.sqrt,q=10,r=q/2;navigator.userAgent.match(/MSIE ([\d.]+)?/);var M=Array.prototype.slice;O(document);var U={init:function(a){a=a||document;a.createElement("canvas");a.attachEvent("onreadystatechange",W(this.init_,this,a))},init_:function(a){a=a.getElementsByTagName("canvas");for(var b=0;b<a.length;b++)this.initElement(a[b])},initElement:function(a){if(!a.getContext){a.getContext=
V;O(a.ownerDocument);a.innerHTML="";a.attachEvent("onpropertychange",X);a.attachEvent("onresize",Y);var b=a.attributes;b.width&&b.width.specified?a.style.width=b.width.nodeValue+"px":a.width=a.clientWidth;b.height&&b.height.specified?a.style.height=b.height.nodeValue+"px":a.height=a.clientHeight}return a}};U.init();for(var v=[],d=0;16>d;d++)for(var B=0;16>B;B++)v[16*d+B]=d.toString(16)+B.toString(16);var Z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",
bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",
darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",
ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",
mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",
peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},
H={},L={},$={butt:"flat",round:"round"},d=C.prototype;d.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null);this.element_.innerHTML=""};d.beginPath=function(){this.currentPath_=[]};d.moveTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.lineTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.bezierCurveTo=
function(a,b,c,g,e,f){e=s(this,e,f);a=s(this,a,b);c=s(this,c,g);R(this,a,c,e)};d.quadraticCurveTo=function(a,b,c,g){a=s(this,a,b);c=s(this,c,g);g={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};R(this,g,{x:g.x+(c.x-this.currentX_)/3,y:g.y+(c.y-this.currentY_)/3},c)};d.arc=function(a,b,c,g,e,f){c*=q;var d=f?"at":"wa",k=a+K(g)*c-r,n=b+J(g)*c-r;g=a+K(e)*c-r;e=b+J(e)*c-r;k!=g||f||(k+=0.125);a=s(this,a,b);k=s(this,k,n);g=s(this,g,e);this.currentPath_.push({type:d,
x:a.x,y:a.y,radius:c,xStart:k.x,yStart:k.y,xEnd:g.x,yEnd:g.y})};d.rect=function(a,b,c,g){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath()};d.strokeRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath();this.stroke();this.currentPath_=e};d.fillRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+
c,b+g);this.lineTo(a,b+g);this.closePath();this.fill();this.currentPath_=e};d.createLinearGradient=function(a,b,c,g){var e=new w("gradient");e.x0_=a;e.y0_=b;e.x1_=c;e.y1_=g;return e};d.createRadialGradient=function(a,b,c,g,e,f){var d=new w("gradientradial");d.x0_=a;d.y0_=b;d.r0_=c;d.x1_=g;d.y1_=e;d.r1_=f;return d};d.drawImage=function(a,b){var c,g,e,d,r,y,n,h;e=a.runtimeStyle.width;d=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var l=a.width,u=a.height;a.runtimeStyle.width=
e;a.runtimeStyle.height=d;if(3==arguments.length)c=arguments[1],g=arguments[2],r=y=0,n=e=l,h=d=u;else if(5==arguments.length)c=arguments[1],g=arguments[2],e=arguments[3],d=arguments[4],r=y=0,n=l,h=u;else if(9==arguments.length)r=arguments[1],y=arguments[2],n=arguments[3],h=arguments[4],c=arguments[5],g=arguments[6],e=arguments[7],d=arguments[8];else throw Error("Invalid number of arguments");var m=s(this,c,g),p=[];p.push(" <g_vml_:group",' coordsize="',10*q,",",10*q,'"',' coordorigin="0,0"',' style="width:',
10,"px;height:",10,"px;position:absolute;");if(1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var t=[];t.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",k(m.x/q),",","Dy=",k(m.y/q),"");var v=s(this,c+e,g),w=s(this,c,g+d);c=s(this,c+e,g+d);m.x=x.max(m.x,v.x,w.x,c.x);m.y=x.max(m.y,v.y,w.y,c.y);p.push("padding:0 ",k(m.x/q),"px ",k(m.y/q),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",t.join(""),", sizingmethod='clip');")}else p.push("top:",
k(m.y/q),"px;left:",k(m.x/q),"px;");p.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',q*e,"px;"," height:",q*d,'px"',' cropleft="',r/l,'"',' croptop="',y/u,'"',' cropright="',(l-r-n)/l,'"',' cropbottom="',(u-y-h)/u,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))};d.stroke=function(a){var b=[];b.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',10*q,",",10*q,'"',
' stroked="',!a,'"',' path="');for(var c={x:null,y:null},d={x:null,y:null},e=0;e<this.currentPath_.length;e++){var f=this.currentPath_[e];switch(f.type){case "moveTo":b.push(" m ",k(f.x),",",k(f.y));break;case "lineTo":b.push(" l ",k(f.x),",",k(f.y));break;case "close":b.push(" x ");f=null;break;case "bezierCurveTo":b.push(" c ",k(f.cp1x),",",k(f.cp1y),",",k(f.cp2x),",",k(f.cp2y),",",k(f.x),",",k(f.y));break;case "at":case "wa":b.push(" ",f.type," ",k(f.x-this.arcScaleX_*f.radius),",",k(f.y-this.arcScaleY_*
f.radius)," ",k(f.x+this.arcScaleX_*f.radius),",",k(f.y+this.arcScaleY_*f.radius)," ",k(f.xStart),",",k(f.yStart)," ",k(f.xEnd),",",k(f.yEnd))}if(f){if(null==c.x||f.x<c.x)c.x=f.x;if(null==d.x||f.x>d.x)d.x=f.x;if(null==c.y||f.y<c.y)c.y=f.y;if(null==d.y||f.y>d.y)d.y=f.y}}b.push(' ">');a?T(this,b,c,d):S(this,b);b.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",b.join(""))};d.fill=function(){this.stroke(!0)};d.closePath=function(){this.currentPath_.push({type:"close"})};d.save=function(){var a=
{};P(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=t(D(),this.m_)};d.restore=function(){this.aStack_.length&&(P(this.aStack_.pop(),this),this.m_=this.mStack_.pop())};d.translate=function(a,b){z(this,t([[1,0,0],[0,1,0],[a,b,1]],this.m_),!1)};d.rotate=function(a){var b=K(a);a=J(a);z(this,t([[b,a,0],[-a,b,0],[0,0,1]],this.m_),!1)};d.scale=function(a,b){this.arcScaleX_*=a;this.arcScaleY_*=b;z(this,t([[a,0,0],[0,b,0],[0,0,1]],this.m_),!0)};d.transform=function(a,b,c,d,e,f){z(this,t([[a,
b,0],[c,d,0],[e,f,1]],this.m_),!0)};d.setTransform=function(a,b,c,d,e,f){z(this,[[a,b,0],[c,d,0],[e,f,1]],!0)};d.drawText_=function(a,b,c,d,e){var f=this.m_;d=0;var r=1E3,t=0,n=[],h;h=this.font;if(L[h])h=L[h];else{var l=document.createElement("div").style;try{l.font=h}catch(u){}h=L[h]={style:l.fontStyle||"normal",variant:l.fontVariant||"normal",weight:l.fontWeight||"normal",size:l.fontSize||10,family:l.fontFamily||"sans-serif"}}var l=h,m=this.element_;h={};for(var p in l)h[p]=l[p];p=parseFloat(m.currentStyle.fontSize);
m=parseFloat(l.size);"number"==typeof l.size?h.size=l.size:-1!=l.size.indexOf("px")?h.size=m:-1!=l.size.indexOf("em")?h.size=p*m:-1!=l.size.indexOf("%")?h.size=p/100*m:-1!=l.size.indexOf("pt")?h.size=m/0.75:h.size=p;h.size*=0.981;p=h.style+" "+h.variant+" "+h.weight+" "+h.size+"px "+h.family;m=this.element_.currentStyle;l=this.textAlign.toLowerCase();switch(l){case "left":case "center":case "right":break;case "end":l="ltr"==m.direction?"right":"left";break;case "start":l="rtl"==m.direction?"right":
"left";break;default:l="left"}switch(this.textBaseline){case "hanging":case "top":t=h.size/1.75;break;case "middle":break;default:case null:case "alphabetic":case "ideographic":case "bottom":t=-h.size/2.25}switch(l){case "right":d=1E3;r=0.05;break;case "center":d=r=500}b=s(this,b+0,c+t);n.push('<g_vml_:line from="',-d,' 0" to="',r,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!e,'" stroked="',!!e,'" style="position:absolute;width:1px;height:1px;">');e?S(this,n):T(this,n,{x:-d,y:0},
{x:r,y:h.size});e=f[0][0].toFixed(3)+","+f[1][0].toFixed(3)+","+f[0][1].toFixed(3)+","+f[1][1].toFixed(3)+",0,0";b=k(b.x/q)+","+k(b.y/q);n.push('<g_vml_:skew on="t" matrix="',e,'" ',' offset="',b,'" origin="',d,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',N(a),'" style="v-text-align:',l,";font:",N(p),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",n.join(""))};d.fillText=function(a,b,c,d){this.drawText_(a,b,c,d,!1)};d.strokeText=function(a,
b,c,d){this.drawText_(a,b,c,d,!0)};d.measureText=function(a){this.textMeasureEl_||(this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),this.textMeasureEl_=this.element_.lastChild);var b=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(b.createTextNode(a));return{width:this.textMeasureEl_.offsetWidth}};d.clip=function(){};
d.arcTo=function(){};d.createPattern=function(a,b){return new I(a,b)};w.prototype.addColorStop=function(a,b){b=G(b);this.colors_.push({offset:a,color:b.color,alpha:b.alpha})};d=A.prototype=Error();d.INDEX_SIZE_ERR=1;d.DOMSTRING_SIZE_ERR=2;d.HIERARCHY_REQUEST_ERR=3;d.WRONG_DOCUMENT_ERR=4;d.INVALID_CHARACTER_ERR=5;d.NO_DATA_ALLOWED_ERR=6;d.NO_MODIFICATION_ALLOWED_ERR=7;d.NOT_FOUND_ERR=8;d.NOT_SUPPORTED_ERR=9;d.INUSE_ATTRIBUTE_ERR=10;d.INVALID_STATE_ERR=11;d.SYNTAX_ERR=12;d.INVALID_MODIFICATION_ERR=
13;d.NAMESPACE_ERR=14;d.INVALID_ACCESS_ERR=15;d.VALIDATION_ERR=16;d.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=U;CanvasRenderingContext2D=C;CanvasGradient=w;CanvasPattern=I;DOMException=A}();
