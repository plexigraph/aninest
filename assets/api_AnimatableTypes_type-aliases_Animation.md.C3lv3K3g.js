import{_ as i,c as s,o as a,V as n}from"./chunks/framework.FbKWQZfA.js";const g=JSON.parse('{"title":"Animation<Animating>","description":"","frontmatter":{},"headers":[],"relativePath":"api/AnimatableTypes/type-aliases/Animation.md","filePath":"api/AnimatableTypes/type-aliases/Animation.md"}'),t={name:"api/AnimatableTypes/type-aliases/Animation.md"},e=n(`<p><a href="./../../">aninest root</a> / <a href="./../">AnimatableTypes</a> / Animation</p><h1 id="animation-animating" tabindex="-1">Animation&lt;Animating&gt; <a class="header-anchor" href="#animation-animating" aria-label="Permalink to &quot;Animation\\&lt;Animating\\&gt;&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes classy-light classy-dark vp-code"><code><span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">type</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> Animation</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&lt;</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">Animating</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&gt;: AnimationWithoutChildren&lt;</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">Animating</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&gt; &amp; object;</span></span></code></pre></div><p>The animation object. This is a recursive type, meaning that it can contain other animations.</p><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><h3 id="children" tabindex="-1">children <a class="header-anchor" href="#children" aria-label="Permalink to &quot;children&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes classy-light classy-dark vp-code"><code><span class="line"><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">readonly</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> children</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">: { [</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">P</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;"> in</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;"> keyof</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;"> Animating</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">]: </span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">Animating</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">[</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">P</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">] </span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">extends</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;"> number</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;"> ?</span><span style="--shiki-light:#413900;--shiki-dark:#CE9409;"> undefined</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;"> :</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;"> Animation</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">&lt;</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">RecursiveAnimatable</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">&lt;</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">Animating</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">[</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">P</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">]</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">&gt;&gt;</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;"> };</span></span></code></pre></div><h2 id="type-parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h2><p>• <strong>Animating</strong> <em>extends</em> <a href="./UnknownRecursiveAnimatable.html"><code>UnknownRecursiveAnimatable</code></a></p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes classy-light classy-dark vp-code"><code><span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">const</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;"> anim</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">:</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> Animation</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&lt;{</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">a</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">:</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> Vec2</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">}&gt; </span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">=</span><span style="--shiki-light:#345348;--shiki-dark:#D9FFE8;"> createAnimation</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">({a: {x: </span><span style="--shiki-light:#413900;--shiki-dark:#CE9409;">0</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">, y: </span><span style="--shiki-light:#413900;--shiki-dark:#CE9409;">0</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">}}) </span></span>
<span class="line"><span style="--shiki-light:#6E9D87;--shiki-dark:#6E9D87;">// the anim object will look like this:</span></span>
<span class="line"><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">{</span></span>
<span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;"> &lt;</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">private</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;"> fields</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> children</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">: {</span></span>
<span class="line"><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> a</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">: {</span></span>
<span class="line"><span style="--shiki-light:#6E9D87;--shiki-dark:#6E9D87;">   // holds the state of a, which is currently {x: 0, y: 0}</span></span>
<span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">   &lt;</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">private</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;"> fields</span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;"> }</span></span>
<span class="line"><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">}</span></span></code></pre></div><h2 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h2><p><a href="https://github.com/zphrs/aninest/blob/efdac3830228dc951d7e8e69ab0c7db89aa8723f/core/src/Animate/AnimatableTypes.ts#L121" target="_blank" rel="noreferrer">Animate/AnimatableTypes.ts:121</a></p>`,13),h=[e];function l(p,k,r,d,o,F){return a(),s("div",null,h)}const A=i(t,[["render",l]]);export{g as __pageData,A as default};
