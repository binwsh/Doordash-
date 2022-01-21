(this.webpackJsonpspringfrontend=this.webpackJsonpspringfrontend||[]).push([[0],{147:function(e,t,n){},148:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var c=n(13),r=n(0),a=n.n(r),i=n(24),s=n.n(i),o=(n(147),n(32)),u=n(230),l=n(228),j=(n(148),n(73)),d=n(133),h=n(65),b=n(131),f=n(227),O=n(225),m=function(e){var t="/login?username=".concat(e.username,"&password=").concat(e.password);return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to log in")}))},p=n(138),g=j.a.Option,x=function(e){var t=e.itemId,n=Object(r.useState)(!1),a=Object(o.a)(n,2),i=a[0],s=a[1];return Object(c.jsx)(h.a,{title:"Add to shopping cart",children:Object(c.jsx)(b.a,{loading:i,type:"primary",icon:Object(c.jsx)(p.a,{}),onClick:function(){s(!0),function(e){return fetch("/order/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){if(201!==e.status)throw Error("Fail to add menu item to shopping cart")}))}(t).then((function(){return d.b.success("Successfully add item")})).catch((function(e){return d.b.error(e.message)})).finally((function(){s(!1)}))}})})},y=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(),s=Object(o.a)(i,2),u=s[0],l=s[1],h=Object(r.useState)([]),b=Object(o.a)(h,2),m=b[0],p=b[1],y=Object(r.useState)(!1),v=Object(o.a)(y,2),S=v[0],w=v[1],C=Object(r.useState)(!1),F=Object(o.a)(C,2),I=F[0],k=F[1];return Object(r.useEffect)((function(){k(!0),fetch("/restaurants").then((function(e){if(200!==e.status)throw Error("Fail to get restaurants");return e.json()})).then((function(e){p(e)})).catch((function(e){d.b.error(e.message)})).finally((function(){k(!1)}))}),[]),Object(r.useEffect)((function(){var e;u&&(w(!0),(e=u,fetch("/restaurant/".concat(e,"/menu")).then((function(e){if(200!==e.status)throw Error("Fail to get menus");return e.json()}))).then((function(e){a(e)})).catch((function(e){d.b.error(e.message)})).finally((function(){w(!1)})))}),[u]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j.a,{value:u,onSelect:function(e){return l(e)},placeholder:"Select a restaurant",loading:I,style:{width:300},onChange:function(){},children:m.map((function(e){return Object(c.jsx)(g,{value:e.id,children:e.name})}))}),u&&Object(c.jsx)(f.b,{style:{marginTop:20},loading:S,grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:3,xxl:3},dataSource:n,renderItem:function(e){return Object(c.jsx)(f.b.Item,{children:Object(c.jsxs)(O.a,{title:e.name,extra:Object(c.jsx)(x,{itemId:e.id}),children:[Object(c.jsx)("img",{src:e.imageUrl,alt:e.name,style:{height:340,width:"100%",display:"block"}}),"Price: ".concat(e.price)]})})}})]})},v=n(125),S=n(137),w=n(132),C=n(226),F=n(229),I=n(232),k=n(233),P=function(e){Object(S.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={loading:!1},e.onFinish=function(t){e.setState({loading:!0}),m(t).then((function(){e.setState({displayModal:!1}),d.b.success("Login Successful"),e.props.onSuccess()})).catch((function(e){d.b.error(e.message)})).finally((function(){e.setState({loading:!1})}))},e.render=function(){return Object(c.jsxs)(C.a,{name:"normal_login",onFinish:e.onFinish,style:{width:300,margin:"auto"},children:[Object(c.jsx)(C.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(c.jsx)(F.a,{prefix:Object(c.jsx)(I.a,{}),placeholder:"Username"})}),Object(c.jsx)(C.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(c.jsx)(F.a.Password,{prefix:Object(c.jsx)(k.a,{}),placeholder:"Password"})}),Object(c.jsx)(C.a.Item,{children:Object(c.jsx)(b.a,{type:"primary",htmlType:"submit",loading:e.state.loading,children:"Login"})})]})},e}return n}(a.a.Component),T=n(231),E=l.a.Text,L=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(),s=Object(o.a)(i,2),u=s[0],l=s[1],j=Object(r.useState)(!1),h=Object(o.a)(j,2),O=h[0],m=h[1],p=Object(r.useState)(!1),g=Object(o.a)(p,2),x=g[0],y=g[1];Object(r.useEffect)((function(){n&&(m(!0),fetch("/cart").then((function(e){if(200!==e.status)throw Error("Fail to get shopping cart data");return e.json()})).then((function(e){l(e)})).catch((function(e){d.b.error(e.message)})).finally((function(){m(!1)})))}),[n]);var v=function(){a(!1)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a,{type:"primary",shape:"round",onClick:function(){a(!0)},children:"Cart"}),Object(c.jsx)(T.a,{title:"My Shopping Cart",onClose:v,visible:n,width:520,footer:Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(c.jsx)(E,{strong:!0,children:"Total price: $".concat(null===u||void 0===u?void 0:u.totalPrice)}),Object(c.jsxs)("div",{children:[Object(c.jsx)(b.a,{onClick:v,style:{marginRight:8},children:"Cancel"}),Object(c.jsx)(b.a,{onClick:function(){y(!0),fetch("/checkout").then((function(e){if(200!==e.status)throw Error("Fail to checkout")})).then((function(){d.b.success("Successfully checkout"),a(!1)})).catch((function(e){d.b.error(e.message)})).finally((function(){y(!1)}))},type:"primary",loading:x,disabled:O||0===(null===u||void 0===u?void 0:u.orderItemList.length),children:"Checkout"})]})]}),children:Object(c.jsx)(f.b,{loading:O,itemLayout:"horizontal",dataSource:null===u||void 0===u?void 0:u.orderItemList,renderItem:function(e){return Object(c.jsx)(f.b.Item,{children:Object(c.jsx)(f.b.Item.Meta,{title:e.menuItem.name,description:"$".concat(e.price)})})}})})]})},M=u.a.Header,B=u.a.Content,H=l.a.Title;var U=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)(u.a,{style:{height:"100vh"},children:[Object(c.jsx)(M,{children:Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(H,{level:2,style:{color:"white",lineHeight:"inherit",marginBottom:0},children:"Lai Food"}),n&&Object(c.jsx)("div",{children:Object(c.jsx)(L,{})})]})}),Object(c.jsx)(B,{style:{padding:"50px",maxHeight:"calc(100% - 64px)",overflowY:"auto"},children:n?Object(c.jsx)(y,{}):Object(c.jsx)(P,{onSuccess:function(){return a(!0)}})})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,234)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(U,{})}),document.getElementById("root")),q()}},[[223,1,2]]]);
//# sourceMappingURL=main.eecd7fa6.chunk.js.map