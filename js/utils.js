 $(document).ready(function(){
    $('.modal').modal();
	$('.collapsible').collapsible();
	$('.dropdown-trigger').dropdown();
	$('.dropdown-content').on('onclick', function(event) {
		event.stopPropagation();
		});
  });

$(document).on('click', '.dayTileOpened', function(e){
	var day = e.target.innerHTML;
	showDay(day);
});

$(document).on('click', '.musicTileOpened', function(e){
	var day = document.getElementById("propDay").innerHTML;
	showDailyEnigma(day);
});

$(document).on('click', '.modalHistory', function(e){
	var day = e.target.id;
	showDay(day);
});

$(document).on('click', '.modalHistoryMusic', function(e){
	var day = e.target.id;
	showDailyEnigma(day);
});

function getMenu() {
	var menu ="<a href=\"#!\" class=\"brand-logo\"><img src=\"./img/baw.PNG\"/></a>"+
		"<ul class=\"right hide-on-med-and-down\">"+
			"<li class=\"notli\"><a class=\"menu\" href=\"home.html\">Accueil</a></li>"+
			"<li class=\"notli\"><a class=\"menu\" href=\"index.html\">Musique !</a></li>"+
		    "<li class=\"notli\"><a class=\"menu\" href=\"calendar_2021.html\">Calendrier</a></li>"+		
			"<li class=\"notli\"><a class=\"menu\" href=\"about.html\">A propos</a></li>"+
		"</ul>";
	return menu;
}

function getBforeXmas(){
	today=new Date();
	var cmas=new Date(today.getFullYear(), 11, 25);
	var content = "";
	if (today.getMonth()==11 && today.getDate()>25) {
		cmas.setFullYear(cmas.getFullYear()+1); 
	}
	if(today.getMonth()==11 && today.getDate()==25) {
		content = "Joyeux Noël !";
	} else if (today.getMonth()==11 && today.getDate() ==24){
		content = "Passez un bon réveillon !";
	} else {
		var one_day=1000*60*60*24;
		content = "Il reste "+Math.ceil((cmas.getTime()-today.getTime())/(one_day))+" jours avant Noël !"; 
	}
	return content ; 
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.7);
}

//Save the value function - save it to localStorage as (ID, VALUE)
function saveValue(elem,year){
    var id = elem.innerHTML+year;  // get the sender's id to save it . 
    var val = "open"; // get the value. 
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override .
	elem.className="dayTileOpened modal-trigger";
}

//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue(key){
    if (!localStorage.getItem(key)) {
        return "closed";// You can change this to your default value. 
    }
    return localStorage.getItem(key);
}

function fillCalendar(year){
	today=new Date();
	todayDay = today.getDate();
	todayMonth = today.getMonth();
	todayYear = today.getFullYear();
	let arr = Array.from({length: 24}, (_, i) => i + 1);
	shuffle(arr);
	var calendarContent ="";
	//xmas
	key=25+todayYear;
	if(todayYear>year || getSavedValue(key)=="open" ){
		document.getElementById("xmasday").innerHTML="<tr><td class=\"td\"><a class=\"dayTileOpened modal-trigger\" onclick=\"javascript:saveValue(this, now.getFullYear());\" href=\"#modal1\">25</a></td></tr>";
	} else if (25<=todayDay && todayMonth==11 && getSavedValue(key)=="closed"){
		document.getElementById("xmasday").innerHTML="<tr><td class=\"td\"><a class=\"dayTileClosed modal-trigger\" onclick=\"javascript:saveValue(this, now.getFullYear());\" href=\"#modal1\">25</a></td></tr>";
	} else{
		document.getElementById("xmasday").innerHTML="<tr><td class=\"td\"><a class=\"dayTileClosed modal-trigger\" href=\"#modalClosed\">25</a></td></tr>";		
	}
	//reste du calendrier 
	for(i = 0; i < 4; i++){
		calendarContent+="<tr>";
		for(j = 0; j < 6; j++){
			var day = arr[j+i*6]; 
			keyDay = ""+day+todayYear;
			if(todayYear>year || (day<=todayDay && todayMonth==11 && getSavedValue(keyDay)=="open")){				
				calendarContent += "<td class=\"td\"><a class=\"dayTileOpened modal-trigger\" href=\"#modal1";
			} else if(day<=todayDay && todayMonth==11 && getSavedValue(keyDay)=="closed"){
				calendarContent += "<td class=\"td\"><a class=\"dayTileClosed modal-trigger\" onclick=\"javascript:saveValue(this, now.getFullYear());\" href=\"#modal1";
			} else {
				calendarContent += "<td class=\"td\"><a class=\"dayTileClosed modal-trigger\" href=\"#modalClosed";	
			}
				calendarContent += "\">";
				calendarContent += day;
				calendarContent += "</a></td>";
		}
		calendarContent+="</tr>";
	}
	return calendarContent;
}


function fillHistory(year){
	var historyContent = "<ul class=\"collapsible\">";
	var today = new Date();
	var index = 0;
	// Reactivation chantier QVT 
	if(today.getFullYear()>year){
		for(i=1; i<=25; i++){
			historyContent += "<li class=\"notli\"><input type=\"button\" id=\""+i+"\" class=\"modalHistory modal-trigger\" href=\"#modal1\" value='";
			var title = getTitle(i.toString());
			historyContent += title;
			historyContent += "\'/></li>";
		}
	} else {
		if(today.getMonth() == 11){
			index = today.getDate();
			for(i=1; i<=index; i++){
				historyContent += "<li class=\"notli\"><input type=\"button\" id=\""+i+"\" class=\"modalHistory modal-trigger\" href=\"#modal1\" value=\"";
				var title = getTitle(i.toString());
				historyContent += title;
				historyContent += "\"/></li>";
			}
		} else {
			historyContent += "Il n\'y a pas encore d'astuces disponibles, reviens demain !"
		}
	}
	return historyContent+"</ul>" ; 
}

function fillHistoryMusic(year){
	var historyContent = "<ul class=\"collapsible\">";
	var today = new Date();
	if(today.getFullYear()>year){
		for(i=1; i<=10; i++){
			historyContent += "<li class=\"notli\"><input type=\"button\" id=\""+i+"\" class=\"modalHistoryMusic modal-trigger\" href=\"#modalM\" value='";
			var title = getEnigma(i.toString());
			historyContent += title;
			historyContent += "\'/></li>";
		}
	} else {
		if(today.getMonth() == 05){
			for(i=1; i<=10; i++){
				historyContent += "<li class=\"notli\"><input type=\"button\" id=\""+i+"\" class=\"modalHistoryMusic modal-trigger\" href=\"#modalM\" value=\"";
				var title = getEnigma(i.toString());
				historyContent += title;
				historyContent += "\"/></li>";
			}
		} else {
			historyContent += "Il n\'y a rien ici pour l'instant, reviens demain !"
		}
	}
	return historyContent+"</ul>" ; 
}

