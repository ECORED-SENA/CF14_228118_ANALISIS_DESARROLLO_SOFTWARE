<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 SQL para consulta de datos – DML
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .p-4(style="background-color:#f3f9ff ")
          p.mb-0 Para encontrar información dentro de una base de datos, es crucial entender la estructura y naturaleza de los datos. Por ejemplo, los datos de tipo fecha se estructuran en el formato YYYY-MM-DD. Si se necesita listar registros de un año específico, es necesario emplear una función que pueda referenciar ese dato particular dentro de la columna. Por esta razón, es importante revisar algunas funciones específicas antes de comenzar a trabajar con consultas de datos.
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/25.svg', alt='') 
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Funciones en MySQL
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/26.svg', alt='')
      .col-lg-11
        p.mb-0 Considerando que MySQL es versátil en lo que respecta a operadores y también muy extenso en cuanto a funciones, dispone de una gran variedad de ellas. Sin embargo, solo se explicarán algunas funciones esenciales para entender cómo funcionan en general.  Algunas funciones son:  
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1. 
          span Funciones en MySQL
        .tabla-a.color-primario.mb-5
          table
            thead
              tr(style="background-color:#00ffdf ")
                th Función
                th Descripción
            tbody
              tr
                td LENGTH
                td Devuelve la longitud de una cadena (en bytes).
              tr
                td SUM
                td Calcula la suma de un conjunto de valores.
              tr
                td MAX
                td Devuelve el valor máximo en un conjunto de valores.

              tr
                td MIN
                td Devuelve el valor mínimo en un conjunto de valores.
              tr
                td CEIL
                td Redondea el valor entero más pequeño que es mayor o igual que un número.
              tr
                td COUNT
                td Devuelve el número de registros devueltos por una consulta de selección.
              tr
                td AVG
                td Devuelve el valor medio de una expresión.

              tr
                td YEAR
                td Devuelve la parte del año para una fecha determinada.

              tr
                td MONTH
                td Devuelve la parte del mes para una fecha determinada

              tr
                td DAY
                td Devuelve el día del mes para una fecha determinada.
              tr
                td DATE
                td Extrae la parte de la fecha de una expresión de fecha y hora.
              tr
                td TIME
                td Extrae la parte de tiempo de una hora / fecha y hora determinadas.
              tr
                td SEC_TO_TIME
                td Devuelve un valor de tiempo basado en los segundos especificados.
    p.mb-5(data-aos='fade-right') Para este ejemplo, utilizaremos una base de datos de llamadas telefónicas. La estructura de esta base de datos se presentará a continuación, y con ella aprenderemos a realizar consultas.
    p.fw-bold Ejemplo llamadas telefónicas: 
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .tarjeta.p-4.mb-3(style="background-color: #f7eefe ") 
          .row.justify-content-center.align-items-center
            .col-lg-2.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/27.svg', alt='')
            .col-lg-10
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-2.col-3.mb-lg-0.mb-3
                  img.d-inline-block(src='@/assets/curso/temas/n1-1.svg', alt='' style="width: 62px").me-4.mb-lg-0.mb-3
                .col-lg-10.col-3.mb-lg-0.mb-3
                  p.mb-0 Descargue el archivo para crear la base de datos cdr (recuerde que debe descomprimirlo) y de él extraiga el archivo cdr.sql. Este archivo crea una base de datos llamadas cdr y dentro una tabla con el mismo nombre.
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-2.col-3.mb-lg-0.mb-3
                  img.d-inline-block(src='@/assets/curso/temas/n2-1.svg', alt='' style="width: 62px").me-4.mb-lg-0.mb-3
                .col-lg-10.col-3.mb-lg-0.mb-3
                  p.mb-0 Importe el archivo con la sentencia source&gt;ruta del archivo sq
        .tarjeta-codigo.p-2.mb-5
          pre.language-html(language="html").mt-5
            code MariaDB [prueba]&gt; source D:/Peter/Downloads/cdr.sql;
        a.anexo.mb-4(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
          .row.justify-content-around.align-items-center
            .anexo__icono
              img(src="@/assets/template/icono-zip.svg")
            .anexo__texto
              h4 BASE DE DATOS.
              p Descargue aquí el archivo para crear la base de datos cdr. 
    p.mb-5(data-aos='fade-right') Conozca los datos de prueba con los que se trabajará. 
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2. 
      span Diccionario de datos
    .tabla-a.color-primario.mb-5
          table
            thead
              tr(style="background-color:#00ffdf ")
                th Función 
                th Tipo
                th Longitud 
                th Descripción 
            tbody
              tr
                td Registro
                td DATETIME            
                td 0            
                td Fecha y hora de registro de la llamada            
              tr
                td Origen
                td VARCHAR            
                td 80            
                td Número de teléfono o extensión del llamante            
              tr
                td Destino
                td VARCHAR            
                td 80            
                td Número de teléfono o extensión del llamado o destino            
              tr
                td Estado
                td VARCHAR            
                td 30           
                td ANSWERED, BUSY, FAILED, NO ANSWER, que representa lo que sucede finalmente con la llamada.            
              tr
                td Duración
                td INT            
                td 10            
                td Lo que dura la llamada incluyendo el tiempo de timbrado           
              tr
                td Facturas
                td INT            
                td 10           
                td Lo que dura la llamada desde el momento en que es contestada la llamada
    p.mb-5(data-aos='fade-right') A partir de este punto usaremos #[b MySQL WorkBench], para visualizar mejor los resultados.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2. 
          span MySQL WorkBench 
        img(src='@/assets/curso/temas/28.png', alt='La figura presenta  la representación del uso de MySQL WorkBeach para visualizar mejor los resultados.')
      .col-lg-5.col-7(data-aos="fade-left")
        .tarjeta.p-4(style="background-color: #e3dfeb ")
          ol.lista-ol--cuadro.lista-ol--cuadro--separador
            li
              .lista-ol--cuadro__vineta
                span(style="color: black") 1
              | Dé clic en la pestaña de uso de bases de datos.
            li
              .lista-ol--cuadro__vineta
                span(style="color: black") 2
              | Cree una nueva conexión.
            li
              .lista-ol--cuadro__vineta
                span(style="color: black") 3
              | Póngale un nombre que usted prefiera a esa conexión.
            li
              .lista-ol--cuadro__vineta
                span(style="color: black") 4
              | Ponga el usuario root.
            li
              .lista-ol--cuadro__vineta
                span(style="color: black") 5
              | Digite el nombre de la base de datos que usará: cdr.
            li
              .lista-ol--cuadro__vineta
                span(style="color: black") 6
              | Dele clic en ok.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/29.png', alt='La figura presenta  la representación del uso de MySQL WorkBeach para visualizar mejor los resultados.')
      .col-lg-5.col-7(data-aos="fade-left")
        .tarjeta.p-4.mb-4(style="background-color: #e3dfeb ")
          ol.lista-ol--cuadro.lista-ol--cuadro--separador
            li
              .lista-ol--cuadro__vineta
                span(style="color: black") 7
              | Ahora debe conectar dando doble clic.
        p Ya contamos con bases de datos y sabemos cómo agregar y modificar datos. A continuación, aprenderemos a extraer datos de una base de datos utilizando nuevamente la sentencia SELECT.
    p.mb-5(data-aos='fade-right') La sintaxis de SELECT puede ser complicada; sin embargo, en este punto no se explicarán todas sus opciones. Una forma más general de presentar su sintaxis es la siguiente:  
    .fondo-slyder.p-5.mb-5.mn
      .tarjeta.tarjeta--gris.p-4
        SlyderA(tipo='b')
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              h4(style="color: #8722E2 ") Listar todos los elementos 
              p Para listar todos los elementos de la tabla cdr, se utiliza el comodín *, que indica que se deben seleccionar todas las columnas. 
              .tarjeta.p-4(style="background-color: #130725")
                code.text-white  SELECT * FROM cdr 
            .col-lg-6.col-7: img(src='@/assets/curso/temas/30.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              h4(style="color: #8722E2 ") Selección de columnas específicas 
              p Para seleccionar solo algunas columnas específicas de la tabla cdr, se enumeran las columnas deseadas, separadas por comas. 
              .tarjeta.p-4(style="background-color: #130725")
                code.text-white SELECT origen, destino, duracion FROM cdr 
            .col-lg-6.col-7: img(src='@/assets/curso/temas/31.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              h4(style="color: #8722E2 ") Uso de alias en columnas 
              p Asignar un alias a las columnas en las consultas SQL usando la palabra clave AS, que es opcional. Aquí, a la columna origen se le asigna el alias num_orig y a duracion el alias tiempo_llamada. 
              .tarjeta.p-4(style="background-color: #130725")
                code.text-white SELECT origen AS num_orig, destino, duracion AS tiempo_llamada FROM cdr  
            .col-lg-6.col-7: img(src='@/assets/curso/temas/32.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              h4(style="color: #8722E2 ") Cálculo de cobro por llamadas 
              p Para calcular el cobro de llamadas salientes a números de celular o a larga distancia nacional con 10 dígitos en el destino, primero se filtran estas llamadas. Se usa la función LENGTH para identificar las que tienen 10 dígitos. Luego, se calcula el número de minutos dividiendo los segundos de la duración por 60 y redondeando hacia arriba con la función CEIL. El valor final se obtiene multiplicando el número de minutos redondeado por el costo por minuto, que es $85. 
              .tarjeta.p-4(style="background-color: #130725")
                code.text-white SELECT *, facturar/60 AS minutos, CEIL(facturar/60) AS minutos_redondeado, CEIL(facturar/60) * 85 AS valor FROM cdr WHERE LENGTH(destino) = 10 
            .col-lg-6.col-7: img(src='@/assets/curso/temas/33.png', alt='')
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Operadores
    p.mb-5(data-aos='fade-right') SQL tiene muchos operadores diferentes según el tipo de columna. Esos operadores se emplean para construir expresiones que se usan en las consultas.  
    .titulo-tres.mb-4: h3.mb-0 A) Operadores lógicos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p Los operadores lógicos, se emplean para crear expresiones lógicas complejas. Permite el uso de álgebra booleana y ayuda a crear condiciones o filtros de información mucho más precisos. 
          br
          br
          |Recuerde que en el álgebra booleana o álgebra de bool, existen dos valores posibles para ser operados y son los resultados: verdadero y falso. MySQL dispone de dos constantes para esos valores: TRUE y FALSE, respectivamente. 
          br
          br
          |En SQL se añade un tercer valor. Esto es, para hacer posible trabajar con valores NULL. El valor verdadero se implementa como 1 o TRUE, el falso como 0 o FALSE y, el desconocido como NULL. 
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/34.svg', alt='')
    p.fw-bold Se ejecuta la siguiente sentencia en la consulta para que mirar la naturaleza de los datos:  
    .row.justify-content-center.mb-5
      .col-lg-6 
        .tarjeta-codigo.p-2.mb-5
          pre.language-html(language="html").mt-5
            code MariaDB [prueba]&gt; SELECT TRUE, FALSE, NULL; 
              br
              |+———+———+———+ 
              br
              || TRUE | FALSE | NULL | 
              br
              |+———+———+———+ 
              br
              ||    1 |     0 | NULL | 
              br
              |+———+———+———+ 
              br
              |1 row in set (0.000 sec) 
              br
              |MariaDB [prueba]&gt; 
    .row.justify-content-center.mb-5.g-lg-0
      .col-lg-3
        .p-4(style="background-color: #debefb")
          h4 Operador AND
          p.mb-0 SQL puede usar el operador AND, que se trata de un operador binario, es decir, requiere de dos operandos. El resultado de la operación es verdadero, sólo si ambos operandos son verdaderos y, es falso si cualquier operando es falso o nulo, o si alguno de los dos es nulo. Esto se representa mediante la siguiente tabla de verdad:
      .col-lg-7
        .p-4(style="background-color: #f7eefe ")
          p Esto se representa mediante la siguiente tabla de verdad:
          .tabla-a.color-primario.mb-5
            table
              thead
                tr(style="background-color:#00ffdf ")
                  th A
                  th B
                  th A OR B 
              tbody.bg-white
                tr
                  td FALSO
                  td FALSO      
                  td FALSO
                tr
                  td FALSO
                  td VERDADERO      
                  td FALSO
                tr
                  td VERDADERO
                  td FALSO 
                  td FALSO
                tr
                  td VERDADERO
                  td VERDADERO       
                  td VERDADERO
                tr
                  td FALSO
                  td NULL      
                  td FALSO
                tr
                  td NULL
                  td FALSO   
                  td FALSO
                tr
                  td VERDADERO 
                  td NULL
                  td NULL
                tr
                  td NULL
                  td VERDADERO
                  td NULL
          .tarjeta-codigo.p-2.mb-5
            pre.language-html(language="html").mt-5
              code MariaDB [prueba]&gt; SELECT 1 AND 0, 1 AND NULL, 0 AND NULL, 1 AND 0 AND 1; 
                br
                |+————+——————+——————+———————+ | 1 AND 0 | 1 AND NULL | 0 AND 
                br
                |NULL | 1 AND 0 AND 1 | 
                br
                |+————+——————+——————+———————+ | 0 | NULL | 0 | 0 | +————
                br
                |+——————+——————+———————+ 1 row in set (0.000 sec)
    .row.justify-content-center.mb-5.g-lg-0
      .col-lg-3
        .p-4(style="background-color: #debefb")
          h4 Operador OR
          p.mb-0 SQL este operador también tiene dos formas equivalentes OR El operador OR también es binario. Si ambos operandos siendo diferentes de NULL, el resultado es verdadero si alguno de ellos es verdadero y, es falso si los dos son falsos. Si uno de los operandos es NULL el resultado será verdadero si el otro operando es verdadero, y será NULL si el otro operando es falso
      .col-lg-7
        .p-4(style="background-color: #f7eefe ")
          p La tabla de verdad es:
          .tabla-a.color-primario.mb-5
            table
              thead
                tr(style="background-color:#00ffdf ")
                  th A
                  th B
                  th A OR B 
              tbody.bg-white
                tr
                  td FALSO
                  td FALSO      
                  td FALSO
                tr
                  td FALSO
                  td VERDADERO      
                  td VERDADERO
                tr
                  td VERDADERO
                  td FALSO 
                  td VERDADERO
                tr
                  td VERDADERO
                  td VERDADERO       
                  td VERDADERO
                tr
                  td FALSO
                  td NULL      
                  td NULL
                tr
                  td NULL
                  td FALSO   
                  td NULL
                tr
                  td VERDADERO 
                  td NULL
                  td VERDADERO
                tr
                  td NULL
                  td VERDADERO
                  td VERDADERO
          .tarjeta-codigo.p-2.mb-5
            pre.language-html(language="html").mt-5
              code MariaDB [prueba]&gt; SELECT 1 OR 0, 1 OR NULL, 0 OR NULL, 1 OR 0 OR 1; 
                br
                |+————+—————+—————+——————+ | 1 OR 0 | 1 OR NULL | 0 OR 
                br
                |NULL | 1 OR 0 OR 1 | +————+—————+—————+——————+ | 1 | 1 | 
                br
                |NULL | 1 | +————+—————+—————+——————+ 1 row in set (0.000 sec) MariaDB [prueba]&gt;
    .titulo-tres.mb-4: h3.mb-0 B) Operadores de igualdad 
    p.mb-5(data-aos='fade-right') El operador igual (=) compara dos expresiones y da como resultado TRUE si son iguales o FALSE si son diferentes. Ya lo hemos usado en ejemplos anteriormente: 
    .tarjeta-codigo.p-2.mb-5
      pre.language-html(language="html").mt-5
        code SELECT * FROM cdr  WHERE registro = ‘2018-01-02 10:19:08’ 
    .titulo-tres.mb-4: h3.mb-0 C) Operadores de desigualdad  
    p.mb-5(data-aos='fade-right') En SQL, los operadores de desigualdad son utilizados para filtrar resultados en una consulta basada en comparaciones numéricas entre columnas o valores fijos. 
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3.
          span Operadores de desigualdad
        .tabla-a.color-primario.mb-5
            table
              thead
                tr(style="background-color:#00ffdf ")
                  th Operador
                  th Descripción
              tbody.bg-white
                tr
                  td <=
                  td Menor o igual
                tr
                  td < 
                  td Menor
                tr
                  td >
                  td Mayor
                tr
                  td >= 
                  td Mayor o igual
      .col-lg-5
        .tarjeta-codigo.p-2.mb-5
            pre.language-html(language="html").mt-5
              code SELECT * FROM cdr   
                br
                |WHERE registro >= ‘2018-01-02 10:19:08’  
                br
                |AND registro <= ‘2018-01-04 10:19:08
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3. 
          span Operadores de desigualdad 
        img(src='@/assets/curso/temas/35.png', alt='La figura presenta la aplicación de los operadores de desigualdad.')
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3 Ordenar resultados 
    p.mb-5(data-aos='fade-right') Se puede agregar una cláusula ORDER BY para ordenar los resultados por la columna deseada en orden ascendente (ASC) o descendente (DESC). 
    .fondo-slyder.p-5.mb-5.mn
      .tarjeta.tarjeta--gris.p-4
        SlyderA(tipo='b')
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              h4(style="color: #8722E2 ") Orden ascendente por fecha  
              p Ejemplo para ordenar de manera ascendente por la fecha: SELECT * FROM cdr ORDER BY registro ASC. 
            .col-lg-6.col-7: img(src='@/assets/curso/temas/36.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              h4(style="color: #8722E2 ") Orden ascendente por fecha 
              p Ejemplo para ordenar llamadas de larga distancia o celular a 85 pesos el minuto, por el costo mayor al menor: SELECT *, CEIL(facturar/60) * 85 AS valor FROM cdr WHERE LENGTH(destino) = 10 ORDER BY CEIL(facturar/60) * 85 DESC. 
            .col-lg-6.col-7: img(src='@/assets/curso/temas/37.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              h4(style="color: #8722E2 ") Agrupar por múltiples criterios   
              p Se puede agrupar por varios criterios a la vez, por ejemplo, ordenar los resultados por la duración y si hay repetidos, que el siguiente criterio sea la fecha de registro: SELECT * FROM cdr ORDER BY facturar DESC, registro ASC. 
            .col-lg-6.col-7: img(src='@/assets/curso/temas/38.png', alt='')
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.4 Listar y limitar resultados. 
    p.mb-5(data-aos='fade-right') La principal forma de limitar resultados en una consulta es mediante el uso de la cláusula WHERE para filtrar condiciones en los datos. Sin embargo, cuando aun así los resultados son demasiados, es necesario paginarlos o presentarlos por partes. Para esto, se utiliza la cláusula LIMIT. 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
      .row.justify-content-center(titulo="Filtrar y ordenar llamadas")
        .col-lg-5.mb-lg-0.mb-3
          p Filtra las llamadas de larga distancia o celular del año 2016 que cuesten más de $1.000 y preséntalas ordenadas de mayor a menor por el precio:
          .tarjeta-codigo.p-2.mb-5
            pre.language-html(language="html").mt-5
              code SELECT *, CEIL(facturar/60) * 85 AS valor 
                br
                |FROM cdr 
                br
                |WHERE YEAR(registro) = 2016 AND LENGTH(destino) = 10 AND CEIL(facturar/60) *                
                br
                |85 > 200 ORDER BY valor DES
        .col-lg-7.col-6: img(src='@/assets/curso/temas/39.png', alt='')
      .row.justify-content-center(titulo="Contar resultados")
        .col-lg-5.mb-lg-0.mb-3
          p Para contar los resultados que cumplen con ciertas condiciones sin ordenar:
          .tarjeta-codigo.p-2.mb-5
            pre.language-html(language="html").mt-5
              code SELECT COUNT(*) 
                br
                |FROM cdr 
                br
                |WHERE YEAR(registro) = 2016 
                br
                |AND LENGTH(destino) = 10 
                br
                |AND CEIL(facturar/60) * 85 > 200
        .col-lg-7.col-6: img(src='@/assets/curso/temas/40.png', alt='')
      .row.justify-content-center(titulo="Limitar resultados")
        .col-lg-5.mb-lg-0.mb-3
          p Para mostrar solo un número limitado de resultados, utiliza LIMIT. Por ejemplo, para ver los primeros 10:
          .tarjeta-codigo.p-2.mb-5
            pre.language-html(language="html").mt-5
              code SELECT *, CEIL(facturar/60) * 85 AS valor 
                br
                |FROM cdr 
                br
                |WHERE YEAR(registro) = 2016 
                br
                |AND LENGTH(destino) = 10 
                br
                |AND CEIL(facturar/60) * 85 > 200 
                br
                |ORDER BY valor DESC 
                br
                |LIMIT 10
        .col-lg-7.col-6: img(src='@/assets/curso/temas/41.png', alt='')
      .row.justify-content-center(titulo="Paginación de resultados")
        .col-lg-5.mb-lg-0.mb-3
          p Para rescatar filas de manera paginada, por ejemplo, las siguientes 10 después de las primeras 10
          .tarjeta-codigo.p-2.mb-5
            pre.language-html(language="html").mt-5
              code SELECT *, CEIL(facturar/60) * 85 AS valor 
                br
                |FROM cdr 
                br
                |WHERE YEAR(registro) = 2016 
                br
                |AND LENGTH(destino) = 10 
                br
                |AND CEIL(facturar/60) * 85 > 200 
                br
                |ORDER BY valor DESC 
                br
                |LIMIT 10, 10
        .col-lg-7.col-6: img(src='@/assets/curso/temas/42.png', alt='')
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.5 Agrupar filas
    p.mb-5(data-aos='fade-right') Es posible agrupar filas en el resultado de una consulta #[b SELECT] basándose en los valores de una columna específica, utilizando la cláusula #[b GROUP BY]. Esta cláusula se emplea junto con funciones de agregación como#[b  AVG, SUM, MAX, COUNT], entre otras.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.p-4(style="background-color:  #e3dfeb")
          h5 Ejemplo: 
          p.mb-0 Supongamos que deseamos saber cuántas llamadas entrantes se realizaron durante cada uno de los meses del año 2017. Se consideran llamadas entrantes aquellas que no provienen de una extensión local, identificadas porque el origen tiene más de tres dígitos. 
      .col-lg-5
        .tarjeta-codigo.p-2.mb-5
            pre.language-html(language="html").mt-5
              code SELECT MONTH(registro) AS mes, COUNT(*) AS cantidad 
                br
                |FROM cdr  
                br
                |WHERE LENGTH(origen) > 3 AND YEAR(registro) = 2017 
                br
                |GROUP BY mes 
    .row.justify-content-center.mb-5
      .col-lg-8.col-7.mb-lg-0.mb-3(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 4. 
          span Ejemplo llamadas entrantes 2017 
        img(src='@/assets/curso/temas/43.png', alt='La imagen presenta  la aplicación de un ejemplo sobre cuántas llamadas entrantes se realizaron durante cada uno de los meses del año 2017.')
      .col-lg-5
        p Pero si se desea mostrar también la agrupación por años y meses para los años 2017, 2018 y 2019, la consulta sería: 
        .tarjeta-codigo.p-2.mb-5
            pre.language-html(language="html").mt-5
              code ​​​SELECT YEAR(registro) AS año,  MONTH(registro) AS mes, COUNT(*) AS cantidad 

                br
                br
                |FROM cdr  
                br
                |WHERE LENGTH(origen) > 3 AND YEAR(registro) IN (2017,2018,2019) 
                br
                |GROUP BY año, mes 
                br
                |ORDER BY año, mes 
    p.mb-5(data-aos='fade-right') Es importante destacar que para incluir varios años en la consulta, se utilizó la cláusula IN. Además, los resultados se ordenan primero por año y, como segundo criterio, por mes.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 5. 
      span Usó de cláusula IN
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in"): img(src='@/assets/curso/temas/44.png', alt='La imagen indica que se usó la cláusula IN y se ordenó por año y como segundo criterio por mes.')








































            
    

</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
export default {
  name: 'Tema4',
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
