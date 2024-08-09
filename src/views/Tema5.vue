<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Consulta multitablas – DML
    p(data-aos='fade-right') Para explicar este tipo de ejercicios, crearemos una base de datos de empleados llamada #[strong ‘ehr’]. En esta base de datos, las tablas #[code ‘empleados’] y #[code ‘áreas’] están relacionadas de la siguiente manera: un empleado pertenece a un área y un área puede tener varios empleados, como se presenta en el siguiente diagrama: 
    p.mb-5 Note que #[code area_id] en la tabla empleados puede ser #[i nullable]: 
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .tarjeta-codigo.p-2.mb-5
          pre.language-html(language="html").mt-5
            code MariaDB [ehr]&gt; CREATE TABLE IF NOT EXISTS areas ( 
              br
              |    -&gt; id_area TINYINT NOT NULL, 
              br
              |    -&gt; area VARCHAR(45) NULL, 
              br
              |    -&gt; PRIMARY KEY (id_area)) 
              br
              |    -&gt; ENGINE = InnoDB; 
              br
              |Query OK, 0 rows affected (0.019 sec) 
              br
              |
              br
              |MariaDB [ehr]&gt; CREATE TABLE IF NOT EXISTS empleados ( 
              br
              |    -&gt; nombre_empleado VARCHAR(60) NOT NULL, 
              br
              |    -&gt; area_id TINYINT NULL, 
              br
              |    -&gt; PRIMARY KEY (nombre_empleado), 
              br
              |    -&gt; INDEX fk_empleados_areas_idx (area_id ASC), 
              br
              |    -&gt; CONSTRAINT fk_empleados_areas 
              br
              |    -&gt; FOREIGN KEY (area_id) 
              br
              |    -&gt; REFERENCES areas (id_area) 
              br
              |    -&gt; ON DELETE NO ACTION 
              br
              |    -&gt; ON UPDATE NO ACTION) 
              br
              |    -&gt; ENGINE = InnoDB; 
              br
              |Query OK, 0 rows affected (0.023 sec)  
    p.mb-5(data-aos='fade-right') Se insertarán los siguientes datos:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .tarjeta-codigo.p-2.mb-5
          pre.language-html(language="html").mt-5
            code INSERT INTO areas (id_area,area)VALUES (’17’,‘Ventas’),(’19’,‘Producción’), (’20’,‘Ingeniería’) (’21’,‘Mercadeo’); 

              br
              |MariaDB [ehr]&gt; INSERT INTO `areas` (`id_area`, `area`) VALUES  
              br
              |    -&gt;   (’17’, ‘Ventas’),  
              br
              |    -&gt;   (’19’, ‘Producción’),  
              br
              |    -&gt;   (20, ‘Ingeniería’),  
              br
              |    -&gt;   (21, ‘Mercadeo’); 
              br
              |Query OK, 4 rows affected, 2 warnings (0.015 sec) 
              br
              |Records: 4  Duplicates: 0  Warnings: 2 
              br
              |MariaDB [ehr]&gt; 
              br
              |
              br
              |MariaDB [ehr]&gt; INSERT INTO empleados (nombre_empleado, area_id) VALUES 
              br
              |    -&gt; (‘Andrade’, ’17’), 
              br
              |    -&gt; (‘Jordan’, ’20’), 
              br
              |    -&gt; (‘Steinberg’, ’20’), 
              br
              |    -&gt; (‘Robinson’, ’19’), 
              br
              |    -&gt; (‘Zolano’, ’19’), 
              br
              |    -&gt; (‘Gaspar’, NULL); 
              br
              |Query OK, 6 rows affected, 2 warnings (0.006 sec) 
              br
              |Records: 6  Duplicates: 0  Warnings: 2 
    p.mb-5(data-aos='fade-right') Los datos quedan así:  
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.d-inline-block.p-4(style="background-color: #e3dfeb ").mb-4
          h4.mb-0.me-5 Empleados 
        .tarjeta-codigo.p-2.mb-5
          pre.language-html(language="html").mt-5
            code MariaDB [ehr]&gt; SELECT * FROM empleados; 
              br
              |+————————+————+ 
              br
              || nombre_empleado | area_id | 
              br
              |+————————+————+ 
              br
              || Gaspar          |    NULL | 
              br
              || Andrade         |      17 | 
              br
              || Robinson        |      19 | 
              br
              || Zolano          |      19 | 
              br
              || Jordan          |      20 | 
              br
              || Steinberg       |      20 | 
              br
              |+————————+————+ 
              br
              |6 rows in set (0.000 sec) 
              br
              |MariaDB [ehr]&gt; 
      .col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.d-inline-block.p-4(style="background-color: #e3dfeb ").mb-4
          h4.mb-0.me-5 Áreas 
        .tarjeta-codigo.p-2.mb-5
          pre.language-html(language="html").mt-5
            code MariaDB [ehr]&gt; SELECT * FROM areas; 
              br
              |+————+——————+ 
              br
              || id_area | area       | 
              br
              |+————+——————+ 
              br
              ||      17 | Ventas     | 
              br
              ||      19 | Producción | 
              br
              ||      20 | Ingeniería | 
              br
              ||      21 | Mercadeo   | 
              br
              |+————+——————+ 
              br
              |4 rows in set (0.000 sec) 
              br
              |MariaDB [ehr]&gt; 
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1 Combinación interna (INNER JOIN)
    .row.justify-content-center.mb-5
      .col-lg-12.mb-lg-0.mb-3(data-aos="fade-right")
        .p-4(style="background-color: #f3f9ff ")
          p.mb-0 En esta operación, cada fila de la tabla #[code 'empleados'] se combina (o une) con las filas correspondientes de la tabla #[code 'areas'] que cumplen con la condición especificada en el predicado del JOIN. Cualquier fila en la tabla #[code 'empleados'] o en la tabla #[code 'áreas'] que no tenga una correspondiente en la otra tabla será excluida; solo aquellas con correspondencias aparecerán en el resultado. Este es el tipo de #[code JOIN] más utilizado y es considerado la combinación predeterminada. 
    .row.justify-content-center.mb-3
      .col-lg-8(data-aos="fade-left")
        .tarjeta-codigo.p-2.mb-5
            pre.language-html(language="html").mt-5
              code SELECT *  
                br
                |FROM empleados AS e 
                br
                |INNER JOIN areas as a ON a.id_area = e.area_id 
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 6. 
          span Uso de JOIN
        img(src='@/assets/curso/temas/46.png', alt='La imagen presenta la aplicación del JOIN mas utilizado.')
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .tarjeta.p-4(style="background-color: #e8eefe ")
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-7.mb-lg-0.mb-3
              p.mb-0 La condición de la relación, especificada como #[code 𝑎.𝑖𝑑_𝑎𝑟𝑒𝑎=𝑒.𝑎𝑟𝑒𝑎_𝑖𝑑a], requiere que el valor esté presente en ambas tablas. Si un empleado tiene un valor #[code NULL] en #[code 'area_id'], no se incluirá en los resultados, ya que no puede cumplir con esta condición. Esto se ilustra mediante un Diagrama de Venn, donde solo la intersección (conjunción) representa los registros que coinciden en ambas tablas. 
            .col-lg-5.col-7: img(src='@/assets/curso/temas/47.png', alt='La imagen presenta una diagramación de Empleados y areas.')
    p.mb-5(data-aos='fade-right') Existen otros tipos de consultas como #[code FULL JOIN, FULL OUTER JOIN y CROSS JOIN] que no se tratarán en detalle debido a su uso menos frecuente. Sin embargo, con una comprensión básica del concepto principal, es posible acceder a la documentación en línea para explorar cómo funcionan estos JOINs. 
      br
      br
      |La siguiente imagen incluye Diagramas de Venn que representan diferentes tipos de relaciones. Estos diagramas son herramientas útiles para visualizar los resultados que cada tipo de sentencia JOIN puede retornar, ayudando así a comprender los resultados esperados con cada variante.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 7. 
          span Representación Diagrama de Venn 
        img(src='@/assets/curso/temas/48.svg', alt='La imagen  representa otros tipos de relaciones, Diagramas de Venn que permiten visualizar resultados retornados')
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2 Combinación externa 
    p.mb-5(data-aos='fade-right') Esta variedad de combinación de tablas permite seleccionar algunas filas de una tabla aunque no exista correspondencia con las filas de la otra tabla con la que se combina. Este método facilita la inclusión de datos que no cumplen con la condición de coincidencia especificada en la cláusula JOIN. 
    .f-2-2.p-5.mn.mb-5
      .titulo-tres.mb-4: h3.mb-0 LEFT JOIN 
      p.mb-5(data-aos='fade-right') La sintaxis es muy similar a la anterior.
      .row.justify-content-center.mb-0
        .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta-codigo.p-2.mb-5
              pre.language-html(language="html").mt-5
                code SELECT *  
                  br
                  |FROM empleados AS e 
                  br
                  |LEFT JOIN areas as a ON a.id_area = e.area_id 
      .row.justify-content-center.mb-5
        .col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/49.svg', alt='La imagen representa dónde se encuentran los empleados y las areas.')
        .col-lg-4
          .p-4.tarjeta(style="background-color: #ffefaf ") 
            p.mb-0 El resultado de este tipo de consulta incluye todos los registros de la tabla de la izquierda (la primera tabla definida en la cláusula #[code FROM] de la consulta), independientemente de si existe un registro correspondiente en la tabla de la derecha (la definida en el #[code JOIN]). 
      p.mb-5(data-aos='fade-right') La sentencia #[code LEFT JOIN] empareja todos los valores de la tabla izquierda (#[code empleados]) con los valores correspondientes de la tabla derecha (#[code areas]), si existen. Si no hay correspondencia, retorna un valor nulo (#[code NULL]) en los campos de la tabla derecha. 
        br
        br
        |A diferencia de lo que ocurre con un #[code INNER JOIN], donde no se muestra un empleado cuya área no existe, el #[code LEFT JOIN] incluirá estos empleados. En el diagrama asociado, el empleado sin área asignada aparece en la región amarilla, mientras que los empleados con área asignada se muestran en la franja naranja, en la intersección de las tablas de empleados y áreas. 
      .row.justify-content-center.mb-5
        .col-lg-8(data-aos="zoom-in")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 8. 
            span Ejemplo LEFT JOIN
          img(src='@/assets/curso/temas/50.png', alt='La imagen presenta la aplicación de empleados y areas.')
    .f-2-2.p-5.mn.mb-5
      .titulo-tres.mb-4: h3.mb-0 RIGTH JOIN 
      p(data-aos='fade-right') La sentencia #[code RIGHT JOIN] devuelve todos los valores de la tabla derecha (#[code areas]), emparejados con los valores correspondientes de la tabla izquierda (#[code empleados]), si existen. Si no hay correspondencia, se retorna un valor nulo (#[code NULL]) para los campos de la tabla izquierda. 
      p.mb-5 Esta operación garantiza que todos los registros de la tabla derecha estén presentes en el resultado, mientras que los registros de la tabla izquierda que no tengan correspondencia se representarán con valores nulos.
      .row.justify-content-center.mb-5
        .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta-codigo.p-2.mb-5
              pre.language-html(language="html").mt-5
                code SELECT *  
                  br
                  |FROM empleados AS e 
                  br
                  |RIGHT JOIN areas as a ON a.id_area = e.area_id 
      .row.justify-content-center.mb-5
        .col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/51.svg', alt='La imagen presenta un diagrama que representa las áreas que tienen y no empleados.')
        .col-lg-4
          .p-4.tarjeta(style="background-color: #ffefaf ") 
            p.mb-0 En el diagrama, las áreas que no tienen empleados se encuentran en el área verde, mientras que las áreas con empleados están en el área anaranjada, que representa la intersección de las tablas de empleados y áreas.
      .row.justify-content-center.mb-5
        .col-lg-8(data-aos="zoom-in")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 9.
            span Ejemplo RIGTH JOIN
          img(src='@/assets/curso/temas/52.png', alt='La imagen presenta la aplicación de áreas y empleados.')
    








































            
    

</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
export default {
  name: 'Tema5',
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

<style lang="sass">
.lista-ol--cuadro__vineta
  min-width: 30px
  min-height: 30px
  background-color: #f0c518
  border-radius: 100px
</style>
