(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{7218:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plasmic-host",function(){return c(1523)}])},3027:function(d,b,a){"use strict";a.d(b,{I_:function(){return r},H3:function(){return s},gE:function(){return q},gN:function(){return t}});var e=a(5893),f=a(6983),c=a(7145),g=a.n(c),h=a(7294),i=a(1799),j=a(9396),k=a(603),l=a(9272),m=a(9294),n={CARD:"card"},o={border:"1px dashed gray",padding:"0.5rem 1rem",marginBottom:".5rem",backgroundColor:"white",cursor:"move"},p=function(a){var s=a.id,f=a.children,t=a.index,u=a.moveCard;a.className;var b=(0,h.useRef)(null),c=(0,k.Z)((0,l.L)({accept:n.CARD,collect:function(a){return{handlerId:a.getHandlerId()}},hover:function(f,i){if(b.current){var d,c=f.index,a=t;if(c!==a){var e=null===(d=b.current)|| void 0===d?void 0:d.getBoundingClientRect(),g=(e.bottom-e.top)/2,h=i.getClientOffset().y-e.top;(!(c<a)||!(h<g))&&(!(c>a)||!(h>g))&&(u(c,a),f.index=a)}}}}),2),g=c[0].handlerId,p=c[1],d=(0,k.Z)((0,m.c)({type:n.CARD,item:function(){return{id:s,index:t}},collect:function(a){return{isDragging:a.isDragging()}}}),2),q=d[0].isDragging,r=d[1];return r(p(b)),(0,e.jsx)("div",{ref:b,style:(0,j.Z)((0,i.Z)({},o),{opacity:q?0:1}),"data-handler-id":g,children:f})},q=[{id:1,text:"Write a cool JS library"},{id:2,text:"Make it generic enough"},{id:3,text:"Write README"},{id:4,text:"Create some examples"},{id:5,text:"Spam in Twitter and IRC to promote it (note that this element is taller than the others)"},{id:6,text:"???"},{id:7,text:"PROFIT"},],r=function(a){var d=a.className,b=a.defaultData,c=(0,h.useState)(void 0===b?[]:b),f=c[0],i=c[1],j=(0,h.useCallback)(function(a,b){i(function(c){return g()(c,{$splice:[[a,1],[b,0,c[a]],]})})},[]),k=(0,h.useCallback)(function(a,b){return(0,e.jsx)(p,{index:b,id:a.id,moveCard:j,children:a.text},a.id)},[]);return(0,e.jsx)("div",{className:d,children:f.map(function(a,b){return k(a,b)})})},s=function(a){var d=a.className,b=a.defaultData,j=a.children,c=(0,h.useState)(void 0===b?[]:b),i=c[0],k=c[1],l=(0,h.useCallback)(function(a,b){k(function(c){return g()(c,{$splice:[[a,1],[b,0,c[a]],]})})},[]),m=(0,h.useCallback)(function(a,b){return(0,e.jsx)(f.FW,{name:"card",data:a,children:(0,e.jsx)(p,{index:b,id:a.id,moveCard:l,children:(0,f.xH)(b,j)})},a.id)},[]);return(0,e.jsx)("div",{className:d,children:i.map(function(a,b){return m(a,b)})})};function t(a){var c=a.className,b=a.field,d=(0,f.v9)("card");return(0,e.jsx)("div",{className:c,children:d[null!=b?b:"id"]})}},1523:function(d,b,a){"use strict";a.r(b),a.d(b,{default:function(){return i}});var e=a(5893);a(7294);var c=a(4298),f=a.n(c),g=a(6983),h=a(6783);function i(){return h.p&&(0,e.jsxs)("div",{children:[(0,e.jsx)(f(),{src:"https://static1.plasmic.app/preamble.js",strategy:"beforeInteractive"}),(0,e.jsx)(g.nh,{})]})}},6783:function(f,d,b){"use strict";b.d(d,{p:function(){return c}});var e=b(6983),a=b(3027),c=(0,e.fZ)({projects:[{id:"48urnctFmaYjeHBp3o9yY1",token:"JYhhxVfCOcX2e1oSAeDOMMJJuIcWeV59RCRFQwew77lt3qnhL4YMGvaO67cBTr84mAwH81d3162gnybtxdw"},],preview:!1});c.registerComponent(a.I_,{name:"AtomicContainer",props:{defaultData:{type:"object",defaultValue:a.gE}}}),c.registerComponent(a.H3,{name:"CustomizableContainer",providesData:!0,props:{defaultData:{type:"object",defaultValue:a.gE},children:{type:"slot",defaultValue:{type:"vbox",children:[{type:"component",name:"Field"},]}}}}),c.registerComponent(a.gN,{name:"Field",props:{field:{type:"string",defaultValue:"text"}}})},4298:function(a,c,b){a.exports=b(699)}},function(a){a.O(0,[774,862,888,179],function(){var b;return a(a.s=7218)}),_N_E=a.O()}])