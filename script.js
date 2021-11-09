const bereich = document.querySelector('#formular');
const zweiterBereich = document.querySelector('#zweiterFormular');
const eingabeInput = document.querySelector('#ingrediente');
const Beläge = document.querySelector('#Belag');
const ablage = document.querySelector('#ausgabe');
const msg = document.querySelector('.msg');


bereich.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();
	
	if(eingabeInput.value === '') {
		msg.innerHTML = '<h4>Keine Zutat Angegeben</h4>';
		msg.classList.add('error');
		setTimeout(() => msg.remove(), 2000);
	} else {
		const anzeige = document.createElement('h4');
		anzeige.appendChild(document.createTextNode(eingabeInput.value));
		ablage.appendChild(anzeige);
		anzeige.style.color = 'blue';
		anzeige.classList.add('anzeige');
	}
	// clear fields
	eingabeInput.value = '';
 }
