(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),u=n(6),s=n.n(u),o=n(7),j=n(2);n(13);function b(e){var t=e.currencyOptions,n=e.selectedCurrency,r=e.onChangeCurrency,a=e.amount,u=e.onChangeAmount,s=t.sort().map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"number",className:"input",value:a,onChange:u}),Object(c.jsx)("select",{onChange:r,value:n,children:s})]})}var i="https://api.exchangeratesapi.io/latest";var O=function(){var e,t,n=Object(r.useState)([]),a=Object(j.a)(n,2),u=a[0],s=a[1],O=Object(r.useState)(0),h=Object(j.a)(O,2),l=h[0],f=h[1],d=Object(r.useState)(0),p=Object(j.a)(d,2),v=p[0],y=p[1],g=Object(r.useState)(0),C=Object(j.a)(g,2),m=C[0],x=C[1],S=Object(r.useState)(1),k=Object(j.a)(S,2),A=k[0],E=k[1],w=Object(r.useState)(!0),J=Object(j.a)(w,2),N=J[0],q=J[1],B=Object(r.useState)(""),F=Object(j.a)(B,2),I=F[0],M=F[1];return N?e=(t=A)*m:t=(e=A)/m,Object(r.useEffect)((function(){fetch(i).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];s([e.base].concat(Object(o.a)(Object.keys(e.rates)))),f(e.base),y(t),x(e.rates[t]),M(e.date)}))}),[]),Object(r.useEffect)((function(){0!==l&&0!==v&&fetch("".concat(i,"?base=").concat(l,"&symbols=").concat(v)).then((function(e){return e.json()})).then((function(e){return x(e.rates[v])}))}),[l,v]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Convert"}),Object(c.jsxs)("p",{children:["The last date update: ",I]}),Object(c.jsx)(b,{currencyOptions:u,selectedCurrency:l,onChangeCurrency:function(e){return f(e.target.value)},amount:t,onChangeAmount:function(e){E(e.target.value),q(!0)}}),Object(c.jsx)("div",{className:"equals",children:"="}),Object(c.jsx)(b,{currencyOptions:u,selectedCurrency:v,onChangeCurrency:function(e){return y(e.target.value)},amount:e,onChangeAmount:function(e){E(e.target.value),q(!1)}})]})};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.33f21416.chunk.js.map