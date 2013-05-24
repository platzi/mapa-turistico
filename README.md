![Mapa](http://www.digitalsurgeons.com/wp-content/uploads/2010/12/geolocation.png)

# Mapa turístico

Proyecto creado para y por los alumnos de Mejorandola. El objetivo de este proyecto es crear una aplicación donde todos los que deseemos participemos para crear una aplicación. Una aplicación creada para demostrar qué hemos aprendido y ganar una nueva experiencia colaborando en equipo. Si no sabes o piensas que tienes poco que aportar no te preocupes, otro de los objetivos es que todos aprendamos y nos apoyemos los alumnos.

Todos estáis invitados a participar en este miniproyecto. ¡Animo!

## La idea

Una aplicación web donde mostrar los lugares de tu ciudad o cualquier sitio del que estés orgulloso, pudiendo subir una foto y hacer un comentario. De momento sólo eso, ya se extenderá con un sistema de puntuaciones y comentarios de otros usuarios y otras ideas que se os ocurra.

## Cómo colaborar

Este miniproyecto en realidad es una extensión a la ponencia del día 9 de abril '[Geolocalización en NodeJS](https://www.youtube.com/watch?v=b3nvLvKnLyw&feature=c4-feed-u)', donde explicamos la base del código y cómo trabajar con mapas, recomiendo echarle un ojo si no has trabajado antes con mapas y geolocalización.

¿Qué necesitamos? ¡A todos vosotros! Seas diseñador, front end, back end o comunicador. Como dice el dicho, muchos granitos de arena hace una montaña.

**Si quieres colaborar tan sólo tienes que hacer un "Fork" del código y solicitar un "Pull Request" para añadir tu aportación al proyecto**. Más abajo en el apartado de Recursos tienes documentación e información.

Una vez tengas hecho el Fork y tu copia funcione puedes **revisar la pestaña de Issues de Github** para ver las tareas que se están desarrollando y cuáles falta por hacer, también puedes proponer tus propias tareas, discusiones e incluso si has encontrado un fallo o un bug puedes hacernoslo saber en este mismo apartado.

Por otro lado los viernes a las 21:00 (hora en España) tenemos reuniones de los colaboradores donde puedes participar y conocer al resto de desarrolladores activos en el desarrollo del proyecto. Para participar en estas sesiones necesitas Google + y [añadirme](https://plus.google.com/u/0/111142569351915543389/posts).

Si sólo quieres dar una opinión, comentario o sugerencia puedes enviar un correo a la dirección [undakel@gmail.com](mailto:undakel@gmail.com) o puedes usar la pestañita de Issues de Github (preferentemente).

## Recomendaciones antes de empezar

No son normas pero si nos ayudará a trabajar en equipo.

* **Comenten el código que hacen**. No hace falta comentar cada linea que hacen pero si explicar brevemente y en español.
* **Siempre comentar los commits**. No dejen commits con mensajes vacíos o con información vaga como 'cambio en menu', poner algo como 'cambio de color del menu'.

## El desarrollo (v1.0)

Para esta primera versión la aplicación será soportada sobre Node Js y se ha pensado hacer el desarrollo en 3 fases:

### Fase 1 - Modelo de datos y gestión de usuarios

En esta primera fase vamos a definir cómo va ser nuestra base de datos para guardar usuarios, lugares y comentarios. Por último terminaremos por incoporar un sistema para gestionar registros y acceso de usuarios.


### Fase 2 - Mapa, introducción de lugares y sistema de comentarios

En esta fase vamos a hacer el formulario para agregar lugares, imágenes y un pequeño comentario, además de mostrarlo en el mapa en tiempo real.


### Fase 3 - Maquetación de la aplicación y adaptación a dispositivos móviles

Puliremos nuestra aplicación para hacerlo más hermosa y además que se vea bien incluso desde un cepillo de dientes con pantalla y conexión a internet.

## Cómo empezar

Recuerden que deben tener **instalado Node Js**.

Antes de arrancar por primera vez la aplicación debemos instalar primero las librerías:

	npm install

Y para iniciar la aplicación podemos hacerlo simplemente tecleando:

	node server

Si teneís dudas podeís revisar las instrucciones de [mapa-tiempo-real](https://github.com/davidsingal/mapa-tiempo-real), escribirnos o abrir un ticket en el apartado de Issues de Github (preferentemente).


##How to start

Configuracion:

    Primero deben instalarse Node.js (http://nodejs.org/download/).

    Instalar mongodb (http://www.mongodb.org/downloads). Detalles de instalacion diferentes OS.

        Mac OS + Homebrew -> (http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)

        Ubuntu -> (http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)

    Instalar redis (http://redis.io/download)

        Mac OS + Homebrew ->
            brew install redis

        Ubuntu -> Detalles en la pagina de descarga.

    Instalar las dependencias del proyecto:

        Antes de iniciar por primera vez la aplicacion debes instalar las dependencias.

            npm install o (sudo npm install)

    Archivo de configuracion:

        renombramos el archivo example-config por config.js, que se encuentra en la ruta
        app/config/example-config.js.

        Agregamos nuestras configuraciones a dicho archivo.

        Nota: Se puede utilizar la configuracion por defecto unicamente agregando las Twitter key y Twitter secret, que son necesarias para el inicio de session.

Iniciar aplicacion:

    Iniciamos la base datos mongo:

        mongod

    Iniciamos el Redis Server:

        redis-server

    Iniciamos la aplicacion

        node server.js

## Recursos

* [Cómo hacer un fork](http://aprendegit.com/fork-de-repositorios-para-que-sirve/?goback=%2Egde_3956944_member_214176162)
* [Mantener tu fork al día](http://aprendegit.com/mantener-tu-fork-al-dia/)
* [Qué es un pull request](http://aprendegit.com/que-es-un-pull-request/)

---

#### Créditos y agradecimientos

Iniciativa creada por @mikenieva y @davidsingal, gracias a @mejorandola por el curso de Diseño y desarrollo Web online
