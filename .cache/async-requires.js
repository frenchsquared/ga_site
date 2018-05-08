// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/gfrench/Sites/ga_site/.cache/dev-404-page.js"),
  "component---src-pages-counter-js": require("gatsby-module-loader?name=component---src-pages-counter-js!/Users/gfrench/Sites/ga_site/src/pages/counter.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/gfrench/Sites/ga_site/src/pages/index.js"),
  "component---src-pages-page-2-js": require("gatsby-module-loader?name=component---src-pages-page-2-js!/Users/gfrench/Sites/ga_site/src/pages/page-2.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/gfrench/Sites/ga_site/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/gfrench/Sites/ga_site/.cache/json/dev-404-page.json"),
  "counter.json": require("gatsby-module-loader?name=path---counter!/Users/gfrench/Sites/ga_site/.cache/json/counter.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/gfrench/Sites/ga_site/.cache/json/index.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/Users/gfrench/Sites/ga_site/.cache/json/page-2.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/gfrench/Sites/ga_site/.cache/layouts/index.js")
}