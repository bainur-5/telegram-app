document.querySelectorAll('.ps-switch').forEach((sw)=>sw.addEventListener('click',()=>{sw.classList.toggle('is-on');sw.setAttribute('aria-checked',String(sw.classList.contains('is-on')));}));
