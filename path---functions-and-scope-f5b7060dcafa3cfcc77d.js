webpackJsonp([0xe8964793b89a],{329:function(n,s){n.exports={data:{markdownRemark:{html:'<p>A function is a bit of re-usable code. Just how we like to re-use CSS classes, we love to re-use code. Let\'s start with an example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">addTwo</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> number <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> finalAnswer <span class="token operator">=</span> <span class="token function">addTwo</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>finalAnswer<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This isn\'t super useful but hopefully it shows you the mechanics of how a function works. We created a function called <code class="language-text">addTwo</code>. This function takes in one parameter, <code class="language-text">number</code> and it returns that number with 2 added to it. We can now use that <code class="language-text">addTwo</code> function as much as we want! Let\'s make a something a bit more useful.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> honorific<span class="token punctuation">,</span> greeting<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>greeting<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>honorific<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">! I’m extremely pleased you could join us, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">! I hope you enjoy your stay, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>honorific<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">"Brian"</span><span class="token punctuation">,</span> <span class="token string">"Holt"</span><span class="token punctuation">,</span> <span class="token string">"Lord"</span><span class="token punctuation">,</span> <span class="token string">"Salutations"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">"Jack"</span><span class="token punctuation">,</span> <span class="token string">"Sparrow"</span><span class="token punctuation">,</span> <span class="token string">"Captain"</span><span class="token punctuation">,</span> <span class="token string">"A-hoy"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Now we rather than have to repeate ourselves over-and-over again with that long string, we can just call greet with the appropriate parameters. Here we use four parameters. The order is important that we send in the parameters because this will be the order function receives these parameters. You can have as many or as few parameters as you like.</p>\n<p>The way <strong>call</strong> a function is you add parens to the end of it, like this: <code class="language-text">someFunctionName()</code>. If you see parens after a variable name, you instantly know that that\'s a function. Inside of the parens go the parameters. These variables will be passed to the function that is being called in the order that you put them there. Example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> myHomeCity <span class="token operator">=</span> <span class="token string">"Salt Lake City"</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> myHomeState <span class="token operator">=</span> <span class="token string">"Utah"</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> myHomeCountry <span class="token operator">=</span> <span class="token string">"USA"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">logOutYourHome</span><span class="token punctuation">(</span>city<span class="token punctuation">,</span> state<span class="token punctuation">,</span> country<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`You are from </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>city<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>state<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>country<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">logOutYourHome</span><span class="token punctuation">(</span>myHomeCity<span class="token punctuation">,</span> myHomeState<span class="token punctuation">,</span> myHomeCountry<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="scope"><a href="#scope" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Scope</h2>\n<p>We\'ll talk about scope multiple times but we\'ll start off here with it. Every time you call a function, it has its own scope. Other things can\'t peek into it; it just has its own little workspace for it work with. Once its done, any variable that you haven\'t explicitly held on to or returned at the end is discarded. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">addFive</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> someVariable <span class="token operator">=</span> <span class="token string">"you can\'t see me outside this function"</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> number <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">addFive</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>someVariable<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This is not going to work. <code class="language-text">someVariable</code> is inside of the <code class="language-text">addFive</code> scope and once <code class="language-text">addFive</code> completes, it throws <code class="language-text">someVariable</code> away since it\'s now out-of-scope.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> friendsAtYourParty <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  friendsAtYourParty<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Even this doesn\'t work since <code class="language-text">i</code> is only in scope for the loop and then after that it\'s thrown away. This can be a difficult one to deal with as someone new to coding because you\'ll go to log something or use a variable and it\'s out of scope so it\'s not there. Just know if that happens, this is probably the problem.</p>\n<p>Scope is hard. And scope is particularly strange in JavaScript (it varies by programming language.) If it feels hard it\'s because it is. A general, imperfect way for you to think about it right now is that a variable is "alive" (in scope) in between whatever the closest <code class="language-text">{</code> is until that <code class="language-text">{</code> closes its corresponding <code class="language-text">}</code>. A few examples below, see if you can get it right. Keep in mind that the variable will stay in scope as long as any scope it exists in still exists. If I declare a variable in an outter scope and modify a variable in an inner scope, that variable will survive as long as the outter scope does. <strong>It matters where the variable is declared.</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token string">"A"</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> <span class="token constant">F</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token string">"C"</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> <span class="token constant">H</span> <span class="token operator">=</span> <span class="token string">"H"</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token constant">D</span> <span class="token operator">=</span> <span class="token string">"D"</span><span class="token punctuation">;</span>\n    <span class="token constant">H</span> <span class="token operator">=</span> <span class="token string">"something else"</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">D</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">H</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token constant">F</span> <span class="token operator">=</span> <span class="token string">"F"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> <span class="token constant">E</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token constant">E</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token constant">E</span><span class="token operator">++</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token constant">G</span> <span class="token operator">=</span> <span class="token string">"G"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">E</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">G</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">C</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">F</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This is pretty convulated example but see what you think. Once your ready, the next block will be the answers.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token string">"A"</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> <span class="token constant">F</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// works, B parameter is still in scope</span>\n  <span class="token keyword">const</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token string">"C"</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> <span class="token constant">H</span> <span class="token operator">=</span> <span class="token string">"H"</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token constant">D</span> <span class="token operator">=</span> <span class="token string">"D"</span><span class="token punctuation">;</span>\n    <span class="token constant">H</span> <span class="token operator">=</span> <span class="token string">"something else"</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">D</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// does not work, D was declared in that if statement block</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">H</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// works, H was declared outside the if statement</span>\n  <span class="token constant">F</span> <span class="token operator">=</span> <span class="token string">"F"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> <span class="token constant">E</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token constant">E</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token constant">E</span><span class="token operator">++</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// works, the outter block (called the global scope) is still in scope</span>\n  <span class="token keyword">const</span> <span class="token constant">G</span> <span class="token operator">=</span> <span class="token string">"G"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">E</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// works, E was declared outside the whie loop</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">G</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// does not work, declared inside the while loop and it\'s over</span>\n\n<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// does not work, the B parameter expires after the function call</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">C</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// does not work, C was declared inside the function and the function is over</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">F</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// works, F was declared in the global scope</span></code></pre>\n      </div>\n<h2 id="builtins"><a href="#builtins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Builtins</h2>\n<p>Lots of functions already exist for you! Smart people have created this commonly-used functions for things we often need. For example, say you have a string and you want to make everything lowercase, you can do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> sentence <span class="token operator">=</span> <span class="token string">"ThIs HaS wEiRd CaSiNg On It"</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sentence<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Always be looking for the parens. And the best place to look all this stuff up is from our friends at Mozilla (makers of Firefox): <a href="https://developer.mozilla.org/en-US/">the MDN</a>. MDN used to stand for "Mozilla Developer Network" I think but now it\'s just synonmous with the documentation for the web. I literally look at this website several times a day. As I said before, you are not expected to remember everything. Looking things up on the MDN is <strong>not</strong> cheating.</p>\n<p>You can call <code class="language-text">Math.round(5.1)</code> and it\'ll return that number rounded (in this, <code class="language-text">5</code>). You can use <code class="language-text">string.substr(indexToStart, howManyCharactersToInclude)</code> to return part of a string. For example <code class="language-text">const name = &quot;Brian Holt&quot;; console.log(name.substr(6, 3))</code> logs out <code class="language-text">&quot;Hol&quot;</code> (remember numbering starts at 0). We\'ll introduce them as we go but know there are a <em>lot</em> of them. You\'ll learn by doing.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">5.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">"Brian Holt"</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>',frontmatter:{path:"/functions-and-scope",title:"Functions and Scope",order:12}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:0,path:"/intro",title:"Introduction to the Course"}}},{node:{frontmatter:{order:1,path:"/overview",title:"Overview of What You'll Be Learning In This Course"}}},{node:{frontmatter:{order:2,path:"/tools",title:"Tools"}}},{node:{frontmatter:{order:3,path:"/basic-html",title:"Basic HTML"}}},{node:{frontmatter:{order:4,path:"/html-next-steps",title:"HTML Next Steps"}}},{node:{frontmatter:{order:5,path:"/meta-html",title:"Meta HTML"}}},{node:{frontmatter:{order:6,path:"/basic-css",title:"Basic CSS"}}},{node:{frontmatter:{order:7,path:"/selectors",title:"CSS Selectors and the Cascade"}}},{node:{frontmatter:{order:8,path:"/layout-css",title:"Layout CSS"}}},{node:{frontmatter:{order:9,path:"/css-patterns",title:"Effective Patterns for Writing CSS"}}},{node:{frontmatter:{order:10,path:"/project-html-css",title:"Project: HTML & CSS"}}},{node:{frontmatter:{order:11,path:"/programming-fundamentals",title:"Programming Fundamentals"}}},{node:{frontmatter:{order:12,path:"/functions-and-scope",title:"Functions and Scope"}}},{node:{frontmatter:{order:13,path:"/objects-and-arrays",title:"Objects and Arrays"}}},{node:{frontmatter:{order:14,path:"/dom",title:"The DOM"}}},{node:{frontmatter:{order:15,path:"/js-project",title:"JavaScript, HTML, and CSS Project"}}},{node:{frontmatter:{order:16,path:"/ajax",title:"AJAX"}}},{node:{frontmatter:{order:17,path:"/libraries",title:"Integrating with Other People's Libraries"}}},{node:{frontmatter:{order:18,path:"/git-and-bash",title:"Git and Bash"}}},{node:{frontmatter:{order:19,path:"/node",title:"Node.js"}}},{node:{frontmatter:{order:20,path:"/deploying",title:"Deploying Your App"}}},{node:{frontmatter:{order:21,path:"/final-thoughts",title:"Final Thoughts"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---functions-and-scope-f5b7060dcafa3cfcc77d.js.map