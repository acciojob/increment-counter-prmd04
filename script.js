//your JS code here. If required.
let btn = document.getElementById("incrementBtn");

btn.addEventListener("click", () => {
  let count = document.getElementById("counter");
  let current = parseInt(count.innerText);
  alert(current); 
  count.innerText = current + 1;
});
