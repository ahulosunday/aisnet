"use strict";(self.webpackChunknhia_client=self.webpackChunknhia_client||[]).push([[3410],{67222:function(e,r,n){n.d(r,{Z:function(){return t},g:function(){return c}});var t=1,c=30},33410:function(e,r,n){n.r(r);var t=n(74165),c=n(15861),s=n(29439),i=n(8961),o=n(72791),a=n(1012),l=n(57689),d=n(11087),u=n(1582),h=n(57246),x=n(67222),f=n(30459),j=n(2323),p=n(78983),Z=n(1780),g=n(80184);r.default=function(){var e=(0,o.useState)([]),r=(0,s.Z)(e,2),n=r[0],E=r[1],m=o.useState(1),D=(0,s.Z)(m,2),w=D[0],y=D[1],v=(0,o.useState)([]),N=(0,s.Z)(v,2),O=N[0],S=N[1],b=(0,o.useContext)(a.V),k=b.currentUser,L=b.permissions,R=(0,l.s0)();(0,o.useEffect)((function(){L.indexOf("ADD_ROLES")>-1||R("/");var e=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/role/".concat(x.Z,"/").concat(x.g)).then((function(e){E(e.data.res),S(e.data)})).catch((function(e){(0,f.Z)("Error occured while loading data.","error")}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,f.Z)("Error occured while loading data.","error");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(r){return e.apply(this,arguments)}}();e()}),[L,R,k]);var A=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r,n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(n);try{(0,j.JE)(i.Z.get("/role/".concat(w,"/").concat(x.g)).then((function(e){E(e.data.res),S(e.data)})).catch((function(e){(0,f.Z)("Error occured while loading data.","error")})))}catch(r){(0,f.Z)("Error occured while loading data.","error")}case 2:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}();return(0,g.jsx)(p.rb,{children:(0,g.jsx)(p.b7,{xs:10,style:{fontSize:"12px"},children:(0,g.jsxs)(p.xH,{className:"mb-12",children:[(0,g.jsx)(p.bn,{style:{backgroundColor:"skyblue"},children:(0,g.jsx)("strong",{style:{color:"white"},children:"ADD ROLES"})}),(0,g.jsx)(p.sl,{children:(0,g.jsxs)(Z.q3,{add:"ADD ROLES",href:"role/add",showAdd:L.indexOf("ADD_ROLES")>-1,children:[(0,g.jsxs)(p.Sx,{striped:!0,style:{fontSize:"12px"},align:"middle",responsive:!0,children:[(0,g.jsx)(p.V,{children:(0,g.jsxs)(p.T6,{children:[(0,g.jsx)(p.is,{children:"Name"}),(0,g.jsx)(p.is,{children:"Description"}),(0,g.jsx)(p.is,{})]})}),(0,g.jsx)(p.NR,{children:0===n.length?"":n.map((function(e){return(0,g.jsxs)(p.T6,{children:[(0,g.jsx)(p.NN,{children:e.name}),(0,g.jsx)(p.NN,{children:e.description}),(0,g.jsx)(p.NN,{children:(0,g.jsxs)(p.Z0,{children:[L.indexOf("EDIT_ROLE")>-1?(0,g.jsx)(p.u5,{color:"secondary",size:"sm",children:(0,g.jsx)(d.rU,{to:"/".concat(0,"/role/"),state:e.id,className:"edit",style:{color:"white",textDecoration:"none"},children:" Edit"})}):"",L.indexOf("ADD_ROLES")>-1?(0,g.jsx)(p.u5,{color:"primary",size:"sm",children:(0,g.jsx)(d.rU,{to:"/".concat(0,"/role/0"),state:e.id,className:"edit",style:{color:"white",textDecoration:"none"},children:" Assign Permission"})}):"",L.indexOf("DELETE_ROLE")>-1?(0,g.jsx)(p.u5,{color:"danger",size:"sm",children:(0,g.jsx)(d.rU,{to:"/delete",state:e.id+"&/role/list&/role/",className:"delete",style:{color:"white",textDecoration:"none"},children:"Delete"})}):""]})})]},e.id)}))})]}),(0,g.jsx)(u.Z,{spacing:2,children:(0,g.jsx)(h.Z,{count:O.totalPages,page:w,onChange:A,variant:"outlined",shape:"rounded",color:"secondary"})})]})})]})})})}}}]);
//# sourceMappingURL=3410.7966eda0.chunk.js.map