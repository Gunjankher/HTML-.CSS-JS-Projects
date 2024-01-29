let input = document.getElementById("inp")
let text = document.querySelector('.text')
let addinput = document.getElementById("Note-Taking")

function Addnote () {
    if(input.value==="" || addinput.value===""){
        alert("Note Title OR Text is Missing , Enter Both")
    }
    else{
         let newEle = document.createElement("ul")
        newEle.innerHTML=  ` <h2><b>${input.value.toUpperCase()} <i class="fa-solid fa-trash"></i> </b> </h2><br> <em> ${addinput.value} </em> `
        text.appendChild(newEle)
        input.value = ""
        addinput.value = ""
newEle.querySelector("i").addEventListener("click", function remove(){
    newEle.remove()
})
    }
}

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default behavior of adding a newline character
        addinput.focus(); // Set focus to the notes input element
    }
});

addinput.addEventListener("keydown" ,function Enter (event){
if(event.key ==="Enter"){
    event.preventDefault()
    Addnote()
}
})

    input.addEventListener("keydown" ,function Delete (event){
        if(event.key ==="Delete"){
            event.preventDefault()
        
            let selectedtask = document.querySelector( ".text ul:first-child")
            if(selectedtask){
                selectedtask.remove()
            }
        }
        })
        addinput.addEventListener("keydown" ,function Delete (event){
            if(event.key ==="Delete"){
                event.preventDefault()
            
                let selectedtask = document.querySelector( ".text ul:first-child")
                if(selectedtask){
                    selectedtask.remove()
                }
            }
            })

          