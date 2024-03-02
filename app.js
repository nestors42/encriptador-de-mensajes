// ----- seleccion de elementos------//
const btnEncriptar = document.querySelector ('.encriptar');
const txtEncriptar = document.querySelector ('.ingrese-texto');
const aviso = document.querySelector ('.texto-aviso');
const respuesta = document.querySelector ('.resultado');
const contenidoImg = document.querySelector ('.textarea_img');
const contenidoMensajes = document.querySelector ('.tarjeta-contenedor');
const btnCopiar = document.querySelector ('.copiar');
const btnDesencriptar = document.querySelector ('.desencriptar');

// ----boton encriptar---- //
btnEncriptar.addEventListener ('click', e=> {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    //---- mensaje de alerta----//
    if (texto == ''){
        aviso.style.background = '#0A3871';
        aviso.style.color = '#FFFF';
        aviso.style.fontWeight = '800';
        aviso.textContent = 'El campo de texto no debe estar vacio';

        setTimeout(()=>{
            aviso.removeAttribute('style')
        },1500);
    }
    //---- aviso que el campo de texto no debe tener caracteres especiales----//
    else if (texto !== txt){
        aviso.style.background = '#0A3871';
        aviso.style.color = '#FFFF';
        aviso.style.fontWeight = '800';
        aviso.textContent = 'No debe tener acentos y caracteres especiales';

        setTimeout(()=>{
            aviso.removeAttribute('style')
        },1500);
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.background = '#0A3871';
        aviso.style.color = '#FFFF';
        aviso.style.fontWeight = '800';
        aviso.textContent = 'El texto debe ser todo en minuscula';

        setTimeout(()=>{
            aviso.removeAttribute('style')
        },1500);
    }

    //---- llaves de encriptacion---/
    else{
        texto = texto.replace(/e/mg, 'enter');
        texto = texto.replace(/i/mg, 'imes');
        texto = texto.replace(/a/mg, 'ai');
        texto = texto.replace(/o/mg, 'ober');
        texto = texto.replace(/u/mg, 'ufat');


        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = 'inherit';
        contenidoMensajes.remove();
    }
});


// ----boton desencriptar---- //
btnDesencriptar.addEventListener ('click', e=> {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    //---- mensaje de alerta----//
    if (texto == ''){
        aviso.style.background = '#0A3871';
        aviso.style.color = '#FFFF';
        aviso.style.fontWeight = '800';
        aviso.textContent = 'El campo de texto no debe estar vacio';

        setTimeout(()=>{
            aviso.removeAttribute('style')
        },1500);
    }
    //---- aviso que el campo de texto no debe tener caracteres especiales----//
    else if (texto !== txt){
        aviso.style.background = '#0A3871';
        aviso.style.color = '#FFFF';
        aviso.style.fontWeight = '800';
        aviso.textContent = 'No debe tener acentos y caracteres especiales';

        setTimeout(()=>{
            aviso.removeAttribute('style')
        },1500);
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.background = '#0A3871';
        aviso.style.color = '#FFFF';
        aviso.style.fontWeight = '800';
        aviso.textContent = 'El texto debe ser todo en minuscula';

        setTimeout(()=>{
            aviso.removeAttribute('style')
        },1500);
    }

    //---- llaves de encriptacion---/
    else{
        texto = texto.replace(/enter/mg, 'e');
        texto = texto.replace(/imes/mg, 'i');
        texto = texto.replace(/ai/mg, 'a');
        texto = texto.replace(/ober/mg, 'o');
        texto = texto.replace(/ufat/mg, 'u');


        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = 'inherit';
        contenidoMensajes.remove();
    }
});


// ----boton copiar---- //
btnCopiar.addEventListener ('click', e=> {
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand('copy');
});