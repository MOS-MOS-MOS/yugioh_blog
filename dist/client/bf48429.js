(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{298:function(t,d,e){var content=e(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("28bac398",content,!0,{sourceMap:!1})},302:function(t,d,e){"use strict";e.r(d);var r={props:{tags:{type:Array,default:function(){return[]}},authors:{type:Array,default:function(){return[]}},archives:{type:Array,default:function(){return[]}}}},l=(e(314),e(18)),component=Object(l.a)(r,(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("aside",{staticClass:"Side"},[e("div",{staticClass:"Side_Row"},[e("h3",{staticClass:"Side_Heading"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#333333"}},[e("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),t._v(" "),e("path",{attrs:{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"}}),t._v(" "),e("circle",{attrs:{cx:"6.5",cy:"6.5",r:"1.5"}})]),t._v("\n      Popular Tags\n    ")]),t._v(" "),e("ul",{staticClass:"PopularTags"},t._l(t.tags,(function(d){return e("li",{key:d._id},[e("NuxtLink",{attrs:{to:"/tag/"+d.slug}},[t._v(t._s(d.name)+"("+t._s(d.total)+")")])],1)})),0)]),t._v(" "),e("div",{staticClass:"Side_Row"},[e("h3",{staticClass:"Side_Heading"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#333333"}},[e("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),t._v(" "),e("path",{attrs:{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"}})]),t._v("\n      Archives\n    ")]),t._v(" "),e("ul",{staticClass:"Archives"},t._l(t.archives,(function(d){return e("li",{key:d.year},[e("NuxtLink",{attrs:{to:"/archive/"+d.year}},[t._v(t._s(d.year)+"("+t._s(d.count)+")")])],1)})),0)]),t._v(" "),e("div",{staticClass:"Side_Row"},[e("h3",{staticClass:"Side_Heading"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#333333"}},[e("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),t._v(" "),e("path",{attrs:{d:"M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"}})]),t._v("\n      Writers\n    ")]),t._v(" "),e("ul",{staticClass:"Writers"},t._l(t.authors,(function(d){return e("li",{key:d._id},[e("NuxtLink",{attrs:{to:"/author/"+d.slug}},[d.profileImage&&d.profileImage.src?e("img",{attrs:{src:d.profileImage.src,alt:d.fullName,width:"32",height:"32"}}):e("div",{staticClass:"Writers_Empty"},[e("svg",{attrs:{title:d.fullName,xmlns:"http://www.w3.org/2000/svg",width:"18px",height:"18px",viewBox:"0 0 24 24",fill:"#CCCCCC"}},[e("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),t._v(" "),e("path",{attrs:{d:"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}})])])])],1)})),0)])])}),[],!1,null,"7d75d2f4",null);d.default=component.exports},314:function(t,d,e){"use strict";e(298)},315:function(t,d,e){var r=e(35)(!1);r.push([t.i,".Side[data-v-7d75d2f4]{width:100%;padding:60px 0 0}.Side_Row[data-v-7d75d2f4]{margin:0 0 40px}.Side_Row[data-v-7d75d2f4]:last-child{margin:0}.Side_Heading[data-v-7d75d2f4]{font-size:1.6rem;font-weight:700;margin:0 0 12px;padding:0;display:flex;align-items:center}.Side_Heading>svg[data-v-7d75d2f4]{width:16px;height:16px;margin:0 8px 0 0}@media (min-width:960px){.Side[data-v-7d75d2f4]{width:240px;padding:0}}.PopularTags[data-v-7d75d2f4]{margin:0 0 0 24px;padding:0;display:flex;flex-wrap:wrap}.PopularTags>li[data-v-7d75d2f4]{margin:0 16px 4px 0;padding:0;list-style:none;font-size:1.4rem}.PopularTags>li>a[data-v-7d75d2f4]{color:#333;text-decoration:none;padding:1px 0;display:inline-block}.PopularTags>li>a[data-v-7d75d2f4]:hover{text-decoration:underline}@media (min-width:960px){.PopularTags[data-v-7d75d2f4]{display:block}.PopularTags>li[data-v-7d75d2f4]{margin:0}}.Archives[data-v-7d75d2f4]{margin:0 0 0 24px;padding:0;display:flex;flex-wrap:wrap}.Archives>li[data-v-7d75d2f4]{margin:0 16px 4px 0;padding:0;list-style:none;font-size:1.4rem}.Archives>li>a[data-v-7d75d2f4]{color:#333;text-decoration:none;padding:1px 0;display:inline-block}.Archives>li>a[data-v-7d75d2f4]:hover{text-decoration:underline}@media (min-width:960px){.Archives[data-v-7d75d2f4]{display:block}.Archives>li[data-v-7d75d2f4]{margin:0}}.Writers[data-v-7d75d2f4]{margin:0 0 0 24px;padding:0;display:flex;flex-wrap:wrap}.Writers>li[data-v-7d75d2f4]{margin:0 8px 8px 0;padding:0;list-style:none;width:28px;height:28px;border-radius:50%;overflow:hidden}.Writers>li>a[data-v-7d75d2f4]{color:#ccc;display:flex;align-items:center;justify-content:center}.Writers>li>a>img[data-v-7d75d2f4]{-o-object-fit:cover;object-fit:cover}.Writers>li>a>img[data-v-7d75d2f4],.Writers_Empty[data-v-7d75d2f4]{width:28px;height:28px;border-radius:50%}.Writers_Empty[data-v-7d75d2f4]{background:#f8f8f8;display:flex;align-items:center;justify-content:center}",""]),t.exports=r}}]);