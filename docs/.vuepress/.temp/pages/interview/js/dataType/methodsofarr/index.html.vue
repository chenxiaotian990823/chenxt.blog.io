<template><div><h1 id="数组的常用方法有哪些" tabindex="-1"><a class="header-anchor" href="#数组的常用方法有哪些"><span>数组的常用方法有哪些？</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#操作方法">操作方法</router-link><ul><li><router-link to="#增">增</router-link></li><li><router-link to="#删">删</router-link></li><li><router-link to="#改">改</router-link></li><li><router-link to="#查">查</router-link></li></ul></li><li><router-link to="#排序方法">排序方法</router-link></li></ul></nav>
<h2 id="操作方法" tabindex="-1"><a class="header-anchor" href="#操作方法"><span>操作方法</span></a></h2>
<p>数组基本操作可以归纳为 增、删、改、查，需要留意的是哪些方法会对原数组产生影响，哪些方法不会</p>
<p>下面对数组常用的操作方法做一个归纳</p>
<h3 id="增" tabindex="-1"><a class="header-anchor" href="#增"><span>增</span></a></h3>
<p>下面前三种是对原数组产生影响的增添方法，第四种则不会对原数组产生影响</p>
<ul>
<li>push()</li>
<li>unshift()</li>
<li>splice()</li>
<li>concat()</li>
</ul>
<h4 id="push" tabindex="-1"><a class="header-anchor" href="#push"><span>push()</span></a></h4>
<p>push()方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 创建一个数组</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">)</span> <span class="token comment">// 推入两项</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="unshift" tabindex="-1"><a class="header-anchor" href="#unshift"><span>unshift()</span></a></h4>
<p>unshift()在数组开头添加任意多个值，然后返回新的数组长度</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 创建一个数组</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">)</span> <span class="token comment">// 从数组开头推入两项</span>
<span class="token function">alert</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="splice" tabindex="-1"><a class="header-anchor" href="#splice"><span>splice()</span></a></h4>
<p>传入三个参数，分别是开始位置、0（要删除的元素数量）、插入的元素，返回空数组</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> removed <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"yellow"</span><span class="token punctuation">,</span> <span class="token string">"orange"</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colors<span class="token punctuation">)</span> <span class="token comment">// red,yellow,orange,green,blue</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>removed<span class="token punctuation">)</span> <span class="token comment">// []</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="concat" tabindex="-1"><a class="header-anchor" href="#concat"><span>concat()</span></a></h4>
<p>首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这个新构建的数组，不会影响原始数组</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> colors2 <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">"yellow"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"black"</span><span class="token punctuation">,</span> <span class="token string">"brown"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colors<span class="token punctuation">)</span> <span class="token comment">// ["red", "green","blue"]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colors2<span class="token punctuation">)</span> <span class="token comment">// ["red", "green", "blue", "yellow", "black", "brown"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删" tabindex="-1"><a class="header-anchor" href="#删"><span>删</span></a></h3>
<p>下面三种都会影响原数组，最后一项不影响原数组：</p>
<ul>
<li>pop()</li>
<li>shift()</li>
<li>splice()</li>
<li>slice()</li>
</ul>
<h4 id="pop" tabindex="-1"><a class="header-anchor" href="#pop"><span>pop()</span></a></h4>
<p>pop() 方法用于删除数组的最后一项，同时减少数组的 length 值，返回被删除的项</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> item <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 取得最后一项</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment">// green</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colors<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="shift" tabindex="-1"><a class="header-anchor" href="#shift"><span>shift()</span></a></h4>
<p>shift()方法用于删除数组的第一项，同时减少数组的 length 值，返回被删除的项</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> item <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 取得第一项</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment">// red</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colors<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="splice-1" tabindex="-1"><a class="header-anchor" href="#splice-1"><span>splice()</span></a></h4>
<p>传入两个参数，分别是开始位置，删除元素的数量，返回包含删除元素的数组</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> removed <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 删除第一项</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colors<span class="token punctuation">)</span> <span class="token comment">// green,blue</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>removed<span class="token punctuation">)</span> <span class="token comment">// red，只有一个元素的数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="slice" tabindex="-1"><a class="header-anchor" href="#slice"><span>slice()</span></a></h4>
<p>slice() 用于创建一个包含原有数组中一个或多个元素的新数组，不会影响原始数组</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">,</span> <span class="token string">"yellow"</span><span class="token punctuation">,</span> <span class="token string">"purple"</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> colors2 <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> colors3 <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colors<span class="token punctuation">)</span> <span class="token comment">// red,green,blue,yellow,purple</span>
concole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colors2<span class="token punctuation">)</span> <span class="token comment">// green,blue,yellow,purple</span>
concole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colors3<span class="token punctuation">)</span> <span class="token comment">// green,blue,yellow</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="改" tabindex="-1"><a class="header-anchor" href="#改"><span>改</span></a></h3>
<p>即修改原来数组的内容，常用 splice</p>
<h4 id="splice-2" tabindex="-1"><a class="header-anchor" href="#splice-2"><span>splice()</span></a></h4>
<p>传入三个参数，分别是开始位置，要删除元素的数量，要插入的任意多个元素，返回<strong>删除元素</strong>的数组，对原数组产生影响</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> removed <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"purple"</span><span class="token punctuation">)</span> <span class="token comment">// 插入两个值，删除一个元素</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colors<span class="token punctuation">)</span> <span class="token comment">// red,red,purple,blue</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>removed<span class="token punctuation">)</span> <span class="token comment">// green，只有一个元素的数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查" tabindex="-1"><a class="header-anchor" href="#查"><span>查</span></a></h3>
<p>即查找元素，返回元素坐标或者元素值</p>
<ul>
<li>indexOf()</li>
<li>includes()</li>
<li>find()</li>
</ul>
<h4 id="indexof" tabindex="-1"><a class="header-anchor" href="#indexof"><span>indexOf()</span></a></h4>
<p>返回要查找的元素在数组中的位置，如果没找到则返回 -1</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
numbers<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="includes" tabindex="-1"><a class="header-anchor" href="#includes"><span>includes()</span></a></h4>
<p>返回要查找的元素在数组中的位置，找到返回 true，否则 false</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
numbers<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="find" tabindex="-1"><a class="header-anchor" href="#find"><span>find()</span></a></h4>
<p>返回第一个匹配的元素</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> people <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Matt"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Nicholas"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
people<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token operator">=></span> element<span class="token punctuation">.</span>age <span class="token operator">&lt;</span> <span class="token number">28</span><span class="token punctuation">)</span> <span class="token comment">// // {name: "Matt", age: 27}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排序方法" tabindex="-1"><a class="header-anchor" href="#排序方法"><span>排序方法</span></a></h2>
<p>数组有两个方法可以用来对元素重新排序：</p>
<p>reverse()
sort()</p>
</div></template>


