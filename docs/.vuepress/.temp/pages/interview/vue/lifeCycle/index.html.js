import comp from "E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/lifeCycle/index.html.vue"
const data = JSON.parse("{\"path\":\"/interview/vue/lifeCycle/\",\"title\":\"Vue生命周期\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Vue生命周期\",\"sidebarDepth\":0,\"date\":\"2024-05-16T00:00:00.000Z\"},\"headers\":[{\"level\":2,\"title\":\"生命周期有哪些\",\"slug\":\"生命周期有哪些\",\"link\":\"#生命周期有哪些\",\"children\":[]},{\"level\":2,\"title\":\"生命周期整体流程\",\"slug\":\"生命周期整体流程\",\"link\":\"#生命周期整体流程\",\"children\":[{\"level\":3,\"title\":\"具体分析\",\"slug\":\"具体分析\",\"link\":\"#具体分析\",\"children\":[]}]},{\"level\":2,\"title\":\"题外话：数据请求在created和mouted的区别\",\"slug\":\"题外话-数据请求在created和mouted的区别\",\"link\":\"#题外话-数据请求在created和mouted的区别\",\"children\":[]},{\"level\":2,\"title\":\"参考文献\",\"slug\":\"参考文献\",\"link\":\"#参考文献\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"interview/vue/lifeCycle/index.md\"}")
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