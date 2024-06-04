import{_ as l,r as p,o as c,c as i,a as n,b as a,w as e,d as s,e as u}from"./app-DPz2NTkK.js";const d={},r=n("h1",{id:"uniapp-应用启动-onlaunch-方法-改为同步-执行后再执行页面加载-onload-方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uniapp-应用启动-onlaunch-方法-改为同步-执行后再执行页面加载-onload-方法"},[n("span",null,"uniapp 应用启动 onLaunch 方法，改为同步，执行后再执行页面加载 onLoad 方法")])],-1),k={class:"table-of-contents"},v=u(`<h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述"><span>问题描述</span></a></h2><p>app.vue 里的 onLaunch 中如果有异步方法，返回结果可能会在页面的 onLoad 之后，为了让页面的 onLoad 在 onLaunch 之后执行，使用以下解决方案</p><h2 id="方案一" tabindex="-1"><a class="header-anchor" href="#方案一"><span>方案一</span></a></h2><h3 id="main-js-添加如下代码" tabindex="-1"><a class="header-anchor" href="#main-js-添加如下代码"><span>main.js 添加如下代码</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$onLaunched <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$isResolve <span class="token operator">=</span> resolve
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用启动时-设置需要等待的逻辑" tabindex="-1"><a class="header-anchor" href="#应用启动时-设置需要等待的逻辑"><span>应用启动时，设置需要等待的逻辑</span></a></h3><p>在 App.vue 的 onLaunch 中增加代码 this.$isResolve()</p><p>这个方法必须在你的业务如 ajax 执行完毕后再执行</p><p>另外注意要用箭头函数，否则 this 不好使</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function-variable function">onLaunch</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;App Launch&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;倒计时10秒&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;倒计时结束&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$isResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在页面-onload-中增加等待代码-await-this-onlaunched" tabindex="-1"><a class="header-anchor" href="#在页面-onload-中增加等待代码-await-this-onlaunched"><span>在页面 onLoad 中增加等待代码 await this.$onLaunched</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//等待倒计时</span>
	<span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$onLaunched<span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;等待倒计时结束后打印&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 后续业务逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方案二" tabindex="-1"><a class="header-anchor" href="#方案二"><span>方案二</span></a></h2><h3 id="main-js" tabindex="-1"><a class="header-anchor" href="#main-js"><span>main.js</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$visitStore</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//页面入参option</span>

  <span class="token comment">//自己的业务逻辑</span>

  <span class="token comment">//如果是ajax，注意要加同步等待</span>
  <span class="token keyword">await</span> <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>http
    <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/customer/updateLastVisitStoreId&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">lastVisitStoreId</span><span class="token operator">:</span> storeId <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面" tabindex="-1"><a class="header-anchor" href="#页面"><span>页面</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>			
	<span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$visitStore</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//同步执行这个方法</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,18),h={href:"https://blog.csdn.net/yfx000/article/details/108186719",target:"_blank",rel:"noopener noreferrer"};function m(b,f){const t=p("router-link"),o=p("ExternalLinkIcon");return c(),i("div",null,[r,n("nav",k,[n("ul",null,[n("li",null,[a(t,{to:"#问题描述"},{default:e(()=>[s("问题描述")]),_:1})]),n("li",null,[a(t,{to:"#方案一"},{default:e(()=>[s("方案一")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#main-js-添加如下代码"},{default:e(()=>[s("main.js 添加如下代码")]),_:1})]),n("li",null,[a(t,{to:"#应用启动时-设置需要等待的逻辑"},{default:e(()=>[s("应用启动时，设置需要等待的逻辑")]),_:1})]),n("li",null,[a(t,{to:"#在页面-onload-中增加等待代码-await-this-onlaunched"},{default:e(()=>[s("在页面 onLoad 中增加等待代码 await this.$onLaunched")]),_:1})])])]),n("li",null,[a(t,{to:"#方案二"},{default:e(()=>[s("方案二")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#main-js"},{default:e(()=>[s("main.js")]),_:1})]),n("li",null,[a(t,{to:"#页面"},{default:e(()=>[s("页面")]),_:1})])])]),n("li",null,[a(t,{to:"#参考文献"},{default:e(()=>[s("参考文献")]),_:1})])])]),v,n("ul",null,[n("li",null,[n("a",h,[s("https://blog.csdn.net/yfx000/article/details/108186719"),a(o)])])])])}const j=l(d,[["render",m],["__file","index.html.vue"]]),_=JSON.parse('{"path":"/interview/uniapp/onLaunch/","title":"uniapp 应用启动onLaunch方法，改为同步，执行后再执行页面加载onLoad方法","lang":"zh-CN","frontmatter":{"title":"uniapp 应用启动onLaunch方法，改为同步，执行后再执行页面加载onLoad方法","sidebarDepth":0,"date":"2024-05-21T00:00:00.000Z"},"headers":[{"level":2,"title":"问题描述","slug":"问题描述","link":"#问题描述","children":[]},{"level":2,"title":"方案一","slug":"方案一","link":"#方案一","children":[{"level":3,"title":"main.js 添加如下代码","slug":"main-js-添加如下代码","link":"#main-js-添加如下代码","children":[]},{"level":3,"title":"应用启动时，设置需要等待的逻辑","slug":"应用启动时-设置需要等待的逻辑","link":"#应用启动时-设置需要等待的逻辑","children":[]},{"level":3,"title":"在页面 onLoad 中增加等待代码 await this.$onLaunched","slug":"在页面-onload-中增加等待代码-await-this-onlaunched","link":"#在页面-onload-中增加等待代码-await-this-onlaunched","children":[]}]},{"level":2,"title":"方案二","slug":"方案二","link":"#方案二","children":[{"level":3,"title":"main.js","slug":"main-js","link":"#main-js","children":[]},{"level":3,"title":"页面","slug":"页面","link":"#页面","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"updatedTime":1716773971000,"contributors":[{"name":"chenxt","email":"chenxt@power-www.com","commits":1}]},"filePathRelative":"interview/uniapp/onLaunch/index.md"}');export{j as comp,_ as data};
