import{_ as t,r as o,o as l,c as i,a as n,b as a,w as e,e as c,d as p}from"./app-DPz2NTkK.js";const r={},u=n("h1",{id:"vue-项目中你是如何解决跨域的呢",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-项目中你是如何解决跨域的呢"},[n("span",null,"Vue 项目中你是如何解决跨域的呢？")])],-1),d={class:"table-of-contents"},k=c(`<h2 id="跨域是什么" tabindex="-1"><a class="header-anchor" href="#跨域是什么"><span>跨域是什么</span></a></h2><p>跨域本质是浏览器基于同源策略的一种安全手段</p><p>同源策略（Sameoriginpolicy），是一种约定，它是浏览器最核心也最基本的安全功能</p><p>所谓同源（即指在同一个域）具有以下三个相同点</p><ul><li>协议相同（protocol）</li><li>主机相同（host）</li><li>端口相同（port）</li></ul><p>反之非同源请求，也就是协议、端口、主机其中一项不相同的时候，这时候就会产生跨域</p><blockquote><p>一定要注意跨域是浏览器的限制，你用抓包工具抓取接口数据，是可以看到接口已经把数据返回回来了，只是浏览器的限制，你获取不到数据。用 postman 请求接口能够请求到数据。这些再次印证了跨域是浏览器的限制。</p></blockquote><h2 id="如何解决" tabindex="-1"><a class="header-anchor" href="#如何解决"><span>如何解决</span></a></h2><p>解决跨域的方法有很多，下面列举了三种：</p><ul><li>JSONP</li><li>CORS</li><li>Proxy</li></ul><p>而在 vue 项目中，我们主要针对 CORS 或 Proxy 这两种方案进行展开</p><h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors"><span>CORS</span></a></h3><p>CORS （Cross-Origin Resource Sharing，跨域资源共享）是一个系统，它由一系列传输的 HTTP 头组成，这些 HTTP 头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应</p><p>CORS 实现起来非常方便，只需要增加一些 HTTP 头，让服务器能声明允许的访问来源</p><p>只要后端实现了 CORS，就实现了跨域</p><h3 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy"><span>Proxy</span></a></h3><p>代理（Proxy）也称网络代理，是一种特殊的网络服务，允许一个（一般为客户端）通过这个服务与另一个网络终端（一般为服务器）进行非直接的连接。一些网关、路由器等网络设备具备网络代理功能。一般认为代理服务有利于保障网络终端的隐私或安全，防止攻击</p><h4 id="方案一" tabindex="-1"><a class="header-anchor" href="#方案一"><span>方案一</span></a></h4><p>如果是通过 vue-cli 脚手架工具搭建项目，我们可以通过 webpack 为我们起一个本地服务器作为请求的代理对象</p><p>通过该服务器转发请求至目标服务器，得到结果再转发给前端，但是最终发布上线时如果 web 应用和接口服务器不在一起仍会跨域</p><p>在 vue.config.js 文件，新增以下代码</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>amodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8084</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// vue项目启动时自动打开浏览器</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// &#39;/api&#39;是代理标识，用于告诉node，url前面是/api的就是使用代理的</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://xxx.xxx.xx.xx:8080&quot;</span><span class="token punctuation">,</span> <span class="token comment">//目标地址，一般是指后台服务器地址</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否跨域</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// pathRewrite 的作用是把实际Request Url中的&#39;/api&#39;用&quot;&quot;代替</span>
          <span class="token string-property property">&quot;^/api&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 axios 发送请求中，配置请求的根路径</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&quot;/api&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="方案二" tabindex="-1"><a class="header-anchor" href="#方案二"><span>方案二</span></a></h4><p>此外，还可通过服务端实现代理请求转发</p><p>以 express 框架为例</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http-proxy-middleware&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/api&quot;</span><span class="token punctuation">,</span> <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:4000&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方案三" tabindex="-1"><a class="header-anchor" href="#方案三"><span>方案三</span></a></h4><p>通过配置 nginx 实现代理</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>server <span class="token punctuation">{</span>
    listen    <span class="token number">80</span><span class="token punctuation">;</span>
    # server_name www<span class="token punctuation">.</span>josephxia<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        root  <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>www<span class="token operator">/</span>html<span class="token punctuation">;</span>
        index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span>
        try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">/</span>api <span class="token punctuation">{</span>
        proxy_pass  http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">3000</span><span class="token punctuation">;</span>
        proxy_redirect   off<span class="token punctuation">;</span>
        proxy_set_header  Host       $host<span class="token punctuation">;</span>
        proxy_set_header  <span class="token constant">X</span><span class="token operator">-</span>Real<span class="token operator">-</span><span class="token constant">IP</span>     $remote_addr<span class="token punctuation">;</span>
        proxy_set_header  <span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span>For  $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function v(m,h){const s=o("router-link");return l(),i("div",null,[u,n("nav",d,[n("ul",null,[n("li",null,[a(s,{to:"#跨域是什么"},{default:e(()=>[p("跨域是什么")]),_:1})]),n("li",null,[a(s,{to:"#如何解决"},{default:e(()=>[p("如何解决")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#cors"},{default:e(()=>[p("CORS")]),_:1})]),n("li",null,[a(s,{to:"#proxy"},{default:e(()=>[p("Proxy")]),_:1})])])])])]),k])}const x=t(r,[["render",v],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/interview/vue/crossDomain/","title":"Vue项目中你是如何解决跨域的呢？","lang":"zh-CN","frontmatter":{"title":"Vue项目中你是如何解决跨域的呢？","sidebarDepth":0,"date":"2024-05-17T00:00:00.000Z"},"headers":[{"level":2,"title":"跨域是什么","slug":"跨域是什么","link":"#跨域是什么","children":[]},{"level":2,"title":"如何解决","slug":"如何解决","link":"#如何解决","children":[{"level":3,"title":"CORS","slug":"cors","link":"#cors","children":[]},{"level":3,"title":"Proxy","slug":"proxy","link":"#proxy","children":[]}]}],"git":{"updatedTime":1715936165000,"contributors":[{"name":"chenxt","email":"chenxt@power-www.com","commits":1}]},"filePathRelative":"interview/vue/crossDomain/index.md"}');export{x as comp,y as data};
