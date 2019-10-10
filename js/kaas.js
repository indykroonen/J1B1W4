var isKaasGeel = prompt("Is de kaas geel?").toLowerCase(); 
var uwKaas; 

if (isKaasGeel === "ja") {
	var zittenErGatenIn = prompt("Zitten er gaten in?").toLowerCase();
	if (zittenErGatenIn === "ja") {
		console.log("test4");
		var isDeKaasBelachelijkDuur = prompt("Is de kaas belachelijk duur?").toLowerCase();
		if (isDeKaasBelachelijkDuur === "ja") {
			uwKaas = "Emmenthaler"; 
			document.write("Dit is uw kaas: " + uwKaas);
		}
		else if (isDeKaasBelachelijkDuur === "nee") {
			uwKaas = "Leerdammer"; 
			document.write("Dit is uw kaas: " + uwKaas);
		}
	}
	else if (zittenErGatenIn === "nee") {
		var isDeKaasHardAlsSteen = prompt("Is de kaas hard als steen?");
		if (isDeKaasHardAlsSteen === "ja") {
			uwKaas = "Parmigiano Reggiano"; 
			document.write("Dit is uw kaas: " + uwKaas);

		}
		else if (isDeKaasHardAlsSteen === "nee") {
			uwKaas = "Goudse kaas"; 
			document.write("Dit is uw kaas: " + uwKaas);
		}
	}
}

else if (isKaasGeel === "nee") {
	var beschimmeld = prompt("Heeft de kaas blauwe schimmels?");
	if (beschimmeld === "ja") {
		var kaasMetBeschimmeldeKorst = prompt("Heeft de kaas een korst?"); 
		if (kaasMetBeschimmeldeKorst === "ja") {
			uwKaas = "Bleu de Rochbaron";  
			document.write("Dit is uw kaas: " + uwKaas); 
		}
		else if (kaasMetBeschimmeldeKorst === "nee") {
			uwKaas = "Foume d'Ambert";  
			document.write("Dit is uw kaas: " + uwKaas); 
		}
	}
	else if (beschimmeld === "nee") {
		var kaasMetKorst = prompt("Heeft de kaas een korst?"); 
		if (kaasMetKorst === "ja") {
			uwKaas = "Camembert";  
			document.write("Dit is uw kaas: " + uwKaas); 
		}
		else if (kaasMetKorst === "nee") {
			uwKaas = "Mozzarella";  
			document.write("Dit is uw kaas: " + uwKaas); 
		}
	}
}
