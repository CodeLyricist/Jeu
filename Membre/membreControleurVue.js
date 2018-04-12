function afficherInfoMembre(){
	$("#entete").hide();
	$("#contenu").hide();
	$("#contenuMembre").show();
	$("#message").hide();
}

function afficherSeConnecter(){
	
	afficherInfoMembre();
	var formConnexion = " 	<div class=\"container pt-5\"> "; 

	formConnexion+=" 		<div class=\"row pt-5\" style=\"margin-top: 2%;\"> "; 
	formConnexion+=" 			<div class=\"col-3\"></div> "; 
	formConnexion+=" 			<div class=\"col-6\"> "; 
	formConnexion+=" 				<div class=\"card p-5 gray-box\"> "; 
	formConnexion+=" 					<h3 class=\"text-muted pb-2\">Se connecter</h3> "; 
	formConnexion+=" 					<!-- formulaire ici --> "; 
	formConnexion+=" 					<form id=\"formConnexion\"> "; 
	formConnexion+=" 						  <div class=\"form-group\"> "; 
	formConnexion+=" 								<label for=\"courriel\">Courriel</label>"; 
	formConnexion+=" 								<input type=\"email\" class=\"form-control\" name=\"courriel\" id=\"courriel\" placeholder=\"Courriel\" value=\"\"/> "; 
	formConnexion+=" 						  </div> "; 
	formConnexion+=" 						  <div class=\"form-group\">";
	formConnexion+=" 								<label for=\"passwd\">Mot de passe</label>"; 
	formConnexion+=" 								<input type=\"password\" class=\"form-control\" name=\"passwd\" id=\"passwd\" placeholder=\"Mot de passe\" value=\"\"/> "; 
	formConnexion+=" 						  </div> "; 
	formConnexion+=" 						  <div class=\"form-check\"> "; 
	formConnexion+=" 								<input type=\"checkbox\" class=\"form-check-input\" name=\"rappelezmoi\" id=\"rappelezmoi\"> "; 
	formConnexion+=" 								<label class=\"form-check-label text-center\" for=\"rappelezmoi\">Me rappeler</label> "; 
	formConnexion+=" 						  </div> "; 
	formConnexion+=" 							<button type=\"button\" onclick=\"connecterMembre()\" class=\"btn btn-primary\" style=\"width: 40%; border-color: transparent; margin-top: 5%;\">Se connecter</button> "; 
	formConnexion+=" 					</form> "; 
	formConnexion+=" 				</div> "; 
	formConnexion+=" 				<a id=\"retourIndex\" href=\"#\" class=\"mt-5\" onclick=\"rendreVisibleAccueil()\" style=\"float: right;\">Retour à l'accueil</a> "; 
	formConnexion+=" 			</div> "; 
	formConnexion+=" 			<div class=\"col-3\"></div> "; 
	formConnexion+=" 		</div> "; 
	
	document.getElementById("contenuMembre").innerHTML = formConnexion;

}

function afficherNavMembre(pseudo,role){

	var barnav = " 		<ul class=\"navbar-nav ml-auto\"> ";
	
	if (role === "ADMIN"){
		barnav+= "<li class=\"nav-item\">";
		barnav+= "<a class=\"nav-link\" href=\"#\" onclick=\"test();\">";
		barnav+= "<span id=\"icon_reglage\" style=\"vertical-align: -30%;\"></span>Gestion des usagers</a></li>";
	} else if (role = "UTILISATEUR"){
		barnav+= "<li class=\"nav-item\"><a class=\"nav-link\" href=\#\" style=\"padding-left: 20px;\">";
		barnav+= "mes infos</a></li>";
	}
	
	barnav+=" 			<li class=\"nav-item\"> "; 
	barnav+=" 			  <a class=\"nav-link\" href=\"#\"> "; 
	barnav+= pseudo;
	barnav+=" 			  </a> "; 
	barnav+=" 			</li> "; 
	barnav+=" 			<li class=\"nav-item\"> "; 
	barnav+=" 			  <a class=\"nav-link\" href=\"#\" onclick=\"deconnecterMembre();afficherContenuAccueil();afficherNavDepart()\" style=\"padding-left: 20px;\"> "; 
	barnav+=" 				Se déconnecter "; 
	barnav+=" 			  </a> "; 
	barnav+=" 			</li> "; 
	
	if (role === "UTILISATEUR"){
		barnav+= "<li class=\"nav-item\">";
		barnav+= "<a class=\"nav-link\" href=\"#\" style=\"padding-left: 20px;\"><span id=\"panier\"></span></a></li>\n";
	}
	barnav+=" 		</ul> ";
	
	document.getElementById("navigation").innerHTML = barnav;
		
}

