/* --- pleasedistract.me v0.1.0 --- */

// Variables

var recommendations = document.getElementById('recommendations');
var refresh = document.getElementById('refresh');
var link = document.getElementById('link');

// Function: get random link
var updateLink = function(){
	var length = links.length;
	var index = Math.floor( Math.random() * length );
	var linkObject = links[ index ];
	var text = "Here's something " + linkObject.adjective + " from " + linkObject.author + ".";
	link.innerText = text;
	link.href = linkObject.link;
}

// And fire everything off.
	// Initial link generation
	updateLink();
	// Bind event to button
	refresh.addEventListener( 'click', updateLink );
	// Bind event to link
	link.addEventListener( 'click', updateLink );