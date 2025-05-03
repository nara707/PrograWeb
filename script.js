const carrito = [];

    function agregarAlCarrito(nombre, precio) {
      carrito.push({ nombre, precio });
      actualizarCarrito();
    }

    function eliminarDelCarrito(index) {
      carrito.splice(index, 1);
      actualizarCarrito();
    }

    function actualizarCarrito() {
      const lista = document.getElementById("lista-carrito");
      const totalElemento = document.getElementById("total-carrito");
      lista.innerHTML = "";
      let total = 0;

      carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "x";
        botonEliminar.onclick = () => eliminarDelCarrito(index);

        li.appendChild(botonEliminar);
        lista.appendChild(li);

        total += item.precio;
      });

      totalElemento.textContent = total;
    }

    function toggleCarrito() {
      const contenedor = document.getElementById("carrito");
      contenedor.style.display = contenedor.style.display === "none" || contenedor.style.display === "" ? "block" : "none";
    }