const tabs=document.querySelectorAll('[data-fin-tab]');
const panels={deposit:document.querySelector('[data-fin-panel="deposit"]'),withdraw:document.querySelector('[data-fin-panel="withdraw"]')};
tabs.forEach((btn)=>btn.addEventListener('click',()=>{tabs.forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');
const key=btn.getAttribute('data-fin-tab');Object.entries(panels).forEach(([k,p])=>p && (p.hidden=k!==key));}));
