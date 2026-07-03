// ==========================
// INTRO CINEMATOGRÁFICA
// ==========================

const loader = document.getElementById("loader");

const frases = document.querySelectorAll(".frase");

const animacionFinal = document.getElementById("animacionFinal");

document.body.style.overflow = "hidden";

window.addEventListener("load", () => {

    let tiempo = 500;

    frases.forEach((frase) => {

        setTimeout(() => {

            frase.classList.add("visible");

        }, tiempo);

        setTimeout(() => {

            frase.classList.remove("visible");
            frase.classList.add("ocultar");

        }, tiempo + 2200);

        tiempo += 2600;

    });

    setTimeout(() => {

        animacionFinal.classList.add("visible");
        corazon.style.display="block";

corazon.animate([

{transform:"scale(1)"},

{transform:"scale(1.35)"},

{transform:"scale(1)"}

],{

duration:900,

iterations:4

});

    }, tiempo);

    setTimeout(() => {
        iniciarPetalos();
        loader.style.opacity = "0";

    }, tiempo + 5000);

    setTimeout(() => {

        loader.style.display = "none";
        document.getElementById("portada").style.opacity="1";
        setTimeout(()=>{

document.getElementById("musica").style.opacity="1";

},2500);
        document.body.style.overflow = "auto";

    }, tiempo + 6500);

});


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

let lluviaPetalos = null;

function iniciarPetalos(){

    for(let i=0;i<25;i++){

        crearPetalo();

    }

    lluviaPetalos = setInterval(()=>{

        crearPetalo();

    },700);

}


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
// CONTADOR
// ==========================

// Año, Mes (0=enero, 1=febrero...), Día
const fechaInicio = new Date(2024, 9, 1);

const hoy = new Date();

let años = hoy.getFullYear() - fechaInicio.getFullYear();
let meses = hoy.getMonth() - fechaInicio.getMonth();
let dias = hoy.getDate() - fechaInicio.getDate();

if (dias < 0) {
    meses--;
    const ultimoMes = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
    dias += ultimoMes.getDate();
}

if (meses < 0) {
    años--;
    meses += 12;
}

document.getElementById("diasJuntos").innerHTML =
`<strong>${años}</strong> años,
<strong>${meses}</strong> meses y
<strong>${dias}</strong> días ❤️`;

// ==========================
// MENSAJE FINAL
// ==========================

console.log("❤️ El hilo rojo siempre encuentra el camino ❤️");
