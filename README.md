

# MAQUETACIÓN DE EL PROYECTO 'studio' CON EL FRAMEWORK BOOTSTRAP


[link](https://diegotvramos.github.io/maquetacion-studio/)

**Definición**
Un "studio de diseño y desarrollo web" es un tipo de empresa o agencia que se especializa en la creación y desarrollo de sitios web. Este tipo de estudio combina habilidades de diseño gráfico y desarrollo web para crear sitios web atractivos, funcionales y efectivos para sus clientes. 

Por lo general, un studio de diseño y desarrollo web trabajará en estrecha colaboración con sus clientes para comprender sus necesidades y objetivos comerciales, y luego diseñará y desarrollará un sitio web que cumpla con esos requisitos. Esto puede incluir la creación de diseños personalizados, la codificación de funciones específicas, la optimización para dispositivos móviles y la integración de herramientas de análisis y seguimiento del rendimiento del sitio.

> tambien podria llamarse: "agencia de servicios digitales" o una "agencia de marketing digital"


para crear el logo el logo: https://www.bing.com/images/create

> LOGOS PROMPTS BLUEPRINT (Logotipos INDICACIONES PLANO)

usé un promt: Logotipo de un Perro con una mancha en forma de corazón en su cuerpo la mancha es de color negro y el perro es de color blanco, sin texto, aislado en un fondo negro, centrado, estilo minimalista, vectorial, líneas elegantes, líneas nítidas, alta calidad, minimalista, lujoso.

* le hize captura de pantalla para quitar el fondo oscuro y ponerle transparente, (lo probé descargando y no me funcionó al quitarle el fondo)

* para quitarle fondo: https://www.slazzer.com/upload

**studio Manchas**

**Lo primero** que debemos hacer es crear la estructura de nuestra carpeta

analizemos:

* es un sitio multipágina
* tiene varias secciones (Sitios, Clientes, comencemos, ¿Interesado?)

Creamos un documento _Index.html_
Creamos un documento _style.css_
Creamos un documento _main.js_
Creamos la carpeta _assets_
Creamos la carpeta _img_
Creamos la carpeta _css_
Creamos la carpeta _js_

![estructura](/assets/estructura-proyecto.JPG)

Primer paso: sobre todo cuando estamos trabajando con un sitio web en puro _html_ y _css_ lo que te recomiendo es:

> Atacar las partes comunes del sitio, La cabezera y el pie de página por que las 5 secciones tiene la misma cabezera y el mismo pie de página y lo único que cambia es el contenido.

como es un siito web donde vamos a trabajar  con puro _html_ y _css_ lo primero que tenesmo que hacer es cubir el marcado de estas secciones en común, y ya despues atacamos cada uno de los contenidos particulares de cada seccion

me avisan si quieren un curso para la automatizacion de sitios con herramientas como los _static sites generators_ como `https://gohugo.io/` o a lo mejor con PHP, ya teniendo como base el código de este sitio en bootstrap con html y css.

Uno de los detalles por los que tu tienes que atacar primeramente las secciones comunes es por que, imagina que ya hiciste la cabezera y el pie y empiezas a duplicar el archivo html y ya nada más le vas cambiando el nombre

Imaginate que el cliente dice: "sabes que... se me olvidó vamos a agregar una nueva seccion" entonces esa sección la tendrias que agregar en cada uno de los htmls, entonces no es la manera mas eficiente, pero recuerda que este curso está orientado a aprender bootstrap no a ver herramientas para la automatización o para poder sacar mayor provecho a nuestro desarrollo y poder reutilizar cosas, podriamos hacer un minicurso donde yo te enseñe a recolectar las partes comunes y generarlas con PHP o con un _static website generators_ serguey, evenly, hugo que son herramientas que nos van a ayudar a travez de una precompilacion a no estar repitiendo cosas.

## Plantilla HTML 5 inicial del sitio.

1ro vamos por el template html que nos ofrece bootstrap en la seccion `Getting started`

> de nada sirve hacer el atajo _emet_ en vs-code por que vamos a usar el que nos da bootstrap

2do vamos a mandar a llamar la hoja de estilo de los iconos de bootstrap, (yo voy a usar los iconos como tipografia) entonces copio la CDN.

3ro. mandamos a llamar nuestra hoja de estilo css 'propia' 

>> recuerda, tiene que ser la ultima en invocarse para que todo los cambios que nosotros hagamos a algun elemento de bootstrap los tome al final, por que si lo ponemos arriba por cascada va aplicar con forme el orden de arriba hacia abajo

4to mandamos a llamar nuertro scrip `js` propio.

## Arquitectura CSS con Bootstrap

¿Cual es la arquitectura css que suelo utilizar con proyectos hechos con Bootstrap? 

Lo primero que hago es definir mis variables CSS en la seccion 'Custom Properties' 

Si tengo que resetear alguna etiqueta en particular lo hago en la seccion 'Reset Styles'

Si tengo que modificar las clases utilitarias, los auxiliares o el codigo css de los componentes(elementos) de bootstrap lo hago en la seccion 'Bootstrap Styles'

Si tengo que generar nuevas clases lo hago en la seccion 'My Styles'

## Definiendo variables CSS y fuentes tipograficas

Debemos analizar si vamos a utilizar alguna tipografia y los colores principales

si hay una pequeña paleta de colores donde el color _rosa_ es el color principal

tambien hay un color azul marino.

estoy usando una tipografia _''raleway''_ `https://fonts.google.com/selection/embed` 

Tengo la costumbre de aplicar `font-family` a la etiqueta `<html>` pero en bootstrap lo aplica en la etiqueta `<body>`

Entonces la familia de fuente la tengo que aplicar al `<body>` 

Recuerda, que si quieres definir tus variables y exista para todo el documento lo ideal es hacerlo en un selector `:root`

```css
:root{
    --first-color: rgb(217, 0, 98);
    --first-alpha-color: rgba(217, 0, 98, 0.75);
    --second-color: rgb(20, 25, 45);
    --second-alpha-color: rgba(20, 25, 45, 0.75);
    --third-color: rgb(80, 20, 100);
    --third-alpha-color: rgba(80, 20, 100, 0.75);

    --link-color: rgb(80, 158, 227);
    --link-color: rgb(110, 168, 254); /*mdo*/
    --link-color: rgba(110, 168, 254, 0.75); /*el 'alpha' quizá lo aplique en el estado 'hover'*/

    --bg-color: rgb(245, 245, 245);
    --bg-alpha-color: rgba(245, 245, 245, 0.75);
}
```

he decidido definir las variables con el formato `RGB` por que el navegador interpreta el `RGB` es el valor final que renderiza el navegador

estas son las variables que casi siempre declaro


## Código HTML de la cabecera del sitio

antes ponemos el _favicon_ 

el _logo.png_ lo abrí con 'Gimp' despues lo escálé a 32 x 32 px y lo exporté.

El primer componente que vamos a colocar es la barra de navegación. que está en la seccion de **Components**

En Bootstrap la clase que usa es: ``.navbar `` with ``.navbar-expand{-sm|-md|-lg|-xl|-xxl}``

> Todo lo que está en corchete es opcional.


```html
<!-- Barra de navegación -->
    <nav class="navbar navbar-expand-lg bg-secondary">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img src="img/logo-transparente.png" alt="Studio Manchas">
        </a>
        <!-- boton de la hamburguesa -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- colapso -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- tiene un atributo de accesibilidad par las personas() 'aria-current' -->
              <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tipos de Sitio
              </a>
              <ul class="dropdown-menu">
                <!-- href="sitios.html#ultimos-proyectos" apunta a un id llamado ''ultimos proyectos'' -->
                <li><a class="dropdown-item" href="sitios.html#ultimos-proyectos">Últimos Proyectos</a></li>
                <li><a class="dropdown-item" href="sitios.html#single-page"><i>Single Page</i></a></li>
                <li><a class="dropdown-item" href="sitios.html#multi-page"><i>Multi Page</i></a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="clientes.html">Clientes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="comencemos.html">Comencemos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contacto.html">¿Interesado?</a>
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
```



> cuando pasa de el tamaño `LG` es que pasa a ser una barra horizontal

> modificamos el navar a nuestros requerimientos

> dentro de `nav` tiene un componente adicional llamada `collapse`

> El envolvente de todo lo que es menú que se oculta en vertical y se muestra en horizontal es el `collapse`

> la clase `active` es el identificador visual de la seccion actual

> el logotipo en cualquier sitio hace referencia a la seccion de `inicio` 

> me gusta poner en _italica_ las palabras que son agenas al idioma (ingles, tecnisismos, palabras muy concretas)

> Resumen, _Nav_ tiene 3 elementos: Marca(texto o imagen), collapse, boton de la hamburguesa
## Código CSS de la cabecera del sitio

areglamos el enorme tamaño de nuestro logotipo para eso 

> podriamos copiar la forma en que lo  hace bootstrap `https://getbootstrap.com/docs/5.3/components/navbar/#image` nos sugiere estas medidas `width="30" height="24"` creo que hacemos mas caso a la altura

O podriamos usar nuestros conocimientos de CSS 

>  la imagen está dentro de un enlace `<a>` que tiene una clase llamada `navbar-brand`

```css
    .navbar-brand img{
        height: 24px;
        width: auto;
    }
```
el tamaño de la img del perrito era muy pequeño asi que con 'GIMP' hice lo siguiente:

>> fui a la pestaña _imagen_

>>> tamaño del lienzo

>>>> lo centré y lo redimencioné. Y al final lo _Exporté_


Cambiamos el color de la cabecera `https://getbootstrap.com/docs/5.3/components/navbar/#color-schemes`

Pero no quiero esos colores que me ofrece bootstrap entonces cambiamos el color. bootstrap nos da la opcion de ponerlo a la etiqueta, pero es una mala práctica.

```css
.bg-secondary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;
}
```

> pero no funciona ¿por que? tiene la clase `!important` 

> `!important` gana por espacificidad

> entonces tambien ponemos `!important` a nuestra linea css

> para el color de la tipografia agregamos la clase `navbar-dark`

En diseño los elementos de la cabecera están centrados, lo que significa que están dentro de un contenedor

> entonces de `class="container-fluid"` lo escribimos de esta manera `class="container"` de esta manera aplica un espaciado al principio y al final

> empujamos el menu de navegacion a la derecha

## Modificando la posición del menú para desktop

para podernos ubicar el alcance que tiene la clase `.collapse` y `<ul>` aplicamos un borde a cada una.

¿Cuál es la propiedad que nos permite manejar las distancias externas en el modelo de caja? **margin** 

> usamos _margin-left_ = ``ms-lg-auto`` documentacion `https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding`

```html
    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class=" navbar-nav ms-lg-auto">
           </ul>
    </div>        
```

## Aplicando estilos a los enlaces del menú mobile

En el estado hover tenemos la iluminación de los `<li>` de la barra de navegación y tiene el color ``first-color``

Observa que toda las etiquetas `<li>` tienen la clase `nav-item`, entonces aplicamos estilos a esa clase, manteniendo el orden alfabeticamente.

> modificamos la clase `nav-item` en el estado hover

```css
    .nav-item:hover{
  background-color: var(--first-alpha-color);
}
```

pero el cambio lo hace subitamente, entonces aplicamos una transicion.

ve que el texto está muy pegado al margen de la izquierda

> me combiene aplicar un _padding_ o un _margin-left_ a esos elementos.

> funcionó el _padding_

tambien debemos aplicarle estilos a los enlaces `<a>` como color de letra y una negrita(bold) y en el estado hover las letras sean de color blanco

```css
    .nav-link {
        color: var(--first-color);
        font-size: 1.25rem;
        font-weight: bold;
    }
    .nav-link:hover{
        color: var(--bs-white); /*esta variable es de bootstrap*/
    }
```

> ponemos en negrita nuestro logo colocando la clase `fw-bold` lea la documentacion `https://getbootstrap.com/docs/5.3/utilities/text/#font-weight-and-italics`

> para poner estilos al logo busqué 🔍: 'etiquetas para texto que trabajan en linea html'

El icono de hamburguesa es muy sutil, le vamos a quitar ese contorno como de `out-line` y al pasar con el maus se ilumina de color rosa

## Aplicando estilos al botón de hamburguesa

Para modificar los elementos de la hamburguesa vamos a empesar a haquear a bootstrap

> inspecionamos el boton de hamburguesa

> Buscamos en el css de Bootstrap los nombres de clases por que esas barritas de la hamburguesa se forman con un _background image _en formato vectorial al estilo de _data-image_ (la imagenes que se escriben con texto) 

```css
    .navbar-toggler-icon {
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        vertical-align: middle;
        background-image: var(--bs-navbar-toggler-icon-bg); /*contiene imagen vectorial*/
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
    }
```

buscamos esta variable: `--bs-navbar-toggler-icon-bg`

```css
.navbar-dark,
.navbar[data-bs-theme=dark] {
  --bs-navbar-color: rgba(255, 255, 255, 0.55);
  --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);
  --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);
  --bs-navbar-active-color: #fff;
  --bs-navbar-brand-color: #fff;
  --bs-navbar-brand-hover-color: #fff;
  --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
```
es muy interesante, por que están poniendo una imagen de fondo están construyendo un 'svg' pero hecho con la tecnica del ``data:image``

`'rgba%28255, 255, 255, 0.55%29'`

> `%28` es como se codifica el parentesis en esto de las _data:images_ asi como en las urls cuando tenemos un espacio en blanco el espacio en blanco se codifica con %20.

>> `%28` es el parentesis que abre, `%29` es el parentesis que cierra

>>> `255, 255, 255, 0.55` es el color de las barritas al 0.55 por ciento de opacidad

Si yo quiero modificar los valores el color de las barritas de la hamburguesa entonces simplemente juego con esta variable: `--bs-navbar-toggler-icon-bg` pero no existe en el root entonces hacemos lo siguiente: 

```css
    .navbar-dark .navbar-toggler{
        --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        transition: all 0.3s ease-out;
    }
    .navbar-dark .navbar-toggler:hover{
        --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28217, 0, 98, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        opacity: 0.75;
    }
```

el cambio de fondo no es una función animable, pero si yo empiezo a jugar con el valor de la opacidad ahi si puedo lograr una trnsicion

ve que no tiene el borde del boton ¿como le quito ese borde al _navbar-toggler_?

`https://getbootstrap.com/docs/5.3/utilities/borders/#subtractive`

> recuerda, no tienes que aprenderte las clases

por el padding el submenú tiene unos errores.

## Aplicando estilos al submenú

recuerda que le aplicamos un _padding-left_ a los `<li>` para que se alejaran un poco.

Quizá lo que nos combiene es aplicar _margin_ pero al enlace que está dentro de las `<li>`s para que las `<li>`s  no se muevan y por ende no se me muevan las `<li>` que estan alineadas dentro del _dropdawn-list_ 

```css
  .dropdown-item {
  color: var(--first-alpha-color);
  font-weight: bold;
  /* transition: all 0.8s ease-out; */
  }
  .dropdown-item:hover {
    color: var(--bs-white);
    background-color: var(--first-alpha-color);
    transition: all 0.3s ease-out;
  }
```
al ya no aplicar el _padding-left_ al `<li>` ya no se me encima ese color rosa

a nivel de color tambien manejamos una jerarquia.

los que están en color al 100% son los enlaces principales

y para el submenú manejamos el color `--first-alpha-color`

Tampoco vamos a aumentarle el tamaño de la letra para que visualmente haya una jerarquia

Le aplicamos una transicion

## Aplicando estilos al menú para desktop

tendriamos que cambiar el color de fondo al hover (es como un boton de los años 2000). en la media query

```css
  @media (min-width: 992px) {
  .nav-item:hover {
    background-color: transparent;
  }
}
```
si ustedes saben css le van a sacar mucho provecho a bootstrap.

## código HTML del pié de página

el footer se comporta de la misma manera que la cabecera

vena que los iconos se van espaciando (lo resolvemos con flexbox)

vean que está dentro de un contenedor 

para incorporar iconos usé esta etiqueta `<i class="bi bi-instagram"></i>`

el nombre de los iconos de las redes sociales por defecto es el nombre mismo de dicha red social.

Un tip, si le ponene m.me/(ya sea una página o el nombre de un perfil válido en messenger) les abre una conversación en mesenger

para whatsapp usamos la siguiente api.

> `<a href="https://api.whatsapp.com/send?phone=59176503020" target="_blank">`

si el usuario está usando la interfaz de _whatsapp_ en su computadora en el mobil le abriria la comversacion en la aplicación de _whatsapp_ 

```html
  <footer class="bg-dark">
      <nav class="d-flex justify-content-around">
        <!-- a[href="https://.com"][target="_blank"]*7>i.bi.bi- -->
        <a href="https://facebook.com" target="_blank"><i class="bi bi-facebook"></i></a>
        <a href="https://twitter.com" target="_blank"><i class="bi bi-twitter"></i></a>
        <a href="https://youtube.com" target="_blank"><i class="bi bi-youtube"></i></a>
        <a href="https://instagram.com" target="_blank"><i class="bi bi-instagram"></i></a>
        <a href="https://m.me/diegotvramos" target="_blank"><i class="bi bi-messenger"></i></a>
        <a href="https://api.whatsapp.com/send?phone=59176503020" target="_blank"><i class="bi bi-whatsappk"></i></a>
        <a href="https://.com" target="_blank"><i class="bi bi-"></i></a>
      </nav>
      <!-- a {Studio Corvus} -->
      <small class="text-white">&copy; 2024 diseñado por 🐾Manchas🐾 y <a href="https://github.com/diegotvramos" target="_blank">@diegotvramos</a> </small>
      
    </footer>
```

## Codigo CSS del pié de página

este sitio es inspiración de [Studio Corvus](https://www.studiocorvus.com/) 

El contenido del `footer` lo vamos a meter a un contenedor (para delimitar el contenido)

Vamos a dar estilos a los enlaces.

¿como logro centrar y espaciar los elementos?


la **propiedad** `justify- content` nos permite repartir el espacio en el eje transversal (me refiero al horizontal) nos comviene el **valor** `space-evenly` por que si considera las orillas

y centramos el texto. pero recuerda que la etiqueta `<small>` es una etiqueta de linea(solo ocupa el espacio que requiere) entonces la clase `text-center` se lo aplicamos a su contenedor padre `container`

el texto y los iconitos están muy pegaditos entonces le puedo aplicar un _padding_ ala etiqueta `<footer>` 

![padding-footer](/assets/padding-footer.JPG)

vamos hacer un poco mas grande los enlaces (los iconos) por que están muy pequeños

>> yo lo podria hacer con un `h4` o el tamañod `display`

pero se lo tendria que agregar a cada iconito la clase `fs-4`(son responsivas)

> `https://getbootstrap.com/docs/5.3/utilities/text/#font-size`

> **Para buscar las clases en Bootstrap** busca por el nombre completo de la propiedad CSS, así  _margin top_, _Font size_, _margin padding_


```html
  <footer class="bg-dark p-3">
      <div class="container text-center">

        <nav class="d-flex justify-content-evenly border-bottom border-secondary mb-2 pb-2">
          <!-- a[href="https://.com"][target="_blank"]*7>i.bi.bi- -->
          <a href="https://facebook.com" target="_blank"><i class="bi bi-facebook fs-4"></i></a>
          <a href="https://twitter.com" target="_blank"><i class="bi bi-twitter fs-4"></i></a>
          <a href="https://youtube.com" target="_blank"><i class="bi bi-youtube fs-4"></i></a>
          <a href="https://instagram.com" target="_blank"><i class="bi bi-instagram fs-4"></i></a>
          <a href="https://m.me/diegotvramos" target="_blank"><i class="bi bi-messenger fs-4"></i></a>
          <a href="https://api.whatsapp.com/send?phone=59176503020" target="_blank"><i class="bi bi-whatsapp fs-4"></i></a>
          <!-- <a href="https://.com" target="_blank"><i class="bi bi-"></i></a> -->
        </nav>
        <small class="text-white">
          &copy; 2024 diseñado por 🐾Manchas🐾 y <a href="https://github.com/diegotvramos" target="_blank">@diegotvramos</a>
        </small>
        
      </div>
    </footer>
```

## Fijando la barra de navegación

Al poner 50 `<br>` nuestra barra de navegación se pierde.

¿Como la podemos volver fija?

> `https://getbootstrap.com/docs/5.3/components/navbar/#placement`

>> la podemos _fixed_(fijar) arriba, abajo y tambien dejar la de manera _sticky_(pegajosa) arriba y abajo

>> `fixed-bottom` tapa el pie de página, por que está posicionado de manera fija y además (en versión mobile hace salir una lina blanca abajo), la posicion _fixed_ sale de la disposicion del html por eso tapa el contenido que está inmediatamente abajo de él 

entonces yo prefiero:

>> `sticky-top` es una mescla entre posicionamiento relativo y posicionamiento fijo y no tapa el texto

`<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-secondary">`

Con esto ya tenemos las secciones comunes, ahora toca generar el `Html` de cada una de las secciones esto lo vamos hacer de forma repetitiva por que solo estamos utilizando html y css.

podemos tomar el codigo fuente de este sitio y lo modifiquemos con php y con algun _statik site genrator_ para genrár el código de manera mas agil.

## Generando los archivos HTML de cada sección 

a la etiqueta `<main>` aplicamos un poco de _padding_ para que se separe un poco de la cabecera 

y ya que tenemos el template index lo copiamos para cada una de las secciones. 

> No olvides cambiar el título de las `<h1>`

## Maquetando HTML del home

hacemos un análisis del contendido a maquetar, tanto para la version mobil y para la version descktop.

Podemos ver que el fondo de la seccion tiene un degradado

vamos a trabajar esta primera seccion

![seccion-home](/assets/seccion-home.JPG)

ponemos un color de fondo propio

así 

```css
  .bg-gradient-blue-green{
  background-color: rgba(83, 184, 152, 1);
  /* background-image: linear-gradient(
    135deg,
    rgba(47, 145, 224, 0.91),
    rgba(7, 31, 51, 0.97) 79%
    ); */
  background-image: linear-gradient( /*tu decides cual aplicar*/
    131deg,
    rgba(28, 118, 173, 0.92),
    rgba(83, 184, 152, 1)
);
background-image: linear-gradient(
    131deg,
    rgba(159, 0, 217, 0.92),
    rgba(83, 184, 152, 1) 
);
}
```
si observas ve que el contenido tiene un espaciado a los lados(está delimitado), eso quere decir que está dentro de un `.container

hay dos secciones, cada una tiene 4 elementos. usamos la disposicion responsiva de Bootstrap `https://getbootstrap.com/docs/5.3/layout/grid/`

el boton del primer elemento de la seccion 1 es un enlace que tiene la forma de un boton que nos lleva a la seccion de servicios _(call-to-actions)_

no olvides poner el id `#servicios` 

>> solo puede haver un nombre de `id` único

ponemos la imagen. pero si la imagen es grande, desborda el tamaño de el container que contiene a flexbox.

## Estilos CSS del home

lo primero que vamos a agregar es que las imagenes sean responsivas. y evitemos el tipico _scroll_ horizontal

> En el buscador de _Bootstrap_ vamos a poner: 'responsive image' y copiamos esta clase `.img-fluid.` que aplica un ancho del 100% de su contenedor `max-width: 100%; and height: auto;`

El color de texto está en color blanco, entonces aplicamos la clase `text-white` a toda la fila.

mira que el tamaño de la fuente de los parrafos es un poco mas grande, podemos usar el 'font-size' de Bootstrap  aplicamos ala etiqueta `<p>` la clase `fs-5`

damos estilos al anlace que parece boton 'bottons' con N
 
pueden ser botones `buttons`, pueden ser inputs, y pueden ser enlaces y le aplicamos la clase `btn btn-success`

```css
  
.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #0d6efd;
  --bs-btn-border-color: #0d6efd;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0b5ed7;
  --bs-btn-hover-border-color: #0a58ca;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0a58ca;
  --bs-btn-active-border-color: #0a53be;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #0d6efd;
  --bs-btn-disabled-border-color: #0d6efd;
}
```

tambien le aplicamos la clase negrita al boton 'bold' `https://getbootstrap.com/docs/5.3/utilities/text/#font-weight-and-italics`

> tip el color de fondo debes hacerlo con el color original del monitor, osea desactivar por un momento proteccion a la vista.

la clase `row` está maquetada con flexbox entonces podemos activar la propiedad `order`

![flex-order](/assets/flex-order.JPG)

te puedes guiar de la documentacion de bootstrap. `https://getbootstrap.com/docs/5.3/utilities/flex/#order`

lo que quiero es pasar el elemento del texto a la columna 2

Por defecto el valor del ``order`` es `0` por que en _Flexbox_ todo los elementos comienzan con `0`

```html
 <article class="col-12 col-lg-5 order-lg-1">
            <h2>Sitios web responsivos</h2>
            <p class="fs-5">Es importante proporcionar a tus visitantes una experiencia web óptima en dispositivos móviles. El diseño web responsivo significa que tu sitio se adapta instantáneamente al dispositivo que el visitante utiliza. ¡Mi trabajo es hacer, que la visita de tus usuarios sea lo más agradable e intuitiva para ellos!</p>
          </article>
```


con esto el párrafo pasaria a la segunda columna en el tamaño `LG`

tenemos que alinear al centro en el eje transversal osea en la 'Y'

¿Usamos `align items` o `Align content`?

Esta documentacion explica mejor.

>> `https://developer.mozilla.org/en-US/docs/Web/CSS/align-items`

>> `https://developer.mozilla.org/en-US/docs/Web/CSS/align-content`

me funcionó el `Align-items:center;` ¿Por qué? como mi flexbox está en fila(por defecto) 

La alineación de los elementos en el eje transversal se logra con la _align-items_ propiedad del contenedor flexbox o _align-self_ con la propiedad de los elementos individuales. En el caso de un contenedor flexbox de varias líneas, con espacio adicional en el eje transversal, puede utilizarlo ``align-content`` para controlar el espaciado de las filas.

La imagen definitiva para enterter el eje transversal. Si el orden está en fila, el eje (main) principal estária en el eje X y el eje transversal seria el eje Y

ahora si el orden está en fila(columna) el eje principal está en el eje Y y el eje transversal pasaria a ser el eje X

![definitiva-cros](/assets/definitiva-transversal.png)

![ejex-flexbox](/assets/ejes-flexbox.JPG)



```html
  <section class="row text-white align-items-lg-center">
          <!-- tengo 4 elementos -->
          <!-- <article class="col-12 col-lg-5 align-content-lg-center"> -->
          <article class="col-12 col-lg-5">
            <h2>¿Necesitas un sitio web increíble?</h2>
            <p class="fs-5">Un sitio hermoso, moderno, responsivo y personalizado para tu compañia, negocio, marca, servicio o producto.</p>
            <a class="btn btn-success fw-bold" href="#servicios">¡Sí, empecemos !</a>
          </article>
          <article class="col-12 col-lg-7">
            <img class="img-fluid" src="img/header-image.png" alt="¿Necesitas un sitio web increíble?">
          </article>
          <article class="col-12 col-lg-5 order-lg-1">
            <h2>Sitios web responsivos</h2>
            <p class="fs-5">Es importante proporcionar a tus visitantes una experiencia web óptima en dispositivos móviles. El diseño web responsivo significa que tu sitio se adapta instantáneamente al dispositivo que el visitante utiliza. ¡Mi trabajo es hacer, que la visita de tus usuarios sea lo más agradable e intuitiva para ellos!</p>
          </article>
          <article class="col-12 col-lg-7 ">
            <img class="img-fluid" src="img/header-image-2.png" alt="Sitios web responsivos">
          </article>
        </section>
```

> los _containers_ en bootstrap 5 han cambiado de proporcion, por eso se ve mas amplio el nuestro

## Maquetación HTML de cards del home

Vamos a ver como está el responsive de las targetitas

En tamaño `LG` está a 4 en fila

En tamaño `SM` está a 2 

En Mobil esta a 1

Dentro de la seccion, creamos 4 _articles_ 

Buscamos en Bootstrap 🔍 'card' y copiamos el código de la primera targeta ejemplo.

```html
  <section id="servicios" class="row min-vh-100 align-items-lg-center">
          <article class="col-12 col-sm-6 col-lg-3">
            <div class="card p-3 " style="width: 18rem">
              <img src="img/icon-sites.png" class="card-img-top" alt="Sitio web nuevo">
              <div class="card-body">
                <h5 class="card-title">Sitio web nuevo</h5>
                <p class="card-text">¿Necesitas un sitio web (nuevo) y 100% responsivo?</p>
                <a href="sitios.html" class="">
                  Más detalles
                  <i class="bi bi-chevron-double-right"></i>
                </a>
              </div>
            </div>
          </article>
  </section>
```

le ponemos un _title_, tambien le ponemos una _description_

Esos links son _call to actions_ hacia la seccion: SITIOS, CLIENTES, COMENCEMOS, CONTACTO

Más detalles lleva una flechita y lo buscamos en los iconos de bootstrap llamada 🔍 chevro 🔍

ve que el tamaño de la imagen está ocupando el tamaño de la pantalla (bootstrap trae unas clases que controla el viwport)

Toda la seccion ocupa una altura minima de 100vh utilizamos la clase `min-vh-100`
![min-vh-100](/assets/min-vh-100.JPG)

¿como lo centro?

> Recuerda que la `<section class="row">` está maquetada con flexbox 

> `<section id="servicios" class="row min-vh-100 align-items-lg-center">`

¿Por qué `LG`?

seamos sinceros en el movil no me interesa que esté centrado por que en mobil va ir una tras de la otra

## Estilos CSS de las cards del home

vamos a crear una clase propia para pegar como fondo a las imágenes PNG. Y como el color de la imagen PNG es blanca se va notar mejor.

modificamos el contenido de las cards que faltan, para la propiedad `alt=""` ponemos el mismo nombre del title de la card



![no-centrada](/assets/no-centrada.JPG)

ve que no está centrada

¿como lo centro? yo creo que hay que manejar márgenes laterales para que la card se pueda distribuir 

> le aplicamos un `margin auto` a los laterales (¿recuerdas las clases auxiliares de Bootstrap?)

> `https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding` DOC.

> `me-auto ms-auto `(margin end {e}) (margin start{s}) o puede usar la clase:

> `mx-auto` _``x`` - for classes that set both *-left and *-right_

![centrado-perfecto](/assets/centrado-perfecto.JPG)

con eso conseguimos el centrado perfecto 

¿Como hago para separarla un poco en version movil?

de igual manera voy a usar un `margin-botton`. P

Para que la seccion se separe de la seccion de arriba voy a aplicar un 

> `mb-5` pero a la seccion de `row` osea arriba. `<section class="row text-white align-items-lg-center mb-5">`

![comparativa](/assets/comparativa.JPG)

eso hace que se separe ambas secciones


tenemos un pequeño problema.

![muy-pegados](/assets/muy-pegados.JPG)


las targetas estan muy pegadas en tamaño pc ¿como logro un poco de separación entre las targetas?

**conociendo como funciona CSS**

modelo de maquetación de flexbox

Cuando aplicas _display-flexbox_ a un elemento por defecto a los elementos hijos, el padre flexible ignora la propiedad del ancho o del alto dependiendo la direccion del flexbox

osea adapta el contenido al tamaño que requiera.

¿que pasa si al `<article>` que es la columna que contiene a la card yo le aplico la clase ``d-flex``? le vuelvo un elemento flexible y por defecto su hijo que es una _card_ lo que hace que se adapte al **tamaño de las imágenes** lo cual hace que incluso se vean más orgánicos, 

está ignorando el `style="width: 18rem"` de la card

a las columnas las volvemos contenedores flex.

`<article class="col-12 col-sm-6 col-lg-3 d-flex">`

![aplicando-d-flex](/assets/aplicando-d-flex.JPG)

mira lo que pasa si ponemos `min-vh-100` en tamaño tableta, toda las cards se alargan hasta llenar la el 100 de la altura de la pantalla.

![min-vh-1000](/assets/min-vh-1000.JPG)

podemos observar que ocupa el 100 de la pantalla

![vista](/assets/vista-min-vh-100.JPG)

mira lo que pasa si ponemos `max-vh-100` en tamaño tableta, toda las cards se ponen en su tamaño mas original

![max-vh-1000](/assets/max-vh-1000.JPG)


lo **solucioné** 😊 con esta clase ya que esta clase aliniea los elementos al centro del eje `Y` (ye)


> `align-items-sm-center` donde `SM` representa el tamaño de la tableta.  asi mentengo el `min-vh-100` para que ocupe toda la pantalla

resultado: 

`<section id="servicios" class="row min-vh-100 align-items-lg-center align-items-sm-center ">`

![align-items-center](/assets/align-items-center.JPG)


**`align-content: center;`**

resultado con: `align-content-sm-center` por que esta clase le viene como anillo al dedo por que son mas de 2 filas de contenido   fijate en el ejemplo que pone  **CSS Flexbox Cheatsheet**

![align-content-center](/assets/align-content-center.JPG)


con `align-items-lg-center` en PC ve que está desalineado

![align-items-center-pc](/assets/align-items-center-en-pc.JPG)

**`align-content-lg-center`**

mira que con eso se alinean perfectamente.

![alig-content-center-en-pc](/assets/align-content-center-en-pc.JPG)


creamos una clase para el color del link y lo agregamos a la clase de la etiqueta `<a>`, creo que no lo usaré

```css
  .text-third {
  color: var(--third-color);
}
```

## Estructurando las subsecciones de sitios

otro sitio? `https://bad-dog.netlify.app/#interesado`

Ve que el color de fondo es gris, entonces voy a crear una clase css para el _background_

```css
  .bg-color {
    background-color: var(--bg-color);
  }
```

y se lo agregamos a la etiqueta `<main class="pt-5 bg-color">`

Vamos a tener 3 secciones de contenido, dichas secciones ya tienen un nombre de _id_ 

Quiero centrar la atención del usuario al contenido que estoy mostrando, así que no quiero que se vea parte de la otra seccion.

¿como lo resuelvo?

le damos la anchura del view port y esto lo aplicamos a las 3 secciones. con la clase `min-vh-100`

```html
  <main class="pt-5 bg-color">
      
      <section id="ultimos-proyectos" class="min-vh-100"></section>
      <section id="single-page" class="min-vh-100"></section>
      <section id="multi-page" class="min-vh-100"></section>
  
    </main>
```
como la seccion de **Sitios** apunta directamente a un _id_ lo cual hace que lo ponga al inicio y la barra de navegación lo tapa.

podriamos aplicarla la clase de _padding-top_ pero como vamos a hacer un carrusel y una hero image(a pantalla completa y vamos a centrar el contenido) quiza no lo necesitemos

aveces me arrepiento de unas cosas, regreso, seamos sinceros asi es como ustedes en el día a día van a estar maquetando y desarrollando sus proyectos, cometiendo errores regresando a cosas que habian hecho corrigiendo al final es **prueba y error** 


## Código HTML del carrusel de sitios

Ve que tiene un encabezado de nivel 1. entonces ponemos el título `<h1>`y el parrafo `<p>` descriptivo, lo centramos. 

cambiamos el tamaño de fuente(letra) con la clase `fs-5` de bootstrap

En bootstrap buscamos 🔍 carrusel

```html
  <section id="ultimos-proyectos" class="min-vh-100 d-flex">
          <div class="flex-column align-content-center">
            <div class="text-center">
              <h1>Ultimos Proyectos</h1>
              <p class="fs-5">
                Desarrollo sitios de una sóla y de múltiples páginas 100% responsivos
              </p>
            </div>
              <!-- autoplay -->
              <!-- para que no se tape en tamaño pc le di un ancho(witht) del 50% y  para centrar use un marginX automatico -->
              <div id="carouselExampleAutoplaying" class="carousel slide w-50 mx-auto" data-bs-ride="carousel">

                <!-- Añadí este bloque y ademas igualé el nombre de los id hijos a el id padre  creo que la clase que lo hace autoplay es: 'data-bs-ride="carousel"'-->

                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="img/work-slide-1.jpg" class="d-block w-100" alt="work-slide-1">
                  </div>
                  <div class="carousel-item">
                    <img src="img/work-slide-2.jpg" class="d-block w-100" alt="work-slide-2">
                  </div>
                  <div class="carousel-item">
                    <img src="img/work-slide-3.jpg" class="d-block w-100" alt="work-slide-3">
                  </div>
                  <div class="carousel-item">
                    <img src="img/clients-7.jpg" class="d-block w-100" alt="work-slide-3">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            </div>
          </div>
        
        </section>
```

para centrar el contenido cuando se haga click en la seccion 'ultimos proyectos' usé `d-flex` todo lo puso en una sola fila entonces usé la clase `flex-column` para que lo ordene en columnas y por ultimo usé `align-content-center` para centrar el contenido ya que está ocupando el 100% de la pantalla

```html
<section id="ultimos-proyectos" class="min-vh-100 d-flex">
          <div class="flex-column align-content-center">
           </div>
</section>            
```

hay un pequeño detalle, ve que el contenido se tapa.

![contenido-tapado](/assets/tapa-contenido.JPG)

lo solucioné usando un ancho _width 50%_ `w-50` se ve pequeño en celular pero es lo que se puede hacer por el momento.

![width](/assets/width-50.JPG)+


pero en tamaño mobil el carusel a `50%` es muy pequeño. asi que tube que usar media querys para cambiar el valor de esta clase.

```css
.mw-100 {
  max-width: 100% !important;
}

@media (min-width: 576px) {
  .mw-100{
    width: 75% !important;
  }
}


@media (min-width: 992px) {
  .mw-100{
    width: 50% !important;
  }
  }
```


y margenes automaticos `mx-auto`en el eje x para centrar el carrucel.

cuando pongo una imagen mas grande como que se desborda y ya no funciona el carrucel. demas no olvides modificar estos valores.

```html
                  <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" aria-label="Slide 5"></button>
```

ojo si ustedes trabajan con frameworks como Bootstrap que es copiar pegar y modificar código fijate como está estructurado el carusel.

Si cambian el nombre de Id pues simplemente hagan referencia de que en el atributo del boton `data-bs-target=""` pues tengan el mismo id que seria el control de atras y adelante

ve que la primera imagen tiene la clase `active` y solo lo tiene ese elemento, y si lo ponen a dos elementos practicamente van a copiar al carusel por que va dejar de funcionar, la clase `active` es la que le indica que imagen es la primera que va cargar dentro del carusel y esto lo toma la programación JS de Bootstrap.

## Modificando el color de las flechas del carrusel.

analicemos el codigo html de el carucel

ve que las flechitas se ayudan de un _background-image_ 

formada por una _data_image_ mediante un formato vectorial la flechita de la imagen .

si buscamos al clase : `"carousel-control-prev" ` de...


```html
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
  
  </button>
```


```css
  .carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e") /*rtl:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")*/;
}


.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") /*rtl:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e")*/;
}
```

¿Cuál seria el color de esto: `%23fff'`?

> pues el `fff`; por que el %23 es la codificacion de el #(hashtac) en el _data-image

> comvertimos esto ``rgba(217, 0, 98, 0.75) ``=> codigo hexadecimal `#d90062bf`

y cambiamos el color con el codigo hexadecimal convertido así: ` fill='%23d90062bf'%3e%3cpath `

## Creando un Hero Image dinámico

Primero empecemos por la construccion del html de esta seccion

minimizamos la anterior seccion.

Le voy agregar tanto a la seccion _single-page_ como a la sección _multi-page_ la clase `bg-hero-image` por que a travez de esa clase vamos a  poner la imagen de fondo 

¿como vamos a lograr poner la imagen de fondo?

en mi hoja de estilos en la seccio de estilos propios _My Styles_ 

creamos la siguiente clase con estos estilos:

```css
  .bg-hero-image{
    background-image: var(--bg-image); /*esta variable no está declarada en el Root*/
    background-repeat: no-repeat; /*para que no se repita el fondo*/
    background-size: cover;
  }
```
voy a usar la tecnica de

```html
  <section id="single-page" class="min-vh-100 bg-hero-image" style="--bg-image: url(../img/site-singlepage.jpg)">
        <h2><i>Single Page</i></h2>
  </section>
```

> el atributo `style` lo voy a utilizar para declarar el valor de esa variable '_--bg-image_' que he asignado a este selector (clase): `.bg-hero-image{}`

> ¿Qué es un selector? `https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Selectors#tipos_de_selectores`

si no usara esta tenica usariamos dos selectores distintos para cada _heroimage_ 

entonces con esta tecnica volvemos mas dinamico esta clase llamada `.bg-hero-image{}`

No estigmatisen siempre el atributo 'Style' cuando pasas variables css a travez del atributo 'style' puedes volver a un selector CSS ¡Dinámico! por que ya no necesito crear un selector de imagenes para cada seccion

## Aplicando estilos al Hero Image

la primera hero-image (imagen de fondo) está al 100% del contenido, pero si escribimos contenido no es legible(no se aprecia la visibilidad del texto) debido a las partes oscura de la imagen

Entonces hay que ponerle una capa de opacidad 

entonces ala etiqueta `<article>` le ponemos un color de fondo con transparencia

ademas le estoy poniendo un blur(difuminacion): 

![blur-article](/assets/blur-article.JPG)

ademas tiene que heredar el tamaño de su contenedor padre, entonces aplicamos la siguiente clase:

`<article class="bg-alpha-color min-vh-100">`

Una de las caracteristicas de _hero-image_ es que el contenido va centrado

mira que el contenido está fluyendo al 100% pero el resultado final del sitio podemos ver que el contenido está dentro de un contenedor `.container`, por que no revasa el contenido de la cabecera. y este container ser el unico hijo de esté `<article>` y puedo aplicar la clase `d-flex` para centrarlo en el eje `Y` uso la siguiente clase `align-items-center`

```html
  <article class="bg-alpha-color min-vh-100 d-flex align-items-center ">
          <div class="container">
            <h2><i>Single Page</i></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ipsa ipsum tenetur minus laboriosam nisi fugiat culpa voluptatem atque, veniam, a voluptatum at. Ad, voluptatum excepturi veniam maxime iusto officia?</p>
          </div>
  </article>
```
![centrado-Y](/assets/centrado-Y.JPG)

## Creando sección single page

Si analizamos, tenemos un boton que hace un _call-to-action_ a la seccion de contacto, pero es un enlace en forma de boton,

Tenemos un encabezado, y abajo un texto muy pequeño.

Tambien tiene un enlace al la seccion de 'contacto' 

Observa que en la version de PC el contenido empieza apartir de la mitad de pantalla

¿como hago eso?

Entonces la mejor solucion seria, usar el grid de 12 columnas de flexbox en bootstrap lo encuentras como: `https://getbootstrap.com/docs/5.3/layout/columns/#offsetting-columns`

Entre el boton y el h2 hay una gran distancia, eso significa que hay que aplicarle un _margin-bottom_

> documentación: `https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding`

¿Como poner palabras en negrita de un parrafo sin estar copiando y pegando?

> así: few few few ``b{few}`` fwe y el editor de texto lo pone así => ``<b>few</b>``

Para quitar la linea del link usamos la clase `text-decoration-none`

Buscamos el Icono de la palomita check. `<i class="bi bi-check"></i>`

Vé que son 3 parrafos maquetados a 2 columnas, voy a usar un conenedor fila `div`

> Recuerda: los enlaces trabajan en linea asi que no se le puede aplicar un _margin-bottom_ (una de las caracteristicas de los elementos en linea es que ignora los margenes en la vertical) pero si es un enlace de tipo boton entonces si aplica

a si que mejor aplicamos un _margin-top_ `mt-5` al elemeto de abajo


## Creando sección multi page

```html
   <section id="multi-page" class="min-vh-100 bg-hero-image" style="--bg-image: url(../img/site-multipage.jpg)">
        <article class="bg-alpha-color min-vh-100 d-flex align-items-center ">
          <div class="container">
            <article class="col-12 col-lg-6">
              <a class="btn btn-lg btn-success text-white mb-5" href="contacto.html">
                <b>Desde $500 <small>USD</small></b>
              </a>
              <h2 class="">Sitio multipágina</h2>
              <small>El precio puede ser más bajo (o más alto) dependiendo de los requisitos de su proyecto.</small>
              <p class="my-5 fs-5">Un <b>sitio web de varias páginas</b> consta de dos o más páginas. Este formato es útil si tiene ciertos elementos que desea mantener separados por páginas y urls diferentes.</p>
              <a class="fs-4 text-decoration-none fw-bold" href="contacto.html">
                Solicite una cotización ahora <i class="bi bi-chevron-double-right"></i>
              </a>
              <div class="row mt-5">
                <div class="col">
                  <p><i class="bi bi-check"> 2 a 6 páginas.</i></p>
                  <p><i class="bi bi-check">100% Responsivo.</i></p>
                  <p><i class="bi bi-check"> Diseño personalizado.</i></p>
                </div>
                <div class="col">
                  <p><i class="bi bi-check">Corrección de estilo.</i></p>
                  <p><i class="bi bi-check">Edición de imágenes.</i></p>
                  <p><i class="bi bi-check">Soporte.</i></p>
                </div>
              </div>
            </article>
          </div>
        </article>
      </section>
```
a la clse `bg-hero-image` podriamos ponele el _background-position: center;_

```css
  .bg-hero-image{
  background-image: var(--bg-image); /*esta variable no está declarada en el Root*/
  background-repeat: no-repeat; /*para que no se repita el fondo*/
  background-size: cover;
  background-position: center;
}
```
## Maquetado HTML de la sección clientes

si tenemos 8 clientes,  más el título necesitamos un contenedor que tenga una fila con 9 columnas

la celda del título se va desplazar a 12 columnas siempre.

`<article class="col-12 text-center">`

en el buscador de Botstrap buscamos 🔍 'cards' y usamos este modelo: `https://getbootstrap.com/docs/5.3/components/card/#image-overlays`

es una frase que dijo el cliente de la cual estamos citando, entonces para eso nos sive la etiqueta `<blockquote>`

Esta frase no aparece hasta que la pantalla sea de tamaño mediano `md` lo solucionamos agregando la clase: `class="d-none d-md-block"`

```css
  .d-none {
    display: none !important;
  }
  .d-block {
    display: block !important;
  }
```
trabajar con `cards` horizontales no me conviene. por que simulan un chat.

Voy a usar esté tipo de _cards_

`https://getbootstrap.com/docs/5.3/components/card/#image-caps`

Esta tiene pie de _cards_ no la necesito por el momento: 

> `https://getbootstrap.com/docs/5.3/components/card/#card-layout`

Bootstrap tiene una seccion especial para las _links_

> `https://getbootstrap.com/docs/5.3/components/card/#titles-text-and-links`

![card-diference](/assets/card-diference.JPG) 

Observa como una card de tamaño fijo no es responsivo.

Responsivo:
```html
  <article class="col-12 text-center">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              <img src="img/amarillo.jpg" class="card-img-bottom" alt="...">
            </div>
    </article>
```

No responsivo
```html
  <article class="col-12 col-sm-6 col-lg-4">
            <div class="card" style="width: 18rem;">
              <img src="img/amarillo.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
    </article>
```


Para quitar border usamos la clase de botstrap llamada `border-0` y para quitar las esquinas redondeadas usamos: `rounded-0`

Para los colores de texto

> `https://getbootstrap.com/docs/5.3/utilities/colors/`

![colors](/assets/colors.JPG)

pero mejor usa 🔍 'textos Fondos' (_text background_)

> `https://getbootstrap.com/docs/5.3/helpers/color-background/#overview`

![color-background](/assets/color-background.JPG)


Para acomodar las targetas estoy usando la clase `card-group` y en sus hijos inmediatos estoy usando la clase `d-flex` ya que este hijo tien las medidas definidas por mí . hay una clase en bootstrap que es muy similar para las targetas llamada: `<div class="row row-cols-1 row-cols-md-3 g-4">`


> `https://getbootstrap.com/docs/5.3/components/card/#grid-cards`

para quitar los padding interno usamos la clase _gutter-0 `g-0` con esto quitamos los espaciados_

> `https://getbootstrap.com/docs/5.3/layout/gutters/#no-gutters`


MI TECNICA:

![tecnica-card-1](/assets/tecnica-card-1.JPG)

```html
  <!-- <section class="row g-0"> -->
          <section class="card-group">

            <article class="col-12 col-sm-6 col-lg-4 d-flex">
            <div class="card text-bg-dark border-0 rounded-0">
              <img src="img/clients-1.jpg" class="card-img-top" alt="Andy Pandharikar">
              <div class="card-body">
                <h5 class="card-title">Andy Pandharikar</h5>
                <p class="card-text">
                  <small>CEO/Co-fundador, Commerce AI</small>
                  <br>
                  <a href="#" class="card-link">Ver Proyecto</a>
                </p>
                <p class="card-text">
                  <blockquote class="d-none d-md-block">
                    No estábamos satisfechos con ninguna de nuestras opciones anteriores. Pero Bad Dog tuvo lo que teníamos en mente.
                  </blockquote>
                </p>
                <p class="card-text text-white-50"><small>Last updated 3 mins ago</small></p>
              </div>
            </div>
          </article>

          <article class="col-12 col-sm-6 col-lg-4 d-flex">
            <div class="card text-bg-dark  border-0 rounded-0">
              <img src="img/clients-2.jpg" class="card-img-top" alt="Zeb Couch">
              <div class="card-body">
                <h5 class="card-title">Zeb Couch</h5>
                <p class="card-text">
                  <small>Dueño de Zeb Couch</small>
                  <br>
                  <a href="#" class="card-link">Ver Proyecto</a>
                </p>
                <p class="card-text">
                  <blockquote class="d-none d-md-block">
                    He trabajado con Bad Dog en varios proyectos ahora y seguiré trabajando siempre que pueda.
                  </blockquote>
                </p>
                <p class="card-text text-white-50"><small>Last updated 3 mins ago</small></p>
              </div>
            </div>
          </article>

          </section>
```




La segunda TECNICA es como no los propone la _grid-cards_ de _bootstrap_ en la cabezera declaro los tamaños. y el codigo se reduce mucho. 👍👍

![tecnica-card-2](/assets/tecnica-card-2.JPG)


```html
  <section class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-0 ">

    <div class="card">
      <img src="img/bad-dog-studio-logo.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>

    <div class="card">
      <img src="img/bad-dog-studio-logo.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </section>
```

## Maquetado CSS de la sección clientes


vamos a alinear el texto de las targetas al centro en tamaño PC. tambien vamos a poner un color al overlay para poder ver  mejor el texto.

para centrar el texto usamos estas clases:

> `d-flex flex-column justify-content-md-center`

![text-center-flex](/assets/text-center-flex.JPG)


para no estar modificando en cada una mejor usamos la herramienta para reemplazar.

![tecnica-remplazo](/assets/tecnica-remplazo.JPG)

```html
  <article class="col-12 col-sm-6 col-lg-4 d-flex">
            <div class="card text-bg-dark border-0 rounded-0">
              <img src="img/clients-1.jpg" class="card-img-top" alt="Andy Pandharikar">
              <div class="card-body d-flex flex-column justify-content-md-center">
                <h5 class="card-title">Andy Pandharikar</h5>
                <p class="card-text">
                  <small>CEO/Co-fundador, Commerce AI</small>
                  <br>
                  <a href="#" class="card-link">Ver Proyecto</a>
                </p>
                <p class="card-text">
                  <blockquote class="d-none d-md-block">
                    No estábamos satisfechos con ninguna de nuestras opciones anteriores. Pero Studio Manchas tuvo lo que teníamos en mente.
                  </blockquote>
                </p>
                <p class="card-text text-white-50"><small>Last updated 3 mins ago</small></p>
              </div>
            </div>
          </article>
```

## Integrando Modales a la sección clientes.

vamos a bootstrap y buscamos 'modal'

al enlace que abre el proyecto ponemos estos atributos propios de bootstrap con el id (_tiene que ser único_) 

> `data-bs-toggle="modal" data-bs-target="#exampleModal"`

> ¡importante! no olvides poner el `#` por delante en e valor del atributo _data-bs-target_


Para que el modal sea _scrolleable_ `https://getbootstrap.com/docs/5.3/components/modal/#scrolling-long-content`

![scroll](/assets/scroll.JPG)

```html
  <!-- Scrollable modal -->
  <div class="modal-dialog modal-dialog-scrollable">
    ...
  </div>
```


ve que la imagen se desborda

![desbordamiento](/assets/desbordamiento-img.JPG)

para corregirlo debemos hacerlo responsiva en bootrap buscamos 🔍 'reponsive image' `<img src="..." class="img-fluid" alt="...">`

> `https://getbootstrap.com/docs/5.3/content/images/#responsive-images`


cambiamos el color al boton _close_

```css
  .btn-close {
    /* rgb(217, 0, 98) lo comvertimos a hexadecimal = #d90062, ahora lo replazamos en el atributo 'fill': fill='%23d90062'%3e%3cpath*/
    --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23d90062'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e");
  }
```

![btn-close-color](/assets/btn-close-color.JPG)


Tengo un pequeño problema: En el header al momento de seleccionar una seccion no se pinta de color blanco. 

![no-active](/assets/no-active.JPG)

Busqué y encontre que la clase `active` estaba seleccionada en toda las hojas html en la seccion 'INICIO' hay que cambiarlo manualmente a la seccion que corresponda.

`<a class="nav-link active" href="clientes.html">Clientes</a>`

> **``<q>``: El elemento de cita en línea** `El elemento HTML <q> indica que el texto adjunto es una cita corta en línea. La mayoría de los navegadores modernos implementan esto rodeando el texto entre comillas. Este elemento está destinado a citas breves que no requieren saltos de párrafo; para citas de bloque independiente, utiliza el elemento <blockquote>.`


## Maquetando HTML de la sección comencemos.

Analicemos la estructura

Tenemos un contenedor con una fila que siempre va ir a 12 columnas

![comencemos-fila-12](/assets/fila-12-comencemos.JPG)

son 5 pasos cada una con su imagen serian 10 mas la primera, serian 11 seldas(articles)

podemos usar las clases de bootstrap para las letras en italica y bold(negrita) font size (tamaño de letra):

> `https://getbootstrap.com/docs/5.3/utilities/text/#font-weight-and-italics`

> `<p class="fw-bold">Bold text.</p>`, `<p class="fst-italic">Italic text.</p>`, `<p class="fs-1">.fs-1 text</p>`

para que no tenga este error de que la imagen se desborde aplicamos la clase de 'imagen responsiva': `img-fluid`

![imagen-responsiva](/assets/imagen-responsiva.JPG)

Me dí cuenta que en el tamaño tableta las imagenes iban a un costado.

![img-no-center](/assets/img-no-center.JPG)


busque en bootstrap y lo que encontre fue esta clase que centra imagenes: `class="text-center"`

> `https://getbootstrap.com/docs/5.3/content/images/#aligning-images`

```html
  <div class="text-center">
    <img src="..." class="rounded" alt="...">
  </div>
```
ironicamente funcionó 😊😊😊

![img-center](/assets/img-center.JPG)


## Maquetado CSS de la seccion comencemos.

superIndice

`<sup class="text-first-color fw-bold">*</sup>`

los pasos pares 2 y 4 vamos hacer un cambio de orden entre la imagen y el texto en el tamaño `LG`

tendria que hacerlo uno por uno

Pero tener todo el contenido en una sola etiqueta `row` eso me va complicar el juego del ordenamiento.

en las clases auxiliares de flexbox, en la parte de orden Bootstrap solamente tiene hasta 6 valores de orden.

> .order-0
> .order-1
> .order-2
> .order-3
> .order-4
> .order-5

pero yo tengo 12 columnas dentro de una misma fila. entonces mantener el orden me va costar trabajo para hacer esa inversion.

se van a dar cuenta, que va ver veces que podemos resolverlo en una sola fila, pero como en este caso el juego de estar invirtiendo para generar este layout de zic ZACK, me va comvenir que cada pareja de pasos estén dentro de una fila independiente para poder ahi hacer internamente la inversion.

lo que hacemos para solucionarlo es envolver en una seccion cada par de articulos así.

```html
  <section class="row">
          <article class="col-12 col-lg-6">
            <h2>Paso 1</h2>
            <h3>Concepto y Presupuesto</h3>
            <p>Discutimos las primeras ideas durante una breve reunión en sitio, por correo electrónico o video llamada. Siguiendo las ideas iniciales, te presentaré un presupuesto oficial para el proyecto.</p>
          </article>
          <article class="col-12 col-lg-6 text-center">
            <img src="img/workflow-step-1.png" class="img-fluid" alt="Paso 1: Concepto y Presupuesto">
          </article>
        </section>

        <section class="row">
          <article class="col-12 col-lg-6 order-lg-1">
            <h2>Paso 2</h2>
            <h3>Propuesta de Diseño</h3>
            <p>Una vez que se firme y/o acepte la cotización, recibirás la primera factura (50% del monto total acordado). Después del pago iniciaré el proyecto. Estudiaré tu empresa, producto o servicio. Para acelerar el proceso, es necesario que me entregues todo el material del proyecto en este momento (Logo, Textos, Fotos, Mapa del sitio, etc.). En 7 días te presentaré un diseño profesional y apropiado para tu sitio web.</p>
          </article>
          <article class="col-12 col-lg-6 text-center">
            <img src="img/workflow-step-2.png" class="img-fluid" alt="Paso 2: Propuesta de Diseño">
          </article>
        </section>
```

para hacer sic sac aplicamos la clase `order-lg-1` solo a los pasos pares.

ve que no está alineada al centro en tamaño `LG`

![no-align](/assets/no-align-parrafo-comencemos.JPG)

para alinear:

recuerda que la clase row ya tiene flexbox.


`<div class="d-flex align-items-center">...</div>` centra respecto a lo items. 🆗

![item-alineado](/assets/item-alineado.JPG)



``align-content-center`` centra respecto al contenido

Tambien debemos cambiar la alineacion del texto en tamaño `LG` 

en bootstrap buscamos 🔍 'text alignment' 

> `<p class="text-lg-end">End aligned text on viewports sized LG (large) or wider.</p>`
 

a todo los pasos impares aplicamos esta clase `text-lg-end`

![text-alignment-end](/assets/text-alignment-end.JPG)


aplicamos `py-5` para que quite la linea blanca de abajo. por que los parrafos tiene un margen por defecto y se comportan en linea 

pordria quitarle con _margin-0_ _m-0_ pero se pega mucho al _footer_ entonces aumento un _padding button 5_

![linea-blanca](/assets/linea-blanca.JPG)

```html
  <!-- pt-5 pb-5  = py-5 -->
    <main class="py-5 bg-color">


      <article class="text-center mt-5">
          <p> <sup class="text-first-color fw-bold">*</sup> Todo cambio adicional generará cargos extras. Tarifa por hora: <b>50 usd + impuestos</b>.</p>
         </article>
      </main>
```


## Maquetado HTML de la sección interesado

Primero hagamos un análisis

tenemos un h1

Parrafo introductorio

Comentarios y un mápa 

con la hipotetica ubicación de este estudio digital

> todo esto se vé en la version mobil

> en version pc el mapa aparece a la Izquierda. Para eso solo invertimos el orden con la clase : `order-lg-1`


Para agregar un video o un mapa de Google 🔍 'aspect-ratios'

> `https://getbootstrap.com/docs/5.3/helpers/ratio/#aspect-ratios`

> hay un pequeño detalle: el mapa de Google se sobre pone a los demas items

Buscamos un carousel en bootstrap.

Ve que el carousel tiene un texto encima. entonces buscamos ese tipo de carousel.

Copiamos el código. 

> lo ponemos fuera del contenedor por que lo queremos a pantalla completa


el icono de _next_ y _preview_ no se notan, busqué algo similar a lo que muestra instagram y lo encontre en:

>  `https://icons.getbootstrap.com/icons/arrow-left-circle-fill/`

¿Cómo cambiar el tamaño de los íconos de Bootstrap?

```css
  /*cambiamos el tamaño de los iconos propios de Bootstrap*/
.bi{
  font-size: 3em;
}
```
> `https://es.stackoverflow.com/questions/503103/cambiar-tama%C3%B1o-de-%C3%ADconos-bootstrap`

![carousel-icon](/assets/carousel-icon.JPG)

## Modificando el carrusel de Bootstrap


```html
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="true">
        <!-- Cuando la opción está configurada en true,  el carrusel no comenzará a funcionar automáticamente al cargar la página. 
          En cambio, sólo comenzará después de la primera interacción del usuario. -->
        <!-- para que haga autoplaying añande este atributo 'data-bs-ride="carousel"' -->

        


        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <!-- sacamos esta descripcion y lo ponemos encima, d-none d-md-block -->
        <div class="carousel-caption ">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
  </div>
```



ve, que si agregamos un `z-index: 99;`  la clase `carousel-caption` ya se puede visualizar la descripcion.

![z-index](/assets/z-index.JPG)


si buscamos el css de botstrap nos encontramos con estos atributos de la clase _carousel-caption_:

```css
  .carousel-caption {
    z-index: 99;

    position: absolute;
    right: 15%;
    bottom: 1.25rem;
    left: 15%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    color: #fff;
    text-align: center;
  }
```

modificamos lo que nos hace falta en nuestro css 

```css
  .carousel-caption {
    z-index: 99;
    /* subimos 3rem para poder interactuar con los (botones) indicadores de abajo*/
    bottom: 3rem;
}
```

como este texto es muy elaborado, en la version para mobil no lo voy a mostrar gracias a esta clase `d-none`

```html

  <aside class="d-none d-md-block">
              <p>Comencé a crear sitios y aplicaciones web en <b>2021</b>.</p>
              <p>Valoro mucho el concepto de<em>"<b>menos es más</b>"</em>.</p>
              <p>Trabajo de forma remota e independiente.</p>
            </aside>
```

![texto-version-mobil](/assets/texto-version-mobil.JPG)

![texto-version-pc](/assets/texto-version-pc.JPG)



el mapa no era responsivo.

![mapa-no-responsivo](/assets/mapa-no-responsivo.JPG)

lo solucioné quitando las `<div>`  extra.

ANTES: 

```html
  <div class="ratio ratio-16x9 d-flex">
              <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.4623547204625!2d-68.20621763134251!3d-16.483160696064463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915ede25cd741f53%3A0x8a8ee4fb45790868!2sPlaza%20Villa%20Ingenio!5e0!3m2!1ses!2sbo!4v1715997990436!5m2!1ses!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              </iframe></div>
  </div>
```

AHORA: 

![mapa-sin-div-extra](/assets/mapa-sin-div-extra.JPG)

```html
  <div class="ratio ratio-16x9 d-flex">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.4623547204625!2d-68.20621763134251!3d-16.483160696064463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915ede25cd741f53%3A0x8a8ee4fb45790868!2sPlaza%20Villa%20Ingenio!5e0!3m2!1ses!2sbo!4v1715997990436!5m2!1ses!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              </iframe>
  </div>
```


## Maquetando el formulario de contacto.

en la documentación de bootstrap buscamos 🔍 'forms'

te recomiendo construir tu formulario en base a tus necesidades.

vamos a enviar el formulario con 'form-submit'

utilizamos la etiqueta `<form>` 

hay una clase llamada `.form-control`

```css
  .form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--bs-body-bg);
  background-clip: padding-box;
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
```

y la otra clase se llama `.form-label`

Estas dos clases son las que nos van a servir para trabajar los elementos del formulario

vamos la poner las etiquetas de `<labels>` son importantes por que es un elemento de accesibilidad

> a las etiquetas `<label>` le agregamos la clase `class="form-label"`

> y a los inputs `<input>` le agregamos la clase `class="form-control"`

queda así: 

```html
  <form action="">
              <label class="form-label" for="name">Nombre:</label>
              <input class="form-control" id="name" name="name" placeholder="Tu nombre" type="text" required>

              <label class="form-label" for="email">Email:</label>
              <input class="form-control" id="email" name="email" placeholder="Tu correo" type="email" required>

              <label class="form-label" for="comments">Comentarios :</label>
              <input class="form-control" id="comments" name="comments" placeholder="Déjanos tus comentarios">

              <input class="btn btn-lg btn-success" type="submit">
            </form>
```

![form-pegado](/assets/form-pegado.JPG)

De la documentación de los formularios.

Bootstrap trabaja por default los elementos de formulario en bloque

entonces lo egrupamos en `<div`s 

al text-area le agregamos el atributo `rows="5"`

queda de esta manera:

![form-acabado](/assets/form-acabado.JPG)

## Enviando el formulario de contacto.

vamos a utilizar una api que se llama:

> `https://formsubmit.co/`

> ¡Importante! todos tus elementos de formulario deben tener el atributo `name="name" , name="email", name="comments"`

por que ese es el nombre de variable que va mandar en el reporte que te llegue por correo electrónico

Este servicio lo tienes que probar ya sea en un dominio en internet o desde un servidor local si tu estas maquetando y abriendo tus archivos directamente desde el disco duro no va funcionar. utiliza live-server

vamos a usar los atributos con con el prefijo de guion abajo. `_NEXT` y `_SUBJECT`

_NEXT

> `<input type="hidden" name="_next" value="https://yourdomain.co/thanks.html">`

_SUBJECT (para que le pongamos un título al correo que nos va enviar FormSubmit a nuestro correo electrónico)

> `<input type="hidden" name="_subject" value="New submission!">`


cramos una página para el GRACIAS.

```html
     <main class="pt-5 bg-color text-center min-vh-100 d-flex justify-content-center align-items-center">
      <!-- "justify-content-center" para que lo center en el eje X(horizontal) y "align-items-center" para que lo centre en el eje Y(vertical) -->
      <!-- necesito que esté en un solo contenedor para que este article se va sentrar respecto del main que está a pantalla completa -->
      <article>
        <h1 class="display-1">¡GRACIAS!🤗</h1>
        <P class="fs-3">Muchas gracias por tus comentarios.</P>
      </article>

    </main>

    <footer class="bg-dark p-3 sticky-bottom">
      <div class="container text-center">

        <nav class="d-flex justify-content-evenly border-bottom border-secondary mb-2 pb-2">
          <!-- a[href="https://.com"][target="_blank"]*7>i.bi.bi- -->
          <a href="https://facebook.com" target="_blank"><i class="bi bi-facebook fs-4"></i></a>
          <a href="https://twitter.com" target="_blank"><i class="bi bi-twitter fs-4"></i></a>
          <a href="https://youtube.com" target="_blank"><i class="bi bi-youtube fs-4"></i></a>
          <a href="https://instagram.com" target="_blank"><i class="bi bi-instagram fs-4"></i></a>
          <a href="https://m.me/diegotvramos" target="_blank"><i class="bi bi-messenger fs-4"></i></a>
          <a href="https://api.whatsapp.com/send?phone=59176503020" target="_blank"><i class="bi bi-whatsapp fs-4"></i></a>
          <!-- <a href="https://.com" target="_blank"><i class="bi bi-"></i></a> -->
        </nav>
        <small class="text-white">
          &copy; 2024 diseñado por 🐾Manchas🐾 y <a href="https://github.com/diegotvramos" target="_blank">@diegotvramos</a>
        </small>
        
      </div>
    </footer>
```

aplicamos la clase `sticky-bottom` al pie de página para que se vea al cargar la página

la primera vez damos de alta.

![primera-vez](/assets/primera-vez.JPG)

la segunda vez y las demas veces solo hay que activar al capcha 🤔🤔

Algo que noté.

al llegar a la imagen 3 de la card hacia un pequeño temblor. en el nombre del desarrollador.

![temblor](/assets/temblor.JPG)

lo que descubrí es que era causado por el tamaño original de la imagen. mira cuando pongo una imagen de tamaño(altura baja.)

![card-alborotada](/assets/card-alborotada.JPG)

> Muy importante: hay que darles un solo tamaño a todas las imagenes de la card para que no ocurra este tipo de errores.

## Navbar en sitios One Page

no tuvimos que hacer código javaScript

lo que si modifiqué fueron algunos estilos CSS para fondos personalizados o los colores de letra.

Cuando estamos en un sitio multi-página. y abrimos la barra de navegación en version mobil y a la hora de darle click a cualquiera seccion. se abre dicho archivo y se ciera la barra de navegacion. lo cual está bien.



Ahora ¿Que pasa en un sitio ONE page?

en la version de PC no hay ningun problema.

¿que pasa en la barra de navegación de la versin mobil?

nos lleva a la seccion seleccionada, pero la barra de navegacion no se ciera lo cual está mal.

Entonces debemos de aplicar programación Java Script

y buscar.

(cuando tengas estas necesidades, de que derrepente algo con el comportamiento de bootstrap no te funciona, siempre remiteté a la documentación)

en este caso buscamos en la documentación de Bootstrap del componente: 🔍 'Collapse' en la seccion 'via js'

> `https://getbootstrap.com/docs/5.3/components/collapse/#via-javascript`

si tu quieres cambiar el comportamiento de la programación de un componente




![one-page](/assets/one-page.JPG)

lo que yo tendria que hacer es decirle "oye, cada vez que se clikee uno de estos enlaces del menú de navegación cierra el collapse"

aca vamos a utilizar un concepto _Delegacion de eventos_ 

para no estarle asignando un evento a cada uno de estos enlaces(botones) pues mejor 

> el evento del click se lo asigno al document y por delegacion de eventos solamente detecto el click cuando sea un enlace que forme parte de la barra de navegación.

este fragmento de código nos proporciona bootstrap

```js
  const bsCollapse = new bootstrap.Collapse('#myCollapse', {
    toggle: false
  })
```


> `#myCollapse` = selector 

ahora cual es el nombre del Id o por que selector voy a ubicar al collapse.

pues el navbar - collapse tiene un id

> `<div class="collapse navbar-collapse" id="navbarNav`

> `https://getbootstrap.com/docs/5.3/components/collapse/#methods`


```js
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
```

> Conclución: en un sitio multi-page tu no vas a tener problemas  pero cuando hagas un sitio One-page considera este 👆 bloque de contenido js para que cada vez que el usuario de click sobre alguno de los enlaces de tu menú el menú mobil se cierre.

> conclución: en version PC al seleccionar un elemento en el submenú, el submenú desplegable se cierra solo 

![dropdown](/assets/dropdawn.JPG)

> pero en version de movil no se cierra solo, lo intenté con JS pero se deforma todo como que el menú empuja al contenido. entonces. lo mejor que puedo hacer es hacer un indice separado en la página, así:

> algo que noté es que si avanzas el contenido, el ménu desplegable ya no empuja el contenido. solo lo empujacuando no se avanzó el contenido, los demás indices si se empuja el contenido al abrir el menú. excepto el indice: "Tipos de sitio"


![desplegable](/assets/desplegable.JPG)

y evitar hacer submenús. 🤔🤔🤔

> es bueno que al hacer click en un índice. este nos lleve a ese y se muestre en version mobil el nombre del indice o submenú.

![indice-legible](/assets/subindice-legible.JPG)

## Introducción a Hostinguer.

250 al año

tiene acceso a GIT

ascceso via SSH si prefieres tener el control de tu servidor desde la terminal

contratamos un servicio de Hostinguer

## Configurando un dominio en Hostinguer

reclamamos nuestro dominio gratuito por que usamos el plan 'premiun' 

registramos el dominio (pais, datos de contacto)


## Configurando un servicio de hospedaje en Hostinguer

los asistentes visuales muestra el progreso

## Comprobando SSL(certificado) en Hostinguer

cambiar el http => https desde el panel de control de hostinguer

te vas a la seccion de SSL y lo activas, solo si no estubiera activo.

## Subiendo sitio web a Hostinguer

ES DRAGAN-DROP asi que carga los archivos tan solo jalarlo a la página.







