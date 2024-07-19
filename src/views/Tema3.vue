<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 SQL para la creación y eliminación de bases de datos – DDL  
    .row.justify-content-center
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .p-4(style="background-color: #f3f9ff").mb-4
          p.mb-0 Una base de datos sin datos no es muy útil. Por lo tanto, vamos a revisar cómo añadir, modificar o eliminar los datos contenidos en las bases de datos. 
        p.fw-bold Se creará una tabla con la que seguiremos ejemplificando la sintaxis del SQL:
        .tarjeta-codigo.p-2
          pre.language-html(language="html").mt-5
            code MariaDB [prueba]&gt; CREATE TABLE gente ( 
              br
              |    #[span.ms-4 -&gt; nombre VARCHAR(50) KEY,] 
              br
              |    #[span.ms-4 -&gt; fecha DATE DEFAULT ‘2020-02-02’,] 
              br
              |    #[span.ms-4 -&gt; edad INT DEFAULT 0);]
              br
              br
              |Query OK, 0 rows affected (0.025 sec) 
              br
              |MariaDB [prueba]&gt; 
      .col-lg-5.mb-lg-0.mb-3(data-aos="fade-left"): img(src='@/assets/curso/temas/20.svg', alt='')
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Inserción de registros 
    p.mb-5(data-aos='fade-right') La forma más directa de añadir una fila nueva a una tabla es mediante una sentencia #[code INSERT]. En la versión más sencilla de esta sentencia, se debe indicar la tabla a la que se quieren agregar filas y los valores para cada columna. Las columnas de tipo cadena o fecha deben estar entre comillas sencillas o dobles, aunque esto no es necesario para las columnas numéricas, las cuales también pueden estar entrecomilladas. 
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta-codigo.p-2
          pre.language-html(language="html").mt-5
            code MariaDB [prueba]&gt; INSERT INTO gente (nombre, fecha, edad) 
              br
              | VALUES (‘Fulano’, ‘1974-04-12’, ’18’); 
              br
              br
              |Query OK, 1 row affected (0.05 sec) 
              br
              |
              br
              |MariaDB [prueba]&gt; INSERT INTO gente (nombre, fecha, edad) 
              br
              | VALUES (‘Mengano’, ‘1978-06-15’, ’20’); 
              br
              |
              br
              |Query OK, 1 row affected (0.04 sec) 
              br
              br
              |MariaDB [prueba]&gt; INSERT INTO gente (nombre, fecha, edad) VALUES 
              br
              |    -&gt; (‘Tulano’, ‘2000-12-02’, ’22’), 
              br
              |    -&gt; (‘Pegano’, ‘1993-02-10’, ’33’); 
              br
              br
              |Query OK, 2 rows affected (0.02 sec) 
              br
              |Records: 2  Duplicates: 0  Warnings: 0 
              br
              br
              |MariaDB [prueba]&gt; SELECT * FROM gente; 
              br
              |+————+——————+———+ 
              br
              || nombre  | fecha      | edad | 
              br
              |+————+——————+———+ 
              br
              || Fulano  | 1974-04-12 | 18   | 
              br
              || Mengano | 1978-06-15 | 20   | 
              br
              || Pegano  | 1993-02-10 | 33   | 
              br
              || Tulano  | 2000-12-02 | 22   | 
              br
              |+————+——————+———+ 
              br
              br
              |4 rows in set (0.00 sec) 
              br
              |MariaDB [prueba]&gt; 

    
    p.mb-4(data-aos='fade-right') Si no es necesario determinar un valor preciso para alguna columna, se puede asignar el valor por defecto especificado para esa columna al momento de crear la tabla, utilizando la palabra #[code DEFAULT].

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .tarjeta-codigo.p-2.mb-2
          pre.language-html(language="html").mt-5
            code MariaDB [prueba]&gt; INSERT INTO gente (nombre, fecha, edad) VALUES (‘Perillo’, DEFAULT, DEFAULT); 
              br
              br
              |Query OK, 1 row affected (0.005 sec) 
              br
              |MariaDB [prueba]&gt;     
    p.mb-4(data-aos='fade-right') Revise como Perillo tiene el valor por defecto definido en la columna #[code fecha] y #[code edad]. 
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .tarjeta-codigo.p-2.mb-5
          pre.language-html(language="html").mt-5
            code MariaDB [prueba]&gt; SELECT * FROM gente; 
              br
              |+---------+------------+------+ 
              br
              || nombre  | fecha      | edad | 
              br
              |+---------+------------+------+ 
              br
              || Fulano  | 1974-04-12 | 18   | 
              br
              || Mengano | 1978-06-15 | 20   | 
              br
              || Pegano  | 1993-02-10 | 33   | 
              br
              || Perillo | 2020-02-02 | 0    | 
              br
              || Tulano  | 2000-12-02 | 22   | 
              br
              |+---------+------------+------+ 
              br
              br
              |5 rows in set (0.000 sec) 
              br
              |MariaDB [prueba]&gt;
    p.mb-5(data-aos='fade-right') El orden en la sentencia #[em INSERT] es muy importante, conserve una correspondencia como se presenta en la siguiente imagen. 
    .row.justify-content-center.mb-5
      .col-auto: img(src='@/assets/curso/temas/21.png', alt='')
    p(data-aos='fade-right') Finalmente, estamos listos para aprender cómo se actualizan los datos que se han registrado. 
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Edición de registros
    p.mb-5(data-aos='fade-right') Tenemos la posibilidad de cambiar valores de las filas de una tabla utilizando la sentencia #[code UPDATE]. En su manera más fácil, los cambios se usan a cada una de las filas, y a las columnas que se les especifique.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .tarjeta-codigo.p-2
          pre.language-html(language="html").mt-5
            code UPDATE [LOW_PRIORITY] [IGNORE] tbl_name 
              br
              |SET col_name1=expr1 [, col_name2=expr2 …]
              br
              |[WHERE where_definition] 
              br
              |[em [ORDER BY …]
              br
              |[em [LIMIT row_count]

    .tarjeta.p-4.mb-3(style="background-color: #e3dfeb ")
      p.mb-0 Que todas las personas de la tabla gente tengan la misma fecha utilizando esta sentencia #[code UPDATE].

    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta-codigo.p-2
          pre.language-html(language="html").mt-5
            code MariaDB [prueba]&gt; UPDATE gente SET fecha=‘2012-12-12’; 
              br
              |Query OK, 5 rows affected (0.005 sec) Rows matched: 5 Changed: 5 Warnings: 0 
              br
              br
              |MariaDB [prueba]&gt; SELECT * FROM gente; 
              br
              |+————+——————+ 
              br
              || nombre  | fecha      | 
              br
              |+————+——————+ 
              br
              || Fulano  | 2012-12-12 | 
              br
              || Mengano | 2012-12-12 | 
              br
              || Pegano  | 2012-12-12 | 
              br
              || Perillo | 2012-12-12 | 
              br
              || Tulano  | 2012-12-12 | 
              br
              |+————+——————+ 
              br
              |5 rows in set (0.000 sec) 
              br
              |MariaDB [prueba]&gt; 

    .tarjeta.p-4.mb-3(style="background-color: #e3dfeb ")
      p.mb-0 Supongamos que es necesario incrementar la edad en 10 años para cada fila de la tabla #[code ‘gente’]: 
      
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .tarjeta-codigo.p-2
          pre.language-html(language="html").mt-5
            code MariaDB [prueba]&gt; UPDATE gente SET edad = edad + 10; 
              br
              br
              |Query OK, 5 rows affected (0.005 sec) 
              br
              |Rows matched: 5 Changed: 5 Warnings: 0 
              br
              br
              |MariaDB [prueba]&gt; SELECT * FROM gente; 
              br
              |+---------+------------+------+ 
              br
              || nombre  | fecha      | edad | 
              br
              |+---------+------------+------+ 
              br
              || Fulano  | 1974-04-12 | 28   | 
              br
              || Mengano | 1978-06-15 | 30   | 
              br
              || Pegano  | 1993-02-10 | 43   | 
              br
              || Perillo | 2020-02-02 | 10   | 
              br
              || Tulano  | 2000-12-02 | 32   | 
              br
              |+---------+------------+------+ 
              br
              br
              |5 rows in set (0.000 sec) 
              br
              br
              |MariaDB [prueba]&gt;


    p.mb-4(data-aos='fade-right') Sin embargo, no es necesario actualizar todas las filas de la tabla, ya que se puede definir cuáles filas se desean actualizar. Esto se logra mediante la cláusula #[code WHERE], que permite establecer una condición. Solo las filas que cumplan con dicha condición serán actualizadas.

    .tarjeta.p-4.mb-3(style="background-color: #e3dfeb ")
      p.mb-0 Esta versión clarifica el uso de la cláusula #[code WHERE] y mejora la estructura de las oraciones para una lectura más fluida. 

    .row.justify-content-center.mb-4
      .col-lg-10.mb-lg-0.mb-3(data-aos="fade-right")

        .tarjeta-codigo.p-2
          pre.language-html(language="html").mt-5
            code MariaDB [prueba]&gt; UPDATE gente SET edad = 55, fecha = ‘1970-12-31’ 
              br
              | WHERE nombre = ‘Tulano’; 
              br
              br
              |Query OK, 1 row affected (0.005 sec) 
              br
              |Rows matched: 1 Changed: 1 Warnings: 0 
              br
              br
              |MariaDB [prueba]&gt; SELECT * FROM gente; 
              br
              |+---------+------------+------+ 
              br
              || nombre  | fecha      | edad | 
              br
              |+---------+------------+------+ 
              br
              || Fulano  | 1974-04-12 | 28   | 
              br
              || Mengano | 1978-06-15 | 30   | 
              br
              || Pegano  | 1993-02-10 | 43   | 
              br
              || Perillo | 2020-02-02 | 10   | 
              br
              || Tulano  | 1970-12-31 | 55   | 
              br
              |+---------+------------+------+ 
              br
              |5 rows in set (0.000 sec) 
              br
              br
              |MariaDB [prueba]&gt; 


    .tarjeta.p-4.mb-3(style="background-color: #e3dfeb ")
      p.mb-0 Otro ejemplo sería que se actualice la fecha al día 2012-12-12, para todos lo que sean mayores de 40 años, esto se podría hacer así: 

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")

        .tarjeta-codigo.p-2
          pre.language-html(language="html").mt-5
            code MariaDB [prueba]&gt; UPDATE gente SET fecha = ‘2012-12-12’ 
              br
              | WHERE edad >= 30; 
              br
              br
              |Query OK, 2 rows affected (0.005 sec) 
              br
              |Rows matched: 2 Changed: 2 Warnings: 0 
              br
              br
              |MariaDB [prueba]&gt; SELECT * FROM gente; 
              br
              |+---------+------------+------+ 
              br
              || nombre  | fecha      | edad | 
              br
              |+---------+------------+------+ 
              br
              || Fulano  | 1974-04-12 | 28   | 
              br
              || Mengano | 1978-06-15 | 30   | 
              br
              || Pegano  | 2012-12-12 | 43   | 
              br
              || Perillo | 2020-02-02 | 10   | 
              br
              || Tulano  | 2012-12-12 | 55   | 
              br
              |+---------+------------+------+ 
              br
              |5 rows in set (0.000 sec) 
              br
              br
              |MariaDB [prueba]&gt; 
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Borrado de registros
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.p-4.mb-3(style="background-color: #e3dfeb ")
          p.mb-0 Para borrar filas se utiliza la sentencia #[code DELETE]. La sintaxis es muy similar a la de #[code UPDATE]: 
        .tarjeta-codigo.p-2.mb-5
          pre.language-html(language="html").mt-5
            code DELETE [LOW_PRIORITY] [QUICK] [IGNORE] 
              br
              | FROM table_name 
              br
              |[WHERE where_definition] 
              br
              |[ORDER BY …] 
              br
              |[LIMIT row_count] 
        img(src='@/assets/curso/temas/22.svg', alt='')
      .col-lg-6(data-aos="fade-left")
        .tarjeta.p-4.mb-3(style="background-color: #e3dfeb ")
          p.mb-0 Para borrar el registro que tiene por nombre "Perillo" se procede de la siguiente forma. 
        .tarjeta-codigo.p-2.mb-5
          pre.language-html(language="html").mt-5
            code MariaDB [prueba]&gt;DELETE FROM gente 
              br
              | WHERE nombre = ‘Perillo’; 
              br
              br
              |Query OK, 1 row affected (0.005 sec) 
              br
              br
              |MariaDB [prueba]&gt;SELECT * FROM gente; 
              br
              |+---------+------------+------+ 
              br
              || nombre  | fecha      | edad | 
              br
              |+---------+------------+------+ 
              br
              || Fulano  | 1974-04-12 | 28   | 
              br
              || Mengano | 1978-06-15 | 30   | 
              br
              || Tulano  | 2012-12-12 | 55   | 
              br
              || Pegano  | 2012-12-12 | 43   | 
              br
              |+---------+------------+------+ 
              br
              br
              |4 rows in set (0.000 sec) 
              br
              br
              |MariaDB [prueba]&gt;
    p.mb-5(data-aos='fade-right') A continuación, se debe borrar aquello que tenga #[code edad] comprendida entre 30 (incluyendo 30) y 50 años (incluyendo 50), para eso se usa un operador llamado #[code AND]. 
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta-codigo.p-2.mb-5
          pre.language-html(language="html").mt-5
            code MariaDB [prueba]&gt; DELETE FROM gente 
              br
              | WHERE edad >= 30 AND edad <= 50; 
              br
              br
              |Query OK, 2 rows affected (0.005 sec) 
              br
              br
              |MariaDB [prueba]&gt; SELECT * FROM gente; 
              br
              |+---------+------------+------+ 
              br
              || nombre  | fecha      | edad | 
              br
              |+---------+------------+------+ 
              br
              || Fulano  | 1974-04-12 | 28   | 
              br
              || Tulano  | 2012-12-12 | 55   | 
              br
              |+---------+------------+------+ 
              br
              br
              |2 rows in set (0.000 sec) 
              br
              br
              |MariaDB [prueba]&gt; 
      .col-lg-6.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/23.svg', alt='')
    .titulo-tres.mb-4: h3.mb-0 Vaciar una tabla 
    p.mb-5(data-aos='fade-right') Cuando se desea borrar todas las filas de una tabla, es posible utilizar la sentencia #[code DELETE] sin especificar condiciones, como se mencionó anteriormente. Sin embargo, existe una alternativa más rápida: la sentencia #[code TRUNCATE]. A diferencia del #[code DELETE], que elimina las filas de manera secuencial, #[code TRUNCATE] remueve todos los datos borrando y recreando la tabla vacía, lo cual resulta mucho más eficiente 
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="zoom-in")
        .tarjeta-codigo.p-2.mb-5
          pre.language-html(language="html").mt-5
            code MariaDB [prueba]&gt; TRUNCATE gente; 
              br
              br
              |Query OK, 0 rows affected (0.037 sec) 
              br
              br
              |MariaDB [prueba]&gt; SELECT * FROM gente; 
              br
              br
              |Empty set (0.001 sec) 
              br
              br
              |MariaDB [prueba]&gt; 



</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
export default {
  name: 'Tema3',
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
