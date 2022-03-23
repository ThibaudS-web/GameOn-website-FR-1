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

const REGEXP_FORM = {
    firstname: "^[a-zA-Z]{2,}$",
    lastname: "^[a-zA-Z]{2,}$",
    email: "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"
}

const ERROR_MESSAGE = {
    firstname: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
    lastname: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
    email: "Veuillez saisir un mail valide"
}

const INPUTS = {
    firstname: form.first,
    lastname: form.last,
    email: form.email
}

const SMALL_ELEMENTS = {
    firstName: document.querySelector('#error-first'),
    lastName: document.querySelector('#error-last'),
    email: document.querySelector("#error-mail")
}

function validation(input, regexpValue, errorMessage, smallElement) {
    let regexp = new RegExp(
        regexpValue
    )

    let testRegexp = regexp.test(input.value)
    const small = smallElement

    if (!testRegexp) {
        small.textContent = errorMessage
        input.classList.add('input-error')
        return false
    } else {
        small.textContent = ""
        input.classList.remove('input-error')
        return true
    }
}





// Validation First Name
// const validFirstName = (input) => {
//     let nameRegExp = new RegExp(
//         '^[a-zA-Z]{2,}$'
//     )

//     let testName = nameRegExp.test(input.value)
//     const firstNameInput = document.querySelector('#first')
//     const smallFirstName = document.querySelector('#error-first')

//     if (!testName) {
//         smallFirstName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
//         firstNameInput.classList.add('input-error')
//         return false
//     } else {
//         firstNameInput.classList.remove('input-error')
//         smallFirstName.textContent = ""
//         return true
//     }
// }

// // Validation Last Name
// const validLastName = (input) => {
//     let nameRegExp = new RegExp(
//         '^[a-zA-Z]{2,}$'
//     )

//     let testName = nameRegExp.test(input.value)
//     const lastNameInput = document.querySelector('#last')
//     const smallLastName = document.querySelector('#error-last')

//     if (!testName) {
//         smallLastName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
//         lastNameInput.classList.add('input-error')
//         return false
//     } else {
//         lastNameInput.classList.remove('input-error')
//         smallLastName.textContent = ""
//         return true
//     }
// }

// // Validation Email
// const validEmail = (input) => {
//     let emailRegExp = new RegExp(
//         '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$'
//     )

//     let testEmail = emailRegExp.test(input.value)
//     const smallEmail = document.querySelector("#error-mail")
//     const emailInput = document.querySelector("#email")

//     if (!testEmail) {
//         smallEmail.textContent = "Veuillez saisir un mail valide"
//         emailInput.classList.add('input-error')
//         return false
//     } else {
//         emailInput.classList.remove("input-error")
//         smallEmail.textContent = ""
//         return true
//     }
// }

// Validation Birthdate
const validbirthdate = () => {
    const inputBirthdate = document.querySelector('#birthdate')
    const smallBirthdate = document.querySelector('#error-birthdate')
    if (inputBirthdate.value.length === 0) {
        smallBirthdate.textContent = "Veuillez indiquer votre date de naissance"
        inputBirthdate.classList.add('input-error')
        return false
    } else {
        smallBirthdate.textContent = ""
        inputBirthdate.classList.remove('input-error')
        return true
    }
}

// Validation Tournament
const validTournament = () => {
    const inputTournament = document.querySelector('#quantity')
    const smallTournament = document.querySelector('#error-tournament')

    if (inputTournament.value.length === 0) {
        smallTournament.textContent = "Veuillez indiquer le nombre de tournois auquels vous avez participé"
        inputTournament.classList.add('input-error')
        return false
    } else {
        smallTournament.textContent = ""
        inputTournament.classList.remove('input-error')
        return true
    }
}

// Validation Location
const validLocation = () => {
    const arrayInputs = document.querySelectorAll('#locations input')
    const smallLocation = document.querySelector('#error-location')
    const inputChecked = []

    arrayInputs.forEach(input => {
        if (input.checked) {
            inputChecked.push(input)
        }
    });

    if (inputChecked.length > 0) {
        smallLocation.textContent = ""
        return true
    } else {
        smallLocation.textContent = "Veuillez choisir une destination pour votre inscription"
        return false
    }
}

// Validation Terms of use
const validTerms = () => {
    const termsInput = document.querySelector('#checkbox1')
    const smallTerms = document.querySelector('#error-terms')

    if (!termsInput.checked) {
        smallTerms.textContent = "Veuillez cocher les conditions d'utilisations"
        return false
    } else {
        smallTerms.textContent = ""
        return true
    }

}

//Validation Form
const formValidation = (event) => {
    event.preventDefault()

    if (validation(INPUTS.firstname, REGEXP_FORM.firstname, ERROR_MESSAGE.firstname, SMALL_ELEMENTS.firstName) &&
        validation(INPUTS.lastname, REGEXP_FORM.lastname, ERROR_MESSAGE.lastname, SMALL_ELEMENTS.lastName) &&
        validation(INPUTS.email, REGEXP_FORM.email, ERROR_MESSAGE.email, SMALL_ELEMENTS.email) &&
        validbirthdate() &&
        validTournament() &&
        validLocation() &&
        validTerms()
    ) {

        switchModal()

    } else {

        validation(INPUTS.firstname, REGEXP_FORM.firstname, ERROR_MESSAGE.firstname, SMALL_ELEMENTS.firstName)
        validation(INPUTS.lastname, REGEXP_FORM.lastname, ERROR_MESSAGE.lastname, SMALL_ELEMENTS.lastName)
        validation(INPUTS.email, REGEXP_FORM.email, ERROR_MESSAGE.email, SMALL_ELEMENTS.email)
        validbirthdate()
        validTournament()
        validLocation()
        validTerms()

        alert('Une erreur est survenue : formulaire invalide, vérifiez chaque champ.')
    }
}

// EventListeners about the form
form.first.addEventListener('change', function () {
    validation(this, REGEXP_FORM.firstname, ERROR_MESSAGE.firstname, SMALL_ELEMENTS.firstName)
})
form.last.addEventListener('change', function () {
    validation(this, REGEXP_FORM.lastname, ERROR_MESSAGE.lastname, SMALL_ELEMENTS.lastName)
})
form.email.addEventListener('change', function () {
    validation(this, REGEXP_FORM.email, ERROR_MESSAGE.email, SMALL_ELEMENTS.email)
})
form.birthdate.addEventListener('change', function () {
    validbirthdate()
})
form.quantity.addEventListener('change', function () {
    validTournament()
})
form.location.forEach(location => {
    location.addEventListener('change', function () {
        validLocation()
    })
})
form.terms.addEventListener('change', function () {
    validTerms()
})

//Verify the validation before submit
form.addEventListener('submit', formValidation)





