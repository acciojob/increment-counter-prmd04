//your JS code here. If required.
let btn = document.getElementById("incrementBtn");

btn.addEventListener("click", ()=>{
	alert(document.getElementById("counter").innerText);
	let count = document.getElementById("counter");
	count.innerText = parseInt(count.innerText)+1;
});