let tabLinks = document.getElementsByClassName("tab-links");
let tabcontents= document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tabLinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("side-menu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}



let modebtn = document.querySelector("#mode");
let currMode = "light";
modebtn.addEventListener("click", ()=>{
if(currMode==="light"){
    currMode= "dark"
    console.log("light");
    document.querySelector("body").style.backgroundColor="white";
  

    
}else{
    currMode="light";
    console.log("dark");
    document.querySelector("body").style.backgroundColor="black";
}
});


// code for submit form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyCn9_Q1Ed7ES0XpP2JdydrLKZOW2tmHSuhz6WSb-w4fOra6OaGRZ-iYqMelPjK7vjiEg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})