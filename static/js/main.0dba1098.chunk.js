(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{114:function(e){e.exports=JSON.parse('{"welcome_to_react":"Willkommen bei react und react-i18next"}')},115:function(e){e.exports=JSON.parse('{"wlecome_to_react":"Willkommen bei react und react-i18next"}')},116:function(e){e.exports=JSON.parse('{"wlecome_to_react":"Willkommen bei react und react-i18next"}')},118:function(e,t,a){e.exports=a(164)},123:function(e,t,a){},124:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(59),o=a.n(r),c=(a(123),a(22)),s=a(23),m=a(25),u=a(24),i=(a(124),a(89)),d=a(68),p=a(29),E=a(16),g=a(74),h=a(69),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={aaa:{show:!1}},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement(g.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(E.a,{fluid:!0},l.a.createElement(g.a.Brand,{as:d.b,to:"/survey"},"Survey"),l.a.createElement(g.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(g.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(h.a,{className:"me-auto"},l.a.createElement(h.a.Link,{as:d.b,to:"/survey"},"Survey"),l.a.createElement(h.a.Link,{as:d.b,to:"/analysis"},"Analysis"))))))}}]),a}(n.Component),f=(n.Component,a(1)),b=a(4),S=a(17),v=a.n(S),x=a(15),w=a(13),N=a(2),O=a(19),C=a(26),k=a(31),j=function(e){return l.a.createElement(x.a,Object.assign({},e,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(x.a.Body,{className:"show-grid"},l.a.createElement(E.a,{fluid:!0,className:"text-center m-2"},l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(O.a,{icon:C.a,size:"3x",className:"mb-3 text-success"}))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement("h4",null,"Success"))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement("p",null,"Added Successful"))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(w.a,{variant:"success",onClick:e.onHide,className:"rounded-pill width-100p"},"Close"))))))},F=function(e){var t=null==e.errMsg?"":e.errMsg;return l.a.createElement(x.a,Object.assign({},e,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(x.a.Body,{className:"show-grid"},l.a.createElement(E.a,{fluid:!0,className:"text-center m-2"},l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(O.a,{icon:C.c,size:"3x",className:"mb-3 text-danger"}))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement("h4",null,"Failed"))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement("p",null,t))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(w.a,{variant:"danger",onClick:e.onHide,className:"rounded-pill width-100p"},"Close"))))))},I=function(e){return l.a.createElement(x.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(x.a.Body,{className:"show-grid"},l.a.createElement(E.a,{fluid:!0,className:"text-center m-2"},l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(O.a,{icon:C.b,size:"2x",className:"mb-3 text-primary"}))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement("h4",null,"Update Record"))),l.a.createElement("hr",null),l.a.createElement(N.a,{className:"font-weight-bold text-right"},l.a.createElement(N.a.Group,{as:b.a,controlId:"formPlaintextId"},l.a.createElement(N.a.Label,{column:!0,sm:"4"},"ID"),l.a.createElement(f.a,{sm:"8"},l.a.createElement(N.a.Control,{plaintext:!0,readOnly:!0,value:e.value.record_id}))),l.a.createElement(N.a.Group,{as:b.a,controlId:"formPlaintextDate"},l.a.createElement(N.a.Label,{column:!0,sm:"4"},"Date"),l.a.createElement(f.a,{sm:"8"},l.a.createElement(N.a.Control,{type:"date",placeholder:"Date",defaultValue:e.value.date}))),l.a.createElement(N.a.Group,{as:b.a,controlId:"formPlaintextBaseAmount"},l.a.createElement(N.a.Label,{column:!0,sm:"4"},"Base Amount"),l.a.createElement(f.a,{sm:"8"},l.a.createElement(N.a.Control,{type:"number",placeholder:"Base Amount",defaultValue:e.value.base_amount}))),l.a.createElement(N.a.Group,{as:b.a,controlId:"formPlaintextAdjustAmount"},l.a.createElement(N.a.Label,{column:!0,sm:"4"},"Adjust Amount"),l.a.createElement(f.a,{sm:"8"},l.a.createElement(N.a.Control,{type:"number",placeholder:"Adjust Amount",defaultValue:e.value.adjust_amount}))),l.a.createElement(N.a.Group,{as:b.a,controlId:"formPlaintextCategory"},l.a.createElement(N.a.Label,{column:!0,sm:"4"},"Category"),l.a.createElement(f.a,{sm:"8"},l.a.createElement(N.a.Control,{type:"text",placeholder:"Category",defaultValue:e.value.category}))),l.a.createElement(N.a.Group,{as:b.a,controlId:"formPlaintextSubcategory"},l.a.createElement(N.a.Label,{column:!0,sm:"4"},"Subcategory"),l.a.createElement(f.a,{sm:"8"},l.a.createElement(N.a.Control,{type:"text",placeholder:"Subcategory",defaultValue:e.value.subcategory}))),l.a.createElement(N.a.Group,{as:b.a,controlId:"formPlaintextRemark"},l.a.createElement(N.a.Label,{column:!0,sm:"4"},"Remark"),l.a.createElement(f.a,{sm:"8"},l.a.createElement(N.a.Control,{type:"text",placeholder:"Remark",defaultValue:e.value.remark})))),l.a.createElement("br",null),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(w.a,{variant:"secondary",onClick:e.onHide,className:"rounded-pill width-100p"},"Cancel")),l.a.createElement(f.a,null,l.a.createElement(w.a,{variant:"primary",onClick:e.onHide,className:"rounded-pill width-100p"},"Update"))))))},L=function(e){return l.a.createElement(x.a,Object.assign({},e,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(x.a.Body,{className:"show-grid"},l.a.createElement(E.a,{fluid:!0,className:"text-center m-2"},l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(O.a,{icon:C.d,size:"2x",className:"mb-3 text-danger"}))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement("h4",null,"Delete"))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement("p",null,"Are you sure want to delete this item?"))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(w.a,{variant:"secondary",onClick:e.onHide,className:"rounded-pill width-100p"},"Cancel")),l.a.createElement(f.a,null,l.a.createElement(w.a,{variant:"danger",onClick:e.onHide,className:"rounded-pill width-100p"},"Delete"))))))},R=function(e){return l.a.createElement(x.a,Object.assign({},e,{size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(x.a.Body,{className:"show-grid"},l.a.createElement(E.a,{fluid:!0,className:"text-center m-2"},l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(O.a,{icon:k.b,size:"2x",className:"mb-3 text-warning"}))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement("h4",null,"Confirmation"))),l.a.createElement("hr",null),l.a.createElement(N.a.Group,{as:b.a,controlId:"formPlaintextDate"},l.a.createElement(N.a.Label,{column:!0,sm:"4"},"Date"),l.a.createElement(f.a,{sm:"8"},l.a.createElement(N.a.Control,{type:"date",placeholder:"Date",readOnly:!0,defaultValue:e.date}))),l.a.createElement(N.a.Group,{as:b.a,controlId:"formPlaintextCategory"},l.a.createElement(N.a.Label,{column:!0,sm:"4"},"Category"),l.a.createElement(f.a,{sm:"8"},l.a.createElement(N.a.Control,{type:"text",placeholder:"Category",readOnly:!0,defaultValue:e.category}))),l.a.createElement(N.a.Group,{as:b.a,controlId:"formPlaintextSubcategory"},l.a.createElement(N.a.Label,{column:!0,sm:"4"},"Subcategory"),l.a.createElement(f.a,{sm:"8"},l.a.createElement(N.a.Control,{type:"text",placeholder:"Subcategory",readOnly:!0,defaultValue:e.subcategory}))),l.a.createElement(N.a.Group,{as:b.a,controlId:"formPlaintextRemark"},l.a.createElement(N.a.Label,{column:!0,sm:"4"},"Remark"),l.a.createElement(f.a,{sm:"8"},l.a.createElement(N.a.Control,{type:"text",placeholder:"Remark",readOnly:!0,defaultValue:e.remark}))),l.a.createElement(N.a.Row,{className:"text-center mb-2 "},l.a.createElement(f.a,null,l.a.createElement("span",null,"Name")),l.a.createElement(f.a,null,l.a.createElement("span",null,"Share Amount")),l.a.createElement(f.a,null,l.a.createElement("span",null,"Amount")),l.a.createElement(f.a,null,l.a.createElement("span",null,"Adjust")),l.a.createElement(f.a,null,l.a.createElement("span",null,"Total"))),e.data.map((function(e,t){return l.a.createElement(N.a.Row,{className:"text-center py-1"},l.a.createElement(f.a,null,l.a.createElement("p",null,e.name)),l.a.createElement(f.a,null,l.a.createElement("p",null,e.shareBill)),l.a.createElement(f.a,null,l.a.createElement("p",null,e.amount)),l.a.createElement(f.a,null,l.a.createElement("p",null,e.adjust)),l.a.createElement(f.a,null,l.a.createElement("p",null,e.total)))})),l.a.createElement("hr",null),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(w.a,{variant:"secondary",onClick:e.onHide,className:"rounded-pill width-100p"},"Cancel")),l.a.createElement(f.a,null,l.a.createElement(w.a,{variant:"warning",onClick:e.actionSubmit,className:"rounded-pill width-100p"},l.a.createElement("span",{className:"text-white"},"Submit")))))))},M=function(e){var t="text-center bg-primary text-white border border-primary py-1 ",a="text-center bg-light text-primary border border-primary py-1 ";return l.a.createElement(E.a,null,l.a.createElement(b.a,{className:"rounded-pill bg-gray"},l.a.createElement(f.a,{className:"expenses"===e.type?t+" rounded-pill-left":a+" rounded-pill-left",onClick:function(){return e.switchRecType("expenses")}},l.a.createElement("span",null,"Expenses")),l.a.createElement(f.a,{className:"revenue"===e.type?t+" rounded-pill-right":a+" rounded-pill-right",onClick:function(){return e.switchRecType("revenue")}},l.a.createElement("span",null,"Revenue"))))},D=(n.Component,a(18)),P=a(7),T=a.n(P),B=a(14),A=a(3),J=a(5),U=a(52),_=a(32),G=function(){var e=new Date,t=parseInt(e.getMonth())+1;return t<10?"0"+t:t},z=function(){return(new Date).getFullYear()},V=function(e){var t=e.toString().includes("-")?"- ":"",a=e.toString().replace("-","");return t+"RM "+parseFloat(a).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")},Y=function(e){return parseFloat(e).toFixed(2)},H=function(e){switch(new Date(e).getDay()){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Satuday";default:return""}},q=function(e){return e.map((function(e,t){return l.a.createElement("option",{key:t,value:e.name})}))},W=function(){var e=new Date,t=1===(e.getMonth()+1).toString().length?"0"+(e.getMonth()+1):e.getMonth()+1,a=1===e.getDate().toString().length?"0"+e.getDate():e.getDate(),n=e.getFullYear()+"-"+t+"-"+a;return console.log("todayDate: "+n),n},$=function(e){return null==e||""==e},Z=function(){for(var e=[],t=z();t>=2020;t--)e.push({name:t});return e},K=function(e,t){var a,n=Object(_.a)(e);try{for(n.s();!(a=n.n()).done;){var l=a.value;if(l.name===t)return console.log("getIndexByName: "+t+" index: "+l.id),l.id}}catch(r){n.e(r)}finally{n.f()}return""},Q=function(){var e=Object(B.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://localhost:8080/user/list",console.log("URL: "+t),e.next=4,v.a.get(t).then((function(e){a=e.data})).catch((function(e){console.log("Request Error: "+e),a="{}"}));case 4:return console.log("response: "+JSON.stringify(a)),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(B.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://localhost:8080/record-type/list",console.log("URL: "+t),e.next=4,v.a.get(t).then((function(e){a=e.data})).catch((function(e){console.log("Request Error: "+e),a="{}"}));case 4:return console.log("response: "+JSON.stringify(a)),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(B.a)(T.a.mark((function e(t){var a,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="http://localhost:8080/category/list?type="+(t=null==t?"":t),console.log("URL: "+a),e.next=5,v.a.get(a).then((function(e){n=e.data})).catch((function(e){console.log("Request Error: "+e),n="{}"}));case 5:return console.log("response: "+JSON.stringify(n)),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(B.a)(T.a.mark((function e(t,a){var n,l;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://localhost:8080/subcategory/list?category="+(a=null==a?"":a)+"&recordType="+(t=null==t?"":t),console.log("URL: "+n),e.next=6,v.a.get(n).then((function(e){l=e.data})).catch((function(e){console.log("Request Error: "+e),l="{}"}));case 6:return console.log("response: "+JSON.stringify(l)),e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ae=function(){var e=Object(B.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://localhost:8080/remark/list",console.log("URL: "+t),e.next=4,v.a.get(t).then((function(e){a=e.data})).catch((function(e){console.log("Request Error: "+e),a="{}"}));case 4:return console.log("response: "+JSON.stringify(a)),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(B.a)(T.a.mark((function e(t){var a,n,l;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("apiGetSettlementList searchForm: "+JSON.stringify(t)),a=null===t.userId?"":t.userId,n="http://localhost:8080/settlement/list?userId="+a,console.log("URL: "+n),e.next=6,v.a.get(n).then((function(e){l=e.data})).catch((function(e){console.log("Request Error: "+e),l="{}"}));case 6:return console.log("response: "+JSON.stringify(l)),e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=(n.Component,a(40)),re=(n.Component,n.Component,n.Component,a(21)),oe=a(20),ce=(n.Component,a(9)),se=(n.Component,n.Component,a(34)),me=a(49),ue=(n.Component,n.Component,a(117)),ie=a(93),de=(n.Component,function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={recordTypeList:[],categoryList:[],subcategoryList:[],userList:[],settlementList:[],pageController:{userInfoPageShow:!0,surveyInfoPageShow:!1},surveyDetail:{name:""},productList:[{checked:!1,name:"R1-1",img:"/right3/row-1-column-1.png"},{checked:!1,name:"R1-2",img:"/right3/row-1-column-2.png"},{checked:!1,name:"R1-3",img:"/right3/row-1-column-3.png"},{checked:!1,name:"R1-4",img:"/right3/row-1-column-4.png"},{checked:!1,name:"R1-5",img:"/right3/row-1-column-5.png"},{checked:!1,name:"R1-6",img:"/right3/row-1-column-6.png"},{checked:!1,name:"R1-7",img:"/right3/row-1-column-7.png"},{checked:!1,name:"R1-8",img:"/right3/row-1-column-8.png"},{checked:!1,name:"R1-9",img:"/right3/row-1-column-9.png"},{checked:!1,name:"R1-10",img:"/right3/row-1-column-10.png"},{checked:!1,name:"R1-11",img:"/right3/row-1-column-11.png"},{checked:!1,name:"R1-12",img:"/right3/row-1-column-12.png"},{checked:!1,name:"R1-13",img:"/right3/row-1-column-13.png"},{checked:!1,name:"R1-14",img:"/right3/row-1-column-14.png"}],searchForm:{user:"",startDate:"",endDate:""},modalInsertForm:{insertType:"",recordType:"",category:"",subcategory:""},modalEditForm:{editType:"",id:"",name:""},modalSettlementForm:{modalShow:!1,user:"",year:"",isOpenBalanceAvailable:"",openBalance:0,amountIn:0,amountOut:0,balance:0},successModalShow:!1,failedModalShow:!1,confirmModalShow:!1,modalAddRecordShow:!1,modalEditRecordShow:!1,modalSuccess:{show:!1}},e.css={containerStyle1:"border-2-gray rounded p-3",divStyle1:"py-2 px-3",inputStyle1:"width-100p",btnSubmit:"width-100p rounded-pill btn-green border-none py-1",btnReset:"width-100p rounded-pill btn-blue py-1",btnClear:"width-100p rounded-pill btn-yellow border-none py-1"},e.layoutUserInfoPage=function(){return l.a.createElement(E.a,{fluid:!0,className:""},l.a.createElement(b.a,null,l.a.createElement(f.a,{lg:4,md:2}),l.a.createElement(f.a,null,l.a.createElement(b.a,{className:"mb-3 px-3",controlId:""},l.a.createElement(N.a.Control,{type:"text",placeholder:"Name",className:"text-center",value:e.state.surveyDetail.name,onChange:function(t){return e.setSurveyDetail(J.name,t.target.value)}}),l.a.createElement(N.a.Text,{className:"text-muted"})),l.a.createElement(b.a,{className:"mb-3 px-3",controlId:""},l.a.createElement(N.a.Control,{type:"text",placeholder:"Clinic",className:"text-center"})),l.a.createElement(b.a,{className:"mb-3 px-3",controlId:""},l.a.createElement(N.a.Control,{type:"email",placeholder:"Email",className:"text-center"})),l.a.createElement(b.a,{className:"mb-3 px-3",controlId:""},l.a.createElement(N.a.Control,{type:"text",placeholder:"Contact Number",className:"text-center"})),l.a.createElement(b.a,{className:"mb-3 px-3",controlId:""},l.a.createElement(N.a.Control,{type:"text",placeholder:"Address",className:"text-center"})),l.a.createElement(b.a,{className:"mb-3 px-1",controlId:""},l.a.createElement(f.a,null,l.a.createElement(N.a.Control,{type:"text",placeholder:"City",className:"text-center"})),l.a.createElement(f.a,null,l.a.createElement(N.a.Control,{type:"text",placeholder:"Postcode",className:"text-center"}))),l.a.createElement(b.a,{className:"mb-3 px-3",controlId:""},l.a.createElement(N.a.Control,{type:"text",placeholder:"State",className:"text-center"})),l.a.createElement(b.a,{className:"mb-3 px-3",controlId:""},l.a.createElement(w.a,{variant:"primary",type:"button",className:"w-100",onClick:function(){return e.setState({pageController:Object(A.a)(Object(A.a)({},e.state.pageController),{},{userInfoPageShow:!1,surveyInfoPageShow:!0})},(function(){return console.log("pageController: "+JSON.stringify(e.state.pageController))}))}},"Start Survey"))),l.a.createElement(f.a,{lg:4,md:2})))},e.layoutSurveyInfoPage=function(){return l.a.createElement(E.a,{fluid:!0,className:""},l.a.createElement(b.a,{xs:4,sm:6,lg:12,className:""},e.state.productList.map((function(t,a){return l.a.createElement(f.a,{lg:1,className:"p-1"},l.a.createElement(oe.a,{className:t.checked?"border-2-none border-primary bg-lightblue-50":"border-2-none border-secondary",onClick:function(){return e.setProductList(a,"checked",!t.checked)}},l.a.createElement(oe.a.Img,{fluid:!0,variant:"top",src:"/CZR95/survey/assets/images/product"+t.img,className:"p-2 height-35vh"}),l.a.createElement(oe.a.Body,null,l.a.createElement(oe.a.Text,{className:"text-center"},t.name))))}))),l.a.createElement(b.a,null,l.a.createElement(f.a,{lg:4,md:2}),l.a.createElement(f.a,null,l.a.createElement(w.a,{className:"width-100p",onClick:function(){return e.setState({modalSuccess:Object(A.a)(Object(A.a)({},e.state.modalSuccess),{},{show:!0})})}},"Submit")),l.a.createElement(f.a,{lg:4,md:2})))},e.layoutSearchFormTableViewRow=function(){return l.a.createElement("tbody",null,e.state.settlementList.map((function(t,a){return l.a.createElement("tr",null,l.a.createElement("td",{className:e.css.td_style},t.date),l.a.createElement("td",{className:e.css.td_style},t.user),l.a.createElement("td",{className:e.css.td_style},V(t.open_balance)),l.a.createElement("td",{className:e.css.td_style},V(t.amount_in)),l.a.createElement("td",{className:e.css.td_style},V(t.amount_out)),l.a.createElement("td",{className:e.css.td_style},V(t.balance)),l.a.createElement("td",{className:e.css.td_style},l.a.createElement(O.a,{icon:k.a,size:"1x",className:"mx-1",onClick:function(){return e.setState({modalEditRecordShow:!0,modalEditForm:Object(A.a)(Object(A.a)({},e.state.modalEditForm),{},{editType:J.recordType,id:t.record_type_id,name:t.name})})}}),l.a.createElement(O.a,{icon:C.d,size:"1x",className:"mx-1",onClick:function(){return e.deleteRecord(t)}})))})))},e.layoutModalSuccess=function(){return l.a.createElement(x.a,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:e.state.modalSuccess.show},l.a.createElement(x.a.Body,{className:"show-grid"},l.a.createElement(E.a,{fluid:!0,className:"text-center m-2"},l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(O.a,{icon:C.a,size:"3x",className:"mb-3 text-success"}))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement("h4",null,"Success"))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement("p",null,"Added Successful"))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(w.a,{variant:"success",className:"rounded-pill width-100p",onClick:function(){return e.setState({pageController:Object(A.a)(Object(A.a)({},e.state.pageController),{},{userInfoPageShow:!0,surveyInfoPageShow:!1}),modalSuccess:Object(A.a)(Object(A.a)({},e.state.modalSuccess),{},{show:!1})})}},"Close"))))))},e.layoutModalSettlement=function(){return l.a.createElement(x.a,{size:"lg",backdrop:"true",animation:"true","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:e.state.modalSettlementForm.modalShow},l.a.createElement(x.a.Header,null,l.a.createElement(x.a.Title,{className:"text-center"},"Settlement")),l.a.createElement(x.a.Body,{className:"show-grid"},l.a.createElement(N.a,{className:""},l.a.createElement(b.a,{className:"mb-3"},l.a.createElement(f.a,null,l.a.createElement(N.a.Label,null,"User"),l.a.createElement(N.a.Control,{type:"text",list:"user",onChange:function(t){return e.setModalSettlementForm(J.user,t.target.value)}})),l.a.createElement(f.a,null,l.a.createElement(N.a.Label,null,"Year"),l.a.createElement(N.a.Control,{as:"select",value:e.state.modalSettlementForm.year,onChange:function(t){return e.setModalSettlementForm(J.year,t.target.value)}},Z().map((function(e,t){return l.a.createElement("option",null,e.name)}))))),l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(w.a,{variant:"primary",onClick:function(){return e.apiGetSettlementCheck()}},"Check")))),l.a.createElement("hr",null),l.a.createElement(b.a,null),l.a.createElement(N.a,null,l.a.createElement(se.a,{className:"mb-3"},l.a.createElement(se.a.Text,{id:"basic-addon1",className:"width-25p"},"Open Balance"),l.a.createElement(me.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",isInvalid:!e.state.modalSettlementForm.isOpenBalanceAvailable,value:V(e.state.modalSettlementForm.openBalance)})),l.a.createElement(se.a,{className:"mb-3"},l.a.createElement(se.a.Text,{id:"basic-addon1",className:"width-25p"},"Amount In"),l.a.createElement(me.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:V(e.state.modalSettlementForm.amountIn)})),l.a.createElement(se.a,{className:"mb-3"},l.a.createElement(se.a.Text,{id:"basic-addon1",className:"center width-25p"},"Amount Out"),l.a.createElement(me.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:V(e.state.modalSettlementForm.amountOut)})),l.a.createElement(se.a,{className:"mb-3"},l.a.createElement(se.a.Text,{id:"basic-addon1",className:"center width-25p"},"Balance"),l.a.createElement(me.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:V(e.state.modalSettlementForm.balance)})))),l.a.createElement(x.a.Footer,null,l.a.createElement(w.a,{variant:"secondary",onClick:function(){return e.setState({modalSettlementForm:Object(A.a)(Object(A.a)({},e.state.modalSettlementForm),{},{modalShow:!1})})}},"Close"),l.a.createElement(w.a,{variant:"primary",onClick:function(){return e.apiPostSettlementCreate()}},"Save Changes")))},e.apiGetUserList=Object(B.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q().then((function(t){"success"===t.message&&e.setState({userList:t.data})}));case 2:case"end":return t.stop()}}),t)}))),e.apiGetRecordTypeList=Object(B.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X().then((function(t){"success"===t.message&&(console.log("recordTypeList: "+JSON.stringify(t.data)),e.setState({recordTypeList:t.data}))}));case 2:case"end":return t.stop()}}),t)}))),e.apiGetCategoryList=Object(B.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee().then((function(t){"success"===t.message&&e.setState({categoryList:t.data})}));case 2:case"end":return t.stop()}}),t)}))),e.apiGetSettlementList=Object(B.a)(T.a.mark((function t(){var a,n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.searchForm,n=K(e.state.userList,a.user),a=Object(A.a)(Object(A.a)({},e.state.searchForm),{},{userId:n}),t.next=5,ne(a).then((function(t){"success"===t.message&&e.setState({settlementList:t.data})}));case 5:case"end":return t.stop()}}),t)}))),e.apiGetSettlementCheck=function(){var t=e.state.modalSettlementForm.user,a=e.state.modalSettlementForm.year,n=e.state.modalSettlementForm.year;console.log("apiGetSettlementCheck modalSettlementForm: "+JSON.stringify(e.state.modalSettlementForm)),""===a&&(a=z()),""===n&&(n=z());var l="http://localhost:5000/record/summary?userId="+K(e.state.userList,t)+"&fromYear="+a+"&toYear="+n;console.log("URL: "+l),v.a.get(l).then((function(t){if("success"===t.data.message){var a,n,l,r,o,c;console.log("result: "+JSON.stringify(t.data)),c=t.data.data[0].isOpenBalanceAvailable,r=t.data.data[0].openBalance,n=t.data.data[0].totalRevenue,a=t.data.data[0].totalExpense,t.data.data[0].total,o=t.data.data[0].summary,l=r+n+a,e.setModalSettlementForm(J.isOpenBalanceAvailable,c),e.setModalSettlementForm(J.openBalance,r),e.setModalSettlementForm(J.amountIn,n),e.setModalSettlementForm(J.amountOut,a),e.setModalSettlementForm(J.balance,l),console.log("totalExpense: "+a),console.log("totalRevenue: "+n),console.log("summary: "+JSON.stringify(o))}}))},e.apiPostSettlementCreate=function(){var t="http://localhost:8080/settlement/create",a=!1,n="",l=e.state.modalSettlementForm,r=K(e.state.userList,l.user);l=Object(A.a)(Object(A.a)({},e.state.modalSettlementForm),{},{userId:r}),console.log("URL: "+t),console.log("apiPostSettlementCreate settlementForm: "+JSON.stringify(l)),$(l.user)&&(a=!0,n="Empty Name"),a?e.setState({failedModalShow:!0,modalFailedErrMsg:n}):v.a.post(t,l).then((function(t){console.log("response: "+JSON.stringify(t)),"success"===t.data.message?(console.log("set successModalShow true"),e.setState({successModalShow:!0})):(console.log("set failedModalShow true"),e.setState({failedModalShow:!0,modalFailedErrMsg:t.data.message}))})).catch((function(t){console.log("error.response.data: "+JSON.stringify(t.response.data)),e.setState({failedModalShow:!0,modalFailedErrMsg:t.response.data.message})}))},e.setSearchForm=function(t,a){console.log("setSearchForm"),console.log("type: "+t),console.log("value: "+a),e.setState({searchForm:Object(A.a)(Object(A.a)({},e.state.searchForm),{},Object(D.a)({},t,a))},(function(){return console.log("searchForm: "+JSON.stringify(e.state.searchForm))}))},e.setModalEditForm=function(t,a){console.log("setModalEditForm"),console.log("type: "+t),console.log("value: "+a),e.setState({modalEditForm:Object(A.a)(Object(A.a)({},e.state.modalEditForm),{},Object(D.a)({},t,a))},(function(){return console.log("modalEditForm: "+JSON.stringify(e.state.modalEditForm))}))},e.setSurveyDetail=function(t,a){console.log("setSurveyDetail"),console.log("type: "+t),console.log("value: "+a),e.setState({surveyDetail:Object(A.a)(Object(A.a)({},e.state.surveyDetail),{},Object(D.a)({},t,a))},(function(){return console.log("setSurveyDetail: "+JSON.stringify(e.state.surveyDetail))}))},e.setProductList=function(t,a,n){console.log("setProductList"),console.log("index: "+t),console.log("type: "+a),console.log("value: "+n);var l=Object(le.a)(e.state.productList);l[t]=Object(A.a)(Object(A.a)({},l[t]),{},Object(D.a)({},a,n));var r=e.state.surveyDetail;console.log("array: "+JSON.stringify(r)),e.setState({productList:l},(function(){return console.log("setProductList: "+JSON.stringify(e.state.productList))}))},e.setModalSettlementForm=function(t,a){console.log("setModalSettlementForm"),console.log("type: "+t),console.log("value: "+a),e.setState({modalSettlementForm:Object(A.a)(Object(A.a)({},e.state.modalSettlementForm),{},Object(D.a)({},t,a))},(function(){return console.log("setModalSettlementForm: "+JSON.stringify(e.state.modalSettlementForm))}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.apiGetUserList()}},{key:"render",value:function(){var e;return e=this.state.pageController.userInfoPageShow?this.layoutUserInfoPage():this.state.pageController.surveyInfoPageShow?this.layoutSurveyInfoPage():this.layoutUserInfoPage(),l.a.createElement("div",null,l.a.createElement("br",null),this.layoutModalSettlement(),this.layoutModalSuccess(),e)}}]),a}(n.Component)),pe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("header",null,l.a.createElement(y,null)),l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/survey",component:de}),l.a.createElement(p.a,{to:"/survey",component:de})),l.a.createElement("footer",null,l.a.createElement("br",null)))}}]),a}(n.Component),Ee=Object(i.b)()(pe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=a(100),he={en:{translation:a(114)},cn_simp:{translation:a(115)},cn_trad:{translation:a(116)}};ge.a.use(i.a).init({resources:he,lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});ge.a,a(162),a(163);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e){e.exports=JSON.parse('{"color":"red","expense":"expense","revenue":"revenue","name":"name","category":"category","subcategory":"subcategory","type":"type","remark":"remark","recordType":"recordType","insertType":"insertType","filterType":"filterType","editType":"editType","user":"user","date":"date","startDate":"startDate","endDate":"endDate","adjust":"adjust","amount":"amount","fromYear":"fromYear","toYear":"toYear","year":"year","openBalance":"openBalance","amountIn":"amountIn","amountOut":"amountOut","balance":"balance","isOpenBalanceAvailable":"isOpenBalanceAvailable","month":"month","end":"end"}')}},[[118,1,2]]]);
//# sourceMappingURL=main.0dba1098.chunk.js.map