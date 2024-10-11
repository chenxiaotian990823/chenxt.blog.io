import comp from "E:/myBlog/docs/.vuepress/.temp/pages/examples/uploadFile/index.html.vue"
const data = JSON.parse("{\"path\":\"/examples/uploadFile/\",\"title\":\"文件上传\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文件上传\",\"sidebarDepth\":0,\"date\":\"2024-07-09T00:00:00.000Z\"},\"headers\":[{\"level\":2,\"title\":\"调试接口\",\"slug\":\"调试接口\",\"link\":\"#调试接口\",\"children\":[]},{\"level\":2,\"title\":\"上传文件界面\",\"slug\":\"上传文件界面\",\"link\":\"#上传文件界面\",\"children\":[]},{\"level\":2,\"title\":\"单个文件上传\",\"slug\":\"单个文件上传\",\"link\":\"#单个文件上传\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"examples/uploadFile/index.md\"}")
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
