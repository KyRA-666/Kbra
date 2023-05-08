//Sección hombres y mujeres
let seccionHombres = document.querySelector(".parte-hombre");
let seccionMujeres = document.querySelector(".parte-mujer")
let checkBox = document.querySelector("#check")
let checkLabel = document.querySelector("#check-label")

//Switch para cambiar de un genero a otro
checkBox.addEventListener("click", cambiarSeccion);

function cambiarSeccion() {
    if (checkBox.checked) {
        seccionHombres.classList.remove("inactivo");
        seccionMujeres.classList.add("inactivo");
    } else {
        seccionHombres.classList.add("inactivo");
        seccionMujeres.classList.remove("inactivo");
    }
};

let seccionHombresChaquetas = document.querySelector("#parte-hombre-chaquetas");
let seccionMujeresChaquetas = document.querySelector("#parte-mujer-chaquetas")
let checkBoxChaquetas = document.querySelector("#check-chaquetas")
let checkLabelChaquetas = document.querySelector("#check-chaquetas")

//Switch para cambiar de un genero a otro
checkBoxChaquetas.addEventListener("click", cambiarSeccionChaquetas);

function cambiarSeccionChaquetas() {
    if (checkBoxChaquetas.checked) {
        seccionHombresChaquetas.classList.remove("inactivo");
        seccionMujeresChaquetas.classList.add("inactivo");
    } else {
        seccionHombresChaquetas.classList.add("inactivo");
        seccionMujeresChaquetas.classList.remove("inactivo");
    }
};

let seccionHombresCamisas = document.querySelector("#parte-hombre-camisas");
let seccionMujeresCamisas = document.querySelector("#parte-mujer-camisas")
let checkBoxCamisas = document.querySelector("#check-camisas")
let checkLabelCamisas = document.querySelector("#check-camisas")

//Switch para cambiar de un genero a otro
checkBoxCamisas.addEventListener("click", cambiarSeccionCamisas);

function cambiarSeccionCamisas() {
    if (checkBoxCamisas.checked) {
        seccionHombresCamisas.classList.remove("inactivo");
        seccionMujeresCamisas.classList.add("inactivo");
    } else {
        seccionHombresCamisas.classList.add("inactivo");
        seccionMujeresCamisas.classList.remove("inactivo");
    }
};

let seccionHombresPantalones = document.querySelector("#parte-hombre-pantalones");
let seccionMujeresPantalones = document.querySelector("#parte-mujer-pantalones")
let checkBoxPantalones = document.querySelector("#check-pantalones")
let checkLabelPantalones = document.querySelector("#check-pantalones")

//Switch para cambiar de un genero a otro
checkBoxPantalones.addEventListener("click", cambiarSeccionPantalones);

function cambiarSeccionPantalones() {
    if (checkBoxPantalones.checked) {
        seccionHombresPantalones.classList.remove("inactivo");
        seccionMujeresPantalones.classList.add("inactivo");
    } else {
        seccionHombresPantalones.classList.add("inactivo");
        seccionMujeresPantalones.classList.remove("inactivo");
    }
};

let seccionHombresBermuda = document.querySelector("#parte-hombre-bermudas");
let seccionMujeresBermuda = document.querySelector("#parte-mujer-bermudas")
let checkBoxBermuda = document.querySelector("#check-bermudas")
let checkLabelBermuda = document.querySelector("#check-bermudas")

//Switch para cambiar de un genero a otro
checkBoxBermuda.addEventListener("click", cambiarSeccionBermudas);

function cambiarSeccionBermudas() {
    if (checkBoxBermuda.checked) {
        seccionHombresBermuda.classList.remove("inactivo");
        seccionMujeresBermuda.classList.add("inactivo");
    } else {
        seccionHombresBermuda.classList.add("inactivo");
        seccionMujeresBermuda.classList.remove("inactivo");
    }
};

let seccionHombresInterior = document.querySelector("#parte-hombre-ropainterior");
let seccionMujeresInterior = document.querySelector("#parte-mujer-ropainterior")
let checkBoxInterior = document.querySelector("#check-ropainterior")
let checkLabelInterior = document.querySelector("#check-ropainterior")

//Switch para cambiar de un genero a otro
checkBoxInterior.addEventListener("click", cambiarSeccionInterior);

function cambiarSeccionInterior() {
    if (checkBoxInterior.checked) {
        seccionHombresInterior.classList.remove("inactivo");
        seccionMujeresInterior.classList.add("inactivo");
    } else {
        seccionHombresInterior.classList.add("inactivo");
        seccionMujeresInterior.classList.remove("inactivo");
    }
};