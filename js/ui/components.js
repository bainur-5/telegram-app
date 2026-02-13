const ton = '/src/assets/toncoin_ton_logo.svg';

export const usersIcon = (cls='') => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${cls}"><path d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M21 21V19C20.9949 18.1172 20.6979 17.2608 20.1553 16.5644C19.6126 15.868 18.8548 15.3707 18 15.15M5 7C5 8.06087 5.42143 9.07828 6.17157 9.82843C6.92172 10.5786 7.93913 11 9 11C10.0609 11 11.0783 10.5786 11.8284 9.82843C12.5786 9.07828 13 8.06087 13 7C13 5.93913 12.5786 4.92172 11.8284 4.17157C11.0783 3.42143 10.0609 3 9 3C7.93913 3 6.92172 3.42143 6.17157 4.17157C5.42143 4.92172 5 5.93913 5 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`;

export function cutCornerButton({icon='',ariaLabel='button',className='',fillColor='#4f86ff',borderColor='#6cc0ff'}) {
 return `<button type="button" aria-label="${ariaLabel}" class="cut-corner-btn ${className}" style="--ccb-w:28px;--ccb-h:29px;--ccb-border-color:${borderColor};--ccb-fill-color:${fillColor};--ccb-inner-inset:0 0.5px 2px 0.5px;--ccb-clip:polygon(0 0, 88% 0, 100% 16%, 100% 100%, 12% 100%, 0 84%);"><span class="cut-corner-btn__icon">${icon}</span></button>`;
}

export function retroButton({text,className='',style='',disabled=false}) {
 return `<button type="button" class="retro-gold-btn ${className}" ${disabled?'disabled':''} style="${style}"><span class="retro-gold-btn__border" aria-hidden="true"></span><span class="retro-gold-btn__surface" aria-hidden="true"></span><span class="retro-gold-btn__dots" aria-hidden="true"></span><span class="retro-gold-btn__text">${text}</span></button>`;
}

export function frameCard(content, cls='fc-card') {
 return `<section class="${cls}"><svg class="${cls==='fcm-card'?'fcm-card':'fc-card'}__frame" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="${cls==='fcm-card'?'M9.5 0.5 L99.5 0.5 L99.5 94.2 L91.5 99.5 L0.5 99.5 L0.5 6.8':'M4 0 H100 V92 L97 100 H0 V13 Z'}" fill="none" stroke="var(--border)" stroke-width="1" stroke-linejoin="miter" vector-effect="non-scaling-stroke"/></svg>${content}</section>`;
}

export function tonPill(val, cls){ return `<span class="${cls}"><img src="${ton}" alt="" aria-hidden="true" />${val}</span>`; }
