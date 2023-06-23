"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[225],{5225:function(n,t,e){e.r(t),e.d(t,{default:function(){return E}});var r=e(1413),i=e(9439),c=e(2791),o=e(7689),a=e(5243),s=e(184);function u(){return(0,s.jsx)(a.RL,{height:"200",width:"200",radius:"48",color:"rgb(73, 203, 230)",ariaLabel:"watch-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"",visible:!0})}function p(){return(0,s.jsx)(a.RL,{height:"300",width:"300",radius:"48",color:"rgb(73, 203, 230)",ariaLabel:"watch-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"",visible:!0})}var l,x,h,f,d,b,g,v,m=e(4635),w=e(168),j=e(6444),y=e(1087),Z=j.ZP.div(l||(l=(0,w.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-bottom: 15px;\n  box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);\n  -webkit-box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);\n  -moz-box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);\n"]))),k=j.ZP.div(x||(x=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),_=j.ZP.p(h||(h=(0,w.Z)(["\n  font-size: 30px;\n  font-weight: 700;\n"]))),S=j.ZP.p(f||(f=(0,w.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n"]))),P=(0,j.ZP)(y.rU)(d||(d=(0,w.Z)(["\n  display: inline-block;\n  margin-bottom: 15px;\n"]))),C=j.ZP.div(b||(b=(0,w.Z)(["\n  box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);\n  -webkit-box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);\n  -moz-box-shadow: 0px 15px 14px -5px rgba(209, 222, 224, 1);\n"]))),U=j.ZP.ul(g||(g=(0,w.Z)(["\n  margin-bottom: 15px;\n  margin-left: 20px;\n"]))),z=(0,j.ZP)(y.rU)(v||(v=(0,w.Z)(["\n  padding: 10px 15px;\n  border-radius: 4px;\n  margin-bottom: 5px;\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  background-color: rgb(73, 203, 230);\n"]))),H=e(5987),L=e(6778);var E=function(){var n,t,e,a=(0,c.useState)({}),l=(0,i.Z)(a,2),x=l[0],h=l[1],f=(0,c.useState)(!1),d=(0,i.Z)(f,2),b=d[0],g=d[1],v=(0,o.UO)().movieId;(0,c.useEffect)((function(){g(!0),(0,m.HI)(v).then((function(n){return h((0,r.Z)({},n))})).finally(g(!1))}),[v]);var w=(0,o.TH)(),j=(0,c.useRef)(null!==(n=null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,s.jsxs)(s.Fragment,{children:[null!==b&&void 0!==b?b:(0,s.jsx)(u,{}),(0,s.jsxs)(L.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,s.jsx)(z,{to:j.current,children:"Go back"}),(0,s.jsxs)(Z,{children:[x.poster_path?(0,s.jsx)("img",{src:"".concat(m.HS).concat(x.poster_path),alt:""}):(0,s.jsx)(p,{}),(0,s.jsxs)(k,{children:[(0,s.jsx)("h2",{children:x.original_title}),(0,s.jsxs)("p",{children:["User Score: ",Math.ceil(10*x.vote_average)+"%"]}),(0,s.jsx)(_,{children:"Overview"}),(0,s.jsx)("p",{children:x.overview}),(0,s.jsx)(S,{children:"Genres"}),(0,s.jsx)("p",{children:null===(e=x.genres)||void 0===e?void 0:e.map((function(n){return"".concat(n.name," "," ")}))})]})]}),(0,s.jsxs)(C,{children:["Additional information",(0,s.jsxs)(U,{children:[(0,s.jsx)("li",{children:(0,s.jsx)(P,{to:"cast",children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(P,{to:"reviews",children:"Reviews"})})]})]})]}),(0,s.jsx)(c.Suspense,{fallback:(0,s.jsx)(H.o,{children:(0,s.jsx)(L.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,s.jsx)(H.d,{children:"Loading..."})})}),children:(0,s.jsx)(L.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,s.jsx)(o.j3,{})})})]})}},4635:function(n,t,e){e.d(t,{HI:function(){return x},HS:function(){return u},Jh:function(){return f},Tn:function(){return b},XT:function(){return p},z1:function(){return v}});var r=e(5861),i=e(7757),c=e.n(i),o="api_key=01e602e077bffb2dd10fabcf093ebced",a="https://api.themoviedb.org/3/",s="trending/movie/day",u="https://image.tmdb.org/t/p/w300";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a).concat(s,"?").concat(o)).then((function(n){return n.json()})).catch((function(n){return console.log(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"?").concat(o,"&language=en-US")).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/credits?").concat(o,"&language=en-US")).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/reviews?").concat(o,"&language=en-US&page=1")).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"search/movie?").concat(o,"&query=").concat(t)).then((function(n){return n.json()})).catch((function(n){return console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=225.82ecd38f.chunk.js.map