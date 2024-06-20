const add = document.getElementById("start");
const sub = document.getElementById("stop");
let numb = 0;
console.log(numb);


 add.addEventListener("click", () => {
  return numb = numb+1;})
  document.getElementById("num").textContent = numb;

 sub.addEventListener("click", () => {
return  numb--;})
  
document.getElementById("num").textContent = numb;
    


