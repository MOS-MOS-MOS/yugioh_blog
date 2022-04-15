exports.ids = [7];
exports.modules = {

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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2de7aa9d", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_0dc1a8a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_0dc1a8a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_0dc1a8a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_0dc1a8a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_0dc1a8a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Article[data-v-0dc1a8a4]{padding:24px;margin:0 auto}.Article_Cover[data-v-0dc1a8a4]{width:100%;height:0;padding:52.5% 0 0;position:relative;border-radius:4px;overflow:hidden;flex-shrink:0;margin:0 0 16px}.Article_Cover img[data-v-0dc1a8a4]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;position:absolute;left:0;top:0}.Article_Header[data-v-0dc1a8a4]{margin:0 0 60px}.Article_Title[data-v-0dc1a8a4]{font-size:2.4rem;line-height:1.5;font-weight:700;margin:0 0 16px;padding:0}.Article_Tags[data-v-0dc1a8a4]{margin:0 0 16px;padding:0;display:flex;align-items:center;flex-wrap:wrap}.Article_Tags li[data-v-0dc1a8a4]{margin:0 8px 8px 0;padding:0;list-style:none;font-size:1.4rem}.Article_Tags li a[data-v-0dc1a8a4]{color:#333;border:1px solid #ccc;border-radius:4px;text-decoration:none;display:inline-block;padding:0 8px;transition:border .2s}.Article_Tags li a[data-v-0dc1a8a4]:hover{border:1px solid #999}.Article_Author[data-v-0dc1a8a4],.Article_Avatar[data-v-0dc1a8a4],.Article_Row[data-v-0dc1a8a4]{display:flex;align-items:center}.Article_Avatar[data-v-0dc1a8a4]{width:36px;height:36px;border-radius:18px;overflow:hidden;margin:0 12px 0 0;flex-shrink:0;background:rgba(0,0,0,.05);justify-content:center}.Article_Avatar img[data-v-0dc1a8a4]{width:36px;height:36px;-o-object-fit:cover;object-fit:cover;font-family:\"object-fit: cover\"}.Article_AuthorData[data-v-0dc1a8a4]{flex:1}.Article_AuthorName[data-v-0dc1a8a4]{font-weight:700;display:block;line-height:1.5;color:#333;text-decoration:none;font-size:1.4rem}.Article_AuthorName[data-v-0dc1a8a4]:hover{text-decoration:underline}.Article_Date[data-v-0dc1a8a4]{color:#888;font-size:1.4rem;line-height:1.5;display:block}.Article_Share[data-v-0dc1a8a4]{display:flex;align-items:center;padding:0;margin:0 0 0 auto}.Article_ShareLabel[data-v-0dc1a8a4]{color:#888;font-size:1.2rem;margin:0 2px 0 0;line-height:1}.Article_ShareList[data-v-0dc1a8a4]{display:flex;align-items:center;margin:0;padding:0}.Article_ShareList>li[data-v-0dc1a8a4]{margin:0;padding:0;list-style:none}.Article_ShareList>li>button[data-v-0dc1a8a4]{display:flex;align-items:center;justify-content:center;padding:0 0 0 5px;background:none;border:none;cursor:pointer}.Article_ShareList>li>button>svg[data-v-0dc1a8a4]{width:20px;height:20px;transition:fill .2s}.Article_ShareList>li>button:hover>svg[data-v-0dc1a8a4]{fill:#888}.Article_Body[data-v-0dc1a8a4]{padding:0 0 48px;margin:0 0 28px;border-bottom:1px solid #e5e5e5}.Article_Body[data-v-0dc1a8a4] h1,.Article_Body[data-v-0dc1a8a4] h2,.Article_Body[data-v-0dc1a8a4] h3,.Article_Body[data-v-0dc1a8a4] h4,.Article_Body[data-v-0dc1a8a4] h5,.Article_Body[data-v-0dc1a8a4] h6{padding:0;margin:40px 0 24px;line-height:1.4}.Article_Body[data-v-0dc1a8a4] h1{font-size:2.4rem}.Article_Body[data-v-0dc1a8a4] h2{font-size:2.2rem}.Article_Body[data-v-0dc1a8a4] h3{font-size:2rem}.Article_Body[data-v-0dc1a8a4] h4{font-size:1.8rem}.Article_Body[data-v-0dc1a8a4] h5{font-size:1.6rem}.Article_Body[data-v-0dc1a8a4] h6{font-size:1.4rem}.Article_Body[data-v-0dc1a8a4] p{margin:0 0 24px}.Article_Body[data-v-0dc1a8a4] img{max-width:100%;height:auto;margin:32px auto;display:block}.Article_Body[data-v-0dc1a8a4] ol,.Article_Body[data-v-0dc1a8a4] ul{margin:0;padding:0 0 16px 40px}.Article_Body[data-v-0dc1a8a4] ol li,.Article_Body[data-v-0dc1a8a4] ul li{margin:0 0 4px;padding:0}.Article_Body[data-v-0dc1a8a4] ol li ol,.Article_Body[data-v-0dc1a8a4] ol li ul,.Article_Body[data-v-0dc1a8a4] ul li ol,.Article_Body[data-v-0dc1a8a4] ul li ul{padding:0 0 0 20px}.Article_Body[data-v-0dc1a8a4] blockquote{border-left:4px solid #ccc;padding:0 0 0 40px;margin:0 0 20px}.Article_Body[data-v-0dc1a8a4] pre{background:#333;color:#fff;border-radius:4px;padding:16px 20px;margin:0 0 20px;line-height:1.6;overflow:auto}.Article_Body[data-v-0dc1a8a4] code,.Article_Body[data-v-0dc1a8a4] pre{font-size:1.4rem;font-family:\"Segoe UI Emoji\",\"Helvetica Neue\",Arial,\"Hiragino Kaku Gothic ProN\",\"Hiragino Sans\",Meiryo,sans-serif}.Article_Body[data-v-0dc1a8a4] code{border:1px solid #ddd;background:#f8f8f8;border-radius:4px;padding:2px 4px;margin:0 4px;color:#e01d5a}.Article_Body[data-v-0dc1a8a4] pre code{border:none;background:none;border-radius:0;padding:0;margin:0;color:#fff}@media (min-width:600px){.Article[data-v-0dc1a8a4]{max-width:700px;padding:60px}.Article_Cover[data-v-0dc1a8a4]{margin:0 0 28px}.Article_ShareLabel[data-v-0dc1a8a4]{margin:0 4px 0 0}.Article_ShareList>li>button>svg[data-v-0dc1a8a4]{width:24px;height:24px}.Article_ShareList>li>button[data-v-0dc1a8a4]{padding:0 0 0 10px}}.SnsShare[data-v-0dc1a8a4]{display:flex;align-items:center;padding:0 0 48px}.SnsShare_Label[data-v-0dc1a8a4]{color:#888;font-size:1.4rem;margin:0 16px 0 0}.SnsShare_List[data-v-0dc1a8a4]{display:flex;align-items:center;margin:0;padding:0}.SnsShare_List>li[data-v-0dc1a8a4]{margin:0;padding:0;list-style:none}.SnsShare_List>li>button[data-v-0dc1a8a4]{display:flex;align-items:center;justify-content:center;padding:0 8px;background:none;border:none;cursor:pointer}.SnsShare_List>li>button>svg[data-v-0dc1a8a4]{width:28px;height:28px;transition:fill .2s}.SnsShare_List>li>button:hover>svg[data-v-0dc1a8a4]{fill:#888}.Author[data-v-0dc1a8a4]{border:1px solid #e5e5e5;border-radius:4px;padding:24px;margin:0 0 48px}.Author[data-v-0dc1a8a4],.Author_Avatar[data-v-0dc1a8a4]{display:flex;align-items:center}.Author_Avatar[data-v-0dc1a8a4]{width:48px;height:48px;border-radius:24px;overflow:hidden;margin:0 16px 0 0;flex-shrink:0;background:rgba(0,0,0,.05);justify-content:center}.Author_Avatar img[data-v-0dc1a8a4]{width:48px;height:48px;-o-object-fit:cover;object-fit:cover;font-family:\"object-fit: cover\"}.Author_Name[data-v-0dc1a8a4]{margin:0 0 4px;padding:0;font-weight:700;line-height:1.5;font-size:1.6rem;color:#333;text-decoration:none}.Author_Name[data-v-0dc1a8a4]:hover{text-decoration:underline}.Author_Description[data-v-0dc1a8a4]{margin:0;padding:0;line-height:1.5;font-size:1.2rem}.Author_Description[data-v-0dc1a8a4] p{margin:0;padding:0}.Links[data-v-0dc1a8a4]{display:flex;position:relative;margin:0 0 40px}.Links[data-v-0dc1a8a4]:after{position:absolute;width:1px;height:100%;background:#e5e5e5;left:50%;content:\"\"}.Links_Next[data-v-0dc1a8a4],.Links_Previous[data-v-0dc1a8a4]{width:45%;display:flex;align-items:center;color:#333;text-decoration:none;font-size:1.4rem;line-height:1.6}.Links_Next[data-v-0dc1a8a4]:hover,.Links_Previous[data-v-0dc1a8a4]:hover{text-decoration:underline}.Links_Next svg[data-v-0dc1a8a4],.Links_Previous svg[data-v-0dc1a8a4]{width:16px;height:16px}.Links_Previous[data-v-0dc1a8a4]{margin:0 auto 0 0}.Links_Previous svg[data-v-0dc1a8a4]{margin:0 8px 0 0}.Links_Next[data-v-0dc1a8a4]{margin:0 0 0 auto;text-align:right;justify-content:flex-end}.Links_Next svg[data-v-0dc1a8a4]{margin:0 0 0 8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_slug.vue?vue&type=template&id=0dc1a8a4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"Container"},[(_vm.currentArticle)?_vm._ssrNode("<article class=\"Article\" data-v-0dc1a8a4>","</article>",[_vm._ssrNode("<div class=\"Article_Cover\" data-v-0dc1a8a4><img"+(_vm._ssrAttr("src",_vm.currentArticle.coverImage.src))+" alt data-v-0dc1a8a4></div> "),_vm._ssrNode("<div class=\"Article_Header\" data-v-0dc1a8a4>","</div>",[_vm._ssrNode("<h1 class=\"Article_Title\" data-v-0dc1a8a4>"+_vm._ssrEscape(_vm._s(_vm.currentArticle.title))+"</h1> "),_vm._ssrNode("<ul class=\"Article_Tags\" data-v-0dc1a8a4>","</ul>",_vm._l((_vm.currentArticle.tags),function(tag){return _vm._ssrNode("<li data-v-0dc1a8a4>","</li>",[_c('NuxtLink',{attrs:{"to":("/tag/" + (tag.slug))}},[_vm._v("#"+_vm._s(tag.name))])],1)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"Article_Row\" data-v-0dc1a8a4>","</div>",[_vm._ssrNode("<div class=\"Article_Author\" data-v-0dc1a8a4>","</div>",[_vm._ssrNode("<a href=\"#\" class=\"Article_Avatar\" data-v-0dc1a8a4>"+((
                _vm.currentArticle.author && _vm.currentArticle.author.profileImage
              )?("<img"+(_vm._ssrAttr("src",_vm.currentArticle.author.profileImage.src))+" alt width=\"32\" height=\"32\" data-v-0dc1a8a4>"):("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" fill=\"#CCCCCC\" data-v-0dc1a8a4><path d=\"M0 0h24v24H0V0z\" fill=\"none\" data-v-0dc1a8a4></path> <path d=\"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\" data-v-0dc1a8a4></path></svg>"))+"</a> "),_vm._ssrNode("<div class=\"Article_AuthorData\" data-v-0dc1a8a4>","</div>",[_c('NuxtLink',{staticClass:"Article_AuthorName",attrs:{"to":("/author/" + (_vm.currentArticle.author.slug))}},[_vm._v(_vm._s(_vm.authorName))]),_vm._ssrNode(" <time"+(_vm._ssrAttr("datetime",_vm.publishDateForAttr))+" class=\"Article_Date\" data-v-0dc1a8a4>"+_vm._ssrEscape(_vm._s(_vm.publishDate))+"</time>")],2)],2),_vm._ssrNode(" <div class=\"Article_Share\" data-v-0dc1a8a4><p class=\"Article_ShareLabel\" data-v-0dc1a8a4>Share this post</p> <ul class=\"Article_ShareList\" data-v-0dc1a8a4><li data-v-0dc1a8a4><button type=\"button\" data-v-0dc1a8a4><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#cccccc\" data-v-0dc1a8a4><path d=\"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z\" data-v-0dc1a8a4></path></svg></button></li> <li data-v-0dc1a8a4><button type=\"button\" data-v-0dc1a8a4><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#cccccc\" data-v-0dc1a8a4><path d=\"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z\" data-v-0dc1a8a4></path></svg></button></li></ul></div>")],2)],2),_vm._ssrNode(" <div class=\"Article_Body\" data-v-0dc1a8a4>"+(_vm._s(_vm.currentArticle.body))+"</div> <div class=\"SnsShare\" data-v-0dc1a8a4><p class=\"SnsShare_Label\" data-v-0dc1a8a4>Share this post</p> <ul class=\"SnsShare_List\" data-v-0dc1a8a4><li data-v-0dc1a8a4><button type=\"button\" data-v-0dc1a8a4><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#cccccc\" data-v-0dc1a8a4><path d=\"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z\" data-v-0dc1a8a4></path></svg></button></li> <li data-v-0dc1a8a4><button type=\"button\" data-v-0dc1a8a4><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"#cccccc\" data-v-0dc1a8a4><path d=\"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z\" data-v-0dc1a8a4></path></svg></button></li></ul></div> "),_vm._ssrNode("<aside class=\"Author\" data-v-0dc1a8a4>","</aside>",[_vm._ssrNode("<a href=\"#\" class=\"Author_Avatar\" data-v-0dc1a8a4>"+((_vm.currentArticle.author && _vm.currentArticle.author.profileImage)?("<img"+(_vm._ssrAttr("src",_vm.currentArticle.author.profileImage.src))+" alt width=\"48\" height=\"48\" data-v-0dc1a8a4>"):("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28px\" height=\"28px\" viewBox=\"0 0 24 24\" fill=\"#CCCCCC\" data-v-0dc1a8a4><path d=\"M0 0h24v24H0V0z\" fill=\"none\" data-v-0dc1a8a4></path> <path d=\"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\" data-v-0dc1a8a4></path></svg>"))+"</a> "),_vm._ssrNode("<div class=\"Author_Text\" data-v-0dc1a8a4>","</div>",[_c('NuxtLink',{staticClass:"Article_AuthorName",attrs:{"to":("/author/" + (_vm.currentArticle.author.slug))}},[_vm._v(_vm._s(_vm.authorName))]),_vm._ssrNode(" <div class=\"Author_Description\" data-v-0dc1a8a4>"+(_vm._s(_vm.authorBio))+"</div>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<nav class=\"Links\" data-v-0dc1a8a4>","</nav>",[(_vm.previousArticle)?_c('NuxtLink',{staticClass:"Links_Previous",attrs:{"to":("/article/" + (_vm.previousArticle.slug))}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","height":"24px","viewBox":"0 0 24 24","width":"24px","fill":"#333333"}},[_c('path',{attrs:{"d":"M0 0h24v24H0V0z","fill":"none","opacity":".87"}}),_vm._v(" "),_c('path',{attrs:{"d":"M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"}})]),_vm._v("\n        Previous post\n      ")]):_vm._e(),_vm._ssrNode(" "),(_vm.nextArticle)?_c('NuxtLink',{staticClass:"Links_Next",attrs:{"to":("/article/" + (_vm.nextArticle.slug)),"href":"#"}},[_vm._v("\n        Next post\n        "),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24","height":"24px","viewBox":"0 0 24 24","width":"24px","fill":"#333333"}},[_c('g',[_c('path',{attrs:{"d":"M0,0h24v24H0V0z","fill":"none"}})]),_vm._v(" "),_c('g',[_c('polygon',{attrs:{"points":"6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"}})])])]):_vm._e()],2)],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/_slug.vue?vue&type=template&id=0dc1a8a4&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./utils/date.js
var date = __webpack_require__(50);

// EXTERNAL MODULE: external "html-to-text"
var external_html_to_text_ = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $config,
    store,
    params,
    redirect
  }) {
    await store.dispatch('fetchApp', $config);
    await store.dispatch('fetchCurrentArticle', { ...$config,
      slug: params.slug
    });
    if (!store.getters.currentArticle) return redirect(302, '/');
    await store.dispatch('fetchPreviousArticle', { ...$config,
      createdAt: store.getters.currentArticle._sys.createdAt
    });
    await store.dispatch('fetchNextArticle', { ...$config,
      createdAt: store.getters.currentArticle._sys.createdAt
    });
    return {};
  },

  head() {
    return {
      title: this.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.description
      }, {
        hid: 'og:type',
        property: 'og:type',
        content: 'article'
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: this.title
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: this.description
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: this.ogImage
      }, {
        name: 'twitter:card',
        content: 'summary_large_image'
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['app', 'currentArticle', 'previousArticle', 'nextArticle']),

    meta() {
      if (this.currentArticle && this.currentArticle.meta) {
        return this.currentArticle.meta;
      }

      return null;
    },

    title() {
      if (this.meta && this.meta.title) {
        return this.meta.title;
      }

      if (this.currentArticle && this.currentArticle.title) {
        return this.currentArticle.title;
      }

      return this.app && (this.app.name || this.app.uid || 'Docs');
    },

    description() {
      if (this.meta && this.meta.description) {
        return this.meta.description;
      }

      if (this.currentArticle && this.currentArticle.body) {
        return Object(external_html_to_text_["htmlToText"])(this.currentArticle.body, {
          selectors: [{
            selector: 'img',
            format: 'skip'
          }]
        }).slice(0, 200);
      }

      return '';
    },

    ogImage() {
      if (this.meta && this.meta.ogImage) {
        return this.meta.ogImage.src;
      }

      if (this.currentArticle && this.currentArticle.coverImage) {
        return this.currentArticle.coverImage.src;
      }

      return '';
    },

    publishDate() {
      return this.currentArticle && this.currentArticle._sys.createdAt ? Object(date["a" /* formatDate */])(this.currentArticle._sys.createdAt) : '';
    },

    publishDateForAttr() {
      return this.publishDate.replace(/\//g, '-');
    },

    authorName() {
      return this.currentArticle && this.currentArticle.author && this.currentArticle.author.fullName || 'NO NAME';
    },

    authorBio() {
      return this.currentArticle && this.currentArticle.author && this.currentArticle.author.biography || '';
    }

  },
  methods: {
    shareOnTwitter() {
      window.open('https://twitter.com/share?url=' + encodeURIComponent(window.location.href) + '&text=' + document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');
    },

    shareOnFacebook() {
      window.open('//www.facebook.com/sharer.php?src=bm&u=' + encodeURIComponent(location.href), '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');
    }

  }
});
// CONCATENATED MODULE: ./pages/article/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0dc1a8a4",
  "7d1cf0c3"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map