(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/uZM":function(t,e,r){},Bl7J:function(t,e,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("/uZM"),p=r.n(a);var u=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this.props.children;return o.a.createElement("div",{className:p.a.wrapper},o.a.createElement("main",null,t))},n}(o.a.Component);e.a=u},ZI6O:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return u})),r.d(e,"projectListQuery",(function(){return i}));r("q8oJ"),r("8npG");var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),p=r("Bl7J");var u=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this.props.pageContext,e=t.currentPage,r=1===e,n=e===t.numPages,u="/work/"+(e-1==1?"/":(e-1).toString()),i="/work/"+(e+1).toString(),c=this.props.data.allMarkdownRemark.edges;return o.a.createElement(p.a,null,c.map((function(t){var e=t.node,r=e.frontmatter.title||e.fields.slug;return o.a.createElement("div",{key:e.fields.slug},r)})),!r&&o.a.createElement(a.Link,{to:u,rel:"prev"},"← Previous Page"),!n&&o.a.createElement(a.Link,{to:i,rel:"next"},"Next Page →"))},n}(o.a.Component),i="3250158515"}}]);
//# sourceMappingURL=component---src-templates-project-list-template-js-4d8935b23ea3d8c4c808.js.map