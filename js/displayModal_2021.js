function showDay(day){
	var picture = "";
	var content = "";
	switch(day){
		case "1" :
			content="Qui n\'a pas déjà eu du mal à se mettre au travail le matin ? <br/>Et, entre nous, avec le télétravail, c\'est pire non ?! "+
			"<center><img id=\"cowork\" src=\"./img/remote-RoadLight_pixabay.png\"/></center><br/>"+
			"Pas toujours facile quand il faut se traîner du lit à la chaise sur laquelle on va passer la plus grande partie de notre journée. "+
			"On se dit qu\'on serait bien resté·e au lit, roulé·e en boule sous la couette...<br/>"+
			"Et si, juste en quelques minutes, vous pouviez faire comprendre à votre corps qu\'il est l\'heure de se réveiller ?"+
			"Les japonais ont une technique imparable pour cela. Le matin, quelques minutes d\'exercice pour dérouiller son corps et être dans de bonnes dispositions pour la journée. "+
			"En plus, vous n\'avez besoin d\'aucun équipement particulier ! "+
			"Vous voulez essayer ? On vous guide :"+
			"<ol>"+
				"<li>1 minute pour expliquer le Radio Taiso avec France info : <a target=\"blank\" href=\"https://www.francetvinfo.fr/monde/japon/japon-trois-minutes-de-radio-taiso-pour-se-maintenir-en-forme_4690849.html\">Japon : trois minutes de \"radio taïso\" pour se maintenir en forme</a></li>"+
				"<li><a target=\"blank\" href=\"https://www.youtube.com/watch?v=XMOBmeESO4A\">Radio Taiso Movie</a> par Japan-America Society of Houston :</li>"+
				"<br><center><iframe width=\"450\" height=\"350\" src=\"https://www.youtube.com/embed/XMOBmeESO4A\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></center><br/>"+
				"</ol>"+
			"<h6>Le petit + :</h6>"+
			"Avant de commencer votre après-midi et en fin de journée, pourquoi ne pas vous essayer au Shiatsu ? <br/>"+
			"Décidément la culture japonaise à beaucoup à nous apprendre ! <br/>Le Shiatsu est une discipline japonaise <span class=\"psst\">(bon ok, inspirée de la médecine chinoise)</span> "+
			"qui consiste à exercer une pression à des endroits stratégiques du corps pour relâcher la tension. <br/>Intéressé·e ? "+
			"On vous propose un petit tuto <span class=\"psst\">(parmi tant d'autres !)</span>, 5 minutes chrono, qui vous fera travailler votre anglais en bonus !<span class=\"psst\">(sous-titres FR dispos)</span>: "+
			"<a target=\"blank\" href=\"https://www.youtube.com/watch?v=uUNi-lqZz84\">Auto-Shiatsu de 5 minutes pour la mobilité du cou et des épaules | Suivez la routine d'auto-massage avec tutoriel</a>, sur la chaine de Natural Mobility."+
			" Attention cependant, le shiatsu reste une discipline médicale, personne ne saura mieux vous conseiller qu\'un professionnel donc.";
			break;
		case "2" :		
			content="2";
			break;
		case "3" : 
			content="3";
			break;	
		case "4" : 
			content="4";
			break;
		case "5" : 
			content="5";
			break;
		case "6" :
			content="6";
			break;
		case "7" : 
			content="7";
			break;
		case "8" : 
			content="8";
			break;
		case "9" : 
			content="9";
			break;
		case "10" : 
			content="10";
			break;
		case "11" : 
			content="11";
			break;
		case "12" : 
			content="12";
			break;
		case "13" : 
			content="13";
			break;
		case "14" : 
			content="14";
			break;
		case "15" : 
			content="15";
			break;
		case "16" : 
			content="16";
			break;
		case "17" : 
			content="17";
			break;
		case "18" : 
			content="18";
			break;
		case "19" : 
			content="19";
			break;
		case "20" : 
			content="20";
			break;
		case "21" : 
			content="21";
			break;
		case "22" : 
			content="22";
			break;
		case "23" : 
			content="23";
			break;
		case "24" : 
			content="24";
			break;
		case "25" : 
			content="25";
			break;						
	}
	document.getElementById("titleModal").innerHTML=getTitle(day);
	document.getElementById("contentModal").innerHTML = content ; 
}

function getTitle(day){
	var title ="";
	switch(day){
		case "1" : 
			title="Exercice matinal";
			break;
		case "2" : 
			title="Un peu de concentration !";
			break;
		case "3" : 
			title="Yogi yoga";
			break;	
		//WK	
		case "4" : 
			title="La communication non violente";
			break;
		//WK
		case "5" : 
			title="TV - plaid - chocolat chaud.";
			break;
		case "6" : 
			title="Cadeau utilo-écolo !";
			break;
		case "7" : 
			title="Dessiner c'est gagner !";
			break;
		case "8" :
			title="Merci";
			break;
		case "9" : 
			title="Manager...pas facile !";
			break;
		case "10" : 
			title="Petite introduction à la méditation";
			break;
		//WK
		case "11" :
			title="Les accords Toltèques";
			break;
		//WK
		case "12" : 
			title="Home cooking";
			break;
		case "13" : 
			title="Partez serein·e";
			break;
		case "14" :
			title="Les méfaits du présentéisme";
			break;
		case "15" : 
			title="Cerveau déconnecté";
			break;
		case "16" :
			title="On joue ?";
			break;
		case "17" : 
			title="Petite introduction à la cohérence cardiaque";
			break;
		//WK
		case "18" : 
			title="Quelques idées de Podcasts...";
			break;
		//WK
		case "19" : 
			title="Hypersensible - hypergénial !";
			break;
		case "20" : 
			title="Egalité";
			break;
		case "21" :
			title="Souffrez-vous de réunionite aigue ?";
			break;
		case "22" : 
			title="Les piliers de la bienveillance en entreprise"; 
			break;
		case "23" : 
			title="La goutte d'eau";
			break; 
		case "24" :
			title="Apéro dinatoire";
			break;
		case "25" :
			title="Joyeux Noël !";
			break;						
	}
	return title;
}
