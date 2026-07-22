function actualizarHora() {
    const ahora = new Date();
    
    // Formato de hora HH:mm:ss
    document.getElementById("hora").textContent = ahora.toLocaleTimeString("es-PE", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    // Formato exacto: "Miércoles, 22 Jul 2026"
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"];
    
    const diaNombre = dias[ahora.getDay()];
    const diaNum = ahora.getDate();
    const mesNombre = meses[ahora.getMonth()];
    const anio = ahora.getFullYear();

    document.getElementById("fecha").textContent = `${diaNombre}, ${diaNum} ${mesNombre} ${anio}`;
}

setInterval(actualizarHora, 1000);
actualizarHora();