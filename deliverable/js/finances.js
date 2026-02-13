const tabs=[...document.querySelectorAll('[data-fin-tab]')];
const dep=document.getElementById('panel-deposit'); const wdr=document.getElementById('panel-withdraw');
tabs.forEach(t=>t.addEventListener('click',()=>{tabs.forEach(x=>x.classList.remove('is-active'));t.classList.add('is-active');const isDep=t.dataset.finTab==='deposit';dep.hidden=!isDep;wdr.hidden=isDep;}));
