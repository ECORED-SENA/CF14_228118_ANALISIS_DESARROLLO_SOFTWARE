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
				.tarjeta.color-primario.p-4.pt-5
						.row.justify-content-center.align-items-center
							.col-lg-2.col-6: img(src='@/assets/curso/temas/7.svg', alt='')
							.col-lg-10
								h5.mb-3: span.titulo-azul.p-2 ¡Nota! 
								p(data-aos='fade-right') Es esencial ejecutar las sentencias propuestas aquí mientras se estudia; de esta manera, se consolidarán los conocimientos adquiridos sobre cada tema tratado. Es necesario tomarse el tiempo para escribir en la consola cada una de las sentencias, ya que este ejercicio es fundamental para asimilar el conocimiento que se está adquiriendo. 
									br
									br
									|De igual forma, se deben revisar los resultados obtenidos tras la ejecución; en caso de error en la sintaxis, la respuesta ofrecerá una indicación de lo que podría estar fallando. 
		p(data-aos='fade-right') Se procederá a crear y manejar una base de datos de práctica mientras se familiariza con el modo de operación de MySQL. 
		p.mb-5 Para iniciar, se creará una base de datos únicamente para practicar, y se llamará #[strong "prueba"]: 
		.fondo-slyder.p-5.mb-5.mn
			.tarjeta.tarjeta--gris.p-4
				LineaTiempoC.color-primario()
					.row.justify-content-center(titulo="Paso 1")
						.col-lg-11.mb-4.mb-lg-0
							p.mb-4 Se usa la sentencia #[code CREATE DATABASE], para crear una base de datos. 
						
							.tarjeta-codigo.p-5.mb-5
								pre.language-html(language="html").mt-5
									code mysql> USE prueba; 
										br
										|Database changed 
										br
										|mysql> 

					.row.justify-content-center(titulo="Paso 2")
						.col-lg-11.mb-4.mb-lg-0
							p.mb-4 Se puede saber cuántas bases de datos se encuentran en nuestro sistema usando la sentencia #[code SHOW DATABASES.] 

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
						.col-lg-11.mb-4.mb-lg-0
							p.mb-4 Desde ahora, en los siguientes puntos, se trabajará con la base de datos creada, por lo cual, la elegirá como base de datos por defecto. Esto nos evitará poner el nombre de la base de datos en consultas. Para escoger una base de datos se emplea el comando #[code USE], que no es puntualmente una sentencia SQL, sino una opción de MySQL

							.tarjeta-codigo.p-5.mb-5
								pre.language-html(language="html").mt-5
									code mysql> USE prueba; 
										br
										|Database changed 
										br
										|mysql> 

					.row.justify-content-center(titulo="Paso 4")
						.col-lg-11.mb-4.mb-lg-0
							p.mb-4 Para borrar una base de datos se usa la sentencia #[code SQL DROP]. A continuación, se borrará la base de datos prueba, listaremos las existentes y la volveremos a crear: 

							.tarjeta-codigo.p-5.mb-5
								pre.language-html(language="html").mt-5
									code mysql> DROP DATABASE prueba; 
										br
										|Query OK, 0 rows affected (0.01 sec) 
					.row.justify-content-center(titulo="Paso 5")
						.col-lg-11.mb-4.mb-lg-0
							p.mb-4 Liste las bases de datos para comprobar que ya no existe la base de datos antes creada. 

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
					p.mb-0 A continuación, se presenta la sentencia #[code CREATE TABLE], que se utiliza para la creación de tablas. Esta sentencia posee una sintaxis algo compleja debido a la variedad de opciones disponibles para configurar una tabla. Se explorarán estas opciones gradualmente, y en breve se dominarán muchas de ellas. 
			.col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/11.svg', alt='')
			.col-lg-4.mb-lg-0.mb-3
				.tarjeta.p-4.h-100(style="background-color:#ffefaf ")
					p.mb-0 En su forma más sencilla, la sentencia #[code CREATE TABLE] permite crear una tabla especificando todas las columnas requeridas. A continuación, se muestra un ejemplo de una tabla diseñada para almacenar el nombre de varias personas y sus respectivas fechas de nacimiento. Es necesario indicar el nombre de la tabla, así como los nombres y tipos de datos de cada columna:  
		
		p.mb-5(data-aos='fade-right') Se creará una tabla denominada #[code gente] con dos columnas: #[code nombre], que acepta cadenas de hasta 40 caracteres, y #[code fecha], de tipo fecha. 

		.row.justify-content-center
			.col-lg-10.mb-lg-0.mb-3(data-aos="fade-right")
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

		
		p.mb-5(data-aos='fade-right') Se puede examinar cuántas tablas y qué nombres tienen en una base de datos, empleando la sentencia #[code SHOW TABLES]: 

		.row.justify-content-center
			.col-lg-10(data-aos="fade-left")
				.tarjeta-codigo.p-2
					pre.language-html(language="html").mt-5
						code mysql> SHOW TABLES; 
							br
							|+----------------+ 
							br
							|| Tables_in_prueba | 
							br
							|+----------------+ 
							br
							|| gente          | 
							br
							|+----------------+ 
							br
							|1 row in set (0.01 sec) 
							br
							|mysql> 
		.f-1-2.p-5.mn.mb-5
			.titulo-tres.mb-4: h3.mb-0 A. Valores nulos 
			p.mb-5(data-aos='fade-right') Al definir cada columna, se puede especificar si podrá o no contener valores nulos. Es importante recordar que las columnas que forman parte de una clave primaria no pueden almacenar valores nulos. 
			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta.p-5(style="background-color: #e3dfeb ")
						.row.justify-content-center.align-items-center
							.col-lg-2.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/12.svg', alt='')
							.col-lg-10: p.mb-0 Cuando se define una columna como clave primaria, automáticamente se impide que contenga valores #[code NULL] (nulo). Sin embargo, no solo en este caso puede ser relevante restringir la asignación de valores nulos en una columna.
			p.mb-5(data-aos='fade-right') Por defecto, las columnas admiten valores nulos (#[code NULL]). Para que no se permitan, se utiliza la restricción #[code NOT NULL.] Por ejemplo:  

			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code mysql> CREATE TABLE ciudad (nombre VARCHAR(20) 
								br
								|NOT NULL, poblacion INT NULL); 
								br
								br
								|Query OK, 0 rows affected (0.53 sec) 

			p.mb-5(data-aos='fade-right').fw-bold Listar las tablas existentes hasta ahora: 
			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code mysql> SHOW TABLES; 
								br
								|+----------------+ 
								br
								|| Tables_in_prueba | 
								br
								|+----------------+ 
								br
								|| gente          | 
								br
								|+----------------+ 
								br
								|1 row in set (0.01 sec) 
								br
								|mysql> 
		.f-1-2.p-5.mn.mb-5
			.titulo-tres.mb-4: h3.mb-0 B. Valores por defecto 
			.row.justify-content-center.mb-4
				.col-lg-12.mb-lg-0.mb-3(data-aos="fade-right")
					p En una columna, se puede especificar opcionalmente un valor por defecto. Este valor por defecto se asignará automáticamente a la columna cuando no se especifique un valor concreto al añadir un registro. Si una columna permite valores nulos y no se especifica un valor al insertar, el valor por defecto será #[code NULL]. Por ejemplo, en el caso mencionado anteriormente, el valor por defecto para la columna #[code poblacion] es #[code NULL.]
			.row.justify-content-center
				.col-lg-10(data-aos="fade-left")  
					.tarjeta.p-4.mb-3(style="background-color: #e3dfeb")
						p.mb-0 Si se desea que el valor por defecto sea 50,000 para la columna #[code poblacion], la tabla se creará de la siguiente manera: 
			.row.justify-content-center
				.col-lg-10(data-aos="fade-left")  
					.tarjeta-codigo.p-2.mb-5
						pre.language-html(language="html").mt-5
							code CREATE TABLE ciudad2 (nombre VARCHAR(20) NOT NULL, 
								br
								| poblacion INT NULL DEFAULT 5000); 

			//img(src='@/assets/curso/temas/13.svg', alt='' style="width: 85px")

			p.mb-4 #[b A continuación, se debe redactar la sentencia, pero esta vez se hará por partes: ]
			.row.justify-content-center.mb-5
				.col-lg-4.mb-lg-0.mb-3
					.tarjeta.p-4.h-100(style="background-color: #d6e1fd ").d-flex.align-items-center
						img.d-inline-block(src='@/assets/curso/temas/n1.svg', alt='' style="width: 62px").me-4.mb-lg-0.mb-3
						p.mb-0 Primero se escribirá: #[code.etiqueta CREATE TABLE ciudad2 (nombre VARCHAR(20) NOT NULL,]
				.col-lg-4.mb-lg-0.mb-3
					.tarjeta.p-4.h-100(style="background-color: #d6e1fd ").d-flex.align-items-center
						img.d-inline-block(src='@/assets/curso/temas/n2.svg', alt='' style="width: 62px").me-4.mb-lg-0.mb-3
						p.mb-0 Se presiona la tecla ENTER.
				.col-lg-4.mb-lg-0.mb-3
					.tarjeta.p-4.h-100(style="background-color: #d6e1fd ").d-flex.align-items-center
						img.d-inline-block(src='@/assets/curso/temas/n3.svg', alt='' style="width: 62px").me-4.mb-lg-0.mb-3
						p.mb-0 Luego se escribe el resto de la sentencia #[code.etiqueta poblacion INT NULL DEFAULT 50000)]
			p.mb-5(data-aos='fade-right') Recuerde que MySQL interpreta una sentencia solo cuando encuentra el carácter punto y coma (;). El resultado será: 
			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta-codigo.p-2.mb-5
						pre.language-html(language="html").mt-5
							code mysql> CREATE TABLE ciudad2 (nombre VARCHAR(20) NOT NULL,
								br
								| poblacion INT NULL DEFAULT 50000); 
								br
								br
								| Query OK, 0 rows affected (0.29 sec) 

		.f-1-3.p-5.mn
			.titulo-tres.mb-4: h3.mb-0 C. Claves primarias
			.row.justify-content-center.mb-4
				.col-lg-12.mb-lg-0.mb-3(data-aos="fade-right")
					p Es posible definir una clave primaria para una columna utilizando la palabra clave #[code [PRIMARY KEY]]. Cada tabla puede tener solo una clave primaria, y la columna designada como tal no puede contener valores #[code NULL], como se mencionó anteriormente. Si esto no se especifica explícitamente, MySQL lo gestionará automáticamente. 
					//img(src='@/assets/curso/temas/13.svg', alt='' style="width: 85px")
			.row.justify-content-center
				.col-lg-10(data-aos="fade-left")  
					.tarjeta.p-4.mb-3(style="background-color: #e3dfeb")
						p.mb-0 Por ejemplo, si se desea crear un índice para la columna #[code nombre] en la tabla #[code ciudad3], la tabla se crearía de la siguiente manera: 

			.row.justify-content-center.mb-4
				.col-lg-10(data-aos="fade-left") 
					.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code mysql> CREATE TABLE ciudad3 (nombre VARCHAR(20) NOT NULL PRIMARY KEY, 
								br
								| poblacion INT NULL DEFAULT 50000); 
								br
								br
								|Query OK, 0 rows affected (0. sec) 

			.row.justify-content-center.mb-4
				.col-lg-10
					.tarjeta.color-primario.p-4.pt-5.mb-5
							.row.justify-content-center.align-items-center
								.col-auto: img(src='@/assets/curso/temas/7.svg', alt='', style="max-width: 100px")
								.col
									h5.mb-3: span.titulo-azul.p-2 ¡Nota! 
									p(data-aos='fade-right') En la terminología SQL estándar, el término #[strong KEY] se utiliza generalmente en la definición de índices y #[strong PRIMARY KEY] para claves primarias específicas. 
			p.mb-5(data-aos='fade-right') El uso de #[code NOT NULL PRIMARY KEY] equivale a #[code PRIMARY KEY] en cuanto a la restricción de valores nulos y la definición de la clave primaria. Es importante destacar que #[code PRIMARY KEY] implica automáticamente #[code NOT NULL]. Por lo tanto, #[code PRIMARY KEY, NOT NULL] o simplemente #[code KEY] pueden parecer equivalentes en términos generales, pero en la práctica, #[code KEY] se utiliza más comúnmente para definir índices que no necesariamente son claves primarias. 
			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta.color-primario.p-4.pt-5.mb-5
							.row.justify-content-center.align-items-center
								.col-lg-2.col-6: img(src='@/assets/curso/temas/7.svg', alt='', style="max-width: 100px")
								.col-lg-10
									h5.mb-3: span.titulo-azul.p-2 ¡Nota! 
									p(data-aos='fade-right') Existen sintaxis más específicas para crear claves primarias que son generalmente preferibles por ser más potentes. Por ejemplo, la sintaxis general permite crear claves primarias compuestas por varias columnas, algo que no es posible con el alias simplificado que se ha explicado anteriormente. 
		.f-1-4.p-5.mn.mb-5
			.titulo-tres.mb-4: h3.mb-0 D. Columnas autoincrementadas
			.row.justify-content-center.mb-5
				.col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
					p En MySQL, es posible crear una columna autoincrementada; sin embargo, esta debe ser de tipo entero y actuar como clave primaria. Cuando se inserta una fila y se omite el valor de la columna autoincrementada, o se intenta insertar un valor nulo en ella, MySQL calculará automáticamente su valor. Esto se hace tomando el valor más alto actual en esa columna y sumándole uno, generando así una secuencia. Este mecanismo garantiza un valor único y secuencial para cada fila de la tabla. 
					p Estas columnas son comúnmente utilizadas como claves primarias secuenciales. SQL limita las columnas autoincrementadas a números enteros, lo que significa que no se puede aplicar autoincremento a columnas de otro tipo. Por ello, una columna que sea entera y autoincrementada resulta ideal para ser utilizada como clave primaria artificial. 
				.col-lg-3.col-5(data-aos="fade-left"): img(src='@/assets/curso/temas/14.svg', alt='')
			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code mysql> CREATE TABLE ciudad4 (clave INT AUTO_INCREMENT PRIMARY KEY,  
								br
								| nombre VARCHAR(20) NOT NULL, 
								br
								| poblacion INT NULL DEFAULT 50000); 
								br
								br
								| Query OK, 0 rows affected (0.21 sec) 
		.f-1-5.p-5.mn.mb-5
			.titulo-tres.mb-4: h3.mb-0 E. Comentarios 
			p.mb-5 Adicionalmente, al momento de crear la tabla, se puede agregar un comentario a cada columna. Este comentario sirve como información adicional sobre características específicas de la columna y se incluye en el apartado de documentación de la base de datos. Esto facilita la comprensión y el mantenimiento del esquema de la base de datos por otros desarrolladores o por uno mismo en el futuro. 
			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code mysql> CREATE TABLE ciudad5 
								br
								| (clave INT AUTO_INCREMENT PRIMARY KEY COMMENT 'Esta es Clave principal', 
								br
								| nombre VARCHAR(50) NOT NULL, 
								br
								| poblacion INT NULL DEFAULT 50000); 
								br
								br
								|Query OK, 0 rows affected (0.08 sec) 
		.f-1-5.p-5.mn.mb-5
			.titulo-tres.mb-4: h3.mb-0 F. Descripción de la tabla 
			p.mb-5 SQL tiene una sentencia que permite revisar la descripción de una tabla; esta sentencia es #[code DESC &lt;nombre_tabla&gt;].

			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code mysql> DESC ciudad5; 
								br
								|+-----------+----------+------+-----+----------+----------------+ 
								br
								|| Field     | Type     | Null | Key | Default | Extra          | 
								br
								|+-----------+----------+------+-----+---------+----------------+ 
								br
								|| clave     | int      | NO   | PRI | NULL    | auto_increment | 
								br
								|| nombre    | char(50) | NO   |     | NULL    |                | 
								br
								|| poblacion | int      | YES  |     | 5000   |                | 
								br
								|+-----------+----------+------+-----+---------+----------------+ 
								br
								|3 rows in set (0.01 sec)
		.f-1-6.p-5.mn.mb-5
			.titulo-tres.mb-4: h3.mb-0 G. Documentación
			p.mb-5 SQL ofrece diversas opciones al momento de definir columnas. Además de especificar el tipo y el nombre, es posible determinar valores por defecto, permitir o prohibir valores tipo #[code NULL], crear claves primarias, indexar, entre otras funciones. La sintaxis para definir las columnas es: 

			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code nombre_columna tipo_dato [NOT NULL | NULL] 
								br 
								| [DEFAULT valor_por_defecto] [AUTO_INCREMENT] 
								br
								| [PRIMARY KEY] [COMMENT ‘string’] [definición_referencial] 

			p.fw-bold.mb-5 Esta documentación se puede leer de la siguiente forma: 

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
						p.mb-0 Es el tipo de datos de la columna #[code (INT, FLOAT, VARCHAR)].
			.row.justify-content-center.mb-3.g-0
				.col-lg-2.mb-lg-0.mb-3
					.p-3.h-100(style="background-color: #00ffdf ").d-flex.align-items-center
						h5.mb-0 [NOT NULL | NULL]:
				.col-lg-4
					.p-3.h-100(style="background-color: #dee4f0 ")
						p.mb-0 Todo lo que se encuentre encerrado entre corchetes ([ ]) significa que es opcional; puede incluirse o no. Dentro de las opciones, lo que está separado por el carácter "pipe" (|) significa que debe escogerse una de las opciones separadas por el "pipe".
			.row.justify-content-center.mb-5.g-0
				.col-lg-2.mb-lg-0.mb-3
					.p-3.h-100(style="background-color: #00ffdf ").d-flex.align-items-center
						h5.mb-0 DATE NOT NULL:
				.col-lg-4
					.p-3.h-100(style="background-color: #dee4f0 ")
						p.mb-0 Si se quiere definir un campo que se llame fecha de tipo #[code DATE] y que no sea #[i nullable].

			p.mb-5(data-aos='fade-right') Si quiere que el valor por defecto de esta columna sea la fecha actual del sistema puedo usar la sintaxis #[code DEFAULT CURRENT_DATE] así: 
			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code fecha DATE NOT NULL DEFAULT CURRENT_DATE 

		.f-1-6.p-5.mn.mb-5
			.titulo-tres.mb-4: h3.mb-0 H. Claves primarias compuestas 

			p La sintaxis para definir claves primarias es: 

			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code definición_columnas 
								br
								| PRIMARY KEY (index_nombre_col, …) 
			
			p Usando esta sintaxis, el ejemplo anterior para crear claves primarias quedaría de la siguiente forma: 

			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code mysql> CREATE TABLE ciudad6 (nombre CHAR(20) NOT NULL,  
								br
								| poblacion INT NULL DEFAULT 5000,  
								br
								| PRIMARY KEY (nombre)); 
								br
								br
								|Query OK, 0 rows affected (0.17 sec) 
			
			p.mb-4(data-aos='fade-right') Sin embargo, esta metodología ofrece una mayor flexibilidad; por ejemplo, entre los paréntesis se pueden incluir varios nombres de columnas para formar claves primarias compuestas por múltiples columnas: 

			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code mysql> CREATE TABLE persona ( 
								br
								| tipo_documento CHAR(2) NOT NULL,  
								br
								| documento_identidad CHAR(10) NOT NULL,  
								br
								| nombre CHAR(30),  
								br
								| PRIMARY KEY (tipo_documento, documento_identidad)); 
								br
								br
								|Query OK, 0 rows affected (0.09 sec) 
								br
								|mysql> 

			p.mb-4(data-aos='fade-right') Una vez definida la tabla, es importante prestar especial atención a la columna de salida llamada #[code 'Key']:

			.row.justify-content-center.mb-5
				.col-lg-10
					.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code mysql> DESC persona; 
								br
								|+--------------------+----------+------+-----+---------+-------+ 
								br
								|| Field   | Type     | Null | Key | Default | Extra | 
								br
								|+--------------------+----------+------+-----+---------+-------+ 
								br
								|| tipo_documento     | char(2)  | NO   | PRI | NULL    |       | 
								br
								|| documento_identidad| char(10) | NO   | PRI | NULL    |       | 
								br
								|| nombre             | char(30) | YES  |     | NULL    |       | 
								br
								|+--------------------+----------+------+-----+---------+-------+ 
								br
								br
								|3 rows in set (0.00 sec) 
								br
								|mysql> 
		.f-1-6.p-5.mn.mb-5
			.titulo-tres.mb-4: h3.mb-0 I. Índices
			p(data-aos='fade-right') Existen tres tipos de índices en bases de datos. El primero se relaciona con las claves primarias, que, como se ha visto, también se pueden crear en la sección de definición de columnas. 
			p.mb-4 #[b ¿Cuándo es oportuno crear índices?]
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
							h5(style="color:#00FFDF") Cuando se anticipa que se realizarán consultas directas: 
							p.text-white Crear índices en columnas frecuentemente consultadas puede significativamente acelerar el tiempo de respuesta en las búsquedas.
			p.mb-5(data-aos='fade-right') El segundo tipo de índice permite definir índices sobre una columna específica. Para establecer estos índices, se pueden utilizar indistintamente las opciones #[code KEY] o #[code INDEX]: 
			.row.justify-content-center.mb-4
				.col-lg-8.mb-lg-0.mb-3
					.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code mysql> CREATE TABLE indices1 ( 
								br
								|-> id INT, 
								br
								|-> nombre VARCHAR(20), 
								br
								|-> INDEX (nombre)); 
								br
								br
								|Query OK, 0 rows affected (0.14 sec) 

			p O su semejante:
			
			.row.justify-content-center.mb-5
				.col-lg-8.mb-lg-0.mb-3
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
		.f-1-5.p-5.mn.mb-5
			.titulo-tres.mb-4: h3.mb-0 J. Claves únicas
			p(data-aos='fade-right').mb-4 El tercer tipo de índices se utiliza para crear claves únicas, ya sea sobre una columna o varias. Para definir índices con claves únicas, se debe usar la opción #[code UNIQUE]. 
			//p.mb-4 La diferencia entre un índice único y un índice normal es que en los índices únicos no se admite la inclusión de filas con datos repetidos en la columna o columnas de la tabla. Una excepción es el valor #[code NULL], que sí puede repetirse varias veces. 
			
			.tarjeta-codigo.p-2.mb-4
				pre.language-html(language="html").mt-5
					code mysql> CREATE TABLE indices3 ( 
						br
						|-> id INT, 
						br
						|-> nombre CHAR(19), 
						br
						|-> UNIQUE (nombre)); 
						br
						br
						|Query OK, 0 rows affected (0.09 sec) 

			.row.justify-content-center.align-items-center.mb-5
				.col
					p La diferencia entre un índice único y un índice normal radica en que los índices únicos no permiten la inclusión de filas con datos duplicados en la columna o columnas de la tabla. Sin embargo, es importante tener en cuenta una excepción: el valor #[code NULL], que sí se puede repetir varias veces en un índice único. 
					img(src='@/assets/curso/temas/13.svg', alt='' style="width: 85px")
				.col-auto: img(src='@/assets/curso/temas/16.svg', alt='')
		Separador
		#t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
			h2 2.1 Claves foráneas 
		p.mb-5(data-aos='fade-right') En #[b MySQL], el soporte para claves foráneas está limitado a las tablas del tipo InnoDB. Aunque InnoDB es el motor de almacenamiento por defecto en las últimas versiones de #[b MySQL], esto no impide su uso en otros tipos de tablas. 

		.row.justify-content-center.mb-5
			.col-lg-6
				.titulo-sexto.color-acento-contenido(data-aos='fade-right')
					h5 Figura 1. 
					span Claves foráneas
				img(src='@/assets/curso/temas/16.png', alt='La imagen presenta dos tablas de bases de datos, personas y teléfonos.')
		p.mb-5(data-aos='fade-right') Primero se crea la tabla #[code persona]: 

		.row.justify-content-center.mb-5
			.col-lg-10
				.tarjeta-codigo.p-2
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
		p.mb-5(data-aos='fade-right') Si se desea crear una base de datos que refleje el modelo presentado en el diagrama anterior, las sentencias para la tabla #[code teléfonos] con la referencia a la tabla #[code persona] serían las siguientes: 

		.row.justify-content-center.mb-4
			.col-lg-10
				.tarjeta-codigo.p-2.mb-5
					pre.language-html(language="html").mt-5
						code CREATE TABLE telefonos ( 
							br
							|pokemon_id INT NOT NULL REFERENCES pokemons (id) ON DELETE #[em CASCADE ON UPDATE CASCADE,] 
							br
							|numero VARCHAR(20) PRIMARY KEY, 
							br
							|tipo VARCHAR(10) 
							br
							|); 

		.row.justify-content-center.mb-5
			.col-lg-8
				p Se ha utilizado una definición como referencia para la columna #[code numero] de la tabla #[code telefonos], indicando que es una clave foránea asociada a la columna #[code id_persona] de la tabla #[code persona] mediante la columna #[code persona_id]. Aunque la sintaxis es correcta, es importante destacar las funcionalidades de las expresiones #[code DELETE CASCADE y UPDATE CASCADE] en términos de la integridad referencial. 

				p De manera similar, la expresión #[code UPDATE CASCADE] asegura que, si el #[code id_persona] en una fila de la tabla #[code persona] se actualiza a otro valor y existen registros en la tabla #[code telefonos] con el valor original en la columna #[code persona_id], estos registros en #[code telefonos] actualizarán su valor en la columna #[code persona_id] para reflejar el cambio. Este procedimiento también es una forma de restricción de integridad referencial. 

			.col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/17.svg', alt='')

		//.row.justify-content-center.mb-5
			.col-lg-4.mb-lg-0.mb-3
				.tarjeta.p-4.h-100(style="background-color:#d6e1fd ")
					p.mb-0 Se ha utilizado una definición como referencia para la columna #[code numero] de la tabla #[code telefonos], indicando que es una clave foránea asociada a la columna #[code id_persona] de la tabla #[code persona] mediante la columna #[code persona_id]. Aunque la sintaxis es correcta, es importante destacar las funcionalidades de las expresiones #[code DELETE CASCADE y UPDATE CASCADE] en términos de la integridad referencial. 
			.col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/17.svg', alt='')
			.col-lg-4.mb-lg-0.mb-3
				.tarjeta.p-4.h-100(style="background-color:#ffefaf ")
					p.mb-0 De manera similar, la expresión #[code UPDATE CASCADE] asegura que, si el #[code id_persona] en una fila de la tabla #[code persona] se actualiza a otro valor y existen registros en la tabla #[code telefonos] con el valor original en la columna #[code persona_id], estos registros en #[code telefonos] actualizarán su valor en la columna #[code persona_id] para reflejar el cambio. Este procedimiento también es una forma de restricción de integridad referencial. 
					
		.row.justify-content-center.mb-5
			.col-lg-10(data-aos="zoom-in")
				.tarjeta-codigo.p-2
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
							br
							|Query OK, 0 rows affected (0.13 sec) 
							br
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
							br
							|Query OK, 0 rows affected (0.13 sec) 


		p Revisemos otra variante de la misma sintaxis definiendo explícitamente que se usará el motor #[code InnoDB], para que las reglas de restricción de integridad apliquen: 

		.row.justify-content-center.mb-4
			.col-lg-10
				.tarjeta-codigo.p-2
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

		p Y también para la tabla #[code telefonos2]: 

		.row.justify-content-center.mb-5
			.col-lg-10
				.tarjeta-codigo.p-2
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

		p.mb-5(data-aos='fade-right') Es necesario que la columna que tiene una definición de clave foránea esté indexada mediante #[code KEY(numero)]. Sin embargo, esto no debe generar preocupación, ya que si no se especifica explícitamente, MySQL realizará la indexación de manera implícita.

		.row.justify-content-center.mb-4
			.col-lg-10
				.p-4.mb-4(style="background-color: #e3dfeb") 
					p.mb-0 Esta configuración requiere una clave foránea en la columna #[code persona_id], que hace referencia a la columna #[code id_persona] de la tabla #[code personas2 (FOREIGN KEY (persona_id) REFERENCES personas2(id_persona))]. La definición incluye las acciones a realizar cuando se elimina una fila en la tabla #[b personas2]. 


		.row.justify-content-center.mb-5
			.col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
				.tarjeta.p-4.h-100(style="background-color: #8722e2")
					.tarjeta.d-flex.m-auto.p-4(style="background-color: #3a1d71 ").mb-4.justify-content-center
						h3.text-white.text-center.mb-0 ON DELETE #[em &lt;option&gt;]
					p.text-white Define las acciones que deben de realizar en la tabla actual, cuando se elimine una fila en la tabla referenciada.

			.col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
				.tarjeta.p-4.h-100(style="background-color: #3a1d71")
					.tarjeta.d-flex.m-auto.p-4(style="background-color: #8722e2  ").mb-4.justify-content-center
						h3.text-white.text-center.mb-0 ON UPDATE #[em &lt;option&gt;]
					p.text-white Es semejante, define las acciones que deben de realizar en la tabla actual, cuando se modifique o actualice la columna de una fila en la tabla referenciada.

		.f-1-7.p-5.pb-0.pt-3.mn
			p.fw-bold.mb-4 Hay cinco opciones distintas. A continuación, se explica lo que hace cada una de ellas: 
			.row.justify-content-center.mb-4
				.col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
					AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
						.p-4(titulo="RESTRICT ")
							p.mb-0 Impide borrar o editar filas en la tabla referenciada si existen filas con el mismo valor de clave foránea.  
							
						.p-4(titulo="CASCADE ")
							p.mb-0 Borrar o modificar una clave en una fila en la tabla referenciada conlleva eliminar las filas con el mismo valor de clave foránea o cambiar los valores de esas claves foráneas.
							
						.p-4(titulo="SET NULL")
							p.mb-0 Al borrar o editar una clave en una fila en la tabla referenciada, se establece el valor #[code NULL] en las claves foráneas con el mismo valor.  
							
						.p-4(titulo="NO ACTION ")
							p.mb-0 Las claves foráneas no se alteran, ni se eliminan filas en la tabla que las contiene. 
							
						.p-4(titulo="SET DEFAULT ")
							p.mb-0 Borrar o alterar una clave en una fila en la tabla referenciada conlleva asignar el valor por defecto a las claves foráneas con el mismo valor.  
				.col-lg-5.col-7: img(src='@/assets/curso/temas/17.png', alt='')
			.row.justify-content-center
				.col-lg-10
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
								br
								|Query OK, 0 rows affected (0.16 sec) 
								br
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
								br
								|Query OK, 0 rows affected (0.19 sec) 

		p(data-aos='fade-right') Si se intenta eliminar una fila de la tabla #[code personas3] con un cierto valor en #[code id_persona], se producirá un error si existen filas en la tabla #[code telefonos3] en la columna #[code persona_id] con el mismo valor. La fila en #[code personas3] no será eliminada a menos que se eliminen previamente las filas correspondientes en la tabla #[code telefonos3] que comparten el mismo valor de clave foránea, debido a que se ha definido una restricción de tipo #[code DELETE RESTRICT.] 
		
		p.mb-0 Si se modifica el valor de la columna #[code id_persona] en la tabla #[code personas3], también se deberán modificar los valores de la columna #[code persona_id] en la tabla #[code telefonos3] para mantener la integridad referencial. 


		.f-1-8.p-5.pt-4.mn.mb-5
			
			p.mb-4(data-aos='fade-right') Revisar los datos de las tablas #[code personas3] y #[code telefonos3]. 

			figure.mb-5
				.tarjeta-codigo.p-2
					pre.language-html(language="html").mt-5
						code +------------+-----------+------------+ 
							br
							|| id_persona | nombre    | fecha      | 
							br
							|+------------+-----------+------------+ 
							br
							|| 1          | Fulanito  | 2021-06-09 | 
							br
							|| 2          | Menganito | 2021-06-06 | 
							br
							|| 3          | Tutanito  | 2021-06-23 | 
							br
							|| 4          | Migueíto  | 2021-06-22 | 
							br
							|+------------+-----------+------------+ 
							br
							br
							|4 rows in set (0.000 sec) 
							br
							|MariaDB [prueba]> 

				figcaption Datos de la tabla #[code personas3]. 

			figure.mb-5
				.tarjeta-codigo.p-2
						pre.language-html(language="html").mt-5
							code +--------+-----------+ 
								br
								|| numero | persona_id| 
								br
								|+--------+-----------+ 
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
								|+--------+-----------+ 
								br
								br
								|7 rows in set (0.000 sec) 
								br
								|MariaDB [prueba]&gt; 
				figcaption Datos de la tabla #[code telefonos3]. 

			//.row.justify-content-center.mb-5
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
						li.d-flex.mb-5
							i.fas.fa-circle.fa-xs(style="color: #8722E2 ")
							p.mb-0 Si se intenta eliminar la fila correspondiente a #[strong "Fulanito"], se producirá un error debido a que existen dos filas en la tabla #[code telefonos3] con el valor 1 en la columna #[code persona_id].
						li.d-flex.mb-5
							i.fas.fa-circle.fa-xs(style="color: #8722E2 ")
							p.mb-0 Será posible eliminar la fila correspondiente a #[strong "Menganito"], ya que no hay ninguna fila en la tabla #[code telefonos3] con el valor 2 en la columna #[code persona_id]. 
						li.d-flex
							i.fas.fa-circle.fa-xs(style="color: #8722E2 ")
							p.mb-0 Si cambiamos el valor de id_persona en la fila correspondiente a #[strong "Tulanito"] por el valor 3, por ejemplo, este nuevo valor, 3, se asignará a la columna #[code persona_id] en las filas tercera y sexta de la tabla #[code telefonos3]. 
				.col-lg-5(data-aos="fade-left")
					img(src='@/assets/curso/temas/18.png', alt='')
		#t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
			h2 2.2 Mostrar y eliminar tablas y bases de datos
		
		p(data-aos='fade-right') De vez en cuando es preciso eliminar una tabla, ya sea porque es más fácil crearla de nuevo que alterarla, o porque ya es prescindible. 

		p Para borrar una tabla se usará la sentencia #[code DROP TABLE]. 

		.row.justify-content-center.mb-5
			.col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
				.tarjeta-codigo.p-2
					pre.language-html(language="html").mt-5
						code DROP TABLE #[em [IF EXISTS]] tbl_name #[em [, tbl_name]]
							br
							|mysql&gt; DROP TABLE telefonos2; 
							br
							br
							|Query OK, 0 rows affected (0.75 sec) 
							br
							|mysql&gt; 

		p Se puede agregar las palabras #[code IF EXISTS], para impedir errores si la tabla a eliminar no existe. 

		.row.justify-content-center.mb-5
			.col-lg-8.mb-lg-0.mb-3(data-aos="fade-left")
				.tarjeta-codigo.p-2
					pre.language-html(language="html").mt-5
						code mysql&gt;DROP TABLE telefonos5; 
							br
							| #[em ERROR 1051 (42S02): Unknown table ‘telefonos5’]
							br
							br
							|mysql&gt;DROP TABLE IF EXISTS telefonos5; 
							br
							br
							|Query OK, 0 rows affected, 1 warning (0.00 sec) 
							br
							|mysql&gt;

		p(data-aos='fade-right') De manera similar, se puede borrar bases de datos enteras, utilizando la sentencia #[code DROP DATABASE]. La sintaxis asimismo es muy sencilla, a continuación, se creará una base de datos, una tabla y se borrará la base de datos. 
		.row.justify-content-center.mb-5
			.col-lg-8(data-aos="zoom-in")
				.tarjeta-codigo.p-2
					pre.language-html(language="html").mt-5
						code mysql&gt; CREATE DATABASE borrame; 
							br
							|Query OK, 1 row affected (0.00 sec) 
							br
							br
							|mysql&gt; USE borrame; 
							br
							|Database changed 
							br
							br
							|mysql&gt; CREATE TABLE borrame ( 
							br
							|    -> id INT, 
							br
							|    -> nombre VARCHAR(40) 
							br
							|    -> ); 
							br
							br
							|Query OK, 0 rows affected (0.19 sec)  mysql&gt; SHOW DATABASES; 
							br
							br
							|+--------------------+ 
							br
							|| Database           | 
							br
							|+--------------------+ 
							br
							|| borrame            | 
							br
							|| mysql              | 
							br
							|| prueba             | 
							br
							|+--------------------+ 
							br
							br
							|4 rows in set (0.00 sec) 
							br
							|mysql&gt; SHOW TABLES; 
							br
							br
							|+--------------------+  
							br
							|| Tables_in_borrame | 
							br
							|+-------------------+ 
							br
							|| borrame           | 
							br
							|+-------------------+ 
							br
							br
							|1 row in set (0.00 sec) 
							br
							br
							|mysql&gt; DROP DATABASE IF EXISTS borrame; 
							br
							br
							|Query OK, 1 row affected (0.13 sec)  
							br
							| mysql&gt; DROP DATABASE IF EXISTS borrame; 
							br
							br
							|Query OK, 0 rows affected, 1 warning (0.12 sec) 
							br
							|mysql&gt;

		.tarjeta.color-primario.p-5.mb-5
			.row.justify-content-around.align-items-center
				.col-3.col-sm-2.col-lg-1.d-none.d-lg-block
					img(src="@/assets/curso/temas/19.svg")
				.col
					.row.justify-content-between.align-items-center
						.col-12.mb-3.mb-sm-0
							.row 
								.col-auto
									h5.mb-3.titulo-azul.p-2 Ejercicios prácticos  
							p(data-aos='fade-right').text-white Se propone revisar y estudiar dos ejercicios de repaso incluidos en el documento adjunto “Ejercicios Prácticos”. Estos ejercicios, completamente desarrollados y un poco más extensos, abarcan la temática vista hasta ahora, con la diferencia de que los problemas propuestos son más cercanos a situaciones de la vida real. 
						.col.mb-3.mb-sm-0
							a.boton.color-acento-botones(:href="obtenerLink('downloads/EjerciciosPracticos.pdf')" target="_blank" type="application/pdf")
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
