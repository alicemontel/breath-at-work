function showDailyEnigma(day){
	var content = "";
	switch(day){
		case "1" :
			content="Un peu de patience !";
			break;
		case "2" :
			content="Un peu de patience !";
			break;	
		case "3" :
			content="Un peu de patience !";
			break;	
		case "4" :
			content="Un peu de patience !";
			break;	
		case "5" :
			content="Un peu de patience !";
			break;	
		case "6" :
			content="Un peu de patience !";
			break;	
		case "7" :
			content="Un peu de patience !";
			break;	
		case "8" :
			content="Un peu de patience !";
			break;	
		case "9" :
			content="Un peu de patience !";
			break;
		case "10" :
			content="Un peu de patience !";
			break;	
		default : 
			content="Il n\'y a pas d\'énigme aujourd\'hui !";
			break;
	}
	document.getElementById("titleModal").innerHTML=getEnigma(day);
	document.getElementById("contentModal").innerHTML = content ; 
}

function getEnigma(day){
	var title ="";
	switch(day){
		case "1" : 
			title="Enigme du 20 Juin";
			break;
		case "2" : 
			title="Enigme du 21 Juin";
			break;
		case "3" : 
			title="Enigme du 22 Juin";
			break;	
		case "4" : 
			title="Enigme du 23 Juin";
			break;
		case "5" : 
			title="Enigme du 24 Juin";
			break;
		case "6" : 
			title="Enigme du 27 Juin";
			break;
		case "7" : 
			title="Enigme du 28 Juin";
			break;
		case "8" :
			title="Enigme du 29 Juin";
			break;
		case "9" : 
			title="Enigme du 30 Juin";
			break;
		case "10" : 
			title="Enigme du 1er Juillet";
			break;	
		default : 
			title="Bonjour !";
			break;
	}
	return title;
}

function fillEnigma(year){
	return "<tr><td class=\"td\"><a class=\"musicTileOpened modal-trigger\" href=\"#modalM\">Voir l'énigme du jour</a></td></tr>";

}