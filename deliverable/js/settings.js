document.querySelectorAll('.ps-switch').forEach(sw=>sw.addEventListener('click',()=>sw.classList.toggle('is-on')));
document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-lang]').forEach(x=>x.classList.remove('is-active'));btn.classList.add('is-active');}));
