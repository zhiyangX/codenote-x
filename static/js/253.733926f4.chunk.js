(this["webpackJsonp@codenote-x/local-client"]=this["webpackJsonp@codenote-x/local-client"]||[]).push([[253],{423:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,i=c.length;-1!==t.code.indexOf(o=n(a,i));)++i;return c[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(i){for(var l=0;l<i.length&&!(o>=r.length);l++){var u=i[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var s=r[o],p=t.tokenStack[s],g="string"===typeof u?u:u.content,f=n(a,s),k=g.indexOf(f);if(k>-1){++o;var h=g.substring(0,k),d=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),m=g.substring(k+f.length),v=[];h&&v.push.apply(v,c([h])),v.push(d),m&&v.push.apply(v,c([m])),"string"===typeof u?i.splice.apply(i,[l,1].concat(v)):u.content=v}}else u.content&&c(u.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=253.733926f4.chunk.js.map