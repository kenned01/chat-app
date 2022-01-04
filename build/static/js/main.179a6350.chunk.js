(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{234:function(e,c,t){},280:function(e,c,t){},662:function(e,c,t){},664:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t(65),s=t.n(a),r=(t(234),t(14)),i=t(25),o=t(667),j=t(666),l=t(70),u=t(192),b=t.n(u),m=(t(280),t(193)),h=t.n(m),d=t(6),O=function(){return Object(d.jsx)(h.a,{className:"login_particles",params:{particles:{number:{value:250,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onclick:{enable:!0,mode:"repulse"}},modes:{repulse:{distance:400,duration:4}}}}})},f=function(){var e=Object(n.useState)(""),c=Object(i.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),m=u[0],h=u[1],f=Object(r.f)();return Object(d.jsxs)("section",{className:"view login",children:[Object(d.jsxs)(o.a,{shaded:!0,bordered:!0,className:"login_card",children:[Object(d.jsx)("center",{className:"mb-4",children:Object(d.jsx)(b.a,{style:{fontSize:"4rem",color:"#3498ff"}})}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f.push("/chat",{username:m,channel:t})},children:[Object(d.jsx)(j.a,{required:!0,placeholder:"CHANNEL",className:"mb-4",value:t,onChange:a}),Object(d.jsx)(j.a,{required:!0,placeholder:"USERNAME",className:"mb-4",value:m,onChange:h}),Object(d.jsx)(l.a,{appearance:"primary",type:"submit",block:!0,className:"mb-4",children:"CONNECT"})]})]}),Object(d.jsx)(O,{})]})},x=t(200),p=function(e){var c=e.socket,t=(e.username,Object(n.useState)([])),a=Object(i.a)(t,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){return c.on("chat message",(function(e){r((function(c){return[].concat(Object(x.a)(c),[e])}))})),function(){c.off("chat message")}}),[c]),Object(d.jsx)("section",{className:"message-list",children:s.map((function(e,t){var n=e.sender===c.id?"mine":"";return console.log(e),Object(d.jsx)("div",{className:"message-container "+n,children:Object(d.jsxs)("div",{className:"message "+n,children:[Object(d.jsx)("p",{className:"mb-2",children:Object(d.jsx)("span",{children:e.username})}),e.message]})},t)}))})},v=t(668),N=t(198),g=t.n(N),k=function(e){var c=e.socket,t=e.channel,a=e.username,s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1];return Object(d.jsxs)("section",{className:"chat-form",children:[Object(d.jsx)(j.a,{className:"chat_input",value:o,onChange:function(e){return l(e)}}),Object(d.jsx)(v.a,{className:"chat_input_button",icon:Object(d.jsx)(g.a,{}),appearance:"primary",onClick:function(){c.emit("chat message",{room_id:t,message:o,username:a}),l("")}})]})},S=function(e){var c=e.channel,t=void 0===c?"":c,n=e.username,a=void 0===n?"":n;return Object(d.jsx)("section",{className:"chat-title",children:Object(d.jsxs)("h3",{children:[t," - ",a]})})},_=t(669),y=function(e){var c=e.name,t=void 0===c?"":c;return Object(d.jsxs)("div",{className:"flex fy-center mb-1",children:[Object(d.jsx)(_.a,{circle:!0,className:"avatar",children:t.substr(0,1)}),Object(d.jsx)("p",{className:"username",children:t})]})},C=function(e){var c=e.socket,t=e.channel,a=Object(n.useState)([]),s=Object(i.a)(a,2),r=s[0],o=s[1];return Object(n.useEffect)((function(){fetch("".concat("http://localhost:8000","/users/").concat(t)).then((function(e){return e.json()})).then((function(e){return o(e)})).catch(console.warn),c.on("users status",(function(e){o(e)}))}),[c,t]),Object(d.jsxs)("section",{className:"chat-list",children:[Object(d.jsx)("header",{className:"mb-4 text-center",children:Object(d.jsxs)("h4",{className:"text-center",children:["connected to ",t]})}),Object(d.jsx)("aside",{className:"users_connected mb-2",children:r.map((function(e,c){return Object(d.jsx)(y,{name:e.username},c)}))})]})},E=t(199),w=(t(662),t(670)),z=function(e){var c=Object(n.useMemo)((function(){return Object(E.io)("http://localhost:8000/",{path:"/chat/"})}),[]),t=Object(r.f)(),a=Object(n.useState)(e.location.state),s=Object(i.a)(a,1)[0],o=Object(n.useState)(!1),j=Object(i.a)(o,2),l=j[0],u=j[1],b=Object(n.useCallback)((function(){return!!s&&!(!(null===s||void 0===s?void 0:s.username)||!(null===s||void 0===s?void 0:s.channel))}),[s]);return Object(n.useEffect)((function(){return b()||t.replace("/"),c.emit("join",s,(function(e){u(!0)})),function(){c.close()}}),[c,t,s,b]),b()?l?Object(d.jsx)("section",{className:"view chat",children:Object(d.jsxs)("div",{className:"chat-container",children:[Object(d.jsx)(C,{socket:c,channel:s.channel}),Object(d.jsx)(S,{channel:s.channel,username:s.username}),Object(d.jsx)(p,{socket:c,username:s.username}),Object(d.jsx)(k,{socket:c,channel:s.channel,username:s.username})]})}):Object(d.jsx)(w.a,{center:!0,size:"lg"}):Object(d.jsx)(d.Fragment,{})};var q=function(){return Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",component:f,exact:!0}),Object(d.jsx)(r.a,{path:"/chat",component:z,exact:!0})]})},A=t(64);t(663);s.a.render(Object(d.jsx)(A.a,{children:Object(d.jsx)(q,{})}),document.getElementById("root"))}},[[664,1,2]]]);
//# sourceMappingURL=main.179a6350.chunk.js.map