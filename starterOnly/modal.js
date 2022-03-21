function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector('.close')
const modalContainer = document.querySelector(".content")
const modal = document.querySelector(".modal-body")
const form = document.querySelector("form")

const btn = document.createElement("button")
const div = document.createElement('div')
const title = document.createElement("p")

btn.classList.add('btn-submit')
btn.textContent = "Fermer"

div.classList.add('titleContainer')

title.textContent = "Merci pour votre inscription"
title.classList.add("title")

div.appendChild(title)

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//launch close modal event
closeBtn.addEventListener('click', closeModal)


// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// launch close modal
function closeModal() {
    modalbg.style.display = "none";
}
function closeModalOnConfirmationPage() {
    closeModal()
    location.reload()
}

// Events for interaction wih modal
form.addEventListener('submit', switchModal)
btn.addEventListener('click', closeModalOnConfirmationPage)

//Switch between form and confirmation screen
function switchModal(event) {
    event.preventDefault()
    form.classList.add('d-none-form')
    modal.appendChild(div)
    modal.appendChild(btn)
}





