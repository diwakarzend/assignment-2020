(this["webpackJsonpattend-front"]=this["webpackJsonpattend-front"]||[]).push([[3],{91:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.r(e);var s=n(1),f=n(41),l=n(10),p=n(40),b=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(p,t);var e,n,i,f,l=(e=p,function(){var t,n=c(e);if(a()){var o=c(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return u(this,t)});function p(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(e=l.call(this,t)).toggletab=function(){e.setState({displaytab:!e.state.displaytab})},e.state={displaytab:!1},t.fetchBookList(),e}return n=p,(i=[{key:"render",value:function(){return s.createElement("div",{className:"accordian-wrapper"},s.createElement("div",null,s.createElement("div",{className:"accordian-tab"},s.createElement("h2",null,"Library Books"),s.createElement("span",{onClick:this.toggletab},this.state.displaytab?"-":"+")),s.createElement("div",{className:this.state.displaytab?"accordian-content active":"accordian-content"},this.props.bookList&&this.props.bookList.data.map((function(t){var e=t.bookName;return t.publisherName,s.createElement("p",null,e)})))))}}])&&o(n.prototype,i),f&&o(n,f),p}(s.Component);e.default=Object(f.b)((function(t){return{bookList:t.bookReducer.bookList}}),(function(t){return Object(l.b)({fetchBookList:p.b},t)}))(b)}}]);
//# sourceMappingURL=3.a3766fe9.chunk.js.map