alert("Game begint. Maak een keus, blij of niet");

var vraag1 = prompt("Blij, niet blij.");
if (vraag1 === "niet blij"){
	alert("died.");
}
else {
	alert("yay, welkom.");
	var vraag2 = prompt("Waarom ben je blij?: Mijn depressie is over / Fristi gedronken. Keuze 1 of 2?"); 
	if (vraag2 === "2") {
		alert("Door al die Fristi moet je naar de wc");
		var vraag3 = prompt("Naar welke kleur wc ga je? Groen of paars?");
		if (vraag3 === "paars"){
			alert("Goeie keus");
			alert("Je bent klaar en wilt nu gaan eten.");
			var vraag4 = prompt("Wat ga je eten? Steak and kidney pie of fried tomatoes? Keuze 1 of 2?");
			if (vraag4 === "2"){
				alert("Lekker. Opeens wordt random je gebeld door Draco en vraagt of je even langs wilt komen om te chillen met Harry, Ron en Hermione.");
				alert("Je gaat met de vliegende auto van mr. Weasly naar Hogwarts. Onderweg kom je deatheaters tegen, hoe ga je ze bevechten?");
				var vraag5 = prompt("Welke spell gebruik je? Crucio of Expelliarmus? Keuze 1 of 2?");
				if (vraag5 === "2") {
					alert("De deatheaters zijn weg, alleen nu is de auto wel stuk. Je besluit om verder te gaan op je broomstick.");
					alert("Je vliegt door naar Hogwarts en Draco staat daar op je te wachten. Hij neemt je mee naar de rest en jullie gaan naar de Schrieking Schack.");
					alert("Jullie komen daar aan en opeens staat Voldemort daar.");
					var vraag6 = prompt("Wat doe je? Vechten met voldemort of gillen en wegrennen. Keuze 1 of 2?");
					if (vraag6 === "1") {
						alert("Jullie gaan vechten met Voldemort. Draco probeert Expelliarmus, maar het werkt niet.");
						alert("Hermione geeft haar wand aan jou en jij gebruikt Wingardium Leviosa. Je laat Voldemort door de lucht vliegen en gooit hem links en recths tegen de muur aan.");
						alert("Voldemort ligt op de grond en jullie rennen the Schrieking Schack uit, door de Forbidden Forest richting Hagrid's hut.");
						alert("Onderweg komen jullie een Acromantula tegen. Wat doe je?");
						var vraag7 = prompt("Snel wegrennen en hopen dat hij je niet pakt / vechten met de Acromantula? Keuze 1 of 2?");
						if (vraag7 === "2") {
							alert("Je gaat vechten met de 2 meter grote spin.");
							alert("Ron pakt zijn wand en gebruikt Bombardia Maxima. De Acromantula ontploft uitelkaar."); 
							alert("Je komt aan bij Hagrid zijn hutje.");
							alert("Je wordt wakker, het was allemaal een droom.");
						}
						else{
							alert("De le spin is sneller pakt je, u ded");
						}
					}
					else{
						alert("Je rent weg, Voldemort cursed je van achter en je gaat dood");
					}
				}
				else{
					alert("Dit is een unforgivable curse, the Ministry of Magic komt erachter en stuurt je naar Azkaban.");
				}
			}
			else{
				alert("De steak-and-kidney pie, is bedorven, je gaat weg gone loessoe de hemel in.");
			}
		}
		else { 
			alert("De groene wc is een weg naar The Ministry of Magic, Voldemort is daar en vermoord je.");
		}	
	}
	else {
		alert("Je kan niet van je depressie afkomen, je bent dood.");
	}
}






		setTimeout(function(){
			webPageReload();
		}, 2000);

function webPageReload() {
	window.location.reload();
}