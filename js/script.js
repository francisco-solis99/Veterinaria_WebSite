const typed  = new Typed('.typed', {
     strings: [
         '<i class="mascota">Gato</i>', 
         '<i class="mascota">Perro</i>', 
         '<i class="mascota">Tortuga</i>', 
         '<i class="mascota">Conejo</i>'
        ],



stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 400, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

});



// EFECTO SCROLLEAR 
window.addEventListener('scroll', () => {
	const header = document.getElementById('content-move1'); //se guarad en una constante
	header.style.opacity = '1' - window.pageYOffset / 650; //cambiar opacidad cuando llega a un punto en Y al hacer scroll en la pagina
});

window.addEventListener('scroll', () => {
	const services = document.getElementById('content-move2'); //se guarad en una constante
	services.style.opacity = '2' - window.pageYOffset /800; //cambiar opacidad cuando llega a un punto en Y al hacer scroll en la pagina
});