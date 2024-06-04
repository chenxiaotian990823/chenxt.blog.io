import comp from "E:/myBlog/docs/.vuepress/.temp/pages/interview/js/viewablearea/index.html.vue"
const data = JSON.parse("{\"path\":\"/interview/js/viewablearea/\",\"title\":\"如何判断一个元素是否在可视区域中？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"如何判断一个元素是否在可视区域中？\",\"sidebarDepth\":0,\"date\":\"2024-06-04T00:00:00.000Z\"},\"headers\":[{\"level\":2,\"title\":\"用途\",\"slug\":\"用途\",\"link\":\"#用途\",\"children\":[]},{\"level\":2,\"title\":\"实现方式\",\"slug\":\"实现方式\",\"link\":\"#实现方式\",\"children\":[{\"level\":3,\"title\":\"offsetTop、scrollTop\",\"slug\":\"offsettop、scrolltop\",\"link\":\"#offsettop、scrolltop\",\"children\":[]},{\"level\":3,\"title\":\"getBoundingClientRect\",\"slug\":\"getboundingclientrect\",\"link\":\"#getboundingclientrect\",\"children\":[]},{\"level\":3,\"title\":\"Intersection Observer\",\"slug\":\"intersection-observer\",\"link\":\"#intersection-observer\",\"children\":[]}]},{\"level\":2,\"title\":\"案例分析\",\"slug\":\"案例分析\",\"link\":\"#案例分析\",\"children\":[]},{\"level\":2,\"title\":\"参考文献\",\"slug\":\"参考文献\",\"link\":\"#参考文献\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"interview/js/viewablearea/index.md\"}")
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
