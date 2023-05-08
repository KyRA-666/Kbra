//Definicion de valores para el carrito
let BtnCarrito = document.querySelector(".prodcutos-carrito")
let BtnComprar = document.querySelector(".img-productos")
let TotalPagar = document.querySelector(".precio-carrito")
let CantidadProductos = document.querySelector(".productos-agregados-carrito")

let TotalArticulos = []

let ContenedorTotalArticulos = document.querySelector(".Contenedor-total-articulos")

ContenedorTotalArticulos.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("img-productos")) {
        //console.log(e)
        let Articulo = e.target.parentElement;
        let InfoArticulo = {
            Cantidad: 1,
            Imagen: Articulo.querySelector(".img-productos").attributes.src.nodeValue,
            Nombre: Articulo.querySelector(".sub-tittle-img").textContent,
            Precio: Articulo.querySelector(".precio-producto").textContent,

        }
        TotalArticulos = [...TotalArticulos, InfoArticulo];
        //console.log(TotalArticulos);
        MostrarCarrito();
    }
})

let MostrarCarrito = () => {
    BtnCarrito.innerHTML = "";
    let total = 0;
    let cantidadTotal = 0;

    TotalArticulos.forEach(producto => {
        let ArticuloComprado = document.createElement("div");
        ArticuloComprado.classList.add("producto-agregado");
        ArticuloComprado.innerHTML = `
        <h3 class="sub-tittle-img"> ${producto.Nombre} </h3>
        <img class="img-productos" src ="${producto.Imagen}" />
        <p class="precio-producto"> ${producto.Precio} </p>
        `
        BtnCarrito.append(ArticuloComprado);
        total = total + parseFloat(producto.Cantidad * producto.Precio.slice(1));
        cantidadTotal = cantidadTotal + producto.Cantidad;
    })
    TotalPagar.innerHTML = "El total de su compra es: " + total;
    CantidadProductos.innerHTML = cantidadTotal;
}