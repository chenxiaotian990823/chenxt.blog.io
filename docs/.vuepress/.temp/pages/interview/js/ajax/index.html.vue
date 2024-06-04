<template><div><h1 id="ajax-原理是什么-如何实现" tabindex="-1"><a class="header-anchor" href="#ajax-原理是什么-如何实现"><span>ajax 原理是什么？如何实现？</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#是什么">是什么</router-link></li><li><router-link to="#实现过程实现">实现过程实现</router-link><ul><li><router-link to="#创建-xmlhttprequest-对象">创建 XMLHttpRequest 对象</router-link></li><li><router-link to="#与服务器建立连接">与服务器建立连接</router-link></li><li><router-link to="#给服务端发送数据">给服务端发送数据</router-link></li><li><router-link to="#绑定-onreadystatechange-事件">绑定 onreadystatechange 事件</router-link></li></ul></li><li><router-link to="#封装">封装</router-link></li></ul></nav>
<h2 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么"><span>是什么</span></a></h2>
<p>AJAX 全称(Async Javascript and XML)</p>
<p>即异步的 JavaScript 和 XML，是一种创建交互式网页应用的网页开发技术，可以在不重新加载整个网页的情况下，与服务器交换数据，并且更新部分网页</p>
<p>Ajax 的原理简单来说通过 XmlHttpRequest 对象来向服务器发异步请求，从服务器获得数据，然后用 JavaScript 来操作 DOM 而更新页面</p>
<p>流程图如下：</p>
<p><img src="/images/interview/ajaxprocess.png" alt="图片"></p>
<p>下面举个例子：</p>
<p>领导想找小李汇报一下工作，就委托秘书去叫小李，自己就接着做其他事情，直到秘书告诉他小李已经到了，最后小李跟领导汇报工作</p>
<p>Ajax 请求数据流程与“领导想找小李汇报一下工作”类似，上述秘书就相当于 XMLHttpRequest 对象，领导相当于浏览器，响应数据相当于小李</p>
<p>浏览器可以发送 HTTP 请求后，接着做其他事情，等收到 XHR 返回来的数据再进行操作</p>
<h2 id="实现过程实现" tabindex="-1"><a class="header-anchor" href="#实现过程实现"><span>实现过程实现</span></a></h2>
<p>Ajax 异步交互需要服务器逻辑进行配合，需要完成以下步骤：</p>
<ul>
<li>
<p>创建 Ajax 的核心对象 XMLHttpRequest 对象</p>
</li>
<li>
<p>通过 XMLHttpRequest 对象的 open() 方法与服务端建立连接</p>
</li>
<li>
<p>构建请求所需的数据内容，并通过 XMLHttpRequest 对象的 send() 方法发送给服务器端</p>
</li>
<li>
<p>通过 XMLHttpRequest 对象提供的 onreadystatechange 事件监听服务器端你的通信状态</p>
</li>
<li>
<p>接受并处理服务端向客户端响应的数据结果</p>
</li>
<li>
<p>将处理结果更新到 HTML 页面中</p>
</li>
</ul>
<h3 id="创建-xmlhttprequest-对象" tabindex="-1"><a class="header-anchor" href="#创建-xmlhttprequest-对象"><span>创建 XMLHttpRequest 对象</span></a></h3>
<p>通过 XMLHttpRequest() 构造函数用于初始化一个 XMLHttpRequest 实例对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="与服务器建立连接" tabindex="-1"><a class="header-anchor" href="#与服务器建立连接"><span>与服务器建立连接</span></a></h3>
<p>通过 XMLHttpRequest 对象的 open() 方法与服务器建立连接</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token punctuation">[</span>async<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">,</span> user<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">,</span> password<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数说明：</p>
<ul>
<li>
<p>method：表示当前的请求方式，常见的有 GET、POST</p>
</li>
<li>
<p>url：服务端地址</p>
</li>
<li>
<p>async：布尔值，表示是否异步执行操作，默认为 true</p>
</li>
<li>
<p>user: 可选的用户名用于认证用途；默认为`null</p>
</li>
<li>
<p>password: 可选的密码用于认证用途，默认为`null</p>
</li>
</ul>
<h3 id="给服务端发送数据" tabindex="-1"><a class="header-anchor" href="#给服务端发送数据"><span>给服务端发送数据</span></a></h3>
<p>通过 XMLHttpRequest 对象的 send() 方法，将客户端页面的数据发送给服务端</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">[</span>body<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>body: 在 XHR 请求中要发送的数据体，如果不传递数据则为 null</p>
<p>如果使用 GET 请求发送数据的时候，需要注意如下：</p>
<ul>
<li>将请求数据添加到 open()方法中的 url 地址中</li>
<li>发送请求数据中的 send()方法中参数设置为 null</li>
</ul>
<h3 id="绑定-onreadystatechange-事件" tabindex="-1"><a class="header-anchor" href="#绑定-onreadystatechange-事件"><span>绑定 onreadystatechange 事件</span></a></h3>
<p>onreadystatechange 事件用于监听服务器端的通信状态，主要监听的属性为 XMLHttpRequest.readyState ,</p>
<p>关于 XMLHttpRequest.readyState 属性有五个状态，如下图显示</p>
<p><img src="/images/interview/ajaxReadyState.png" alt="图片"></p>
<p>只要 readyState 属性值一变化，就会触发一次 readystatechange 事件</p>
<p>XMLHttpRequest.responseText 属性用于接收服务器端的响应结果</p>
<p>举个例子：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
request<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 整个请求过程完毕</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> request<span class="token punctuation">.</span>status <span class="token operator">&lt;=</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span> <span class="token comment">// 服务端返回的结果</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">400</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"错误信息："</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>status<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token string">"http://xxxx"</span><span class="token punctuation">)</span>
request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装" tabindex="-1"><a class="header-anchor" href="#封装"><span>封装</span></a></h2>
<p>通过上面对 XMLHttpRequest 对象的了解，下面来封装一个简单的 ajax 请求</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//封装一个ajax请求</span>
<span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//创建XMLHttpRequest对象</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


    <span class="token comment">//初始化参数的内容</span>
    options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    options<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token string">'GET'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    options<span class="token punctuation">.</span>dataType <span class="token operator">=</span> options<span class="token punctuation">.</span>dataType <span class="token operator">||</span> <span class="token string">'json'</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> options<span class="token punctuation">.</span>data

    <span class="token comment">//发送请求</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'GET'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>url <span class="token operator">+</span> <span class="token string">'?'</span> <span class="token operator">+</span> params<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'POST'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>

    <span class="token comment">//接收请求</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> status <span class="token operator">=</span> xhr<span class="token punctuation">.</span>status
            <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                options<span class="token punctuation">.</span>success <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">,</span> xhr<span class="token punctuation">.</span>responseXML<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                options<span class="token punctuation">.</span>fail <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方式如下</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">"json"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://xxxx"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> xml</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//请求成功后的回调函数</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">////请求失败后的回调函数</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


