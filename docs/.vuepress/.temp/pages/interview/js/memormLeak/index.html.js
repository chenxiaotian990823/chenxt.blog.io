import comp from "E:/myBlog/docs/.vuepress/.temp/pages/interview/js/memormLeak/index.html.vue"
const data = JSON.parse("{\"path\":\"/interview/js/memormLeak/\",\"title\":\"说说 JavaScript 中内存泄漏的几种情况？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"说说 JavaScript 中内存泄漏的几种情况？\",\"sidebarDepth\":0,\"date\":\"2024-06-03T00:00:00.000Z\"},\"headers\":[{\"level\":2,\"title\":\"是什么\",\"slug\":\"是什么\",\"link\":\"#是什么\",\"children\":[]},{\"level\":2,\"title\":\"垃圾回收机制\",\"slug\":\"垃圾回收机制\",\"link\":\"#垃圾回收机制\",\"children\":[{\"level\":3,\"title\":\"标记清除\",\"slug\":\"标记清除\",\"link\":\"#标记清除\",\"children\":[]},{\"level\":3,\"title\":\"引用计数\",\"slug\":\"引用计数\",\"link\":\"#引用计数\",\"children\":[]},{\"level\":3,\"title\":\"小结\",\"slug\":\"小结\",\"link\":\"#小结\",\"children\":[]}]},{\"level\":2,\"title\":\"常见内存泄露情况\",\"slug\":\"常见内存泄露情况\",\"link\":\"#常见内存泄露情况\",\"children\":[]},{\"level\":2,\"title\":\"参考文献\",\"slug\":\"参考文献\",\"link\":\"#参考文献\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"interview/js/memormLeak/index.md\"}")
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
