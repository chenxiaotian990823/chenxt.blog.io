import{_ as i,r,o as s,c,a as e,b as t,w as a,d as n,e as u}from"./app-DeRuMsH1.js";const h={},d=e("h1",{id:"vue实例挂载的过程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue实例挂载的过程"},[e("span",null,"Vue实例挂载的过程")])],-1),p={class:"table-of-contents"},_=u('<h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h2><ul><li><p>new Vue的时候调用会调用_init方法</p><ul><li>定义 $set、$get 、$delete、$watch 等方法</li><li>定义 $on、$off、$emit、$off等事件</li><li>定义 _update、$forceUpdate、$destroy生命周期</li><li>调用$mount进行页面的挂载</li></ul></li><li><p>挂载的时候主要是通过mountComponent方法</p></li><li><p>定义updateComponent更新函数</p></li><li><p>执行render生成虚拟DOM</p></li><li><p>_update将虚拟DOM生成真实DOM结构，并且渲染到页面中</p></li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>',3),m={href:"https://www.cnblogs.com/gerry2019/p/12001661.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/vuejs/vue/tree/dev/src/core/instance",target:"_blank",rel:"noopener noreferrer"},v={href:"https://vue3js.cn",target:"_blank",rel:"noopener noreferrer"};function w(x,b){const o=r("router-link"),l=r("ExternalLinkIcon");return s(),c("div",null,[d,e("nav",p,[e("ul",null,[e("li",null,[t(o,{to:"#结论"},{default:a(()=>[n("结论")]),_:1})]),e("li",null,[t(o,{to:"#参考文献"},{default:a(()=>[n("参考文献")]),_:1})])])]),_,e("ul",null,[e("li",null,[e("a",m,[n("https://www.cnblogs.com/gerry2019/p/12001661.html"),t(l)])]),e("li",null,[e("a",f,[n("https://github.com/vuejs/vue/tree/dev/src/core/instance"),t(l)])]),e("li",null,[e("a",v,[n("https://vue3js.cn"),t(l)])])])])}const k=i(h,[["render",w],["__file","index.html.vue"]]),$=JSON.parse('{"path":"/interview/vue/instanceMount/","title":"Vue实例挂载的过程","lang":"zh-CN","frontmatter":{"title":"Vue实例挂载的过程","sidebarDepth":0,"date":"2024-05-16T00:00:00.000Z"},"headers":[{"level":2,"title":"结论","slug":"结论","link":"#结论","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"updatedTime":1715850582000,"contributors":[{"name":"chenxt","email":"chenxt@power-www.com","commits":1}]},"filePathRelative":"interview/vue/instanceMount/index.md"}');export{k as comp,$ as data};
