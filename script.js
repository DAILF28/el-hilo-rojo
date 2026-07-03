const boton = document.getElementById("entrar");
const loader = document.getElementById("loader");
const spotify = document.getElementById("spotify");

// Botón para entrar en la página
boton.addEventListener("click", () => {
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
        document.getElementById("portada").scrollIntoView({
            behavior: "smooth"
        });
    }, 800);
});

// Cargar la canción desde config.js
if (typeof musica !== "undefined") {
    spotify.href = musica.enlace;
    spotify.target = "_blank";
}

// Animación al hacer scroll
const elementos = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "1s";
    observer.observe(el);
});

// Ampliar fotos al pulsarlas
document.querySelectorAll(".grid img").forEach((img) => {

    img.addEventListener("click", () => {

        const fondo = document.createElement("div");
        fondo.style.position = "fixed";
        fondo.style.left = 0;
        fondo.style.top = 0;
        fondo.style.width = "100%";
        fondo.style.height = "100%";
        fondo.style.background = "rgba(0,0,0,.9)";
        fondo.style.display = "flex";
        fondo.style.justifyContent = "center";
        fondo.style.alignItems = "center";
        fondo.style.cursor = "pointer";
        fondo.style.zIndex = "9999";

        const foto = document.createElement("img");
        foto.src = img.src;
        foto.style.maxWidth = "90%";
        foto.style.maxHeight = "90%";
        foto.style.borderRadius = "15px";

        fondo.appendChild(foto);

        fondo.addEventListener("click", () => {
            fondo.remove();
        });

        document.body.appendChild(fondo);

    });

});
