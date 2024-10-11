import comp from "E:/myBlog/docs/.vuepress/.temp/pages/interview/js/eventloop/index.html.vue"
const data = JSON.parse("{\"path\":\"/interview/js/eventloop/\",\"title\":\"说说你对事件循环的理解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"说说你对事件循环的理解\",\"sidebarDepth\":0,\"date\":\"2024-06-03T00:00:00.000Z\"},\"headers\":[{\"level\":2,\"title\":\"是什么\",\"slug\":\"是什么\",\"link\":\"#是什么\",\"children\":[]},{\"level\":2,\"title\":\"宏任务与微任务\",\"slug\":\"宏任务与微任务\",\"link\":\"#宏任务与微任务\",\"children\":[{\"level\":3,\"title\":\"微任务\",\"slug\":\"微任务\",\"link\":\"#微任务\",\"children\":[]},{\"level\":3,\"title\":\"宏任务\",\"slug\":\"宏任务\",\"link\":\"#宏任务\",\"children\":[]}]},{\"level\":2,\"title\":\"async 与 await\",\"slug\":\"async-与-await\",\"link\":\"#async-与-await\",\"children\":[{\"level\":3,\"title\":\"async\",\"slug\":\"async\",\"link\":\"#async\",\"children\":[]},{\"level\":3,\"title\":\"await\",\"slug\":\"await\",\"link\":\"#await\",\"children\":[]}]}],\"git\":{\"updatedTime\":1717481375000,\"contributors\":[{\"name\":\"chenxt\",\"email\":\"chenxt@power-www.com\",\"commits\":1}]},\"filePathRelative\":\"interview/js/eventloop/index.md\"}")
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
