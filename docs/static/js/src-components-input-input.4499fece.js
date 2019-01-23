(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/components/Input/Input.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),p=n("./node_modules/@mdx-js/tag/dist/index.js"),a=n("./node_modules/docz/dist/index.m.js");function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: block;\n  border-radius: 3px;\n  \n  & > input {\n    box-sizing: border-box;\n    display: block;    \n    width: 100%;\n    height: ","px;\n    padding: 0 15px;\n    border: 1px solid #ddd;\n    font-size: 13px;\n    line-height: ","px;\n  }\n"]);return s=function(){return e},e}var c=n("./node_modules/styled-components/dist/styled-components.browser.esm.js").c.div(s(),function(e){return e.size},function(e){return e.size}),i=function(e){var t=e.type,n=e.placeholder,o=e.value,p=e.size,a=e.onChange;return r.a.createElement(c,{size:p},r.a.createElement("input",{type:t,placeholder:n,value:o,onChange:a}))};i.defaultProps={type:"text",placeholder:"",value:"",size:40};var u=i;function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}i.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'password'",computed:!1}]},required:!1,description:""},placeholder:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},value:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:"40",computed:!1},type:{name:"enum",value:[{value:"30",computed:!1},{value:"40",computed:!1},{value:"50",computed:!1}]},required:!1,description:""},onChange:{type:{name:"func"},required:!0,description:""}}},n.d(t,"default",function(){return g});var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,h(t).call(this,e))).layout=null,n}var n,o,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=d(e,["components"]);return r.a.createElement(p.MDXTag,{name:"wrapper",components:t},r.a.createElement(p.MDXTag,{name:"h1",components:t,props:{id:"input"}},"Input"),r.a.createElement(a.f,{of:u}),r.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"type"}},"Type"),r.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"text"}},"text"),r.a.createElement(a.e,{__position:1,__code:'<Input type="text" onChange={e => console.log(e)} />',__scope:{props:this?this.props:n,Input:u}},r.a.createElement(u,{type:"text",onChange:function(e){return console.log(e)}})),r.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"password"}},"password"),r.a.createElement(a.e,{__position:2,__code:'<Input type="password" onChange={e => console.log(e)} />',__scope:{props:this?this.props:n,Input:u}},r.a.createElement(u,{type:"password",onChange:function(e){return console.log(e)}})),r.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"placeholder"}},"Placeholder"),r.a.createElement(a.e,{__position:3,__code:'<Input\n  type="text"\n  placeholder="\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694."\n  onChange={e => console.log(e)}\n/>',__scope:{props:this?this.props:n,Input:u}},r.a.createElement(u,{type:"text",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){return console.log(e)}})),r.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"size"}},"Size"),r.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"30"}},"30"),r.a.createElement(a.e,{__position:4,__code:'<Input type="text" size={30} onChange={e => console.log(e)} />',__scope:{props:this?this.props:n,Input:u}},r.a.createElement(u,{type:"text",size:30,onChange:function(e){return console.log(e)}})),r.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"40"}},"40"),r.a.createElement(a.e,{__position:5,__code:'<Input type="text" size={40} onChange={e => console.log(e)} />',__scope:{props:this?this.props:n,Input:u}},r.a.createElement(u,{type:"text",size:40,onChange:function(e){return console.log(e)}})),r.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"50"}},"50"),r.a.createElement(a.e,{__position:6,__code:'<Input type="text" size={50} onChange={e => console.log(e)} />',__scope:{props:this?this.props:n,Input:u}},r.a.createElement(u,{type:"text",size:50,onChange:function(e){return console.log(e)}})))}}])&&m(n.prototype,o),s&&m(n,s),t}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-components-input-input.7342c47208fe7253f4c4.js.map