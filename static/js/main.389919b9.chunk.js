(this["webpackJsonpeager-scrummer"]=this["webpackJsonpeager-scrummer"]||[]).push([[0],{65:function(e,a,t){e.exports=t(77)},70:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),i=(t(70),t(31)),o=t(12),s=t(23),m=t(122),u=t(106),d=t(79),E=t(123),p=t(32),g=t(108),y=t(109),f=t(110),b=t(111),v=t(121),h=t(112),D=t(113),j=t(114),O=t(115),S=t(116),M=t(117),Y=t(118),I=t(119),x=t(54),C=t.n(x),k=t(55),w=t.n(k),N=t(53),B=t.n(N),P=t(52),J=t.n(P),L=t(56),A=t.n(L),T=t(57),F=t.n(T),z=t(7),W=t.n(z),R=Object(m.a)((function(e){return{mainContainer:{width:"100%",height:"95vh",margin:"0.5rem auto"},mainPaper:{width:"90%",height:"90%",margin:"0.5rem auto",padding:"1rem"},mainCard:{width:"90%",height:"90%",margin:"1rem auto"},gridContainer:{marginTop:"15px"},eveningContainer:{backgroundColor:"silver"},dayForeward:{color:e.palette.primary.dark},dayBack:{color:e.palette.secondary.dark}}})),V=function(){var e=R(),a=Object(n.useState)({sprintNumber:0,sprintStartDate:W()(),sprintEndDate:W()(),sprintLength:0,sprintLengthBusiness:0,sprintDay:0,remainingDays:0,hoursPerDay:6,capacity:60,toDo:{morning:0,evening:0},actual:{morning:0,evening:0},vacationDates:[""],stories:[]}),t=Object(s.a)(a,2),l=t[0],c=t[1],m=Object(n.useState)(""),x=Object(s.a)(m,2),k=x[0],N=x[1],P=Object(n.useState)(W()()),L=Object(s.a)(P,2),T=L[0],z=L[1],V=Object(n.useState)({name:"",points:1}),X=Object(s.a)(V,2),H=X[0],U=X[1],$=Object(n.useState)(!1),q=Object(s.a)($,2),G=q[0],K=q[1],Q=Object(n.useState)(l.capacity),Z=Object(s.a)(Q,2),_=Z[0],ee=Z[1],ae={startDate:W()("04/01/2020","MM/DD/YYYY"),endDate:W()("04/14/2020","MM/DD/YYYY"),sprintNumber:7};Object(n.useEffect)((function(){return ne()}),[T]);var te=function(e,a){for(var t=a,n=W()(e);t>0;)n.add(1,"days"),0!==n.day()&&6!==n.day()&&t--;return n.format("dddd MMM Do")},ne=function(){var e=localStorage.getItem("vacations"),a=localStorage.getItem("capacity");a||(a="60"),ee(parseInt(a));var t=[];e&&(t=JSON.parse(e));var n=localStorage.getItem("stories"),r=[];n&&(r=JSON.parse(n));var i=ae.endDate.diff(ae.startDate,"days")+1,s=T.diff(ae.endDate,"days"),m=Math.floor(s/i),u=ae.sprintNumber+m;m*i<s&&(u++,m++);for(var d=ae.startDate.add(i*m,"days"),E=W()(d).add(i-1,"days"),p=0,g=0,y=0,f=function(e){if(t.filter((function(a){return W()(a).isSame(e)})).length||6===e.isoWeekday()||7===e.isoWeekday())return"continue";g++,e.isSameOrBefore(T)?p++:y++},b=W()(d);b.isSameOrBefore(E);b=W()(b).add(1,"days"))f(b);var v=parseInt(a)/g,h=Math.round(y*v),D=Math.round(h+v),j=Math.round(p*v),O=Math.round(j-v);c(Object(o.a)(Object(o.a)({},l),{},{sprintNumber:u,sprintStartDate:d,sprintEndDate:E,sprintLength:i,hoursPerDay:v,capacity:parseInt(a),sprintLengthBusiness:g,sprintDay:p,remainingDays:y,vacationDates:t,stories:r,actual:{morning:O,evening:j},toDo:{morning:D,evening:h}}))};return r.a.createElement(u.a,{className:e.mainContainer},r.a.createElement(d.a,{elevation:5,className:e.mainPaper},r.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement(E.a,{color:"secondary",onClick:function(){z((function(e){return W()(e).add(-1,"days")}))},startIcon:r.a.createElement(J.a,null)},"-1"),W()().isSame(T,"day")&&r.a.createElement(p.a,{variant:"h5"},"Today is: ".concat(T.format("dddd MMMM Do YYYY"))),W()().isBefore(T,"day")&&r.a.createElement(p.a,{variant:"h5",className:e.dayForeward},"If today is: ".concat(T.format("dddd MMMM Do YYYY"))),W()().isAfter(T,"day")&&r.a.createElement(p.a,{variant:"h5",className:e.dayBack},"If today is: ".concat(T.format("dddd MMMM Do YYYY"))),r.a.createElement(E.a,{color:"primary",onClick:function(){z((function(e){return W()(e).add(1,"days")}))},endIcon:r.a.createElement(B.a,null)},"+1")),r.a.createElement(g.a,{container:!0,spacing:3,className:e.gridContainer},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(y.a,{raised:!0},r.a.createElement(f.a,{title:"Sprint ".concat(l.sprintNumber,", ").concat(l.sprintStartDate.format("dddd MMMM Do YYYY"),"-").concat(l.sprintEndDate.format("dddd MMMM Do YYYY")," [").concat(l.sprintLengthBusiness," Business days]"),subheader:"Day: ".concat(l.sprintDay,", Remaining: ").concat(l.remainingDays)}),r.a.createElement(b.a,null,r.a.createElement(g.a,{container:!0,xs:12,justify:"space-between"},r.a.createElement(g.a,{item:!0,xs:2},r.a.createElement(g.a,{container:!0,spacing:1,justify:"center",alignItems:"center",style:{backgroundColor:"navy",color:"yellow",borderRadius:"32px",marginBottom:"10px"}},r.a.createElement(g.a,{item:!0},r.a.createElement(C.a,null)),r.a.createElement(g.a,{item:!0},"Morning")),r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:6},"To Do"),r.a.createElement(g.a,{item:!0,xs:6},"Actuals"),r.a.createElement(g.a,{item:!0,xs:6},l.toDo.morning),r.a.createElement(g.a,{item:!0,xs:6},l.actual.morning))),r.a.createElement(g.a,{item:!0,xs:2},r.a.createElement(g.a,{container:!0,spacing:1,justify:"center",alignItems:"center",style:{backgroundColor:"black",color:"white",borderRadius:"32px",marginBottom:"10px"}},r.a.createElement(g.a,{item:!0},r.a.createElement(w.a,null)),r.a.createElement(g.a,{item:!0},"Evening")),r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:6},"To Do"),r.a.createElement(g.a,{item:!0,xs:6},"Actuals"),r.a.createElement(g.a,{item:!0,xs:6},l.toDo.evening),r.a.createElement(g.a,{item:!0,xs:6},l.actual.evening)))),r.a.createElement(v.a,{label:"Capacity",disabled:!G,style:{width:"150px"},variant:"standard",autoFocus:!0,size:"small",type:"number",onChange:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,2),ee(e.target.value)},value:_,InputProps:{disableUnderline:!0,endAdornment:r.a.createElement(h.a,{position:"end"},!G&&r.a.createElement(E.a,{size:"small",onClick:function(){K(!0)}},r.a.createElement(A.a,null)),G&&r.a.createElement(E.a,{size:"small",onClick:function(){c((function(e){return Object(o.a)(Object(o.a)({},e),{},{capacity:_})})),K(!1),localStorage.setItem("capacity",_.toString()),ne()}},r.a.createElement(F.a,null)))}}))))),r.a.createElement(g.a,{container:!0,justify:"space-between",style:{marginTop:"32px",padding:"0.5rem"},spacing:4},r.a.createElement(g.a,{xs:7},r.a.createElement(y.a,{style:{backgroundColor:"hsl(0,100%,97%)",color:"hsl(0,100%,40%"}},r.a.createElement(b.a,null,r.a.createElement(D.a,null,r.a.createElement(j.a,{size:"small"},r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(M.a,null,"Points"),r.a.createElement(M.a,null,"Hours"),r.a.createElement(M.a,null,"~Days"),r.a.createElement(M.a,null,"Pts[Start]"),r.a.createElement(M.a,null,"Pts[Now]"))),r.a.createElement(Y.a,null,r.a.createElement(S.a,null,r.a.createElement(M.a,null,"1"),r.a.createElement(M.a,null,"0-8"),r.a.createElement(M.a,null,"1"),r.a.createElement(M.a,null,te(l.sprintStartDate,1)),r.a.createElement(M.a,null,te(W()(),1))),r.a.createElement(S.a,null,r.a.createElement(M.a,null,"2"),r.a.createElement(M.a,null,"8-20"),r.a.createElement(M.a,null,"3"),r.a.createElement(M.a,null,te(l.sprintStartDate,3)),r.a.createElement(M.a,null,te(W()(),3))),r.a.createElement(S.a,null,r.a.createElement(M.a,null,"3"),r.a.createElement(M.a,null,"18-35"),r.a.createElement(M.a,null,"6"),r.a.createElement(M.a,null,te(l.sprintStartDate,6)),r.a.createElement(M.a,null,te(W()(),6))),r.a.createElement(S.a,null,r.a.createElement(M.a,null,"5"),r.a.createElement(M.a,null,"30-55"),r.a.createElement(M.a,null,"9"),r.a.createElement(M.a,null,te(l.sprintStartDate,9)),r.a.createElement(M.a,null,te(W()(),9))),r.a.createElement(S.a,null,r.a.createElement(M.a,null,"8"),r.a.createElement(M.a,null,"50-85"),r.a.createElement(M.a,null,"14(1.5S)"),r.a.createElement(M.a,null,te(l.sprintStartDate,14)),r.a.createElement(M.a,null,te(W()(),14))),r.a.createElement(S.a,null,r.a.createElement(M.a,null,"13"),r.a.createElement(M.a,null,"85+"),r.a.createElement(M.a,null,"1.5S+"),r.a.createElement(M.a,null,te(l.sprintStartDate,14)),r.a.createElement(M.a,null,te(W()(),14))))))))),r.a.createElement(g.a,{item:!0,xs:5},r.a.createElement(g.a,{container:!0,direction:"column",spacing:1,justify:"space-between",alignItems:"stretch",style:{height:"100%"}},r.a.createElement(y.a,{style:{backgroundColor:"hsl(120,100%,96%)",color:"hsl(120,100%,20%"}},r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement(v.a,{label:"Vacations",type:"date",value:k,onChange:function(e){return N(e.target.value)},InputLabelProps:{shrink:!0}}),r.a.createElement(E.a,{color:"secondary",onClick:function(){var e=Object(i.a)(l.vacationDates);k&&(e.push(k),localStorage.setItem("vacations",JSON.stringify(e)),c(Object(o.a)(Object(o.a)({},l),{},{vacationDates:e})),ne())}},"Add"))),r.a.createElement(g.a,null,l.vacationDates.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("div",null,W()(e).format("ddd DD MMM YYYY")),r.a.createElement(E.a,{onClick:function(){return function(e){var a=Object(i.a)(l.vacationDates);a=a.filter((function(a){return!W()(a).isSame(W()(e))})),localStorage.setItem("vacations",JSON.stringify(a)),c(Object(o.a)(Object(o.a)({},l),{},{vacationDates:a})),ne()}(e)}},"X")),r.a.createElement(I.a,null))}))))),r.a.createElement(y.a,{style:{backgroundColor:"hsl(240,100%,96%)",color:"hsl(240,100%,20%",marginTop:"0.5rem"}},r.a.createElement(b.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(v.a,{style:{width:"90%"},label:"Story",type:"text",value:H.name,onChange:function(e){return U(Object(o.a)(Object(o.a)({},H),{},{name:e.target.value}))},InputLabelProps:{shrink:!0}}),r.a.createElement(v.a,{label:"Points",type:"number",value:H.points,onChange:function(e){return U(Object(o.a)(Object(o.a)({},H),{},{points:parseInt(e.target.value)}))},defaultValue:1,InputLabelProps:{shrink:!0}}),r.a.createElement(E.a,{color:"secondary",onClick:function(){var e=Object(i.a)(l.stories);H&&(e.push(H),localStorage.setItem("stories",JSON.stringify(e)),c(Object(o.a)(Object(o.a)({},l),{},{stories:e})),U({name:"",points:1}))}},"Add")),r.a.createElement(g.a,null,l.stories.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("div",null,"".concat(e.points,"   ").concat(e.name)),r.a.createElement(E.a,{onClick:function(){return function(e){var a=Object(i.a)(l.stories);a=a.filter((function(a){return a.name!==e})),localStorage.setItem("stories",JSON.stringify(a)),c(Object(o.a)(Object(o.a)({},l),{},{stories:a}))}(e.name)}},"X")),r.a.createElement(I.a,null))}))))))))))},X=(t(76),t(58)),H=t(120);var U=function(){var e=Object(X.a)();return r.a.createElement("div",{className:"App"},r.a.createElement(H.a,{theme:e},r.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.389919b9.chunk.js.map