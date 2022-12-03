import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.31543681.js";const e={},p=t(`<h2 id="一、刷题" tabindex="-1"><a class="header-anchor" href="#一、刷题" aria-hidden="true">#</a> 一、刷题</h2><h3 id="_1、处理输入" tabindex="-1"><a class="header-anchor" href="#_1、处理输入" aria-hidden="true">#</a> 1、处理输入</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> rl <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;readline&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createInterface</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">input</span><span class="token operator">:</span> process<span class="token punctuation">.</span>stdin <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

rl<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">line</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理的是单个字符串</span>
  <span class="token keyword">let</span> input <span class="token operator">=</span> line<span class="token punctuation">;</span>

  <span class="token comment">// 处理多组输入</span>
  arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

rl<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、排序" tabindex="-1"><a class="header-anchor" href="#_2、排序" aria-hidden="true">#</a> 2、排序</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、析构-把字符串变成字符串数组" tabindex="-1"><a class="header-anchor" href="#_3、析构-把字符串变成字符串数组" aria-hidden="true">#</a> 3、析构(把字符串变成字符串数组)</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>real_str<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、js-把字符串变成数字" tabindex="-1"><a class="header-anchor" href="#_4、js-把字符串变成数字" aria-hidden="true">#</a> 4、js 把字符串变成数字</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Number()

parseInt()

parseFloat()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、常见的数组操作" tabindex="-1"><a class="header-anchor" href="#_5、常见的数组操作" aria-hidden="true">#</a> 5、常见的数组操作</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 尾部加元素，原数组改变</span>
<span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 头部加元素，原数组改变</span>
<span class="token function">unshift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 尾部删除一个元素，原数组发生改变</span>
<span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 头部删除一个元素，原数组发生改变</span>
<span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 不传参数，返回原数组</span>
array<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 传一个参数，从该参数的索引开始截取(包含开始的这个索引)，直到数组结束，返回这个截取的数组，原来的数组不变；</span>
array<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 传两个参数，从该参数的索引开始截取(包含开始的这个索引，不包含结束的这个索引)，返回截取的数组，原来的数组不变</span>
array<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 截取数组</span>
<span class="token comment">// 不传参数，返回空数组，原数组不变</span>
array<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 传一个参数，从下标开始截取(包含开始的这个索引)，一直删除直至结束</span>
array<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 传两个参数，从该参数的索引开始截取(包含开始的索引和结束的索引)</span>
array<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 数组元素翻转</span>
array<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 数组合并成字符串,内部进行符号的填充</span>
array<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","刷题笔记.html.vue"]]);export{d as default};
