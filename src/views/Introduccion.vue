<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .fondo-intro.p-5.mn.pt-0
      .tarjeta.p-5(data-aos="zoom-in" style="background-color: #debefb ").mb-5
        .row.justify-content-center.align-items-center
          .col-lg-9.mb-lg-0.mb-3
            p.mb-0 #[b Las siglas SQL] provienen del inglés #[b #[em Structured Query Language]] y representan un lenguaje estándar utilizado para manipular los datos almacenados en bases de datos relacionales. Este lenguaje es implementado por casi todos los Sistemas de Gestión de Bases de Datos Relacionales (SGBD), permitiendo realizar una amplia gama de operaciones dentro de la base de datos. En este componente, se presenta una introducción al lenguaje SQL, con un enfoque particular en las sentencias para la consulta de datos. Se utilizará la interfaz de consola de línea de comandos con el objetivo de fortalecer las técnicas de administración remota. Posteriormente, se introducirá la interfaz de administración gráfica, la cual permite realizar operaciones similares de una manera visualmente intuitiva. 
          .col-lg-3.col-5: img(src='@/assets/curso/temas/1.svg', alt='')
      p.mb-5(data-aos='fade-right') Además de las operaciones básicas de consulta, SQL también facilita la modificación, inserción y eliminación de datos, lo cual es esencial para el mantenimiento y la actualización de las bases de datos.
      .row.justify-content-center.mb-5
        .col-lg-8
          .tarjeta.p-4(data-aos="zoom-in" style="background-color: #3a1d71 ")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2.svg', alt='')
              .col-lg-8
                p.mb-0.text-white #[b Por ejemplo], las sentencias de actualización permiten modificar registros existentes para reflejar cambios en la información, mientras que las de inserción añaden nuevos datos a la base. Este lenguaje también soporta operaciones más avanzadas como transacciones y procedimientos almacenados, que ayudan a ejecutar secuencias de operaciones de forma segura y eficiente.
      p.mb-5(data-aos='fade-right') Por último, es importante destacar que SQL no solo se utiliza para la manipulación directa de datos. También desempeña un papel crucial en la optimización del rendimiento de las consultas a través de la indexación, la partición de tablas y otras técnicas de optimización de bases de datos. Estas características hacen de SQL una herramienta indispensable en el campo de la administración de bases de datos, ofreciendo soluciones eficaces para gestionar grandes volúmenes de datos de manera efectiva. 
    
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-okaidia.css'
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()
  },
  updated() {
    this.$aosRefresh()
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()
  },
}
</script>
<style lang="sass"></style>
