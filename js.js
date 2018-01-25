		var suggestions = [["Suggestion1","Suggestiondesc2","gates.html"],["Suggestion","Suggestiondesc","link"]];
		var naventry = [["Home","index.html"],["Announcements","announce.html"],["Flag-raising venue","flagraising.html"],["Staircases and gates","gates.html"],["Lend-and-borrow","lend.html"],["Competition Updates","compupdates.html"],["Canteen and Cafe","canteen.html"],["Teacher Locker finder","pigeon.html"],["Thought of The Week","totw.html"],["Chat","irc.html"],["Important Contacts","contacts.html"],["Fault report","fault.html"]];
	function onloadhome(){
		for (var i = 0; i < suggestions.length; i++){
			var suggestionentry = document.createElement("DIV");
			suggestionentry.className = "suggestions";
			suggestionentry.id="suggestion"+i;
			suggestionentry.innerHTML = "<div id='suggestionwrapper' onclick=window.location.href="+"'"+suggestions[i][2]+"'><div class='suggestiontitles'>"+suggestions[i][0]+"</div><div class='suggestiondesc'>"+suggestions[i][1]+"</div></div>"
			$("homescreensuggestionswrapper").appendChild(suggestionentry);
		}
		for (var j = 0; j < naventry.length; j++){
			if(j == 0){
				var suggestionentry = document.createElement("DIV");
				suggestionentry.className = "naventry";
				suggestionentry.innerHTML = "<div id='navwrapper' onclick='hidenav()'>"+naventry[j][0]+"</div>"
				$("nav").appendChild(suggestionentry);
			} else {
				var suggestionentry = document.createElement("DIV");
				suggestionentry.className = "naventry";
				suggestionentry.innerHTML = "<div id='navwrapper' onclick=window.location.href="+"'"+naventry[j][1]+"'>"+naventry[j][0]+"</div></div>"
				$("nav").appendChild(suggestionentry);
			}
		}
	}
	function onload(){
		for (var j = 0; j < naventry.length; j++){
			var suggestionentry = document.createElement("DIV");
			suggestionentry.className = "naventry";
			suggestionentry.innerHTML = "<div id='navwrapper' onclick=window.location.href="+"'"+naventry[j][1]+"'>"+naventry[j][0]+"</div></div>"
			$("nav").appendChild(suggestionentry);
		}
	}
	function extendnav(){
		$("nav").style.left="0";
		$("darken").style.zIndex=1;
		setTimeout(function(){$("darken").style.opacity=0.5;},1);
	}
	function hidenav(){
		$("nav").style.left="-72vw";
		$("darken").style.opacity=0;
		setTimeout(function(){$("darken").style.zIndex=-1;},1);
	}
	function $(name){
		return document.getElementById(name);
	}