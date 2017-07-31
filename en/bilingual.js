//Returns true if it is a DOM element    
function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
);
}

let translateAllChildren = function(node) {
	for (var i = 0; i < node.childNodes.length; i++) {
      let child = node.childNodes[i];
      translateAllChildren(child);
      translateThisNode(child);
    }
}

let translateThisNode = function(node) {
	if(isElement(node) && node.hasAttribute("data-translation")) {
		let translation = node.dataset.translation;
		let originalHTML = node.innerHTML;
		node.innerHTML = translation;
		node.dataset.translation = originalHTML
		return;
	} else {
		return;
	}
}

let all = document.getElementById('translate-this');
if (all.hasAttribute("data-translate-first")) {
	translateAllChildren(all);
}
let translateButton = document.getElementById('translate-primary');

if (translateButton != null) {
	translateButton.onclick = function() {
		translateAllChildren(all)
	}
} else {
	console.log("You have to create the translation buttons with ID #translate-primary or it won't work!")
}
