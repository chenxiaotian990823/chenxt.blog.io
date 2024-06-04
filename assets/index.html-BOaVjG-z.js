import{_ as p,r as l,o,c,a as s,b as n,w as e,e as r,d as t}from"./app-DPz2NTkK.js";const i={},d=s("h1",{id:"和-区别-分别在什么情况使用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#和-区别-分别在什么情况使用"},[s("span",null,"== 和 ===区别，分别在什么情况使用")])],-1),u={class:"table-of-contents"},k=r(`<h2 id="等于操作符" tabindex="-1"><a class="header-anchor" href="#等于操作符"><span>等于操作符</span></a></h2><p>等于操作符用两个等于号（ == ）表示，如果操作数相等，则会返回 true</p><p>前面文章，我们提到在 JavaScript 中存在隐式转换。等于操作符（==）在比较中会先进行类型转换，再确定操作数是否相等</p><p>遵循以下规则：</p><p>如果任一操作数是布尔值，则将其转换为数值再比较是否相等</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token string">&quot;55&quot;</span> <span class="token operator">==</span> <span class="token number">55</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf()方法取得其原始值，再根据前面的规则进行比较</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">valueOf</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> result1 <span class="token operator">=</span> obj <span class="token operator">==</span> <span class="token number">1</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>null 和 undefined 相等</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有任一操作数是 NaN ，则相等操作符返回 false</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token number">NaN</span> <span class="token operator">==</span> <span class="token number">NaN</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> result1 <span class="token operator">=</span> obj1 <span class="token operator">==</span> obj2 <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面进一步做个小结：</p><ul><li><p>两个都为简单类型，字符串和布尔值都会转换成数值，再比较</p></li><li><p>简单类型与引用类型比较，对象转化成其原始类型的值，再比较</p></li><li><p>两个都为引用类型，则比较它们是否指向同一个对象</p></li><li><p>null 和 undefined 相等</p></li><li><p>存在 NaN 则返回 false</p></li></ul><h2 id="全等操作符" tabindex="-1"><a class="header-anchor" href="#全等操作符"><span>全等操作符</span></a></h2><p>全等操作符由 3 个等于号（ === ）表示，只有两个操作数在不转换的前提下相等才返回 true。即类型相同，值也需相同</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token string">&quot;55&quot;</span> <span class="token operator">===</span> <span class="token number">55</span> <span class="token comment">// false，不相等，因为数据类型不同</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token number">55</span> <span class="token operator">===</span> <span class="token number">55</span> <span class="token comment">// true，相等，因为数据类型相同值也相同</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>undefined 和 null 与自身严格相等</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token comment">//true</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h2><p>相等操作符（==）会做类型转换，再进行值的比较，全等运算符不会做类型转换</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token string">&quot;55&quot;</span> <span class="token operator">===</span> <span class="token number">55</span> <span class="token comment">// false，不相等，因为数据类型不同</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token number">55</span> <span class="token operator">===</span> <span class="token number">55</span> <span class="token comment">// true，相等，因为数据类型相同值也相同</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>null 和 undefined 比较，相等操作符（==）为 true，全等为 false</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token comment">// true</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>相等运算符隐藏的类型转换，会带来一些违反直觉的结果</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;0&quot;</span> <span class="token comment">// false</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token comment">// true</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&quot;0&quot;</span> <span class="token comment">// true</span>

<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&quot;false&quot;</span> <span class="token comment">// false</span>
<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&quot;0&quot;</span> <span class="token comment">// true</span>

<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token comment">// false</span>
<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token comment">// false</span>
<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token comment">// true</span>

<span class="token string">&quot; \\t\\r\\n&quot;</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但在比较 null 的情况的时候，我们一般使用相等操作符==</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>x <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token comment">//执行</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等同于下面写法</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>x <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> obj<span class="token punctuation">.</span>x <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用相等操作符（==）的写法明显更加简洁了</p><p>所以，除了在比较对象属性为null或者undefined的情况下，我们可以使用相等操作符（==），其他情况建议一律使用全等操作符（===）</p>`,37);function v(m,b){const a=l("router-link");return o(),c("div",null,[d,s("nav",u,[s("ul",null,[s("li",null,[n(a,{to:"#等于操作符"},{default:e(()=>[t("等于操作符")]),_:1})]),s("li",null,[n(a,{to:"#全等操作符"},{default:e(()=>[t("全等操作符")]),_:1})]),s("li",null,[n(a,{to:"#区别"},{default:e(()=>[t("区别")]),_:1})]),s("li",null,[n(a,{to:"#小结"},{default:e(()=>[t("小结")]),_:1})])])]),k])}const j=p(i,[["render",v],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/interview/js//","title":"== 和 ===区别，分别在什么情况使用","lang":"zh-CN","frontmatter":{"title":"== 和 ===区别，分别在什么情况使用","sidebarDepth":0,"date":"2024-06-03T00:00:00.000Z"},"headers":[{"level":2,"title":"等于操作符","slug":"等于操作符","link":"#等于操作符","children":[]},{"level":2,"title":"全等操作符","slug":"全等操作符","link":"#全等操作符","children":[]},{"level":2,"title":"区别","slug":"区别","link":"#区别","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"updatedTime":1717481375000,"contributors":[{"name":"chenxt","email":"chenxt@power-www.com","commits":1}]},"filePathRelative":"interview/js/==&===/index.md"}');export{j as comp,f as data};