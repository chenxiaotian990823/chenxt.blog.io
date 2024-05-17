import{_ as c,r as o,o as l,c as i,a as n,b as s,w as p,d as a,e as u}from"./app-DFCVeU-Q.js";const r={},d=n("h1",{id:"vue-项目中有封装过-axios-吗-主要是封装哪方面的",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-项目中有封装过-axios-吗-主要是封装哪方面的"},[n("span",null,"Vue 项目中有封装过 axios 吗？主要是封装哪方面的？")])],-1),k={class:"table-of-contents"},v=u(`<h2 id="axios-是什么" tabindex="-1"><a class="header-anchor" href="#axios-是什么"><span>axios 是什么</span></a></h2><p>基于 XMLHttpRequest 服务来执行 HTTP 请求，支持丰富的配置，支持 Promise，支持浏览器端和 Node.js 端。自 Vue2.0 起，尤大宣布取消对 vue-resource 的官方推荐，转而推荐 axios。现在 axios 已经成为大部分 Vue 开发者的首选</p><h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h3><ul><li>从浏览器中创建 XMLHttpRequests</li><li>从 node.js 创建 http 请求</li><li>支持 Promise API</li><li>拦截请求和响应</li><li>转换请求数据和响应数据</li><li>取消请求</li><li>自动转换 JSON 数据</li><li>客户端支持防御 XSRF</li></ul><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h3><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 项目中安装</span>
npm install axios <span class="token operator">--</span><span class="token constant">S</span>
<span class="token comment">// cdn 引入</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://unpkg.com/axios/dist/axios.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="导入" tabindex="-1"><a class="header-anchor" href="#导入"><span>导入</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="发送请求" tabindex="-1"><a class="header-anchor" href="#发送请求"><span>发送请求</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 设置请求的地址</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 设置请求方法</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// get请求使用params进行参数凭借,如果是post请求用data</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// res为后端返回的数据</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="并发请求-axios-all" tabindex="-1"><a class="header-anchor" href="#并发请求-axios-all"><span>并发请求 axios.all([])</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/user/12345&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/user/12345/permissions&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  axios<span class="token punctuation">.</span><span class="token function">spread</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res1<span class="token punctuation">,</span> res2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// res1第一个请求的返回的内容，res2第二个请求返回的内容</span>
    <span class="token comment">// 两个请求都执行完成才会执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为什么要封装" tabindex="-1"><a class="header-anchor" href="#为什么要封装"><span>为什么要封装</span></a></h2><p>axios 的 API 很友好，你完全可以很轻松地在项目中直接使用。</p><p>不过随着项目规模增大，如果每发起一次 HTTP 请求，就要把这些比如设置超时时间、设置请求头、根据项目环境判断使用哪个请求地址、错误处理等等操作，都需要写一遍</p><p>这种重复劳动不仅浪费时间，而且让代码变得冗余不堪，难以维护。为了提高我们的代码质量，我们应该在项目中二次封装一下 axios 再使用</p><h2 id="如何封装" tabindex="-1"><a class="header-anchor" href="#如何封装"><span>如何封装</span></a></h2><p>封装的同时，你需要和 后端协商好一些约定，请求头，状态码，请求超时时间.......</p><p>设置接口请求前缀：根据开发、测试、生产环境的不同，前缀需要加以区分</p><p>请求头 : 来实现一些具体的业务，必须携带一些参数才可以请求(例如：会员业务)</p><p>状态码: 根据接口返回的不同 status ， 来执行不同的业务，这块需要和后端约定好</p><p>请求方法：根据 get、post 等方法进行一个再次封装，使用起来更为方便</p><p>请求拦截器: 根据请求的请求头设定，来决定哪些请求可以访问</p><p>响应拦截器： 这块就是根据 后端\`返回来的状态码判定执行不同业务</p><h3 id="设置接口请求前缀" tabindex="-1"><a class="header-anchor" href="#设置接口请求前缀"><span>设置接口请求前缀</span></a></h3><p>利用 node 环境变量来作判断，用来区分开发、测试、生产环境</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&quot;http://dev.xxx.com&quot;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&quot;http://prod.xxx.com&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在本地调试的时候，还需要在 vue.config.js 文件中配置 devServer 实现代理转发，从而实现跨域</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/proxyApi&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://dev.xxx.com&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;/proxyApi&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置请求头与超时时间" tabindex="-1"><a class="header-anchor" href="#设置请求头与超时时间"><span>设置请求头与超时时间</span></a></h3><p>大部分情况下，请求头都是固定的，只有少部分情况下，会需要一些特殊的请求头，这里将普适性的请求头作为基础配置。当需要特殊请求头时，将特殊请求头作为参数传入，覆盖基础配置</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>  <span class="token comment">// 请求 30s 超时</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">get</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/x-www-form-urlencoded;charset=utf-8&#39;</span>
      <span class="token comment">// 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">post</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json;charset=utf-8&#39;</span>
      <span class="token comment">// 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装请求方法" tabindex="-1"><a class="header-anchor" href="#封装请求方法"><span>封装请求方法</span></a></h3><p>先引入封装好的方法，在要调用的接口重新封装成一个方法暴露出去</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// get 请求</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">httpGet</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> url<span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    axios
      <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        params<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// post</span>
<span class="token comment">// post请求</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">httpPost</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      url<span class="token punctuation">,</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">transformRequest</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> it <span class="token keyword">in</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret <span class="token operator">+=</span>
              <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>it<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&amp;&quot;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> ret
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 发送的数据</span>
      data<span class="token punctuation">,</span>
      <span class="token comment">// url参数</span>
      params<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把封装的方法放在一个 api.js 文件中</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> httpGet<span class="token punctuation">,</span> httpPost <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./http&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getorglist</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token function">httpGet</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;apps/api/org/list&quot;</span><span class="token punctuation">,</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面中就能直接调用</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// .vue</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getorglist <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/assets/js/api&quot;</span>

<span class="token function">getorglist</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样可以把 api 统一管理起来，以后维护修改只需要在 api.js 文件操作即可</p><h3 id="请求拦截器" tabindex="-1"><a class="header-anchor" href="#请求拦截器"><span>请求拦截器</span></a></h3><p>请求拦截器可以在每个请求里加上 token，做了统一处理后维护起来也方便</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 请求拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 每次发送请求之前判断是否存在token</span>
    <span class="token comment">// 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况，此处token一般是用户完成登录后储存到localstorage里的</span>
    token <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> token<span class="token punctuation">)</span>
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应拦截器" tabindex="-1"><a class="header-anchor" href="#响应拦截器"><span>响应拦截器</span></a></h3><p>响应拦截器可以在接收到响应后先做一层操作，如根据状态码判断登录状态、授权</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 响应拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据</span>
  <span class="token comment">// 否则的话抛出错误</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">511</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 未授权调取授权接口</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">510</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 未登录跳转登录页</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 我们可以在这里对异常状态作统一处理</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理请求失败的情况</span>
    <span class="token comment">// 对不同返回码对相应处理</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h3><ul><li>封装是编程中很有意义的手段，简单的axios封装，就可以让我们可以领略到它的魅力</li><li>封装 axios 没有一个绝对的标准，只要你的封装可以满足你的项目需求，并且用起来方便，那就是一个好的封装方案</li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,50),m={href:"https://www.html.cn/qa/vue-js/20544.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://juejin.cn/post/6844904033782611976",target:"_blank",rel:"noopener noreferrer"},h={href:"https://juejin.cn/post/6844903801451708429",target:"_blank",rel:"noopener noreferrer"};function g(f,x){const t=o("router-link"),e=o("ExternalLinkIcon");return l(),i("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[s(t,{to:"#axios-是什么"},{default:p(()=>[a("axios 是什么")]),_:1}),n("ul",null,[n("li",null,[s(t,{to:"#特性"},{default:p(()=>[a("特性")]),_:1})]),n("li",null,[s(t,{to:"#基本使用"},{default:p(()=>[a("基本使用")]),_:1})])])]),n("li",null,[s(t,{to:"#为什么要封装"},{default:p(()=>[a("为什么要封装")]),_:1})]),n("li",null,[s(t,{to:"#如何封装"},{default:p(()=>[a("如何封装")]),_:1}),n("ul",null,[n("li",null,[s(t,{to:"#设置接口请求前缀"},{default:p(()=>[a("设置接口请求前缀")]),_:1})]),n("li",null,[s(t,{to:"#设置请求头与超时时间"},{default:p(()=>[a("设置请求头与超时时间")]),_:1})]),n("li",null,[s(t,{to:"#封装请求方法"},{default:p(()=>[a("封装请求方法")]),_:1})]),n("li",null,[s(t,{to:"#请求拦截器"},{default:p(()=>[a("请求拦截器")]),_:1})]),n("li",null,[s(t,{to:"#响应拦截器"},{default:p(()=>[a("响应拦截器")]),_:1})]),n("li",null,[s(t,{to:"#小结"},{default:p(()=>[a("小结")]),_:1})])])]),n("li",null,[s(t,{to:"#参考文献"},{default:p(()=>[a("参考文献")]),_:1})])])]),v,n("ul",null,[n("li",null,[n("a",m,[a("https://www.html.cn/qa/vue-js/20544.html"),s(e)])]),n("li",null,[n("a",b,[a("https://juejin.cn/post/6844904033782611976"),s(e)])]),n("li",null,[n("a",h,[a("https://juejin.cn/post/6844903801451708429"),s(e)])])])])}const j=c(r,[["render",g],["__file","index.html.vue"]]),w=JSON.parse('{"path":"/interview/vue/axios/","title":"Vue项目中有封装过axios吗？主要是封装哪方面的？","lang":"zh-CN","frontmatter":{"title":"Vue项目中有封装过axios吗？主要是封装哪方面的？","sidebarDepth":0,"date":"2024-05-17T00:00:00.000Z"},"headers":[{"level":2,"title":"axios 是什么","slug":"axios-是什么","link":"#axios-是什么","children":[{"level":3,"title":"特性","slug":"特性","link":"#特性","children":[]},{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]}]},{"level":2,"title":"为什么要封装","slug":"为什么要封装","link":"#为什么要封装","children":[]},{"level":2,"title":"如何封装","slug":"如何封装","link":"#如何封装","children":[{"level":3,"title":"设置接口请求前缀","slug":"设置接口请求前缀","link":"#设置接口请求前缀","children":[]},{"level":3,"title":"设置请求头与超时时间","slug":"设置请求头与超时时间","link":"#设置请求头与超时时间","children":[]},{"level":3,"title":"封装请求方法","slug":"封装请求方法","link":"#封装请求方法","children":[]},{"level":3,"title":"请求拦截器","slug":"请求拦截器","link":"#请求拦截器","children":[]},{"level":3,"title":"响应拦截器","slug":"响应拦截器","link":"#响应拦截器","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"updatedTime":1715936165000,"contributors":[{"name":"chenxt","email":"chenxt@power-www.com","commits":1}]},"filePathRelative":"interview/vue/axios/index.md"}');export{j as comp,w as data};
