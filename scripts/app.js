function toggleCGU() {
    var checkCGU = document.getElementById('cgu');
    if (checkCGU.checked) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    }
}

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

function validerForm() {
    let form = document.forms['contact'];
    let num = form.elements['tel'].value;
    if (!checkNumber(num)) {
        return alert("Veuillez entrer un numéro de téléphone valide");
    }
    return true;
}


function displayOnHtml() {
    let form = document.forms['contact'];

    let params = ['nom', 'prenom', 'tel', 'email', 'genre', 'naissance', 'pays'];
    params.forEach(param => {
        let formit = form.elements[param].value;
        let pelement = document.getElementsByTagName('p')[param];
        pelement.innerHTML = formit;
    });
}


function validerTotal() {
    if (validerForm()) {
        let formvalid = document.getElementsByClassName('formresult')[0];
        formvalid.style.display = 'flex';
        displayOnHtml();
    }
}