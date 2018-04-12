
function afficherContenuAccueil(){
		
	if (localStorage.getItem("pseudo") === null){
		afficherNavDepart();
	} else {
		var pseudo = JSON.parse(localStorage.getItem("pseudo"));
		var role = JSON.parse(localStorage.getItem("role"));
		afficherNavMembre(pseudo,role);
	}
	afficherEnteteAccueil();
	rendreVisibleAccueil();
}

function supprimerCourrielCache(){
		
	if (localStorage.getItem("pseudo") !== null){
		localStorage.removeItem('pseudo');
	}
	
	if (localStorage.getItem("role") !== null){
		localStorage.removeItem('role');
	}
	
}
function afficherNavDepart(){
	
	var barnav = " 		<ul class=\"navbar-nav ml-auto\"> "; 
	barnav+=" 			<li class=\"nav-item\"> "; 
	barnav+=" 			  <a class=\"nav-link\" href=\"#\" onclick=\"devenirMembre();\"> "; 
	barnav+=" 				Devenir membre "; 
	barnav+=" 			  </a> "; 
	barnav+=" 			</li> "; 
	barnav+=" 			<li class=\"nav-item\"> "; 
	barnav+=" 			  <a class=\"nav-link\" href=\"#\" onclick=\"afficherSeConnecter();\" style=\"padding-left: 20px;\"> "; 
	barnav+=" 				Se connecter "; 
	barnav+=" 			  </a> "; 
	barnav+=" 			</li> "; 
	barnav+=" 		</ul> ";
	
	document.getElementById("navigation").innerHTML = barnav;
		
}

function afficherEnteteAccueil(){
	var entete = " <div class=\"row\" style=\"margin-top: 2%;\">";
	entete += " <div class=\"col-md-2\"></div>";
	entete += " <div class=\"col-md-10\">Accueil</div>";
	entete += " <div class=\"col-md-2\"></div></div>";
	document.getElementById("entete").innerHTML = entete;
}


function rendreVisibleAccueil(){
	$("#entete").show();
	$("#contenu").show();
	$("#contenuMembre").hide();
	$("#message").hide();
}