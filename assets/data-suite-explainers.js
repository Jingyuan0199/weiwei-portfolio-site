(()=>{const q=s=>document.querySelector('.data-suite-explainer '+s);
if(q('#access-lab')){
  function access(){
    const value=q('#access-query').value;document.querySelectorAll('[data-allowed]').forEach(c=>c.classList.toggle('selected-cell',value==='all'||c.closest('tr').dataset.row===value));
    q('#access-note').textContent=value==='all'?'本次可以取到 row2、row3 的 col1 与 col2；col3 不在授权范围内。':value==='1'?'没有可取数据：row1 不在授权范围内，增加查询条件不会扩大权限。':`本次只取 ${value==='2'?'row2':'row3'} 的 col1 与 col2；另一行仍有访问权限，只是不符合本次查询条件。`;
  }
  q('#access-query').addEventListener('change',access);access();
  const states={a:['ok','ok','fail'],b:['ok','fail','skip'],c:['ok','ok','ok']},names=['提交新版本','停止应用','启动应用'];
  const words={ok:'已成功',fail:'失败',skip:'未执行'},notes={a:'启动失败；提交新版本与停止应用已经成功，这些成功步骤不会自动回滚。',b:'停止失败；提交新版本已经成功，后续启动不再执行，已成功步骤不回滚。',c:'该应用的三个步骤均成功；同批次其他应用仍需各自检查结果。'};
  function showApp(app){
    document.querySelectorAll('[data-app]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.app===app)));
    states[app].forEach((s,i)=>{const el=q('#exec-'+i);el.className='exec-step '+s;el.innerHTML='<span>'+({ok:'✓',fail:'×',skip:'—'}[s])+'</span><b>'+names[i]+'</b><small>'+words[s]+'</small>';});q('#execution-note').textContent=notes[app];
  }
  document.querySelectorAll('[data-app]').forEach(b=>b.addEventListener('click',()=>showApp(b.dataset.app)));showApp('b');
}

})();
