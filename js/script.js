desencriptadoTxt = document.getElementById('desencriptadoTxt');
encriptadoBtn = document.getElementById('encriptadoBtn');
desencriptadoBtn = document.getElementById('desencriptadoBtn');
encriptadoTxt = document.getElementById('encriptadoTxt');
copiarBtn = document.getElementById('copiarBtn');

correcto = document.getElementById('correcto');
vacio = document.getElementById('vacio');
error = document.getElementById('error');

const regex = /[A-Z]|[!@#$%^&*(),.?":{}|<>]|[ÁÉÍÓÚáéíóúñÑüÜ]/;


function mostrarCaritaFeliz(){
    correcto.classList.remove('ocultar');
    vacio.classList.add('ocultar');
    error.classList.add('ocultar');
}

function mostrarCaritaRegular(){
    correcto.classList.add('ocultar');
    vacio.classList.remove('ocultar');
    error.classList.add('ocultar');
}

function mostrarCaritaTriste(){
    correcto.classList.add('ocultar');
    vacio.classList.add('ocultar');
    error.classList.remove('ocultar');
}


function encriptar()
{
    if(desencriptadoTxt.value == "")
    {
        //console.log("Debe ingresar un texto a encriptar.")   
        mostrarCaritaRegular();     
    }
    else
    {
        if(regex.test(desencriptadoTxt.value))
        {
            //console.log("Verifique lo ingresado.");
            mostrarCaritaTriste();
        }
        else
        {
            var key = "my-secret-key";
    
            // Encriptar
            encrypted = CryptoJS.AES.encrypt(desencriptadoTxt.value, key).toString();
            encriptadoTxt.value = encrypted;
            desencriptadoTxt.value = "";
            //console.log("Texto encriptado: " + encrypted);
            mostrarCaritaFeliz();
        }
    }
}

    

function desencriptar(){
    if(encriptadoTxt.value == "")
    {
        //console.log("Debe posser un texto encriptado.");
        mostrarCaritaRegular();
    }
    else
    {
        key = "my-secret-key";
        
        decrypted = CryptoJS.AES.decrypt(encriptadoTxt.value, key);
        originalText = decrypted.toString(CryptoJS.enc.Utf8);
        desencriptadoTxt.value = originalText;
        encriptadoTxt.value = "";
        console.log("Texto desencriptado: " + originalText);
    }

}


copiarBtn.addEventListener("click", function() {
    desencriptadoTxt.value = encriptadoTxt.value;  
});

encriptadoBtn.addEventListener("click", encriptar);

desencriptadoBtn.addEventListener("click", desencriptar);

