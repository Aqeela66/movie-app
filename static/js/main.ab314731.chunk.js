(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),r=c.n(s),i=(c(11),c(12),c(3)),l=c.n(i),o=c(6),u=c(4),j=c(0);var d=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(u.a)(s,2),i=r[0],d=r[1],b=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("submitting"),n="https://api.themoviedb.org/3/movie/550?api_key=c84c8884b8de590025943721620b2ce2&language=en-US&query=".concat(c,"&page=1&include_adult=false"),e.prev=3,e.next=6,fetch(n);case 6:return a=e.sent,e.next=9,a.json();case 9:s=e.sent,d(s.results),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{className:"form",onSubmit:b,children:[Object(j.jsx)("label",{className:"label",htmlFor:"query",children:"Movie name"}),Object(j.jsx)("input",{className:"input",type:"text",name:"query",placeholder:"i-e Jurassic Park",value:c,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(j.jsx)("div",{className:"card-list",children:i.map((function(e){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{className:"card--image",src:"https://www.imdb.com/title/tt0107290/mediaviewer/rm3913805824/".concat(e.poster_path),alt:e.title+"poster"}),Object(j.jsxs)("div",{className:"card--content",children:[Object(j.jsx)("h3",{className:"card--title",children:e.title}),Object(j.jsx)("p",{children:Object(j.jsxs)("small",{children:["RELEASE DATE: ",e.release_date]})}),Object(j.jsx)("p",{children:Object(j.jsxs)("small",{children:["RATING: ",e.vote_average]})}),Object(j.jsx)("p",{className:"card--desc",children:e.overview})]})]})}))})]})};var b=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"React Movie Search"}),Object(j.jsx)(d,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.ab314731.chunk.js.map