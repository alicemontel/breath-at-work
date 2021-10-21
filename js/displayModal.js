function showDay(day){
	var picture = "";
	var content = "";
	switch(day){
		case "1" :
			content="1";
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
		case "1" : // E(entreprise), P(perso), C(communication)
			title="Jour 1, 1er Décembre - Petit point sur la situation"; // 10 commandements du bien-être en entreprise
			break;
		case "2" : // P
			title="Jour 2 - Déconnexion"; // plus de mail en pleine nuit
			break;
		case "3" : // P
			title="Jour 3 - Tous des plantes vertes !"; // s'hydrater et rester en mouvement
			break;	
		case "4" : // E, P
			title="Jour 4 - Ni plus, ni moins"; // Le matin faire une todo list (realisable) et faire ni plus ni moins que ce qui est ecrit dessus
			break;
		//WK
		case "5" : // P
			title="Jour 5 - Nettoyeeer, balayeeeer !"; //faire du tri chez soi, préparer de vieux vêtements à donner/vendre, des livres, jeter des papiers 
			break;
		//WK
		case "6" : // P 
			title="Jour 6 - Quand je marche..."; // faire 10 000 pas
			break;
		case "7" : // E, P
			title="Jour 7 - Un voyant pas si vert que ça... "; //https://www.myhappyjob.fr/labsenteisme-moral-vous-connaissez/
			break;
		case "8" : // P, C
			title="Jour 8 - Petit exercice de concentration "; // Pas de mail, notifications pendant X heures ou minutes
			break;
		case "9" : // P 
			title="Jour 9 - Il faut que tu respires"; // exercice de respiration
			break;
		case "10" : // E, P
			title="Jour 10 - Une histoire de priorité"; // le diagramme urgent/important, le challenge en + : "dire non à un truc ce jour"
			break;
		case "11" : // E, P
			title="Jour 11 - Cultivez vos erreurs !"; // Le droit a l'erreur, podcast Happy Work, lien
			break;
		//WK
		case "12" : // P
			title="Jour 12 - Pas plus de 5 minutes !"; // Si un probleme n'aura plus d'importance dans 5 ans, n'y passe pas plus de 5 minutes
			break;
		//WK
		case "13" : // P
			title="Jour 13 - Instant ludique"; // Un jeu à faire en famille ou entre amis, en présentiel ou en ligne
			break;
		case "14" : // P
			title="Jour 14 - La routine a du bon"; // Equilibre pro/perso passe par les rituels, comme pour la routine avant de dormir
			break;
		case "15" : // E,P
			title="Jour 15 - Le mot magique"; // la gratitude (les compliments Teams ?)
			break;
		case "16" : // P
			title="Jour 16 - Du temps pour soi"; // Finir 1h plus tôt que d'habitude
			break;
		case "17" : // C
			title="Jour 17 - Team building"; // Participer à un event avec l'équipe
			break;
		case "18" : // E,C
			title="Jour 18 -  Quizz surprise !"; // Point sur les commandements de la bienveillance
			break;
		//WK
		case "19" : //E, P
			title="Jour 19 - Petit bilan ";
			//Todo List à toute épreuve !"; // Pour anticiper le dimanche de non productivité, faire des choses le samedi, aide à s'organiser
			break;
		//WK
		case "20" : 
			title="Jour 20 - Flegme et non flemme"; // S'autoriser la non-productivité, ne rien faire de constructif
			break;
		case "21" : // P
			title="Jour 21 - Capitalisation"; // Pas de capitalisme, mais capitalisation - capitaliser sur 1 ou plusieurs éléments encore de côté
			break;
		case "22" : // C
			title="Jour 22 -  Ni plus, ni moins... le retour !"; 
			//Management de la machine à café"; // Faire une pause, croiser du monde ou proposer à des collègues"
			break;
		case "23" : // E
			title="Jour 23 - On se revoit bientôt ! ";
			//Burning up !"; // testmyburnout.com https://www.myhappyjob.fr/evaluez-en-ligne-votre-risque-de-burn-out-sur-testmyburnout/
			break; 
		case "24" : // P, C
			title="Jour 24 - On se revoit bientôt !";
			//Imposture !"; // syndrôme de l'imposteur et demande de Feedback 
			break;
		case "25" : // P
			title="Jour 25 - Joyeux Noël !";
			break;						
	}
	return title;
}
