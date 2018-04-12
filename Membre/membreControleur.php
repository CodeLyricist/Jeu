<?php
	require_once("../includes/modele.inc.php");
	$tabRes=array();
	
	function validerCourrielPseudo($courriel,$pseudo){
		global $tabRes;
		$requetep = "Select pseudonyme from membre where pseudonyme=?";
		try{
			 $unModelep=new JeuModele($requetep,array($pseudo));
			 $stmtp=$unModelep->executer();
			 if($ligne=$stmtp->fetch(PDO::FETCH_OBJ)){
			    $tabRes['err_pseudo'] = true;
			}
		}catch(Exception $e){
		}finally{
			unset($unModelep);
		}
		
		$requetec = "Select courriel from table_connexion where courriel=?";
		try{
			 $unModelec=new JeuModele($requetec,array($courriel));
			 $stmtc=$unModelec->executer();
			 if($ligne=$stmtc->fetch(PDO::FETCH_OBJ)){
			    $tabRes['err_courriel'] = true;
			}
		}catch(Exception $e){
		}finally{
			unset($unModelec);
		}	
	}
	
	function enregistrer(){
		global $tabRes;
		$pseudo=$_POST['pseudo'];
		$courriel=$_POST['courriel'];
		$motdepasse=$_POST['motdepasse'];
		$membre_avatar=$_POST['avatar'];
		$tabRes['err_pseudo'] = false;
		$tabRes['err_courriel'] = false;
		
		validerCourrielPseudo($courriel,$pseudo);
		
		if($tabRes['err_pseudo'] == false && $tabRes['err_courriel'] == false){
			
			try{
				$unModele=new JeuModele();
				$avatar=$unModele->verserFichier("avatar", "avatar", "mario.png",$membre_avatar);
				$requete="INSERT INTO membre(pseudonyme,avatar) VALUES(?,?)";
				$unModele=new JeuModele($requete,array($pseudo,$avatar));
				$stmt=$unModele->executer();
				
			}catch(Exception $e){
			}finally{
				unset($unModele);
			}
			
			try{
				
				$unModeledeux=new JeuModele();
				$requetedeux="INSERT INTO table_connexion(idmembre,courriel,motdepasse) VALUES ((SELECT idmembre from membre WHERE pseudonyme=?),?,?)";
				$unModeledeux=new JeuModele($requetedeux,array($pseudo,$courriel,$motdepasse));
				$stmtdeux=$unModeledeux->executer();

			}catch(Exception $e){
			}finally{
				unset($unModeledeux);
			}

			$tabRes['action']="enregistrer";
		}
	}

	function connecterMembre(){
		global $tabRes;
		$courriel = $_POST["courriel"];
		$motdepasse = $_POST["passwd"];

		$tabRes['action']="connecterMembre";
		$requete = "Select pseudonyme, role from table_connexion natural join membre where courriel=? AND motdepasse=?";
		try{
			 $unModele=new JeuModele($requete,array($courriel,$motdepasse));
			 $stmt=$unModele->executer();
			 $tabRes['Membre']=array();
			 if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['Membre']=$ligne;
				$tabRes['OK']=true;
				session_start();
			}
			else{
				$tabRes['OK']=false;
			}
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}

	
	function deconnecterMembre(){
		
		$tabRes['action']="deconnecterMembre";
		//
		// destruction de la session active
		// Code provenant du site suivant:
		// http://php.net/manual/fr/function.session-destroy.php
		//


		// Initialize the session.
		// If you are using session_name("something"), don't forget it now!
		session_start();

		// Unset all of the session variables.
		$_SESSION = array();

		// If it's desired to kill the session, also delete the session cookie.
		// Note: This will destroy the session, and not just the session data!
		if (ini_get("session.use_cookies")) {
			$params = session_get_cookie_params();
			setcookie(session_name(), '', time() - 42000,
				$params["path"], $params["domain"],
				$params["secure"], $params["httponly"]
		);
		}

		// Finally, destroy the session.
		session_destroy();
	}
	//******************************************************
	//Contrôleur
	
	//$action  reçoit la valeur de action par membreRequetes.js
	$action = $_POST['action'];

	switch($action){
		case "enregistrer" :
			enregistrer();
		break;
		case "connecterMembre" :
			connecterMembre();
		break;
		case "deconnecterMembre" :
			deconnecterMembre();
		break;
	}
    echo json_encode($tabRes,JSON_UNESCAPED_SLASHES);
?>