(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],{128:function(e,a,t){e.exports=t(259)},133:function(e,a,t){},134:function(e,a,t){},259:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(32),o=t.n(r),i=(t(133),t(84)),c=(t(134),t(267)),m=t(264),u=t(266),y=t(263),d=t(262),s=t(265),E=t(268),p=t(83),h=t(107),f=t(269),v=t(270),k=t(271),g=t(272),b=c.a.Header,W=c.a.Footer,w=c.a.Sider,M=c.a.Content,x=m.a.Option,B=Object(h.a)("#7af0d2"),D=function(){var e=Object(n.useState)({Monthly:0}),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)("Monthly"),h=Object(i.a)(o,2),D=h[0],A=h[1];return l.a.createElement(c.a,null,l.a.createElement(b,{style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:B[7]}},l.a.createElement("h1",{style:{color:B[0]}},"Budget Tracker")),l.a.createElement(c.a,null,l.a.createElement(w,{style:{padding:"20px",marginTop:64,minHeight:1e3,backgroundColor:B[4],color:B[9]}},t[D]&&t[D]<0?l.a.createElement(u.a,{title:"Your net earnings ($)",value:t[D],valueStyle:{color:"red"},precision:2}):l.a.createElement(u.a,{title:"Your net earnings ($)",value:t[D],valueStyle:{color:"green"},precision:2}),l.a.createElement(m.a,{style:{width:"100%"},onChange:function(e){return A(e)},defaultValue:"Monthly"},l.a.createElement(x,{value:"Hourly"},"Hourly"),l.a.createElement(x,{value:"Daily5"},"Weekdays"),l.a.createElement(x,{value:"Daily7"},"Daily"),l.a.createElement(x,{value:"Weekly"},"Weekly"),l.a.createElement(x,{value:"BiWeekly"},"Bi-Weekly"),l.a.createElement(x,{value:"Monthly"},"Monthly"),l.a.createElement(x,{value:"Annually"},"Annually"))),l.a.createElement(M,{style:{padding:"20px 50px",marginTop:64,minHeight:1e3,backgroundColor:B[1],color:B[9]}},"Track your income and expenses to determine your net earnings.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(y.a,{name:"dynamic_budget",onFinish:function(e){var a=0;for(var t in e)for(var n in e[t]){void 0===e[t][n].period&&(e[t][n].period="Monthly");var l=void 0;"Hourly"===e[t][n].period?l=8*e[t][n].amount*5*52.143:"Daily5"===e[t][n].period?l=5*e[t][n].amount*52.143:"Daily7"===e[t][n].period?l=365*e[t][n].amount:"Weekly"===e[t][n].period?l=52.143*e[t][n].amount:"BiWeekly"===e[t][n].period?l=52.143*e[t][n].amount/2:"Monthly"===e[t][n].period?l=12*e[t][n].amount:"Annually"===e[t][n].period&&(l=e[t][n].amount),"income"===t?a+=l:a-=l}r({Hourly:a/(40*52.143),Daily5:a/(5*52.143),Daily7:a/365,Weekly:a/52.143,BiWeekly:a/26.0715,Monthly:a/12,Annually:a})},autoComplete:"off"},l.a.createElement(y.a.List,{name:"income"},(function(e,a){var t=a.add,n=a.remove;return l.a.createElement("div",null,e.map((function(e){return l.a.createElement(d.a,{key:e.key,style:{display:"flex",marginBottom:8},align:"baseline"},l.a.createElement("span",{style:{color:"green",fontWeight:"bold"}},l.a.createElement(f.a,null)," Income"),l.a.createElement(s.a,{style:{width:"100%"},placeholder:"Name of income"}),l.a.createElement(y.a.Item,Object.assign({},e,{name:[e.name,"amount"],fieldKey:[e.fieldKey,"amount"],rules:[{required:!0,message:"Missing income amount"}]}),l.a.createElement(E.a,{style:{width:"100%"},placeholder:"Income Amount",formatter:function(e){return"$".concat(e)}})),l.a.createElement(y.a.Item,Object.assign({},e,{name:[e.name,"period"],fieldKey:[e.fieldKey,"period"]}),l.a.createElement(m.a,{style:{width:"100%"},defaultValue:"Monthly"},l.a.createElement(x,{value:"Hourly"},"Hourly"),l.a.createElement(x,{value:"Daily5"},"Weekdays"),l.a.createElement(x,{value:"Daily7"},"Daily"),l.a.createElement(x,{value:"Weekly"},"Weekly"),l.a.createElement(x,{value:"BiWeekly"},"Bi-Weekly"),l.a.createElement(x,{value:"Monthly"},"Monthly"),l.a.createElement(x,{value:"Annually"},"Annually"))),l.a.createElement(v.a,{onClick:function(){n(e.name)}}))})),l.a.createElement(y.a.Item,null,l.a.createElement(p.a,{type:"dashed",onClick:function(){t()}},l.a.createElement(k.a,null)," Add a source of income")))})),l.a.createElement(y.a.List,{name:"expenses"},(function(e,a){var t=a.add,n=a.remove;return l.a.createElement("div",null,e.map((function(e){return l.a.createElement(d.a,{key:e.key,style:{display:"flex",marginBottom:8},align:"baseline"},l.a.createElement("span",{style:{color:"red",fontWeight:"bold"}},l.a.createElement(g.a,null)," Expense"),l.a.createElement(s.a,{style:{width:"100%"},placeholder:"Name of expense"}),l.a.createElement(y.a.Item,Object.assign({},e,{name:[e.name,"amount"],fieldKey:[e.fieldKey,"amount"],rules:[{required:!0,message:"Missing expense amount"}]}),l.a.createElement(E.a,{style:{width:"100%"},placeholder:"Expense Amount",formatter:function(e){return"$".concat(e)}})),l.a.createElement(y.a.Item,Object.assign({},e,{name:[e.name,"period"],fieldKey:[e.fieldKey,"period"]}),l.a.createElement(m.a,{style:{width:"100%"},defaultValue:"Monthly"},l.a.createElement(x,{value:"Daily5"},"Weekdays"),l.a.createElement(x,{value:"Daily7"},"Daily"),l.a.createElement(x,{value:"Weekly"},"Weekly"),l.a.createElement(x,{value:"BiWeekly"},"Bi-Weekly"),l.a.createElement(x,{value:"Monthly"},"Monthly"),l.a.createElement(x,{value:"Annually"},"Annually"))),l.a.createElement(v.a,{onClick:function(){n(e.name)}}))})),l.a.createElement(y.a.Item,null,l.a.createElement(p.a,{type:"dashed",onClick:function(){t()}},l.a.createElement(k.a,null)," Add an expense")))})),l.a.createElement(y.a.Item,null,l.a.createElement(p.a,{type:"primary",htmlType:"submit"},"Submit"))))),l.a.createElement(W,{style:{position:"fixed",bottom:"0",left:"0",width:"100%",backgroundColor:B[7],color:B[0]}},"* Hourly income is based on a 40-hour work week *"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[128,1,2]]]);
//# sourceMappingURL=main.d29e652e.chunk.js.map