webpackJsonp([2,0],[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(9),u=r(o),a=n(34),s=r(a);new u.default({el:"#app",render:function(t){return t(s.default)}}),u.default.directive("mdl",{bind:function(){return componentHandler.upgradeElement((void 0).el)}})},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GET_PRODUCTS="products/GET_PRODUCTS",e.GET_CATEGORIES="products/GET_CATEGORIES"},,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="https://project-5613440220430148247.firebaseio.com/api/v1/";e.default=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),u=r(o),a=n(9),s=r(a),i=n(12),c=r(i);s.default.use(u.default);var d=new u.default.Store({strict:!1,modules:{products:c.default}});e.default=d},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u,a,s=n(19),i=o(s),c=n(13),d=r(c),f=n(2),l=r(f),_=n(10),p=o(_),E={categories:{},products:{}},h=(u={},(0,i.default)(u,l.GET_CATEGORIES,function(t){fetch(p.default+"categories.json").then(function(t){return t.json()}).then(function(e){return t.commit(d.GET_CATEGORIES_SUCCESS,{categories:e})}).catch(function(){return t.commit(d.GET_CATEGORIES_FAILURE)})}),(0,i.default)(u,l.GET_PRODUCTS,function(t){fetch(p.default+"products.json").then(function(t){return t.json()}).then(function(e){return t.commit(d.GET_PRODUCTS_SUCCESS,{products:e})}).catch(function(){return t.commit(d.GET_PRODUCTS_FAILURE)})}),u),v=(a={},(0,i.default)(a,d.GET_CATEGORIES_SUCCESS,function(t,e){var n=e.categories;t.categories=n}),(0,i.default)(a,d.GET_PRODUCTS_SUCCESS,function(t,e){var n=e.products;t.products=n}),a);e.default={state:E,actions:h,mutations:v}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GET_CATEGORIES_SUCCESS="products/GET_CATEGORIES_SUCCESS",e.GET_CATEGORIES_FAILURE="products/GET_CATEGORIES_FAILURE",e.GET_PRODUCTS_SUCCESS="products/GET_PRODUCTS_SUCCESS",e.GET_PRODUCTS_FAILURE="products/GET_PRODUCTS_FAILURE"},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(35),u=r(o),a=n(11),s=r(a);e.default={store:s.default,components:{Layout:u.default}}},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(4),a=n(37),s=o(a),i=n(2),c=r(i);e.default={components:{ProductsList:s.default},computed:(0,u.mapState)({categories:function(t){return t.products.categories}}),created:function(){this.$store.dispatch(c.GET_CATEGORIES)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{data:Object},computed:{shortDescription:function(){var t=this.data.description;return t.length>100?t.substr(0,100)+"...":t}}}},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(4),a=n(36),s=o(a),i=n(2),c=r(i);e.default={components:{Product:s.default},computed:(0,u.mapState)({products:function(t){return t.products.products}}),created:function(){this.$store.dispatch(c.GET_PRODUCTS)}}},,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var r,o;r=n(14);var u=n(38);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=u.render,o.staticRenderFns=u.staticRenderFns,t.exports=r},function(t,e,n){var r,o;n(31),r=n(15);var u=n(39);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=u.render,o.staticRenderFns=u.staticRenderFns,o._scopeId="data-v-4596ea9c",t.exports=r},function(t,e,n){var r,o;n(33),r=n(16);var u=n(41);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=u.render,o.staticRenderFns=u.staticRenderFns,o._scopeId="data-v-c1d06d26",t.exports=r},function(t,e,n){var r,o;n(32),r=n(17);var u=n(40);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=u.render,o.staticRenderFns=u.staticRenderFns,o._scopeId="data-v-7e710c14",t.exports=r},function(module,exports){module.exports={render:function(){with(this)return _h("layout")},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header"},[_m(0)," ",_h("div",{staticClass:"mdl-layout__drawer"},[_h("nav",{staticClass:"mdl-navigation"},[_l(categories,function(t){return _h("a",{staticClass:"mdl-navigation__link",attrs:{href:"#"}},["\n        "+_s(t.title)+"\n    "])})])])," ",_h("main",{staticClass:"mdl-layout__content"},[_h("products-list")])])},staticRenderFns:[function(){with(this)return _h("header",{staticClass:"mdl-layout__header"},[_h("div",{staticClass:"mdl-layout__header-row"},[_h("span",{staticClass:"mdl-layout-title"},["Framapp-Vue"])," ",_h("div",{staticClass:"mdl-layout-spacer"})])])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("main",[_h("section",[_l(products,function(t){return _h("product",{attrs:{data:t,"track-by":"id"}})})])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"card"},[_h("img",{attrs:{src:this.data.imageUrl}})," ",_h("title",[_s(this.data.title)])," ",_h("div",[_s(this.shortDescription)])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.205f26f8e853f2106caa.js.map