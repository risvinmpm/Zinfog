(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/Ui/ClientSwiper.tsx [app-client] (ecmascript, next/dynamic entry, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_swiper_949ee926._.js",
  "static/chunks/components_Ui_ClientSwiper_tsx_3aff7c5a._.js",
  {
    "path": "static/chunks/node_modules_swiper_492da61d._.css",
    "included": [
      "[project]/node_modules/swiper/swiper.css [app-client] (css)",
      "[project]/node_modules/swiper/modules/pagination.css [app-client] (css)",
      "[project]/node_modules/swiper/modules/autoplay.css [app-client] (css)"
    ],
    "moduleChunks": [
      "static/chunks/node_modules_swiper_swiper_css_f9ee138c._.single.css",
      "static/chunks/node_modules_swiper_modules_pagination_css_f9ee138c._.single.css",
      "static/chunks/node_modules_swiper_modules_autoplay_css_f9ee138c._.single.css"
    ]
  },
  "static/chunks/components_Ui_ClientSwiper_tsx_93ee9a23._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/Ui/ClientSwiper.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}}),
}]);