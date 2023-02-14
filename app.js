'use strict'
const troca =  document.querySelector(".btn");
 
troca.addEventListener ("click", function(){
    document.body.classList.toggle("dark-theme")
    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark"
    } else{
        this.textContent = "Light"
    }
    console.log( "classe do nome" + className)
}
)