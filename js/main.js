import '../scss/main.scss';
import { state, subscribe, setState } from './store.js';
import { getScreenFromHash, setScreenHash } from './router.js';
import { cutCornerButton, usersIcon } from './ui/components.js';
import { renderMining } from './pages/mining.js';
import { renderReferrals } from './pages/referrals.js';
import { renderMarket, bindMarket } from './pages/market.js';
import { renderFinances, bindFinances } from './pages/finances.js';
import { renderProfile, bindProfile } from './pages/profile.js';

const root=document.getElementById('root');
const bank='/src/assets/bank.svg',chart='/src/assets/chart-line.svg',bitcoin='/src/assets/bitcoin.svg',book='/src/assets/book-open.svg',user='/src/assets/user.svg',ton='/src/assets/token-branded_ton.svg';
const nav=[['finances','Finances',`<img src="${bank}" alt="" />`],['mining','Mining',`<img src="${chart}" alt="" />`],['market','Market',`<img src="${bitcoin}" alt="" />`],['referrals','Referrals',`<img src="${book}" alt="" />`],['profile','Profile',usersIcon('navigation__icon-users')]];

function screenHtml(){switch(state.activeScreen){case 'mining':return renderMining();case 'referrals':return renderReferrals();case 'finances':return renderFinances();case 'profile':return renderProfile();default:return renderMarket();}}

function render(){
 root.innerHTML=`<div class="app"><div class="dotsBlock dotsBlock--top"></div><div class="dotsBlock dotsBlock--bottom"></div><div class="topBar"><div class="topBar__left"><div class="topBar__score_block"><div class="topBar__score_icon"><img src="${ton}" alt="TON logo" /></div><div class="topBar__score"><span>2014</span></div></div><div class="topBar__score_block"><div class="topBar__score_icon"><img src="${ton}" alt="TON logo" /></div><div class="topBar__score"><span>2014</span></div></div><button class="topBar_add"><span>+</span></button></div><div class="topBar__right">${cutCornerButton({icon:`<img src="${user}" alt="" />`,ariaLabel:'User'})}</div></div>${screenHtml()}<nav class="navigation" aria-label="Main navigation">${nav.map(([screen,label,icon])=>cutCornerButton({icon,ariaLabel:label,fillColor:state.activeScreen===screen?'#7EBF3E':'#4f86ff',borderColor:state.activeScreen===screen?'#B6FD7D':'#6cc0ff',className:'nav-btn',})).join('')}</nav></div>`;
 root.querySelectorAll('.nav-btn').forEach((b,i)=>b.onclick=()=>{setState(s=>{s.activeScreen=nav[i][0];}); setScreenHash(nav[i][0]);});
 if(state.activeScreen==='market') bindMarket(root,render);
 if(state.activeScreen==='finances') bindFinances(root);
 if(state.activeScreen==='profile') bindProfile(root);
}
window.addEventListener('hashchange',()=>setState(s=>{s.activeScreen=getScreenFromHash();}));
setState(s=>{s.activeScreen=getScreenFromHash();});
subscribe(render); render();
