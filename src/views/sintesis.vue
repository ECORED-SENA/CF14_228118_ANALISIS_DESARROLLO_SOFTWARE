<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La figura es un diagrama que explica el manejo de bases de datos relacionales con SQL. Detalla las secciones de Comandos Básicos de SQL, DML (Data Manipulation Language), Funciones avanzadas, Optimización y mantenimiento, e Interfaces y herramientas. Explica operaciones como crear, consultar, modificar y eliminar bases de datos y datos, así como el uso de funciones avanzadas como claves primarias, índices y restricciones. También aborda temas de optimización, como la indexación y partición de tablas, y menciona herramientas como MySQL Workbench y API para la integración con otros lenguajes como PHP.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
