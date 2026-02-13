document.querySelectorAll('.ps-switch').forEach((el)=>{el.addEventListener('click',()=>{el.classList.toggle('is-on');el.setAttribute('aria-checked',String(el.classList.contains('is-on')));});});
