(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{147:function(e,t,a){e.exports=a(288)},152:function(e,t,a){},153:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),c=a.n(l),o=(a(152),a(25)),i=(a(153),a(20)),m=a(21),u=a(23),d=a(22),s=a(299),E=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(s.a.Item,{name:e.name,header:e.header,icon:e.icon,color:e.color,disabled:e.disabled,link:e.link,active:e.active,onClick:e.handleItemClick}))},h=a(32),p=function(e){var t=e.name,a=e.link,l=e.as,c=e.size;return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{name:t,as:l,link:a,size:c}))},f=function(e){var t=e.activeItem,a=e.handleItemClick;e.handleSidebar;return r.a.createElement(n.Fragment,null,r.a.createElement(s.a,{size:"large",fluid:!0,widths:"7"},r.a.createElement(s.a.Item,{header:!0},r.a.createElement(p,{name:"heart"})),r.a.createElement(E,{name:"about",active:"about"===t,handleItemClick:a}),r.a.createElement(E,{name:"workExperience",active:"workExperience"===t,handleItemClick:a}),r.a.createElement(E,{name:"projects",active:"projects"===t,handleItemClick:a}),r.a.createElement(E,{name:"education",active:"education"===t,handleItemClick:a}),r.a.createElement(E,{name:"awards",active:"awards"===t,handleItemClick:a}),r.a.createElement(E,{name:"interests",active:"interests"===t,handleItemClick:a})))},v=function(e){var t=e.activeItem,a=e.handleItemClick;return r.a.createElement(n.Fragment,null,r.a.createElement(s.a,{stackable:!0,vertical:!0,icon:"labeled",fluid:!0,floated:!0},r.a.createElement(s.a.Item,{header:!0},r.a.createElement(p,{name:"heart"})),r.a.createElement(E,{name:"about",active:"about"===t,handleItemClick:a}),r.a.createElement(E,{name:"workExperience",active:"workexperience"===t,handleItemClick:a}),r.a.createElement(E,{name:"projects",active:"projects"===t,handleItemClick:a}),r.a.createElement(E,{name:"education",active:"education"===t,handleItemClick:a}),r.a.createElement(E,{name:"awards",active:"awards"===t,handleItemClick:a}),r.a.createElement(E,{name:"interests",active:"interests"===t,handleItemClick:a})))},b=a(303),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleItemClick=function(e,t){var a=t.name,r=n.props.history;n.setState({activeItem:a}),r.push("/portfolio/".concat(a))},n.state={activeItem:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement("div",null,r.a.createElement(b.a,Object.assign({as:s.a.Item},b.a.onlyComputer,{minWidth:b.a.onlyComputer.minWidth,maxWidth:b.a.onlyComputer.maxWidth}),r.a.createElement(f,{activeItem:e,handleItemClick:this.handleItemClick})),r.a.createElement(b.a,Object.assign({as:s.a.Item},b.a.onlyMobile,{minWidth:b.a.onlyMobile.minWidth,maxWidth:b.a.onlyMobile.maxWidth}),r.a.createElement(v,{activeItem:e,handleItemClick:this.handleItemClick})))}}]),a}(n.Component),k=a(297),w=a(138),C=a(296),I=a(137),j=function(e){var t=e.floated,a=e.size,l=e.src,c=e.circular;return r.a.createElement(n.Fragment,null,r.a.createElement(I.a,{floated:t,size:a,src:l,circular:c}))},y=function(e){var t=e.header,a=e.meta,l=e.description,c=e.extraContentMeta,o=e.extraContent,i=e.itemsPerRow,m=e.color,u=e.fluid,d=e.centered,s=e.imageFloated,E=e.imageSize,h=e.imageSrc,p=e.imageCircular,f=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement(C.a.Group,{itemsPerRow:i},r.a.createElement(C.a,{color:m,centered:d,fluid:u},r.a.createElement(C.a.Content,null,r.a.createElement(j,{floated:s,size:E,src:h,circular:p}),r.a.createElement(C.a.Header,null,t),r.a.createElement(C.a.Description,null,l),r.a.createElement(C.a.Meta,null,a)),r.a.createElement(C.a.Content,{extra:o},c),r.a.createElement(C.a.Content,null,f))))},S=a(293),x=a(298),O=function(e){var t=e.to,a=e.target,n=e.download,l=e.children;return r.a.createElement("a",{href:t,target:a,download:n},l)},W=function(e){return r.a.createElement("div",null,r.a.createElement(S.a,null),r.a.createElement(O,{to:"mailto:anujraval24@gmail.com",target:"_blank"},r.a.createElement(x.a,{color:"blue",fluid:!0,floated:!0,icon:"mail"})),r.a.createElement(S.a,null),r.a.createElement(O,{to:"https://github.com/Anujraval24",target:"_blank"},r.a.createElement(x.a,{color:"black",fluid:!0,floated:!0,icon:"github"})),r.a.createElement(S.a,null),r.a.createElement(O,{to:"https://www.linkedin.com/in/anujraval",target:"_blank"},r.a.createElement(x.a,{color:"linkedin",fluid:!0,floated:!0,icon:"linkedin"})),r.a.createElement(S.a,null),r.a.createElement(O,{to:"https://twitter.com/annujraval",target:"_blank"},r.a.createElement(x.a,{color:"twitter",fluid:!0,floated:!0,icon:"twitter"})),r.a.createElement(S.a,null),r.a.createElement(O,{to:"https://www.instagram.com/annujraval",target:"_blank"},r.a.createElement(x.a,{color:"instagram",content:"Personal",fluid:!0,floated:!0,icon:"instagram"})),r.a.createElement(S.a,null),r.a.createElement(O,{to:"https://www.instagram.com/anujr.cooks",target:"_blank"},r.a.createElement(x.a,{color:"instagram",content:"Cooking",fluid:!0,floated:!0,icon:"instagram"})),r.a.createElement(S.a,null),r.a.createElement(O,{to:"https://join.skype.com/invite/pwoxo0zCNpSS",target:"_blank"},r.a.createElement(x.a,{color:"blue",fluid:!0,floated:!0,icon:"skype"})))},P=function(e){var t=Object(n.useState)(!1),a=Object(w.a)(t,2),l=a[0],c=a[1],o=r.a.createElement("div",null,"I am Self Taught Developer with ",r.a.createElement("br",null),"Bachelor's Degree in ",r.a.createElement("br",null),"Computer Engineering from Alpha College");return r.a.createElement("div",{className:"padding"},r.a.createElement(y,{header:"Anuj B. Raval",centered:!0,description:"MERN Stack Developer",imageFloated:"left",imageSize:"medium",imageCircular:!0,imageSrc:"https://avatars1.githubusercontent.com/u/17050077?s=460&u=708e6c60fb62d55625c233eab0aba40d2c048998&v=4",extraContent:!0,extraContentMeta:o},r.a.createElement(x.a,{onClick:function(){return c(!l)},content:"Toggle Social Profiles"}),l&&r.a.createElement(W,null)))},A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Projects")}}]),a}(n.Component),D=a(302),M=a(301),J=a(61),N=a(300),R=a(295),z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(D.a,{padded:!0,columns:1},r.a.createElement(D.a.Row,null,r.a.createElement(D.a.Column,null,r.a.createElement(M.a,{padded:!0,raised:!0},r.a.createElement(J.a,{attached:"top"},"MERN Stack Developer"),r.a.createElement(M.a,{padded:!0},r.a.createElement(N.a,{as:"h1",textAlign:"center",content:"DOT InfoTech"}),r.a.createElement(J.a,null,r.a.createElement(p,{name:"calendar alternate outline"}),"Joining Date",r.a.createElement(J.a.Detail,null,"09/2018 - Present")),r.a.createElement(N.a,{as:"h3",attached:"top"},"Tasks"),r.a.createElement(M.a,{attached:!0},r.a.createElement(R.a,{relaxed:!0,animated:!0,size:"huge",selection:!0,divided:!0},r.a.createElement(R.a.Item,null,r.a.createElement(R.a.Content,null,r.a.createElement(R.a.Header,null,r.a.createElement(R.a.Icon,{name:"node js"}),"Node JS",r.a.createElement(R.a.Icon,{name:"react"}),"React JS"),r.a.createElement(R.a.Description,null,"Worked On Multiple Client Projects - Admin Panel, API & Website"))),r.a.createElement(R.a.Item,null,r.a.createElement(R.a.Content,null,r.a.createElement(R.a.Header,null,"GraphQL"),r.a.createElement(R.a.Description,null,"Worked on Project where I, wrote Automated Test Cases with JEST for GraphQL Service, Implemented Prisma."))),r.a.createElement(R.a.Item,null,r.a.createElement(R.a.Content,null,r.a.createElement(R.a.Header,null,r.a.createElement(R.a.Icon,{name:"node js"}),"Node JS"),r.a.createElement(R.a.Description,null,"Designed, Architected of Backend Node JS API Structure ",r.a.createElement("br",null),"with using Express JS, MongoDB ( Mongoose JS ), Babel 7, Swagger UI, ES6 syntax, @hapi/joi"))),r.a.createElement(R.a.Item,null,r.a.createElement(R.a.Content,null,r.a.createElement(R.a.Header,null,r.a.createElement(R.a.Icon,{name:"node js"}),"Node JS",r.a.createElement(R.a.Icon,{name:"react"}),"React JS"),r.a.createElement(R.a.Description,null,"Worked an E-Commerce Website & API",r.a.createElement("br",null),"where I, implemented functionlity of Product on Backend Side ",r.a.createElement("br",null)," & Cart functionlity, Payment Method of Stripe, PayPal on FrontEnd Side"))))))))))))}}]),a}(n.Component),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Education")}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Interests ")}}]),a}(n.Component),B=function(e){var t=e.history;return r.a.createElement(k.c,{history:t},r.a.createElement(k.d,null,r.a.createElement(k.a,{exact:!0,from:"/",to:"/portfolio/about"}),r.a.createElement(k.a,{exact:!0,from:"/portfolio/",to:"/portfolio/about"}),r.a.createElement(k.b,{exact:!0,path:"/portfolio/about",component:P}),r.a.createElement(k.b,{exact:!0,path:"/portfolio/workExperience",component:z}),r.a.createElement(k.b,{exact:!0,path:"/portfolio/projects",component:A}),r.a.createElement(k.b,{exact:!0,path:"/portfolio/education",component:F}),r.a.createElement(k.b,{exact:!0,path:"/portfolio/awards",component:A}),r.a.createElement(k.b,{exact:!0,path:"/portfolio/interests",component:T})))},_=Object(o.a)();var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,{history:_}),r.a.createElement(B,{history:_}))},L=(a(287),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function U(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/portfolio","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(t,e)}))}}()}},[[147,1,2]]]);
//# sourceMappingURL=main.55298ca9.chunk.js.map