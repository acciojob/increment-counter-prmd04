//your JS code here. If required.
let btn = document.getElementById("incrementBtn");

btn.addEventListener("click", ()=>{
	alert("button is clicked");
	let count = document.getElementById("counter");
	count.innerText = parseInt(count.innerText)+1;
});