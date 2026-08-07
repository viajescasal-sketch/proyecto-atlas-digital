
const messages={
 viajes:{
  contacto:'Hola, [Nombre]. Soy Joel Castro. Ayudo a agencias y operadores turísticos a mejorar su presencia digital y automatizar el seguimiento comercial. Revisé [Negocio] y detecté una oportunidad en [Oportunidad]. ¿Te comparto un diagnóstico breve sin costo?',
  diagnostico:'Hola, [Nombre]. Para preparar el diagnóstico de [Negocio], quiero entender cómo gestionan hoy [Oportunidad], dónde se pierde más tiempo y qué resultado sería prioritario mejorar.',
  s24:'Hola, [Nombre]. Gracias por revisar la propuesta de [Negocio]. La solución se enfoca principalmente en [Oportunidad]. ¿Hay algún punto de alcance, inversión o tiempo que quieras revisar conmigo?',
  s72:'Hola, [Nombre]. Retomo la propuesta de [Negocio]. Si [Oportunidad] sigue siendo prioridad, podemos iniciar por una primera fase sencilla y escalar después. ¿Te parece que definamos el siguiente paso?',
  cierre:'Hola, [Nombre]. Si estás de acuerdo, hoy podemos reservar el espacio de implementación para [Negocio] y comenzar con [Oportunidad]. Te comparto alcance, anticipo y fecha de inicio.'
 },
 clinicas:{
  contacto:'Hola, [Nombre]. Soy Joel Castro. Ayudo a clínicas y consultorios a convertir búsquedas y mensajes en citas mediante sitio web, formularios y seguimiento. En [Negocio] detecté una oportunidad en [Oportunidad]. ¿Te comparto un diagnóstico breve sin costo?',
  diagnostico:'Hola, [Nombre]. Para el diagnóstico de [Negocio], quiero revisar cómo reciben solicitudes, cómo agendan y qué ocurre actualmente con [Oportunidad].',
  s24:'Hola, [Nombre]. Retomo la propuesta para [Negocio]. El objetivo es mejorar [Oportunidad] sin complicar la operación del consultorio. ¿Qué punto necesitas validar?',
  s72:'Hola, [Nombre]. Si todavía quieres mejorar [Oportunidad], podemos iniciar con una primera fase de bajo riesgo para [Negocio]. ¿Revisamos fecha de inicio?',
  cierre:'Hola, [Nombre]. Podemos reservar la implementación de [Negocio] y comenzar por [Oportunidad]. Si confirmas, te comparto alcance y anticipo.'
 },
 despachos:{
  contacto:'Hola, [Nombre]. Soy Joel Castro. Ayudo a despachos y empresas de servicios a generar confianza, captar prospectos y ordenar el seguimiento comercial. Revisé [Negocio] y detecté una oportunidad en [Oportunidad]. ¿Te comparto un diagnóstico sin costo?',
  diagnostico:'Hola, [Nombre]. Para revisar [Negocio], quiero entender cómo llegan hoy los prospectos, cómo se atienden y qué impacto tiene [Oportunidad].',
  s24:'Hola, [Nombre]. Doy seguimiento a la propuesta de [Negocio]. La prioridad es fortalecer [Oportunidad] y convertir la presencia digital en oportunidades medibles. ¿Qué necesitas validar?',
  s72:'Hola, [Nombre]. Retomo la propuesta de [Negocio]. Podemos iniciar por el componente que más impacto tenga en [Oportunidad] y crecer desde ahí. ¿Avanzamos?',
  cierre:'Hola, [Nombre]. Podemos reservar la fecha para [Negocio] e iniciar con [Oportunidad]. Si confirmas, dejamos alcance y anticipo listos.'
 }
};
function getActive(attr,def){const el=document.querySelector(`[${attr}].active`);return el?el.getAttribute(attr):def}
function renderMsg(){
 const n=getActive('data-niche','viajes'),s=getActive('data-stage','contacto');
 const name=document.getElementById('name')?.value||'[Nombre]';
 const biz=document.getElementById('business')?.value||'[Negocio]';
 const opp=document.getElementById('opportunity')?.value||'[Oportunidad]';
 const out=document.getElementById('message');
 if(out) out.value=messages[n][s].replaceAll('[Nombre]',name).replaceAll('[Negocio]',biz).replaceAll('[Oportunidad]',opp);
}
document.addEventListener('click',async e=>{
 if(e.target.matches('[data-niche],[data-stage]')){
   const attr=e.target.hasAttribute('data-niche')?'data-niche':'data-stage';
   document.querySelectorAll(`[${attr}]`).forEach(x=>x.classList.remove('active'));
   e.target.classList.add('active');renderMsg();
 }
 if(e.target.id==='copy'){
   const st=document.getElementById('status');
   try{await navigator.clipboard.writeText(document.getElementById('message').value);st.textContent='Mensaje copiado.'}
   catch{st.textContent='Selecciona el texto y usa Ctrl+C.'}
 }
});
document.addEventListener('DOMContentLoaded',()=>{['name','business','opportunity'].forEach(id=>document.getElementById(id)?.addEventListener('input',renderMsg));renderMsg()});
