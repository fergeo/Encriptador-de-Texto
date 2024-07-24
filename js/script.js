desencriptadoTxt = document.getElementById('desencriptadoTxt');
encriptadoBtn = document.getElementById('encriptadoBtn');
desencriptadoBtn = document.getElementById('desencriptadoBtn');
encriptadoTxt = document.getElementById('encriptadoTxt');
copiarBtn = document.getElementById('copiarBtn');

correctoEncriptado = document.getElementById('correctoEncriptado');
correctoDesencriptado = document.getElementById('correctoDesencriptado');
vacio = document.getElementById('vacio');
error = document.getElementById('error');


desencriptadoTxt.value = '';
encriptadoTxt.value = '';
arrayDeCaracteres = [];

//Diccionario para engriptar e desencriptar
const diccionarioVocales = {
    'a': 'enter',
    'e': 'imes',
    'i': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const regex = /[A-Z]|[!@#$%^&*(),.?":{}|<>]|[ÁÉÍÓÚáéíóúñÑüÜ]/;


function mostrarCaritaFeliz(){
    correctoEncriptado.classList.remove('ocultar');
    correctoDesencriptado.classList.add('ocultar');
    vacio.classList.add('ocultar');
    error.classList.add('ocultar');
}

function mostrarCaritaFelizDesEncriptado(){
    correctoEncriptado.classList.add('ocultar');
    correctoDesencriptado.classList.remove('ocultar');
    vacio.classList.add('ocultar');
    error.classList.add('ocultar');
}

function mostrarCaritaRegular(){
    correctoEncriptado.classList.add('ocultar');
    correctoDesencriptado.classList.add('ocultar');
    vacio.classList.remove('ocultar');
    error.classList.add('ocultar');
    //desencriptadoTxt.value = '';
    encriptadoTxt.value = '';
}

function mostrarCaritaTriste(){
    correctoEncriptado.classList.add('ocultar');
    correctoDesencriptado.classList.add('ocultar');
    vacio.classList.add('ocultar');
    error.classList.remove('ocultar');
    //desencriptadoTxt.value = '';
    encriptadoTxt.value = '';
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
            // Encriptar
            arrayDeCaracteres = [];
            arrayDeCaracteres = desencriptadoTxt.value.split('');

            arrayDeCaracteres.forEach((letras , indice) => {

                if(letras in diccionarioVocales)
                {
                    arrayDeCaracteres[indice] = diccionarioVocales[letras];
                }
            });

            encriptadoTxt.value = arrayDeCaracteres.join('');
            desencriptadoTxt.value = '';
            //console.log("Texto encriptado: " + encrypted);
            mostrarCaritaFeliz();
        }
    }
}
    

function desencriptar()
{

    if(encriptadoTxt.value == "")
    {
        //console.log("Debe posser un texto encriptado.");
        mostrarCaritaRegular();
    }
    else
    {
        arrayDeCaracteres.forEach((letras , indice) => {

            if( Object.values(diccionarioVocales).indexOf(letras) !== -1 )
            {
                for (const [llave, valor] of Object.entries(diccionarioVocales)) 
                {
                    if (valor === letras) {
                        arrayDeCaracteres[indice] = llave;
                        break;
                    }
                }
            }            
        });

        desencriptadoTxt.value = arrayDeCaracteres.join('');
        encriptadoTxt.value = '';
        //console.log("Texto desencriptado: " + originalText);
        mostrarCaritaFelizDesEncriptado();
    }

}


copiarBtn.addEventListener("click", function() {
    desencriptadoTxt.value = encriptadoTxt.value;  
});

encriptadoBtn.addEventListener("click", encriptar);

desencriptadoBtn.addEventListener("click", desencriptar);

