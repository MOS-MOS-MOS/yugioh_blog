exports.ids = [3];
exports.modules = {

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3a44e904", content, true, context)
};

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_574aae55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_574aae55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_574aae55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_574aae55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_574aae55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Pagination[data-v-574aae55]{padding:16px 0}.Pagination_Items[data-v-574aae55]{display:flex;margin:0;padding:0;align-item:center;justify-content:center}.Pagination_Item[data-v-574aae55]{margin:0 4px;padding:0;list-style:none}.Pagination_Button[data-v-574aae55]{border:1px solid #e5e5e5;border-radius:4px;display:flex;width:32px;height:32px;align-items:center;justify-content:center;color:#333;text-decoration:none;transition:background .2s;font-weight:700;font-size:1.2rem;background:none;cursor:pointer}.Pagination_Button._current[data-v-574aae55]{border:1px solid #333;background:#333;color:#fff}.Pagination_Button._current[data-v-574aae55]:hover{background:#333}.Pagination_Button[data-v-574aae55]:hover{background:#f8f8f8}.Pagination_Button[data-v-574aae55]:active{background:none;transition:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=template&id=574aae55&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"Pagination"},[_vm._ssrNode("<ul class=\"Pagination_Items\" data-v-574aae55>","</ul>",_vm._l((_vm.pages),function(page){return _vm._ssrNode("<li class=\"Pagination_Item\" data-v-574aae55>","</li>",[_c('NuxtLink',{class:("Pagination_Button " + (page.isCurrent ? '_current' : '')),attrs:{"type":"button","to":(_vm.basePath + "/page/" + (page.number))}},[_vm._v(_vm._s(page.number))])],1)}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=template&id=574aae55&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  props: {
    total: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 1
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  computed: {
    pages() {
      return Array(Math.ceil(this.total / (this.$config.pageLimit || 10))).fill({
        number: 0,
        isCurrent: false
      }).map((value, index) => {
        const pageNumber = index + 1;
        return { ...value,
          number: pageNumber,
          isCurrent: this.current === pageNumber
        };
      });
    }

  }
});
// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Pagination.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "574aae55",
  "4d2e4f92"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pagination.js.map