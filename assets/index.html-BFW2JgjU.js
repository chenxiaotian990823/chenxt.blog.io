import{_ as c,r as o,o as l,c as i,a as n,b as s,w as e,d as a,e as u}from"./app-DPz2NTkK.js";const r="/images/interview/viewablearea1.png",d="/images/interview/viewablearea2.png",k="/images/interview/viewablearea3.png",v={},m=n("h1",{id:"如何判断一个元素是否在可视区域中",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#如何判断一个元素是否在可视区域中"},[n("span",null,"如何判断一个元素是否在可视区域中？")])],-1),b={class:"table-of-contents"},g=u('<h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途"><span>用途</span></a></h2><p>可视区域即我们浏览网页的设备肉眼可见的区域，如下图</p><p><img src="'+r+'" alt="图片"></p><p>在日常开发中，我们经常需要判断目标元素是否在视窗之内或者和视窗的距离小于一个值（例如 100 px），从而实现一些常用的功能，例如：</p><ul><li>图片的懒加载</li><li>列表的无限滚动</li><li>计算广告元素的曝光情况</li><li>可点击链接的预加载</li></ul><h2 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式"><span>实现方式</span></a></h2><p>判断一个元素是否在可视区域，我们常用的有三种办法：</p><ul><li><p>offsetTop、scrollTop</p></li><li><p>getBoundingClientRect</p></li><li><p>Intersection Observer</p></li></ul><h3 id="offsettop、scrolltop" tabindex="-1"><a class="header-anchor" href="#offsettop、scrolltop"><span>offsetTop、scrollTop</span></a></h3><p>offsetTop，元素的上外边框至包含元素的上内边框之间的像素距离，其他 offset 属性如下图所示：</p><p><img src="'+d+`" alt="图片"></p><p>下面再来了解下 clientWidth、clientHeight：</p><ul><li>clientWidth：元素内容区宽度加上左右内边距宽度，即 clientWidth = content + padding</li><li>clientHeight：元素内容区高度加上上下内边距高度，即 clientHeight = content + padding 这里可以看到 client 元素都不包括外边距</li></ul><p>最后，关于 scroll 系列的属性如下：</p><ul><li><p>scrollWidth 和 scrollHeight 主要用于确定元素内容的实际大小</p></li><li><p>scrollLeft 和 scrollTop 属性既可以确定元素当前滚动的状态，也可以设置元素的滚动位置</p></li><li><ul><li>垂直滚动 scrollTop &gt; 0</li><li>水平滚动 scrollLeft &gt; 0</li></ul></li><li><p>将元素的 scrollLeft 和 scrollTop 设置为 0，可以重置元素的滚动位置</p></li></ul><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h4><ul><li>上述属性都是只读的，每次访问都要重新开始</li></ul><p>下面再看看如何实现判断：</p><p>公式如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>el<span class="token punctuation">.</span>offsetTop <span class="token operator">-</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">&lt;=</span> viewPortHeight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码实现：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isInViewPortOfOne</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// viewPortHeight 兼容所有浏览器写法</span>
  <span class="token keyword">const</span> viewPortHeight <span class="token operator">=</span>
    window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span>
    document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">||</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight
  <span class="token keyword">const</span> offsetTop <span class="token operator">=</span> el<span class="token punctuation">.</span>offsetTop
  <span class="token keyword">const</span> scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop
  <span class="token keyword">const</span> top <span class="token operator">=</span> offsetTop <span class="token operator">-</span> scrollTop
  <span class="token keyword">return</span> top <span class="token operator">&lt;=</span> viewPortHeight
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getboundingclientrect" tabindex="-1"><a class="header-anchor" href="#getboundingclientrect"><span>getBoundingClientRect</span></a></h3><p>返回值是一个 DOMRect 对象，拥有 left, top, right, bottom, x, y, width, 和 height 属性</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.target&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> clientRect <span class="token operator">=</span> target<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clientRect<span class="token punctuation">)</span>

<span class="token comment">// {</span>
<span class="token comment">//   bottom: 556.21875,</span>
<span class="token comment">//   height: 393.59375,</span>
<span class="token comment">//   left: 333,</span>
<span class="token comment">//   right: 1017,</span>
<span class="token comment">//   top: 162.625,</span>
<span class="token comment">//   width: 684</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性对应的关系图如下所示：</p><p><img src="`+k+`" alt="图片"></p><p>当页面发生滚动的时候，top 与 left 属性值都会随之改变</p><p>如果一个元素在视窗之内的话，那么它一定满足下面四个条件：</p><ul><li>top 大于等于 0</li><li>left 大于等于 0</li><li>bottom 小于等于视窗高度</li><li>right 小于等于视窗宽度</li></ul><p>实现代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isInViewPort</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> viewWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth
  <span class="token keyword">const</span> viewHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight
  <span class="token keyword">const</span> <span class="token punctuation">{</span> top<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom<span class="token punctuation">,</span> left <span class="token punctuation">}</span> <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> top <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">&lt;=</span> viewWidth <span class="token operator">&amp;&amp;</span> bottom <span class="token operator">&lt;=</span> viewHeight
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="intersection-observer" tabindex="-1"><a class="header-anchor" href="#intersection-observer"><span>Intersection Observer</span></a></h3><p>Intersection Observer 即重叠观察者，从这个命名就可以看出它用于判断两个元素是否重叠，因为不用进行事件的监听，性能方面相比 getBoundingClientRect 会好很多</p><p>使用步骤主要分为两步：创建观察者和传入被观察者</p><h4 id="创建观察者" tabindex="-1"><a class="header-anchor" href="#创建观察者"><span>创建观察者</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 表示重叠面积占被观察者的比例，从 0 - 1 取值，</span>
  <span class="token comment">// 1 表示完全被包含</span>
  <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#scrollArea&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 必须是目标元素的父级元素</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 new IntersectionObserver 创建了观察者 observer，传入的参数 callback 在重叠比例超过 threshold 时会被执行\`</p><p>关于 callback 回调函数常用属性如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 上段代码中被省略的 callback</span>
<span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    entry<span class="token punctuation">.</span>time <span class="token comment">// 触发的时间</span>
    entry<span class="token punctuation">.</span>rootBounds <span class="token comment">// 根元素的位置矩形，这种情况下为视窗位置</span>
    entry<span class="token punctuation">.</span>boundingClientRect <span class="token comment">// 被观察者的位置举行</span>
    entry<span class="token punctuation">.</span>intersectionRect <span class="token comment">// 重叠区域的位置矩形</span>
    entry<span class="token punctuation">.</span>intersectionRatio <span class="token comment">// 重叠区域占被观察者面积的比例（被观察者不是矩形时也按照矩形计算）</span>
    entry<span class="token punctuation">.</span>target <span class="token comment">// 被观察者</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="传入被观察者" tabindex="-1"><a class="header-anchor" href="#传入被观察者"><span>传入被观察者</span></a></h4><p>通过 observer.observe(target) 这一行代码即可简单的注册被观察者</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.target&quot;</span><span class="token punctuation">)</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例分析" tabindex="-1"><a class="header-anchor" href="#案例分析"><span>案例分析</span></a></h2><p>实现：创建了一个十万个节点的长列表，当节点滚入到视窗中时，背景就会从红色变为黄色</p><p>Html 结构如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>css 样式如下：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.target</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>往 container 插入 1000 个元素</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> $container <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.container&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 插入 100000 个 &lt;div class=&quot;target&quot;&gt;&lt;/div&gt;</span>
<span class="token keyword">function</span> <span class="token function">createTargets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> htmlString <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;div class=&quot;target&quot;&gt;&lt;/div&gt;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
  $container<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>htmlString<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，首先使用 getBoundingClientRect 方法进行判断元素是否在可视区域</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isInViewPort</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> viewWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth
  <span class="token keyword">const</span> viewHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight
  <span class="token keyword">const</span> <span class="token punctuation">{</span> top<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom<span class="token punctuation">,</span> left <span class="token punctuation">}</span> <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> top <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">&lt;=</span> viewWidth <span class="token operator">&amp;&amp;</span> bottom <span class="token operator">&lt;=</span> viewHeight
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后开始监听 scroll 事件，判断页面上哪些元素在可视区域中，如果在可视区域中则将背景颜色设置为 yellow</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;scroll&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;scroll !&quot;</span><span class="token punctuation">)</span>
  $targets<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isInViewPort</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">$</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;background-color&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上述方式，可以看到可视区域颜色会变成黄色了，但是可以明显看到有卡顿的现象，原因在于我们绑定了 scroll 事件，scroll 事件伴随了大量的计算，会造成资源方面的浪费</p><p>下面通过 Intersection Observer 的形式同样实现相同的功能</p><p>首先创建一个观察者</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>getYellow<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1.0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>getYellow 回调函数实现对背景颜色改变，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getYellow</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;background-color&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后传入观察者，即.target 元素</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>$targets<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到功能同样完成，并且页面不会出现卡顿的情况</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,65),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect",target:"_blank",rel:"noopener noreferrer"},f={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_APIs",target:"_blank",rel:"noopener noreferrer"};function w(y,j){const t=o("router-link"),p=o("ExternalLinkIcon");return l(),i("div",null,[m,n("nav",b,[n("ul",null,[n("li",null,[s(t,{to:"#用途"},{default:e(()=>[a("用途")]),_:1})]),n("li",null,[s(t,{to:"#实现方式"},{default:e(()=>[a("实现方式")]),_:1}),n("ul",null,[n("li",null,[s(t,{to:"#offsettop、scrolltop"},{default:e(()=>[a("offsetTop、scrollTop")]),_:1})]),n("li",null,[s(t,{to:"#getboundingclientrect"},{default:e(()=>[a("getBoundingClientRect")]),_:1})]),n("li",null,[s(t,{to:"#intersection-observer"},{default:e(()=>[a("Intersection Observer")]),_:1})])])]),n("li",null,[s(t,{to:"#案例分析"},{default:e(()=>[a("案例分析")]),_:1})]),n("li",null,[s(t,{to:"#参考文献"},{default:e(()=>[a("参考文献")]),_:1})])])]),g,n("ul",null,[n("li",null,[n("a",h,[a("https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect"),s(p)])]),n("li",null,[n("a",f,[a("https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API"),s(p)])])])])}const _=c(v,[["render",w],["__file","index.html.vue"]]),q=JSON.parse('{"path":"/interview/js/viewablearea/","title":"如何判断一个元素是否在可视区域中？","lang":"zh-CN","frontmatter":{"title":"如何判断一个元素是否在可视区域中？","sidebarDepth":0,"date":"2024-06-04T00:00:00.000Z"},"headers":[{"level":2,"title":"用途","slug":"用途","link":"#用途","children":[]},{"level":2,"title":"实现方式","slug":"实现方式","link":"#实现方式","children":[{"level":3,"title":"offsetTop、scrollTop","slug":"offsettop、scrolltop","link":"#offsettop、scrolltop","children":[]},{"level":3,"title":"getBoundingClientRect","slug":"getboundingclientrect","link":"#getboundingclientrect","children":[]},{"level":3,"title":"Intersection Observer","slug":"intersection-observer","link":"#intersection-observer","children":[]}]},{"level":2,"title":"案例分析","slug":"案例分析","link":"#案例分析","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"updatedTime":1717481375000,"contributors":[{"name":"chenxt","email":"chenxt@power-www.com","commits":1}]},"filePathRelative":"interview/js/viewablearea/index.md"}');export{_ as comp,q as data};