//-------------------------------------------------------------------------------------------//
//Declaracion del contenedor de todos los inicios
let ContenedorInicios = document.querySelector(".contenedor-inicio-registro-olvidar")

//declara1cion de variables de inicio de seion 
let paginainicio = document.querySelector(".pagina-inicio")
let formularioInicio = document.querySelector(".formulario-inicio")
let correoinicio = document.querySelector("#correo-inicio")
let contraseñainicio = document.querySelector("#contraseña-inicio")
let btnIngresar = document.querySelector("#btn-ingresar")
let btnRegistrarse = document.querySelector("#btn-registrar")
let MensajeInicio = document.querySelector("#mensaje-inicio")

//declaracion de variables del registro
let paginaRegistro = document.querySelector(".pagina-registro")
let formularioRegistro = document.querySelector(".formulario-registro")
let correoRegistro = document.querySelector("#correo-registro")
let contraseñaRegistro = document.querySelector("#contraseña-registro")
let fechaRegistro = document.querySelector("#fecha-registro")
let nombreRegistro = document.querySelector("#nombre-registro")
let btnRegistrar = document.querySelector("#btn-crear")
let celularRegistro = document.querySelector("#celular-registro")
let btnRegresar = document.querySelector("#btnregresar")

//declaracion de variables del recuperar contraseña
let paginarecuperar = document.querySelector(".pagina-olvidar")
let btnolvidar = document.querySelector("#btn-olvidar")
let btnRegresaRecuperar = document.querySelector("#btnRegresarOlvidar")
let btnBuscarCuenta = document.querySelector("#btn-buscar-cuenta")
let correoRecuperar = document.querySelector("#CorreoOlvidar")
let fechaRecuperar = document.querySelector("#fecha-recuperar")
let MensajeRecuperar = document.querySelector("#mensaje-recuperar")
let btnOlvidar = document.querySelector("#btn-recuperar-contraseña")

//Declaracion de valores de la pagina principal
let PaginaPrincipal = document.querySelector(".pagina-principal")
let ChaquetasNav = document.querySelector("#chaquetas-principal")
let CamisetasNav = document.querySelector("#camisetas-principal")
let PantalonesNav = document.querySelector("#pantalones-principal")
let JeansNav = document.querySelector("#jeans-principal")
let BermudasNav = document.querySelector("#bermudas-principal")
let ZapatosNav = document.querySelector("#zapatos-principal")
let RopaInteriorNav = document.querySelector("#ropainterior-principal")
let ImgsDestacables = document.querySelector(".contenedor-producto")
let EncabezadoPagPrincipal = document.querySelector(".searching")

//Declaracionn de variables de la pagina de categorias
let PaginaCategorias = document.querySelector(".pagina-categorias")


//Declaracion de valores del carrito
let ContenedorCarrito = document.querySelector(".contenedor-principal-carrito")
let IconoCarrito = document.querySelector(".carrito-icon")
let btnRegresarCarrito = document.querySelector(".btn-regresar-carrito");

//definicion de los valores para las categorias
let ContenedorCategorias = document.querySelector(".btn-prendas")

let ContenedorChaquetas = document.querySelector(".contenedor-chaquetas")
let ContenedorCamisas = document.querySelector(".contenedor-camisas")
let ContenedorPantalones = document.querySelector(".contenedor-pantalones")
let ContenedorBermudas = document.querySelector(".contenedor-bermudas")
let ContenedorRopaInterior = document.querySelector(".contenedor-ropainterior")

let BtnChaquetas = document.querySelector(".chaquetas-principal")
let BtnCamisas = document.querySelector(".camisas-principal")
let BtnPantalones = document.querySelector(".pantalones-principal")
let BtnBermudas = document.querySelector(".bermudas-principal")
let BtnRopaInterior = document.querySelector(".ropainterior-principal")

let logo = document.querySelector(".logok");

//Definicion de valores del Configuracion
let ContenedorConfiguracion = document.querySelector(".contenedor-configuracion")

let BtnIniciarCerrarSesion = document.querySelector(".item-cerrar-sesion")
let BtnAceederConfiguracion = document.querySelector(".Btn-Acceder-Configuracion")

//-------------------------------------------------------------------------------------------//


//Pasar de inicio de sesion a registro
btnRegistrarse.addEventListener("click", abrirRegistrarse)
function abrirRegistrarse() {
    paginainicio.classList.add("inactivo");
    paginaRegistro.classList.remove("inactivo");
}

//Regresar de registro a inicio de sesion
btnRegresar.addEventListener("click", RegresarInicio);
function RegresarInicio() {
    paginainicio.classList.remove("inactivo");
    paginaRegistro.classList.add("inactivo");
}

//Regresar de recuperar contraseña a inicio de sesion
btnRegresaRecuperar.addEventListener("click", RegresarOlvidar)
function RegresarOlvidar() {
    paginainicio.classList.remove("inactivo")
    paginarecuperar.classList.add("inactivo")
}

//pasar de inicio de sesion a recuperar contraseña
btnOlvidar.addEventListener("click", abrirRecuperar)
function abrirRecuperar() {
    paginainicio.classList.add("inactivo");
    paginarecuperar.classList.remove("inactivo");
}
//-------------------------------------------------------------------------------------------//

//Registrar un usuario y guardarlo
let usuarios = [];
btnRegistrar.addEventListener("click", añadirNuevoUsuario)

