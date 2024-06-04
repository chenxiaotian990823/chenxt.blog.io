<template><div><h1 id="dom-常见的操作有哪些" tabindex="-1"><a class="header-anchor" href="#dom-常见的操作有哪些"><span>DOM 常见的操作有哪些？</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#dom">DOM</router-link></li><li><router-link to="#操作">操作</router-link><ul><li><router-link to="#创建节点">创建节点</router-link></li><li><router-link to="#获取节点">获取节点</router-link></li><li><router-link to="#更新节点">更新节点</router-link></li><li><router-link to="#添加节点">添加节点</router-link></li><li><router-link to="#删除节点">删除节点</router-link></li></ul></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="dom" tabindex="-1"><a class="header-anchor" href="#dom"><span>DOM</span></a></h2>
<p>文档对象模型 (DOM) 是 HTML 和 XML 文档的编程接口</p>
<p>它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容</p>
<p>任何 HTML 或 XML 文档都可以用 DOM 表示为一个由节点构成的层级结构</p>
<p>节点分很多类型，每种类型对应着文档中不同的信息和（或）标记，也都有自己不同的特性、数据和方法，而且与其他类型有某种关系，如下所示：</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hello World!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DOM 像原子包含着亚原子微粒那样，也有很多类型的 DOM 节点包含着其他类型的节点。接下来我们先看看其中的三种：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>p title<span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>content<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述结构中，div、p 就是元素节点，content 就是文本节点，title 就是属性节点</p>
<h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2>
<p>日常前端开发，我们都离不开 DOM 操作</p>
<p>在以前，我们使用 Jquery，zepto 等库来操作 DOM，之后在 vue，Angular，React 等框架出现后，我们通过操作数据来控制 DOM（绝大多数时候），越来越少的去直接操作 DOM</p>
<p>但这并不代表原生操作不重要。相反，DOM 操作才能有助于我们理解框架深层的内容</p>
<p>下面就来分析 DOM 常见的操作，主要分为：</p>
<ul>
<li>创建节点</li>
<li>查询节点</li>
<li>更新节点</li>
<li>添加节点</li>
<li>删除节点</li>
</ul>
<h3 id="创建节点" tabindex="-1"><a class="header-anchor" href="#创建节点"><span>创建节点</span></a></h3>
<h4 id="createelement" tabindex="-1"><a class="header-anchor" href="#createelement"><span>createElement</span></a></h4>
<p>创建新元素，接受一个参数，即要创建元素的标签名</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> divEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="createtextnode" tabindex="-1"><a class="header-anchor" href="#createtextnode"><span>createTextNode</span></a></h4>
<p>创建一个文本节点</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> textEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">"content"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="createdocumentfragment" tabindex="-1"><a class="header-anchor" href="#createdocumentfragment"><span>createDocumentFragment</span></a></h4>
<p>用来创建一个文档碎片，它表示一种轻量级的文档，主要是用来存储临时节点，然后把文档碎片的内容一次性添加到 DOM 中</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fragment <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当请求把一个 DocumentFragment 节点插入文档树时，插入的不是 DocumentFragment 自身，而是它的所有子孙节点</p>
<h4 id="createattribute" tabindex="-1"><a class="header-anchor" href="#createattribute"><span>createAttribute</span></a></h4>
<p>创建属性节点，可以是自定义属性</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> dataAttribute <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createAttribute</span><span class="token punctuation">(</span><span class="token string">"custom"</span><span class="token punctuation">)</span>
consle<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataAttribute<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取节点" tabindex="-1"><a class="header-anchor" href="#获取节点"><span>获取节点</span></a></h3>
<h4 id="queryselector" tabindex="-1"><a class="header-anchor" href="#queryselector"><span>querySelector</span></a></h4>
<p>传入任何有效的 css 选择器，即可选中单个 DOM 元素（首个）：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".element"</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#element"</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'[name="username"]'</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"div + p > span"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果页面上没有指定的元素时，返回 null</p>
<h4 id="queryselectorall" tabindex="-1"><a class="header-anchor" href="#queryselectorall"><span>querySelectorAll</span></a></h4>
<p>返回一个包含节点子树内所有与之相匹配的 Element 节点列表，如果没有相匹配的，则返回一个空节点列表</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> notLive <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，该方法返回的是一个 NodeList 的静态实例，它是一个静态的“快照”，而非“实时”的查询</p>
<p>关于获取 DOM 元素的方法还有如下，就不一一述说</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"id属性值"</span><span class="token punctuation">)</span>
返回拥有指定id的对象的引用
document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"class属性值"</span><span class="token punctuation">)</span>
返回拥有指定<span class="token keyword">class</span>的对象集合
document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"标签名"</span><span class="token punctuation">)</span>
返回拥有指定标签名的对象集合
document<span class="token punctuation">.</span><span class="token function">getElementsByName</span><span class="token punctuation">(</span><span class="token string">"name属性值"</span><span class="token punctuation">)</span>
返回拥有指定名称的对象结合
document <span class="token operator">/</span> element<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"CSS选择器"</span><span class="token punctuation">)</span>
仅返回第一个匹配的元素
document <span class="token operator">/</span> element<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">"CSS选择器"</span><span class="token punctuation">)</span>
返回所有匹配的元素
document<span class="token punctuation">.</span>documentElement
获取页面中的<span class="token constant">HTML</span>标签
document<span class="token punctuation">.</span>body
获取页面中的<span class="token constant">BODY</span>标签
document<span class="token punctuation">.</span>all<span class="token punctuation">[</span><span class="token string">""</span><span class="token punctuation">]</span>
获取页面中的所有元素节点的对象集合型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，每个 DOM 元素还有 parentNode、childNodes、firstChild、lastChild、nextSibling、previousSibling 属性，关系图如下图所示</p>
<p><img src="/images/interview/querySelectorAll.png" alt="图片"></p>
<h3 id="更新节点" tabindex="-1"><a class="header-anchor" href="#更新节点"><span>更新节点</span></a></h3>
<h4 id="innerhtml" tabindex="-1"><a class="header-anchor" href="#innerhtml"><span>innerHTML</span></a></h4>
<p>不但可以修改一个 DOM 节点的文本内容，还可以直接通过 HTML 片段修改 DOM 节点内部的子树</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取&lt;p id="p">...&lt;/p ></span>
<span class="token keyword">var</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span>
<span class="token comment">// 设置文本为abc:</span>
p<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"ABC"</span> <span class="token comment">// &lt;p id="p">ABC&lt;/p ></span>
<span class="token comment">// 设置HTML:</span>
p<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'ABC &lt;span style="color:red">RED&lt;/span> XYZ'</span>
<span class="token comment">// &lt;p>...&lt;/p >的内部结构已修改</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="innertext、textcontent" tabindex="-1"><a class="header-anchor" href="#innertext、textcontent"><span>innerText、textContent</span></a></h4>
<p>自动对字符串进行 HTML 编码，保证无法设置任何 HTML 标签</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取&lt;p id="p-id">...&lt;/p ></span>
<span class="token keyword">var</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"p-id"</span><span class="token punctuation">)</span>
<span class="token comment">// 设置文本:</span>
p<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'&lt;script>alert("Hi")&lt;/script>'</span>
<span class="token comment">// HTML被自动编码，无法设置一个&lt;script>节点:</span>
<span class="token comment">// &lt;p id="p-id">&amp;lt;script&amp;gt;alert("Hi")&amp;lt;/script&amp;gt;&lt;/p ></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两者的区别在于读取属性时，innerText 不返回隐藏元素的文本，而 textContent 返回所有文本</p>
<h4 id="style" tabindex="-1"><a class="header-anchor" href="#style"><span>style</span></a></h4>
<p>DOM 节点的 style 属性对应所有的 CSS，可以直接获取或设置。遇到-需要转化为驼峰命名</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取&lt;p id="p-id">...&lt;/p ></span>
<span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"p-id"</span><span class="token punctuation">)</span>
<span class="token comment">// 设置CSS:</span>
p<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"#ff0000"</span>
p<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token string">"20px"</span> <span class="token comment">// 驼峰命名</span>
p<span class="token punctuation">.</span>style<span class="token punctuation">.</span>paddingTop <span class="token operator">=</span> <span class="token string">"2em"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加节点" tabindex="-1"><a class="header-anchor" href="#添加节点"><span>添加节点</span></a></h3>
<h4 id="innerhtml-1" tabindex="-1"><a class="header-anchor" href="#innerhtml-1"><span>innerHTML</span></a></h4>
<p>如果这个 DOM 节点是空的，例如，<div></div>，那么，直接使用 innerHTML = '<span>child</span>'就可以修改 DOM 节点的内容，相当于添加了新的 DOM 节点</p>
<p>如果这个 DOM 节点不是空的，那就不能这么做，因为 innerHTML 会直接替换掉原来的所有子节点</p>
<h4 id="appendchild" tabindex="-1"><a class="header-anchor" href="#appendchild"><span>appendChild</span></a></h4>
<p>把一个子节点添加到父节点的最后一个子节点</p>
<p>举个例子</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- HTML结构 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>JavaScript<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>java<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>python<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Python<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scheme<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Scheme<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加一个 p 元素</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> js <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"js"</span><span class="token punctuation">)</span>
js<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"JavaScript"</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"list"</span><span class="token punctuation">)</span>
list<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在 HTML 结构变成了下面</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- HTML结构 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>java<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>python<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Python<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scheme<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Scheme<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>JavaScript<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 添加元素 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，我们是获取DOM元素后再进行添加操作，这个js节点是已经存在当前文档树中，因此这个节点首先会从原先的位置删除，再插入到新的位置</p>
<p>如果动态添加新的节点，则先创建一个新的节点，然后插入到指定的位置</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'list'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">const</span> haskell <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
haskell<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">'haskell'</span><span class="token punctuation">;</span>
haskell<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'Haskell'</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>haskell<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="insertbefore" tabindex="-1"><a class="header-anchor" href="#insertbefore"><span>insertBefore</span></a></h4>
<p>把子节点插入到指定的位置，使用方法如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>parentElement<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>newElement<span class="token punctuation">,</span> referenceElement<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>子节点会插入到referenceElement之前</p>
<h4 id="setattribute" tabindex="-1"><a class="header-anchor" href="#setattribute"><span>setAttribute</span></a></h4>
<p>在指定元素中添加一个属性节点，如果元素中已有该属性改变属性值</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">)</span>
div<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'class'</span><span class="token punctuation">,</span> <span class="token string">'white'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//第一个参数属性名，第二个参数属性值。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除节点" tabindex="-1"><a class="header-anchor" href="#删除节点"><span>删除节点</span></a></h3>
<p>删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的removeChild把自己删掉</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 拿到待删除节点:</span>
<span class="token keyword">const</span> self <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'to-be-removed'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 拿到父节点:</span>
<span class="token keyword">const</span> parent <span class="token operator">=</span> self<span class="token punctuation">.</span>parentElement<span class="token punctuation">;</span>
<span class="token comment">// 删除:</span>
<span class="token keyword">const</span> removed <span class="token operator">=</span> parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">;</span>
removed <span class="token operator">===</span> self<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置</p>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model<ExternalLinkIcon/></a></li>
</ul>
</div></template>


