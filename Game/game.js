alert("Het spel begint. Jij speelt Allison.  Het is donker en je bent onderweg naar je oma. Maar je weet niet hoe je er moet komen, want je auto is stuk. Je staat aan de kant van de weg en er komt een busje langs, wat doe je?");

var vraag1 = prompt("Houd de bus tegen en vraag of je mee mag / Spring voor het busje.", "keuze 1 of keuze 2").toLowerCase();
if (vraag1 === "keuze 1") {
	alert("Je mag mee, je gaat in het busje zitten en jullie rijden samen weg. Hij brengt je naar  een motel, wat ga je doen?");
	}
else{ 
	alert("Je besluit om bij de eerstvolgende auto weer in te stappen verder te gaan.");
}

	var vraag2 = prompt("Je besluit om een kamer te huren in het motel. / Je besluit om bij de eerstvolgende auto weer in te stappen verder te gaan.", "keuze 1 of keuze 2").toLowerCase();
	if (vraag2 === "keuze 1") {
		alert("Het is al laat dus je besluit om een kamer te huren voor een nacht.");

	}
	else{
		alert("Er stopt een auto, je praat met de bestuurder en vraagt of je mee mag rijden. De vrouw in de auto trekt haar geweer en je bent weg gone loessoe de hemel in.");
		}

	alert("Je hebt net genoeg geld om een kamer te huren. De kamer is erg vies, maar het is toch maar voor een nacht. Je begint honger te krijgen. Je weet dat buiten een snoepautomaat staat en wat verderop een café. Wat ga je doen?");

var vraag3 = prompt("Naar de snoepautomaat gaan, want je hebt honger./ Naar het café gaan voor een broodje.", "keuze 1 of keuze 2").toLowerCase();
if (vraag3 === "keuze 1)"){
	alert("Onderweg naar de snoepautomaat kom je een vreemde man tegen. Hij staat in een hoekje te kijken hoe jij je snoepjes haalt. Voordat je wegloopt kijk je hem nog 1 keer aan, hij kijkt weg. Je bent weer in de kamer en je wilt naar bed gaan, totdat je iets langs het raam zag lopen. Je bent nieuwsgierig wat het kan zijn.");
}

else{
	alert("Terwijl je richting het café loopt, steek je de weg over. Er rijdt een vrachtwagen voorbij die je niet had gezien. Je wordt aangereden, je bent zojuist doodgegaan.");
}

var vraag4 = prompt("Je gaat proberen om uit het raam te kijken./ Je doet de deur van je kamer open om te zien wie of wat het is.");
if (vraag4 === "keuze 1"){
	alert("Je kijkt voorzichtig uit het raam. Het is de man die ook bij de snoepautomaat stond! Je doet snel weer het gordijn dicht voordat hij je ziet. Je pakt je telefoon en belt 911, want je vind de man nogal eng. Na enkele minuten komt de politie eraan. De man probeert nog weg te rennen, maar de politie pakt hem. Je gaat nog even met de politie praten en ze zijn erg blij met dat je ze heb gebeld. De man bleek namelijk een kinderlokker te zijn en had al wat verkrachtingen op zijn naam staan.");
}
	else{
		alert("Het is de man die bij de snoepautomaat stond, hij steekt je neer. Je bent dood.");
	}




   
		// Zorgt ervoor dat de website automatisch word gerefreshed na 3 seconden. 
		setTimeout(function(){
			webPageReload();
		}, 3000);

function webPageReload() {
	window.location.reload();
}