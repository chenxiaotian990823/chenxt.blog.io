<template><div><h1 id="javascript-中如何实现函数缓存-函数缓存有哪些应用场景" tabindex="-1"><a class="header-anchor" href="#javascript-中如何实现函数缓存-函数缓存有哪些应用场景"><span>Javascript 中如何实现函数缓存？函数缓存有哪些应用场景？</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#是什么">是什么</router-link></li><li><router-link to="#如何实现">如何实现</router-link><ul><li><router-link to="#闭包">闭包</router-link></li><li><router-link to="#柯里化">柯里化</router-link></li><li><router-link to="#高阶函数">高阶函数</router-link></li></ul></li><li><router-link to="#应用场景">应用场景</router-link></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么"><span>是什么</span></a></h2>
<p>函数缓存，就是将函数运算过的结果进行缓存</p>
<p>本质上就是用空间（缓存存储）换时间（计算过程）</p>
<p>常用于缓存数据计算结果和缓存对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b
<span class="token keyword">const</span> calc <span class="token operator">=</span> <span class="token function">memoize</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span> <span class="token comment">// 函数缓存</span>
<span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment">// 30</span>
<span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment">// 30 缓存</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓存只是一个临时的数据存储，它保存数据，以便将来对该数据的请求能够更快地得到处理</p>
<h2 id="如何实现" tabindex="-1"><a class="header-anchor" href="#如何实现"><span>如何实现</span></a></h2>
<p>实现函数缓存主要依靠闭包、柯里化、高阶函数，这里再简单复习下：</p>
<h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包"><span>闭包</span></a></h3>
<p>闭包可以理解成，函数 + 函数体内可访问的变量总和</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> b <span class="token operator">+</span> a
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token comment">// 3</span>
  <span class="token punctuation">}</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>add 函数本身，以及其内部可访问的变量，即 a = 1，这两个组合在⼀起就形成了闭包</p>
<h3 id="柯里化" tabindex="-1"><a class="header-anchor" href="#柯里化"><span>柯里化</span></a></h3>
<p>把接受多个参数的函数转换成接受一个单一参数的函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 非函数柯里化</span>
<span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">//7</span>

<span class="token comment">// 函数柯里化</span>
<span class="token keyword">var</span> <span class="token function-variable function">add2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//**返回函数**</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">add2</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">//7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将一个二元函数拆分成两个一元函数</p>
<h3 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数"><span>高阶函数</span></a></h3>
<p>通过接收其他函数作为参数或返回其他函数的函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> bar
<span class="token punctuation">}</span>
<span class="token keyword">var</span> baz <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数 foo 如何返回另一个函数 bar，baz 现在持有对 foo 中定义的 bar 函数的引用。由于闭包特性，a 的值能够得到</p>
<p>下面再看看如何实现函数缓存，实现原理也很简单，把参数和对应的结果数据存在一个对象中，调用时判断参数对应的数据是否存在，存在就返回对应的结果数据，否则就返回计算结果</p>
<p>如下所示</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">memoize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> cache <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  content <span class="token operator">=</span> content <span class="token operator">||</span> <span class="token keyword">this</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用方式也很简单</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> calc <span class="token operator">=</span> <span class="token function">memoize</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> num1 <span class="token operator">=</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token comment">// 缓存得到的结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过程分析：</p>
<ul>
<li>在当前函数作用域定义了一个空对象，用于缓存运行结果</li>
<li>运用柯里化返回一个函数，返回的函数由于闭包特性，可以访问到cache</li>
<li>然后判断输入参数是不是在cache的中。如果已经存在，直接返回cache的内容，如果没有存在，使用函数func对输入参数求值，然后把结果存储在cache中</li>
</ul>
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2>
<p>虽然使用缓存效率是非常高的，但并不是所有场景都适用，因此千万不要极端的将所有函数都添加缓存</p>
<p>以下几种情况下，适合使用缓存：</p>
<ul>
<li>对于昂贵的函数调用，执行复杂计算的函数</li>
<li>对于具有有限且高度重复输入范围的函数</li>
<li>对于具有重复输入值的递归函数</li>
<li>对于纯函数，即每次使用特定输入调用时返回相同输出的函数</li>
</ul>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/112505577" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/112505577<ExternalLinkIcon/></a></li>
</ul>
</div></template>


