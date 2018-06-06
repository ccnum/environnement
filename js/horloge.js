<!--Javascript calendrier issu de Script Masters-->
<!-- http://www.script-masters.com/--> 
	
function HorlogeDynamique() {
	var DateActuel = new Date();
	var heure = DateActuel.getHours();
	var minutes = DateActuel.getMinutes();
	var secondes = DateActuel.getSeconds();

	if (heure == 0) {
		heure = "0" + heure;
		}
	if (minutes <= 9) {
		minutes = "0" + minutes;
		}
	if (secondes <= 9) {
		secondes = "0" + secondes;
		}
	
	Horloge = heure + "h" + minutes;
	

	if (document.getElementById) {
		document.getElementById("clock").innerHTML = Horloge;	
	}

	if (document.layers) { 
		document.clock.document.write(Horloge); 
		document.clock.document.close(); 
	}

	if ((document.all)&&(!document.getElementById)) { 
		document.all["clock"].innerHTML = Horloge;
	}

	setTimeout("HorlogeDynamique()", 1000)
	}
		
	window.onload = HorlogeDynamique;
	
