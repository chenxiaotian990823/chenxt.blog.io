import comp from "E:/myBlog/docs/.vuepress/.temp/pages/interview/index.html.vue"
const data = JSON.parse("{\"path\":\"/interview/\",\"title\":\"面试\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":false,\"title\":\"面试\"},\"headers\":[{\"level\":2,\"title\":\"导航\",\"slug\":\"导航\",\"link\":\"#导航\",\"children\":[]}],\"git\":{\"updatedTime\":1717481375000,\"contributors\":[{\"name\":\"chenxt\",\"email\":\"chenxt@power-www.com\",\"commits\":7}]},\"filePathRelative\":\"interview/README.md\"}")
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
