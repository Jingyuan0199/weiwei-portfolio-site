(() => {
  document.documentElement.classList.add('js');
  const toggle=document.querySelector('.navigation-toggle');
  const nav=document.querySelector('#primary-navigation');
  const directory=document.querySelector('.site-directory');
  const mobile=matchMedia('(max-width:760px)');
  const close=()=>{if(nav)nav.dataset.open='false';toggle?.setAttribute('aria-expanded','false');};
  toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.dataset.open=String(open);});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true'){close();toggle.focus();}});
  document.addEventListener('click',event=>{if(!event.target.closest('.portfolio-header'))close();});
  // Keep the link visible through its native activation; a new page closes the menu.
  const layout=()=>{close();if(directory)directory.open=!mobile.matches;};
  layout();mobile.addEventListener('change',layout);
  directory?.addEventListener('click',event=>{if(mobile.matches&&event.target.closest('a'))directory.open=false;});
  directory?.addEventListener('keydown',event=>{if(event.key==='Escape'&&mobile.matches&&directory.open){directory.open=false;directory.querySelector('summary').focus();}});
  // The sidebar is a page menu. Chapter tracking belongs to the article rail.
  const contact=document.querySelector('.contact-menu');
  const trigger=contact?.querySelector('.contact-trigger');
  const popover=contact?.querySelector('.contact-popover');
  let contactTimer,contactPinned=false;
  const setContact=open=>{if(!popover)return;clearTimeout(contactTimer);if(!open)contactPinned=false;popover.hidden=!open;trigger.setAttribute('aria-expanded',String(open));};
  trigger?.addEventListener('click',()=>{const open=!contactPinned;setContact(open);contactPinned=open;});
  contact?.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')setContact(true);});
  contact?.addEventListener('pointerleave',event=>{if(event.pointerType==='mouse')contactTimer=setTimeout(()=>{if(!contactPinned&&!contact.contains(document.activeElement))setContact(false);},180);});
  contact?.addEventListener('focusout',()=>{contactTimer=setTimeout(()=>{if(!contact.contains(document.activeElement))setContact(false);},0);});
  const openContactAnchor=()=>{if(location.hash==='#contact'){setContact(true);contactPinned=true;}};
  openContactAnchor();window.addEventListener('hashchange',openContactAnchor);
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&popover&&!popover.hidden){setContact(false);trigger.focus();}});
  document.addEventListener('click',event=>{if(!contact?.contains(event.target))setContact(false);});
  document.addEventListener('click',event=>{
    const link=event.target.closest('a[href]');
    if(!link)return;
    const destination=new URL(link.href,location.href);
    if(destination.origin===location.origin&&destination.pathname===location.pathname&&destination.hash==='#contact'){
      setContact(true);contactPinned=true;
    }
  });
  window.addEventListener('weiwei:concierge-open',()=>{close();setContact(false);});
  if(location.pathname.endsWith('/about.html')&&location.hash==='#experience')location.replace('career.html');
  // Keep old bookmarks useful after moving the long homepage sections.
  if(document.body.classList.contains('home-v2')){
    const routes={'#projects':'projects.html','#projects-ai':'projects.html#ai','#experience':'career.html','#practice':'projects/team-operating-model.html','#creative':'projects/independent.html','#contact':'career.html#contact'};
    if(routes[location.hash])location.replace(routes[location.hash]);
  }
})();
