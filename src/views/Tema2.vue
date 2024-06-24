<template lang="pug">
.curso-main-container.pb-3
	BannerInterno
	.container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
		.titulo-principal.color-acento-contenido
			.titulo-principal__numero
				span 2
			h1 SQL para la creación y eliminación de bases de datos – DDL
		.row.justify-content-center.align-items-center.mb-5
			.col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
				.p-4(style="background-color: #f3f9ff ")
					p.mb-0 Cada grupo de entidades que tiene un modelo completo forma una base de datos. Desde la perspectiva de SQL, una base de datos es simplemente un conjunto de relaciones (o tablas), y se organizan o diferencian accediendo a ellas por su nombre. A nivel del sistema operativo, MySQL almacena cada base de datos en un directorio distinto.
			.col-lg-3.col-5(data-aos="fade-left"): img(src='@/assets/curso/temas/10.svg', alt='')
		p.mb-5(data-aos='fade-right') Por lo tanto, crear una base de datos es un proceso bastante sencillo. Sin embargo, al crearla, inicialmente estará vacía, es decir, no contendrá ninguna tabla. 
		.row.justify-content-center.mb-5
			.col-lg-10
				.tarjeta.color-primario.p-5.mb-5
						.row.justify-content-center.align-items-center
							.col-lg-2.col-6: img(src='@/assets/curso/temas/7.svg', alt='')
							.col-lg-10
								h5.mb-3: span.titulo-azul.p-2 ¡ Nota ! 
								p(data-aos='fade-right') Es esencial ejecutar las sentencias propuestas aquí mientras se estudia; de esta manera, se consolidarán los conocimientos adquiridos sobre cada tema tratado. Es necesario tomarse el tiempo para escribir en la consola cada una de las sentencias, ya que este ejercicio es fundamental para asimilar el conocimiento que se está adquiriendo. 
									br
									br
									|De igual forma, se deben revisar los resultados obtenidos tras la ejecución; en caso de error en la sintaxis, la respuesta ofrecerá una indicación de lo que podría estar fallando. 
		p.mb-5(data-aos='fade-right') Se procederá a crear y manejar una base de datos de práctica mientras se familiariza con el modo de operación de MySQL. 
			br
			|Para iniciar, se creará una base de datos únicamente para practicar, y se llamará "prueba": 
		.fondo-slyder.p-5.mb-5.mn
			.tarjeta.tarjeta--gris.p-4
				LineaTiempoC.color-primario()
					.row.justify-content-center(titulo="Paso 1")
						.col-lg-6.mb-4.mb-lg-0
							p Se usa la sentencia #[b CREATE DATABASE], para crear una base de datos. 
						.col-lg-4
							.tarjeta-codigo.p-5.mb-5
								pre.language-html(language="html").mt-5
									code mysql> USE prueba; 
										br
										|Database changed 
										br
										|mysql> 
					.row.justify-content-center(titulo="Paso 2")
						.col-lg-6.mb-4.mb-lg-0
							p Se puede saber cuántas bases de datos se encuentran en nuestro sistema usando la sentencia #[b SHOW DATABASES.] 
						.col-lg-5
							.tarjeta-codigo.p-5.mb-5
								pre.language-html(language="html").mt-5
									code mysql> SHOW DATABASES; 
										br
										|+——————————+ 
										br
										|| Database           | 
										br
										|+——————————+ 
										br
										|| arnecia            | 
										br
										|| information_schema | 
										br
										|| mysql              | 
										br
										|| performance_schema | 
										br
										|| prueba             | 
										br
										|| sys                | 
										br
										|+——————————+ 
										br
										|6 rows in set (0.00 sec) 
										br
										|mysql> 
					.row.justify-content-center(titulo="Paso 3")
						.col-lg-6.mb-4.mb-lg-0
							p Desde ahora, en los siguientes puntos, se trabajará con la base de datos creada, por lo cual, la elegirá como base de datos por defecto. Esto nos evitará poner el nombre de la base de datos en consultas. Para escoger una base de datos se emplea el comando USE, que no es puntualmente una sentencia SQL, sino una opción de MySQL
						.col-lg-4
							.tarjeta-codigo.p-5.mb-5
								pre.language-html(language="html").mt-5
									code mysql> USE prueba; 
										br
										|Database changed 
										br
										|mysql> 
					.row.justify-content-center(titulo="Paso 4")
						.col-lg-6.mb-4.mb-lg-0
							p Para borrar una base de datos se usa la sentencia SQL DROP. A continuación, se borrará la base de datos prueba, listaremos las existentes y la volveremos a crear: 
						.col-lg-4
							.tarjeta-codigo.p-5.mb-5
								pre.language-html(language="html").mt-5
									code mysql> DROP DATABASE prueba; 
										br
										|Query OK, 0 rows affected (0.01 sec) 
					.row.justify-content-center(titulo="Paso 5")
						.col-lg-6.mb-4.mb-lg-0
							p Liste las bases de datos para comprobar que ya no existe la base de datos antes creada. 
						.col-lg-5
							.tarjeta-codigo.p-5.mb-5
								pre.language-html(language="html").mt-5
									code mysql> SHOW DATABASES; 
										br
										|+——————————+ 
										br
										|| Database           | 
										br
										|+——————————+ 
										br
										|| arnecia            | 
										br
										|| information_schema | 
										br
										|| mysql              | 
										br
										|| performance_schema | 
										br
										|| sys                | 
										br
										|+——————————+ 
										br
										|5 rows in set (0.00 sec) 
										br
										|mysql> CREATE DATABASE prueba; 
										br
										|Query OK, 1 row affected (0.01 sec) 
										br
										|mysql> 
		.row.justify-content-center.mb-5
			.col-lg-4.mb-lg-0.mb-3
				.tarjeta.p-4.h-100(style="background-color:#d6e1fd ")
					p.mb-0 A continuación, se presenta la sentencia #[b CREATE TABLE], que se utiliza para la creación de tablas. Esta sentencia posee una sintaxis algo compleja debido a la variedad de opciones disponibles para configurar una tabla. Se explorarán estas opciones gradualmente, y en breve se dominarán muchas de ellas. 
			.col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/11.svg', alt='')
			.col-lg-4.mb-lg-0.mb-3
				.tarjeta.p-4.h-100(style="background-color:#ffefaf ")
					p.mb-0 En su forma más sencilla, la sentencia #[b CREATE TABLE] permite crear una tabla especificando todas las columnas requeridas. A continuación, se muestra un ejemplo de una tabla diseñada para almacenar el nombre de varias personas y sus respectivas fechas de nacimiento. Es necesario indicar el nombre de la tabla, así como los nombres y tipos de datos de cada columna:  
		p.mb-5(data-aos='fade-right') Se creará una tabla denominada 'gente' con dos columnas: 'nombre', que acepta cadenas de hasta 40 caracteres, y 'fecha', de tipo fecha. 
		.row.justify-content-center.mb-5
			.col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
				.tarjeta-codigo.p-5.mb-5
					pre.language-html(language="html").mt-5
						code mysql> USE prueba; 
							br
							|Database changed 
							br
							br
							|mysql> CREATE TABLE gente (nombre VARCHAR(40), fecha DATE); 
							br
							br
							|Query OK, 0 rows affected (0.53 sec) 
							br
							br
							|mysql> 
			.col-lg-7(data-aos="fade-left")
				p.mb-5(data-aos='fade-right') Se puede examinar cuántas tablas y qué nombres tienen en una base de datos, empleando la sentencia #[b SHOW TABLES:] 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> SHOW TABLES; 
							br
							|+————————+ 
							br
							|| Tables_in_prueba | 
							br
							|+————————+ 
							br
							|| gente          | 
							br
							|+————————+ 
							br
							|1 row in set (0.01 sec) 
							br
							|mysql> 
		.titulo-tres.mb-4: h3.mb-0 A. Valores nulos 
		p.mb-5(data-aos='fade-right') Al definir cada columna, se puede especificar si podrá o no contener valores nulos. Es importante recordar que las columnas que forman parte de una clave primaria no pueden almacenar valores nulos. 
		.row.justify-content-center.mb-5
			.col-lg-10
				.tarjeta.p-5(style="background-color: #e3dfeb ")
					.row.justify-content-center.align-items-center
						.col-lg-2.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/12.svg', alt='')
						.col-lg-10: p.mb-0 Cuando se define una columna como clave primaria, automáticamente se impide que contenga valores NULL (nulo). Sin embargo, no solo en este caso puede ser relevante restringir la asignación de valores nulos en una columna.
		p.mb-5(data-aos='fade-right') Por defecto, las columnas admiten valores nulos (NULL). Para que no se permitan, se utiliza la restricción NOT NULL. Por ejemplo:  
		.row.justify-content-center.mb-5
			.col-lg-6
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> CREATE TABLE ciudad (nombre VARCHAR(20) 
							br
							|NOT NULL, poblacion INT NULL); 
							br
							br
							|Query OK, 0 rows affected (0.53 sec) 
		p.mb-5(data-aos='fade-right').fw-bold Listar las tablas existentes hasta ahora: 
		.row.justify-content-center.mb-5
			.col-lg-6
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> SHOW TABLES; 
							br
							|+————————+ 
							br
							|| Tables_in_prueba | 
							br
							|+————————+ 
							br
							|| gente          | 
							br
							|+————————+ 
							br
							|1 row in set (0.01 sec) 
							br
							|mysql> 
		
		.titulo-tres.mb-4: h3.mb-0 B. Valores por defecto 
		.row.justify-content-center.mb-5
			.col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
				p En una columna, se puede especificar opcionalmente un valor por defecto. Este valor por defecto se asignará automáticamente a la columna cuando no se especifique un valor concreto al añadir un registro. Si una columna permite valores nulos y no se especifica un valor al insertar, el valor por defecto será NULL. Por ejemplo, en el caso mencionado anteriormente, el valor por defecto para la columna "poblacion" es NULL.
				img(src='@/assets/curso/temas/13.svg', alt='' style="width: 85px")
			.col-lg-7(data-aos="fade-left")  
				.tarjeta.p-4.mb-3(style="background-color: #e3dfeb")
					p.mb-0 Si se desea que el valor por defecto sea 50,000 para la columna "poblacion", la tabla se creará de la siguiente manera: 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code CREATE TABLE ciudad2 (nombre VARCHAR(20) NOT NULL, poblacion INT NULL 
							br
							|DEFAULT 5000); 
		p #[b A continuación, se debe redactar la sentencia, pero esta vez se hará por partes: ]
		.row.justify-content-center.mb-5
			.col-lg-4.mb-lg-0.mb-3
				.tarjeta.p-4.h-100(style="background-color: #d6e1fd ").d-flex.align-items-center
					img.d-inline-block(src='@/assets/curso/temas/n1.svg', alt='' style="width: 62px").me-4.mb-lg-0.mb-3
					p.mb-0 Primero se escribirá CREATE TABLE ciudad2 (nombre VARCHAR(20) NOT NULL.
			.col-lg-4.mb-lg-0.mb-3
				.tarjeta.p-4.h-100(style="background-color: #d6e1fd ").d-flex.align-items-center
					img.d-inline-block(src='@/assets/curso/temas/n2.svg', alt='' style="width: 62px").me-4.mb-lg-0.mb-3
					p.mb-0 Se presiona la tecla ENTER.
			.col-lg-4.mb-lg-0.mb-3
				.tarjeta.p-4.h-100(style="background-color: #d6e1fd ").d-flex.align-items-center
					img.d-inline-block(src='@/assets/curso/temas/n3.svg', alt='' style="width: 62px").me-4.mb-lg-0.mb-3
					p.mb-0 Luego se escribe el resto de lasentencia poblacion INT NULL DEFAULT 50000).
		p.mb-5(data-aos='fade-right') Recuerde que MySQL interpreta una sentencia solo cuando encuentra el carácter punto y coma (;). El resultado será: 
		.row.justify-content-center.mb-5
			.col-lg-8
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> CREATE TABLE ciudad3 (nombre VARCHAR(20) NOT NULL PRIMARY KEY, poblacion INT NULL DEFAULT 50000); 
		.titulo-tres.mb-4: h3.mb-0 C. Claves primarias
		.row.justify-content-center.mb-5
			.col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
				p Es posible definir una clave primaria para una columna utilizando la palabra clave #[b PRIMARY KEY]. Cada tabla puede tener solo una clave primaria, y la columna designada como tal no puede contener valores NULL, como se mencionó anteriormente. Si esto no se especifica explícitamente, MySQL lo gestionará automáticamente. 
				img(src='@/assets/curso/temas/13.svg', alt='' style="width: 85px")
			.col-lg-7(data-aos="fade-left")  
				.tarjeta.p-4.mb-3(style="background-color: #e3dfeb")
					p.mb-0 Por ejemplo, si se desea crear un índice para la columna “nombre” en la tabla “ciudad3”, la tabla se crearía de la siguiente manera: 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> CREATE TABLE ciudad3 (nombre VARCHAR(20) NOT NULL PRIMARY KEY, poblacion INT NULL DEFAULT 50000);  
							br
							br
							|Query OK, 0 rows affected (0. sec) 
		.row.justify-content-center.mb-5
			.col-lg-10
				.tarjeta.color-primario.p-5.mb-5
						.row.justify-content-center.align-items-center
							.col-lg-2.col-6: img(src='@/assets/curso/temas/7.svg', alt='')
							.col-lg-10
								h5.mb-3: span.titulo-azul.p-2 ¡ Nota ! 
								p(data-aos='fade-right') En la terminología SQL estándar, el término KEY se utiliza generalmente en la definición de índices y PRIMARY KEY para claves primarias específicas 
		p.mb-5(data-aos='fade-right') El uso de #[b NOT NULL PRIMARY KEY] equivale a #[b PRIMARY KEY] en cuanto a la restricción de valores nulos y la definición de la clave primaria. Es importante destacar que #[b PRIMARY KEY] implica automáticamente #[b NOT NULL]. Por lo tanto, #[b PRIMARY KEY, NOT NULL] o simplemente KEY pueden parecer equivalentes en términos generales, pero en la práctica, #[b KEY] se utiliza más comúnmente para definir índices que no necesariamente son claves primarias. 
		.row.justify-content-center.mb-5
			.col-lg-10
				.tarjeta.color-primario.p-5.mb-5
						.row.justify-content-center.align-items-center
							.col-lg-2.col-6: img(src='@/assets/curso/temas/7.svg', alt='')
							.col-lg-10
								h5.mb-3: span.titulo-azul.p-2 ¡ Nota ! 
								p(data-aos='fade-right') Existen sintaxis más específicas para crear claves primarias que son generalmente preferibles por ser más potentes. Por ejemplo, la sintaxis general permite crear claves primarias compuestas por varias columnas, algo que no es posible con el alias simplificado que se ha explicado anteriormente. 
		.titulo-tres.mb-4: h3.mb-0 D. Columnas autoincrementadas
		.row.justify-content-center.mb-5
			.col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
				p En MySQL, es posible crear una columna autoincrementada; sin embargo, esta debe ser de tipo entero y actuar como clave primaria. Cuando se inserta una fila y se omite el valor de la columna autoincrementada, o se intenta insertar un valor nulo en ella, MySQL calculará automáticamente su valor. Esto se hace tomando el valor más alto actual en esa columna y sumándole uno, generando así una secuencia. Este mecanismo garantiza un valor único y secuencial para cada fila de la tabla. 
					br
					br
					|Estas columnas son comúnmente utilizadas como claves primarias secuenciales. SQL limita las columnas autoincrementadas a números enteros, lo que significa que no se puede aplicar autoincremento a columnas de otro tipo. Por ello, una columna que sea entera y autoincrementada resulta ideal para ser utilizada como clave primaria artificial. 
			.col-lg-3.col-5(data-aos="fade-left"): img(src='@/assets/curso/temas/14.svg', alt='')
		.row.justify-content-center.mb-5
			.col-lg-8 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> CREATE TABLE ciudad4 (clave INT AUTO_INCREMENT PRIMARY KEY,  
							br
		.titulo-tres.mb-4: h3.mb-0 E. Comentarios 
		.row.justify-content-center.mb-5
			.col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
				p Adicionalmente, al momento de crear la tabla, se puede agregar un comentario a cada columna. Este comentario sirve como información adicional sobre características específicas de la columna y se incluye en el apartado de documentación de la base de datos. Esto facilita la comprensión y el mantenimiento del esquema de la base de datos por otros desarrolladores o por uno mismo en el futuro. 
			.col-lg-3.col-5(data-aos="fade-left"): img(src='@/assets/curso/temas/14.svg', alt='')
		.row.justify-content-center.mb-5
			.col-lg-8 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> CREATE TABLE ciudad5 
							br
							br
							|-> (clave INT AUTO_INCREMENT PRIMARY KEY COMMENT ‘Esta es Clave principal’, 
							br
							|-> nombre VARCHAR(50) NOT NULL, 
							br
							|-> poblacion INT NULL DEFAULT 50000); 
							br
							|Query OK, 0 rows affected (0.08 sec) 
		.titulo-tres.mb-4: h3.mb-0 F. Descripción de la tabla 
		.row.justify-content-center.mb-5
			.col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
				p SQL tiene una sentencia que permite revisar la descripción de una tabla; esta sentencia es DESC &lt;nombre_tabla&gt; 
			.col-lg-3.col-5(data-aos="fade-left"): img(src='@/assets/curso/temas/14.svg', alt='')
		.row.justify-content-center.mb-5
			.col-lg-8 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> DESC ciudad5; 
							br
							|+—————+—————+———+——+—————+————————+ 
							br
							|| Field     | Type     | Null | Key | Default | Extra          | 
							br
							|+—————+—————+———+——+————+————————+ 
							br
							|| clave     | int      | NO   | PRI | NULL    | auto_increment | 
							br
							|| nombre    | char(50) | NO   |     | NULL    |                | 
							br
							|| poblacion | int      | YES  |     | 5000   |                | 
							br
							|+—————+—————+———+——+—————+————————+ 
							br
							|3 rows in set (0.01 sec) 
		.titulo-tres.mb-4: h3.mb-0 G. Documentación
		.row.justify-content-center.mb-5
			.col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
				p SQL ofrece diversas opciones al momento de definir columnas. Además de especificar el tipo y el nombre, es posible determinar valores por defecto, permitir o prohibir valores tipo NULL, crear claves primarias, indexar, entre otras funciones. La sintaxis para definir las columnas es: 
			.col-lg-3.col-5(data-aos="fade-left"): img(src='@/assets/curso/temas/14.svg', alt='')
		.row.justify-content-center.mb-5
			.col-lg-8 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code nombre_columna tipo_dato [NOT NULL | NULL] [DEFAULT valor_por_defecto] [AUTO_INCREMENT] [PRIMARY KEY] [COMMENT ‘string’] [definición_referencial] 
		p.fw-bold Esta documentación se puede leer de la siguiente forma: 
		.row.justify-content-center.mb-3.g-0.overflow-hidden(style="border-radius: 20px")
			.col-lg-2.mb-lg-0.mb-3
				.p-3.h-100(style="background-color: #00ffdf ").d-flex.align-items-center
					h5.mb-0 nombre_columna:
			.col-lg-4
				.p-3.h-100(style="background-color: #dee4f0 ")
					p.mb-0 Es el nombre que se le dará a la columna a definir.
		.row.justify-content-center.mb-3.g-0
			.col-lg-2.mb-lg-0.mb-3
				.p-3.h-100(style="background-color: #00ffdf ").d-flex.align-items-center
					h5.mb-0 tipo_dato
			.col-lg-4
				.p-3.h-100(style="background-color: #dee4f0 ")
					p.mb-0 Es el tipo de datos de la columna (INT, FLOAT, VARCHAR).
		.row.justify-content-center.mb-3.g-0
			.col-lg-2.mb-lg-0.mb-3
				.p-3.h-100(style="background-color: #00ffdf ").d-flex.align-items-center
					h5.mb-0 [NOT NULL | NULL]:
			.col-lg-4
				.p-3.h-100(style="background-color: #dee4f0 ")
					p.mb-0 Todo lo que se encuentre encerrado entre corchetes ([]) significa que es opcional; puede incluirse 
		.row.justify-content-center.mb-5.g-0
			.col-lg-2.mb-lg-0.mb-3
				.p-3.h-100(style="background-color: #00ffdf ").d-flex.align-items-center
					h5.mb-0 DATE NOT NULL:
			.col-lg-4
				.p-3.h-100(style="background-color: #dee4f0 ")
					p.mb-0 Si se quiere definir un campo que se llame fecha de tipo DATE y que no sea nulable.
		p.mb-5(data-aos='fade-right') Si quiere que el valor por defecto de esta columna sea la fecha actual del sistema puedo usar la sintaxis DEFAULT CURRENT_DATE así: 
		.row.justify-content-center.mb-5
			.col-lg-8 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code fecha DATE NOT NULL DEFAULT CURRENT_DATE 
		.titulo-tres.mb-4: h3.mb-0 H. Claves primarias compuestas 
		.row.justify-content-center.mb-5
			.col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
				p La sintaxis para definir claves primarias es: 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code definición_columnas 
							br
							| PRIMARY KEY (index_nombre_col, …) 
			.col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
				p Usando esta sintaxis, el ejemplo anterior para crear claves primarias quedaría de la siguiente forma: 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> CREATE TABLE ciudad6 (nombre CHAR(20) NOT NULL,  
							br
							br
							|poblacion INT NULL DEFAULT 5000,  
							br
							|PRIMARY KEY (nombre)); 
							br
							br
							|Query OK, 0 rows affected (0.17 sec) 
		p.mb-5(data-aos='fade-right') Sin embargo, esta metodología ofrece una mayor flexibilidad; por ejemplo, entre los paréntesis se pueden incluir varios nombres de columnas para formar claves primarias compuestas por múltiples columnas: 
		.row.justify-content-center.mb-5
			.col-lg-8 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> CREATE TABLE persona ( 
							br
							br
							|tipo_documento CHAR(2) NOT NULL,  
							br
							|documento_identidad CHAR(10) NOT NULL,  
							br
							|nombre CHAR(30),  
							br
							|PRIMARY KEY (tipo_documento, documento_identidad)); 
							br
							|Query OK, 0 rows affected (0.09 sec) 
							br
							|mysql> 
		p.mb-5(data-aos='fade-right') Una vez definida la tabla, es importante prestar especial atención a la columna de salida llamada 'Key':
		.row.justify-content-center.mb-5
			.col-lg-8 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> DESC persona; 
							br
							|+——————————+—————+———+——+————+———+ 
							br
							|| Field   | Type     | Null | Key | Default | Extra | 
							br
							|+——————————+—————+———+——+————+———+ 
							br
							|| tipo_documento     | char(2)  | NO   | PRI | NULL    |       | 
							br
							|| documento_identidad| char(10) | NO   | PRI | NULL    |       | 
							br
							|| nombre             | char(30) | YES  |     | NULL    |       | 
							br
							|+——————————+—————+———+——+————+———+ 
							br
							|3 rows in set (0.00 sec) 
							br
							|mysql> 
		.titulo-tres.mb-4: h3.mb-0 I. Índices
		p.mb-5(data-aos='fade-right') Existen tres tipos de índices en bases de datos. El primero se relaciona con las claves primarias, que, como se ha visto, también se pueden crear en la sección de definición de columnas. 
			br
			br
			| #[b ¿Cuándo es oportuno crear índices?]
		.fondo-t1.mn.p-5.mb-5
			.row.justify-content-center
				.col-lg-3.col-7.mb-lg-0.mb-3
					.h-100.d-flex.aling-items-center
						img(src='@/assets/curso/temas/15.svg', alt='')
				.col-lg-3.mb-lg-0.mb-3
					.tarjeta.p-4.h-100(style="background-color: #3a1d71 ")
						h5(style="color:#00FFDF") Cuando se define una llave foránea:
						p.text-white Esto ayuda a mejorar el rendimiento de las operaciones de consulta y actualización que involucran la llave foránea.
				.col-lg-3.mb-lg-0.mb-3
					.tarjeta.p-4.h-100(style="background-color: #3a1d71 ")
						h5(style="color:#00FFDF") Cuando se anticipa que se realizarán consultas directas 
						p.text-white Crear índices en columnas frecuentemente consultadas puede significativamente acelerar el tiempo de respuesta en las búsquedas.
		p.mb-5(data-aos='fade-right') El segundo tipo de índice permite definir índices sobre una columna específica. Para establecer estos índices, se pueden utilizar indistintamente las opciones KEY o INDEX: 
		.row.justify-content-center.mb-5
			.col-lg-6.mb-lg-0.mb-3
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> CREATE TABLE indices1 ( 
							br
							|-> id INT, 
							br
							|-> nombre VARCHAR(20), 
							br
							|-> INDEX (nombre)); 
							br
							|Query OK, 0 rows affected (0.14 sec) 
			.col-lg-6.mb-lg-0.mb-3
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> CREATE TABLE indices2 ( 
							br
							||-> id INT, 
							br
							||-> nombre VARCHAR(20), 
							br
							||-> KEY (nombre)); 
							br
							|Query OK, 0 rows affected (0.16 sec) 
		.titulo-tres.mb-4: h3.mb-0 J. Claves únicas
		p.mb-5(data-aos='fade-right') El tercer tipo de índices se utiliza para crear claves únicas, ya sea sobre una columna o varias. Para definir índices con claves únicas, se debe usar la opción UNIQUE. 
			br
			br
			|La diferencia entre un índice único y un índice normal es que en los índices únicos no se admite la inclusión de filas con datos repetidos en la columna o columnas de la tabla. Una excepción es el valor NULL, que sí puede repetirse varias veces. 
		.row.justify-content-center.mb-5
			.col-lg-4.mb-lg-0.mb-3
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> CREATE TABLE indices3 ( 
							br
							|-> id INT, 
							br
							|-> nombre CHAR(19), 
							br
							|-> UNIQUE (nombre)); 
							br
							|Query OK, 0 rows affected (0.09 sec) 
			.col-lg-5.mb-lg-0.mb-3
				p La diferencia entre un índice único y un índice normal radica en que los índices únicos no permiten la inclusión de filas con datos duplicados en la columna o columnas de la tabla. Sin embargo, es importante tener en cuenta una excepción: el valor NULL, que sí se puede repetir varias veces en un índice único. 
				img(src='@/assets/curso/temas/13.svg', alt='' style="width: 85px")
			.col-lg-3.col-6: img(src='@/assets/curso/temas/16.svg', alt='')
		Separador
		#t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
			h2 2.1 Claves foráneas 
		p.mb-5(data-aos='fade-right') En #[b MySQL], el soporte para claves foráneas está limitado a las tablas del tipo InnoDB. Aunque InnoDB es el motor de almacenamiento por defecto en las últimas versiones de #[b MySQL], esto no impide su uso en otros tipos de tablas. 
		.row.justify-content-center.mb-5
			.col-lg-6
				.titulo-sexto.color-acento-contenido(data-aos='fade-right')
					h5 Figura 1. 
					span Claves foráneas
				img(src='@/assets/curso/temas/16.png', alt='')
		p.mb-5(data-aos='fade-right') Primero se crea la tabla "persona": 
		.row.justify-content-center.mb-5
			.col-lg-6 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql> CREATE TABLE personas ( 
							br
							|-> id_persona INT AUTO_INCREMENT PRIMARY KEY, 
							br
							|-> nombres VARCHAR(40) NOT NULL, 
							br
							|-> fecha DATE); 
							br
							|Query OK, 0 rows affected (0.13 sec) 
		p.mb-5(data-aos='fade-right') Si se desea crear una base de datos que refleje el modelo presentado en el diagrama anterior, las sentencias para la tabla "teléfonos" con la referencia a la tabla "persona" serían las siguientes: 
		.row.justify-content-center.mb-5
			.col-lg-6 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code CREATE TABLE telefonos ( 
							br
							|pokemon_id INT NOT NULL REFERENCES pokemons (id) ON DELETE CASCADE ON UPDATE CASCADE, 
							br
							|numero VARCHAR(20) PRIMARY KEY, 
							br
							|tipo VARCHAR(10) 
							br
							|); 
		.row.justify-content-center.mb-5
			.col-lg-4.mb-lg-0.mb-3
				.tarjeta.p-4.h-100(style="background-color:#d6e1fd ")
					p.mb-0 Se ha utilizado una definición como referencia para la columna #[b “numero”] de la tabla #[b ‘telefonos]’, indicando que es una clave foránea asociada a la columna #[b ‘id_persona’] de la tabla ‘persona’ mediante la columna #[b ‘persona_id’]. Aunque la sintaxis es correcta, es importante destacar las funcionalidades de las expresiones #[b DELETE CASCADE y UPDATE CASCADE] en términos de la integridad referencial. 
			.col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/17.svg', alt='')
			.col-lg-4.mb-lg-0.mb-3
				.tarjeta.p-4.h-100(style="background-color:#ffefaf ")
					p.mb-0 De manera similar, la expresión #[b UPDATE CASCADE] asegura que, si el #[b ‘id_persona’] en una fila de la tabla #[b ‘persona’] se actualiza a otro valor y existen registros en la tabla #[b ‘telefonos’] con el valor original en la columna #[b ‘persona_id’], estos registros en #[b ‘telefonos’] actualizarán su valor en la columna #[b ‘persona_id’] para reflejar el cambio. Este procedimiento también es una forma de restricción de integridad referencial. 
		.row.justify-content-center.mb-5
			.col-lg-6(data-aos="zoom-in")
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code — Creación de la tabla ‘personas’ 
							br
							|CREATE TABLE personas ( 
							br
							|  #[span.ms-5 id_persona INT AUTO_INCREMENT PRIMARY KEY,] 
							br
							|  #[span.ms-5 nombres VARCHAR(40) NOT NULL, ]
							br
							|  #[span.ms-5 fecha DATE ]
							br
							|); 
							br
							|Query OK, 0 rows affected (0.13 sec) 
							br
							|CREATE TABLE telefonos ( 
							br
							| #[span.ms-5 persona_id INT NOT NULL REFERENCES personas (id) ON DELETE CASCADE ON UPDATE CASCADE, ]
							br
							| #[span.ms-5 numero VARCHAR(20) PRIMARY KEY,] 
							br
							| #[span.ms-5 tipo VARCHAR(10) ]
							br
							|); 
							br
							|Query OK, 0 rows affected (0.13 sec) 
		.row.justify-content-center.mb-5
			.col-lg-6.mb-lg-0.mb-3(data-aos="zoom-in")
				p Revisemos otra variante de la misma sintaxis definiendo explícitamente que se usará el motor #[b InnoDB], para que las reglas de restricción de integridad apliquen: 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code CREATE TABLE personas2 ( 
							br
							|id_persona INT AUTO_INCREMENT PRIMARY KEY, 
							br
							|nombres VARCHAR(45), 
							br
							|fecha DATE 
							br
							|) ENGINE=InnoDB; 
			.col-lg-6.mb-lg-0.mb-3(data-aos="zoom-in")
				p 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code CREATE TABLE telefonos2 ( 
							br
							|numero VARCHAR(20), 
							br
							|persona_id INT NOT NULL, 
							br
							|KEY (numero), 
							br
							|FOREIGN KEY (persona_id) REFERENCES personas2 (id_persona) 
							br
							|  ON DELETE CASCADE ON UPDATE CASCADE 
							br
							|) ENGINE=InnoDB;
		p.mb-5(data-aos='fade-right') Es necesario que la columna que tiene una definición de clave foránea esté indexada mediante KEY(numero). Sin embargo, esto no debe generar preocupación, ya que si no se especifica explícitamente, MySQL realizará la indexación de manera implícita.
		.row.justify-content-center.mb-5
			.col-lg-8
				.p-4.mb-4(style="background-color: #e3dfeb") 
					p.mb-0 9Esta configuración requiere una clave foránea en la columna #[b 'persona_id'], que hace referencia a la columna #[b 'id_persona'] de la tabla 'personas2' (#[b FOREIGN KEY] (persona_id) REFERENCES #[b personas2(id_persona))]. La definición incluye las acciones a realizar cuando se elimina una fila en la tabla #[b 'personas2'].  
		.row.justify-content-center.mb-5
			.col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
				.tarjeta.p-4.h-100(style="background-color: #8722e2")
					.tarjeta.d-flex.m-auto.p-4(style="background-color: #3a1d71 ").mb-4
						h1.text-white.text-center ON DELETE &lt;opcion&gt;
					p.text-white Define las acciones que deben de realizar en la tabla actual, cuando se elimine una fila en la tabla referenciada.

			.col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
				.tarjeta.p-4.h-100(style="background-color: #3a1d71")
					.tarjeta.d-flex.m-auto.p-4(style="background-color: #8722e2  ").mb-4
						h1.text-white.text-center ON UPDATE &lt;opcion&gt;
					p.text-white Es semejante, define las acciones que deben de realizar en la tabla actual, cuando se modifique o actualice la columna de una fila en la tabla referenciada.
		p.fw-bold Hay cinco opciones distintas. A continuación, se explica lo que hace cada una de ellas: 
		.row.justify-content-center.mb-5
			.col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
				AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
					.p-4(titulo="RESTRICT ")
						p.mb-0 Impide borrar o editar filas en la tabla referenciada si existen filas con el mismo valor de clave foránea.  
						
					.p-4(titulo="CASCADE ")
						p.mb-0 Borrar o modificar una clave en una fila en la tabla referenciada conlleva eliminar las filas con el mismo valor de clave foránea o cambiar los valores de esas claves foráneas.
						
					.p-4(titulo="SET NULL")
						p.mb-0 Al borrar o editar una clave en una fila en la tabla referenciada, se establece el valor NULL en las claves foráneas con el mismo valor.  
						
					.p-4(titulo="NO ACTION ")
						p.mb-0 Las claves foráneas no se alteran, ni se eliminan filas en la tabla que las contiene. 
						
					.p-4(titulo="SET DEFAULT ")
						p.mb-0 Borrar o alterar una clave en una fila en la tabla referenciada conlleva asignar el valor por defecto a las claves foráneas con el mismo valor.  
			.col-lg-5.col-7: img(src='@/assets/curso/temas/17.png', alt='')
		.row.justify-content-center.mb-5
			.col-lg-6
				p.fw-bold Ejemplo: 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code CREATE TABLE personas3 ( 
							br
							|  #[span.ms-3 id_persona INT AUTO_INCREMENT PRIMARY KEY, ]
							br
							|  #[span.ms-3 nombres VARCHAR(45),] 
							br
							|  #[span.ms-3 fecha DATE] 
							br
							|) ENGINE=InnoDB; 
							br
							|Query OK, 0 rows affected (0.16 sec) 
							br
							|CREATE TABLE telefonos3 ( 
							br
							|  #[span.ms-3 numero VARCHAR(20), ]
							br
							|  #[span.ms-3 persona_id INT NOT NULL,] 
							br
							|  #[span.ms-3 KEY (numero), ]
							br
							|  #[span.ms-3 FOREIGN KEY (persona_id) REFERENCES personas3 (id_persona) ]
							br
							|    #[span.ms-5 ON DELETE RESTRICT ON UPDATE CASCADE ]
							br
							|) ENGINE=InnoDB; 
							br
							|Query OK, 0 rows affected (0.19 sec) 
		p.mb-5(data-aos='fade-right') Si se intenta eliminar una fila de la tabla personas3 con un cierto valor en id_persona, se producirá un error si existen filas en la tabla telefonos3 en la columna persona_id con el mismo valor. La fila en personas3 no será eliminada a menos que se eliminen previamente las filas correspondientes en la tabla telefonos3 que comparten el mismo valor de clave foránea, debido a que se ha definido una restricción de tipo DELETE RESTRICT. 
			br
			br
			| Si se modifica el valor de la columna id_persona en la tabla personas3, también se deberán modificar los valores de la columna persona_id en la tabla telefonos3 para mantener la integridad referencial. 
		.row.justify-content-center.mb-5
			.col-lg-6.mb-lg-0.mb-3
				p.mb-5(data-aos='fade-right') Revisar los datos de las tablas #[b personas3 y telefonos3.] 
					br
					|Datos de la tabla personas3. 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code +——————+—————+——————+ 
							br
							|| id_persona | nombre    | fecha      | 
							br
							|+——————+—————+——————+ 
							br
							|| 1          | Fulanito  | 2021-06-09 | 
							br
							|| 2          | Menganito | 2021-06-06 | 
							br
							|| 3          | Tutanito  | 2021-06-23 | 
							br
							|| 4          | Migueíto  | 2021-06-22 | 
							br
							|+——————+—————+——————+ 
							br
							|4 rows in set (0.000 sec) 
							br
							|MariaDB [prueba]> 
			.col-lg-6.mb-lg-0.mb-3
				p.mb-5(data-aos='fade-right') Datos de la tabla #[b personas3.] 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code +————+—————+ 
							br
							|| numero | persona_id| 
							br
							|+————+—————+ 
							br
							|| 234279534 | 1       | 
							br
							|| 654345534 | 1       | 
							br
							|| 578819343 | 3       | 
							br
							|| 234294276 | 4       | 
							br
							|| 234293465 | 4       | 
							br
							|| 156096465 | 3       | 
							br
							|+————+—————+ 
							br
							|7 rows in set (0.000 sec) 
							br
							|MariaDB [prueba]&gt; 
		.row.justify-content-center.mb-5
			.col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
				ul.lista-ul--color
					li.d-flex
						i.fas.fa-circle.fa-xs(style="color: #8722E2 ")
						p.mb-0 Si se intenta eliminar la fila correspondiente a #[b "Fulanito"], se producirá un error debido a que existen dos filas en la tabla #[b telefonos3] con el valor 1 en la columna persona_id.
					li.d-flex
						i.fas.fa-circle.fa-xs(style="color: #8722E2 ")
						p.mb-0 Será posible eliminar la fila correspondiente a #[b "Menganito"], ya que no hay ninguna fila en la tabla #[b telefonos3] con el valor 2 en la columna persona_id. 
					li.d-flex
						i.fas.fa-circle.fa-xs(style="color: #8722E2 ")
						p.mb-0 Si cambiamos el valor de id_persona en la fila correspondiente a #[b "Tulanito"] por el valor 3, por ejemplo, este nuevo valor, 3, se asignará a la columna persona_id en las filas tercera y sexta de la tabla telefonos3. 
			.col-lg-5(data-aos="fade-left")
				img(src='@/assets/curso/temas/18.png', alt='')
		#t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
			h2 2.2 Mostrar y eliminar tablas y bases de datos
		p.mb-5(data-aos='fade-right') De vez en cuando es preciso eliminar una tabla, ya sea porque es más fácil crearla de nuevo que alterarla, o porque ya es prescindible. 
		.row.justify-content-center.mb-5
			.col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
				p Para borrar una tabla se usará la sentencia DROP TABLE. 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code DROP TABLE [IF EXISTS] tbl_name [, tbl_name] 
							br
							|mysql&gt; DROP TABLE telefonos2; 
							br
							|Query OK, 0 rows affected (0.75 sec) 
							br
							|mysql&gt; 
			.col-lg-5.mb-lg-0.mb-3(data-aos="fade-left")
				p Se puede agregar las palabras IF EXISTS, para impedir errores si la tabla a eliminar no existe. 
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql&gt;DROP TABLE telefonos5; 
							br
							|ERROR 1051 (42S02): Unknown table ‘telefonos5’ 
							br
							|mysql&gt;DROP TABLE IF EXISTS telefonos5; 
							br
							|Query OK, 0 rows affected, 1 warning (0.00 sec) 
							br
							|mysql&gt;
		p.mb-5(data-aos='fade-right') De manera similar, se puede borrar bases de datos enteras, utilizando la sentencia DROP DATABASE. La sintaxis asimismo es muy sencilla, a continuación, se creará una base de datos, una tabla y se borrará la base de datos. 
		.row.justify-content-center.mb-5
			.col-lg-6(data-aos="zoom-in")
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code mysql&gt; CREATE DATABASE borrame; 
							br
							|Query OK, 1 row affected (0.00 sec) 
							br
							|mysql&gt; USE borrame; 
							br
							|Database changed 
							br
							|mysql&gt; CREATE TABLE borrame ( 
							br
							|    -> id INT, 
							br
							|    -> nombre VARCHAR(40) 
							br
							|    -> ); 
							br
							|Query OK, 0 rows affected (0.19 sec)  mysql&gt; SHOW DATABASES; 
							br
							|+——————————+ 
							br
							|| Database           | 
							br
							|+——————————+ 
							br
							|| borrame            | 
							br
							|| mysql              | 
							br
							|| prueba             | 
							br
							|+——————————+ 
							br
							|4 rows in set (0.00 sec) 
							br
							|mysql&gt; SHOW TABLES; 
							br
							|+—————————+ 
							br
							|| Tables_in_borrame | 
							br
							|+-------------------+ 
							br
							|| borrame           | 
							br
							|+-------------------+ 
							br
							|1 row in set (0.00 sec) 
							br
							|mysql&gt; DROP DATABASE IF EXISTS borrame; 
							br
							|Query OK, 1 row affected (0.13 sec)  mysql&gt; DROP DATABASE IF EXISTS borrame; 
							br
							|Query OK, 0 rows affected, 1 warning (0.12 sec) 
							br
							|mysql&gt;
		.tarjeta.color-primario.p-5.mb-5
			.row.justify-content-around.align-items-center
				.col-3.col-sm-2.col-lg-1
					img(src="@/assets/curso/temas/19.svg")
				.col
					.row.justify-content-between.align-items-center
						.col-10.mb-3.mb-sm-0
							h5.mb-3: span.titulo-azul.p-2 Ejercicios prácticos  
							p(data-aos='fade-right').text-white Se propone revisar y estudiar dos ejercicios de repaso incluidos en el documento adjunto “Ejercicios Prácticos”. Estos ejercicios, completamente desarrollados y un poco más extensos, abarcan la temática vista hasta ahora, con la diferencia de que los problemas propuestos son más cercanos a situaciones de la vida real. 
						.col.mb-3.mb-sm-0
							a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank" type="application/pdf")
								span Descargar 
								i.fas.fa-file-download
						
						


		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		


</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
export default {
  name: 'Tema2',
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
