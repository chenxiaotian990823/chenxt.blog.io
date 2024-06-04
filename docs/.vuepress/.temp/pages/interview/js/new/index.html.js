import comp from "E:/myBlog/docs/.vuepress/.temp/pages/interview/js/new/index.html.vue"
const data = JSON.parse("{\"path\":\"/interview/js/new/\",\"title\":\"说说new操作符具体干了什么？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"说说new操作符具体干了什么？\",\"sidebarDepth\":0,\"date\":\"2024-06-03T00:00:00.000Z\"},\"headers\":[{\"level\":2,\"title\":\"是什么\",\"slug\":\"是什么\",\"link\":\"#是什么\",\"children\":[]},{\"level\":2,\"title\":\"流程\",\"slug\":\"流程\",\"link\":\"#流程\",\"children\":[]},{\"level\":2,\"title\":\"手写 new 操作符\",\"slug\":\"手写-new-操作符\",\"link\":\"#手写-new-操作符\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"interview/js/new/index.md\"}")
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
