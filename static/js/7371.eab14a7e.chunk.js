"use strict";(self.webpackChunknhia_client=self.webpackChunknhia_client||[]).push([[7371],{25781:function(e,n,t){var r=t(59860),o=t(57689),a=t(86711),c=t(80184);n.Z=function(e){var n=(0,o.s0)();return(0,c.jsx)(r.Z,{color:"secondary",onClick:function(t){n(e.url)},variant:"contained",style:{backgroundColor:"gray"},endIcon:(0,c.jsx)(a.Z,{}),loadingPosition:"end",children:(0,c.jsx)("span",{children:"CANCEL"})})}},97371:function(e,n,t){t.a(e,(async function(e,r){try{t.r(n);var o=t(74165),a=t(15861),c=t(4942),i=t(1413),s=t(29439),u=t(99126),l=t(72791),d=t(1012),f=t(57689),p=t(25781),h=t(30459),v=t(1582),x=t(59860),Z=t(21686),m=t(78983),g=t(59930),j=t(80184),y=e([u,d,g]);[u,d,g]=y.then?(await y)():y;n.default=function(){var e=(0,l.useState)(!1),n=(0,s.Z)(e,2),t=n[0],r=n[1],y=(0,l.useState)([]),b=(0,s.Z)(y,2),k=b[0],C=b[1],S=(0,l.useState)([]),w=(0,s.Z)(S,2),P=w[0],A=w[1],L=(0,l.useState)([]),I=(0,s.Z)(L,2),D=I[0],N=I[1],G=(0,l.useContext)(d.V),R=G.currentUser,T=G.permissions,M=(0,f.s0)(),O=(0,l.useState)({name:"",userId:null===R||void 0===R?void 0:R.id,code:"",countryId:"",regionId:"",stateId:""}),z=(0,s.Z)(O,2),B=z[0],E=z[1],_=function(e){E((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,c.Z)({},e.target.name,e.target.value))}))},F=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,r(!0),e.next=5,u.Z.post("/lga",B).then((function(e){200===e.status&&(r(!1),(0,h.Z)("Transaction completed with status: "+e.statusText,"success"),M("/lga"))})).catch((function(e){r(!1),(0,h.Z)("Transaction failed with status: "+e,"error")}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),(0,h.Z)("Transaction failed with internal error ","error");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}(),X=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.target.value,e.next=4,u.Z.get("/region/country/".concat(t)).then((function(e){A(e.data)})).catch((function(e){(0,h.Z)(e,"error")}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),(0,h.Z)("Internal error occured ...","error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),$=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.target.value,e.next=4,u.Z.get("/state/region/".concat(t)).then((function(e){N(e.data)})).catch((function(e){(0,h.Z)(e,"error")}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),(0,h.Z)("Innternal error occured ...","error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/country").then((function(e){C(e.data)})).catch((function(e){(0,h.Z)(e,"error")}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,h.Z)("Internal error occured ...","error");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}();e(),T.indexOf("ADD_LGAS")>-1||M("/")}),[T,M]),(0,j.jsx)(m.rb,{children:(0,j.jsx)(m.b7,{xs:12,style:{fontSize:"12px"},children:(0,j.jsxs)(m.xH,{className:"mb-12",children:[(0,j.jsx)(m.bn,{style:{backgroundColor:"skyblue"},children:(0,j.jsx)("strong",{style:{color:"white"},children:"ADD LGAs"})}),(0,j.jsx)(m.sl,{children:(0,j.jsxs)(g.q3,{add:"LGA",children:[(0,j.jsxs)(m.rb,{children:[(0,j.jsxs)(m.b7,{xs:!0,children:["Country",(0,j.jsxs)(m.LX,{name:"countryId",onChange:_,onBlur:X,children:[(0,j.jsx)("option",{value:0,disabled:!0,selected:!0,children:"--select Country--"}),0===k.length?"":k.map((function(e){return(0,j.jsxs)("option",{value:e.id,children:[e.code+" - "+e.name," "]},e.id)}))]})]}),(0,j.jsxs)(m.b7,{xs:!0,children:["Region",(0,j.jsxs)(m.LX,{name:"regionId",onChange:_,onBlur:$,children:[(0,j.jsx)("option",{value:0,disabled:!0,selected:!0,children:"--select Region--"}),0===P.length?"":P.map((function(e){return(0,j.jsxs)("option",{value:e.id,children:[e.name," "]},e.id)}))]})]})]}),(0,j.jsx)(m.rb,{children:(0,j.jsxs)(m.b7,{xs:!0,children:["State",(0,j.jsxs)(m.LX,{name:"stateId",onChange:_,children:[(0,j.jsx)("option",{value:0,disabled:!0,selected:!0,children:"--select State--"}),0===D.length?"":D.map((function(e){return(0,j.jsxs)("option",{value:e.id,children:[e.name," "]},e.id)}))]})]})}),(0,j.jsxs)(m.rb,{children:[(0,j.jsxs)(m.b7,{xs:!0,children:["Lga",(0,j.jsx)(m.jO,{type:"text",value:B.name,name:"name",placeholder:"Lga Name",onChange:_})]}),(0,j.jsxs)(m.b7,{xs:!0,children:["Code",(0,j.jsx)(m.jO,{type:"text",value:B.code,name:"code",placeholder:"Lga Code",onChange:_})]})]}),(0,j.jsx)(m.rb,{children:(0,j.jsxs)(m.b7,{xs:!0,children:[(0,j.jsx)("br",{}),T.indexOf("ADD_LGAS")>-1?(0,j.jsxs)(v.Z,{direction:"row",spacing:1,children:[" ",(0,j.jsx)(x.Z,{size:"small",onClick:function(e){return F(e)},endIcon:(0,j.jsx)(Z.Z,{}),loading:t,loadingPosition:"end",variant:"contained",children:(0,j.jsx)("span",{children:"Submit"})})," ",(0,j.jsx)(p.Z,{url:"/lga"})]}):(0,j.jsx)(p.Z,{url:"/lga"})]})})]})})]})})})},r()}catch(b){r(b)}}))},86711:function(e,n,t){var r=t(64836);n.Z=void 0;var o=r(t(45649)),a=t(80184),c=(0,o.default)((0,a.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");n.Z=c},21686:function(e,n,t){var r=t(64836);n.Z=void 0;var o=r(t(45649)),a=t(80184),c=(0,o.default)((0,a.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");n.Z=c},1582:function(e,n,t){t.d(n,{Z:function(){return P}});var r=t(4942),o=t(63366),a=t(87462),c=t(72791),i=t(30831),s=t(82466),u=t(94419),l=t(21217),d=(0,t(44046).ZP)(),f=t(67078),p=t(78519),h=t(85080),v=t(51184),x=t(45682),Z=t(80184),m=["component","direction","spacing","divider","children","className","useFlexGap"],g=(0,h.Z)(),j=d("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}});function y(e){return(0,f.Z)({props:e,name:"MuiStack",defaultTheme:g})}function b(e,n){var t=c.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,o){return e.push(r),o<t.length-1&&e.push(c.cloneElement(n,{key:"separator-".concat(o)})),e}),[])}var k=function(e){var n=e.ownerState,t=e.theme,o=(0,a.Z)({display:"flex",flexDirection:"column"},(0,v.k9)({theme:t},(0,v.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var c=(0,x.hB)(t),i=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),u=(0,v.P$)({values:n.direction,base:i}),l=(0,v.P$)({values:n.spacing,base:i});"object"===typeof u&&Object.keys(u).forEach((function(e,n,t){if(!u[e]){var r=n>0?u[t[n-1]]:"column";u[e]=r}}));o=(0,s.Z)(o,(0,v.k9)({theme:t},l,(function(e,t){return n.useFlexGap?{gap:(0,x.NA)(c,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,r.Z)({},"margin".concat((o=t?u[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,x.NA)(c,e))};var o})))}return o=(0,v.dt)(t.breakpoints,o)};var C=t(66934),S=t(31402),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?j:n,r=e.useThemeProps,s=void 0===r?y:r,d=e.componentName,f=void 0===d?"MuiStack":d,h=t(k),v=c.forwardRef((function(e,n){var t=s(e),r=(0,p.Z)(t),c=r.component,d=void 0===c?"div":c,v=r.direction,x=void 0===v?"column":v,g=r.spacing,j=void 0===g?0:g,y=r.divider,k=r.children,C=r.className,S=r.useFlexGap,w=void 0!==S&&S,P=(0,o.Z)(r,m),A={direction:x,spacing:j,useFlexGap:w},L=(0,u.Z)({root:["root"]},(function(e){return(0,l.Z)(f,e)}),{});return(0,Z.jsx)(h,(0,a.Z)({as:d,ownerState:A,ref:n,className:(0,i.Z)(L.root,C)},P,{children:y?b(k,y):k}))}));return v}({createStyledComponent:(0,C.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,S.Z)({props:e,name:"MuiStack"})}}),P=w},78519:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(93433),o=t(87462),a=t(63366),c=t(82466),i=t(87416),s=["sx"],u=function(e){var n,t,r={systemProps:{},otherProps:{}},o=null!=(n=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?n:i.Z;return Object.keys(e).forEach((function(n){o[n]?r.systemProps[n]=e[n]:r.otherProps[n]=e[n]})),r};function l(e){var n,t=e.sx,i=(0,a.Z)(e,s),l=u(i),d=l.systemProps,f=l.otherProps;return n=Array.isArray(t)?[d].concat((0,r.Z)(t)):"function"===typeof t?function(){var e=t.apply(void 0,arguments);return(0,c.P)(e)?(0,o.Z)({},d,e):d}:(0,o.Z)({},d,t),(0,o.Z)({},f,{sx:n})}},30831:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.Z=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}}}]);
//# sourceMappingURL=7371.eab14a7e.chunk.js.map