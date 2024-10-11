import{_ as s,c as a,o as i,V as e}from"./chunks/framework.FbKWQZfA.js";const A=JSON.parse('{"title":"PartialRecursiveAnimatable<T>","description":"","frontmatter":{},"headers":[],"relativePath":"api/AnimatableTypes/type-aliases/PartialRecursiveAnimatable.md","filePath":"api/AnimatableTypes/type-aliases/PartialRecursiveAnimatable.md"}'),t={name:"api/AnimatableTypes/type-aliases/PartialRecursiveAnimatable.md"},n=e(`<p><a href="./../../">aninest root</a> / <a href="./../">AnimatableTypes</a> / PartialRecursiveAnimatable</p><h1 id="partialrecursiveanimatable-t" tabindex="-1">PartialRecursiveAnimatable&lt;T&gt; <a class="header-anchor" href="#partialrecursiveanimatable-t" aria-label="Permalink to &quot;PartialRecursiveAnimatable\\&lt;T\\&gt;&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes classy-light classy-dark vp-code"><code><span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">type</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> PartialRecursiveAnimatable</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&lt;</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">T</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&gt;: PartialRecursive&lt;</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">number</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">, </span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">T</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&gt;;</span></span></code></pre></div><p>A subtree of the Animatable type.</p><h2 id="type-parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h2><p>• <strong>T</strong></p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes classy-light classy-dark vp-code"><code><span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">const</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;"> startingState</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">:</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> RecursiveAnimatable</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&lt;{</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">a</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">:</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> number</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">, </span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">b</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">:</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> number</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">}&gt; </span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">=</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;"> {a: {x: </span><span style="--shiki-light:#413900;--shiki-dark:#CE9409;">0</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">, y: </span><span style="--shiki-light:#413900;--shiki-dark:#CE9409;">0</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">}}</span></span>
<span class="line"><span style="--shiki-light:#6E9D87;--shiki-dark:#6E9D87;">// the following are all valid partial states of the type of the startingState:</span></span>
<span class="line"><span style="--shiki-light:#6E9D87;--shiki-dark:#6E9D87;">// example 3</span></span>
<span class="line"><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">{</span></span>
<span class="line"><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> a</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">: {</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">x</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">: </span><span style="--shiki-light:#413900;--shiki-dark:#CE9409;">1</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">, </span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">y</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">: </span><span style="--shiki-light:#413900;--shiki-dark:#CE9409;">1</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">}</span></span>
<span class="line"><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">}</span></span>
<span class="line"><span style="--shiki-light:#6E9D87;--shiki-dark:#6E9D87;">// example 2</span></span>
<span class="line"><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">{</span></span>
<span class="line"><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> a</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">: {</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">x</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">: </span><span style="--shiki-light:#413900;--shiki-dark:#CE9409;">1</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">}</span></span>
<span class="line"><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">}</span></span>
<span class="line"><span style="--shiki-light:#6E9D87;--shiki-dark:#6E9D87;">// example 1</span></span>
<span class="line"><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">{}</span></span></code></pre></div><h2 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h2><p><a href="https://github.com/zphrs/aninest/blob/efdac3830228dc951d7e8e69ab0c7db89aa8723f/core/src/Animate/AnimatableTypes.ts#L85" target="_blank" rel="noreferrer">Animate/AnimatableTypes.ts:85</a></p>`,10),l=[n];function h(p,k,r,E,d,c){return i(),a("div",null,l)}const g=s(t,[["render",h]]);export{A as __pageData,g as default};
