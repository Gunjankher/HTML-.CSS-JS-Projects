// let input = document.getElementById("inp");
// let text = document.querySelector('.text');

// function Add() {
//     if (input.value === "") {
//         alert("Pls Enter a task");
//     } else {
//         let newEle = document.createElement("ul");
//         newEle.innerHTML = `
//             <span>${input.value}</span>
//             <button class="complete">Complete</button>
//             <button class="delete">Delete</button>
//         `;
//         text.appendChild(newEle);
//         input.value = "";
//     }
// }

// input.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         Add();
//     }
// });

// text.addEventListener("click", function (event) {
//     if (event.target.classList.contains("complete")) {
//         // Mark the task as completed (apply a CSS class)
//         event.target.parentElement.querySelector("span").classList.toggle("completed");
//     } else if (event.target.classList.contains("delete")) {
//         // Remove the task when the "Delete" button is clicked
//         event.target.parentElement.remove();
//     }
// });
