

# MAQUETACIÓN DE EL PROYECTO 'studio' CON EL FRAMEWORK BOOTSTRAP


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





