let btn = document.getElementById("submit_btn");
let formfield = document.querySelector(".formfield-textarea");
btn.addEventListener("click", ()=>{
   if(formfield.value.trim() === ""){
      alert("you must write a message before sending it");
   }
   else{
   alert("your message has been sent successfully");
   }
})