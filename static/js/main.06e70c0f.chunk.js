(this.webpackJsonpghapp=this.webpackJsonpghapp||[]).push([[0],{17:function(e,t,n){e.exports={profileBlock:"profilepage_profileBlock__2qE06",login:"profilepage_login__27onr",info:"profilepage_info__TGS0M",avatar:"profilepage_avatar__1O4Qu",profileBlockTop:"profilepage_profileBlockTop__3L-ap"}},21:function(e,t,n){e.exports={avatar:"profile_avatar__1y4pv",btn:"profile_btn__1UaPm",profile:"profile_profile__1z4c1",repos:"profile_repos__3a5-U"}},38:function(e,t,n){e.exports={input:"searchinput_input__2f1Vy"}},40:function(e,t,n){e.exports={repos:"repositem_repos__2eI8y"}},41:function(e,t,n){e.exports={input:"searchrepos_input__16t18"}},48:function(e,t,n){},58:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),s=n.n(c),o=(n(48),n(9)),i=n(15),l=n(21),u=n.n(l),j=n(18),p=n(1),b=function(e){var t=e.avatar_url,n=e.login,r=e.public_repos;return Object(p.jsx)(j.b,{className:u.a.btn,to:"users/".concat(n),children:Object(p.jsxs)("div",{className:u.a.profile,children:[Object(p.jsx)("img",{className:u.a.avatar,src:t,alt:"avatar"}),Object(p.jsx)("h1",{children:n}),Object(p.jsxs)("p",{className:u.a.repos,children:["Public repositories: ",Object(p.jsx)("strong",{children:r})," "]})]})})},d=n(84),f=n(83),h=(n(58),function(){var e=Object(i.c)((function(e){return e.users}));return Object(p.jsx)(d.a,{component:"ul",children:e.map((function(e){return Object(p.jsx)(f.a,{timeout:500,in:!0,classNames:"list",children:Object(p.jsx)(b,Object(o.a)({},e),e.id)},e.id)}))})}),O=n(14),v=n(37),x=n(12),m=n.n(x),_=n(20),g=n(13),w=n.n(g),k=function(e){return{type:"SET_USERS",users:e}},N=n(38),y=n.n(N),S=function(){var e=Object(i.b)(),t=a.a.useState(""),n=Object(O.a)(t,2),r=n[0],c=n[1];return a.a.useEffect((function(){var t;r&&e((t=r,function(){var e=Object(_.a)(m.a.mark((function e(n){var r,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://api.github.com/search/users?q=".concat(t));case 3:return r=e.sent,a=r.data.items,e.next=7,w.a.all(a.map(function(){var e=Object(_.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.a.get("https://api.github.com/users/".concat(t.login.toLowerCase())).then((function(e){return t.public_repos=e.data.public_repos})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:n(k(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))}),[r]),Object(p.jsx)("div",{style:{textAlign:"center"},children:Object(p.jsx)(v.DebounceInput,{className:y.a.input,debounceTimeout:350,onChange:function(e){return c(e.target.value)}})})},E=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"Github Searcher"}),Object(p.jsx)(S,{}),Object(p.jsx)(h,{})]})},B=n(3),T=n(26),C=n(39),P={users:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:t.users});default:return e}},I=Object(T.b)(U,Object(T.a)(C.a)),L=n(40),M=n.n(L),q=function(e){var t=e.forks,n=e.stargazers_count,r=e.name,a=e.html_url;return Object(p.jsx)("li",{children:Object(p.jsxs)("a",{href:a,target:"_blank",className:M.a.repos,children:[Object(p.jsx)("h3",{children:r}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["forks: ",t]}),Object(p.jsxs)("p",{children:["stars: ",n]})]})]})})},z=(n(80),a.a.memo((function(e){var t=e.repos;return console.log("reposlist rerender"),Object(p.jsx)(d.a,{component:"ul",children:null===t||void 0===t?void 0:t.map((function(e){return Object(p.jsx)(f.a,{timeout:500,in:!0,classNames:"list",children:Object(p.jsx)(q,Object(o.a)({},e),e.id)},e.id)}))})}))),A=n(41),G=n.n(A),J=a.a.memo((function(e){var t=Object.assign({},e);return console.log("rerender repos search"),Object(p.jsx)("input",Object(o.a)(Object(o.a)({className:G.a.input},t),{},{type:"text",placeholder:"enter a name of repository"}))})),R=n(17),D=n.n(R),F=(n(81),function(){return Object(p.jsx)("div",{className:"lds-block",children:Object(p.jsxs)("div",{className:"lds-ring",children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})})}),Q=function(){var e=a.a.useState(),t=Object(O.a)(e,2),n=t[0],r=t[1],c=a.a.useState([]),s=Object(O.a)(c,2),o=s[0],i=s[1],l=a.a.useState(""),u=Object(O.a)(l,2),j=u[0],b=u[1],d=a.a.useState(!1),f=Object(O.a)(d,2),h=f[0],v=f[1],x=Object(B.f)().loginParam,g=a.a.useMemo((function(){return o.filter((function(e){return e.name.includes(j)}))}),[o,j]),k=a.a.useMemo((function(){return function(e){return b(e.target.value.toLowerCase())}}),[j]);return a.a.useEffect((function(){(function(){var e=Object(_.a)(m.a.mark((function e(){var t,n,a,c,s,o,l,u,j,p,b,d;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://api.github.com/users/".concat(x,"/repos"));case 3:return t=e.sent,n=t.data,e.next=7,w.a.get("https://api.github.com/users/".concat(x));case 7:a=e.sent,c=a.data,s=c.followers,o=c.following,l=c.email,u=c.location,j=c.created_at,p=c.bio,b=c.login,d=c.avatar_url,i(n),r({followers:s,following:o,email:l,location:u,created_at:j,bio:p,login:b,avatar_url:d}),v(!0),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),alert(e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(p.jsx)(p.Fragment,{children:h?Object(p.jsxs)("div",{className:D.a.profileBlock,children:[Object(p.jsxs)("div",{className:D.a.profileBlockTop,children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{className:D.a.avatar,src:null===n||void 0===n?void 0:n.avatar_url,alt:"avatar"})}),Object(p.jsxs)("div",{className:D.a.info,children:[Object(p.jsx)("h1",{className:D.a.login,children:null===n||void 0===n?void 0:n.login}),Object(p.jsxs)("p",{children:["email: ",(null===n||void 0===n?void 0:n.email)||"no email"]}),Object(p.jsxs)("p",{children:["location: ",(null===n||void 0===n?void 0:n.location)||"no location"]}),Object(p.jsxs)("p",{children:["followers: ",null===n||void 0===n?void 0:n.followers]}),Object(p.jsxs)("p",{children:["following: ",null===n||void 0===n?void 0:n.following]}),Object(p.jsxs)("p",{children:["join date: ",null===n||void 0===n?void 0:n.created_at]})]})]}),Object(p.jsx)("p",{children:null===n||void 0===n?void 0:n.bio}),Object(p.jsx)(J,{onChange:k}),Object(p.jsx)(z,{repos:g})]}):Object(p.jsx)(F,{})})};s.a.render(Object(p.jsx)(i.a,{store:I,children:Object(p.jsx)(j.a,{children:Object(p.jsxs)(B.c,{children:[Object(p.jsx)(B.a,{exact:!0,path:"/",component:E}),Object(p.jsx)(B.a,{exact:!0,path:"/users/:loginParam",component:Q})]})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.06e70c0f.chunk.js.map