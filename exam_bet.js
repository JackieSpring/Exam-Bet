/*
 * Bypass di alcune funzioni degli esami di exam.net
 * [ Cosa può fare? ]
 * - Disattiva il focus sull pagina
 * - Toglie il fullscreen e i controlli in background associati
 * - Abilita il right-click del mouse
 *
 * [ !! ATTENZIONE !! ]
 * - !! Exam.net controlla la dimensione della finestra!! assicurarsi che la finestra 
     del browser rimanga sempre di grandi dimensioni
     ( se avete accesso a javascript, assicuratevi che (screen.width - window.innerWidth < 200))
 * - non rimuove il controllo sulla virtual machine
 * - non rimuove il blocco sugli shortcut (anche se è possibile usarne svariati, 
     come ctrl-tab, ctrl-i, ctrl-j, ma ancora manca una lista esaustiva)
*/

console.log("STARTED")

window.addEventListener("blur", function(event) {
	event.stopImmediatePropagation()
}, false);

document.addEventListener("contextmenu", function(event) {
	event.stopImmediatePropagation()
})

for ( var evt of "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange".split(" ") )
	document.addEventListener(evt, (event) => {
		if ( document.webkitFullscreenElement || document.msFullscreenElement || document.fullscreenElement || document.mozFullScreenElement )
			document.exitFullscreen()
		event.stopImmediatePropagation()
	})


