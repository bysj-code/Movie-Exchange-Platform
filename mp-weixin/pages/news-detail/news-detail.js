(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{"0a80":function(t,n,e){"use strict";(function(t){e("4de4");a(e("66fd"));var n=a(e("6818"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"15b6":function(t,n,e){"use strict";var a=e("e8f7"),r=e.n(a);r.a},6818:function(t,n,e){"use strict";e.r(n);var a=e("f88f"),r=e("b75a");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("15b6");var i,c=e("f0c5"),o=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"3b1ac260",null,!1,a["a"],i);n["default"]=o.exports},b75a:function(t,n,e){"use strict";e.r(n);var a=e("cac6"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=r.a},cac6:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,a,r,u,i){try{var c=t[u](i),o=c.value}catch(f){return void e(f)}c.done?n(o):Promise.resolve(o).then(a,r)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function c(t){u(i,a,r,c,o,"next",t)}function o(t){u(i,a,r,c,o,"throw",t)}c(void 0)}))}}var c={data:function(){return{detail:{},id:""}},onLoad:function(t){var n=this;return i(a.default.mark((function e(){var r;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.id=t.id,e.next=3,n.$api.info("news",t.id);case 3:r=e.sent,n.detail=r.data,n.detail.content=n.detail.content.replace(/<img/g,'<img style="width: 100%;"');case 6:case"end":return e.stop()}}),e)})))()}};n.default=c},e8f7:function(t,n,e){},f88f:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement;t._self._c},u=[]}},[["0a80","common/runtime","common/vendor"]]]);