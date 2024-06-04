import{_ as l,r as i,o as r,c as v,a as e,b as s,w as n,d as o,e as h}from"./app-DPz2NTkK.js";const p={},c=e("h1",{id:"vue中v-show和v-if怎么理解",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue中v-show和v-if怎么理解"},[e("span",null,"Vue中v-show和v-if怎么理解")])],-1),d={class:"table-of-contents"},f=h(`<h2 id="v-show与v-if的共同点" tabindex="-1"><a class="header-anchor" href="#v-show与v-if的共同点"><span>v-show与v-if的共同点</span></a></h2><p>我们都知道在 vue 中 v-show 与 v-if 的作用效果是相同的(不含v-else)，都能控制元素在页面是否显示</p><p>在用法上也是相同的</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Model v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">&quot;isShow&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Model v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;isShow&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当表达式为true的时候，都会占据页面的位置</li><li>当表达式都为false时，都不会占据页面位置</li></ul><h2 id="v-show与v-if的区别" tabindex="-1"><a class="header-anchor" href="#v-show与v-if的区别"><span>v-show与v-if的区别</span></a></h2><ul><li>控制手段不同 v-show隐藏则是为该元素添加css--display:none，dom元素依旧还在。v-if显示隐藏是将dom元素整个添加或删除</li><li>编译过程不同 v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换</li><li>编译条件不同 v-if是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染</li><li>v-show 由false变为true的时候不会触发组件的生命周期</li><li>v-if由false变为true的时候，触发组件的beforeCreate、create、beforeMount、mounted钩子，由true变为false的时候触发组件的beforeDestory、destoryed方法</li><li>性能消耗 v-if有更高的切换消耗；v-show有更高的初始渲染消耗；</li></ul><h2 id="v-show与v-if的使用场景" tabindex="-1"><a class="header-anchor" href="#v-show与v-if的使用场景"><span>v-show与v-if的使用场景</span></a></h2><p>v-if 与 v-show 都能控制dom元素在页面的显示</p><p>v-if 相比 v-show 开销更大的（直接操作dom节点增加与删除）</p><p>如果需要非常频繁地切换，则使用 v-show 较好</p><p>如果在运行时条件很少改变，则使用 v-if 较好</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,13),u={href:"https://www.jianshu.com/p/7af8554d8f08",target:"_blank",rel:"noopener noreferrer"},w={href:"https://juejin.cn/post/6897948855904501768",target:"_blank",rel:"noopener noreferrer"},_={href:"https://vue3js/docs/zh",target:"_blank",rel:"noopener noreferrer"};function m(k,b){const a=i("router-link"),t=i("ExternalLinkIcon");return r(),v("div",null,[c,e("nav",d,[e("ul",null,[e("li",null,[s(a,{to:"#v-show与v-if的共同点"},{default:n(()=>[o("v-show与v-if的共同点")]),_:1})]),e("li",null,[s(a,{to:"#v-show与v-if的区别"},{default:n(()=>[o("v-show与v-if的区别")]),_:1})]),e("li",null,[s(a,{to:"#v-show与v-if的使用场景"},{default:n(()=>[o("v-show与v-if的使用场景")]),_:1})]),e("li",null,[s(a,{to:"#参考文献"},{default:n(()=>[o("参考文献")]),_:1})])])]),f,e("ul",null,[e("li",null,[e("a",u,[o("https://www.jianshu.com/p/7af8554d8f08"),s(t)])]),e("li",null,[e("a",w,[o("https://juejin.cn/post/6897948855904501768"),s(t)])]),e("li",null,[e("a",_,[o("https://vue3js/docs/zh"),s(t)])])])])}const g=l(p,[["render",m],["__file","index.html.vue"]]),j=JSON.parse('{"path":"/interview/vue/vshowvif/","title":"Vue中v-show和v-if怎么理解","lang":"zh-CN","frontmatter":{"title":"Vue中v-show和v-if怎么理解","sidebarDepth":0,"date":"2024-05-16T00:00:00.000Z"},"headers":[{"level":2,"title":"v-show与v-if的共同点","slug":"v-show与v-if的共同点","link":"#v-show与v-if的共同点","children":[]},{"level":2,"title":"v-show与v-if的区别","slug":"v-show与v-if的区别","link":"#v-show与v-if的区别","children":[]},{"level":2,"title":"v-show与v-if的使用场景","slug":"v-show与v-if的使用场景","link":"#v-show与v-if的使用场景","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"updatedTime":1715850582000,"contributors":[{"name":"chenxt","email":"chenxt@power-www.com","commits":1}]},"filePathRelative":"interview/vue/vshowvif/index.md"}');export{g as comp,j as data};