function devenirMembre(){
	afficherInfoMembre();

	var inscription = " 	<div class=\"container\"> "; 
	inscription+=" 		<div class=\"row pt-4\" style=\"margin-top: 3%;\"> "; 
	inscription+=" 			<div class=\"col-3\"></div> "; 
	inscription+=" 			<div class=\"col-6\"> "; 
	inscription+=" 				<div class=\"card p-5\"> "; 
	inscription+=" 					<h3>S'inscrire</h3> "; 
	inscription+=" 					<form name=\"formInscription\" id=\"formInscription\"> ";
	inscription+=" 						  <div class=\"form-group\"> "; 
	inscription+=" 							<label for=\"pseudo\">Pseudonyme</label> "; 
	inscription+=" 							<input type=\"text\" class=\"form-control\" name=\"pseudo\" id=\"pseudo\" "; 
	inscription+=" 								pattern=\"^([a-zA-ZÀ-ÿ]{1,10})+((\\s|-)?([a-zA-ZÀ-ÿ]{1,10}))$\" required> "; //essayer de le regler avec les expressions régulières
	inscription+=" 						  </div> "; 	
	inscription+=" 						  <div class=\"form-group\"> "; 
	inscription+=" 							<label for=\"courriel\">Courriel</label> "; 
	inscription+=" 							<input type=\"email\" class=\"form-control\" name=\"courriel\" id=\"courriel\" placeholder=\"Courriel\" required> "; 
	inscription+=" 						  </div> "; 
	inscription+=" 						  <div class=\"form-group\"> "; 
	inscription+=" 							<label for=\"datenaissance\">Date de naissance</label> "; 
	inscription+=" 							<input type=\"date\" class=\"form-control\" name=\"datenaissance\" id=\"datenaissance\" placeholder=\"aaaa-mm-jj\" min=\"1899-02-26\" max=\"2000-02-26\" required> "; 
	inscription+=" 						  </div> "; 
	inscription+=" 						  <div class=\"form-group\"> "; 
	inscription+=" 							<label for=\"motDePasse\">Mot de passe</label> "; 
	inscription+=" 							<input type=\"password\" class=\"form-control\" name=\"motdepasse\" id=\"motdepasse\" placeholder=\"Mot de passe\" required> "; 
	inscription+=" 						  </div> ";
	inscription+="  						  <div class=\"form-group\"> "; 
	inscription+="  								<label for=\"avatar\">Pochette</label> "; 
	inscription+="  								<input type=\"file\" class=\"form-control\" name=\"avatar\" id=\"avatar\"/> "; 
	inscription+="  						  </div> ";
	inscription+=" 						  <button name=\"submit\" type=\"submit\" onclick=\"enregistrer();\" class=\"btn btn-primary orange-gradient\" style=\"width: 35%; border-color: transparent; margin-top: 5%;\">S'incrire</button> "; 
	inscription+=" 					</form> "; 
	inscription+=" 				</div> "; 
	inscription+=" 				<a id=\"retourIndex\" href=\"#\" class=\"mt-5\" onclick=\"rendreVisibleAccueil()\" style=\"float: right;\">Retour à l'accueil</a> ";
	inscription+=" 			</div> "; 
	inscription+=" 			<div class=\"col-3\"></div> "; 
	inscription+=" 		</div> "; 
	inscription+=" 	</div> ";

	document.getElementById("contenuMembre").innerHTML = inscription;
}

function membreVue(reponse) {
	if(reponse.OK){
		rendreVisibleAccueil();
		afficherNavMembre(reponse.Membre.pseudonyme,reponse.Membre.role);
		localStorage.setItem("pseudo", JSON.stringify(reponse.Membre.pseudonyme));
		localStorage.setItem("role", JSON.stringify(reponse.Membre.role));
		
	} else {
		var msgAlerte = "<div class=\"container pt-5\">";
			msgAlerte+= "<div class=\"row\">";
			msgAlerte+= "<div class=\"col-3\"></div>";
			msgAlerte+= "<div class=\"alert alert-danger col-6\" role=\"alert\"> Email ou mot de passe invalide </div>";
			msgAlerte+= "<div class=\"col-3\"></div>";
			msgAlerte+= "</div>";
			msgAlerte+= "</div>";
		document.getElementById("message").innerHTML = msgAlerte;
		$("#message").show();
	}
	
}