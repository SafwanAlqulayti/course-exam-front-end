(this.webpackJsonpcourse=this.webpackJsonpcourse||[]).push([[0],{128:function(e,t){},130:function(e,t,a){e.exports=a(307)},135:function(e,t,a){},307:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(68),r=a.n(c),s=(a(135),a(9)),o=a(7),i=a(25),u=(a(121),Object(n.createContext)());function m(){return Object(n.useContext)(u)}var d=a(2),E=a(3),p=a(5),h=a(4),v=a(6),f=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar main-nav border-less fixed-top navbar-expand-lg p-0"},l.a.createElement("div",{class:"container-fluid p-0"},l.a.createElement("a",{class:"ticket",href:"index.html"},l.a.createElement("span",null," EASY LEARN")),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"fa fa-bars"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{class:"navbar-nav mx-auto"},l.a.createElement("li",{class:"nav-item dropdown active dropdown-slide"},l.a.createElement(o.b,{to:"/",class:"nav-link"},"Home  ",l.a.createElement("span",null,"/"))),l.a.createElement("li",{class:"nav-item"},l.a.createElement(o.b,{to:"/myinfo",class:"nav-link",href:"speakers.html"},"MyInfo ",l.a.createElement("span",null,"/"))),l.a.createElement("li",{class:"nav-item dropdown dropdown-slide"},l.a.createElement("a",{class:"nav-link",href:"#","data-toggle":"dropdown"},"Pages",l.a.createElement("span",null,"/")),l.a.createElement("div",{class:"dropdown-menu"},l.a.createElement("a",{class:"dropdown-item"},"About Us"),l.a.createElement("a",{class:"dropdown-item"},"Single Instructor"),l.a.createElement("a",{class:"dropdown-item"},"Pricing"))),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link"},"Schedule",l.a.createElement("span",null,"/"))),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link"},"Contact"))),l.a.createElement(o.b,{to:"/admin",class:"ticket"},l.a.createElement("span",null,"Sign Out ")))))))}}]),t}(n.Component),b=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar main-nav border-less fixed-top navbar-expand-lg p-0"},l.a.createElement("div",{class:"container-fluid p-0"},l.a.createElement("a",{class:"ticket",href:"index.html"},l.a.createElement("span",null," EASY LEARN")),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"fa fa-bars"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{class:"navbar-nav mx-auto"},l.a.createElement("li",{class:"nav-item dropdown active dropdown-slide"},l.a.createElement(o.b,{to:"/",class:"nav-link"},"Home  ",l.a.createElement("span",null,"/"))),l.a.createElement("li",{class:"nav-item dropdown dropdown-slide"},l.a.createElement("a",{class:"nav-link",href:"#","data-toggle":"dropdown"},"Pages",l.a.createElement("span",null,"/")),l.a.createElement("div",{class:"dropdown-menu"},l.a.createElement("a",{class:"dropdown-item"},"About Us"),l.a.createElement("a",{class:"dropdown-item"},"Single Instructor"),l.a.createElement("a",{class:"dropdown-item"},"Pricing"))),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link"},"Contact"))),l.a.createElement(o.b,{to:"/login",class:"ticket"},l.a.createElement("span",null,"Log IN ")))))))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={logedin:""},e}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("tokens")?(console.log("check the localll if"),this.setState({logedin:l.a.createElement(f,null)})):(console.log("ther is no token"),this.setState({logedin:l.a.createElement(b,null)}))}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.logedin)}}]),t}(n.Component),y=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("footer",{class:"subfooter"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-6 align-self-center"},l.a.createElement("div",{class:"copyright-text"},l.a.createElement("p",null,l.a.createElement("a",{href:"#"},"Easy learn")," \xa9 2017 All Right Reserved"))),l.a.createElement("div",{class:"col-md-6"},l.a.createElement("a",{href:"#",class:"to-top"},l.a.createElement("i",{class:"fa fa-angle-up"})))))))}}]),t}(n.Component),O=a(12),j=a.n(O),w=a(10),k=a.n(w),C=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={arr:[],checkRole:""},e}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(k.a.get("http://localhost:7000/users/").then((function(t){console.log(t.data),console.log("instrucot info "),e.setState({arr:t.data})})),localStorage.getItem("tokens")){var t=localStorage.getItem("tokens");console.log(t);var a=j()(t);console.log(a.user.role),this.setState({checkRole:a.user.role})}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("section",{class:"section speakers white"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12"},l.a.createElement("div",{class:"section-title"},l.a.createElement("h3",null,"Who ",l.a.createElement("span",{class:"alternate"},"Teaching?")),l.a.createElement("p",null,"Our great Instructors")))),l.a.createElement("div",{class:"row"},this.state.arr.map((function(t,a){return l.a.createElement("div",{class:"col-lg-3 col-md-4 col-sm-6"},l.a.createElement("div",{class:"speaker-item"},l.a.createElement("div",{class:"image"},l.a.createElement("img",{src:t.img,alt:"speaker",class:"img-fluid"}),l.a.createElement("div",{class:"primary-overlay"}),l.a.createElement("div",{class:"socials"},l.a.createElement("ul",{class:"list-inline"},l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fa fa-facebook"}))),l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fa fa-twitter"}))),l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fa fa-linkedin"}))),l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fa fa-pinterest"})))))),l.a.createElement("div",{class:"content text-center"},l.a.createElement("h5",null,l.a.createElement("a",{href:"single-speaker.html"},t.username)),"user"===e.state.checkRole?l.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){e.props.history.push("/oneinstructor/".concat(t._id))}},"See my courses"):console.log("test"),l.a.createElement("p",null,t.teaching))))}))))))}}]),t}(n.Component),S=Object(i.f)(C),A=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{class:"section pricing"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12"},l.a.createElement("div",{class:"section-title"},l.a.createElement("h3",null,"Get ",l.a.createElement("span",{class:"alternate"},"Start"))))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-4 col-md-6"},l.a.createElement("div",{class:"pricing-item"},l.a.createElement("div",{class:"pricing-heading"},l.a.createElement("div",{class:"title"},l.a.createElement("h6",null,"Starter")),l.a.createElement("div",{class:"price"},l.a.createElement("h2",null,"39.00",l.a.createElement("span",null,"$")))),l.a.createElement("div",{class:"pricing-body"},l.a.createElement("ul",{class:"feature-list m-0 p-0"},l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("span",{class:"fa fa-check-circle available"}),"access 5 courses")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("span",{class:"fa fa-times-circle unavailable"}),"Certificate")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("span",{class:"fa fa-times-circle unavailable"}),"Easy Access")))),l.a.createElement("div",{class:"pricing-footer text-center"},l.a.createElement("a",{href:"#",class:"btn btn-transparent-md"},"Register")))),l.a.createElement("div",{class:"col-lg-4 col-md-6"},l.a.createElement("div",{class:"pricing-item featured"},l.a.createElement("div",{class:"pricing-heading"},l.a.createElement("div",{class:"title"},l.a.createElement("h6",null,"Standard")),l.a.createElement("div",{class:"price"},l.a.createElement("h2",null,"49.00",l.a.createElement("span",null,"$")))),l.a.createElement("div",{class:"pricing-body"},l.a.createElement("ul",{class:"feature-list m-0 p-0"},l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("span",{class:"fa fa-check-circle available"}),"access 10 courses")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("span",{class:"fa fa-check-circle available"}),"Certificate")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("span",{class:"fa fa-times-circle unavailable"}),"Easy Access")))),l.a.createElement("div",{class:"pricing-footer text-center"},l.a.createElement("a",{href:"#",class:"btn btn-main-md"},"Register")))),l.a.createElement("div",{class:"col-lg-4 col-md-6 m-auto"},l.a.createElement("div",{class:"pricing-item"},l.a.createElement("div",{class:"pricing-heading"},l.a.createElement("div",{class:"title"},l.a.createElement("h6",null,"Platinum")),l.a.createElement("div",{class:"price"},l.a.createElement("h2",null,"99.00",l.a.createElement("span",null,"$")))),l.a.createElement("div",{class:"pricing-body"},l.a.createElement("ul",{class:"feature-list m-0 p-0"},l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("span",{class:"fa fa-check-circle available"}),"Access all courses")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("span",{class:"fa fa-check-circle available"}),"Certificate")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("span",{class:"fa fa-check-circle available"}),"Easy Access")))),l.a.createElement("div",{class:"pricing-footer text-center"},l.a.createElement("a",{href:"#",class:"btn btn-transparent-md"},"Register "))))))))}}]),t}(n.Component),x=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{class:"section about"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-4 col-md-6 align-self-center"},l.a.createElement("div",{class:"image-block bg-about"},l.a.createElement("img",{class:"img-fluid",src:"images/speakers/ceo.jpg",alt:""}))),l.a.createElement("div",{class:"col-lg-8 col-md-6 align-self-center"},l.a.createElement("div",{class:"content-block"},l.a.createElement("h2",null,"About The ",l.a.createElement("span",{class:"alternate"},"Easy Learn")),l.a.createElement("div",{class:"description-one"},l.a.createElement("p",null,"We are teaching valuable courses meeting the latest work environment skills to make our student qualified to the work and prebeard to develob ther selfs")),l.a.createElement("div",{class:"description-two"},l.a.createElement("p",null)),l.a.createElement("ul",{class:"list-inline"},l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("a",{href:"#",class:"btn btn-transparent-md"},"Read more")))))))))}}]),t}(n.Component);var N=function(e){return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement("section",{class:"banner-two bg-banner-two overlay-white-slant text-overlay"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-6"},l.a.createElement("div",{class:"block"},l.a.createElement("h1",null,"Easy learn center"),l.a.createElement("h3",null,"2017"),l.a.createElement("h6",null,"  Saudi Arabia")))))),l.a.createElement(S,null),l.a.createElement(x,null),l.a.createElement(A,null),l.a.createElement(y,null))},q=a(23),I=a(24);function T(){var e=Object(q.a)(["\n  background-color: red;\n"]);return T=function(){return e},e}function R(){var e=Object(q.a)(["\n  width: 50%;\n  margin-bottom: 1rem;\n"]);return R=function(){return e},e}function M(){var e=Object(q.a)(["\n  background: linear-gradient(to bottom, #6371c7, #5563c1);\n  border-color: #3f4eae;\n  border-radius: 3px;\n  padding: 1rem;\n  color: white;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n"]);return M=function(){return e},e}function L(){var e=Object(q.a)(["\n  padding: 1rem;\n  border: 1px solid #999;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;"]);return L=function(){return e},e}function z(){var e=Object(q.a)(["\npadding: 1rem;\n  border: 1px solid #999;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;"]);return z=function(){return e},e}function W(){var e=Object(q.a)(["\n  padding: 1rem;\n  border: 1px solid #999;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n"]);return W=function(){return e},e}function _(){var e=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return _=function(){return e},e}function U(){var e=Object(q.a)(["\n  box-sizing: border-box;\n  max-width: 410px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return U=function(){return e},e}var D=I.a.div(U()),P=I.a.div(_()),Q=I.a.input(W()),$=(I.a.select(z()),I.a.option(L()),I.a.button(M())),J=I.a.img(R()),B=I.a.div(T());var F=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],r=a[1],i=m().setAuthTokens;return c?l.a.createElement(o.a,{to:"/login"}):l.a.createElement("div",{id:"Admin"},l.a.createElement($,{onClick:function(){i(),window.localStorage.clear(),r(!0)}},"Log out"))},Y=a(46),G=a.n(Y),H=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={StudentCourses:[]},e}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("tokens"),a=j()(t).user._id;console.log(this.state.id),k.a.get("http://localhost:7000/users/".concat(a)).then((function(t){console.log(t.data.courses),e.setState({StudentCourses:t.data.courses})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){e.props.history.push("thequiz")}},"Take quiz"),l.a.createElement("h1",null,"My courses"),l.a.createElement("table",{class:"table    "},l.a.createElement("thead",{className:"thead-dark "},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Course Name"),l.a.createElement("th",{scope:"col"},"Category"))),this.state.StudentCourses.map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},t+1),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.category))})),l.a.createElement("tbody",null)))}}]),t}(n.Component),K=Object(i.f)(H);var V=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),u=Object(s.a)(r,2),d=u[0],E=u[1],p=Object(n.useState)(""),h=Object(s.a)(p,2),v=h[0],f=h[1],b=Object(n.useState)(""),g=Object(s.a)(b,2),y=g[0],O=g[1],j=m().setAuthTokens;return a?l.a.createElement(i.a,{to:"/"}):l.a.createElement(D,{id:"LoginCard"},l.a.createElement(J,{src:G.a}),l.a.createElement(P,null,l.a.createElement(Q,{type:"username",value:v,onChange:function(e){f(e.target.value)},placeholder:"username"}),l.a.createElement(Q,{type:"password",value:y,onChange:function(e){O(e.target.value)},placeholder:"password"}),l.a.createElement($,{onClick:function(){k.a.post("http://localhost:7000/users/login",{username:v,password:y}).then((function(e){200===e.status?(j(e.data.token),c(!0)):E(!0)})).catch((function(e){E(!0)}))}},"Sign In")),l.a.createElement(o.b,{to:"/signup"},"Don't have an account?"),d&&l.a.createElement(B,null,"The username or password provided were incorrect!"))},X=a(309),Z=a(310);var ee=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),u=Object(s.a)(r,2),d=(u[0],u[1]),E=Object(n.useState)(""),p=Object(s.a)(E,2),h=p[0],v=p[1],f=Object(n.useState)(""),b=Object(s.a)(f,2),g=b[0],y=b[1],O=Object(n.useState)(""),j=Object(s.a)(O,2),w=j[0],C=j[1],S=Object(n.useState)("instructor"),A=Object(s.a)(S,2),x=A[0],N=A[1],q=m().setAuthTokens;return a?l.a.createElement(i.a,{to:"/login"}):l.a.createElement(D,{id:"SignUpCard"},l.a.createElement(J,{src:G.a}),l.a.createElement(P,null,l.a.createElement(X.a,{required:!0,type:"username",value:h,onChange:function(e){v(e.target.value),console.log(h)},placeholder:"userName"}),l.a.createElement(X.a,{type:"email",value:g,onChange:function(e){y(e.target.value)},placeholder:"email"}),l.a.createElement(X.a,{type:"password",value:w,onChange:function(e){C(e.target.value)},placeholder:"password"}),l.a.createElement(Z.a,{for:"exampleSelect"},"Select"),l.a.createElement(X.a,{type:"select",name:"select",id:"exampleSelect",onChange:function(e){return N(e.target.value)}},l.a.createElement("option",null,"instructor"),l.a.createElement("option",null,"user")),l.a.createElement($,{onClick:function(){k.a.post("http://localhost:7000/users",{username:h,email:g,password:w,role:x,isLoggedIn:!1}).then((function(e){200===e.status?(e.preventDefault(),q(e.data),console.log(e.data),c(!0)):d(!0)})).catch((function(e){d(!0)}))}},"Sign Up")),l.a.createElement(o.b,{to:"/login"},"Already have an account?"))};var te=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),o=Object(s.a)(r,2),u=o[0],m=o[1],d=Object(n.useState)(),E=Object(s.a)(d,2),p=E[0],h=E[1],v=Object(n.useState)(!1),f=Object(s.a)(v,2),b=f[0],g=f[1];return a?l.a.createElement(i.a,{to:"/myinfo"}):l.a.createElement(D,{id:"AddCourse"},l.a.createElement(P,null,l.a.createElement(Q,{type:"courseName",value:u,onChange:function(e){m(e.target.value)},placeholder:"Course Name"}),l.a.createElement(Q,{type:"courseCategory",value:p,onChange:function(e){h(e.target.value)},placeholder:"Course Category"}),l.a.createElement($,{onClick:function(){var e=localStorage.getItem("tokens"),t=j()(e).user._id;k.a.post("http://localhost:7000/courses/".concat(t),{name:u,category:p}).then((function(e){200===e.status?c(!0):g(!0)})).catch((function(e){g(!0)}))}},"Add course")),b&&l.a.createElement(B,null,"The course did not added"))},ae=a(126),ne=a(29);var le=function(e){return l.a.createElement("h2",{className:"question"},e.content)};var ce=function(e){return l.a.createElement("div",{className:"questionCount"},"Question ",l.a.createElement("span",null,e.counter)," of ",l.a.createElement("span",null,e.total))};var re=function(e){return l.a.createElement("li",{className:"answerOption"},l.a.createElement("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:e.answerType===e.answer,id:e.answerType,value:e.answerType,disabled:e.answer,onChange:e.onAnswerSelected}),l.a.createElement("label",{className:"radioCustomLabel",htmlFor:e.answerType},e.answerContent))},se=a(47),oe=a.n(se);var ie=function(e){return l.a.createElement(oe.a,{className:"container",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},l.a.createElement("div",{key:e.questionId},l.a.createElement(ce,{counter:e.questionId,total:e.questionTotal}),l.a.createElement(le,{content:e.question}),l.a.createElement("ul",{className:"answerOptions"},e.answerOptions.map((function(t){return l.a.createElement(re,{key:t.content,answerContent:t.content,answerType:t.type,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected})})))))},ue=[{question:"Which one is a front end languge?",answers:[{type:"web development",content:"css"},{type:"back end",content:"java"},{type:"mobile development",content:"swift"}]},{question:"Which one is a backend programing language?",answers:[{type:"Microsoft",content:"css"},{type:"Nintendo",content:"html"},{type:"Sony",content:"ruby"}]},{question:"Which of these is a javascript framework?",answers:[{type:"web dev",content:"React"},{type:"web devv",content:"Angular"},{type:"web devvv",content:"Rails"}]},{question:"Which of these is a loop?",answers:[{type:"web dev",content:"For each"},{type:"web devv",content:"for"},{type:"web devvv",content:"both"}]},{question:"Which one of these is a code editor?",answers:[{type:"Miweb dev",content:"Atom"},{type:"web devv",content:"Mysql"},{type:"web devvv",content:"Python"}]}],me=a(127),de=a.n(me);var Ee=function(e){return l.a.createElement(oe.a,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},l.a.createElement("div",null,"You prefer ",l.a.createElement("strong",null,e.quizResult),"!"))},pe=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{nintendo:0,microsoft:0,sony:0},result:""},a.handleAnswerSelected=a.handleAnswerSelected.bind(Object(ne.a)(a)),a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=ue.map((function(t){return e.shuffleArray(t.answers)}));this.setState({question:ue[0].question,answerOptions:t[0]})}},{key:"shuffleArray",value:function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}},{key:"setUserAnswer",value:function(e){var t=de()(this.state.answersCount,Object(ae.a)({},e,{$apply:function(e){return e+1}}));this.setState({answersCount:t,answer:e})}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:ue[e].question,answerOptions:ue[e].answers,answer:""})}},{key:"handleAnswerSelected",value:function(e){var t=this;this.setUserAnswer(e.currentTarget.value),this.state.questionId<ue.length?setTimeout((function(){return t.setNextQuestion()}),300):setTimeout((function(){return t.setResults(t.getResults())}),300)}},{key:"getResults",value:function(){var e=this.state.answersCount,t=Object.keys(e),a=t.map((function(t){return e[t]})),n=Math.max.apply(null,a);return t.filter((function(t){return e[t]===n}))}},{key:"setResults",value:function(e){1===e.length?this.setState({result:e[0]}):this.setState({result:"Undetermined"})}},{key:"renderQuiz",value:function(){return l.a.createElement(ie,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:ue.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return l.a.createElement(Ee,{quizResult:this.state.result})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"React Quiz"),this.state.result?this.renderResult():this.renderQuiz())}}]),t}(n.Component),he=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).handleChangeName=function(t){e.setState({name:t.target.value}),console.log(e.state.name)},e.handleChangeCategory=function(t){e.setState({category:t.target.value}),console.log(e.state.name)},e.state={name:"",category:"",edited:!1},e}return Object(v.a)(t,e),Object(E.a)(t,[{key:"editCourse",value:function(){var e=this;k.a.put("http://localhost:7000/courses/".concat(this.props.match.params.id),{name:this.state.name,category:this.state.category}).then((function(t){console.log(t),console.log(e.state.name),e.setState({edited:!0}),e.chechEdited()}))}},{key:"chechEdited",value:function(){if(this.state.edited)return l.a.createElement(i.a,{to:"/myinfo"})}},{key:"render",value:function(){return console.log(this.props.match.params.id),l.a.createElement("div",null,l.a.createElement(D,{id:"AddCourse"},l.a.createElement(P,null,l.a.createElement(Q,{type:"courseName",onChange:this.handleChangeName,placeholder:"Course Name"}),l.a.createElement(Q,{type:"courseCategory",onChange:this.handleChangeCategory,placeholder:"Course Category"}),l.a.createElement($,{onClick:this.editCourse()},"Update course")),console.log(this.props.id),l.a.createElement("p",null,this.props.id)))}}]),t}(n.Component),ve=(a(170),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).addCourse=function(){return l.a.createElement(i.a,{to:"/addcourse"})},e.state={id:"",arr:[]},e}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("tokens"),a=j()(t).user._id;console.log("eeees"),console.log(this.state.id),k.a.get("http://localhost:7000/users/".concat(a)).then((function(t){console.log(t.data.courses),e.setState({arr:t.data.courses})}))}},{key:"deleteCourse",value:function(e){k.a.delete("http://localhost:7000/courses/".concat(e)).then((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){e.props.history.push("addcourse")}},"Add Course"),l.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){e.props.history.push("editinfo")}},"Edit profile "),l.a.createElement("h1",null,"My courses"),l.a.createElement("table",{className:"table table-hover table-striped"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Course Name"),l.a.createElement("th",{scope:"col"},"Category"),l.a.createElement("th",{scope:"col"},"Edit"),l.a.createElement("th",{scope:"col"},"Delete"))),this.state.arr.map((function(t,a){return l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},a+1),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.category),l.a.createElement("td",{hidden:!0},t._id),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-danger",onClick:function(){return e.deleteCourse(t._id)}},"Delete")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-success",onClick:function(){e.props.history.push("/editcourse/".concat(t._id))}},"Edit")))})),l.a.createElement("tbody",null))))}}]),t}(n.Component)),fe=Object(i.f)(ve),be=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={userID:" ",username:"",userRole:"",courses:[],Loged:"",secondState:""},e}return Object(v.a)(t,e),Object(E.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=localStorage.getItem("tokens");console.log(e);var t=j()(e);console.log(t.user.role),this.setState({userRole:t.user.role}),"instructor"===t.user.role?(console.log("in if"),this.setState({Loged:l.a.createElement(fe,null)})):(console.log("in else"),this.setState({Loged:l.a.createElement(K,null)}))}},{key:"render",value:function(){return l.a.createElement("div",{class:"modify"},this.state.Loged)}}]),t}(n.Component),ge=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null)}}]),t}(n.Component),ye=a(128),Oe=a.n(ye),je=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={name:"",coursesArr:[],studentCourses:[]},e.joinCourse=e.joinCourse.bind(),e}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){var e=this;k.a.get("http://localhost:7000/users/".concat(this.props.match.params.id)).then((function(t){console.log(t),e.setState({name:t.data.username,coursesArr:t.data.courses}),console.log(t)}))}},{key:"joinCourse",value:function(e){console.log(e);var t=localStorage.getItem("tokens"),a=j()(t),n=(a.user.courses.concat(e),a.user._id);console.log(n),k.a.put("http://localhost:7000/users/".concat(n,"/").concat(e),{courses:"k"}).then((function(e){console.log("saved",e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{class:"container news section ",id:"courses"},l.a.createElement("div",{class:"row mt-30"}),this.state.coursesArr.map((function(t,a){return l.a.createElement("div",{class:"col-lg-4 col-md-6 col-sm-8 col-10 m-auto"},l.a.createElement("div",{class:"blog-post"},l.a.createElement("div",{class:"post-thumb"},l.a.createElement("a",{href:"news-single.html"},l.a.createElement("img",{src:"../images/code.jpg",alt:"post-image",class:"img-fluid"}))),l.a.createElement("div",{class:"post-content"},l.a.createElement("div",{class:"date"},l.a.createElement("h4",null,"20",l.a.createElement("span",null,"May"))),l.a.createElement("div",{class:"post-title"},l.a.createElement("h2",null,l.a.createElement("a",{href:"news-single.html"}," ",t.name," ")),l.a.createElement("button",{type:"button",class:"btn btn-info",onClick:function(){return e.joinCourse(t._id)}},"Join Now")),l.a.createElement("div",{class:"post-meta"},l.a.createElement("ul",{class:"list-inline"},l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("i",{class:"fa fa-user-o"}),l.a.createElement("a",{href:"#"},"Admin")),l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("i",{class:"fa fa-heart-o"}),l.a.createElement("a",{href:"#"},"350")),l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("i",{class:"fa fa-comments-o"}),l.a.createElement("a",{href:"#"},"30")))))))})))}}]),t}(n.Component);var we=function(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),c=a[0],r=a[1];return l.a.createElement(u.Provider,{value:{authTokens:c,setAuthTokens:function(e){if(console.log(e),e){localStorage.setItem("tokens",JSON.stringify(e)),r(e);var t=localStorage.getItem("tokens"),a=j()(t);console.log(a)}else console.log("no data ")}}},l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement(i.b,{exact:!0,path:"/",component:N}),l.a.createElement(i.b,{path:"/login",component:V}),l.a.createElement(i.b,{path:"/myinfo",component:be}),l.a.createElement(i.b,{path:"/thequiz",component:pe}),l.a.createElement(i.b,{path:"/signup",component:ee}),l.a.createElement(i.b,{path:"/mycourses",component:ge}),l.a.createElement(i.b,{path:"/addcourse",component:te}),l.a.createElement(i.b,{path:"/editcourse/:id",render:function(e){return l.a.createElement(he,e)}}),l.a.createElement(i.b,{path:"/oneinstructor/:id",render:function(e){return l.a.createElement(je,e)}}),l.a.createElement(i.b,{path:"/instructor",component:fe}),l.a.createElement(i.b,{path:"/editinfo",component:Oe.a}),l.a.createElement(i.b,{path:"/admin",component:F}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(306);r.a.render(l.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e,t,a){e.exports=a.p+"static/media/logo.46aaeee7.jpg"}},[[130,1,2]]]);
//# sourceMappingURL=main.1d0260fb.chunk.js.map