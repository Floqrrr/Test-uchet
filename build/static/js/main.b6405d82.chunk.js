(this["webpackJsonpelectron-react"]=this["webpackJsonpelectron-react"]||[]).push([[0],{53:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(22),s=a.n(r),o=(a(52),a(53),a(21)),l=a(7),i=a(11),j=a(9),d=a(6),u=a(85),m=a(44),b=a(89),h=a(86),O=a(32),x=a.n(O),p=a(43),f=a(8),g=a.n(f),N=function(){var e=Object(p.a)(x.a.mark((function e(){var t,a,c,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/todo/product");case 2:return t=e.sent,e.next=5,g.a.get("/api/todo/seller");case 5:return a=e.sent,e.next=8,g.a.get("/api/todo/order");case 8:return c=e.sent,e.next=11,g.a.get("/api/todo/manufacturer");case 11:return n=e.sent,e.next=14,g.a.get("/api/todo/categories");case 14:return r=e.sent,e.abrupt("return",{products:t.data,sellers:a.data,orders:c.data,manufacturers:n.data,categoriess:r.data});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v={headers:{"Content-type":"application/json"}},y=function(e){var t=JSON.stringify(e);console.log(t);try{return g.a.post("/api/todo/seller",t,v).data}catch(a){return a}},C=function(e){try{return g.a.delete("/api/todo/seller/"+e).data}catch(t){return t}},_=a(1),S={name:""},k=function(e){var t=e.history,a=Object(c.useState)(S),n=Object(d.a)(a,2),r=n[0],s=n[1],o=Object(c.useState)(),l=Object(d.a)(o,2),O=l[0],x=l[1],p=function(e){console.log(e.target),s(Object(j.a)(Object(j.a)({},r),{},Object(i.a)({},e.target.name,e.target.value)))},f=r.name,y=r.count,C=r.price,k=r.manufactured_time,L=r.expiration_date,G=r.manufacturer_id,w=r.categories_id;return Object(c.useEffect)((function(){N().then((function(e){return x(e)}))}),[N]),null==O?Object(_.jsx)("h1",{children:"loading"}):Object(_.jsxs)(c.Fragment,{children:[Object(_.jsx)("h1",{className:"text-center my-4",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"}),Object(_.jsx)(u.a,{className:"justify-content-center",children:Object(_.jsx)(m.a,{className:"col-md-5",children:Object(_.jsxs)(b.a,{className:"ml-3 mr-3",children:[Object(_.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(_.jsx)(b.a.Label,{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"}),Object(_.jsx)(b.a.Control,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",type:"text",name:"name",value:f,onChange:p})]}),Object(_.jsxs)(b.a.Group,{className:"mb-3",children:[Object(_.jsx)(b.a.Label,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(_.jsx)(b.a.Control,{placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432 \u0448\u0442.",type:"text",name:"count",value:y,onChange:p})]}),Object(_.jsxs)(b.a.Group,{className:"mb-3",children:[Object(_.jsx)(b.a.Label,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0446\u0435\u043d\u0443"}),Object(_.jsx)(b.a.Control,{placeholder:"\u0417\u0430 \u043e\u0434\u043d\u0443 \u0448\u0442. \u0432 \u0440\u0443\u0431.",type:"text",name:"price",value:C,onChange:p})]}),Object(_.jsxs)(b.a.Group,{className:"mb-3",children:[Object(_.jsx)(b.a.Label,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(_.jsx)(b.a.Control,{placeholder:"\u0413\u043e\u0434.\u041c\u0435\u0441\u044f\u0446.\u0414\u0430\u0442\u0430",type:"text",name:"manufactured_time",value:k,onChange:p})]}),Object(_.jsxs)(b.a.Group,{className:"mb-3",children:[Object(_.jsx)(b.a.Label,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0440\u043e\u043a \u0433\u043e\u0434\u043d\u043e\u0441\u0442\u0438"}),Object(_.jsx)(b.a.Control,{placeholder:"\u0413\u043e\u0434.\u041c\u0435\u0441\u044f\u0446.\u0414\u0430\u0442\u0430",type:"text",name:"expiration_date",value:L,onChange:p})]}),Object(_.jsx)(b.a.Label,{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430"}),Object(_.jsx)(b.a.Group,{className:"mb-3",children:Object(_.jsx)(b.a.Control,{as:"select",name:"manufacturer_id",onChange:p,value:G,children:O.manufacturers.map((function(e){return Object(_.jsx)("option",{as:"button",id:G,value:e.id,children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f: "+e.name+" "+e.country},e.id)}))})}),Object(_.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(_.jsx)(b.a.Label,{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"}),Object(_.jsx)(b.a.Control,{as:"select",name:"categories_id",onChange:p,value:w,children:O.categoriess.map((function(e){return Object(_.jsx)("option",{as:"button",id:w,value:e.id,children:e.name},e.id)}))})]}),Object(_.jsx)(h.a,{onClick:function(e){e.preventDefault(),function(e){var t=JSON.stringify(e);console.log(t);try{g.a.post("/api/todo/product",t,v).data}catch(a){return a}}(r),t.push("/"),console.log(r)},variant:"primary",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})})]})},L={name:""},G=function(e){var t=e.history,a=Object(c.useState)(L),n=Object(d.a)(a,2),r=n[0],s=n[1],o=Object(c.useState)(),l=Object(d.a)(o,2),O=l[0],x=l[1],p=function(e){console.log(e.target),s(Object(j.a)(Object(j.a)({},r),{},Object(i.a)({},e.target.name,e.target.value)))},f=r.name,y=(r.count,r.price,r.manufactured_time,r.expiration_date,r.manufacturer_id,r.categories_id);return Object(c.useEffect)((function(){N().then((function(e){return x(e)}))}),[N]),null==O?Object(_.jsx)("h1",{children:"loading"}):Object(_.jsxs)(c.Fragment,{children:[Object(_.jsx)("h1",{className:"text-center my-4",children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(_.jsx)(u.a,{className:"justify-content-center",children:Object(_.jsx)(m.a,{className:"col-md-5",children:Object(_.jsxs)(b.a,{className:"ml-3 mr-3",children:[Object(_.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(_.jsx)(b.a.Label,{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(_.jsx)(b.a.Control,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",type:"text",name:"name",value:f,onChange:p})]}),Object(_.jsx)(h.a,{className:"mb-3",onClick:function(e){e.preventDefault(),function(e){var t=JSON.stringify(e);console.log(t);try{g.a.post("/api/todo/categories",t,v).data}catch(a){return a}}(r),t.push("/"),console.log(r)},variant:"primary",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(_.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(_.jsx)(b.a.Label,{children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(_.jsx)(b.a.Control,{as:"select",name:"categories_id",onChange:p,value:y,children:O.categoriess.map((function(e){return Object(_.jsx)("option",{as:"button",id:y,value:e.id,children:e.name},e.id)}))})]}),Object(_.jsx)(h.a,{className:"mb-3",onClick:function(e){e.preventDefault(),function(e){try{g.a.delete("/api/todo/categories/"+e).data}catch(t){return t}}(y),t.push("/")},variant:"outline-danger",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})})})]})},w={name:"",post:""},B=function(e){var t=e.history,a=Object(c.useState)(w),n=Object(d.a)(a,2),r=n[0],s=n[1],o=Object(c.useState)(),l=Object(d.a)(o,2),O=l[0],x=l[1],p=function(e){console.log(e.target),s(Object(j.a)(Object(j.a)({},r),{},Object(i.a)({},e.target.name,e.target.value)))},f=r.name,g=r.surname,v=r.post,S=(r.manufactured_time,r.expiration_date,r.manufacturer_id,r.categories_id);return Object(c.useEffect)((function(){N().then((function(e){return x(e)}))}),[N]),null==O?Object(_.jsx)("h1",{children:"loading"}):Object(_.jsxs)(c.Fragment,{children:[Object(_.jsx)("h1",{className:"text-center my-4",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432"}),Object(_.jsx)(u.a,{className:"justify-content-center",children:Object(_.jsx)(m.a,{className:"col-md-5",children:Object(_.jsxs)(b.a,{className:"ml-3 mr-3",children:[Object(_.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(_.jsx)(b.a.Label,{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"}),Object(_.jsx)(b.a.Control,{className:"mb-3",placeholder:"\u0418\u043c\u044f",type:"text",name:"name",value:f,onChange:p}),Object(_.jsx)(b.a.Control,{className:"mb-3",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",type:"text",name:"surname",value:g,onChange:p}),Object(_.jsx)(b.a.Control,{className:"mb-3",placeholder:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",type:"text",name:"post",value:v,onChange:p})]}),Object(_.jsx)(h.a,{className:"mb-3",onClick:function(e){e.preventDefault(),y(r),t.push("/"),console.log(S)},variant:"primary",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(_.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(_.jsx)(b.a.Label,{children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"}),Object(_.jsx)(b.a.Control,{as:"select",name:"categories_id",onChange:p,value:S,children:O.sellers.map((function(e){return Object(_.jsx)("option",{as:"button",id:S,value:e.id,children:e.name+" "+e.surname+" "+e.post},e.id)}))})]}),Object(_.jsx)(h.a,{className:"mb-3",onClick:function(e){e.preventDefault(),C(S),t.push("/")},variant:"outline-danger",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})})})]})},I={name:"",post:""},E=function(e){var t=e.history,a=Object(c.useState)(I),n=Object(d.a)(a,2),r=n[0],s=n[1],o=Object(c.useState)(),l=Object(d.a)(o,2),O=l[0],x=l[1],p=function(e){console.log(e.target),s(Object(j.a)(Object(j.a)({},r),{},Object(i.a)({},e.target.name,e.target.value)))},f=r.name,g=(r.surname,r.country),v=(r.manufactured_time,r.expiration_date,r.manufacturer_id,r.categories_id);return Object(c.useEffect)((function(){N().then((function(e){return x(e)}))}),[N]),null==O?Object(_.jsx)("h1",{children:"loading"}):Object(_.jsxs)(c.Fragment,{children:[Object(_.jsx)("h1",{className:"text-center my-4",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u043e\u0432"}),Object(_.jsx)(u.a,{className:"justify-content-center",children:Object(_.jsx)(m.a,{className:"col-md-5",children:Object(_.jsxs)(b.a,{className:"ml-3 mr-3",children:[Object(_.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(_.jsx)(b.a.Label,{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430"}),Object(_.jsx)(b.a.Control,{className:"mb-3",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",name:"name",value:f,onChange:p}),Object(_.jsx)(b.a.Control,{className:"mb-3",placeholder:"\u0421\u0442\u0440\u0430\u043d\u0430",type:"text",name:"country",value:g,onChange:p})]}),Object(_.jsx)(h.a,{className:"mb-3",onClick:function(e){e.preventDefault(),y(r),t.push("/"),console.log(v)},variant:"primary",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(_.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(_.jsx)(b.a.Label,{children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430"}),Object(_.jsx)(b.a.Control,{as:"select",name:"categories_id",onChange:p,value:v,children:O.manufacturers.map((function(e){return Object(_.jsx)("option",{as:"button",id:v,value:e.id,children:e.name+" "+e.country},e.id)}))})]}),Object(_.jsx)(h.a,{className:"mb-3",onClick:function(e){e.preventDefault(),C(v),t.push("/")},variant:"outline-danger",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})})})]})},F=a(87),D=a(91),J=function(e){var t=e.todo;return console.log(t),Object(_.jsxs)(D.a,{style:{width:"15rem"},className:"ml-2 mt-2",children:[Object(_.jsx)(D.a.Title,{className:"mt-2 mx-auto d-block",children:t.name}),Object(_.jsx)(D.a.Img,{className:"rounded mx-auto d-block",style:{width:"8rem"},src:"https://cdn-icons.flaticon.com/png/512/4030/premium/4030569.png?token=exp=1637315527~hmac=bdd25881cb95c8557105401e671ce38c"}),Object(_.jsxs)(D.a.Title,{className:"mt-2 mx-auto d-block",children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ",t.count]}),Object(_.jsxs)(D.a.Title,{className:"mt-2 mx-auto d-block",children:["\u0426\u0435\u043d\u0430: ",t.price]}),Object(_.jsxs)(D.a.Body,{children:[Object(_.jsx)(o.b,{to:"/order/".concat(t.id),children:Object(_.jsx)(h.a,{className:"mt-2 mx-auto d-block",variant:"success",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"})}),Object(_.jsx)(o.b,{to:"/edit/".concat(t.id),children:Object(_.jsx)(h.a,{className:"mt-2 mx-auto d-block",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]})]})},P=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),o=s[0],l=s[1];return Object(c.useEffect)((function(){fetch("/api/todo/product").then((function(e){return e.json()})).then((function(e){n(!0),l(e)}),(function(e){console.log(e)}))}),[]),a||null!==o?Object(_.jsxs)(c.Fragment,{children:[Object(_.jsx)("h1",{className:"text-center my-4",children:"\u0422\u043e\u0432\u0430\u0440\u044b \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435"}),Object(_.jsx)(u.a,{className:"ml-2",children:o.map((function(e){return Object(_.jsx)(J,{todo:e},e.id)}))})]}):Object(_.jsx)(c.Fragment,{children:Object(_.jsx)(F.a,{children:Object(_.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})})})},T=a(88),M=a(90),q=function(e){var t=Object(c.useState)(),a=Object(d.a)(t,2);a[0],a[1];return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(T.a,{bg:"success",variant:"dark",children:[Object(_.jsx)(T.a.Brand,{href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(_.jsxs)(M.a,{className:"mr-auto",children:[Object(_.jsx)(M.a.Link,{href:"/addproduct",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"}),Object(_.jsx)(M.a.Link,{href:"/addcategory",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(_.jsx)(M.a.Link,{href:"/addseller",children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"}),Object(_.jsx)(M.a.Link,{href:"/orders",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438"}),Object(_.jsx)(M.a.Link,{href:"/addmanufacturer",children:"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438"})]})]})})},z={name:"",post:"",product_id:""},A=function(e){var t=e.history,a=Object(c.useState)(z),n=Object(d.a)(a,2),r=n[0],s=n[1],o=Object(c.useState)(z),l=Object(d.a)(o,2),O=(l[0],l[1],Object(c.useState)()),x=Object(d.a)(O,2),p=x[0],f=x[1],y=function(e){console.log(e.target),s(Object(j.a)(Object(j.a)({},r),{},Object(i.a)({},e.target.name,e.target.value)))},C=(r.name,r.count),S=r.seller_id;r.product_id;return Object(c.useEffect)((function(){N().then((function(e){return f(e)}))}),[N]),null==p?Object(_.jsx)("h1",{children:"loading"}):Object(_.jsxs)(c.Fragment,{children:[Object(_.jsx)("h1",{className:"text-center my-4",children:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"}),Object(_.jsx)(u.a,{className:"justify-content-center",children:Object(_.jsx)(m.a,{className:"col-md-5",children:Object(_.jsxs)(b.a,{className:"ml-3 mr-3",children:[Object(_.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(_.jsxs)(b.a.Label,{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430: ",p.products.find((function(e){return e.id==t.location.pathname.toString().slice(-1)})).name]})}),Object(_.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(_.jsxs)(b.a.Label,{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u043e\u0432\u0430\u0440\u0430: ",p.products.find((function(e){return e.id==t.location.pathname.toString().slice(-1)})).count," \u0448\u0442."]})}),Object(_.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(_.jsxs)(b.a.Label,{children:["\u0426\u0435\u043d\u0430 \u0442\u043e\u0432\u0430\u0440\u0430:  ",p.products.find((function(e){return e.id==t.location.pathname.toString().slice(-1)})).price," \u0440\u0443\u0431."]})}),Object(_.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(_.jsx)(b.a.Label,{children:"\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446"}),Object(_.jsx)(b.a.Control,{as:"select",name:"seller_id",onChange:y,value:S,children:p.sellers.map((function(e){return Object(_.jsx)("option",{as:"button",id:S,value:e.id,children:e.name+" "+e.surname+" "+e.post},e.id)}))}),Object(_.jsx)(b.a.Text,{className:"text-muted",children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0435\u0431\u044f"})]}),Object(_.jsxs)(b.a.Group,{className:"mb-3",children:[Object(_.jsx)(b.a.Label,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043a\u0443\u043f\u0430\u0435\u043c\u043e\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u0430"}),Object(_.jsx)(b.a.Control,{placeholder:"\u0448\u0442.",type:"text",name:"count",value:C,onChange:y})]}),Object(_.jsx)(h.a,{className:"mb-3",onClick:function(){!function(e,t){console.log(v);var a=JSON.stringify(e);try{g.a.put("/api/todo/productOrder/"+t,a,v).data}catch(c){return c}}(r,t.location.pathname.toString().slice(-1)),r.product_id=t.location.pathname.toString().slice(-1),r.name=p.products.find((function(e){return e.id==t.location.pathname.toString().slice(-1)})).name,r.price=p.products.find((function(e){return e.id==t.location.pathname.toString().slice(-1)})).price,function(e){var t=JSON.stringify(e);console.log(t);try{g.a.post("/api/todo/order",t,v).data}catch(a){return a}}(r),console.log(r),t.push("/")},variant:"outline-success",children:"\u041f\u0440\u043e\u0434\u0430\u0442\u044c"})]})})})]})},H=function(e){var t=e.todo;return console.log(t),Object(_.jsxs)(D.a,{style:{width:"15rem"},className:"ml-2 mt-2",children:[Object(_.jsx)(D.a.Title,{className:"mt-2 mx-auto d-block",children:t.name}),Object(_.jsx)(D.a.Img,{className:"rounded mx-auto d-block",style:{width:"8rem"},src:"https://cdn-icons.flaticon.com/png/512/4030/premium/4030569.png?token=exp=1637315527~hmac=bdd25881cb95c8557105401e671ce38c"}),Object(_.jsxs)(D.a.Title,{className:"mt-2 mx-auto d-block",children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ",t.count]}),Object(_.jsxs)(D.a.Title,{children:["\u0426\u0435\u043d\u0430: ",t.price]}),Object(_.jsxs)(D.a.Title,{children:["\u0412\u0440\u0435\u043c\u044f: ",t.datetime]})]})},K=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),o=s[0],l=s[1];return Object(c.useEffect)((function(){fetch("/api/todo/order").then((function(e){return e.json()})).then((function(e){n(!0),l(e)}),(function(e){console.log(e)}))}),[]),a||null!==o?Object(_.jsxs)(c.Fragment,{children:[Object(_.jsx)("h1",{className:"text-center my-4",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438"}),Object(_.jsx)(u.a,{className:"ml-2",children:o.map((function(e){return Object(_.jsx)(H,{todo:e},e.id)}))})]}):Object(_.jsx)(c.Fragment,{children:Object(_.jsx)(F.a,{children:Object(_.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})})})},Q={name:""},R=function(e){var t=e.history,a=Object(c.useState)(Q),n=Object(d.a)(a,2),r=n[0],s=n[1],o=Object(c.useState)(),l=Object(d.a)(o,2),O=l[0],x=l[1],p=function(e){console.log(e.target),s(Object(j.a)(Object(j.a)({},r),{},Object(i.a)({},e.target.name,e.target.value)))},f=r.name,y=r.count,C=r.price,S=r.manufactured_time,k=r.expiration_date,L=r.manufacturer_id,G=r.categories_id;return Object(c.useEffect)((function(){N().then((function(e){return x(e)}))}),[N]),null==O?Object(_.jsx)("h1",{children:"loading"}):Object(_.jsxs)(c.Fragment,{children:[Object(_.jsx)("h1",{className:"text-center my-4",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"}),Object(_.jsx)(u.a,{className:"justify-content-center",children:Object(_.jsx)(m.a,{className:"col-md-5",children:Object(_.jsxs)(b.a,{className:"ml-3 mr-3",children:[Object(_.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(_.jsx)(b.a.Label,{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"}),Object(_.jsx)(b.a.Control,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",type:"text",name:"name",value:f,onChange:p})]}),Object(_.jsxs)(b.a.Group,{className:"mb-3",children:[Object(_.jsx)(b.a.Label,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(_.jsx)(b.a.Control,{placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432 \u0448\u0442.",type:"text",name:"count",value:y,onChange:p})]}),Object(_.jsxs)(b.a.Group,{className:"mb-3",children:[Object(_.jsx)(b.a.Label,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0446\u0435\u043d\u0443"}),Object(_.jsx)(b.a.Control,{placeholder:"\u0417\u0430 \u043e\u0434\u043d\u0443 \u0448\u0442. \u0432 \u0440\u0443\u0431.",type:"text",name:"price",value:C,onChange:p})]}),Object(_.jsxs)(b.a.Group,{className:"mb-3",children:[Object(_.jsx)(b.a.Label,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(_.jsx)(b.a.Control,{placeholder:"\u0413\u043e\u0434.\u041c\u0435\u0441\u044f\u0446.\u0414\u0430\u0442\u0430",type:"text",name:"manufactured_time",value:S,onChange:p})]}),Object(_.jsxs)(b.a.Group,{className:"mb-3",children:[Object(_.jsx)(b.a.Label,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0440\u043e\u043a \u0433\u043e\u0434\u043d\u043e\u0441\u0442\u0438"}),Object(_.jsx)(b.a.Control,{placeholder:"\u0413\u043e\u0434.\u041c\u0435\u0441\u044f\u0446.\u0414\u0430\u0442\u0430",type:"text",name:"expiration_date",value:k,onChange:p})]}),Object(_.jsx)(b.a.Label,{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430"}),Object(_.jsx)(b.a.Group,{className:"mb-3",children:Object(_.jsx)(b.a.Control,{as:"select",name:"manufacturer_id",onChange:p,value:L,children:O.manufacturers.map((function(e){return Object(_.jsx)("option",{as:"button",id:L,value:e.id,children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f: "+e.name+" "+e.country},e.id)}))})}),Object(_.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(_.jsx)(b.a.Label,{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"}),Object(_.jsx)(b.a.Control,{as:"select",name:"categories_id",onChange:p,value:G,children:O.categoriess.map((function(e){return Object(_.jsx)("option",{as:"button",id:G,value:e.id,children:e.name},e.id)}))})]}),Object(_.jsx)(h.a,{onClick:function(e){e.preventDefault(),function(e,t){var a=JSON.stringify(e);console.log(a);try{g.a.put("/api/todo/product/"+t,a,v).data}catch(c){return c}}(r,t.location.pathname.toString().slice(-1)),t.push("/"),console.log(r)},variant:"outline-primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(_.jsx)(h.a,{onClick:function(e){e.preventDefault(),function(e){try{g.a.delete("/api/todo/product/"+e).data}catch(t){return t}}(t.location.pathname.toString().slice(-1)),t.push("/")},className:"ml-2",variant:"outline-danger",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})})})]})};var U=function(){return Object(_.jsx)(c.Fragment,{children:Object(_.jsxs)(o.a,{children:[Object(_.jsx)(q,{}),Object(_.jsx)("section",{className:"wrapper",children:Object(_.jsxs)(l.c,{children:[Object(_.jsx)(l.a,{exact:!0,path:"/",component:P}),Object(_.jsx)(l.a,{exact:!0,path:"/order/:id",component:A}),Object(_.jsx)(l.a,{exact:!0,path:"/orders/",component:K}),Object(_.jsx)(l.a,{exact:!0,path:"/addproduct",component:k}),Object(_.jsx)(l.a,{exact:!0,path:"/addcategory",component:G}),Object(_.jsx)(l.a,{exact:!0,path:"/addseller",component:B}),Object(_.jsx)(l.a,{exact:!0,path:"/addmanufacturer",component:E}),Object(_.jsx)(l.a,{exact:!0,path:"/edit/:id",component:R})]})})]})})};s.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(U,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.b6405d82.chunk.js.map