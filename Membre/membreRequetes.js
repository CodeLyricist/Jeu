//requêtes films
function enregistrer(){
	//var formFilm = new FormData(document.getElementById('form1'));
	//formFilm.append('action','enregistrer');
	var form = $('#formInscription')[0];
	var formMembre = new FormData(form);
	formMembre.append('action','enregistrer');
	
	$.ajax({
		type : 'POST',
		url : 'Membre/membreControleur.php',
		data : formMembre,
		dataType : 'text', //text pour le voir en format de string
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){ alert(reponse);
		},
		error : function (err){
		}
	});
}

function connecterMembre(){
	
	var form = $('#formConnexion')[0];
	var formMembre = new FormData(form);
	formMembre.append('action','connecterMembre');
	$.ajax({
		url : 'Membre/membreControleur.php',
		data : formMembre,
		type : 'POST',
		dataType : 'json',
		enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
		success : function (reponse){ //alert(reponse);
					membreVue(reponse);
		},
		error : function (err){
		}
	});
}

function deconnecterMembre(){
	
	supprimerCourrielCache();
	
	var postData = { action : "deconnecterMembre" };
	
	$.ajax({
		url : 'Membre/membreControleur.php',
		data : postData,
		type : 'POST',
		dataType : 'json',
		success : function (reponse){ //alert(reponse);
		},
		error : function (err){
		}
	});
}