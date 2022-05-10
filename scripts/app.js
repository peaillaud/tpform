/**
 * Fonction qui vérifie si la case pour accepter les CGU est cochée, et si oui, active le bouton de soumission du formulaire
 */

function toggleCGU() {
    var checkCGU = document.getElementById('cgu');
    if (checkCGU.checked) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    }
}

/**
 * Fonction qui vérifie si le numéro de téléphone fourni est valide, retourne true si oui, false si non.
 * @param { String } tel 
 * @returns { Boolean }
 */

function checkNumber(tel) {
    if (tel.length !== 10) {
        return false;

    } else if (tel[0] !== "0") {
        return false;
    } else if (tel[1] !== "6" && tel[1] !== "7") {
        return false;
    } else {
        return true;
    }
}

/**
 * Fonction qui vérifie si la confirmation du mot de passe est correcte, et retourne un booléen.
 * @param { String } password 
 * @param { String } confirm 
 * @returns { Boolean }
 */

function checkPassword(password, confirm) {
    if (password !== confirm) {
        return false;
    } else {
        return true;
    }
}

/**
 * Fonction qui vérifie si l'entièreté du formulaire est valide, retourne true si oui, false si non.
 * @returns { Boolean }
 */

function validerForm() {
    let form = document.forms['contact'];
    let num = form.elements['tel'].value;
    let password = form.elements['password'].value;
    let confirm = form.elements['passwordconf'].value;
    if (!checkNumber(num)) {
        return alert("Veuillez entrer un numéro de téléphone valide");
    } else if (!checkPassword(password, confirm)) {
        return alert("Les mots de passe ne sont pas les mêmes !");
    }
    return true;
}

/**
 * Fonction qui, pour chaque élément du formulaire, affiche sa valeur dans un paragraphe situé en dessous.
 */

function displayOnHtml() {
    let form = document.forms['contact'];

    let params = ['nom', 'prenom', 'tel', 'email', 'genre', 'naissance', 'pays'];
    params.forEach(param => {
        let formit = form.elements[param].value;
        let pelement = document.getElementsByTagName('p')[param];
        pelement.innerHTML = formit;
    });
}

/**
 * Fonction qui exécute la vérification du formulaire et affiche les résultats s'il est valide.
 */

function validerTotal() {
    if (validerForm()) {
        let formvalid = document.getElementsByClassName('formresult')[0];
        formvalid.style.display = 'flex';
        displayOnHtml();
        // scroll to formresult element 
        window.scrollTo(0, document.body.scrollHeight);
    }
}