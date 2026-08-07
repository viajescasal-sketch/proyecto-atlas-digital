
const templates={
 viajes:{contacto:'Hola, [Nombre]. Soy Joel Castro. Ayudamos a agencias y operadores turísticos a captar más prospectos y reducir el seguimiento manual. Revisé [Negocio] y detecté una oportunidad en [Oportunidad]. ¿Te comparto un diagnóstico breve sin costo?',seguimiento:'Hola, [Nombre]. Retomo el diagnóstico de [Negocio]. La prioridad identificada fue [Oportunidad]. ¿Revisamos el siguiente paso?'},
 clinicas:{contacto:'Hola, [Nombre]. Soy Joel Castro. Ayudamos a clínicas y consultorios a convertir búsquedas y mensajes en citas. En [Negocio] veo una oportunidad en [Oportunidad]. ¿Te comparto un diagnóstico breve sin costo?',seguimiento:'Hola, [Nombre]. Doy seguimiento a la propuesta para [Negocio]. La solución busca mejorar [Oportunidad]. ¿Qué punto necesitas validar para avanzar?'},
 despachos:{contacto:'Hola, [Nombre]. Soy Joel Castro. Ayudamos a despachos y empresas de servicios a generar confianza y ordenar su seguimiento comercial. Revisé [Negocio] y detecté una oportunidad en [Oportunidad]. ¿Te comparto un diagnóstico sin costo?',seguimiento:'Hola, [Nombre]. Retomo la conversación sobre [Negocio]. La propuesta se enfoca en fortalecer [Oportunidad]. ¿Revisamos alcance y fecha de inicio?'}
};
const creatives={
 viajes:{src:'assets/images/creatives/travel.svg',file:'proyecto-atlas-travel.svg'},
 clinicas:{src:'assets/images/creatives/clinica.svg',file:'proyecto-atlas-clinica.svg'},
 despachos:{src:'assets/images/creatives/despacho.svg',file:'proyecto-atlas-despacho.svg'}
};
function active(attr,def){return document.querySelector('['+attr+'].active')?.dataset[attr.replace('data-','')]||def}
function render(){
 const niche=active('data-niche','viajes'), stage=active('data-stage','contacto');
 const n=document.getElementById('name')?.value||'[Nombre]';
 const b=document.getElementById('business')?.value||'[Negocio]';
 const o=document.getElementById('opportunity')?.value||'[Oportunidad]';
 const out=document.getElementById('templateText');
 if(out) out.value=templates[niche][stage].replaceAll('[Nombre]',n).replaceAll('[Negocio]',b).replaceAll('[Oportunidad]',o);
 const img=document.getElementById('creativePreview'), dl=document.getElementById('downloadCreative');
 if(img) img.src=creatives[niche].src;
 if(dl){dl.href=creatives[niche].src;dl.download=creatives[niche].file;}
}
document.addEventListener('click',e=>{
 if(e.target.matches('[data-niche],[data-stage]')){
   const attr=e.target.hasAttribute('data-niche')?'data-niche':'data-stage';
   document.querySelectorAll('['+attr+']').forEach(x=>x.classList.remove('active'));
   e.target.classList.add('active'); render();
 }
 if(e.target.id==='copyTemplate'){
   navigator.clipboard.writeText(document.getElementById('templateText').value);
   e.target.textContent='Copiado'; setTimeout(()=>e.target.textContent='Copiar plantilla',1000);
 }
});
document.addEventListener('DOMContentLoaded',()=>{
 ['name','business','opportunity'].forEach(id=>document.getElementById(id)?.addEventListener('input',render));
 render();
});
