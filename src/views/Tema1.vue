<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Interfaz de línea de comandos de MySQL 
    
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Al comenzar a trabajar con un Sistema de Gestión de Bases de Datos (SGBD) como MySQL, existen diversas formas de establecer comunicación con el servidor. Habitualmente, en el #[em software] se utiliza una API para realizar consultas y otras operaciones con el servidor. Por ejemplo, en PHP, esta API está integrada directamente en el lenguaje. 
          br
          br
          |En este apartado, se empleará MySQL directamente a través de un cliente que se ejecuta desde una consola (una ventana de comandos en Windows). En secciones posteriores, se explicarán las diferentes APIS disponibles. 
      .col-lg-3.col-5(data-aos="fade-left"): img(src='@/assets/curso/temas/3.png', alt='')
    Separador
    .f-1-1.p-5.mn.mb-5
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Aplicación cliente de MySQL
      p.mb-5(data-aos='fade-right') Dado que ya se conocen los métodos para ingresar y salir del cliente de MySQL y se dispone de la capacidad para efectuar consultas, resulta sencillo consultar múltiples variables del sistema o evaluar diversas funcionalidades de MySQL. Para llevar a cabo estas consultas, se emplea la sentencia SQL SELECT. Por ejemplo: 
      .fondo-slyder.p-5.mb-5.mn
        .tarjeta.tarjeta--gris.p-4
          LineaTiempoC.color-primario()
            .row(titulo="Paso 1")
              .col-lg-6.mb-4.mb-lg-0
                p Debe abrir inicio y buscar MySQL o teclear “mysql” y se hace Clic en MySQL Command Line Client. 
              .col-lg-6: img.img-a.img-t(src='@/assets/curso/temas/4.jpg', alt='')
            .row(titulo="Paso 2")
              .col-lg-6.mb-4.mb-lg-0
                p Ingresa la contraseña de root usada en el proceso de instalación de MySQL. 
              .col-lg-6: img(src='@/assets/curso/temas/5.svg', alt='')
            .row(titulo="Paso 3")
              .col-lg-6.mb-4.mb-lg-0
                p Una vez autenticado en la interfaz comando de línea se aprecia este resultado. 
              .col-lg-6: img(src='@/assets/curso/temas/6_1.svg', alt='')
            .row(titulo="Paso 4")
              .col-lg-12.mb-4.mb-lg-0
                p En adelante los resultados de la interfaz de línea de comandos se presentarán como sigue: 
              .col-lg-12
                .tarjeta-codigo.p-5.mb-5
                  pre.language-html(language="html").mt-5
                    code Enter password: ********** 
                      br
                      |Welcome to the MySQL monitor. Commands end with ; or \g. 
                      br
                      |Your MySQL connection id is 90 
                      br
                      |Server version: 8.0.25 MySQL Community Server - GPL 
                      br
                      br
                      |Copyright (c) 2000, 2021, Oracle and/or its affiliates. 
                      br
                      |Oracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names brmay be trademarks of                      
                      |their respective owners. 
                      br
                      |Type ‘help;’ or ‘\h’ for help. Type ‘\c’ to clear the current input statement. 
                      |mysql> 
            .row(titulo="Paso 5")
              .col-lg-6.mb-4.mb-lg-0
                p Para salir de la consola de comando se usa el comando #[code quit] (en mayúscula o minúscula). 
              .col-lg-6
                .tarjeta-codigo.p-5.mb-5
                  pre.language-html(language="html").mt-5
                    code mysql> QUIT 
                      br
                      |Bye 
                      br
                      |C:\mysql\bin> 
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Prueba de consultas básicas   
      p.mb-5(data-aos='fade-right') Dado que ya se conocen los métodos para ingresar y salir del cliente de MySQL y se dispone de la capacidad para efectuar consultas, resulta sencillo consultar múltiples variables del sistema o evaluar diversas funcionalidades de MySQL. Para llevar a cabo estas consultas, se emplea la sentencia SQL SELECT. Por ejemplo: 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta-codigo.p-5
            pre.language-html(language="html").mt-5
              code mysql> SELECT VERSION(), CURRENT_DATE; 
                br
                |+—————+———————+ 
                br
                || VERSION() | CURRENT_DATE | 
                br
                |+—————+———————+ 
                br
                || 8.0.25   | 2021-06-12   | 
                br
                |+—————+———————+ 
                br
                |1 row in set (0.02 sec) 
                br
                |mysql> 
        .col-lg-7(data-aos="fade-left")
          p #[code SELECT] es la sentencia SQL utilizada para seleccionar datos de bases de datos. Además, se puede emplear, como en esta situación, para consultar variables del sistema o resultados de funcionalidades. En este caso, se ha consultado el resultado de la función #[code VERSION]. Sabemos que es una función porque tiene paréntesis "()", y también se ha consultado la variable #[code CURRENT_DATE].
          .tarjeta.p-4.px-5(style="background-color: #3a1d71") 
            .row.justify-content-center.align-items-center
              .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/7.svg', alt='')
              .col-lg-10
                h4
                  span.p-1.px-3(style="background-color: #00ffdf ") ¡Nota!
                p.text-white Toda sentencia debe finalizar con un punto y coma (;), seguido de presionar Enter.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3  SQL – #[em Standard Query Language]
      p.mb-5(data-aos='fade-right') En nivel teórico, hay dos lenguajes para el uso de bases de datos: 
      .row.justify-content-center.mb-5
        .col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.p-4(style="background-color: #8722e2")
            img(src='@/assets/curso/temas/8.svg', alt='' style="width: 155px").mb-4
            h4.fst-italic.text-white Data Definition Language DDL 
            p.text-white Es el lenguaje que se emplea para establecer bases de datos y tablas, y para transformar sus estructuras. Este lenguaje trabaja sobre ciertas tablas especiales llamadas diccionario de datos.
        .col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.p-4.h-100(style="background-color: #3a1d71")
            img(src='@/assets/curso/temas/9.svg', alt='' style="width: 155px").mb-4
            h4.fst-italic.text-white Data Definition Language DDL
            p.text-white Es lo que se usa para cambiar y obtener datos desde las bases de datos.
      p.mb-5(data-aos='fade-right') #[b SQL] abarca ambos lenguajes #[b DDL + DML] y serán estudiados en esta unidad, ya que ambos hacen parte del conjunto de sentencias de #[b SQL.] 
        br
        br
        |En este punto se explicará el proceso para convertir del modelo lógico relacional, al modelo físico, empleando sentencias SQL. 
























</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
