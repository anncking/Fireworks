

function explosion() {
var sky;
var colors = ["red", "orange", "green", "yellow", "blue", "white", "purple", "pink", "teal", "grey"];
var emmiter = document.createElement("div");
$("emmiter").className = "base-particle";
var multicolor = Math.floor((Math.random() * 10));
	
	
    $("emmiter").width(Math.floor(400 * (Math.random() * 398)));
	$("emmiter").height(Math.floor(240 * (Math.random() * 238)));
	$("emmiter").background-color(colors["multicolor"]);
	
	
	document.getElementById("photo").appendChild(emmiter);
	
	$("emmiter").duplicate(50);
	
	$("emmiter").each(function(){
	var x_offset = Math.floor(10 * (Math.random() * 21));
	var y_offset = Math.floor(10 * (Math.random() * 21));
	if (multicolor > 5){
	multicolor = Math.floor((Math.random() * 10));
	$(this).background-color(colors["multicolor"]);
	}
	 $(this).animate({top: 10 * 'x_offset', left: 10 * 'y_offset'}, 2500);
	$(this).animate({top: '-=20px', opacity: '0.1'}, 'slow');
	});
   setInterval(function(){ explosion(); }, 3000); 
}( jQuery );