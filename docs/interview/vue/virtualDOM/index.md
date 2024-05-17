---
title: 什么是虚拟DOM？如何实现一个虚拟DOM？说说你的思路
sidebarDepth: 0
date: 2024-05-17
---

# 什么是虚拟 DOM？如何实现一个虚拟 DOM？说说你的思路

[[toc]]

## 什么是虚拟 DOM

虚拟 DOM （Virtual DOM ）这个概念相信大家都不陌生，从 React 到 Vue ，虚拟 DOM 为这两个框架都带来了跨平台的能力（React-Native 和 Weex）

实际上它只是一层对真实 DOM 的抽象，以 JavaScript 对象 (VNode 节点) 作为基础的树，用对象的属性来描述节点，最终可以通过一系列操作使这棵树映射到真实环境上

在 Javascript 对象中，虚拟 DOM 表现为一个 Object 对象。并且最少包含标签名 (tag)、属性 (attrs) 和子元素对象 (children) 三个属性，不同框架对这三个属性的名命可能会有差别

创建虚拟 DOM 就是为了更好将虚拟的节点渲染到页面视图中，所以虚拟 DOM 对象的节点与真实 DOM 的属性一一照应

在 vue 中同样使用到了虚拟 DOM 技术

定义真实 DOM

```html
<div id="app">
  <p class="p">节点内容</p>
  <h3>{{ foo }}</h3>
</div>
```

实例化 vue

```js
const app = new Vue({
  el: "#app",
  data: {
    foo: "foo",
  },
})
```

观察 render 的 render，我们能得到虚拟 DOM

```js
;(function anonymous() {
  with (this) {
    return _c("div", { attrs: { id: "app" } }, [
      _c("p", { staticClass: "p" }, [_v("节点内容")]),
      _v(" "),
      _c("h3", [_v(_s(foo))]),
    ])
  }
})
```

通过 VNode，vue 可以对这颗抽象树进行创建节点,删除节点以及修改节点的操作， 经过 diff 算法得出一些需要修改的最小单位,再更新视图，减少了 dom 操作，提高了性能

## 为什么需要虚拟 DOM

DOM 是很慢的，其元素非常庞大，页面的性能问题，大部分都是由 DOM 操作引起的

真实的 DOM 节点，哪怕一个最简单的 div 也包含着很多属性

由此可见，操作 DOM 的代价仍旧是昂贵的，频繁操作还是会出现页面卡顿，影响用户的体验

举个例子：

你用传统的原生 api 或 jQuery 去操作 DOM 时，浏览器会从构建 DOM 树开始从头到尾执行一遍流程

当你在一次操作时，需要更新 10 个 DOM 节点，浏览器没这么智能，收到第一个更新 DOM 请求后，并不知道后续还有 9 次更新操作，因此会马上执行流程，最终执行 10 次流程

而通过 VNode，同样更新 10 个 DOM 节点，虚拟 DOM 不会立即操作 DOM，而是将这 10 次更新的 diff 内容保存到本地的一个 js 对象中，最终将这个 js 对象一次性 attach 到 DOM 树上，避免大量的无谓计算

> 很多人认为虚拟 DOM 最大的优势是 diff 算法，减少 JavaScript 操作真实 DOM 的带来的性能消耗。虽然这一个虚拟 DOM 带来的一个优势，但并不是全部。虚拟 DOM 最大的优势在于抽象了原本的渲染过程，实现了跨平台的能力，而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，可以是近期很火热的小程序，也可以是各种 GUI

## 参考文献

- [https://ustbhuangyi.github.io/vue-analysis/v2/data-driven/create-element.html#children-%E7%9A%84%E8%A7%84%E8%8C%83%E5%8C%96](https://ustbhuangyi.github.io/vue-analysis/v2/data-driven/create-element.html#children-%E7%9A%84%E8%A7%84%E8%8C%83%E5%8C%96)
- [https://juejin.cn/post/6876711874050818061](https://juejin.cn/post/6876711874050818061)