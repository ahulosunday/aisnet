"use strict";(self.webpackChunknhia_client=self.webpackChunknhia_client||[]).push([[3827],{89634:function(t,e,n){n.a(t,(async function(t,r){try{n.r(e);var o=n(74165),a=n(15861),i=n(29439),s=n(57689),c=n(11087),u=n(22134),l=n(29019),d=n(64554),f=n(20890),h=n(72791),p=n(99126),m=n(2323),Z=n(30459),v=n(80184),x=t([p]);p=(x.then?(await x)():x)[0];var y={position:"absolute",top:"30%",left:"50%",transform:"translate(-50%, -50%)",width:"50%",bgcolor:"#f0dfdf",border:"1px solid red",boxShadow:1,p:4};e.default=function(){var t=(0,s.TH)().state,e=(0,s.s0)(),n=t.split("&")[1],r=t.split("&")[0],x=t.split("&")[2],w=h.useState(!1),b=(0,i.Z)(w,2),g=b[0],j=b[1];h.useEffect((function(){j(!0)}));var N=function(){var t=(0,a.Z)((0,o.Z)().mark((function t(a){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{(0,m.JE)(p.Z.delete("".concat(x+r)).then((function(t){(0,Z.Z)("Transaction completed with status: "+t.statusText,"info"),e("".concat(n))})).catch((function(t){(0,Z.Z)("Transaction completed with status: "+t,"error")})))}catch(o){(0,Z.Z)("Transaction completed with status: "+o,"error")}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,v.jsx)(l.Z,{className:"error-page",open:g,"aria-labelledby":"modal-modal-title","aria-descriptionby":"modal-modal-description",children:(0,v.jsx)(d.Z,{sx:y,children:(0,v.jsxs)(f.Z,{id:"modal-modal-description",sx:{mt:-1},children:[(0,v.jsx)("div",{style:{textAlign:"right"},children:(0,v.jsx)(c.rU,{style:{textDecoration:"none"},to:n,children:(0,v.jsx)(u.FNM,{})})}),(0,v.jsx)("div",{style:{color:"red",textTransform:"uppercase",margin:0},children:"Deleting ..."}),(0,v.jsx)("div",{className:"error-body",children:(0,v.jsx)("span",{children:"Are you sure that you want to delete the seleted record, this action can not be rolled back. Do you want to continue ...?"})}),(0,v.jsx)("div",{className:"button",children:(0,v.jsx)("button",{style:{border:"1px solid red",cursor:"pointer",width:"70px",color:"red",height:"30px"},onClick:N,children:"Delete"})})]})})})},r()}catch(w){r(w)}}))},64554:function(t,e,n){n.d(e,{Z:function(){return x}});var r=n(87462),o=n(63366),a=n(72791),i=n(30831),s=n(22421),c=n(60104),u=n(78519),l=n(33459),d=n(80184),f=["className","component"];var h=n(55902),p=n(67107),m=n(988),Z=(0,p.Z)(),v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.themeId,n=t.defaultTheme,h=t.defaultClassName,p=void 0===h?"MuiBox-root":h,m=t.generateClassName,Z=(0,s.ZP)("div",{shouldForwardProp:function(t){return"theme"!==t&&"sx"!==t&&"as"!==t}})(c.Z);return a.forwardRef((function(t,a){var s=(0,l.Z)(n),c=(0,u.Z)(t),h=c.className,v=c.component,x=void 0===v?"div":v,y=(0,o.Z)(c,f);return(0,d.jsx)(Z,(0,r.Z)({as:x,ref:a,className:(0,i.Z)(h,m?m(p):p),theme:e&&s[e]||s},y))}))}({themeId:m.Z,defaultTheme:Z,defaultClassName:"MuiBox-root",generateClassName:h.Z.generate}),x=v},13967:function(t,e,n){n.d(e,{Z:function(){return i}});n(72791);var r=n(33459),o=n(36482),a=n(988);function i(){var t=(0,r.Z)(o.Z);return t[a.Z]||t}},78519:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(93433),o=n(87462),a=n(63366),i=n(82466),s=n(87416),c=["sx"],u=function(t){var e,n,r={systemProps:{},otherProps:{}},o=null!=(e=null==t||null==(n=t.theme)?void 0:n.unstable_sxConfig)?e:s.Z;return Object.keys(t).forEach((function(e){o[e]?r.systemProps[e]=t[e]:r.otherProps[e]=t[e]})),r};function l(t){var e,n=t.sx,s=(0,a.Z)(t,c),l=u(s),d=l.systemProps,f=l.otherProps;return e=Array.isArray(n)?[d].concat((0,r.Z)(n)):"function"===typeof n?function(){var t=n.apply(void 0,arguments);return(0,i.P)(t)?(0,o.Z)({},d,t):d}:(0,o.Z)({},d,n),(0,o.Z)({},f,{sx:e})}},78949:function(t,e,n){function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return null==e?t:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];t.apply(this,r),e.apply(this,r)}}),(function(){}))}n.d(e,{Z:function(){return r}})},84913:function(t,e,n){function r(t){return t&&t.ownerDocument||document}n.d(e,{Z:function(){return r}})},55300:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(84913);function o(t){return(0,r.Z)(t).defaultView||window}},30831:function(t,e,n){function r(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}e.Z=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}}}]);
//# sourceMappingURL=3827.19b91f63.chunk.js.map