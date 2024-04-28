

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
  <footer class="bg-dark text-white">
      <nav class="">
        <!-- a[href="https://.com"][target="_blank"]*7>i.bi.bi- -->
        <a href="https://facebook.com" target="_blank"><i class="bi bi-facebook"></i></a>
        <a href="https://twitter.com" target="_blank"><i class="bi bi-twitter"></i></a>
        <a href="https://youtube.com" target="_blank"><i class="bi bi-youtube"></i></a>
        <a href="https://instagram.com" target="_blank"><i class="bi bi-instagram"></i></a>
        <a href="https://m.me/diegotvramos" target="_blank"><i class="bi bi-messenger"></i></a>
        <a href="https://api.whatsapp.com/send?phone=59176503020" target="_blank"><i class="bi bi-whatsappk"></i></a>
        <a href="https://.com" target="_blank"><i class="bi bi-"></i></a>
      </nav>
      <small>&copy; 2024 diseñado por 🐾Manchas🐾 y <a href="https://github.com/diegotvramos" target="_blank">@diegotvramos</a> </small>
      
    </footer>
```

## Codigo CSS del pié de página


