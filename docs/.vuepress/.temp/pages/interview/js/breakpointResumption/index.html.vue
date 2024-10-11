<template><div><h1 id="大文件上传如何做断点续传" tabindex="-1"><a class="header-anchor" href="#大文件上传如何做断点续传"><span>大文件上传如何做断点续传？</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#是什么">是什么</router-link><ul><li><router-link to="#分片上传">分片上传</router-link></li><li><router-link to="#断点续传">断点续传</router-link></li></ul></li><li><router-link to="#实现思路">实现思路</router-link></li><li><router-link to="#使用场景">使用场景</router-link></li><li><router-link to="#小结">小结</router-link></li><li><router-link to="#参考文献">参考文献</router-link></li></ul></nav>
<h2 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么"><span>是什么</span></a></h2>
<p>不管怎样简单的需求，在量级达到一定层次时，都会变得异常复杂</p>
<p>文件上传简单，文件变大就复杂</p>
<p>上传大文件时，以下几个变量会影响我们的用户体验</p>
<ul>
<li>服务器处理数据的能力</li>
<li>请求超时</li>
<li>网络波动</li>
</ul>
<p>上传时间会变长，高频次文件上传失败，失败后又需要重新上传等等</p>
<p>为了解决上述问题，我们需要对大文件上传单独处理</p>
<p>这里涉及到分片上传及断点续传两个概念</p>
<h3 id="分片上传" tabindex="-1"><a class="header-anchor" href="#分片上传"><span>分片上传</span></a></h3>
<p>分片上传，就是将所要上传的文件，按照一定的大小，将整个文件分隔成多个数据块（Part）来进行分片上传</p>
<p>如下图</p>
<p><img src="/images/interview/breakpointResumption1.png" alt="图片"></p>
<p>上传完之后再由服务端对所有上传的文件进行汇总整合成原始的文件</p>
<p>大致流程如下：</p>
<p>将需要上传的文件按照一定的分割规则，分割成相同大小的数据块；
初始化一个分片上传任务，返回本次分片上传唯一标识；
按照一定的策略（串行或并行）发送各个分片数据块；
发送完成后，服务端根据判断数据上传是否完整，如果完整，则进行数据块合成得到原始文件</p>
<h3 id="断点续传" tabindex="-1"><a class="header-anchor" href="#断点续传"><span>断点续传</span></a></h3>
<p>断点续传指的是在下载或上传时，将下载或上传任务人为的划分为几个部分</p>
<p>每一个部分采用一个线程进行上传或下载，如果碰到网络故障，可以从已经上传或下载的部分开始继续上传下载未完成的部分，而没有必要从头开始上传下载。用户可以节省时间，提高速度</p>
<p>一般实现方式有两种：</p>
<ul>
<li>服务器端返回，告知从哪开始</li>
<li>浏览器端自行处理</li>
</ul>
<p>上传过程中将文件在服务器写为临时文件，等全部写完了（文件上传完），将此临时文件重命名为正式文件即可</p>
<p>如果中途上传中断过，下次上传的时候根据当前临时文件大小，作为在客户端读取文件的偏移量，从此位置继续读取文件数据块，上传到服务器从此偏移量继续写入文件即可</p>
<h2 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路"><span>实现思路</span></a></h2>
<p>整体思路比较简单，拿到文件，保存文件唯一性标识，切割文件，分段上传，每次上传一段，根据唯一性标识判断文件上传进度，直到文件的全部片段上传完毕</p>
<p><img src="/images/interview/breakpointResumption2.png" alt="图片"></p>
<p>下面的内容都是伪代码</p>
<p>读取文件内容：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">)</span>
input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"change"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> file <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用 md5 实现文件的唯一性</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> md5code <span class="token operator">=</span> <span class="token function">md5</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后开始对文件进行分割</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
reader<span class="token punctuation">.</span><span class="token function">readAsArrayBuffer</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
reader<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"load"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//每10M切割一段,这里只做一个切割演示，实际切割需要循环切割，</span>
  <span class="token keyword">var</span> slice <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>h5 上传一个（一片）</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> formdata <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
