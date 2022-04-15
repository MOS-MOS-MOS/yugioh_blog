exports.ids = [10,1,2,3,4];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=bc012d58&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.app && _vm.app.cover && _vm.app.cover.value)?_c('Cover',{attrs:{"img":_vm.app.cover.value}}):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"Container\" data-v-bc012d58>","</div>",[_vm._ssrNode("<div class=\"Container_Inner\" data-v-bc012d58>","</div>",[_vm._ssrNode("<main class=\"Articles\" data-v-bc012d58>","</main>",[_vm._ssrNode("<div class=\"Articles_Inner\" data-v-bc012d58>","</div>",[_vm._ssrNode("<h2 class=\"Articles_Heading\" data-v-bc012d58>Recent Articles</h2> "),_vm._l((_vm.articles),function(article){return _c('ArticleCard',{key:article._id,attrs:{"article":article}})})],2),_vm._ssrNode(" "),_c('Pagination',{attrs:{"total":_vm.total,"current":1}})],2),_vm._ssrNode(" "),_c('Side',{attrs:{"tags":_vm.popularTags,"authors":_vm.authors,"archives":_vm.archives}})],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=bc012d58&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./utils/head.js
var head = __webpack_require__(52);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  async asyncData({
    $config,
    store
  }) {
    await store.dispatch('fetchApp', $config);
    await store.dispatch('fetchArticles', $config);
    await store.dispatch('fetchTags', $config);
    await store.dispatch('fetchAuthors', $config);
    await store.dispatch('fetchArchives', $config);
    return {};
  },

  head() {
    return {
      title: Object(head["a" /* getSiteName */])(this.app)
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['app', 'articles', 'total', 'popularTags', 'authors', 'archives'])
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(91)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bc012d58",
  "95df5f1e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Cover: __webpack_require__(62).default,ArticleCard: __webpack_require__(57).default,Pagination: __webpack_require__(51).default,Side: __webpack_require__(58).default})


/***/ }),

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

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSiteName; });
const getSiteName = app => {
  return app && (app.name || app.uid) || 'Blog';
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

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("13f357ee", content, true, context)
};

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_style_index_0_id_6eb0d0a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_style_index_0_id_6eb0d0a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_style_index_0_id_6eb0d0a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_style_index_0_id_6eb0d0a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_style_index_0_id_6eb0d0a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Cover[data-v-6eb0d0a9]{width:100%;height:180px;background-size:cover;background-position:50%}@media (min-width:600px){.Cover[data-v-6eb0d0a9]{height:280px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cover.vue?vue&type=template&id=6eb0d0a9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Cover",style:('background-image: url(' + _vm.img + ');')},[_vm._ssrNode("\n   \n")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Cover.vue?vue&type=template&id=6eb0d0a9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cover.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Covervue_type_script_lang_js_ = ({
  props: {
    img: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/Cover.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Covervue_type_script_lang_js_ = (Covervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Cover.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Covervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6eb0d0a9",
  "fd7d0eac"
  
)

/* harmony default export */ var Cover = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("e7eed93c", content, true, context)
};

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc012d58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc012d58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc012d58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc012d58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc012d58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Container[data-v-bc012d58]{padding:40px 24px}.Container_Inner[data-v-bc012d58]{display:block;margin:0 auto}@media (min-width:600px){.Container[data-v-bc012d58]{padding:60px}.Container_Inner[data-v-bc012d58]{max-width:980px}}@media (min-width:960px){.Container_Inner[data-v-bc012d58]{display:flex}}.Articles[data-v-bc012d58]{flex:1}.Articles_Heading[data-v-bc012d58]{font-size:2rem;margin:0 0 42px;padding:0;line-height:1.4}@media (min-width:960px){.Articles[data-v-bc012d58]{margin:0 40px 0 0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map