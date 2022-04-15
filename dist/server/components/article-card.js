exports.ids = [1];
exports.modules = {

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1ffe033c", content, true, context)
};

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatDate; });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);

const formatDate = (dateStr, format = 'DATE_SHORT') => {
  return luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"].fromISO(dateStr).setZone('Asia/Tokyo').toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"][format]);
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_9be26650_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_9be26650_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_9be26650_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_9be26650_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCard_vue_vue_type_style_index_0_id_9be26650_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Article[data-v-9be26650]{display:block;align-items:center;color:#333;text-decoration:none;overflow:hidden;padding:0;margin:0 0 40px}.Article[data-v-9be26650]:last-child{margin:0 0 28px}.Article_Eyecatch[data-v-9be26650]{width:100%;height:0;padding:52.5% 0 0;border-radius:4px;overflow:hidden;flex-shrink:0;margin:0 0 12px;position:relative}.Article_Eyecatch>img[data-v-9be26650]{position:absolute;left:0;top:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.Article_EyecatchEmpty[data-v-9be26650]{background:#f8f8f8;width:280px;height:147px;display:flex;align-items:center;justify-content:center}.Article_Data[data-v-9be26650]{flex:1}.Article_Title[data-v-9be26650]{font-size:1.8rem;line-height:1.5;margin:0 0 10px;padding:0;display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}.Article_Tags[data-v-9be26650]{margin:0 0 8px;padding:0;display:flex;flex-wrap:wrap}.Article_Tags li[data-v-9be26650]{margin:0 4px 4px 0;padding:0 4px;list-style:none;font-size:1.2rem;color:#888;border:1px solid #e5e5e5;border-radius:4px}.Article_Author[data-v-9be26650]{display:flex;align-items:center}.Article_Author>img[data-v-9be26650]{width:32px;height:32px;border-radius:16px;margin:0 12px 0 0;flex-shrink:0}.Article_Author img[data-v-9be26650]{width:32px;height:32px;-o-object-fit:cover;object-fit:cover;font-family:\"object-fit: cover\"}.Article_AuthorEmpty[data-v-9be26650]{width:32px;height:32px;background:#f8f8f8;display:flex;align-items:center;justify-content:center;border-radius:16px;margin:0 12px 0 0;flex-shrink:0}.Article_AuthorData[data-v-9be26650]{flex:1}.Article_AuthorData span[data-v-9be26650]{font-size:1.2rem;font-weight:700;display:block;line-height:1.5}.Article_AuthorData time[data-v-9be26650]{font-size:1.2rem;display:block;color:#888;line-height:1.5}@media (min-width:600px){.Article[data-v-9be26650]{display:flex;border-bottom:1px solid #e5e5e5;padding:0 0 36px;margin:0 0 36px}.Article:hover .Article_Title[data-v-9be26650]{text-decoration:underline}.Article[data-v-9be26650]:last-child{border-bottom:none;padding:0 0 20px}.Article_Eyecatch[data-v-9be26650]{margin:0 28px 0 0;padding:0}.Article_Eyecatch[data-v-9be26650],.Article_Eyecatch img[data-v-9be26650]{width:280px;height:147px}.Article_Title[data-v-9be26650]{margin:0 0 12px}.Article_Tags[data-v-9be26650]{margin:0 0 16px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ArticleCard.vue?vue&type=template&id=9be26650&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.article)?_c('NuxtLink',{staticClass:"Article",attrs:{"to":("/article/" + (_vm.article.slug))}},[_c('div',{staticClass:"Article_Eyecatch"},[(_vm.article.coverImage)?[_c('img',{attrs:{"src":_vm.article.coverImage.src,"alt":""}})]:[_c('div',{staticClass:"Article_EyecatchEmpty"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"40px","height":"40px","viewBox":"0 0 24 24","fill":"#CCCCCC"}},[_c('path',{attrs:{"d":"M0 0h24v24H0V0z","fill":"none"}}),_vm._v(" "),_c('path',{attrs:{"d":"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"}})])])]],2),_vm._v(" "),_c('div',{staticClass:"Article_Data"},[_c('h3',{staticClass:"Article_Title"},[_vm._v(_vm._s(_vm.article.title))]),_vm._v(" "),_c('ul',{staticClass:"Article_Tags"},_vm._l((_vm.article.tags),function(tag){return _c('li',{key:tag._id},[_vm._v("#"+_vm._s(tag.name))])}),0),_vm._v(" "),_c('div',{staticClass:"Article_Author"},[(_vm.article.author && _vm.article.author.profileImage)?[_c('img',{attrs:{"src":_vm.article.author.profileImage.src,"alt":"","width":"32","height":"32"}})]:[_c('div',{staticClass:"Article_AuthorEmpty"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20px","height":"20px","viewBox":"0 0 24 24","fill":"#CCCCCC"}},[_c('path',{attrs:{"d":"M0 0h24v24H0V0z","fill":"none"}}),_vm._v(" "),_c('path',{attrs:{"d":"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}})])])],_vm._v(" "),_c('div',{staticClass:"Article_AuthorData"},[_c('span',[_vm._v(_vm._s(_vm.authorName))]),_vm._v(" "),_c('time',{attrs:{"datetime":_vm.formatDate(_vm.article._sys.createdAt).replace(/\//gm, '-')}},[_vm._v(_vm._s(_vm.formatDate(_vm.article._sys.createdAt)))])])],2)])]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ArticleCard.vue?vue&type=template&id=9be26650&scoped=true&

// EXTERNAL MODULE: ./utils/date.js
var date = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ArticleCard.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ArticleCardvue_type_script_lang_js_ = ({
  props: {
    article: {
      type: Object,
      default: null
    }
  },
  computed: {
    authorName() {
      return this.article.author && this.article.author.fullName || 'NO NAME';
    }

  },
  methods: {
    formatDate(dateStr) {
      return dateStr ? Object(date["a" /* formatDate */])(dateStr) : '';
    }

  }
});
// CONCATENATED MODULE: ./components/ArticleCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleCardvue_type_script_lang_js_ = (ArticleCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ArticleCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArticleCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9be26650",
  "4f321659"
  
)

/* harmony default export */ var ArticleCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=article-card.js.map