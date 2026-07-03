// ==========================
// BOTÓN DE ENTRADA
// ==========================

const loader = document.getElementById("loader");
const entrar = document.getElementById("entrar");

entrar.addEventListener("click", () => {

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

        document.body.style.overflowY = "auto";

    },1000);

});

document.body.style.overflow="hidden";


// ==========================
// BOTÓN SPOTIFY
// ==========================

const spotify=document.getElementById("spotify");

if(typeof musica!=="undefined"){

spotify.href=musica.enlace;

spotify.target="_blank";

}


// ==========================
// APARICIÓN AL HACER SCROLL
// ==========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach((sec)=>{

observer.observe(sec);

});
// ==========================
// PÉTALOS DE CEREZO
// ==========================

const contenedorPetalos = document.getElementById("petalos");

function crearPetalo(){

    const petalo=document.createElement("div");

    petalo.classList.add("petalo");

    petalo.style.left=Math.random()*100+"vw";

    petalo.style.animationDuration=
    (6+Math.random()*8)+"s";

    petalo.style.animationDelay=
    Math.random()*3+"s";

    petalo.style.opacity=
    (0.4+Math.random()*0.6);

    petalo.style.transform=
    "scale("+(0.5+Math.random())+")";

    contenedorPetalos.appendChild(petalo);

    setTimeout(()=>{

        petalo.remove();

    },15000);

}

for(let i=0;i<25;i++){

    crearPetalo();

}

setInterval(()=>{

    crearPetalo();

},700);


// ==========================
// EFECTO PARALLAX PORTADA
// ==========================

const portada=document.querySelector("#portada img");

window.addEventListener("scroll",()=>{

const y=window.scrollY;

portada.style.transform=
`translateY(${y*0.15}px) scale(1.1)`;

});


// ==========================
// EFECTO SOBRE BOTONES
// ==========================

document.querySelectorAll("a,button").forEach(boton=>{

boton.addEventListener("mouseenter",()=>{

boton.style.transform="scale(1.05)";

});

boton.addEventListener("mouseleave",()=>{

boton.style.transform="scale(1)";

});

});
// ==========================
// GALERÍA A PANTALLA COMPLETA
// ==========================

document.querySelectorAll(".grid img").forEach((img)=>{

    img.addEventListener("click",()=>{

        const fondo=document.createElement("div");

        fondo.style.position="fixed";
        fondo.style.left="0";
        fondo.style.top="0";
        fondo.style.width="100%";
        fondo.style.height="100%";
        fondo.style.background="rgba(0,0,0,.92)";
        fondo.style.display="flex";
        fondo.style.justifyContent="center";
        fondo.style.alignItems="center";
        fondo.style.zIndex="99999";
        fondo.style.cursor="pointer";
        fondo.style.opacity="0";
        fondo.style.transition=".35s";

        const foto=document.createElement("img");

        foto.src=img.src;
        foto.style.maxWidth="92%";
        foto.style.maxHeight="92%";
        foto.style.borderRadius="18px";
        foto.style.boxShadow="0 25px 60px rgba(0,0,0,.45)";
        foto.style.transform="scale(.8)";
        foto.style.transition=".35s";

        fondo.appendChild(foto);
        document.body.appendChild(fondo);

        requestAnimationFrame(()=>{

            fondo.style.opacity="1";
            foto.style.transform="scale(1)";

        });

        fondo.addEventListener("click",()=>{

            fondo.style.opacity="0";
            foto.style.transform="scale(.8)";

            setTimeout(()=>{

                fondo.remove();

            },300);

        });

    });

});


// ==========================
// EFECTO MÁQUINA DE ESCRIBIR
// ==========================

const texto=document.querySelector("#teoria p");

if(texto){

const contenido=texto.innerHTML.replace(/<br>/g,"\n");
texto.innerHTML="";

let i=0;

function escribir(){

    if(i<contenido.length){

        texto.innerHTML+=contenido.charAt(i);

        i++;

        setTimeout(escribir,18);

    }

}

const escribirObserver=new IntersectionObserver((entries)=>{

if(entries[0].isIntersecting){

escribir();

escribirObserver.disconnect();

}

});

escribirObserver.observe(texto);

}


// ==========================
// LATIDO SUAVE DEL CORAZÓN
// ==========================

const corazon=document.getElementById("corazon");

if(corazon){

setInterval(()=>{

corazon.animate([

{transform:"scale(1)"},

{transform:"scale(1.25)"},

{transform:"scale(1)"}

],{

duration:900

});

},1800);

}


// ==========================
// BRILLO EN LA PORTADA
// ==========================

const capa=document.querySelector(".capa");

let brillo=0;

setInterval(()=>{

brillo+=0.02;

capa.style.background=

`linear-gradient(
180deg,
rgba(0,0,0,${0.18+Math.sin(brillo)*0.05}),
rgba(0,0,0,.55)
)`;

},60);


// ==========================
// MENSAJE FINAL
// ==========================

console.log("❤️ El hilo rojo siempre encuentra el camino ❤️");
