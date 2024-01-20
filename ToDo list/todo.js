let input = document.getElementById("inp")
let text = document.querySelector('.text')

function Add() {
     if(input.value===""){
        alert("Pls Enter a task")
     }else{
        let newEle = document.createElement("ul")
       newEle.innerHTML = `${input.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle)
        input.value= ""
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
         newEle.remove()
        }
     }
}

input.addEventListener("keydown", function(event){

   if (event.key==="Enter") {
      event.preventDefault();
      Add();
   }
})



input.addEventListener("keydown", function(delEvent) {
   if (delEvent.key === "Delete") {
      delEvent.preventDefault(); // Prevent the default behavior (e.g., deleting text from the input field)

      // Add your removal logic here
      const selectedTask = document.querySelector('.text ul:first-child'); // For example, select a task marked as "selected"
      if (selectedTask) {
          selectedTask.remove(); // Remove the selected task
      }
   }
});
 