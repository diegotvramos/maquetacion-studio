

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

Primer paso: sobre todo cuando estamos trabajando con un sitio web en puro _html_ y _css_ lo que te recomiendo es:

> Atacar las partes comunes del sitio, La cabezera y el pie de página por que las 5 secciones tiene la misma cabezera y el mismo pie de página y lo único que cambia es el contenido.

como es un siito web donde vamos a trabajar  con puro _html_ y _css_ lo primero que tenesmo que hacer es cubir el marcado de estas secciones en común, y ya despues atacamos cada uno de los contenidos particulares de cada seccion

me avisan si quieren un curso para la automatizacion de sitios con herramientas como los _static sites generators_ como `https://gohugo.io/` o a lo mejor con PHP, ya teniendo como base el código de este sitio en bootstrap con html y css.

Uno de los detalles por los que tu tienes que atacar primeramente las secciones comunes es por que, imagina que ya hiciste la cabezera y el pie y empiezas a duplicar el archivo html y ya nada más le vas cambiando el nombre

Imaginate que el cliente dice: "sabes que... se me olvidó vamos a agregar una nueva seccion" entonces esa sección la tendrias que agregar en cada uno de los htmls, entonces no es la manera mas eficiente, pero recuerda que este curso está orientado a aprender bootstrap no a ver herramientas para la automatización o para poder sacar mayor provecho a nuestro desarrollo y poder reutilizar cosas, podriamos hacer un minicurso donde yo te enseñe a recolectar las partes comunes y generarlas con PHP o con un _static website generators_ serguey, evenly, hugo que son herramientas que nos van a ayudar a travez de una precompilacion a no estar repitiendo cosas.



