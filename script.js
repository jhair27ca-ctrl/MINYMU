document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. MENÚ MÓVIL HAMBURGUESA
    // ==========================================
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Ocultar menú automáticamente al hacer clic en cualquier enlace interno
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // ==========================================
    // 2. BOTÓN SORPRESA: DATOS CURIOSOS FELINOS
    // ==========================================
    const btnSorpresa = document.getElementById('btnSorpresa');
    const parrafoSorpresa = document.getElementById('parrafoSorpresa');

    const datosCuriosos = [
        "🐱 Los gatos pasan cerca del 70% de sus vidas durmiendo.",
        "🧠 El cerebro de un gato es un 90% similar al de un humano; compartimos regiones emocionales.",
        "⚡ El ronroneo de un gato vibra a una frecuencia de entre 25 y 150 Hz, la cual favorece la curación de huesos y tejidos.",
        "🐾 Los gatos tienen cinco garras en sus patas delanteras, pero solo cuatro en las traseras.",
        "🥛 A diferencia del mito popular, la gran mayoría de los gatos adultos son intolerantes a la lactosa.",
        "🐟 Un gato puede saltar hasta seis veces la altura de su propio cuerpo en un solo impulso.",
        "💤 Los gatos no pueden mover su mandíbula de lado a lado, por lo que no pueden masticar trozos grandes de comida.",
        "❤️ El corazón de un gato late mucho más rápido que el de un humano, entre 110 y 140 latidos por minuto."
    ];

    if (btnSorpresa && parrafoSorpresa) {
        btnSorpresa.addEventListener('click', () => {
            // Efecto de desvanecimiento inicial
            parrafoSorpresa.style.opacity = '0';
            
            setTimeout(() => {
                // Seleccionar un dato aleatorio
                const randomIndex = Math.floor(Math.random() * datosCuriosos.length);
                parrafoSorpresa.textContent = datosCuriosos[randomIndex];
                
                // Mostrar con animación suave
                parrafoSorpresa.style.opacity = '1';
            }, 200);
        });
    }

    // ==========================================
    // 3. CALCULADORA DE EDAD FELINA
    // ==========================================
    const btnCalcularEdad = document.getElementById('btnCalcularEdad');
    const inputEdadGato = document.getElementById('inputEdadGato');
    const resultadoEdad = document.getElementById('resultadoEdad');

    if (btnCalcularEdad && inputEdadGato && resultadoEdad) {
        btnCalcularEdad.addEventListener('click', () => {
            const edadGato = parseFloat(inputEdadGato.value);

            // Validaciones básicas
            if (isNaN(edadGato) || edadGato < 0) {
                resultadoEdad.textContent = "⚠️ Por favor, ingresa una edad válida en años.";
                resultadoEdad.style.color = "#E74C3C";
                return;
            }

            if (edadGato > 30) {
                resultadoEdad.textContent = "⚠️ ¡Esa edad supera el récord mundial de un gato! Ingresa un número menor a 30.";
                resultadoEdad.style.color = "#E74C3C";
                return;
            }

            let edadHumanaEquivalente = 0;

            // Lógica veterinaria estándar de equivalencia de edad felina
            if (edadGato === 0) {
                edadHumanaEquivalente = 0;
            } else if (edadGato === 1) {
                edadHumanaEquivalente = 15;
            } else if (edadGato === 2) {
                edadHumanaEquivalente = 24;
            } else {
                // A partir del segundo año, cada año felino equivale roughly a 4 años humanos
                edadHumanaEquivalente = 24 + (edadGato - 2) * 4;
            }

            // Mostrar el resultado estilizado
            resultadoEdad.style.color = "#9B59B6";
            resultadoEdad.innerHTML = `🎉 Un gato de <span class="text-white font-bold">${edadGato}</span> ${edadGato === 1 ? 'año' : 'años'} tiene aproximadamente <span class="text-white font-bold">${edadHumanaEquivalente} años</span> en equivalencia humana.`;
        });
    }

});