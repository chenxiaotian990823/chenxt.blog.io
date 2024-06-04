import{_ as i,r as p,o as u,c as r,a as n,b as a,w as t,e as l,d as s}from"./app-DPz2NTkK.js";const k={},d=l(`<h1 id="时间转换" tabindex="-1"><a class="header-anchor" href="#时间转换"><span>时间转换</span></a></h1><p>首先获取当前时间</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span>       <span class="token comment">//Fri Sep 03 2021 14:29:27 GMT+0800 (中国标准时间)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m=l(`<p>根据世界时，把 Date 对象转换为字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//Fri, 03 Sep 2021 06:31:56 GMT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据本地时间格式，把 Date 对象转换为字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">//2021/9/3下午2:33:37</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据本地时间格式，把 Date 对象的时间部分转换为字符串。toLocaleDateString() 根据本地时间格式，把 Date 对象的日期部分转换为字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">//下午2:33:55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取当天是属于当前月份的第几天(1-31)</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">//3---因为是9月3日测试的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取当天属于当前周的第几天</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">//5----，因为测试的时间是周五</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取当前月份</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>        <span class="token comment">//8---虽然是9月份，但是获取到是8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取当前年份</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment">//2021</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取当前小时</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>            <span class="token comment">//14--测试时间为14:46</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取当前分钟</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>          <span class="token comment">//46--测试时间为14:46</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取当前秒</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>            <span class="token comment">//14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取当前毫秒数</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getMilliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment">//842</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取从1970年1月1日至今的毫秒数</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                 <span class="token comment">//1630651751828</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token function"},"GMTToStr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"time"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" date "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("time"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" month "),n("span",{class:"token operator"},"="),s(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMonth"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"?"),s(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMonth"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"0"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMonth"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
    `),n("span",{class:"token keyword"},"let"),s(" day "),n("span",{class:"token operator"},"="),s(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"?"),s(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"0"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
    `),n("span",{class:"token keyword"},"let"),s(" hour "),n("span",{class:"token operator"},"="),s(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getHours"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"?"),s(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getHours"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"0"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getHours"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
    `),n("span",{class:"token keyword"},"let"),s(" minutes "),n("span",{class:"token operator"},"="),s(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMinutes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"?"),s(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMinutes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"0"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMinutes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
    `),n("span",{class:"token keyword"},"let"),s(" seconds "),n("span",{class:"token operator"},"="),s(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getSeconds"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"?"),s(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getSeconds"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"0"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getSeconds"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),s(`
    `),n("span",{class:"token keyword"},"let"),s(" Str "),n("span",{class:"token operator"},"="),s(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getFullYear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'-'"),s(),n("span",{class:"token operator"},"+"),s(`
        month `),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'-'"),s(),n("span",{class:"token operator"},"+"),s(`
        day `),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"' '"),s(),n("span",{class:"token operator"},"+"),s(`
        hour `),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"':'"),s(),n("span",{class:"token operator"},"+"),s(`
        minutes `),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"':'"),s(),n("span",{class:"token operator"},"+"),s(`
        seconds
    `),n("span",{class:"token keyword"},"return"),s(` Str
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" date "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"//Fri Sep 03 2021 15:03:20 GMT+0800 (中国标准时间)"),s(`
`),n("span",{class:"token function"},"GMTToStr"),n("span",{class:"token punctuation"},"("),s("date"),n("span",{class:"token punctuation"},")"),s("          "),n("span",{class:"token comment"},"//2021-09-03 15:03:20"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" date "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"//Fri Sep 03 2021 15:15:45 GMT+0800 (中国标准时间)"),s(`
`),n("span",{class:"token function"},"bjToGreenich"),n("span",{class:"token punctuation"},"("),s("date"),n("span",{class:"token punctuation"},")"),s("      "),n("span",{class:"token comment"},"//Fri Sep 03 2021 07:15:45 GMT+0800 (中国标准时间)"),s(`
`),n("span",{class:"token function"},"GMTToStr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"bjToGreenich"),n("span",{class:"token punctuation"},"("),s("date"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s("    "),n("span",{class:"token comment"},"//2021-09-03 07:15:45"),s(`

`),n("span",{class:"token function"},"bjToGreenich"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"time"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("time"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token operator"},"*"),n("span",{class:"token number"},"3600"),n("span",{class:"token operator"},"*"),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" date "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"//Fri Sep 03 2021 15:22:11 GMT+0800 (中国标准时间)"),s(`
`),n("span",{class:"token function"},"greenichToBj"),n("span",{class:"token punctuation"},"("),s("date"),n("span",{class:"token punctuation"},")"),s("      "),n("span",{class:"token comment"},"//Fri Sep 03 2021 23:22:11 GMT+0800 (中国标准时间)"),s(`
`),n("span",{class:"token function"},"GMTToStr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"greenichToBj"),n("span",{class:"token punctuation"},"("),s("date"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s("    "),n("span",{class:"token comment"},"//2021-09-03 23:22:11"),s(`

`),n("span",{class:"token function"},"greenichToBj"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"time"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("time"),n("span",{class:"token punctuation"},"."),s("getTime "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token operator"},"*"),n("span",{class:"token number"},"3600"),n("span",{class:"token operator"},"*"),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(h,_){const o=p("font"),e=p("code-group-item"),c=p("code-group");return u(),r("div",null,[d,n("p",null,[n("strong",null,[a(o,{color:"#FF8C00",size:"5"},{default:t(()=>[s("简单获取")]),_:1})])]),m,a(o,{color:"#FF8C00",size:"5"},{default:t(()=>[s("中国标准时间转为北京时间")]),_:1}),a(c,null,{default:t(()=>[a(e,{title:"封装方法"},{default:t(()=>[v]),_:1}),a(e,{title:"调用方式"},{default:t(()=>[g]),_:1})]),_:1}),a(o,{color:"#FF8C00",size:"5"},{default:t(()=>[s("格林尼治时间和北京时间的相互转化")]),_:1}),a(c,null,{default:t(()=>[a(e,{title:"北京时间转为格林尼治时间"},{default:t(()=>[b]),_:1}),a(e,{title:"格林尼治时间转为北京时间"},{default:t(()=>[j]),_:1})]),_:1})])}const x=i(k,[["render",f],["__file","index.html.vue"]]),T=JSON.parse('{"path":"/examples/timeConversion/","title":"时间转换","lang":"zh-CN","frontmatter":{"title":"时间转换"},"headers":[],"git":{"updatedTime":1715850582000,"contributors":[{"name":"chenxt","email":"chenxt@power-www.com","commits":1}]},"filePathRelative":"examples/timeConversion/index.md"}');export{x as comp,T as data};
