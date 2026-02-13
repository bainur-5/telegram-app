const modal=document.getElementById('createModal');
document.getElementById('openCreate')?.addEventListener('click',()=>modal.hidden=false);
document.getElementById('closeCreate')?.addEventListener('click',()=>modal.hidden=true);
modal?.addEventListener('click',(e)=>{if(e.target===modal) modal.hidden=true;});
const sortBtn=document.getElementById('sortBtn'); const sortMenu=document.getElementById('sortMenu');
sortBtn?.addEventListener('click',()=>sortMenu.hidden=!sortMenu.hidden);
document.querySelectorAll('[data-sort]').forEach(btn=>btn.addEventListener('click',()=>{sortBtn.childNodes[0].textContent=btn.textContent+' ';sortMenu.hidden=true;document.querySelectorAll('[data-sort]').forEach(x=>x.classList.remove('is-active'));btn.classList.add('is-active');}));
document.getElementById('orderBtn')?.addEventListener('click',()=>document.querySelector('.market-controls__fromToIcon')?.classList.toggle('is-desc'));
