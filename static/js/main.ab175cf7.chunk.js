(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{33:function(n,e,t){n.exports=t(45)},45:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(18),c=t.n(o),i=t(13);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(9),u=t(10),d="#ebecf0",s="#9daae0",m="#d3daf5",f="#93d67c",p="rgba(9, 30, 66, 0.25)",b="#ffffff",g="#f2d600",E="#eb5a46";function O(){var n=Object(l.a)(["\n  body {\n    margin: 0;\n\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n    background-color: ",";\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  .visually-hidden {\n    position: absolute;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    clip: rect(1px, 1px, 1px, 1px);\n    white-space: nowrap; /* added line */\n  }\n"]);return O=function(){return n},n}var h,v=Object(u.a)(O(),f),k=t(32),j=t(5),x=t(25),y=t(16),D=t(14),w=t.n(D);!function(n){n.TODO="TODO",n.DOING="DOING",n.DONE="DONE"}(h||(h={}));var N=function(){return w()().add(Math.round(7*Math.random()),"d").subtract(2,"d").format("D MMM")},T={tasks:[{id:Object(y.a)(),title:"Task header",description:"Task description",deadline:N(),group:h.TODO},{id:Object(y.a)(),title:"Task header",description:"Task description",deadline:N(),group:h.DOING},{id:Object(y.a)(),title:"Task header",description:"Task description",deadline:N(),group:h.DONE}]},M=function(n){return{type:"ADD_TASK",payload:n}},S=Object(j.c)({taskReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TASK":return Object(x.a)(Object(x.a)({},n),{},{tasks:n.tasks.concat(e.payload)});default:return n}}}),I=Object(k.a)({reducer:S}),B=t(2),A=t(17);function G(){var n=Object(l.a)(["\n  ul {\n    ","\n\n    display: flex;\n    flex-wrap: wrap;\n    width: fit-content;\n  }\n\n  li {\n    flex-shrink: 0;\n  }\n"]);return G=function(){return n},n}function R(){var n=Object(l.a)(["\n  display: block;\n  padding: 5px 10px;\n\n  font-size: 20px;\n  font-weight: bold;\n  color: inherit;\n  background-color: ",";\n\n  transition: background-color 200ms;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    cursor: pointer;\n  }\n\n  &:active {\n    filter: opacity(70%);\n  }\n\n  &.active {\n    background-color: ",";\n    pointer-events: none;\n    box-shadow: inset 0 1px 0 ",";\n\n    &:focus {\n      background-color: ",";\n    }\n  }\n"]);return R=function(){return n},n}var C=Object(u.b)(A.b)(R(),m,d,s,p,s),F=Object(u.b)((function(n){var e=n.className;return r.a.createElement("section",{className:e},r.a.createElement("h2",{className:"visually-hidden"},"Task groups"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(C,{to:"/todo"},"To do")),r.a.createElement("li",null,r.a.createElement(C,{to:"/doing"},"Doing")),r.a.createElement("li",null,r.a.createElement(C,{to:"/done"},"Done"))))}))(G(),"\n  margin: 0;\n  padding: 0;\n  list-style: none;\n");function z(){var n=Object(l.a)(["\n  padding: 10px;\n\n  background-color: ",";\n  border-radius: 3px;\n  box-shadow: 0 1px 0 ",";\n\n  h3 {\n    margin: 0;\n    margin-bottom: 20px;\n  }\n\n  p {\n    margin: 0;\n    margin-bottom: 10px;\n  }\n"]);return z=function(){return n},n}var J=Object(u.b)((function(n){var e=n.className,t=n.title,a=n.description,o=n.deadline;return r.a.createElement("article",{className:e},r.a.createElement("h3",null,t),r.a.createElement("p",null,a),r.a.createElement("time",{dateTime:o},o))}))(z(),(function(n){return function(n){return w()(n,"D MMM").isBefore(w()())?E:w()(n,"D MMM").isBefore(w()().add(3,"d"))?g:b}(n.deadline)}),p);function K(){var n=Object(l.a)(["\n  ","\n\n  display: grid;\n  gap: 20px;\n\n  margin-bottom: 20px;\n"]);return K=function(){return n},n}var L=Object(u.b)((function(n){var e=n.className,t=n.tasks;return r.a.createElement("ul",{className:e},t.map((function(n){return r.a.createElement("li",{key:n.id},r.a.createElement(J,{title:n.title,description:n.description,deadline:n.deadline}))})))}))(K(),"\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"),U=t(23),W=function(n){var e=n.isEdit,t=n.setIsEdit,r=Object(a.useRef)(null);return Object(a.useEffect)((function(){var n,e=function(n){"Escape"===n.code&&t(!1)};return null===(n=r.current)||void 0===n||n.focus(),document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[e,t]),r},_=function(){var n=Object(i.c)(),e=Object(a.useState)(!1),t=Object(U.a)(e,2),o=t[0],c=t[1],l=Object(a.useState)(""),u=Object(U.a)(l,2),d=u[0],s=u[1],m=W({isEdit:o,setIsEdit:c}),f=function(){n(M({id:Object(y.a)(),title:d,description:"",deadline:N(),group:h.TODO})),s("")};return o?r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),d&&f()}},r.a.createElement("input",{ref:m,value:d,onBlur:function(){c(!1),d&&f()},onChange:function(n){s(n.target.value)}})):r.a.createElement("button",{onClick:function(){c(!0)}},"Add another task")},H=t(3),$=function(n){return n.taskReducer.tasks},q=Object(H.a)((function(n){return $(n)}),(function(n){return n.filter((function(n){return n.group===h.TODO}))})),P=Object(H.a)((function(n){return $(n)}),(function(n){return n.filter((function(n){return n.group===h.DOING}))})),Q=Object(H.a)((function(n){return $(n)}),(function(n){return n.filter((function(n){return n.group===h.DONE}))})),V=new Map([["todo",q],["doing",P],["done",Q]]),X=function(n){var e=n.type,t=Object(i.d)(function(n){return V.get(n)||q}(e),i.b);return r.a.createElement("section",null,r.a.createElement("h2",{className:"visually-hidden"},e," group"),r.a.createElement(L,{tasks:t}),r.a.createElement(_,null))};function Y(){var n=Object(l.a)(["\n  section {\n    padding: 15px;\n\n    background-color: ",";\n    border-radius: 0 0 5px 5px;\n  }\n\n  h2 {\n    margin: 0;\n    margin-bottom: 5px;\n  }\n"]);return Y=function(){return n},n}var Z=Object(u.b)((function(n){var e=n.className;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Task manager"),r.a.createElement("main",{className:e},r.a.createElement(F,null),r.a.createElement(B.d,null,r.a.createElement(B.b,{path:"/todo"},r.a.createElement(X,{type:"todo"})),r.a.createElement(B.b,{path:"/doing"},r.a.createElement(X,{type:"doing"})),r.a.createElement(B.b,{path:"/done"},r.a.createElement(X,{type:"done"})),r.a.createElement(B.b,{path:"/"},r.a.createElement(B.a,{to:"/todo"})))))}))(Y(),d);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null),r.a.createElement(i.a,{store:I},r.a.createElement(A.a,null,r.a.createElement(Z,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.ab175cf7.chunk.js.map