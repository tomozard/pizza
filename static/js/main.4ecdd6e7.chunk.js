(this.webpackJsonppizza=this.webpackJsonppizza||[]).push([[0],{113:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),r=c(10),i=c.n(r),o=(c(84),c(18)),s=c(19),u=c(57),l=c(22),j={fetching:!1,products:[]},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_PRODUCT":return Object(l.a)(Object(l.a)({},t),{},{fetching:!0,error:null});case"FETCH_PRODUCT_SUCCESS":return Object(l.a)(Object(l.a)({},t),{},{fetching:!1,products:e.products});case"FETCH_PRODUCT_ERROR":return Object(l.a)(Object(l.a)({},t),{},{fetching:!1,error:e.error});default:return t}},b=c(21),p=c(30),O=c.n(p),h=[],f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_CART":var c=O.a.find(t,(function(t){return t.product._id===e.payload.product._id}));if(c){c.amount++;var n=t.filter((function(t){return t.product._id!==e.payload.product._id})),a=[].concat(Object(b.a)(n||[]),[c]);return a}var r=[].concat(Object(b.a)(t||[]),[e.payload]);return r;case"REMOVE_CART":var i=t.filter((function(t){return t.product._id!==e.payload.product._id}));return i;case"UPDATE_CART":var o=O.a.find(t,(function(t){return t.product._id===e.payload.product._id}));if(o){var s=t.filter((function(t){return t.product._id!==e.payload.product._id})),u=[].concat(Object(b.a)(s||[]),[o]);return u}return t;case"CLEAR_CART":return[];case"GET_CART":default:return t}},m=Object(s.c)({products:d,carts:f}),x=Object(s.a)(u.a)(s.d)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),g=c(139),v=c(132),_=c(9),y=c(16),C=c.n(y),E=c(20),R=function(t,e){var c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=Object(n.useState)([]),r=Object(_.a)(a,2),i=r[0],o=r[1],s=Object(n.useState)(!1),u=Object(_.a)(s,2),l=u[0],j=u[1],d=Object(n.useState)(!1),p=Object(_.a)(d,2),O=p[0],h=p[1],f=function(){var c=Object(E.a)(C.a.mark((function c(){return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,j(!0),c.t0=o,c.next=5,t.apply(void 0,Object(b.a)(e));case 5:c.t1=c.sent,(0,c.t0)(c.t1),c.next=12;break;case 9:c.prev=9,c.t2=c.catch(0),h(!0);case 12:return c.prev=12,j(!1),c.finish(12);case 15:case"end":return c.stop()}}),c,null,[[0,9,12,15]])})));return function(){return c.apply(this,arguments)}}();return Object(n.useEffect)((function(){c&&f()}),[]),[i,l,O,f]},S=c(58),T=c.n(S).a.create({baseURL:"https://test.pizzahut1150.com/api/"}),k={post:function(t,e,c){return T.post(t,e,c)},get:function(t,e){return T.get(t,e)}},w={getProduct:function(){var t=Object(E.a)(C.a.mark((function t(){var e,c,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/products/",t.next=3,k.get("/products/");case 3:return e=t.sent,c=e.data,n=c,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},z=c(135),L=c(129),A=c(140),D=c(131),F=c(136),U=c(134),B=c(133),N=c(137),P=c(59),I=c.n(P),V=function(t){return{type:"UPDATE_CART",payload:{product:t}}},W=c(2),M=Object(L.a)({root:{maxWidth:345},media:{height:140,backgroundSize:"contain"},floatRight:{marginLeft:"auto"}}),X=function(t){var e=M(),c=Object(o.b)(),n=t.product,a=function(){c(function(t){return{type:"ADD_CART",payload:{product:t,amount:1,id:(new Date).getTime()}}}(n))};return Object(W.jsxs)(A.a,{className:e.root,children:[Object(W.jsx)(D.a,{children:Object(W.jsxs)(v.a,{container:!0,children:[Object(W.jsx)(v.a,{item:!0,xs:12,md:4,children:Object(W.jsx)(B.a,{className:e.media,image:"https://test.pizzahut1150.com"+n.image_th,title:n.imagealt_th})}),Object(W.jsx)(v.a,{item:!0,xs:12,md:8,children:Object(W.jsxs)(U.a,{children:[Object(W.jsx)(z.a,{component:"h3",children:n.product_name_th}),Object(W.jsx)(I.a,{text:n.product_detail_th,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}),Object(W.jsxs)(z.a,{variant:"subtitle2",children:["\u0e3f ",n.price]})]})})]})}),Object(W.jsx)(F.a,{children:Object(W.jsx)(N.a,{size:"small",color:"primary",className:e.floatRight,onClick:function(){a()},children:"Add Card"})})]})},G=function(t){var e=R(w.getProduct,[]),c=Object(_.a)(e,4),n=c[0],a=c[1],r=c[2];c[3];return Object(W.jsxs)("div",{children:[Object(W.jsx)(z.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),a?Object(W.jsx)("div",{children:"fetching..."}):r?Object(W.jsx)("div",{children:"Fetch Error"}):Object(W.jsx)(v.a,{container:!0,spacing:2,children:n.map((function(t,e){return Object(W.jsx)(v.a,{item:!0,xs:12,sm:6,md:4,children:Object(W.jsx)(X,{product:t})},t.product_id)}))})]})},H=c(66),J=c.n(H),K=c(65),Z=c.n(K),q=c(64),Q=c.n(q),Y=c(138),$=Object(L.a)({root:{maxWidth:345},media:{height:80,backgroundSize:"contain"},myCartButton:{minWidth:40},myRemoveButton:{minWidth:40,marginLeft:"auto"},floatRight:{marginLeft:"auto"}}),tt=function(t){var e=$(),c=Object(o.b)(),n=t.cart;return Object(W.jsxs)(A.a,{className:e.root,children:[Object(W.jsx)(D.a,{children:Object(W.jsxs)(v.a,{container:!0,children:[Object(W.jsx)(v.a,{item:!0,xs:12,md:4,children:Object(W.jsx)(B.a,{className:e.media,image:"https://test.pizzahut1150.com"+n.product.image_th,title:n.product.imagealt_th})}),Object(W.jsx)(v.a,{item:!0,xs:12,md:8,children:Object(W.jsxs)(U.a,{children:[Object(W.jsxs)(z.a,{component:"h3",children:[n.product.product_name_th," (\u0e3f ",n.product.price,"/\u0e0a\u0e34\u0e49\u0e19)"]}),Object(W.jsxs)(z.a,{variant:"subtitle2",children:["Total : \u0e3f ",n.amount*n.product.price]})]})})]})}),Object(W.jsx)(Y.a,{}),Object(W.jsxs)(F.a,{children:[Object(W.jsx)(N.a,{size:"small",color:"primary",className:e.myCartButton,onClick:function(){n.amount>1&&(n.amount--,c(V(n.product)))},children:Object(W.jsx)(Q.a,{})}),Object(W.jsxs)(z.a,{variant:"subtitle2",children:["\u0e08\u0e33\u0e19\u0e27\u0e19 ",n.amount," \u0e0a\u0e34\u0e49\u0e19"]}),Object(W.jsx)(N.a,{size:"small",color:"primary",className:e.myCartButton,onClick:function(){n.amount<9&&(n.amount++,c(V(n.product)))},children:Object(W.jsx)(Z.a,{})}),Object(W.jsx)(Y.a,{orientation:"vertical",flexItem:!0}),Object(W.jsx)(N.a,{size:"small",color:"primary",className:e.myCartButton,onClick:function(){c({type:"REMOVE_CART",payload:{product:n.product}})},children:Object(W.jsx)(J.a,{})})]})]})},et=function(t){var e=Object(o.c)((function(t){return t.carts}));return Object(n.useEffect)((function(){console.log("Cart Update",e,e.length)}),[e]),Object(W.jsxs)("div",{children:[Object(W.jsx)(z.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"\u0e15\u0e30\u0e01\u0e23\u0e49\u0e32\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),Object(W.jsx)(v.a,{container:!0,spacing:2,children:e.length>0&&O.a.orderBy(e,["id"]).map((function(t,e){return Object(W.jsx)(v.a,{item:!0,xs:12,children:Object(W.jsx)(tt,{cart:t})},t.id)}))})]})},ct={getLocation:function(){var t=Object(E.a)(C.a.mark((function t(){var e,c,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/address/location",t.next=3,k.get("/address/location");case 3:return e=t.sent,c=e.data,n=c,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},nt=c(34),at=c(39),rt={width:"100%",height:"500px"},it={fillColor:"lightblue",fillOpacity:.5,strokeColor:"blue",strokeOpacity:1,strokeWeight:1,clickable:!1,draggable:!1,editable:!1,geodesic:!1,zIndex:1},ot=function(t){var e=t.location,c=Object(nt.d)({googleMapsApiKey:"AIzaSyDkC_udSZKGGVZg_6vU2Uqc7EJBCOOjm8U",libraries:["places"]}),a=c.isLoaded,r=(c.loadError,Object(n.useState)({lat:7.5549,lng:99.615})),i=Object(_.a)(r,2),o=i[0],s=(i[1],Object(n.useState)(13)),u=Object(_.a)(s,2),l=u[0],j=(u[1],function(t){}),d=Object(n.useState)(null),b=Object(_.a)(d,2),p=b[0],O=b[1],h=Object(n.useState)(null),f=Object(_.a)(h,2),m=f[0],x=f[1];return Object(n.useEffect)((function(){p&&null!==p&&(console.log(p),""!==p.label&&Object(at.b)(p.label).then((function(t){return Object(at.c)(t[0])})).then((function(t){var e=t.lat,c=t.lng;console.log("Successfully got latitude and longitude",{lat:e,lng:c}),x(new google.maps.LatLng({lat:e,lng:c}))})))}),[p]),a?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(at.a,{selectProps:{value:p,onChange:O}}),Object(W.jsxs)(nt.a,{mapContainerStyle:rt,center:o,zoom:l,children:[e.features.map((function(t,e){var c=t.geometry.coordinates[0].map((function(t){return{lng:parseFloat(t[0]),lat:parseFloat(t[1])}}));return Object(W.jsx)(nt.c,{onLoad:j,paths:c,options:it},e)})),null!==m&&Object(W.jsx)(nt.b,{position:m})]})]}):Object(W.jsx)(W.Fragment,{})},st=function(t){var e=function(t,e){var c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=Object(n.useState)({type:"",name:"",crs:{type:"",properties:{name:""}},features:[]}),r=Object(_.a)(a,2),i=r[0],o=r[1],s=Object(n.useState)(!1),u=Object(_.a)(s,2),l=u[0],j=u[1],d=Object(n.useState)(!1),p=Object(_.a)(d,2),O=p[0],h=p[1],f=function(){var c=Object(E.a)(C.a.mark((function c(){return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,j(!0),c.t0=o,c.next=5,t.apply(void 0,Object(b.a)(e));case 5:c.t1=c.sent,(0,c.t0)(c.t1),c.next=12;break;case 9:c.prev=9,c.t2=c.catch(0),h(!0);case 12:return c.prev=12,j(!1),c.finish(12);case 15:case"end":return c.stop()}}),c,null,[[0,9,12,15]])})));return function(){return c.apply(this,arguments)}}();return Object(n.useEffect)((function(){c&&f()}),[]),[i,l,O,f]}(ct.getLocation,[]),c=Object(_.a)(e,4),a=c[0],r=c[1],i=c[2];c[3];return Object(n.useEffect)((function(){console.log(a)}),[a]),Object(W.jsxs)("div",{children:[Object(W.jsx)(z.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"Location"}),r?Object(W.jsx)("div",{children:"fetching..."}):i?Object(W.jsx)("div",{children:"Fetch Error"}):Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(ot,{location:a})})]})};var ut=function(){return Object(W.jsx)(o.a,{store:x,children:Object(W.jsx)(g.a,{style:{padding:"12px 24px"},children:Object(W.jsxs)(v.a,{container:!0,spacing:2,children:[Object(W.jsx)(v.a,{item:!0,xs:9,style:{borderRight:"1px dashed #ccc"},children:Object(W.jsx)(G,{})}),Object(W.jsx)(v.a,{item:!0,xs:3,children:Object(W.jsx)(et,{})}),Object(W.jsx)(v.a,{item:!0,xs:12,children:Object(W.jsx)(st,{})})]})})})},lt=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,142)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),r(t),i(t)}))};i.a.render(Object(W.jsx)(a.a.StrictMode,{children:Object(W.jsx)(ut,{})}),document.getElementById("root")),lt()},84:function(t,e,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.4ecdd6e7.chunk.js.map