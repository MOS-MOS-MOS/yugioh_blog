exports.ids = [4];
exports.modules = {

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("28bac398", content, true, context)
};

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_style_index_0_id_7d75d2f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_style_index_0_id_7d75d2f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_style_index_0_id_7d75d2f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_style_index_0_id_7d75d2f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_style_index_0_id_7d75d2f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Side[data-v-7d75d2f4]{width:100%;padding:60px 0 0}.Side_Row[data-v-7d75d2f4]{margin:0 0 40px}.Side_Row[data-v-7d75d2f4]:last-child{margin:0}.Side_Heading[data-v-7d75d2f4]{font-size:1.6rem;font-weight:700;margin:0 0 12px;padding:0;display:flex;align-items:center}.Side_Heading>svg[data-v-7d75d2f4]{width:16px;height:16px;margin:0 8px 0 0}@media (min-width:960px){.Side[data-v-7d75d2f4]{width:240px;padding:0}}.PopularTags[data-v-7d75d2f4]{margin:0 0 0 24px;padding:0;display:flex;flex-wrap:wrap}.PopularTags>li[data-v-7d75d2f4]{margin:0 16px 4px 0;padding:0;list-style:none;font-size:1.4rem}.PopularTags>li>a[data-v-7d75d2f4]{color:#333;text-decoration:none;padding:1px 0;display:inline-block}.PopularTags>li>a[data-v-7d75d2f4]:hover{text-decoration:underline}@media (min-width:960px){.PopularTags[data-v-7d75d2f4]{display:block}.PopularTags>li[data-v-7d75d2f4]{margin:0}}.Archives[data-v-7d75d2f4]{margin:0 0 0 24px;padding:0;display:flex;flex-wrap:wrap}.Archives>li[data-v-7d75d2f4]{margin:0 16px 4px 0;padding:0;list-style:none;font-size:1.4rem}.Archives>li>a[data-v-7d75d2f4]{color:#333;text-decoration:none;padding:1px 0;display:inline-block}.Archives>li>a[data-v-7d75d2f4]:hover{text-decoration:underline}@media (min-width:960px){.Archives[data-v-7d75d2f4]{display:block}.Archives>li[data-v-7d75d2f4]{margin:0}}.Writers[data-v-7d75d2f4]{margin:0 0 0 24px;padding:0;display:flex;flex-wrap:wrap}.Writers>li[data-v-7d75d2f4]{margin:0 8px 8px 0;padding:0;list-style:none;width:28px;height:28px;border-radius:50%;overflow:hidden}.Writers>li>a[data-v-7d75d2f4]{color:#ccc;display:flex;align-items:center;justify-content:center}.Writers>li>a>img[data-v-7d75d2f4]{-o-object-fit:cover;object-fit:cover}.Writers>li>a>img[data-v-7d75d2f4],.Writers_Empty[data-v-7d75d2f4]{width:28px;height:28px;border-radius:50%}.Writers_Empty[data-v-7d75d2f4]{background:#f8f8f8;display:flex;align-items:center;justify-content:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Side.vue?vue&type=template&id=7d75d2f4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"Side"},[_vm._ssrNode("<div class=\"Side_Row\" data-v-7d75d2f4>","</div>",[_vm._ssrNode("<h3 class=\"Side_Heading\" data-v-7d75d2f4><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#333333\" data-v-7d75d2f4><path d=\"M0 0h24v24H0V0z\" fill=\"none\" data-v-7d75d2f4></path> <path d=\"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z\" data-v-7d75d2f4></path> <circle cx=\"6.5\" cy=\"6.5\" r=\"1.5\" data-v-7d75d2f4></circle></svg>\n      Popular Tags\n    </h3> "),_vm._ssrNode("<ul class=\"PopularTags\" data-v-7d75d2f4>","</ul>",_vm._l((_vm.tags),function(tag){return _vm._ssrNode("<li data-v-7d75d2f4>","</li>",[_c('NuxtLink',{attrs:{"to":("/tag/" + (tag.slug))}},[_vm._v(_vm._s(tag.name)+"("+_vm._s(tag.total)+")")])],1)}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"Side_Row\" data-v-7d75d2f4>","</div>",[_vm._ssrNode("<h3 class=\"Side_Heading\" data-v-7d75d2f4><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#333333\" data-v-7d75d2f4><path d=\"M0 0h24v24H0V0z\" fill=\"none\" data-v-7d75d2f4></path> <path d=\"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z\" data-v-7d75d2f4></path></svg>\n      Archives\n    </h3> "),_vm._ssrNode("<ul class=\"Archives\" data-v-7d75d2f4>","</ul>",_vm._l((_vm.archives),function(archive){return _vm._ssrNode("<li data-v-7d75d2f4>","</li>",[_c('NuxtLink',{attrs:{"to":("/archive/" + (archive.year))}},[_vm._v(_vm._s(archive.year)+"("+_vm._s(archive.count)+")")])],1)}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"Side_Row\" data-v-7d75d2f4>","</div>",[_vm._ssrNode("<h3 class=\"Side_Heading\" data-v-7d75d2f4><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#333333\" data-v-7d75d2f4><path d=\"M0 0h24v24H0V0z\" fill=\"none\" data-v-7d75d2f4></path> <path d=\"M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z\" data-v-7d75d2f4></path></svg>\n      Writers\n    </h3> "),_vm._ssrNode("<ul class=\"Writers\" data-v-7d75d2f4>","</ul>",_vm._l((_vm.authors),function(author){return _vm._ssrNode("<li data-v-7d75d2f4>","</li>",[_c('NuxtLink',{attrs:{"to":("/author/" + (author.slug))}},[(author.profileImage && author.profileImage.src)?_c('img',{attrs:{"src":author.profileImage.src,"alt":author.fullName,"width":"32","height":"32"}}):_c('div',{staticClass:"Writers_Empty"},[_c('svg',{attrs:{"title":author.fullName,"xmlns":"http://www.w3.org/2000/svg","width":"18px","height":"18px","viewBox":"0 0 24 24","fill":"#CCCCCC"}},[_c('path',{attrs:{"d":"M0 0h24v24H0V0z","fill":"none"}}),_vm._v(" "),_c('path',{attrs:{"d":"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}})])])])],1)}),0)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Side.vue?vue&type=template&id=7d75d2f4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Side.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Sidevue_type_script_lang_js_ = ({
  props: {
    tags: {
      type: Array,

      default() {
        return [];
      }

    },
    authors: {
      type: Array,

      default() {
        return [];
      }

    },
    archives: {
      type: Array,

      default() {
        return [];
      }

    }
  }
});
// CONCATENATED MODULE: ./components/Side.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Sidevue_type_script_lang_js_ = (Sidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Side.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Sidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7d75d2f4",
  "68143f34"
  
)

/* harmony default export */ var Side = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=side.js.map