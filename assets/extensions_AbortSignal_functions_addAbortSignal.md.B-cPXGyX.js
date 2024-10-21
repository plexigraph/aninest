import{_ as s,c as i,o as a,V as n}from"./chunks/framework.FbKWQZfA.js";const c=JSON.parse('{"title":"addAbortSignal()","description":"","frontmatter":{},"headers":[],"relativePath":"extensions/AbortSignal/functions/addAbortSignal.md","filePath":"extensions/AbortSignal/functions/addAbortSignal.md"}'),t={name:"extensions/AbortSignal/functions/addAbortSignal.md"},e=n(`<p><a href="./../../">@aninest/extensions</a> / <a href="./../">AbortSignal</a> / addAbortSignal</p><h1 id="addabortsignal" tabindex="-1">addAbortSignal() <a class="header-anchor" href="#addabortsignal" aria-label="Permalink to &quot;addAbortSignal()&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes classy-light classy-dark vp-code"><code><span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">function</span><span style="--shiki-light:#345348;--shiki-dark:#D9FFE8;"> addAbortSignal</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&lt;</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">F</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&gt;(</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">func</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">, </span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">signal</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">)</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">:</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;"> (</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">...</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">args</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">) </span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">=&gt;</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> unsubscribe</span></span></code></pre></div><p>Adds the option to add an AbortSignal to any function which returns a function to undo its effects.</p><h2 id="type-parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h2><p>• <strong>F</strong> <em>extends</em> (...<code>args</code>) =&gt; <code>unsubscribe</code></p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><p>• <strong>func</strong>: <code>F</code></p><p>The function to wrap</p><p>• <strong>signal</strong>: <code>AbortSignal</code></p><p>The AbortSignal to use to remove the effect of the function.</p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Function</code></p><p>A function with the same parameters as <code>func</code> but returns a function that will remove the effect of <code>func</code> and remove the listener from the AbortSignal.</p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• ...<strong>args</strong>: <code>Parameters</code>&lt;<code>F</code>&gt;</p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>unsubscribe</code></p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes classy-light classy-dark vp-code"><code><span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">const</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;"> anim</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;"> =</span><span style="--shiki-light:#345348;--shiki-dark:#D9FFE8;"> createAnimation</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">({ x: </span><span style="--shiki-light:#413900;--shiki-dark:#CE9409;">0</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">, y: </span><span style="--shiki-light:#413900;--shiki-dark:#CE9409;">0</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;"> }, </span><span style="--shiki-light:#345348;--shiki-dark:#D9FFE8;">getLinearInterp</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">(</span><span style="--shiki-light:#413900;--shiki-dark:#CE9409;">1</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">))</span></span>
<span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">const</span><span style="--shiki-light:#345348;--shiki-dark:#D9FFE8;"> someExtension</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;"> =</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;"> (</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">anim</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">:</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> Animation</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&lt;</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">UnknownRecursiveAnimatable</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&gt;) </span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">=&gt;</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;"> {</span></span>
<span class="line"><span style="--shiki-light:#6E9D87;--shiki-dark:#6E9D87;"> // initialize the extension</span></span>
<span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;"> return</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;"> () </span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">=&gt;</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;"> {</span></span>
<span class="line"><span style="--shiki-light:#6E9D87;--shiki-dark:#6E9D87;">   // cleanup</span></span>
<span class="line"><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;"> }</span></span>
<span class="line"><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">}</span></span>
<span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">const</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;"> controller</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;"> =</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;"> new</span><span style="--shiki-light:#345348;--shiki-dark:#D9FFE8;"> AbortController</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">()</span></span>
<span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">const</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;"> extension</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;"> =</span><span style="--shiki-light:#345348;--shiki-dark:#D9FFE8;"> addAbortSignal</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">(</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">someExtension</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">, </span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">controller</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">.</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">signal</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">)</span></span>
<span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">const</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;"> unsub</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;"> =</span><span style="--shiki-light:#345348;--shiki-dark:#D9FFE8;"> extension</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">(</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">anim</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">)</span></span>
<span class="line"><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">controller</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">.</span><span style="--shiki-light:#345348;--shiki-dark:#D9FFE8;">abort</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">() </span><span style="--shiki-light:#6E9D87;--shiki-dark:#6E9D87;">// will remove the extension \`someExtension\`</span></span>
<span class="line"><span style="--shiki-light:#345348;--shiki-dark:#D9FFE8;">unsub</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">() </span><span style="--shiki-light:#6E9D87;--shiki-dark:#6E9D87;">// unsub is now a no-op after the controller is aborted</span></span></code></pre></div><h2 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h2><p><a href="https://github.com/zphrs/aninest/blob/28867544fa41eaaa86feb7a0ef492917740748d5/extensions/src/abortSignal.ts#L30" target="_blank" rel="noreferrer">../../extensions/src/abortSignal.ts:30</a></p>`,22),h=[e];function l(r,p,k,d,o,E){return a(),i("div",null,h)}const F=s(t,[["render",l]]);export{c as __pageData,F as default};
