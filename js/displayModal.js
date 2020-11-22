function showDay(day){
	var picture = "";
	var content = "";
	switch(day){
		case "1" : 
			picture="images/chat.jpg";
			content="truc 1";
			break;
		case "2" :
		picture="images/chat.jpg";		
			content="truc 2";
			break;
		case "3" : 
			picture="images/chat.jpg";
			content="truc 3";
			break;	
		case "4" : 
			picture="images/chat.jpg";
			content="truc 4";
			break;
		case "5" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "6" :
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "7" : 
			picture="images/chat.jpg";
			content="La matrice d'Eisenhower, ça vous parle ? Ne prenez pas peur, on parle de matrice mais celle-ci n'est pas trop compliquée à appréhender ! <br/>";
			content+="Il s\'agit d\'un outil de gestion du temps permettant de classer les tâches et de les prioriser. Finies les minutes d'incertitude sur que faire en premier,";
			content+="Triez vos idées, puis prenez les une par une ! <br/>";
			content+="La matrice se présente ainsi : l\'axe horizontal représente l\'urgence d\'une tâche et l\axe vertical représente son importance. <br/>";
			content+="Une fois la matrice remplie, appliquez le traitement suivant : <br/>";
			content+="<ul><li>Tâches importantes et urgentes : à faire soi-même, en premier</li><li>Tâches importantes mais peu urgentes : à planifier et à faire soi-même</li><li>Tâches urgentes mais peu importantes : c\'est l\'occasion d\'apprendre à déléguer !</li><li>Tâches peu urgentes et peu importantes : sont-elles vraiment pertinentes ? Pourriez-vous les abandonner ?</li></ul>";
			break;
		case "8" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "9" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "10" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "11" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "12" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "13" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "14" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "15" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "16" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "17" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "18" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "19" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "20" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "21" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "22" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "23" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "24" : 
			picture="images/chat.jpg";
			content="truc "+ day;
			break;
		case "25" : 
			picture="images/chat.jpg";
			content="Aujourd'hui, pas d'astuce travail, c'est Noël, c'est férié ! </br> La QVT ça passe aussi et surtout par l'équilibre perso/pro, alors chérissez l'instant présent !";
			break;						
	}
	document.getElementById("titleModal").innerHTML=getTitle(day);
	document.getElementById("contentModal").innerHTML = content ; 
	document.getElementById("pictureModal").src = picture ;
}

function getTitle(day){
	var title ="";
	switch(day){
		case "1" : // E(entreprise), P(perso), C(communication)
			title="Jour 1, 1er Décembre - Petit point sur la situation"; // 10 commandements du bien-être en entreprise
			break;
		case "2" : // P
			title="Jour 2 - Déconnexion"; // plus de mail en pleine nuit
			break;
		case "3" : // P
			title="Jour 3 - Tous des plantes vertes !"; // s'hydrater et rester en mouvement
			break;	
		case "4" : // E
			title="Jour 4 - Le mot magique"; // la gratitude (les compliments Teams ?)
			break;
		//WK
		case "5" : // P
			title="Jour 5 - 1km à pieds ..."; // faire 10 000 pas
			break;
		//WK
		case "6" : // P 
			title="Jour 6 - Rituels"; // Equilibre pro/perso passe par les rituels, comme pour la routine avant de dormir
			break;
		case "7" : // E, P
			title="Jour 7 - Une histoire de priorité"; // le diagramme urgent/important, le challenge en + : "dire non à un truc ce jour"
			break;
		case "8" : // P
			title="Jour 8 - Pas plus de 5 minutes !"; // Si un probleme n'aura plus d'importance dans 5 ans, n'y passe pas plus de 5 minutes
			break;
		case "9" : // P 
			title="Jour 9 - Il faut que tu respires"; // exercice de respiration
			break;
		case "10" : // E, P
			title="Jour 10 - Ni plus, ni moins"; // Le matin faire une todo list (realisable) et faire ni plus ni moins que ce qui est ecrit dessus
			break;
		case "11" : // E, P, C
			title="Jour 11 - Ouvrez grand les oreilles"; // Podcast happy work 
			break;
		//WK
		case "12" : // P
			title="Jour 12 - Instant ludique"; // Un jeu à faire en famille ou entre amis, en présentiel ou en ligne
			break;
		//WK
		case "13" : // P
			title="Jour 13 - Tourner dans le vide"; //faire du tri chez soi, préparer de vieux vêtements à donner/vendre, des livres, jeter des papiers 
			break;
		case "14" : // P, C
			title="Jour 14 - Petit exercice de concentration "; // Pas de mail, notifications pendant X heures ou minutes
			break;
		case "15" : // C
			title="Jour 15 - Management de la machine à café"; // Faire une pause, croiser du monde ou proposer à des collègues"
			break;
		case "16" : // P
			title="Jour 16 - Du temps pour soi"; // Finir 1h plus tôt que d'habitude
			break;
		case "17" : // E, P
			title='Jour 17 - Un voyant pas si vert que ça... '; //https://www.myhappyjob.fr/labsenteisme-moral-vous-connaissez/
			break;
		case "18" : // C
			title="Jour 18 - Team building"; // Participer à un event avec l'équipe
			break;
		//WK
		case "19" : //E, P
			title="Jour 19 - Todo List à toute épreuve !"; // Pour anticiper le dimanche de non productivité, faire des choses le samedi, aide à s'organiser
			break;
		//WK
		case "20" : 
			title="Jour 20 - Flegme et non flemme"; // S'autoriser la non-productivité, ne rien faire de constructif
			break;
		case "21" : // P
			title="Jour 21 - Burning up !"; // testmyburnout.com https://www.myhappyjob.fr/evaluez-en-ligne-votre-risque-de-burn-out-sur-testmyburnout/
			break;
		case "22" : // E, C
			title="Jour 22 - Quizz surprise !"; // Point sur les commandements de la bienveillance
			break;
		case "23" : // E
			title="Jour 23 - Parlons capital"; // Pas de capitalisme, mais capitalisation - capitaliser sur 1 ou plusieurs éléments encore de côté
			break; 
		case "24" : // P, C
			title="Jour 24 - Imposture !"; // syndrôme de l'imposteur et demande de Feedback 
			break;
		case "25" : // P
			title="Jour 25 - Joyeux Noël !";
			break;						
	}
	return title;
}