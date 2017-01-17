var button = document.getElementById("button");
button.addEventListener('click', loadContent);



function loadContent(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'server-file.json', false);
	xhr.send();
	console.log(xhr.responseText)
}