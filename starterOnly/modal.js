function editNav() {
    var x = document.getElementById("myTopnav");
    let closeBtn = document.querySelector('.fa-xmark')
    let menuBtn = document.querySelector('.fa-bars')
    if (x.className === "topnav") {
        menuBtn.classList.add('d-none')
        closeBtn.classList.remove('d-none')
        x.className += " responsive";
    } else {
        closeBtn.classList.add('d-none')
        menuBtn.classList.remove('d-none')
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

const locationContainer = document.querySelector('#locations')
const btn = document.createElement("button")
const div = document.createElement("div")
const p = document.createElement("p")
const small = document.createElement("small")

btn.classList.add('btn-submit')
btn.textContent = "Fermer"

div.classList.add('titleContainer')

p.textContent = "Merci pour votre inscription"
p.classList.add("title")

div.appendChild(p)

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

// Event for interaction wih modal
btn.addEventListener('click', closeModalOnConfirmationPage)

// Switch between form and confirmation screen
function switchModal() {
    form.classList.add('d-none-form')
    modal.appendChild(div)
    modal.appendChild(btn)
}

// Class InputField with 4 attributs and a validation function
class InputField {
    constructor(input, errorMessage, errorContainer, validationFunction) {
        this.input = input
        this.errorMessage = errorMessage
        this.errorContainer = errorContainer
        this.validationFunction = validationFunction
    }

    validate() {
        let valid = this.validationFunction(this.input)
        if (valid) {
            this.errorContainer.textContent = ""
            this.input.classList.remove('input-error')
        } else {
            this.errorContainer.textContent = this.errorMessage
            this.input.classList.add('input-error')
        }
        return valid
    }
}

//######## Create new instances for specific field handling

//New instance of InputField class for firstname input
const firstNameField = new InputField(form.first, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", document.querySelector('#error-first'), (input) => {
    let regexp = new RegExp(
        "^[a-zA-Z]{2,}$"
    )
    return regexp.test(input.value)
})

//New instance of InputField class for lastname input
const lastNameField = new InputField(form.last, "Veuillez entrer 2 caractères ou plus pour le champ du nom.", document.querySelector('#error-last'), (input) => {
    let regexp = new RegExp(
        "^[a-zA-Z]{2,}$"
    )
    return regexp.test(input.value)
})

//New instance of InputField class for email input
const emailField = new InputField(form.email, "Veuillez saisir un mail valide", document.querySelector("#error-mail"), (input) => {
    let regexp = new RegExp(
        "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$")
    return regexp.test(input.value)
})

//New instance of InputField class for birthdate input
const birthdateField = new InputField(form.birthdate, "Veuillez indiquer votre date de naissance", document.querySelector('#error-birthdate'), (input) => {
    return input.value.length > 0
})

//New instance of InputField class for tournament input
const tournamentField = new InputField(form.quantity, "Veuillez indiquer le nombre de tournois auquels vous avez participé", document.querySelector('#error-tournament'), (input) => {
    return input.value.length > 0
})

//New instance of InputField class for location container
const locationsField = new InputField(locationContainer, "Veuillez choisir une destination pour votre inscription", document.querySelector('#error-location'), (inputContainer) => {
    return Array.from(document.querySelectorAll('#locations input')).some((input) => { return input.checked })
})

//New instance of InputField class for terms input
const termsField = new InputField(form.terms, "Veuillez cocher les conditions d'utilisations", document.querySelector('#error-terms'), (input) => {
    return input.checked
})

//Array for store boolean value. If element is true, the field validation is true.
const FIELDS = [firstNameField, lastNameField, emailField, birthdateField, tournamentField, locationsField, termsField]

//Validation Form
const formValidation = (event) => {
    event.preventDefault()

    let validForm = true
    //Iteration to verify that each field is valid
    FIELDS.forEach((field) => {
        validForm = field.validate() && validForm
    })

    if (validForm) {

        switchModal()

    } else {

        alert('Une erreur est survenue : formulaire invalide, vérifiez chaque champ.')

    }
}

//Change EventListeners about the form
form.first.addEventListener('change', function () {
    firstNameField.validate()
})
form.last.addEventListener('change', function () {
    lastNameField.validate()
})
form.email.addEventListener('change', function () {
    emailField.validate()
})
form.birthdate.addEventListener('change', function () {
    birthdateField.validate()
})
form.quantity.addEventListener('change', function () {
    tournamentField.validate()
})
form.location.forEach(location => {
    location.addEventListener('change', function () {
        locationsField.validate()
    })
})
form.terms.addEventListener('change', function () {
    termsField.validate()
})

//Verify the validation before submit
form.addEventListener('submit', formValidation)




