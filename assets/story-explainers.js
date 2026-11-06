(()=>{
const roles={heading:['colorText','colorTextHeading','页面标题'],label:['colorTextSecondary','colorTextLabel','字段标签'],description:['colorTextTertiary','colorTextDescription','服务说明'],disabled:['colorTextQuaternary','colorTextDisabled','禁用操作']};
document.querySelectorAll('[data-role]').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.role;document.querySelectorAll('[data-role]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});document.querySelectorAll('[data-map]').forEach(n=>n.classList.toggle('active',n.dataset.map===key));document.querySelectorAll('[data-preview]').forEach(n=>n.classList.toggle('chosen',n.dataset.preview===key));document.querySelector('#semantic-trace').textContent=roles[key].join(' → ');}));
const modes={default:{name:'Default / Space',radius:2,tag:2,color:'#2673dd'},smart:{name:'Smart',radius:8,tag:4,color:'#000cc1'},ask:{name:'Ask',radius:8,tag:16,color:'#722ed1'},aiops:{name:'AIOps',radius:6,tag:4,color:'#2e46fd'}};
document.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.mode,m=modes[key];document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));const sample=document.querySelector('#theme-sample');sample.style.setProperty('--radius',m.radius+'px');sample.style.setProperty('--tag-radius',m.tag+'px');sample.style.setProperty('--theme',m.color);document.querySelector('#sample-name').textContent=m.name;document.querySelector('#global-number').textContent=m.radius;document.querySelector('#button-number').textContent=m.radius;document.querySelector('#tag-number').textContent=m.tag;document.querySelector('#tag-route').textContent=key==='default'?'引用 →':'局部值 →';document.querySelector('#tag-rule-label').textContent=key==='default'?'共用小圆角':'组件专属配置';document.querySelector('#tag-rule').textContent=key==='default'?'borderRadiusSM':m.tag+' px';document.querySelector('#theme-trace').textContent=key==='default'?'Default / Space：通用圆角 2；Tag 引用 borderRadiusSM，当前为 2。':`${m.name}：Button 引用通用圆角 ${m.radius}；Tag 使用局部圆角 ${m.tag}。`;}));
document.querySelectorAll('[data-query-example]').forEach(button=>button.addEventListener('click',()=>{const ip=button.dataset.queryExample==='ip',root=button.closest('figure');root.querySelectorAll('[data-query-example]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));root.querySelector('[data-query-field]').textContent=ip?'IP LAN':'Hostname';root.querySelector('[data-query-operator]').textContent=ip?'in':'=';root.querySelector('[data-query-value]').textContent=ip?'192.0.2.10, 192.0.2.11':'demo-server-01';root.querySelector('[data-query-note]').textContent=ip?'IP 条件表达集合包含关系；原稿允许用逗号、空格或换行分隔多个 IP。':'名称条件表达相等关系；日常使用中可选择常用字段、排序并预览。';}));
// Inline original references are folded by default; direct reference links reveal them.
if(document.body.dataset.project==='infrad'){
  const revealOriginal=hash=>{
    const target=document.getElementById(hash.slice(1));
    if(target?.matches('details.project-fold')) target.open=true;
  };
  document.addEventListener('click',event=>{
    const link=event.target.closest('a[href^="#group-"]');
    if(link) revealOriginal(link.getAttribute('href'));
  });
  window.addEventListener('hashchange',()=>revealOriginal(location.hash));
  revealOriginal(location.hash);
}
if(!document.querySelector('#evidence-data')) return;
const groups=JSON.parse(document.querySelector('#evidence-data').textContent),dialog=document.querySelector('#viewer'),stage=document.querySelector('.image-stage');let activeGroup,index=0,opener;
function renderImage(){const item=activeGroup.items[index];document.querySelector('#viewer-title').textContent=item.title;document.querySelector('#viewer-count').textContent=`${activeGroup.title} · ${index+1} / ${activeGroup.items.length}`;const img=document.querySelector('#viewer-image');img.src=item.href;img.alt=item.title;document.querySelector('#original-link').href=item.href;document.querySelector('#viewer-note').textContent=item.caption;document.querySelector('#viewer-role').textContent=activeGroup.version+' · '+activeGroup.role+' 来源：'+item.kind+'。';document.querySelector('#prev-image').disabled=index===0;document.querySelector('#next-image').disabled=index===activeGroup.items.length-1;stage.classList.remove('actual');stage.scrollTop=stage.scrollLeft=0;document.querySelector('#image-scale').setAttribute('aria-pressed','false');document.querySelector('#image-scale').textContent='按原尺寸阅读';}
document.querySelectorAll('[data-group]').forEach(b=>b.addEventListener('click',()=>{opener=b;activeGroup=groups.find(g=>g.id===b.dataset.group);index=Number(b.dataset.index);renderImage();dialog.showModal();document.querySelector('#close-viewer').focus();}));
document.querySelector('#close-viewer').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>opener?.focus());
function move(delta){const next=index+delta;if(next>=0&&next<activeGroup.items.length){index=next;renderImage();}}
document.querySelector('#prev-image').addEventListener('click',()=>move(-1));document.querySelector('#next-image').addEventListener('click',()=>move(1));document.querySelector('#image-scale').addEventListener('click',e=>{const actual=stage.classList.toggle('actual');e.currentTarget.setAttribute('aria-pressed',String(actual));e.currentTarget.textContent=actual?'适应窗口':'按原尺寸阅读';});dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();move(1);}if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}});

})();
