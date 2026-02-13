const tabs=[...document.querySelectorAll('[data-fin-tab]')];
const panels=[...document.querySelectorAll('[data-panel]')];
tabs.forEach(t=>t.addEventListener('click',()=>{tabs.forEach(x=>x.classList.remove('is-active'));t.classList.add('is-active');panels.forEach(p=>p.hidden=p.dataset.panel!==t.dataset.finTab);}));
document.querySelectorAll('.deposit-panel__chip').forEach(ch=>ch.addEventListener('click',()=>{const inp=document.querySelector('[data-deposit-amount]');if(inp)inp.value=ch.textContent.trim();}));
const a=document.querySelector('[data-withdraw-amount]');const addr=document.querySelector('[data-withdraw-address]');const submit=document.querySelector('[data-withdraw-submit]');
function validate(){const v=Number((a?.value||'').replace(',','.'));submit.disabled=!(v>=0.5 && (addr?.value||'').trim().length>8);}a?.addEventListener('input',validate);addr?.addEventListener('input',validate);
