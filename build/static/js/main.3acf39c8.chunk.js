(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,n){},231:function(e,t,n){e.exports=n(432)},243:function(e,t,n){},389:function(e,t,n){},392:function(e,t,n){},394:function(e,t,n){},396:function(e,t,n){},398:function(e,t,n){},425:function(e,t,n){},427:function(e,t,n){},430:function(e,t,n){},432:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),s=n.n(c),o=n(28);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(45),l=n(14),u="GET_USERS",A="GET_QUESTIONS",d="CURRENT_USER",m="SAVE_QUESTIONS",h="SAVE_CURRENT_QUESTION",p=Object(i.c)({getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===u?Object(l.a)({},t.payload):e},getQuestions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===A?Object(l.a)({},t.payload):e},saveQuestionAndAnswer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).type,e},saveQuestions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===m?t.payload:e},currentQuestions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===h?t.payload:e},currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===d?t.payload:e}}),v=n(206),O=function(){return Object(i.e)(p,Object(i.d)(Object(i.a)(v.a)))},E=n(33),f={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://tylermcginnis.com/would-you-rather/sarah.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionOne",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://tylermcginnis.com/would-you-rather/tyler.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://tylermcginnis.com/would-you-rather/dan.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionOne"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},j={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillian"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function b(e){return new Promise(function(t,n){var a=e.author,r=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout(function(){j=Object(l.a)({},j,Object(E.a)({},r.id,r)),f=Object(l.a)({},f,Object(E.a)({},a,Object(l.a)({},f[a],{questions:f[a].questions.concat([r.id])}))),t(r)},1e3)})}var g=function(){return function(e){new Promise(function(e,t){setTimeout(function(){return e(Object(l.a)({},f))},1e3)}).then(function(t){return e({type:u,payload:t})})}},x=function(){return function(e){return new Promise(function(e,t){setTimeout(function(){return e(Object(l.a)({},j))},1e3)}).then(function(t){return e({type:A,payload:t})})}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:d,payload:e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:h,payload:e}},N=function(e,t,n){return function(a){(function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise(function(e,r){setTimeout(function(){f=Object(l.a)({},f,Object(E.a)({},t,Object(l.a)({},f[t],{answers:Object(l.a)({},f[t].answers,Object(E.a)({},n,a))}))),j=Object(l.a)({},j,Object(E.a)({},n,Object(l.a)({},j[n],Object(E.a)({},a,Object(l.a)({},j[n][a],{votes:j[n][a].votes.concat([t])}))))),e({users:f})},500)})})({authedUser:e.id,qid:t.id,answer:n}).then(function(t){var n=t.users[e.id];a(y(n)),a(g()),a(x())})}},U=function(e){return function(t){b(e).then(function(e){return t(x())})}},z=n(15),T=n(16),Q=n(18),R=n(17),D=n(19),M=n(451),C=n(452),I=n(434),k=(n(145),n(63)),H=n.n(k),S=n(97),L=n(346),P=n(440),Y=n(449),B=(n(243),function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Q.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).state={defaultValue:"",disabled:!0},n.handleChange=function(){var e=Object(S.a)(H.a.mark(function e(t,a){var r,c,s,o,i;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.value,c=n.props,s=c.QuestionsData,o=c.dispatch,i=c.currentUser,e.next=4,o(N(i,s,r));case 4:n.setState(function(){return{defaultValue:r}});case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),n.clickedElement=function(e){n.props.dispatch(w(n.props.QuestionsData))},n}return Object(D.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentUser,n=e.QuestionsData,a=t.answers[n.id];this.setState(function(){return{defaultValue:a}})}},{key:"componentDidUpdate",value:function(e,t,n){var a=this.props,r=a.currentUser,c=a.QuestionsData,s=c.id,o=r.answers[s];e.currentUser.answers[s]!==r.answers[c.id]&&this.setState(function(){return{defaultValue:o,disabled:!1}})}},{key:"render",value:function(){var e=this.props.QuestionsData,t=this.state.disabled?"pointerNone":"pointerFill",n="/question/".concat(e.id,"/results");return r.a.createElement("div",null,r.a.createElement("section",{className:"section"},r.a.createElement("section",null,r.a.createElement("h3",{className:"alignCenter"},r.a.createElement("span",{className:"caps"},e.author)," asks would you rather....")),r.a.createElement("section",{className:"section h4",style:{marginTop:"10px"}},r.a.createElement(P.a,{radio:!0,label:e.optionOne.text,name:"checkboxRadioGroup",value:"optionOne",checked:"optionOne"===this.state.defaultValue,onChange:this.handleChange})),r.a.createElement("h3",{style:{fontFamily:"cursive",margin:0,textAlign:"center"}},"Or"),r.a.createElement("section",{className:"section h4",style:{marginTop:"10px"}},r.a.createElement(P.a,{radio:!0,label:e.optionTwo.text,name:"checkboxRadioGroup",checked:"optionTwo"===this.state.defaultValue,value:"optionTwo",onChange:this.handleChange})),r.a.createElement("section",{className:"flexContainer",style:{justifyContent:"flex-End"}},r.a.createElement(L.a,{to:n,className:t},r.a.createElement(Y.a,{color:"red",className:"fontWeight",onClick:this.clickedElement,disabled:this.state.disabled},"Poll Results")))))}}]),t}(a.Component)),G=n(447),X=n(44),q=n.n(X),V=function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Q.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).getDefaultvalue=function(e,t){var n=e.answers[t.id];return n||"default"},n}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props,t=e.QuestionData,n=e.currentUser,a=e.dispatch,c=e.getUsers[t.author].avatarURL,s=c||q.a;return r.a.createElement("div",{className:"questionContainer"},r.a.createElement("div",{className:"QuestionCardImage"},r.a.createElement(G.a,{color:"red",image:s,className:"semanticCard"})),r.a.createElement("div",{className:"QuestionsContent"},r.a.createElement(B,{QuestionsData:t,currentUser:n,dispatch:a,getDefaultvalue:this.getDefaultvalue})))}}]),t}(a.Component),F=n(75),J=n(441),W=(n(389),function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=Object(Q.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(c)))).state={},n.renderNavChild=function(e,t){var n=[];return e.forEach(function(e,a){var c=e.disabled?"navLinkSelectedDisabled":"navLinkSelected",s=e.avatarURL?r.a.createElement(F.a,{size:"40",round:"20px",name:e.name,src:e.avatarURL}):"";n.push(r.a.createElement("span",{className:t,key:t+a},r.a.createElement("span",{style:{marginRight:"5px"}},s),r.a.createElement(J.a,{exact:!0,to:e.link,activeClassName:c},e.name)))}),n},n}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navcontainer"},r.a.createElement("section",{className:"section"},"Would You Rather"),r.a.createElement("section",{className:"leftSection"},this.renderNavChild(this.props.navBarLeftSideData,"leftChild")),r.a.createElement("section",{className:"rightSection"},this.renderNavChild(this.props.navBarRightSideData,"rightChild")))}}]),t}(a.Component)),Z=function(e){var t=[{name:e.currentUser.name,avatarURL:e.currentUser.avatarURL,disabled:!0,link:"#"},{name:"Log Out",link:"/"}];return r.a.createElement(W,{navBarRightSideData:t,navBarLeftSideData:[{name:"home",link:"/home",side:"left"},{name:"Add Questions",link:"/add",side:"left"},{name:"LeaderBoard",link:"/LeaderBoard",side:"left"}]})},K=(n(392),n(450)),_=(n(394),function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Q.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).state={wait:!0},n}return Object(D.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.timer;setTimeout(function(){e.setState(function(){return{wait:!1}})},t)}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.url;return r.a.createElement("div",{className:"flexContainer"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"center"},t),r.a.createElement("div",{className:"center"},"Redirecting....."),r.a.createElement("span",{className:"unvisible"},!1===this.state.wait?function(e){return r.a.createElement("div",null,r.a.createElement(K.a,{exact:!0,to:e}))}(n):"")))}}]),t}(a.Component)),$=function(e){function t(){return Object(z.a)(this,t),Object(Q.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"flexContainer"},r.a.createElement(_,{message:"Need to  be logged in  inorder to access this webpage.",timer:"3000",url:"/"}))}}]),t}(a.Component),ee=function(e){function t(){return Object(z.a)(this,t),Object(Q.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentQuestions,n=e.currentUser,a=e.dispatch,c=e.getQuestions,s=e.getUsers,o=c[t.id];return n.id?r.a.createElement("div",null,r.a.createElement(Z,{currentUser:this.props.currentUser}),r.a.createElement("div",{className:"parentFlexBOx"},r.a.createElement("div",{className:"childFlexBox"},r.a.createElement(V,{QuestionData:o,key:t.id,currentUser:n,dispatch:a,getUsers:s})))):r.a.createElement("div",null,r.a.createElement($,{url:"/"}))}}]),t}(a.Component),te=Object(o.b)(function(e){return{currentUser:e.currentUser,currentQuestions:e.currentQuestions,getUsers:e.getUsers,getQuestions:e.getQuestions}})(ee),ne=function(e){return e.length},ae=function(e){var t=ne(Object.keys(e.users.answers)),n=ne(e.users.questions),a=e.users.avatarURL?e.users.avatarURL:q.a;return r.a.createElement("div",{className:"questionContainer ",style:{width:"40% !important"}},r.a.createElement("div",{className:"QuestionCardImage"},r.a.createElement(G.a,{color:"red",image:a,className:"semanticCard"})),r.a.createElement("div",{className:"QuestionsContent"},r.a.createElement("h3",null,e.users.name),r.a.createElement("div",{className:"fonting"},"Created Questions : ",n),r.a.createElement("div",{className:"fonting"},"Answered Questions : ",t),r.a.createElement("div",{className:"fonting moveRight"},"total : ",t+n)),".")},re=(n(396),function(e){return e.state.currentUser.name?r.a.createElement("div",null,r.a.createElement(Z,{currentUser:e.state.currentUser}),r.a.createElement("div",{className:"flexContainer",style:{margin:"0",flexDirection:"column"}},r.a.createElement("div",null,r.a.createElement("h2",{className:"headerStyle",style:{marginBottom:"20"}},"ScoreBoard")),r.a.createElement("div",{className:"QuestionTabontainer leaderBoard",style:{flexWrap:"wrap"}},function(e){var t=e.state.getUsers,n=t,a=Object.keys(n).sort(function(e,n){var a=t[e],r=t[n],c=Object.keys(a.answers).length+a.questions.length;return Object.keys(r.answers).length+r.questions.length-c}),c=[];return a.forEach(function(e){c.push(r.a.createElement(ae,{users:n[e],key:e}))}),c}(e)))):r.a.createElement("div",null,r.a.createElement($,{url:"/"}))}),ce=n(102),se=(n(398),function(e){var t=e.innerProps,n=e.innerRef;return r.a.createElement(ce.a.Option,e,r.a.createElement(L.a,{to:"/home"},r.a.createElement("div",Object.assign({className:"avatarContainer",ref:n},t),r.a.createElement(F.a,{name:e.label,size:"40",round:"4px"}),r.a.createElement("span",{style:{padding:"0 20px"}},e.label))))}),oe=function(e){var t=e.innerProps,n=e.innerRef;return r.a.createElement(ce.a.SingleValue,e,r.a.createElement("div",Object.assign({className:"",ref:n},t,{key:n}),r.a.createElement(F.a,{name:e.data.label,size:"30",round:"4px"}),r.a.createElement("span",{style:{padding:"0px 10px"}},e.data.label)))},ie=function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Q.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).state={},n.convertPropItems=function(e){return Object.keys(e).map(function(t){return Object(l.a)({},e[t],{label:e[t].name,value:e[t].id})})},n.handleChange=function(e){n.props.getcurrentUser(e)},n}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props.getUsers,t=this.convertPropItems(e);return r.a.createElement("div",{className:"loginPageSelectcontainer"},r.a.createElement("h3",null,"Would You Rather ..? "),r.a.createElement("p",null,"Login to Continue"),r.a.createElement("div",{className:"flexContainer",style:{margin:"2% 0"}},r.a.createElement("div",{className:"selectContainer"},r.a.createElement("div",{key:"transition-group-content"},r.a.createElement(ce.b,{isClearable:!0,components:{Option:se,SingleValue:oe},isSearchable:!0,name:"color",options:t,className:"react-select-LoginPage",onChange:this.handleChange})))))}}]),t}(a.PureComponent),le=Object(o.b)(function(e){return Object(l.a)({},e)},function(e){return{getcurrentUser:function(){var t=Object(S.a)(H.a.mark(function t(n){return H.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(y(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(ie),ue=n(446),Ae=function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Q.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).getDefaultvalue=function(e,t){var n=e.answers[t.id];return n||"default"},n.ClickedElement=function(){var e=n.props,t=e.dispatch,a=e.QuestionData;t(w(a))},n}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props,t=e.QuestionData,n=e.status,a=t.avatarURL?t.avatarURL:q.a,c="/question/".concat(t.id),s="/question/".concat(t.id,"/results"),o="unanswered"===n?c:s;return r.a.createElement("div",{className:"questionContainer"},r.a.createElement("div",{className:"QuestionCardImage"},r.a.createElement(G.a,{color:"red",image:a,className:"semanticCard"})),r.a.createElement("div",{className:"QuestionsContent"},r.a.createElement("div",null,r.a.createElement("h3",{className:"alignCenter"},r.a.createElement("span",{className:"caps"},t.author)," asks would you rather...."),r.a.createElement("div",null,r.a.createElement("h4",{className:"h4"},t.optionOne.text),r.a.createElement("h3",{style:{fontFamily:"cursive",margin:0,textAlign:"center"}},"Or"),r.a.createElement("h4",{className:"h4"},t.optionTwo.text)))),r.a.createElement("div",null,r.a.createElement(L.a,{to:o},r.a.createElement(Y.a,{color:"red",className:"fontWeight",onClick:this.ClickedElement},"View Poll"))))}}]),t}(a.Component),de=function(e,t,n,a){var c=[];return e.forEach(function(e){c.push(r.a.createElement(Ae,{QuestionData:e,key:e.id,currentUser:t,dispatch:n,status:a}))}),c},me=function(e){var t=e.getQuestions,n=e.currentUser,a=e.dispatch,c=e.getUsers;if(t.length){var s=function(e,t,n){var a=de(e.answeredQuestions,t,n,"answered"),c=de(e.unansweredQuestions,t,n,"unanswered");return[{menuItem:"Unanswered Questions",key:"unanswered",render:function(){return r.a.createElement(ue.a.Pane,{attached:!1},c)}},{menuItem:"Answered Questions",key:"answered",render:function(){return r.a.createElement(ue.a.Pane,{attached:!1},a)}}]}(function(e,t,n){var a=Object.keys(t.answers),r=Object.values(e),c=r.filter(function(e){return-1===a.indexOf(e.id)}),s=function(e){return Object(l.a)({},e,{avatarURL:n[e.author].avatarURL})},o=r.filter(function(e){return-1!==a.indexOf(e.id)}).map(s),i=c.map(s),u=function(e,t){return t.timestamp-e.timestamp};return{answeredQuestions:o.sort(u),unansweredQuestions:i.sort(u)}}(t,n,c),n,a);return r.a.createElement("div",null,r.a.createElement(ue.a,{menu:{pointing:!1,attached:!0},panes:s}))}return r.a.createElement("div",null,"Questions API Failed")},he=function(e){function t(){return Object(z.a)(this,t),Object(Q.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentUser,n=e.getQuestions,a=e.dispatch,c=e.getUsers;return r.a.createElement("div",{className:"QuestionTabontainer"},Object.keys(this.props.getQuestions).length?r.a.createElement("div",null,r.a.createElement(me,{getQuestions:Object.values(n),currentUser:t,dispatch:a,getUsers:c})):r.a.createElement("div",null,"loading Data...."))}}]),t}(a.PureComponent),pe=function(e){return r.a.createElement("div",null,e.currentUser.name?r.a.createElement("div",null,r.a.createElement(Z,{currentUser:e.currentUser}),r.a.createElement("div",{className:"flexContainer"},r.a.createElement(he,e))):r.a.createElement("div",{className:"fullHeight"},r.a.createElement($,{url:"/"})))},ve=Object(o.b)(function(e){return Object(l.a)({},e)})(pe),Oe=(n(425),n(442)),Ee=n(443),fe=function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Q.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).state={optionOne:"",optionTwo:""},n.handleClick=function(e){var t=n.state,a={optionOneText:t.optionOne,optionTwoText:t.optionTwo,author:n.props.state.currentUser.id};n.props.action.dispatch(U(a))},n.handleChange=function(e,t){var a=e.target.value;n.setState(function(){return Object(E.a)({},t,a)})},n}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this;return this.props.state.currentUser.name?r.a.createElement("div",null,r.a.createElement(Z,{currentUser:this.props.state.currentUser}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"NewQuestionContainer ",style:{marginTop:"30px"}},r.a.createElement(Oe.a,{style:{padding:"32px"},className:"containerClass"},r.a.createElement("section",null,r.a.createElement("h3",{style:{marginBottom:"15px"}},"Would you Rather....")),r.a.createElement("div",{className:"container"},r.a.createElement(Ee.a,{placeholder:"Enter option one text here....",onChange:function(t){return e.handleChange(t,"optionOne")},action:this.state.action,className:"flexChild"}),r.a.createElement(Ee.a,{placeholder:"Enter option two text here....",action:this.state.action,onChange:function(t){return e.handleChange(t,"optionTwo")},className:"flexChild"}),r.a.createElement(L.a,{to:"/home",onClick:this.handleClick,delay:5e3},r.a.createElement(Y.a,{content:"Submit Question",className:"flexChild",style:{background:"#2f54eb",color:"white"}}))))))):r.a.createElement("div",null,r.a.createElement($,{url:"/"}))}}]),t}(a.Component),je=function(){return r.a.createElement("div",null,r.a.createElement(_,{message:"Kindly login to access this page.",timer:5e3,url:"/"}))},be=n(444),ge=n(448),xe=n(445),ye=(n(427),function(e,t){return Math.floor(e/t*100)}),we=function(e){function t(){return Object(z.a)(this,t),Object(Q.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props.state,t=e.currentUser,n=e.getUsers,a=e.currentQuestions,c=e.getQuestions;if(t.id){var s=n[a.author].avatarURL,o=s||q.a,i="Added by ".concat(a.author),l=c[a.id].optionOne.votes.length,u=c[a.id].optionTwo.votes.length,A=Object.keys(n).length,d=ye(l,l+u),m=ye(u,l+u);return r.a.createElement("div",{className:"resultContainer"},r.a.createElement(Z,{currentUser:t}),r.a.createElement(be.a,{horizontal:!0},"Stats"),r.a.createElement("div",{className:"questionContainer overrideQuestionContainer"},r.a.createElement("div",{className:"QuestionCardImage"},r.a.createElement(G.a,{color:"red",image:o,className:"semanticCard"})),r.a.createElement("div",{className:"QuestionsContent"},r.a.createElement("div",null,r.a.createElement(ge.a,null,r.a.createElement("h3",null,i),r.a.createElement(ge.a,null,r.a.createElement("div",null,r.a.createElement("h4",{className:"h4"},"Would you rather ",a.optionOne.text),r.a.createElement(xe.a,{percent:d,size:"medium",progress:!0},r.a.createElement("span",null,l," out of ",A," votes. (",d,"%)")))),r.a.createElement(ge.a,null,r.a.createElement("div",null,r.a.createElement("h4",{className:"h4"},"Would you rather ",a.optionTwo.text),r.a.createElement(xe.a,{percent:m,size:"medium",progress:!0},r.a.createElement("span",null,u," out of ",A," votes. (",m," %)")))))))))}return r.a.createElement("div",null,r.a.createElement($,{url:"/"}))}}]),t}(a.PureComponent),Ne=Object(o.b)(function(e){return{state:{currentUser:e.currentUser,getUsers:e.getUsers,currentQuestions:e.currentQuestions,getQuestions:e.getQuestions}}})(we),Ue=function(e){function t(){return Object(z.a)(this,t),Object(Q.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(M.a,null,r.a.createElement(C.a,null,r.a.createElement(I.a,{exact:!0,path:"/",render:function(){return r.a.createElement(le,e.props)}}),r.a.createElement(I.a,{exact:!0,path:"/home",component:ve}),r.a.createElement(I.a,Object.assign({exact:!0,path:"/add"},this.props,{render:function(){return r.a.createElement(fe,e.props)}})),r.a.createElement(I.a,{exact:!0,path:"/LeaderBoard",render:function(){return r.a.createElement(re,e.props)}}),r.a.createElement(I.a,{exact:!0,path:"/question/:id",render:function(){return r.a.createElement(te,e.props)}}),r.a.createElement(I.a,{exact:!0,path:"/question/:id/results",render:function(t){return r.a.createElement(Ne,e.props)}}),r.a.createElement(I.a,{path:"/*",component:je}))))}}]),t}(a.PureComponent),ze=Object(o.b)(function(e){return{state:{currentUser:e.currentUser,getUsers:e.getUsers,getQuestions:e.getQuestions}}},function(e){return{action:{currentUser:function(t){return e(y(t))},getUsers:e(g()),getQuestions:e(x()),dispatch:e}}})(Ue),Te=(n(430),O({}));window.store=Te,s.a.render(r.a.createElement(o.a,{store:Te},r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxwAAAMcCAMAAADt2VM6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNjAyQ0E2MzREQTIxMUU0Qjg3RTg3RDMwMzVFNjI1MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNjAyQ0E2NDREQTIxMUU0Qjg3RTg3RDMwMzVFNjI1MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2MDJDQTYxNERBMjExRTRCODdFODdEMzAzNUU2MjUzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI2MDJDQTYyNERBMjExRTRCODdFODdEMzAzNUU2MjUzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mlNnGgAAAMZQTFRF////5+jpvL7A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"}},[[231,2,1]]]);
//# sourceMappingURL=main.3acf39c8.chunk.js.map