(()=>{
const C=window.AURA||{},$=s=>document.querySelector(s),pad=n=>String(n).padStart(2,'0');

const POOLS={"fr":null,"en":["How do I talk to mum about it?","Why is my body changing?","Is it normal to feel stressed?","What is the cycle, exactly?","How do I choose the right products?","What if my stomach hurts?","Do my friends go through the same thing?","How do I handle my moods?"],"ar":["كيف أتحدث مع ماما عن ذلك؟","لماذا يتغيّر جسدي؟","هل من الطبيعي أن أشعر بالتوتر؟","ما هي الدورة الشهرية؟","كيف أختار المنتجات المناسبة؟","ماذا لو شعرت بألم في البطن؟","هل تمرّ صديقاتي بالشيء نفسه؟","كيف أتعامل مع تقلبات مزاجي؟"]},FR=["Comment en parler à maman ?","Pourquoi mon corps change ?","Est-ce normal d'être stressée ?","C'est quoi, le cycle ?","Comment bien choisir ses protections ?","Et si j'ai mal au ventre ?","Est-ce que mes copines vivent la même chose ?","Comment gérer mes humeurs ?"];
let pool=FR,n=0;const qs=[...document.querySelectorAll('.q')],box=$('#boxbtn'),stage=box.parentNode;
function fill(){qs.forEach((q,i)=>{q.classList.remove('on');setTimeout(()=>{q.textContent=pool[(n+i)%pool.length];q.classList.add('on')},350+i*260)});n=(n+3)%pool.length}
setTimeout(fill,700);
box.addEventListener('click',()=>{const o=stage.classList.toggle('open');$('#hint').style.opacity=0;box.setAttribute('aria-label',o?'Une nouvelle question':'Ouvrir la box Aura');if(o)fill()});
setInterval(()=>{if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&!stage.classList.contains('open'))fill()},7000);
document.addEventListener('langchange',e=>{pool=POOLS[e.detail]||FR;n=0;fill()});
})();
