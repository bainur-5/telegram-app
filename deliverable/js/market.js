const overlay = document.querySelector('.create-order-modal__overlay');
document.querySelector('.js-open-create')?.addEventListener('click',()=> overlay?.removeAttribute('hidden'));
document.querySelector('.create-order-modal__close')?.addEventListener('click',()=> overlay?.setAttribute('hidden',''));
overlay?.addEventListener('click',(e)=>{if(e.target===overlay) overlay.setAttribute('hidden','');});

document.querySelector('.market-controls__dropdownBtn')?.addEventListener('click',()=>{
  document.querySelector('.market-controls__dropdownMenu')?.classList.toggle('is-open');
});
