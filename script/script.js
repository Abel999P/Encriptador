const ingresoTexto = document.getElementById("ingresoTexto");
const btnEncriptar= document.getElementById("btnEncriptar");
const btnDesencriptar= document.getElementById("btnDesencriptar");
const btnCopiar= document.getElementById("btnCopiar");
const mensajeFinal= document.getElementById("mensajeFinal");
const informacion = document.getElementById("informacion");
const derecha = document.getElementById("derecha");


let remplazar = [
    ["e","enter"], 
    ["o","ober" ],
    ["i","imes" ],
    ["a","ai"],
    ["u","ufat" ],
]

const hacedor =(ejecuta)=>{
    mensajeFinal.innerText = ejecuta;
    muñeco.classList.add ("oculto");
    ingresoTexto.value = "";
    informacion.style.display= "none";
    btnCopiar.style.display = "block";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

const reset =()=>{
    mensajeFinal.innerText= "";
    muñeco.classList.remove("oculto");
    informacion.style.display = "block";
    btnCopiar.style.display = "none";
    derecha.classList.remove("ajustar")
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
}

btnEncriptar.addEventListener("click",() =>{
    const texto = ingresoTexto.value.toLowerCase()
    if(texto != ""){
        function encriptar(nexText){
            for(let i=0; i<remplazar.length; i++){
                if(nexText.includes(remplazar[i][0])){
                    nexText = nexText.replaceAll(remplazar[i][0],remplazar[i][1]);
                };
            };
            return nexText;
        };
    }else{
        alert("Ingrese un texto para encriptar");
        reset();
    };

    hacedor(encriptar(texto));

})

btnDesencriptar.addEventListener("click",()=>{
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != ""){
        function desencriptar(newtexto){
            for(let i=0; i<remplazar.length; i++){
                if(newtexto.includes(remplazar[i][1])){
                    newtexto = newtexto.replaceAll(remplazar[i][1],remplazar[i][0]);
                };
            };
            return newtexto
        }
    }else{
        alert("Ingrese un texto para desencriptar");
        reset();
    }

    hacedor(desencriptar(texto));
})

btnCopiar.addEventListener("click",()=>{
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy");
    alert("Texto Copiado");
    reset();
})

