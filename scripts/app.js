var checkCGU = document.getElementById('cgu');
var divcontainer = document.getElementsByClassName('formcontainer')[0];

function toggleCGU() {
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

if (validerForm() === true) {
    divcontainer.style.display = 'none';
}