(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{153:function(e,a,t){e.exports=t(294)},158:function(e,a,t){},159:function(e,a,t){},294:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(33),c=t.n(r),o=(t(158),t(24)),i=(t(159),t(128)),m=t(129),s=t(143),d=t(141),u=t(142),E=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(u.a.Item,{name:e.name,header:e.header,icon:e.icon,color:e.color,disabled:e.disabled,link:e.link,active:e.active,onClick:e.handleItemClick}))},h=function(e){var a=e.activeItem,t=e.handleItemClick;e.handleSidebar;return l.a.createElement(n.Fragment,null,l.a.createElement(u.a,{size:"large",fluid:!0,widths:"7"},l.a.createElement(E,{name:"connectVia",active:"connectVia"===a,handleItemClick:t}),l.a.createElement(E,{name:"aboutMe",active:"aboutMe"===a,handleItemClick:t}),l.a.createElement(E,{name:"workExperience",active:"workExperience"===a,handleItemClick:t}),l.a.createElement(E,{name:"projects",active:"projects"===a,handleItemClick:t}),l.a.createElement(E,{name:"education",active:"education"===a,handleItemClick:t}),l.a.createElement(E,{name:"technicalSkills",active:"technicalSkills"===a,handleItemClick:t}),l.a.createElement(E,{name:"others",active:"others"===a,handleItemClick:t})))},g=function(e){var a=e.activeItem,t=e.handleItemClick;return l.a.createElement(n.Fragment,null,l.a.createElement(u.a,{stackable:!0,vertical:!0,icon:"labeled",fluid:!0,floated:!0},l.a.createElement(E,{name:"connectVia",active:"connectVia"===a,handleItemClick:t}),l.a.createElement(E,{name:"aboutMe",active:"aboutMe"===a,handleItemClick:t}),l.a.createElement(E,{name:"workExperience",active:"workexperience"===a,handleItemClick:t}),l.a.createElement(E,{name:"projects",active:"projects"===a,handleItemClick:t}),l.a.createElement(E,{name:"education",active:"education"===a,handleItemClick:t}),l.a.createElement(E,{name:"technicalSkills",active:"technicalSkills"===a,handleItemClick:t}),l.a.createElement(E,{name:"others",active:"others"===a,handleItemClick:t})))},p=t(306),b=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleItemClick=function(e,a){var t=a.name,l=n.props.history;n.setState({activeItem:t}),l.push("/portfolio/".concat(t))},n.state={activeItem:""},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return l.a.createElement("div",null,l.a.createElement(p.a,Object.assign({as:u.a.Item},p.a.onlyComputer,p.a.onlyLargeScreen,p.a.onlyTablet,{minWidth:p.a.onlyComputer.minWidth,maxWidth:p.a.onlyComputer.maxWidth}),l.a.createElement(h,{activeItem:e,handleItemClick:this.handleItemClick})),l.a.createElement(p.a,Object.assign({as:u.a.Item},p.a.onlyMobile,{minWidth:p.a.onlyMobile.minWidth,maxWidth:p.a.onlyMobile.maxWidth}),l.a.createElement(g,{activeItem:e,handleItemClick:this.handleItemClick})))}}]),t}(n.Component),k=t(305),f=t(303),C=t(301),v=t(140),I=function(e){var a=e.floated,t=e.size,r=e.src,c=e.circular;return l.a.createElement(n.Fragment,null,l.a.createElement(v.a,{floated:a,size:t,src:r,circular:c}))},w=function(e){var a=e.header,t=e.meta,r=e.description,c=e.extraContentMeta,o=e.extraContent,i=e.itemsPerRow,m=e.color,s=e.fluid,d=e.centered,u=e.imageFloated,E=e.imageSize,h=e.imageSrc,g=e.imageCircular,p=e.children;return l.a.createElement(n.Fragment,null,l.a.createElement(C.a.Group,{itemsPerRow:i},l.a.createElement(C.a,{color:m,centered:d,fluid:s,raised:!0},l.a.createElement(C.a.Content,null,l.a.createElement(I,{floated:u,size:E,src:h,circular:g}),l.a.createElement(C.a.Header,null,a),l.a.createElement(C.a.Description,null,r),l.a.createElement(C.a.Meta,null,t)),l.a.createElement(C.a.Content,{extra:o},c),l.a.createElement(C.a.Content,null,p))))},S=function(e){var a=Object(k.e)(),t=l.a.createElement("div",null,"I am Self Taught Developer with ",l.a.createElement("br",null),"Bachelor's Degree in ",l.a.createElement("br",null),"Computer Engineering from Alpha College");return l.a.createElement("div",{className:"padding"},l.a.createElement(w,{header:"Anuj B. Raval",centered:!0,description:"MERN Stack Developer",imageFloated:"left",imageSize:"medium",imageCircular:!0,imageSrc:"https://avatars1.githubusercontent.com/u/17050077?s=460&u=708e6c60fb62d55625c233eab0aba40d2c048998&v=4",extraContent:!0,extraContentMeta:t},l.a.createElement(f.a,{fluid:!0,size:"large",icon:"code",onClick:function(){return a.push("/portfolio/connectVia")},content:"Connect Via Platforms"})))},z=t(302),A=t(89),x=t(61),R=t(304),y=t(298),j=t(29),T=t(300),P=t(144),M=function(e){var a=e.to,t=e.target,n=e.download,r=e.children;return l.a.createElement("a",{href:a,target:t,download:n},r)},D=function(e){var a=[l.a.createElement("div",null,"An Android Application ",l.a.createElement("br",null),"based on Real Time Object Translation")],t=["It is built using NodeJS, ExpressJS, ","MongoDB, Mongoose JS, SendGrid, JWT.IO"],n=l.a.createElement(z.a,{header:"Features",list:["ExpressJS framework","MongoDB as Database, Connection via MongooseJS","Code Compiling with Babel 7","Custom Middleware for Authentication JWT.IO & Role Based Authorization","Request Validator Custom Middleware @hapi/joi","Twilio Service for OTP Send & Verify","File Upload System via Multer Configuration","Thumbnail Generator with GraphicsMagick and ImageMagick","Code Formatting with Prettier"]});return l.a.createElement("div",{className:"padding"},l.a.createElement(C.a,{raised:!0,centered:!0,fluid:!0},l.a.createElement(A.a,{padded:!0,raised:!0,attached:!0,piled:!0},l.a.createElement(x.a,{attached:"top",size:"large"},"Projects"),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h2",textAlign:"center",content:"Things Translator"}),l.a.createElement(y.a,null),l.a.createElement(z.a,{list:a,key:Math.random()}),l.a.createElement(y.a,null),l.a.createElement(j.a,{size:"big",name:"android"}),l.a.createElement(M,{to:"https://github.com/Anujraval24/ThingsTranslator",target:"_blank"},l.a.createElement(x.a,{as:"a",circular:!0,content:"Github Repo",icon:"github",color:"black"}))),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h2",textAlign:"center",content:"User Authentication"}),l.a.createElement(y.a,null),l.a.createElement(z.a,null,t),l.a.createElement(z.a,{header:"Features",list:["User Signup via Email | Phone ( OTP )","User Login","Forgot Password via Email | Phone","Reset Password","Change Password"]}),l.a.createElement(y.a,null),l.a.createElement(j.a,{size:"big",name:"node"}),l.a.createElement(j.a,{size:"big",name:"node js"}),l.a.createElement(M,{to:"https://github.com/Anujraval24/UserAuthentication",target:"_blank"},l.a.createElement(x.a,{as:"a",circular:!0,content:"Github Repo",icon:"github",color:"black"}))),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h2",textAlign:"center",content:"Node JS REST-API Structure"}),l.a.createElement(y.a,null),n,l.a.createElement(y.a,null),l.a.createElement(j.a,{size:"big",name:"node"}),l.a.createElement(j.a,{size:"big",name:"node js"}),l.a.createElement(M,{to:"https://github.com/Anujraval24/nodejs-api-boilerplate",target:"_blank"},l.a.createElement(x.a,{as:"a",circular:!0,content:"Github Repo ( PRIVATE ) ",icon:"github",color:"black"}))),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h2",textAlign:"center",content:"Portfolio In React"}),l.a.createElement(y.a,null),l.a.createElement(z.a,{content:"Create React App & React Semantic UI"}),l.a.createElement(j.a,{size:"big",name:"react"}),l.a.createElement(j.a,{size:"big",name:"js"}),l.a.createElement(M,{to:"https://github.com/Anujraval24/portfolio",target:"_blank"},l.a.createElement(x.a,{as:"a",circular:!0,content:"Github Repo",icon:"github",color:"black"}))),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h2",textAlign:"center",content:"Recipe Web Application"}),l.a.createElement(y.a,null),l.a.createElement(T.a,{relaxed:!0,animated:!0,size:"large",selection:!0,divided:!0},l.a.createElement(P.a,{divided:!0,doubling:!0,stackable:!0,padded:!0},l.a.createElement(P.a.Row,null,l.a.createElement(P.a.Column,{width:8},l.a.createElement(T.a.Item,null,l.a.createElement(T.a.Content,null,l.a.createElement(T.a.Header,null,"Backend"),l.a.createElement(T.a.Description,null,"Node JS | Express JS"),l.a.createElement(T.a.Description,null,"MongoDB | MongoDB Atlas Cloud"),l.a.createElement(T.a.Description,null,"Authentication | JWT | Cookies")))),l.a.createElement(P.a.Column,{width:8},l.a.createElement(T.a.Item,null,l.a.createElement(T.a.Content,null,l.a.createElement(T.a.Header,null,"FrontEnd"),l.a.createElement(T.a.Description,null,"React JS | Hooks | Context"),l.a.createElement(T.a.Description,null,"React Semantic UI"),l.a.createElement(T.a.Description,null,"Axios Fetch Context"),l.a.createElement(T.a.Description,null,"Authentication Context | JWT | Cookies"))))))),l.a.createElement(z.a,null,l.a.createElement(z.a.Header,null,"Features"),l.a.createElement(z.a.List,null,l.a.createElement(T.a,{as:"ul"},l.a.createElement(T.a.Item,{as:"li"},"Anyone Can View The Posted Recipes"),l.a.createElement(T.a.Item,{as:"li"},"User Can",l.a.createElement(T.a.List,{as:"ul"},l.a.createElement(T.a.Item,{as:"li"},"Signup via Email | Username"),l.a.createElement(T.a.Item,{as:"li"},"Login via Email | Username"),l.a.createElement(T.a.Item,{as:"li"},"Forgot Password via Email | Username"),l.a.createElement(T.a.Item,{as:"li"},"Reset Password"),l.a.createElement(T.a.Item,{as:"li"},"Change Password"),l.a.createElement(T.a.Item,{as:"li"},"Update Their Profile"),l.a.createElement(T.a.Item,{as:"li"},"Post New Recipe"),l.a.createElement(T.a.Item,{as:"li"},"Save, Like a Recipe"),l.a.createElement(T.a.Item,{as:"li"},"View | Edit All Their Posted Recipes"),l.a.createElement(T.a.Item,{as:"li"},"Add | Search New Tags, Categories"),l.a.createElement(T.a.Item,{as:"li"},"Comment on other Users Recipes")))))),l.a.createElement(A.a,null,l.a.createElement(R.a,{content:"Repositories & App URLs"}),l.a.createElement(P.a,{doubling:!0,divided:!0,stackable:!0},l.a.createElement(P.a.Row,null,l.a.createElement(P.a.Column,{width:8},l.a.createElement(M,{to:"https://github.com/Anujraval24/recipe-app-backend-nodejs",target:"_blank"},l.a.createElement(x.a,{as:"a",circular:!0,content:"Backend Github Repo ( PRIVATE )",size:"large",icon:"github",color:"black"}))),l.a.createElement(P.a.Column,{width:8},l.a.createElement(M,{to:"https://recipe-appapi.herokuapp.com/api-docs",target:"_blank"},l.a.createElement(x.a,{as:"a",circular:!0,content:"Backend Swagger API",icon:"file code",size:"large",color:"black"})))),l.a.createElement(P.a.Row,null,l.a.createElement(P.a.Column,{width:8},l.a.createElement(M,{to:"https://github.com/Anujraval24/recipe-app-frontend-react-context-hook",target:"_blank"},l.a.createElement(x.a,{as:"a",circular:!0,content:"Frontend Github Repo ( PRIVATE )",size:"large",icon:"github",color:"black"}))),l.a.createElement(P.a.Column,{width:8},l.a.createElement(M,{to:"http://recipe-appreact.herokuapp.com/",target:"_blank"},l.a.createElement(x.a,{as:"a",circular:!0,content:"Frontend React App",icon:"react",size:"large",color:"black"}))))),l.a.createElement(y.a,null),l.a.createElement(j.a,{size:"big",name:"node"}),l.a.createElement(j.a,{size:"big",name:"node js"}),l.a.createElement(j.a,{size:"big",name:"react"}),l.a.createElement(j.a,{size:"big",name:"js"}))))))},F=function(e){var a=e.name,t=e.link,r=e.as,c=e.size;return l.a.createElement(n.Fragment,null,l.a.createElement(j.a,{name:a,as:r,link:t,size:c}))},W=function(e){return l.a.createElement("div",{className:"padding"},l.a.createElement(C.a,{raised:!0,centered:!0,fluid:!0},l.a.createElement(A.a,{padded:!0,raised:!0,attached:!0,piled:!0},l.a.createElement(x.a,{attached:"top",size:"large"},"Work Experience"),l.a.createElement(R.a,{as:"h1",textAlign:"center",content:"DOT InfoTech"}),l.a.createElement(x.a,null,l.a.createElement(F,{name:"calendar alternate outline"}),"Working Years",l.a.createElement(x.a.Detail,null,"09/2018 - 12/2020")),l.a.createElement(y.a,null),l.a.createElement(T.a,{relaxed:!0,animated:!0,size:"huge",selection:!0,divided:!0},l.a.createElement(A.a,{raised:!0},l.a.createElement(T.a.Item,null,l.a.createElement(T.a.Content,null,l.a.createElement(T.a.Header,null,l.a.createElement(T.a.Icon,{size:"huge",name:"node"}),l.a.createElement(T.a.Icon,{size:"huge",name:"node js"}),l.a.createElement(T.a.Icon,{size:"huge",name:"react"}),l.a.createElement(T.a.Icon,{size:"huge",name:"js"})),l.a.createElement(T.a.Description,null,"Worked On Multiple Client Projects - Admin Panel, API & Website")))),l.a.createElement(A.a,{raised:!0},l.a.createElement(T.a.Item,null,l.a.createElement(T.a.Content,null,l.a.createElement(T.a.Header,null,l.a.createElement(T.a.Icon,{size:"big",name:"code"})," GraphQL"),l.a.createElement(T.a.Description,null,"Worked on Project where I, wrote Automated Test Cases with JEST for GraphQL Service, Implemented Prisma.")))),l.a.createElement(A.a,{raised:!0},l.a.createElement(T.a.Item,null,l.a.createElement(T.a.Content,null,l.a.createElement(T.a.Header,null,l.a.createElement(T.a.Icon,{size:"huge",name:"node"}),l.a.createElement(T.a.Icon,{size:"huge",name:"node js"})),l.a.createElement(T.a.Description,null,"Designed, Architected of Backend Node JS API Structure"," ",l.a.createElement("br",null),"with using Express JS, MongoDB ( Mongoose JS ), Babel 7, Swagger UI, ES6 syntax, @hapi/joi")))),l.a.createElement(A.a,{raised:!0},l.a.createElement(T.a.Item,null,l.a.createElement(T.a.Content,null,l.a.createElement(T.a.Header,null,l.a.createElement(T.a.Icon,{size:"huge",name:"node"}),l.a.createElement(T.a.Icon,{size:"huge",name:"node js"}),l.a.createElement(T.a.Icon,{size:"huge",name:"react"}),l.a.createElement(T.a.Icon,{size:"huge",name:"js"})),l.a.createElement(T.a.Description,null,"Worked an E-Commerce Website & API",l.a.createElement("br",null),"where I, implemented functionlity of Product on Backend Side"," ",l.a.createElement("br",null)," & Cart functionlity, Payment Method of Stripe, PayPal on FrontEnd Side"))))))))},O=function(e){return l.a.createElement("div",{className:"padding"},l.a.createElement(C.a,{raised:!0,centered:!0,fluid:!0},l.a.createElement(A.a,{padded:!0,raised:!0,attached:!0,piled:!0},l.a.createElement(x.a,{attached:"top",size:"large"},"Education"),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h2",image:"https://react.semantic-ui.com/images/icons/school.png",textAlign:"center",content:"Bachelor's Degree"}),l.a.createElement(R.a,{as:"h4"},"in Computer Engineering From Alpha College Of Engg. & Tech."),l.a.createElement(y.a,null),l.a.createElement(T.a,{horizontal:!0,animated:!0,relaxed:!0,floated:!0,celled:!0},l.a.createElement(T.a.Item,null,l.a.createElement(T.a.Icon,{name:"calendar alternate outline",size:"big"}),l.a.createElement(T.a.Content,null,l.a.createElement(T.a.Header,null,"11/2014 \u2013 05/2018"))),l.a.createElement(T.a.Item,null,l.a.createElement(T.a.Icon,{name:"graduation",size:"big"}),l.a.createElement(T.a.Content,null,l.a.createElement(T.a.Header,null,"8.11 CPI"))),l.a.createElement(T.a.Item,null,l.a.createElement(T.a.Icon,{name:"code",size:"big"}),l.a.createElement(T.a.Content,null,"Final Year Project",l.a.createElement(T.a.Header,null,l.a.createElement(M,{to:"https://github.com/Anujraval24/ThingsTranslator",target:"_blank"},l.a.createElement(T.a.Icon,{name:"github circle",size:"big",color:"black"}),"Things Translator")))))),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h2",image:"https://react.semantic-ui.com/images/icons/school.png",textAlign:"center",content:"Higher Secondary School SC"}),l.a.createElement(R.a,{as:"h4"},"KGT Sadhana Vinay Mandir"),l.a.createElement(y.a,null),l.a.createElement(T.a,{horizontal:!0,animated:!0,relaxed:!0},l.a.createElement(T.a.Item,null,l.a.createElement(T.a.Icon,{name:"calendar alternate outline",size:"big"}),l.a.createElement(T.a.Content,null,l.a.createElement(T.a.Header,null,"2012 \u2013 2014"))))),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h2",image:"https://react.semantic-ui.com/images/icons/school.png",textAlign:"center",content:"Secondary School SC"}),l.a.createElement(R.a,{as:"h4"},"KGT Sadhana Vinay Mandir"),l.a.createElement(y.a,null),l.a.createElement(T.a,{horizontal:!0,animated:!0,relaxed:!0},l.a.createElement(T.a.Item,null,l.a.createElement(T.a.Icon,{name:"calendar alternate outline",size:"big"}),l.a.createElement(T.a.Content,null,l.a.createElement(T.a.Header,null,"2010 \u2013 2012"))))))))},G=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(C.a,{raised:!0,centered:!0,fluid:!0},l.a.createElement(A.a,{padded:!0,raised:!0,attached:!0,piled:!0},l.a.createElement(x.a,{attached:"top",size:"large",content:"Technical Skills | Tools"}),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(x.a,{size:"large",attached:"top",content:"JavaScript Frameworks",icon:"js square"}),l.a.createElement(P.a,{divided:!0,doubling:!0},l.a.createElement(P.a.Row,{columns:2},l.a.createElement(P.a.Column,null,l.a.createElement(x.a,{size:"large",icon:"node js",content:"Node JS"})),l.a.createElement(P.a.Column,null,l.a.createElement(x.a,{size:"large",content:"React JS",icon:"react js"}))),l.a.createElement(P.a.Row,{columns:2},l.a.createElement(P.a.Column,null,l.a.createElement(x.a,{size:"large",icon:"node",content:"Express JS"})),l.a.createElement(P.a.Column,null,l.a.createElement(x.a,{size:"large",content:"Redux, Redux-Saga"}))))),l.a.createElement(A.a,null,l.a.createElement(x.a,{size:"large",attached:"top",content:"Web Design"}),l.a.createElement(P.a,{divided:!0,doubling:!0},l.a.createElement(P.a.Row,{columns:2},l.a.createElement(P.a.Column,null,l.a.createElement(x.a,{size:"large",icon:"html5",content:"HTML"})),l.a.createElement(P.a.Column,null,l.a.createElement(x.a,{size:"large",icon:"sass",content:"SCSS"}))),l.a.createElement(P.a.Row,{columns:2},l.a.createElement(P.a.Column,null,l.a.createElement(x.a,{size:"large",content:"Material-UI"})),l.a.createElement(P.a.Column,null,l.a.createElement(x.a,{size:"large",content:"Semantic-UI"}))))),l.a.createElement(A.a,null,l.a.createElement(x.a,{size:"large",attached:"top",content:"Database",icon:"database"}),l.a.createElement(P.a,{divided:!0,doubling:!0},l.a.createElement(P.a.Row,{columns:2},l.a.createElement(P.a.Column,{width:8},l.a.createElement(x.a,{size:"large",icon:"server",content:"MongoDB"})),l.a.createElement(P.a.Column,{width:8},l.a.createElement(x.a,{size:"large",icon:"hdd",content:"MySQL"}))),l.a.createElement(P.a.Row,{columns:2},l.a.createElement(P.a.Column,{width:8},l.a.createElement(x.a,{size:"large",content:"ODM: Mongoose JS"})),l.a.createElement(P.a.Column,{width:8},l.a.createElement(x.a,{size:"large",content:"ORM: Sequelize"}))))),l.a.createElement(A.a,null,l.a.createElement(x.a,{size:"large",attached:"top",content:"Others"}),l.a.createElement(P.a,{divided:!0,doubling:!0},l.a.createElement(P.a.Row,{columns:2},l.a.createElement(P.a.Column,{width:8},l.a.createElement(x.a,{size:"large"},l.a.createElement(j.a,{name:"npm",size:"large"}),l.a.createElement("br",null),"Package Manager: yarn | npm")),l.a.createElement(P.a.Column,{width:8},l.a.createElement(x.a,{size:"large",content:""},l.a.createElement(j.a,{name:"database",size:"large"}),l.a.createElement(j.a,{name:"lock",size:"large"}),l.a.createElement(j.a,{name:"aws",size:"large"}),l.a.createElement(y.a,null),"Services: MongoDB Cloud Atlas, Auth0, Serverless"))),l.a.createElement(P.a.Row,{columns:2},l.a.createElement(P.a.Column,null,l.a.createElement(x.a,{size:"large"},l.a.createElement(j.a,{name:"github",size:"large"}),l.a.createElement(j.a,{name:"git",size:"large"}),l.a.createElement(j.a,{name:"bitbucket square",size:"large"}),l.a.createElement(y.a,null),"Project Management: JIRA, Bitbucket, Github, GIT")),l.a.createElement(P.a.Column,null,l.a.createElement(x.a,{size:"large"},l.a.createElement(j.a,{name:"code",size:"large"}),l.a.createElement(j.a,{name:"file code",size:"large"}),l.a.createElement(j.a,{name:"windows",size:"large"}),l.a.createElement(y.a,null),"Tools: Postman, DBeaver, MongoDB Compass, Swagger UI, VSCode",l.a.createElement(y.a,null),"OS: Windows 10, Ubuntu 18.04"))))))))},H=t(307),U=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h3",textAlign:"center",content:"Smart India Hackathon 2017",subheader:"Smart India Hackthon"}),l.a.createElement(y.a,null),l.a.createElement(M,{to:"https://drive.google.com/file/d/1p9Sa8oRyLFsn91XBtl-xrQswRMbXUO8K/view?usp=sharing",target:"_blank"},l.a.createElement(x.a,{as:"a",basic:!0,content:"See Certificate",color:"black"}))),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h3",textAlign:"center",content:"Ethical Hacking Certificate",subheader:"ALPHA COLLEGE OF ENGG. & TECH., KHATRAJ, KALOL 051"}),l.a.createElement(y.a,null),l.a.createElement(M,{to:"https://drive.google.com/file/d/1pQHgo7hkArcypGWEgjFUe8Fm_U5nkUFs/view?usp=sharing",target:"_blank"},l.a.createElement(x.a,{as:"a",basic:!0,content:"See Certificate",color:"black"}))),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h3",textAlign:"center",content:"Invent-O-Fest",subheader:"ALPHA COLLEGE OF ENGG. & TECH., KHATRAJ, KALOL 051"}),l.a.createElement(y.a,null),l.a.createElement(M,{to:"https://drive.google.com/file/d/13QySV0U-a-nF1DiRl47PsUuS3W5Z155B/view?usp=sharing",target:"_blank"},l.a.createElement(x.a,{as:"a",basic:!0,content:"See Certificate",color:"black"}))),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h3",textAlign:"center",content:"GIS - Girlscript India Summit",subheader:"GirlScript Foundation"})),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h3",textAlign:"center",content:"Image Processing Workshop",subheader:"Technofora\u201917, Nirma University"})),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h3",textAlign:"center",content:"I-Entrepreneur",subheader:"LD college of Engineering and Technology"})),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h3",textAlign:"center",content:"OWASP Gandhinagar Meetup Seminar on Web and Cyber Security",subheader:"Mozilla Gujarat"})))},J=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h3",textAlign:"center",content:"Facebook Developer Circle: #HackDayAhm",subheader:"Role: Team Developer"}),l.a.createElement(z.a,{content:"Facebook Development Circle Hackday at Icreate campus, Devdholera - Our team project was selected as Best Innovated Idea and its Implementation"})),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h3",textAlign:"center",content:"MyCroft AI",subheader:"Mycroft is the world\u2019s first open source voice assistant."}),l.a.createElement(z.a,{content:"Artificial Intelligence in Raspberry Pi using open source APIs (MIMIC TTS Engine, STS libraries)"}),l.a.createElement(M,{to:"https://mycroft.ai",target:"_blank"},l.a.createElement(x.a,{as:"a",basic:!0,content:"https://mycroft.ai",color:"black"}))),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h3",textAlign:"center",content:"Hacktoberfest",subheader:"Hackthon organized by Digital Ocean, Twilio, GitHub Every October"}),l.a.createElement(M,{to:"https://hacktoberfest.digitalocean.com/",target:"_blank"},l.a.createElement(x.a,{as:"a",basic:!0,content:"https://hacktoberfest.digitalocean.com",color:"black"}))),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(R.a,{as:"h3",textAlign:"center",content:"GirlScript Foundation",subheader:"Role: Team Developer"})))},B=[{menuItem:{key:"certifications",icon:"certificate",content:"Certifications"},render:function(){return l.a.createElement(H.a.Pane,null,l.a.createElement(U,null))}},{menuItem:{key:"os",icon:"terminal",content:"Open Source Contributions"},render:function(){return l.a.createElement(H.a.Pane,null,l.a.createElement(J,null))}}],L=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(P.a,{raised:!0,doubling:!0,columns:1},l.a.createElement(P.a.Row,null,l.a.createElement(P.a.Column,null,l.a.createElement(A.a,{raised:!0,piled:!0},l.a.createElement(H.a,{grid:{paneWidth:12,tabWidth:4},menu:{fluid:!0,pointing:!0,secondary:!0},panes:B}))))))},_=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(C.a,{raised:!0,centered:!0,fluid:!0},l.a.createElement(A.a,{padded:!0,raised:!0,attached:!0,piled:!0},l.a.createElement(x.a,{attached:"top",size:"large"},"Connect Via"),l.a.createElement(A.a,{padded:!0,raised:!0},l.a.createElement(P.a,{divided:!0,doubling:!0,relaxed:!0,stackable:!0},l.a.createElement(P.a.Row,{columns:3},l.a.createElement(P.a.Column,null,l.a.createElement(M,{to:"mailto:anujraval24@gmail.com",target:"_blank"},l.a.createElement(f.a,{color:"blue",fluid:!0,icon:"mail",content:"Gmail"}))),l.a.createElement(P.a.Column,null,l.a.createElement(M,{to:"https://github.com/Anujraval24",target:"_blank"},l.a.createElement(f.a,{color:"black",fluid:!0,icon:"github",content:"Github"}))),l.a.createElement(P.a.Column,null,l.a.createElement(M,{to:"https://www.linkedin.com/in/anujraval",target:"_blank"},l.a.createElement(f.a,{color:"linkedin",fluid:!0,icon:"linkedin",content:"Linkedin"})))),l.a.createElement(P.a.Row,{columns:4},l.a.createElement(P.a.Column,null,l.a.createElement(M,{to:"https://twitter.com/annujraval",target:"_blank"},l.a.createElement(f.a,{color:"twitter",icon:"twitter",fluid:!0,content:"Twitter"}))),l.a.createElement(P.a.Column,null,l.a.createElement(M,{to:"https://www.instagram.com/annujraval",target:"_blank"},l.a.createElement(f.a,{color:"instagram",content:"Personal",icon:"instagram",fluid:!0}))),l.a.createElement(P.a.Column,null,l.a.createElement(x.a,{content:"Cooking Page",pointing:"below",size:"large",color:"blue"}),l.a.createElement(P.a,{columns:2,divided:!0},l.a.createElement(P.a.Row,null,l.a.createElement(P.a.Column,null,l.a.createElement(M,{to:"https://www.instagram.com/anujr.cooks",target:"_blank"},l.a.createElement(f.a,{color:"instagram",icon:"instagram",fluid:!0}))),l.a.createElement(P.a.Column,null,l.a.createElement(M,{to:"https://www.facebook.com/Anuj.cooks",target:"_blank"},l.a.createElement(f.a,{color:"facebook",icon:"facebook",fluid:!0})))))),l.a.createElement(P.a.Column,null,l.a.createElement(M,{to:"https://join.skype.com/invite/pwoxo0zCNpSS",target:"_blank"},l.a.createElement(f.a,{color:"blue",icon:"skype",fluid:!0,content:"Skype"})))))))))},N=function(e){var a=e.history;return l.a.createElement(k.c,{history:a},l.a.createElement(k.d,null,l.a.createElement(k.a,{exact:!0,from:"/",to:"/portfolio/aboutMe"}),l.a.createElement(k.a,{exact:!0,from:"/portfolio/",to:"/portfolio/aboutMe"}),l.a.createElement(k.b,{exact:!0,path:"/portfolio/aboutMe",component:S}),l.a.createElement(k.b,{exact:!0,path:"/portfolio/workExperience",component:W}),l.a.createElement(k.b,{exact:!0,path:"/portfolio/projects",component:D}),l.a.createElement(k.b,{exact:!0,path:"/portfolio/education",component:O}),l.a.createElement(k.b,{exact:!0,path:"/portfolio/connectVia",component:_}),l.a.createElement(k.b,{exact:!0,path:"/portfolio/others",component:L}),l.a.createElement(k.b,{exact:!0,path:"/portfolio/technicalSkills",component:G})))},V=Object(o.a)();var K=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,{history:V}),l.a.createElement(N,{history:V}))},Q=(t(293),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function q(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/portfolio","/service-worker.js");Q?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(a,e)}))}}()}},[[153,1,2]]]);
//# sourceMappingURL=main.b1fc16c2.chunk.js.map