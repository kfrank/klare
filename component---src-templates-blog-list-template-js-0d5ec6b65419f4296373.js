(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/uZM":function(t,e,r){},Bl7J:function(t,e,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("/uZM"),p=r.n(a);var i=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this.props.children;return o.a.createElement("div",{className:p.a.wrapper},o.a.createElement("main",null,t))},n}(o.a.Component);e.a=i},"tJ/O":function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return i})),r.d(e,"blogListQuery",(function(){return u}));r("q8oJ"),r("8npG");var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),p=r("Bl7J");var i=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this.props.pageContext,e=t.currentPage,r=1===e,n=e===t.numPages,i="/writing/"+(e-1==1?"/":(e-1).toString()),u="/writing/"+(e+1).toString(),c=this.props.data.allMarkdownRemark.edges;return o.a.createElement(p.a,null,c.map((function(t){var e=t.node,r=e.frontmatter.title||e.fields.slug;return o.a.createElement("div",{key:e.fields.slug},r)})),!r&&o.a.createElement(a.Link,{to:i,rel:"prev"},"← Previous Page"),!n&&o.a.createElement(a.Link,{to:u,rel:"next"},"Next Page →"))},n}(o.a.Component),u="3891655747"}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-0d5ec6b65419f4296373.js.map