// alert("Hello");


// fetch("https://rel.ink")
//       .then(response => {
//         console.log(response);
//       })

// TO USE THE TOGGLER FOR MOBILE
let togg = document.querySelector(".close");
let mob = document.querySelector(".mobile-nav");

let initial = false;
togg.addEventListener("click", change);

function change(){
  if(initial == false){
    mob.style.display = "block";
    initial= true;
  }else{
    mob.style.display = "none";
    initial= false;
  }
}




let submit = document.querySelector(".short-btn");
let mobile = document.querySelector(".short input");
let error = document.querySelector("span");
let container = document.querySelector("#advanced");


submit.addEventListener("click", changeStyle);
// CREATE A CLEAR INPUT FUNCTION

const clearInput = ()=>{
  mobile.value = "";
}


function changeStyle(e){
 if(mobile.value === ""){
  error.style.display = "block";


}
else{
   const div = document.createElement("div")
   const result = document.createElement("p");
   const newLInk = document.createElement("a");
   const button = document.createElement("button");
   const list = document.querySelector("#advanced h1");
   div.classList.add("links");
   container.appendChild(div);
   container.insertBefore(div, container.childNodes[2]);

   div.appendChild(result);
   div.appendChild(newLInk);
   div.appendChild(button);
   button.innerHTML ="copy"
   result.innerHTML = mobile.value;
   newLInk.innerHTML = mobile.value;
   clearInput();
   error.style.display = "none";
 }

  e.preventDefault();
}
