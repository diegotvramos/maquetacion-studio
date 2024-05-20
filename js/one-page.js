



const bsCollapse = new bootstrap.Collapse('#navbarNav', {

    toggle: false
    // si pongo a TRUE la página al recargar va empesar con el navbar desplegado
  })


  /* le voy a agregar al documento el Evento Click pero yo no se lo quiero aplicar al document sinó a los enlaces
    pero para no estar por cada enlace generando una invocación de evento mejor lo hago al padre (eso es la 
    delegacion de eventos) 
  */

    /*  si el objeto que origina el evento 'e.target' su selector no coincide con el que estoy buscando
        ¿que elementos Html estoy buscando? (.navbar) pues todo los enlaces (a) que estén dentro de la barra de navegación
        
        RESUMEN: el click no se va activar si no concide con esto: `.navbar a` cuando el elemento haga un click
        y no concida con esto simpremente retorname un FALSE para que se salga del evento.
    */
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".navbar a"))return false;
    //cuando si coincida
    //en esta variable 'bsCollapse' ya tenemos el elemento Collapse, entonces ejecuta el método 'Hide'(está en la documentacion)
    bsCollapse.hide();
})





