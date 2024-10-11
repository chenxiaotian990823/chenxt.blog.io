<template><div><h1 id="说说你对盒子模型的理解" tabindex="-1"><a class="header-anchor" href="#说说你对盒子模型的理解"><span>说说你对盒子模型的理解?</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#是什么">是什么</router-link></li><li><router-link to="#标准盒子模型">标准盒子模型</router-link></li><li><router-link to="#ie-怪异盒子模型">IE 怪异盒子模型</router-link><ul><li><router-link to="#box-sizing">Box-sizing</router-link></li></ul></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么"><span>是什么</span></a></h2>
<p>当对一个文档进行布局（layout）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）</p>
<p>一个盒子由四个部分组成：content、padding、border、margin</p>
<p><img src="/images/interview/box.png" alt="图片"></p>
<p>content，即实际内容，显示文本和图像</p>
<p>boreder，即边框，围绕元素内容的内边距的一条或多条线，由粗细、样式、颜色三部分组成</p>
<p>padding，即内边距，清除内容周围的区域，内边距是透明的，取值不能为负，受盒子的 background 属性影响</p>
<p>margin，即外边距，在元素外创建额外的空白，空白通常指不能放其他元素的区域</p>
<p>上述是一个从二维的角度观察盒子，下面再看看看三维图：</p>
<p><img src="/images/interview/3dBox.png" alt="图片"></p>
<p>下面来段代码：</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>盒子模型<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们在浏览器查看元素时，却发现元素的大小变成了 240px</p>
<p>这是因为，在 CSS 中，盒子模型可以分成：</p>
<ul>
<li>W3C 标准盒子模型</li>
<li>IE 怪异盒子模型</li>
</ul>
<p>默认情况下，盒子模型为 W3C 标准盒子模型</p>
<h2 id="标准盒子模型" tabindex="-1"><a class="header-anchor" href="#标准盒子模型"><span>标准盒子模型</span></a></h2>
<p>标准盒子模型，是浏览器默认的盒子模型</p>
<p>下面看看标准盒子模型的模型图：</p>
<p><img src="/images/interview/normalBoxModel.png" alt="图片"></p>
<p>从上图可以看到：</p>
<p>盒子总宽度 = width + padding + border + margin;</p>
<p>盒子总高度 = height + padding + border + margin</p>
<p>也就是，width/height 只是内容高度，不包含 padding 和 border 值</p>
<p>所以上面问题中，设置 width 为 200px，但由于存在 padding，但实际上盒子的宽度有 240px</p>
<h2 id="ie-怪异盒子模型" tabindex="-1"><a class="header-anchor" href="#ie-怪异盒子模型"><span>IE 怪异盒子模型</span></a></h2>
<p>同样看看 IE 怪异盒子模型的模型图：</p>
<p><img src="/images/interview/IEBoxModel.png" alt="图片"></p>
<p>从上图可以看到：</p>
<ul>
<li>
<p>盒子总宽度 = width + margin;</p>
</li>
<li>
<p>盒子总高度 = height + margin;</p>
</li>
</ul>
<p>也就是，width/height 包含了 padding 和 border 值</p>
<h3 id="box-sizing" tabindex="-1"><a class="header-anchor" href="#box-sizing"><span>Box-sizing</span></a></h3>
<p>CSS 中的 box-sizing 属性定义了引擎应该如何计算一个元素的总宽度和总高度</p>
<p>语法：</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box|border-box|<span class="token property">inherit</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>content-box 默认值，元素的 width/height 不包含 padding，border，与标准盒子模型表现一致</li>
<li>border-box 元素的 width/height 包含 padding，border，与怪异盒子模型表现一致</li>
<li>inherit 指定 box-sizing 属性的值，应该从父元素继承</li>
</ul>
<p>回到上面的例子里，设置盒子为 border-box 模型</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>盒子模型<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候，就可以发现盒子的所占据的宽度为200px</p>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing<ExternalLinkIcon/></a></li>
</ul>
</div></template>


