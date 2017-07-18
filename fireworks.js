/*
 * jQuery for a fireworks display
 *
 * Contains div element container with a photo background where the fireworks will displayed on.  Div element created onload and placed at a point on the photo that is randomly 
 * generated. Copies of that div element are created and new top and left positions are randomly generated for each of those copies, giving the look of the points exploding 
 * out. The colors to the fireworks are randomly generated as well as if the firework is multi-colored. The particles then slowly drift down and fade out
 *
 * written by Ann King
 * annkingwebdesign.com
 * 7/18/17
 * Tutorial Credit: http://mashable.com/2010/07/04/javascript-fireworks-animation/#kRplmtc5diqq
 */
 
function explosion() {
 
 	$.each($( ".base-particle" ), function(){
	$(this).remove();
	});
var sky;
var colors = ["Tomato", "Crimson", "chartreuse", "aqua", "DeepPink", "white", "bisque", "blue", "teal", "yellow"];
var emitter = document.createElement("div");
emitter.className = "base-particle";
var newcolor;

document.getElementById("photo").append(emitter);
var multicolor = Math.floor((Math.random() * 10));

emitter.style.backgroundColor = colors[multicolor];
$(emitter).css({ left: Math.floor(Math.random() * ((390 - 20) + 1)) });
$(emitter).css({ top: Math.floor(Math.random() * ((235 - 140) + 1)) });

for (i = 0; i < 5; i++) { 
$( ".base-particle" ).clone().appendTo( ".container" );	

}
	
	$.each($( ".base-particle" ), function(){
	var xoffset = Math.floor(Math.random() * 50);
	
	var y_offset = Math.floor(Math.random() * 50);
	
	if (multicolor > 5){
	newcolor = Math.floor((Math.random() * 10));
	this.style.backgroundColor = colors[newcolor];
	}
	$(this).animate({top: '+=' + xoffset, left: '+=' + y_offset}, 2500);
		$(this).animate({top: '+=40px', opacity: '0.1'}, 'slow');	
	});
	
	

}

setInterval(function(){ explosion();}, 4000);
