(this.webpackJsonppizza=this.webpackJsonppizza||[]).push([[0],{119:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),r=c(7),o=c.n(r),i=(c(90),c(21)),s=c(23),u=c(65),l=c(26),j={fetching:!1,products:[]},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_PRODUCT":return Object(l.a)(Object(l.a)({},t),{},{fetching:!0,error:null});case"FETCH_PRODUCT_SUCCESS":return Object(l.a)(Object(l.a)({},t),{},{fetching:!1,products:e.products});case"FETCH_PRODUCT_ERROR":return Object(l.a)(Object(l.a)({},t),{},{fetching:!1,error:e.error});default:return t}},b=c(25),p=c(33),O=c.n(p),h=[],m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_CART":var c=O.a.find(t,(function(t){return t.product._id===e.payload.product._id}));if(c){c.amount++;var n=t.filter((function(t){return t.product._id!==e.payload.product._id})),a=[].concat(Object(b.a)(n||[]),[c]);return a}var r=[].concat(Object(b.a)(t||[]),[e.payload]);return r;case"REMOVE_CART":var o=t.filter((function(t){return t.product._id!==e.payload.product._id}));return o;case"UPDATE_CART":var i=O.a.find(t,(function(t){return t.product._id===e.payload.product._id}));if(i){var s=t.filter((function(t){return t.product._id!==e.payload.product._id})),u=[].concat(Object(b.a)(s||[]),[i]);return u}return t;case"CLEAR_CART":return[];case"GET_CART":default:return t}},f=Object(s.c)({products:d,carts:m}),x=Object(s.a)(u.a)(s.d)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),g=c(150),v=c(143),_=c(8),y=c(19),C=c.n(y),S=c(24),E=function(t,e){var c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=Object(n.useState)([]),r=Object(_.a)(a,2),o=r[0],i=r[1],s=Object(n.useState)(!1),u=Object(_.a)(s,2),l=u[0],j=u[1],d=Object(n.useState)(!1),p=Object(_.a)(d,2),O=p[0],h=p[1],m=function(){var c=Object(S.a)(C.a.mark((function c(){return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,j(!0),c.t0=i,c.next=5,t.apply(void 0,Object(b.a)(e));case 5:c.t1=c.sent,(0,c.t0)(c.t1),c.next=12;break;case 9:c.prev=9,c.t2=c.catch(0),h(!0);case 12:return c.prev=12,j(!1),c.finish(12);case 15:case"end":return c.stop()}}),c,null,[[0,9,12,15]])})));return function(){return c.apply(this,arguments)}}();return Object(n.useEffect)((function(){c&&m()}),[]),[o,l,O,m]},R=c(66),T=c.n(R).a.create({baseURL:"https://test.pizzahut1150.com/api/"}),k={post:function(t,e,c){return T.post(t,e,c)},get:function(t,e){return T.get(t,e)}},w={getProduct:function(){var t=Object(S.a)(C.a.mark((function t(){var e,c,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/products/",t.next=3,k.get("/products/");case 3:return e=t.sent,c=e.data,n=c,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},z=c(146),L=c(139),A=c(152),D=c(142),N=c(147),F=c(145),U=c(144),B=c(148),P=c(67),I=c.n(P),V=function(t){return{type:"UPDATE_CART",payload:{product:t}}},W=c(2),M=Object(L.a)({root:{maxWidth:345},media:{height:140,backgroundSize:"contain"},floatRight:{marginLeft:"auto"}}),X=function(t){var e=M(),c=Object(i.b)(),n=t.product,a=function(){c(function(t){return{type:"ADD_CART",payload:{product:t,amount:1,id:(new Date).getTime()}}}(n))};return Object(W.jsxs)(A.a,{className:e.root,children:[Object(W.jsx)(D.a,{children:Object(W.jsxs)(v.a,{container:!0,children:[Object(W.jsx)(v.a,{item:!0,xs:12,md:4,children:Object(W.jsx)(U.a,{className:e.media,image:"https://test.pizzahut1150.com"+n.image_th,title:n.imagealt_th})}),Object(W.jsx)(v.a,{item:!0,xs:12,md:8,children:Object(W.jsxs)(F.a,{children:[Object(W.jsx)(z.a,{component:"h3",children:n.product_name_th}),Object(W.jsx)(I.a,{text:n.product_detail_th,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}),Object(W.jsxs)(z.a,{variant:"subtitle2",children:["\u0e3f ",n.price]})]})})]})}),Object(W.jsx)(N.a,{children:Object(W.jsx)(B.a,{size:"small",color:"primary",className:e.floatRight,onClick:function(){a()},children:"Add Card"})})]})},G=function(t){var e=E(w.getProduct,[]),c=Object(_.a)(e,4),n=c[0],a=c[1],r=c[2];c[3];return Object(W.jsxs)("div",{children:[Object(W.jsx)(z.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),a?Object(W.jsx)("div",{children:"fetching..."}):r?Object(W.jsx)("div",{children:"Fetch Error"}):Object(W.jsx)(v.a,{container:!0,spacing:2,children:n.map((function(t,e){return Object(W.jsx)(v.a,{item:!0,xs:12,sm:6,md:4,children:Object(W.jsx)(X,{product:t})},t.product_id)}))})]})},H=c(74),J=c.n(H),K=c(73),Z=c.n(K),q=c(72),Q=c.n(q),Y=c(149),$=Object(L.a)({root:{maxWidth:345},media:{height:80,backgroundSize:"contain"},myCartButton:{minWidth:40},myRemoveButton:{minWidth:40,marginLeft:"auto"},floatRight:{marginLeft:"auto"}}),tt=function(t){var e=$(),c=Object(i.b)(),n=t.cart;return Object(W.jsxs)(A.a,{className:e.root,children:[Object(W.jsx)(D.a,{children:Object(W.jsxs)(v.a,{container:!0,children:[Object(W.jsx)(v.a,{item:!0,xs:12,md:4,children:Object(W.jsx)(U.a,{className:e.media,image:"https://test.pizzahut1150.com"+n.product.image_th,title:n.product.imagealt_th})}),Object(W.jsx)(v.a,{item:!0,xs:12,md:8,children:Object(W.jsxs)(F.a,{children:[Object(W.jsxs)(z.a,{component:"h3",children:[n.product.product_name_th," (\u0e3f ",n.product.price,"/\u0e0a\u0e34\u0e49\u0e19)"]}),Object(W.jsxs)(z.a,{variant:"subtitle2",children:["Total : \u0e3f ",n.amount*n.product.price]})]})})]})}),Object(W.jsx)(Y.a,{}),Object(W.jsxs)(N.a,{children:[Object(W.jsx)(B.a,{size:"small",color:"primary",className:e.myCartButton,onClick:function(){n.amount>1&&(n.amount--,c(V(n.product)))},children:Object(W.jsx)(Q.a,{})}),Object(W.jsxs)(z.a,{variant:"subtitle2",children:["\u0e08\u0e33\u0e19\u0e27\u0e19 ",n.amount," \u0e0a\u0e34\u0e49\u0e19"]}),Object(W.jsx)(B.a,{size:"small",color:"primary",className:e.myCartButton,onClick:function(){n.amount<9&&(n.amount++,c(V(n.product)))},children:Object(W.jsx)(Z.a,{})}),Object(W.jsx)(Y.a,{orientation:"vertical",flexItem:!0}),Object(W.jsx)(B.a,{size:"small",color:"primary",className:e.myCartButton,onClick:function(){c({type:"REMOVE_CART",payload:{product:n.product}})},children:Object(W.jsx)(J.a,{})})]})]})},et=function(t){var e=Object(i.c)((function(t){return t.carts}));return Object(n.useEffect)((function(){console.log("Cart Update",e,e.length)}),[e]),Object(W.jsxs)("div",{children:[Object(W.jsx)(z.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"\u0e15\u0e30\u0e01\u0e23\u0e49\u0e32\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),Object(W.jsx)(v.a,{container:!0,spacing:2,children:e.length>0&&O.a.orderBy(e,["id"]).map((function(t,e){return Object(W.jsx)(v.a,{item:!0,xs:12,children:Object(W.jsx)(tt,{cart:t})},t.id)}))})]})},ct={getLocation:function(){var t=Object(S.a)(C.a.mark((function t(){var e,c,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/address/location",t.next=3,k.get("/address/location");case 3:return e=t.sent,c=e.data,n=c,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},nt=c(37),at=c(44),rt=c(53),ot=c.n(rt),it=c(153),st=c(151),ut={width:"100%",height:"500px"},lt={fillColor:"lightblue",fillOpacity:.5,strokeColor:"blue",strokeOpacity:1,strokeWeight:1,clickable:!1,draggable:!1,editable:!1,geodesic:!1,zIndex:1},jt=Object(L.a)((function(t){return Object(it.a)({paper:{position:"absolute",width:400,backgroundColor:t.palette.background.paper,border:"2px solid #000",boxShadow:t.shadows[5],padding:t.spacing(2,4,3)}})})),dt=function(t){var e=jt(),c=t.location,r=Object(nt.d)({googleMapsApiKey:"AIzaSyDkC_udSZKGGVZg_6vU2Uqc7EJBCOOjm8U",libraries:["places"]}),o=r.isLoaded,i=(r.loadError,a.a.useState((function(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}))),s=Object(_.a)(i,1)[0],u=Object(n.useState)({lat:7.5549,lng:99.615}),l=Object(_.a)(u,2),j=l[0],d=l[1],b=Object(n.useState)(13),p=Object(_.a)(b,2),O=p[0],h=p[1],m=function(t){},f=Object(n.useState)(null),x=Object(_.a)(f,2),g=x[0],y=x[1],C=Object(n.useState)(null),S=Object(_.a)(C,2),E=S[0],R=S[1],T=Object(n.useState)(["",""]),k=Object(_.a)(T,2),w=k[0],z=k[1],L=a.a.useState(!1),A=Object(_.a)(L,2),D=A[0],N=A[1];return Object(n.useEffect)((function(){g&&null!==g&&(console.log(g),""!==g.label&&Object(at.b)(g.label).then((function(t){return Object(at.c)(t[0])})).then((function(t){var e=t.lat,n=t.lng;console.log(e,n),console.log("Successfully got latitude and longitude",{lat:e,lng:n}),R(new google.maps.LatLng({lat:e,lng:n})),d({lat:e,lng:n}),h(15),c.features.map((function(t,c){var a=t.geometry.coordinates.map((function(t,e){return t.map((function(t,e){return[t[1],t[0]]}))}));console.log(ot()([e,n],a[0])),ot()([e,n],a[0])&&(console.log(t.properties.StoreName,t.properties.Remark),z([t.properties.StoreName,t.properties.Remark]),N(!0))}))})))}),[g]),o?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(at.a,{selectProps:{value:g,onChange:y}}),Object(W.jsxs)(nt.a,{mapContainerStyle:ut,center:j,zoom:O,children:[c.features.map((function(t,e){var c=t.geometry.coordinates;console.log(c);var n=t.geometry.coordinates[0].map((function(t){return{lng:parseFloat(t[0]),lat:parseFloat(t[1])}}));return Object(W.jsx)(nt.c,{onLoad:m,paths:n,options:lt},e)})),null!==E&&Object(W.jsx)(nt.b,{position:E})]}),Object(W.jsx)(st.a,{open:D,onClose:function(){N(!1)},children:Object(W.jsx)("div",{className:e.paper,style:s,children:Object(W.jsxs)(v.a,{container:!0,spacing:3,children:[Object(W.jsx)(v.a,{item:!0,xs:12,sm:4,children:"Store Name"}),Object(W.jsx)(v.a,{item:!0,xs:12,sm:8,children:w[0]}),Object(W.jsx)(v.a,{item:!0,xs:12,sm:4,children:"Remark"}),Object(W.jsx)(v.a,{item:!0,xs:12,sm:8,children:w[1]})]})})})]}):Object(W.jsx)(W.Fragment,{})},bt=function(t){var e=function(t,e){var c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=Object(n.useState)({type:"",name:"",crs:{type:"",properties:{name:""}},features:[]}),r=Object(_.a)(a,2),o=r[0],i=r[1],s=Object(n.useState)(!1),u=Object(_.a)(s,2),l=u[0],j=u[1],d=Object(n.useState)(!1),p=Object(_.a)(d,2),O=p[0],h=p[1],m=function(){var c=Object(S.a)(C.a.mark((function c(){return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,j(!0),c.t0=i,c.next=5,t.apply(void 0,Object(b.a)(e));case 5:c.t1=c.sent,(0,c.t0)(c.t1),c.next=12;break;case 9:c.prev=9,c.t2=c.catch(0),h(!0);case 12:return c.prev=12,j(!1),c.finish(12);case 15:case"end":return c.stop()}}),c,null,[[0,9,12,15]])})));return function(){return c.apply(this,arguments)}}();return Object(n.useEffect)((function(){c&&m()}),[]),[o,l,O,m]}(ct.getLocation,[]),c=Object(_.a)(e,4),a=c[0],r=c[1],o=c[2];c[3];return Object(n.useEffect)((function(){console.log(a)}),[a]),Object(W.jsxs)("div",{children:[Object(W.jsx)(z.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"Location"}),r?Object(W.jsx)("div",{children:"fetching..."}):o?Object(W.jsx)("div",{children:"Fetch Error"}):Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(dt,{location:a})})]})};var pt=function(){return Object(W.jsx)(i.a,{store:x,children:Object(W.jsx)(g.a,{style:{padding:"12px 24px"},children:Object(W.jsxs)(v.a,{container:!0,spacing:2,children:[Object(W.jsx)(v.a,{item:!0,xs:9,style:{borderRight:"1px dashed #ccc"},children:Object(W.jsx)(G,{})}),Object(W.jsx)(v.a,{item:!0,xs:3,children:Object(W.jsx)(et,{})}),Object(W.jsx)(v.a,{item:!0,xs:12,children:Object(W.jsx)(bt,{})})]})})})},Ot=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,155)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;c(t),n(t),a(t),r(t),o(t)}))};o.a.render(Object(W.jsx)(a.a.StrictMode,{children:Object(W.jsx)(pt,{})}),document.getElementById("root")),Ot()},90:function(t,e,c){}},[[119,1,2]]]);
//# sourceMappingURL=main.3349604c.chunk.js.map