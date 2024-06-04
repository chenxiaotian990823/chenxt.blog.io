import{_ as l,r as o,o as c,c as i,a as n,b as s,w as t,d as a,e as r}from"./app-DPz2NTkK.js";const u={},d=n("h1",{id:"vue-observable-你有了解过吗-说说看",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-observable-你有了解过吗-说说看"},[n("span",null,"Vue.observable 你有了解过吗？说说看")])],-1),k={class:"table-of-contents"},v=r(`<h2 id="observable-是什么" tabindex="-1"><a class="header-anchor" href="#observable-是什么"><span>Observable 是什么</span></a></h2><p>Observable 翻译过来我们可以理解成可观察的</p><p>我们先来看一下其在 Vue 中的定义</p><div class="custom-container tip"><p class="custom-container-title">定义</p><p>Vue.observable，让一个对象变成响应式数据。Vue 内部会用它来处理 data 函数返回的对象</p></div><p>返回的对象可以直接用于渲染函数和计算属性内，并且会在发生变更时触发相应的更新。也可以作为最小化的跨组件状态存储器</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其作用等同于</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Vue 2.x 中，被传入的对象会直接被 Vue.observable 变更，它和被返回的对象是同一个对象</p><p>在 Vue 3.x 中，则会返回一个可响应的代理，而对源对象直接进行变更仍然是不可响应的</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><p>在非父子组件通信时，可以使用通常的bus或者使用vuex，但是实现的功能不是太复杂，而使用上面两个又有点繁琐。这时，observable就是一个很好的选择</p><p>创建一个js文件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 引入vue</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> &#39;vue
<span class="token comment">// 创建state对象，使用observable让state对象可响应</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> state <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;age&#39;</span><span class="token operator">:</span> <span class="token number">38</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 创建对应的方法</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在.vue文件中直接使用即可</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    姓名：<span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span>
    年龄：<span class="token punctuation">{</span><span class="token punctuation">{</span> age <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeName(&#39;李四&#39;)&quot;</span><span class="token operator">&gt;</span>改变姓名<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;setAge(18)&quot;</span><span class="token operator">&gt;</span>改变年龄<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> mutations <span class="token punctuation">}</span> <span class="token keyword">from</span> &#39;@<span class="token operator">/</span>store
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在计算属性中拿到值</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>name
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>age
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 调用mutations里面的方法，更新数据</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">changeName</span><span class="token operator">:</span> mutations<span class="token punctuation">.</span>changeName<span class="token punctuation">,</span>
    <span class="token literal-property property">setAge</span><span class="token operator">:</span> mutations<span class="token punctuation">.</span>setAge
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,17),b={href:"https://blog.csdn.net/qq_32682301/article/details/105419673",target:"_blank",rel:"noopener noreferrer"},m={href:"https://wbbyouzi.com/archives/343",target:"_blank",rel:"noopener noreferrer"};function h(g,_){const e=o("router-link"),p=o("ExternalLinkIcon");return c(),i("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[s(e,{to:"#observable-是什么"},{default:t(()=>[a("Observable 是什么")]),_:1})]),n("li",null,[s(e,{to:"#使用场景"},{default:t(()=>[a("使用场景")]),_:1})]),n("li",null,[s(e,{to:"#参考文献"},{default:t(()=>[a("参考文献")]),_:1})])])]),v,n("ul",null,[n("li",null,[n("a",b,[a("https://blog.csdn.net/qq_32682301/article/details/105419673"),s(p)])]),n("li",null,[n("a",m,[a("https://wbbyouzi.com/archives/343"),s(p)])])])])}const f=l(u,[["render",h],["__file","index.html.vue"]]),x=JSON.parse('{"path":"/interview/vue/observable/","title":"Vue.observable你有了解过吗？说说看","lang":"zh-CN","frontmatter":{"title":"Vue.observable你有了解过吗？说说看","sidebarDepth":0,"date":"2024-05-17T00:00:00.000Z"},"headers":[{"level":2,"title":"Observable 是什么","slug":"observable-是什么","link":"#observable-是什么","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"updatedTime":1715936165000,"contributors":[{"name":"chenxt","email":"chenxt@power-www.com","commits":1}]},"filePathRelative":"interview/vue/observable/index.md"}');export{f as comp,x as data};