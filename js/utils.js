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

$(document).on('click', '.modalHistory', function(e){
	var day = e.target.id;
	showDay(day);
});

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
function saveValue(elem){
    var id = elem.innerHTML;  // get the sender's id to save it . 
    var val = "open"; // get the value. 
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override .
	elem.className="dayTileOpened modal-trigger";
}

//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue(day){
    if (!localStorage.getItem(day)) {
        return "closed";// You can change this to your defualt value. 
    }
    return localStorage.getItem(day);
}

function fillCalendar(){
	today=new Date();
	todayDay = today.getDate();
	todayMonth = today.getMonth();
	var xmas = new Date(2020, 11, 25);
	let arr = Array.from({length: 24}, (_, i) => i + 1);
	shuffle(arr);
	var calendarContent ="";
	//xmas
	if(todayMonth==11 && todayDay==25 && getSavedValue(todayDay)=="open"){
		document.getElementById("xmasday").innerHTML="<tr><td class=\"td\"><a class=\"dayTileOpened modal-trigger\" onclick=\"javascript:saveValue(this);\" href=\"#modal1\">25</a></td></tr>";
	} else {
		document.getElementById("xmasday").innerHTML="<tr><td class=\"td\"><a class=\"dayTileClosed modal-trigger\" href=\"#modalClosed\">25</a></td></tr>";			
	}
	for(i = 0; i < 4; i++){
      	calendarContent+="<tr>";
		for(j = 0; j < 6; j++){
      		var day = arr[j+i*6]; 
			//Before Xmas			
			if(todayMonth==11 && (day<todayDay || (day==todayDay && getSavedValue(day)=="open"))){
				calendarContent += "<td class=\"td\"><a class=\"dayTileOpened modal-trigger\" href=\"#";
				calendarContent += "modal1";
			} else if(day==todayDay && getSavedValue(day)=="closed"){
				calendarContent += "<td class=\"td\"><a class=\"dayTileClosed modal-trigger\" onclick=\"javascript:saveValue(this);\" href=\"#";
				calendarContent += "modal1";
			} else {
				calendarContent += "<td class=\"td\"><a class=\"dayTileClosed modal-trigger\" href=\"#";
				calendarContent += "modalClosed";
			}	
			calendarContent += "\">";
			calendarContent += day;
			calendarContent += "</a></td>";
      	}
      	calendarContent+="</tr>";
    }
	return calendarContent;
}

function fillHistory(){
	var historyContent = "<ul class=\"collapsible\">";
	var today = new Date();
	todayDay = today.getDate();
	var index = 0;
	var xmas = new Date(2020, 11, 25);
	if (today >= xmas){
		index = 25;
	}
	if(todayMonth == 11){
		index = todayDay;	
	
		for(i=1; i<=index; i++){
			historyContent += "<li class=\"notli\"><input type=\"button\" id=\""+i+"\" class=\"modalHistory modal-trigger\" href=\"#modal1\" value='";
			var title = getTitle(i.toString());
			historyContent += title;
			historyContent += "\'/></li>";
		}
	} else {
		historyContent += "Il n\'y a pas encore d'astuces disponibles, reviens demain !"
	}
	return historyContent+"</ul>" ; 
}