function añadirNuevoUsuario() {
    let NuevoUsuario = {};
    NuevoUsuario.nombre = nombreRegistro.value
    NuevoUsuario.correo = correoRegistro.value
    NuevoUsuario.contraseña = contraseñaRegistro.value
    NuevoUsuario.fecha = fechaRegistro.value
    NuevoUsuario.celular = celularRegistro.value
    usuarios.push(NuevoUsuario);

    //para pasar de registro a inicio de sesion en el momento que el usuario cree la cuenta o le de al boton de crear cuenta
    paginainicio.classList.remove("inactivo");
    paginaRegistro.classList.add("inactivo");
    console.log(usuarios);
}

//-------------------------------------------------------------------------------------------//

//verificar si el usuario esta almacenado o registrado 
btnIngresar.addEventListener("click", iniciarPaginaPrincipal)
function iniciarPaginaPrincipal() {

    usuarios.forEach((usuario) => {

        if (usuario.correo == correoinicio.value && usuario.contraseña == contraseñainicio.value) {
            MensajeInicio.innerHTML = "Bienvenido"

        } else {
            MensajeInicio.innerHTML = "El usuario o contraseña es incorrecto"
        }
    })
}

//Verificar si el usuario esta registrado y recuperar la contraseña
btnBuscarCuenta.addEventListener("click", RecuperarCuenta)

function RecuperarCuenta() {
    usuarios.forEach((usuario) => {

        if (usuario.correo == correoRecuperar.value && usuario.fecha == fechaRecuperar.value) {
            MensajeRecuperar.innerHTML = "Tu contraseña es " + usuario.contraseña

        } else {
            MensajeRecuperar.innerHTML = "El correo o fecha de nacimiento es incorrecto"
        }
    })
}

btnIngresar.addEventListener("click", AbrirPaginaPrincipal)

function AbrirPaginaPrincipal() {
    usuarios.forEach((usuario) => {
        if (usuario.correo == correoinicio.value && usuario.contraseña == contraseñainicio.value) {
            ContenedorInicios.classList.add("inactivo");
            ContenedorTotalArticulos.classList.remove("inactivo")
            EncabezadoPagPrincipal.classList.remove("inactivo")
        }
    })
};

IconoCarrito.addEventListener("click", AbrirCarrito);
function AbrirCarrito() {
    PaginaPrincipal.classList.add("inactivo");
    ContenedorCarrito.classList.remove("inactivo");
    ContenedorChaquetas.classList.add("inactivo");
    ContenedorCamisas.classList.add("inactivo");
    ContenedorPantalones.classList.add("inactivo");
    ContenedorBermudas.classList.add("inactivo");
    ContenedorRopaInterior.classList.add("inactivo");

}

ContenedorCategorias.addEventListener("change", abrirCategoriasChaquetas);
function abrirCategoriasChaquetas() {
    let valor = ContenedorCategorias.value;
    console.log(valor)

    if (valor == "-Chaquetas") {
        PaginaPrincipal.classList.add("inactivo");
        ContenedorChaquetas.classList.remove("inactivo");
    }
}

ContenedorCategorias.addEventListener("change", abrirCategoriasCamisas);
function abrirCategoriasCamisas() {
    let valor = ContenedorCategorias.value;
    console.log(valor)

    if (valor == "-Camisas") {
        PaginaPrincipal.classList.add("inactivo");
        ContenedorCamisas.classList.remove("inactivo");
    }
}

ContenedorCategorias.addEventListener("change", abrirCategoriasPantalones);
function abrirCategoriasPantalones() {
    let valor = ContenedorCategorias.value;
    console.log(valor)

    if (valor == "-Pantalones") {
        PaginaPrincipal.classList.add("inactivo");
        ContenedorPantalones.classList.remove("inactivo");
    }
}

ContenedorCategorias.addEventListener("change", abrirCategoriasBermudas);
function abrirCategoriasBermudas() {
    let valor = ContenedorCategorias.value;
    console.log(valor)

    if (valor == "-Bermudas") {
        PaginaPrincipal.classList.add("inactivo");
        ContenedorBermudas.classList.remove("inactivo");
    }
}

ContenedorCategorias.addEventListener("change", abrirCategoriasRopaInterior);
function abrirCategoriasRopaInterior() {
    let valor = ContenedorCategorias.value;
    console.log(valor)

    if (valor == "-Ropa Interior") {
        PaginaPrincipal.classList.add("inactivo");
        ContenedorRopaInterior.classList.remove("inactivo");
    }
}

btnRegresarCarrito.addEventListener("click", volverPaginaPrincipal);
function volverPaginaPrincipal() {
    ContenedorCarrito.classList.add("inactivo");
    PaginaPrincipal.classList.remove("inactivo");
}

logo.addEventListener("click", volverInicio)
function volverInicio() {
    PaginaPrincipal.classList.remove("inactivo");
    ContenedorCarrito.classList.add("inactivo");
    ContenedorChaquetas.classList.add("inactivo");
    ContenedorCamisas.classList.add("inactivo");
    ContenedorPantalones.classList.add("inactivo");
    ContenedorBermudas.classList.add("inactivo");
    ContenedorRopaInterior.classList.add("inactivo");
    ContenedorConfiguracion.classList.add("inactivo")
}

BtnIniciarCerrarSesion.addEventListener("click", CambioInicioSesion)
function CambioInicioSesion (){
    EncabezadoPagPrincipal.classList.add("inactivo")
    PaginaPrincipal.classList.add("inactivo")
    ContenedorInicios.classList.remove("inactivo")

}

BtnAceederConfiguracion.addEventListener("click",AbrirConfiguracion)
function AbrirConfiguracion (){
    PaginaPrincipal.classList.add("inactivo")
    ContenedorConfiguracion.classList.remove("inactivo")
}
//-------------------------------------------------------------------------------------------//


