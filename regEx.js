// JE DEFINI MA CONSTANTE formElements
// PREMIERE {} :
// JE RECUPERE L'ELEMENT AVEC L'ID name DANS MON DOCUMENT HTML
// DE LA MEME MANIERE succesIcon et errorIcon
// JE LUI INDIQUE SA REGLE A RESPECTER
// JE REPETE LA FORMULE POUR TOUS MES INPUTS
const formElements = [
    {
        input: document.getElementById('name'),
        successIcon: document.getElementById('firstInput__successIcone'),
        errorIcon: document.getElementById('firstInput__errorIcone'),
        regex: /^[A-Za-z]+(?:-[A-Za-z]+)?$/,
    },
    {
        input: document.getElementById('secondName'),
        successIcon: document.getElementById('secondInput__successIcone'),
        errorIcon: document.getElementById('secondInput__errorIcone'),
        regex: /^[A-Za-z]+(?:-[A-Za-z]+)?$/,
    },
    {
        input: document.getElementById('adresse'),
        successIcon: document.getElementById('thirdInput__successIcone'),
        errorIcon: document.getElementById('thirdInput__errorIcone'),
        regex: /^(\d+\s)?[A-Za-z\s]+$/,
    },
    {
        input: document.getElementById('postalCode'),
        successIcon: document.getElementById('forthInput__successIcone'),
        errorIcon: document.getElementById('forthInput__errorIcone'),
        regex: /^\d{4,5}$/, // Ajustez en fonction de votre format de code postal
    },
    {
        input: document.getElementById('city'),
        successIcon: document.getElementById('fifthInput__successIcone'),
        errorIcon: document.getElementById('fifthInput__errorIcone'),
        regex: /^[A-Za-z]+(?:-[A-Za-z]+)?$/,
    },
    {
        input: document.getElementById('email'),
        successIcon: document.getElementById('sixthInput__successIcone'),
        errorIcon: document.getElementById('sixthInput__errorIcone'),
        regex: /^[\w.-]+@[\w.-]+\.\w{2,4}$/,
    },
    {
        input: document.getElementById('phone'),
        successIcon: document.getElementById('seventhInput__successIcone'),
        errorIcon: document.getElementById('seventhInput__errorIcone'),
        regex: /^(\+|00)?41[0-9\s]+$/,
    },
];

// J'INITIALISE MA FONCTION updateValidation AVEC COMME PARAMETRES (L'ELEMENT DE MON INPUT, MON ICONE SUCCES, MON ICONE ERREUR ET UN PARAMETRE isValid)
// SI TU N'AS AUCUNE VALUE APRES AVOIR CLIQUE DANS L'INPUT ALORS BORDER ORANGE
// LA MÊME CHOSE POUR LA CONDITION DE SUCCES ET D'ERREUR


function updateValidation(inputElement, successIcon, errorIcon, isValid) {
    if (inputElement.value === '') {
        inputElement.style.border = '2px solid orange'; // Bordure orange
        successIcon.style.display = 'none'; // Masquez l'icône de succès
        errorIcon.style.display = 'none'; // Masquez l'icône d'erreur
    } else {

        if (isValid) {
            inputElement.style.border = '2px solid #0f8b00';
            successIcon.style.display = 'flex';
            errorIcon.style.display = 'none';
        } else {
            inputElement.style.border = '2px solid red';
            successIcon.style.display = 'none';
            errorIcon.style.display = 'flex';
        }
    }
};
    
 
// JE LANCE MA FONCTION updateValidation SI APRES UN BLUR SUR UN INPUT, LA REGEX EST VALIDE
formElements.forEach(({ input, successIcon, errorIcon, regex }) => {
    input.addEventListener('blur', () => {
        const isValid = regex.test(input.value);
        updateValidation(input, successIcon, errorIcon, isValid);
    });
});

