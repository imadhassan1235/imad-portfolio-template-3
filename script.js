const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,sl=ms=>new Promise(r=>setTimeout(r,ms)),G='ABCDEFGHJKLMNPRSTUVWXYZ#%&@';
async function type(el,t,sp=48){el.classList.add('cur');if(RM){el.textContent=t;el.classList.remove('cur');return}
for(let i=1;i<=t.length;i++){el.textContent=t.slice(0,i-1)+(t[i-1]===' '?' ':G[Math.random()*G.length|0]);await sl(sp*.6);el.textContent=t.slice(0,i);await sl(sp*.4)}el.classList.remove('cur')}
function count(b){const n=+b.dataset.n;if(RM){b.textContent=n;return}const t0=performance.now();(function f(t){const p=Math.min((t-t0)/1100,1);b.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)}
(async()=>{const $=s=>document.getElementById(s);await sl(RM?0:1500);
await type($('hello'),'Hello I’m',60);await sl(150);await type($('n1'),'IMAD',70);await type($('n2'),'HASSAN',70);
await type($('role'),'Full-Stack Developer | AI & Data Science',26);
for(const li of document.querySelectorAll('#bul li')){li.classList.add('in');await type(li,li.dataset.t.replace('&amp;','&'),18)}
$('cta').classList.add('in');$('tag').classList.add('in');
for(const s of document.querySelectorAll('.stat')){s.classList.add('in');count(s.firstChild);await sl(RM?0:260)}})();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{rootMargin:'0px 0px -12% 0px'});
document.querySelectorAll('.sc,.rv').forEach(e=>io.observe(e));
document.querySelectorAll('.chips').forEach(c=>[...c.children].forEach((s,i)=>s.style.setProperty('--j',i)));
const links=[...document.querySelectorAll('nav a')],secs=links.map(a=>document.querySelector(a.hash));
const bar=document.getElementById('bar');
function sc(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(y/h)+')';let k=0;secs.forEach((s,i)=>{if(s.offsetTop-innerHeight*.4<=y)k=i});links.forEach((a,i)=>a.classList.toggle('act',i===k))}
addEventListener('scroll',sc,{passive:true});sc();
document.getElementById('form-preview').addEventListener('click',()=>{document.getElementById('form-status').textContent='This is a preview only. Your message was not sent.'});