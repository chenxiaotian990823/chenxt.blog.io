import comp from "E:/myBlog/docs/.vuepress/.temp/pages/examples/index.html.vue"
const data = JSON.parse("{\"path\":\"/examples/\",\"title\":\"实例\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":false,\"title\":\"实例\"},\"headers\":[{\"level\":2,\"title\":\"导航\",\"slug\":\"导航\",\"link\":\"#导航\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"examples/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
