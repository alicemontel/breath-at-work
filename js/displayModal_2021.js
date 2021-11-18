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
