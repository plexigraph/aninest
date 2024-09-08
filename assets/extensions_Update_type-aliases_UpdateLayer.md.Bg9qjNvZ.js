import{_ as e,c as a,o as t,V as s}from"./chunks/framework.FbKWQZfA.js";const g=JSON.parse('{"title":"UpdateLayer<Animating>","description":"","frontmatter":{},"headers":[],"relativePath":"extensions/Update/type-aliases/UpdateLayer.md","filePath":"extensions/Update/type-aliases/UpdateLayer.md"}'),i={name:"extensions/Update/type-aliases/UpdateLayer.md"},n=s('<p><a href="./../../">@aninest/extensions</a> / <a href="./../">Update</a> / UpdateLayer</p><h1 id="updatelayer-animating" tabindex="-1">UpdateLayer&lt;Animating&gt; <a class="header-anchor" href="#updatelayer-animating" aria-label="Permalink to &quot;UpdateLayer\\&lt;Animating\\&gt;&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes classy-light classy-dark vp-code"><code><span class="line"><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">type</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;"> UpdateLayer</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&lt;</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">Animating</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&gt;: Layer&lt;</span><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">Animating</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">&gt; &amp; object;</span></span></code></pre></div><p>An update layer that can be mounted to an animation. Allows listening to:</p><ul><li><strong>start</strong> - when the animation starts to be updated,</li><li><strong>stop</strong> - when the animation finishes animating everything</li><li><strong>update</strong> - each update frame</li><li><strong>updateWithDeltaTime</strong> - each update frame with the time since the last update</li><li><strong>afterUpdate</strong> - after each update frame</li><li><strong>childStart</strong> - when a child UpdateLayer starts to be updated</li><li><strong>childEnd</strong> - when a child UpdateLayer finishes animating everything, including its children</li></ul><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><h3 id="setparent" tabindex="-1">setParent() <a class="header-anchor" href="#setparent" aria-label="Permalink to &quot;setParent()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes classy-light classy-dark vp-code"><code><span class="line"><span style="--shiki-light:#645CEE;--shiki-dark:#A8A9F4;">setParent</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">: (</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;">parentLayer</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">) </span><span style="--shiki-light:#CE9409;--shiki-dark:#FFF4BA;">=&gt;</span><span style="--shiki-light:#2D27A4;--shiki-dark:#CFD3FF;"> unsubscribe</span><span style="--shiki-light:#313233;--shiki-dark:#E9EAE4;">;</span></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>parentLayer</strong>: <a href="./UpdateLayer.html"><code>UpdateLayer</code></a>&lt;<code>UnknownRecursiveAnimatable</code>&gt;</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>unsubscribe</code></p><h3 id="subscribe" tabindex="-1">subscribe() <a class="header-anchor" href="#subscribe" aria-label="Permalink to &quot;subscribe()&quot;">​</a></h3><h4 id="type-parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h4><p>• <strong>Event</strong> <em>extends</em> <code>UpdateLayerEvents</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>type</strong>: <code>Event</code></p><p>• <strong>sub</strong>: <code>Event</code> <em>extends</em> <code>&quot;updateWithDeltaTime&quot;</code> ? <code>Listener</code>&lt;<code>number</code>&gt; : <code>Event</code> <em>extends</em> <code>ChildEvents</code> ? <code>Listener</code>&lt;<code>InternalUpdateLayer</code>&lt;<code>RecursiveAnimatable</code>&lt;<code>unknown</code>&gt;&gt;&gt; : <code>Listener</code>&lt;<code>Animation</code>&lt;<code>Animating</code>&gt;&gt;</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>unsubscribe</code></p><h2 id="type-parameters-1" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h2><p>• <strong>Animating</strong> <em>extends</em> <code>UnknownRecursiveAnimatable</code></p><h2 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h2><p><a href="https://github.com/zphrs/aninest/blob/8022a4b034c124b0e4bb28675a7ce9bcdf9da3b9/extensions/src/update.ts#L53" target="_blank" rel="noreferrer">../../extensions/src/update.ts:53</a></p>',24),r=[n];function d(o,l,p,h,c,u){return t(),a("div",null,r)}const k=e(i,[["render",d]]);export{g as __pageData,k as default};
