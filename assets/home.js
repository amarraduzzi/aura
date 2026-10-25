(()=>{
const $=s=>document.querySelector(s);
const POOLS={"fr":null,"en":["How do I talk to mum about it?","Why is my body changing?","Is it normal to feel stressed?","What is the cycle, exactly?","How do I choose the right products?","What if my stomach hurts?","Do my friends go through the same thing?","How do I handle my moods?"],"ar":["كيف أتحدث مع ماما عن ذلك؟","لماذا يتغيّر جسدي؟","هل من الطبيعي أن أشعر بالتوتر؟","ما هي الدورة الشهرية؟","كيف أختار المنتجات المناسبة؟","ماذا لو شعرت بألم في البطن؟","هل تمرّ صديقاتي بالشيء نفسه؟","كيف أتعامل مع تقلبات مزاجي؟"]},FR=["Comment en parler à maman ?","Pourquoi mon corps change ?","Est-ce normal d'être stressée ?","C'est quoi, le cycle ?","Comment bien choisir ses protections ?","Et si j'ai mal au ventre ?","Est-ce que mes copines vivent la même chose ?","Comment gérer mes humeurs ?"];
const LBL={fr:['Ouvrir la box Aura','Une nouvelle question'],en:['Open the Aura box','A new question'],ar:['افتحي صندوق أورا','سؤال جديد']};
let lang='fr',pool=FR,n=3,k=0;
const qs=[...document.querySelectorAll('.q')],box=$('#boxbtn'),stage=$('#stage'),hint=$('#hint');
const next=()=>pool[n++%pool.length];
function setCard(q,txt){q.classList.remove('on');setTimeout(()=>{q.textContent=txt;q.classList.add('on')},350)}
function label(){box.setAttribute('aria-label',LBL[lang][stage.classList.contains('open')?1:0])}
// intro : les cartes arrivent une par une
qs.forEach((q,i)=>{q.textContent=pool[i];setTimeout(()=>q.classList.add('on'),700+i*800)});
// ensuite une seule carte change à la fois
setInterval(()=>{if(!document.hidden)setCard(qs[k++%qs.length],next())},6000);
box.addEventListener('click',()=>{
  const o=stage.classList.toggle('open');
  box.setAttribute('aria-expanded',o);label();hint.style.opacity=0;
  if(o)qs.forEach((q,i)=>setTimeout(()=>setCard(q,next()),i*250));
});
document.addEventListener('langchange',e=>{lang=e.detail;pool=POOLS[lang]||FR;n=3;label();qs.forEach((q,i)=>{q.textContent=pool[i]})});
})();
