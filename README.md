# PROGRAMACION DE NUEVAS TECNOLOGIAS 2

## Instrucciones de resolución de examen

Es tu primer día en [tecnoshare.com](http://tecnoshare.com) luego de un intenso entrenamiento de 10 semanas por fin tenes la oportunidad de mostrar lo que aprendiste, y tu potencial como desarrollador react.

Luego de abrir el correo encuentras un mail de tu Líder Técnico con tu primera asignación!! 💪

> Bienvenid@! estuvimos esperando por horas que llegares, tenemos varias tareas criticas y prioritarias en nuestro backlog. Por favor presta mucha atención a las instrucciones. No dudes en preguntarme cualquier cosa, aunque generalmente estoy muy ocupado resolviendo problemas heredados de las rotaciones de los desarrolladores.

> En el presente repositorío encontrarás un proyecto de nodejs que ya tiene codigo base del frontend con el que vamos a trabajar. Te aconsejo que sigas los siguientes pasos para armar tu entorno de trabajo.

> 1. Realizar un Fork del presente repositorio
> 2. Realizar un clone de repositorio en tu cuenta de github
> 3. Instalar las dependencias
> 4. La url del backend es: https://mflixbackend.azurewebsites.net/api/movies ya se encuentra desplegado en un app services en Azure. Por ahora solo existe este endpoint.
>    El backend se conecta con una base de datos Mongodb en la cual se encuentra la base de datos **sample_mflix** con una collection llamada **movies**, ahí se encuentran aprox. 23.000 películas.
> 5. Proba el endpoint que ya se encuentra desarrollado: /api/movies debería retornar un json con 23.000 películas. Sin embargo te aconsejo que uses el paginado que tiene para probar (mira la definición del end-point a continuación). Sí por algun motivo no llegase a funcionar, solicita asistencia.
>    -GET /api/movies?pageSize=[pageSize]&page=[page]

> ### TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD
>
> 1. Agregar una cabecera con un logo y un link a la pagina de peliculas, ademas de un pie de pagina
> 2. Necesitamos hacer cambios menores al listado de películas:
>    - Agregar el **fullplot**, debajo del titulo
>    - Que se pagine de a 30 películas
> 3. Crear el componente de detalle de la película con su respectivo **poster**, con el **title** debajo y la descripción **fullplot**
> 4. Agregar funcionalidad de favoritos en listado de películas (aunque no se persista)
> 5. Implementar un listado de las 10 mejores peliculas segun el criterio de imdbRating. Y ponerlo en la pagina inicial. (no hay una api especifica para obtener las mejores películas, por lo que debes hacer un filtro en el frontend)

> Desde ya muchas gracias por la colaboración! 😉 como te comente en la entrevista soy muy detallista en la prolijidad del codigo y la performance cada detalle cuenta, sin embargo si no estas seguro, es mejor que lo resuelvas como puedas y me dejes notas en el readme.md del repo, para que yo pueda probar.

## Intrucciones para la entrega

Si ya terminaste o si son las 10:00 asegurate de seguir los siguientes pasos para la entrega:

1. Realizar un commit a tu repo con un mensaje con tu nombre completo
2. Realizar un push a tu repositorio
3. Realizar un pull request a mi repositorio
