// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/gfrench/Sites/ga_site/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/gfrench/Sites/ga_site/.cache/dev-404-page.js")),
  "component---src-pages-counter-js": preferDefault(require("/Users/gfrench/Sites/ga_site/src/pages/counter.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/gfrench/Sites/ga_site/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/gfrench/Sites/ga_site/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/gfrench/Sites/ga_site/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/gfrench/Sites/ga_site/.cache/json/dev-404-page.json"),
  "counter.json": require("/Users/gfrench/Sites/ga_site/.cache/json/counter.json"),
  "index.json": require("/Users/gfrench/Sites/ga_site/.cache/json/index.json"),
  "page-2.json": require("/Users/gfrench/Sites/ga_site/.cache/json/page-2.json")
}