/* Reglas de encriptación: 
"r" es convertido para "enter" 
"s" es convertido para "imes"
"i" es convertido para "ai"
"r" es convertido para "ober"
"t" es convertido para "ufat"
Solo uso letras minusculas
*/




var btnEncriptar= document.getElementById("btnEncriptar");
var btnDesencriptar= document.getElementById("btnDesencriptar");
var btnCopiar= document.getElementById("btnCopiar");





btnEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var inputTexto= document.getElementById("mjeParaEncriptar").value;
    var texto= document.getElementById("mjeParaEncriptar");
    if (!validarIngreso(inputTexto)) {
        encriptarMensaje(inputTexto);
        texto.value="";
        texto.focus();
        
    }
    
  
  });

btnDesencriptar.addEventListener("click",function(e){

    e.preventDefault();
    var encriptado= document.getElementById("mjeParaEncriptar").value;
    var inputEncrip= document.getElementById("mjeEncriptado");   
    desencriptarMje(encriptado);
    inputEncrip.value="";
    
});

btnCopiar.addEventListener("click",function(event){
event.preventDefault();
copiarMje();


});


function encriptarMensaje(mensaje){
    console.log(mensaje);
    var mjeEncriptado= mensaje.replace(/r/gi,"enter").replace(/s/gi,"imes").replace(/i/gi,"ai").replace(/s/gi,"ober").replace(/t/g,"ufat");
    var mostrarMje = document.getElementById("mjeEncriptado");
    console.log(mjeEncriptado);
     mostrarMje.value= mjeEncriptado;
     return mjeEncriptado;

}

function validarIngreso(mensaje){

    const letrasPermitidas= " abcdefghijklmnñopqrstuvwxyz"; 
        var ingreso = document.getElementById("mjeParaEncriptar");
    for (let i = 0; i < mensaje.length; i++) {
       if (letrasPermitidas.indexOf(mensaje.charAt(i),0) < 0) {
           ingreso.value="";
           ingreso.focus();
           alert("Sólo puede ingresar letras y deben ser minúsculas");
           return true;
           break;
       }
    }

}


function desencriptarMje(mensaje) {
    
    var textoDesencriptado = mensaje
      .replace(/enter/gi, "r")
      .replace(/imes/gi, "s")
      .replace(/ai/gi, "i")
      .replace(/obes/gi, "s")
      .replace(/ufat/gi, "t");
    var inputTexDesencriptado = document.getElementById("mjeParaEncriptar");
    inputTexDesencriptado.value = textoDesencriptado;
    return textoDesencriptado;
  }


  function copiarMje(){

   var copiado = document.getElementById("mjeEncriptado")

    if (copiado.value == "") {
     
        alert("No hay palabras por copiar");
        copiado.focus();
        console.log(copiado.value);
    }
    else {
        copiado.select();
        navigator.clipboard.writeText(copiado.value);
        copiado.focus();
        
    }
        

  }