formdata<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"0"</span><span class="token punctuation">,</span> slice<span class="token punctuation">)</span>
<span class="token comment">//这里是有一个坑的，部分设备无法获取文件名称，和文件类型，这个在最后给出解决方案</span>
formdata<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"filename"</span><span class="token punctuation">,</span> file<span class="token punctuation">.</span>filename<span class="token punctuation">)</span>
<span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"load"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//xhr.responseText</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>formdata<span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"progress"</span><span class="token punctuation">,</span> updateProgress<span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"progress"</span><span class="token punctuation">,</span> updateProgress<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">updateProgress</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>lengthComputable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//进度条</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里给出常见的图片和视频的文件类型判断</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkFileType</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> file<span class="token punctuation">,</span> back</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * type png jpg mp4 ...
   * file input.change=> this.files[0]
   * back callback(boolean)
   */</span>
  <span class="token keyword">var</span> args <span class="token operator">=</span> arguments
  <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">back</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> type <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// type = '(png|jpg)' , 'png'</span>
  <span class="token keyword">var</span> file <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token keyword">var</span> back <span class="token operator">=</span> <span class="token keyword">typeof</span> args<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">"function"</span> <span class="token operator">?</span> args<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果系统无法获取文件类型，则读取二进制流，对二进制进行解析文件类型</span>
    <span class="token keyword">var</span> imgType <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token string">"ff d8 ff"</span><span class="token punctuation">,</span> <span class="token comment">//jpg</span>
      <span class="token string">"89 50 4e"</span><span class="token punctuation">,</span> <span class="token comment">//png</span>

      <span class="token string">"0 0 0 14 66 74 79 70 69 73 6F 6D"</span><span class="token punctuation">,</span> <span class="token comment">//mp4</span>
      <span class="token string">"0 0 0 18 66 74 79 70 33 67 70 35"</span><span class="token punctuation">,</span> <span class="token comment">//mp4</span>
      <span class="token string">"0 0 0 0 66 74 79 70 33 67 70 35"</span><span class="token punctuation">,</span> <span class="token comment">//mp4</span>
      <span class="token string">"0 0 0 0 66 74 79 70 4D 53 4E 56"</span><span class="token punctuation">,</span> <span class="token comment">//mp4</span>
      <span class="token string">"0 0 0 0 66 74 79 70 69 73 6F 6D"</span><span class="token punctuation">,</span> <span class="token comment">//mp4</span>

      <span class="token string">"0 0 0 18 66 74 79 70 6D 70 34 32"</span><span class="token punctuation">,</span> <span class="token comment">//m4v</span>
      <span class="token string">"0 0 0 0 66 74 79 70 6D 70 34 32"</span><span class="token punctuation">,</span> <span class="token comment">//m4v</span>

      <span class="token string">"0 0 0 14 66 74 79 70 71 74 20 20"</span><span class="token punctuation">,</span> <span class="token comment">//mov</span>
      <span class="token string">"0 0 0 0 66 74 79 70 71 74 20 20"</span><span class="token punctuation">,</span> <span class="token comment">//mov</span>
      <span class="token string">"0 0 0 0 6D 6F 6F 76"</span><span class="token punctuation">,</span> <span class="token comment">//mov</span>

      <span class="token string">"4F 67 67 53 0 02"</span><span class="token punctuation">,</span> <span class="token comment">//ogg</span>
      <span class="token string">"1A 45 DF A3"</span><span class="token punctuation">,</span> <span class="token comment">//ogg</span>

      <span class="token string">"52 49 46 46 x x x x 41 56 49 20"</span><span class="token punctuation">,</span> <span class="token comment">//avi (RIFF fileSize fileType LIST)(52 49 46 46,DC 6C 57 09,41 56 49 20,4C 49 53 54)</span>
    <span class="token punctuation">]</span>
    <span class="token keyword">var</span> typeName <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token string">"jpg"</span><span class="token punctuation">,</span>
      <span class="token string">"png"</span><span class="token punctuation">,</span>
      <span class="token string">"mp4"</span><span class="token punctuation">,</span>
      <span class="token string">"mp4"</span><span class="token punctuation">,</span>
      <span class="token string">"mp4"</span><span class="token punctuation">,</span>
      <span class="token string">"mp4"</span><span class="token punctuation">,</span>
      <span class="token string">"mp4"</span><span class="token punctuation">,</span>
      <span class="token string">"m4v"</span><span class="token punctuation">,</span>
      <span class="token string">"m4v"</span><span class="token punctuation">,</span>
      <span class="token string">"mov"</span><span class="token punctuation">,</span>
      <span class="token string">"mov"</span><span class="token punctuation">,</span>
      <span class="token string">"mov"</span><span class="token punctuation">,</span>
      <span class="token string">"ogg"</span><span class="token punctuation">,</span>
      <span class="token string">"ogg"</span><span class="token punctuation">,</span>
      <span class="token string">"avi"</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
    <span class="token keyword">var</span> sliceSize <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">png|jpg|jpeg</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">3</span> <span class="token operator">:</span> <span class="token number">12</span>
    <span class="token keyword">var</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    reader<span class="token punctuation">.</span><span class="token function">readAsArrayBuffer</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    reader<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"load"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> slice <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> sliceSize<span class="token punctuation">)</span>
      reader <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>slice <span class="token operator">&amp;&amp;</span> slice<span class="token punctuation">.</span>byteLength <span class="token operator">==</span> sliceSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span>
        <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        view<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        view <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token keyword">var</span> idx <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>imgType<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>idx <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">back</span><span class="token punctuation">(</span>typeName<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">></span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token string">"x"</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> v
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token keyword">var</span> idx <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>imgType<span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>idx <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">back</span><span class="token punctuation">(</span>typeName<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">back</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">back</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> type <span class="token operator">=</span> file<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(\w+)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token function">back</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用方法如下</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token function">checkFileType</span><span class="token punctuation">(</span><span class="token string">"(mov|mp4|avi)"</span><span class="token punctuation">,</span> file<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fileType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// fileType = mp4,</span>
  <span class="token comment">// 如果file的类型不在枚举之列，则返回false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面上传文件的一步，可以改成：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>formdata<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'filename'</span><span class="token punctuation">,</span> md5code<span class="token operator">+</span><span class="token string">'.'</span><span class="token operator">+</span>fileType<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有了切割上传后，也就有了文件唯一标识信息，断点续传变成了后台的一个小小的逻辑判断</p>
<p>后端主要做的内容为：根据前端传给后台的md5值，到服务器磁盘查找是否有之前未完成的文件合并信息（也就是未完成的半成品文件切片），取到之后根据上传切片的数量，返回数据告诉前端开始从第几节上传</p>
<p>如果想要暂停切片的上传，可以使用XMLHttpRequest的 abort方法</p>
<h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2>
<ul>
<li>大文件加速上传：当文件大小超过预期大小时，使用分片上传可实现并行上传多个 Part， 以加快上传速度</li>
<li>网络环境较差：建议使用分片上传。当出现上传失败的时候，仅需重传失败的Part</li>
<li>流式上传：可以在需要上传的文件大小还不确定的情况下开始上传。这种场景在视频监控等行业应用中比较常见</li>
</ul>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2>
<p>当前的伪代码，只是提供一个简单的思路，想要把事情做到极致，我们还需要考虑到更多场景，比如</p>
<ul>
<li>切片上传失败怎么办</li>
<li>上传过程中刷新页面怎么办</li>
<li>如何进行并行上传</li>
<li>切片什么时候按数量切，什么时候按大小切</li>
<li>如何结合 Web Worker 处理大文件上传</li>
<li>如何实现秒传</li>
</ul>
<p>人生又何尝不是如此，极致的人生体验有无限可能，越是后面才发现越是精彩 ~_~</p>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li><a href="https://segmentfault.com/a/1190000009448892" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000009448892<ExternalLinkIcon/></a></li>
<li><a href="https://baike.baidu.com/" target="_blank" rel="noopener noreferrer">https://baike.baidu.com/<ExternalLinkIcon/></a></li>
</ul>
</div></template>


