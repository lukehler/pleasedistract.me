/* --- pleasedistract.me v0.1.0 --- */

// Variables
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
document.getElementById('refresh').addEventListener( 'click', updateLink );
// Bind event to link itself, while we're at it.
link.addEventListener( 'click', updateLink );
// TODO: this doesn't change the visible appearance on screen, even though it now goes to a different link!
// TODO: remove focus from link?