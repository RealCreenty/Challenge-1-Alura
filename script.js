const texto= document.querySelector(".encriptar");
const mensaje=document.querySelector(".encript");

function encriptar(palabras){
    let vocales=["e","i","o","a","u"];
    let cambio=["enter","imes","ober","ai","ufat"];

     for(let i = 0; i < vocales.length; i++){
        if(palabras.includes(vocales[i])){
            palabras=palabras.replaceAll(vocales[i],cambio[i]);
        }
     }
     return palabras;
}
  
 function btnencriptar(){
    const textoencriptado=encriptar(texto.value);
    mensaje.value=textoencriptado;
    texto.value="";
 }