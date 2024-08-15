(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema5"],{"0299":function(a,e,t){a.exports=t.p+"img/49.8383c61f.svg"},"265d":function(a,e,t){a.exports=t.p+"img/52.7b6bd29b.png"},"2c02":function(a,e,t){a.exports=t.p+"img/50.89e13e14.png"},"327c":function(a,e,t){a.exports=t.p+"img/48.14acc9f7.svg"},"4a16":function(a,e,t){a.exports=t.p+"img/51.4ca380e9.svg"},5029:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno"),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[a._m(0),a._m(1),a._m(2),a._m(3),t("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-right"}},[a._v("Se insertarán los siguientes datos:")]),a._m(4),t("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-right"}},[a._v("Los datos quedan así: ")]),a._m(5),t("Separador"),a._m(6),a._m(7),a._m(8),a._m(9),a._m(10),a._m(11),a._m(12),t("Separador"),a._m(13),t("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-right"}},[a._v("Esta variedad de combinación de tablas permite seleccionar algunas filas de una tabla aunque no exista correspondencia con las filas de la otra tabla con la que se combina. Este método facilita la inclusión de datos que no cumplen con la condición de coincidencia especificada en la cláusula JOIN. ")]),a._m(14),a._m(15)],1)],1)},r=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"titulo-principal color-acento-contenido"},[t("div",{staticClass:"titulo-principal__numero"},[t("span",[a._v("5")])]),t("h1",[a._v("Consulta multitablas – DML")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",{attrs:{"data-aos":"fade-right"}},[a._v("Para explicar este tipo de ejercicios, crearemos una base de datos de empleados llamada "),t("strong",[a._v("‘ehr’")]),a._v(". En esta base de datos, las tablas "),t("code",[a._v("‘empleados’")]),a._v(" y "),t("code",[a._v("‘áreas’")]),a._v(" están relacionadas de la siguiente manera: un empleado pertenece a un área y un área puede tener varios empleados, como se presenta en el siguiente diagrama: ")])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",{staticClass:"mb-5"},[a._v("Note que "),t("code",[a._v("area_id")]),a._v(" en la tabla empleados puede ser "),t("i",[a._v("nullable")]),a._v(": ")])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row justify-content-center mb-5"},[t("div",{staticClass:"col-lg-8",attrs:{"data-aos":"zoom-in"}},[t("div",{staticClass:"tarjeta-codigo p-2 mb-5"},[t("pre",{staticClass:"language-html mt-5",attrs:{language:"html"}},[t("code",[a._v("MariaDB [ehr]> CREATE TABLE IF NOT EXISTS areas ( "),t("br"),a._v("   -> id_area TINYINT NOT NULL, "),t("br"),a._v("   -> area VARCHAR(45) NULL, "),t("br"),a._v("   -> PRIMARY KEY (id_area)) "),t("br"),a._v("   -> ENGINE = InnoDB; "),t("br"),a._v("Query OK, 0 rows affected (0.019 sec) "),t("br"),t("br"),a._v("MariaDB [ehr]> CREATE TABLE IF NOT EXISTS empleados ( "),t("br"),a._v("   -> nombre_empleado VARCHAR(60) NOT NULL, "),t("br"),a._v("   -> area_id TINYINT NULL, "),t("br"),a._v("   -> PRIMARY KEY (nombre_empleado), "),t("br"),a._v("   -> INDEX fk_empleados_areas_idx (area_id ASC), "),t("br"),a._v("   -> CONSTRAINT fk_empleados_areas "),t("br"),a._v("   -> FOREIGN KEY (area_id) "),t("br"),a._v("   -> REFERENCES areas (id_area) "),t("br"),a._v("   -> ON DELETE NO ACTION "),t("br"),a._v("   -> ON UPDATE NO ACTION) "),t("br"),a._v("   -> ENGINE = InnoDB; "),t("br"),a._v("Query OK, 0 rows affected (0.023 sec)  ")])])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row justify-content-center mb-5"},[t("div",{staticClass:"col-lg-8",attrs:{"data-aos":"zoom-in"}},[t("div",{staticClass:"tarjeta-codigo p-2 mb-5"},[t("pre",{staticClass:"language-html mt-5",attrs:{language:"html"}},[t("code",[a._v("INSERT INTO areas (id_area,area)VALUES (’17’,‘Ventas’),(’19’,‘Producción’), (’20’,‘Ingeniería’) (’21’,‘Mercadeo’); "),t("br"),a._v("MariaDB [ehr]> INSERT INTO `areas` (`id_area`, `area`) VALUES  "),t("br"),a._v("   ->   (’17’, ‘Ventas’),  "),t("br"),a._v("   ->   (’19’, ‘Producción’),  "),t("br"),a._v("   ->   (20, ‘Ingeniería’),  "),t("br"),a._v("   ->   (21, ‘Mercadeo’); "),t("br"),a._v("Query OK, 4 rows affected, 2 warnings (0.015 sec) "),t("br"),a._v("Records: 4  Duplicates: 0  Warnings: 2 "),t("br"),a._v("MariaDB [ehr]> "),t("br"),t("br"),a._v("MariaDB [ehr]> INSERT INTO empleados (nombre_empleado, area_id) VALUES "),t("br"),a._v("   -> (‘Andrade’, ’17’), "),t("br"),a._v("   -> (‘Jordan’, ’20’), "),t("br"),a._v("   -> (‘Steinberg’, ’20’), "),t("br"),a._v("   -> (‘Robinson’, ’19’), "),t("br"),a._v("   -> (‘Zolano’, ’19’), "),t("br"),a._v("   -> (‘Gaspar’, NULL); "),t("br"),a._v("Query OK, 6 rows affected, 2 warnings (0.006 sec) "),t("br"),a._v("Records: 6  Duplicates: 0  Warnings: 2 ")])])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row justify-content-center mb-5"},[t("div",{staticClass:"col-lg-5 mb-lg-0 mb-3",attrs:{"data-aos":"fade-right"}},[t("div",{staticClass:"tarjeta d-inline-block p-4 mb-4",staticStyle:{"background-color":"#e3dfeb"}},[t("h4",{staticClass:"mb-0 me-5"},[a._v("Empleados ")])]),t("div",{staticClass:"tarjeta-codigo p-2 mb-5"},[t("pre",{staticClass:"language-html mt-5",attrs:{language:"html"}},[t("code",[a._v("MariaDB [ehr]> SELECT * FROM empleados; "),t("br"),a._v("+————————+————+ "),t("br"),a._v("| nombre_empleado | area_id | "),t("br"),a._v("+————————+————+ "),t("br"),a._v("| Gaspar          |    NULL | "),t("br"),a._v("| Andrade         |      17 | "),t("br"),a._v("| Robinson        |      19 | "),t("br"),a._v("| Zolano          |      19 | "),t("br"),a._v("| Jordan          |      20 | "),t("br"),a._v("| Steinberg       |      20 | "),t("br"),a._v("+————————+————+ "),t("br"),a._v("6 rows in set (0.000 sec) "),t("br"),a._v("MariaDB [ehr]> ")])])])]),t("div",{staticClass:"col-lg-5 mb-lg-0 mb-3",attrs:{"data-aos":"fade-right"}},[t("div",{staticClass:"tarjeta d-inline-block p-4 mb-4",staticStyle:{"background-color":"#e3dfeb"}},[t("h4",{staticClass:"mb-0 me-5"},[a._v("Áreas ")])]),t("div",{staticClass:"tarjeta-codigo p-2 mb-5"},[t("pre",{staticClass:"language-html mt-5",attrs:{language:"html"}},[t("code",[a._v("MariaDB [ehr]> SELECT * FROM areas; "),t("br"),a._v("+————+——————+ "),t("br"),a._v("| id_area | area       | "),t("br"),a._v("+————+——————+ "),t("br"),a._v("|      17 | Ventas     | "),t("br"),a._v("|      19 | Producción | "),t("br"),a._v("|      20 | Ingeniería | "),t("br"),a._v("|      21 | Mercadeo   | "),t("br"),a._v("+————+——————+ "),t("br"),a._v("4 rows in set (0.000 sec) "),t("br"),a._v("MariaDB [ehr]> ")])])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_5_1","data-aos":"fade-right"}},[t("h2",[a._v("5.1 Combinación interna (INNER JOIN)")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row justify-content-center mb-5"},[t("div",{staticClass:"col-lg-12 mb-lg-0 mb-3",attrs:{"data-aos":"fade-right"}},[t("div",{staticClass:"p-4",staticStyle:{"background-color":"#f3f9ff"}},[t("p",{staticClass:"mb-0"},[a._v("En esta operación, cada fila de la tabla "),t("code",[a._v("'empleados'")]),a._v(" se combina (o une) con las filas correspondientes de la tabla "),t("code",[a._v("'areas'")]),a._v(" que cumplen con la condición especificada en el predicado del JOIN. Cualquier fila en la tabla "),t("code",[a._v("'empleados'")]),a._v(" o en la tabla "),t("code",[a._v("'áreas'")]),a._v(" que no tenga una correspondiente en la otra tabla será excluida; solo aquellas con correspondencias aparecerán en el resultado. Este es el tipo de "),t("code",[a._v("JOIN")]),a._v(" más utilizado y es considerado la combinación predeterminada. ")])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row justify-content-center mb-3"},[t("div",{staticClass:"col-lg-8",attrs:{"data-aos":"fade-left"}},[t("div",{staticClass:"tarjeta-codigo p-2 mb-5"},[t("pre",{staticClass:"language-html mt-5",attrs:{language:"html"}},[t("code",[a._v("SELECT *  "),t("br"),a._v("FROM empleados AS e "),t("br"),a._v("INNER JOIN areas as a ON a.id_area = e.area_id ")])])])])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-8",attrs:{"data-aos":"zoom-in"}},[s("div",{staticClass:"titulo-sexto color-acento-contenido",attrs:{"data-aos":"fade-right"}},[s("h5",[a._v("Figura 6. ")]),s("span",[a._v("Uso de JOIN")])]),s("img",{attrs:{src:t("d8e2"),alt:"La imagen presenta la aplicación del JOIN mas utilizado."}})])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-8",attrs:{"data-aos":"zoom-in"}},[s("div",{staticClass:"tarjeta p-4",staticStyle:{"background-color":"#e8eefe"}},[s("div",{staticClass:"row justify-content-center align-items-center mb-5"},[s("div",{staticClass:"col-lg-7 mb-lg-0 mb-3"},[s("p",{staticClass:"mb-0"},[a._v("La condición de la relación, especificada como "),s("code",[a._v("𝑎.𝑖𝑑_𝑎𝑟𝑒𝑎=𝑒.𝑎𝑟𝑒𝑎_𝑖𝑑a")]),a._v(", requiere que el valor esté presente en ambas tablas. Si un empleado tiene un valor "),s("code",[a._v("NULL")]),a._v(" en "),s("code",[a._v("'area_id'")]),a._v(", no se incluirá en los resultados, ya que no puede cumplir con esta condición. Esto se ilustra mediante un Diagrama de Venn, donde solo la intersección (conjunción) representa los registros que coinciden en ambas tablas. ")])]),s("div",{staticClass:"col-lg-5 col-7"},[s("img",{attrs:{src:t("7706"),alt:"La imagen presenta una diagramación de Empleados y areas."}})])])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-right"}},[a._v("Existen otros tipos de consultas como "),t("code",[a._v("FULL JOIN, FULL OUTER JOIN y CROSS JOIN")]),a._v(" que no se tratarán en detalle debido a su uso menos frecuente. Sin embargo, con una comprensión básica del concepto principal, es posible acceder a la documentación en línea para explorar cómo funcionan estos JOINs. "),t("br"),t("br"),a._v("La siguiente imagen incluye Diagramas de Venn que representan diferentes tipos de relaciones. Estos diagramas son herramientas útiles para visualizar los resultados que cada tipo de sentencia JOIN puede retornar, ayudando así a comprender los resultados esperados con cada variante.")])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-8",attrs:{"data-aos":"zoom-in"}},[s("div",{staticClass:"titulo-sexto color-acento-contenido",attrs:{"data-aos":"fade-right"}},[s("h5",[a._v("Figura 7. ")]),s("span",[a._v("Representación Diagrama de Venn ")])]),s("img",{attrs:{src:t("327c"),alt:"La imagen  representa otros tipos de relaciones, Diagramas de Venn que permiten visualizar resultados retornados"}})])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_5_2","data-aos":"fade-right"}},[t("h2",[a._v("5.2 Combinación externa ")])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"f-2-2 p-5 mn mb-5"},[s("div",{staticClass:"titulo-tres mb-4"},[s("h3",{staticClass:"mb-0"},[a._v("LEFT JOIN ")])]),s("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-right"}},[a._v("La sintaxis es muy similar a la anterior.")]),s("div",{staticClass:"row justify-content-center mb-0"},[s("div",{staticClass:"col-lg-8 mb-lg-0 mb-3",attrs:{"data-aos":"fade-right"}},[s("div",{staticClass:"tarjeta-codigo p-2 mb-5"},[s("pre",{staticClass:"language-html mt-5",attrs:{language:"html"}},[s("code",[a._v("SELECT *  "),s("br"),a._v("FROM empleados AS e "),s("br"),a._v("LEFT JOIN areas as a ON a.id_area = e.area_id ")])])])])]),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-4 mb-lg-0 mb-3"},[s("img",{attrs:{src:t("0299"),alt:"La imagen representa dónde se encuentran los empleados y las areas."}})]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"p-4 tarjeta",staticStyle:{"background-color":"#ffefaf"}},[s("p",{staticClass:"mb-0"},[a._v("El resultado de este tipo de consulta incluye todos los registros de la tabla de la izquierda (la primera tabla definida en la cláusula "),s("code",[a._v("FROM")]),a._v(" de la consulta), independientemente de si existe un registro correspondiente en la tabla de la derecha (la definida en el "),s("code",[a._v("JOIN")]),a._v("). ")])])])]),s("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-right"}},[a._v("La sentencia "),s("code",[a._v("LEFT JOIN")]),a._v(" empareja todos los valores de la tabla izquierda ("),s("code",[a._v("empleados")]),a._v(") con los valores correspondientes de la tabla derecha ("),s("code",[a._v("areas")]),a._v("), si existen. Si no hay correspondencia, retorna un valor nulo ("),s("code",[a._v("NULL")]),a._v(") en los campos de la tabla derecha. "),s("br"),s("br"),a._v("A diferencia de lo que ocurre con un "),s("code",[a._v("INNER JOIN")]),a._v(", donde no se muestra un empleado cuya área no existe, el "),s("code",[a._v("LEFT JOIN")]),a._v(" incluirá estos empleados. En el diagrama asociado, el empleado sin área asignada aparece en la región amarilla, mientras que los empleados con área asignada se muestran en la franja naranja, en la intersección de las tablas de empleados y áreas. ")]),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-8",attrs:{"data-aos":"zoom-in"}},[s("div",{staticClass:"titulo-sexto color-acento-contenido",attrs:{"data-aos":"fade-right"}},[s("h5",[a._v("Figura 8. ")]),s("span",[a._v("Ejemplo LEFT JOIN")])]),s("img",{attrs:{src:t("2c02"),alt:"La imagen presenta la aplicación de empleados y areas."}})])])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"f-2-2 p-5 mn mb-5"},[s("div",{staticClass:"titulo-tres mb-4"},[s("h3",{staticClass:"mb-0"},[a._v("RIGTH JOIN ")])]),s("p",{attrs:{"data-aos":"fade-right"}},[a._v("La sentencia "),s("code",[a._v("RIGHT JOIN")]),a._v(" devuelve todos los valores de la tabla derecha ("),s("code",[a._v("areas")]),a._v("), emparejados con los valores correspondientes de la tabla izquierda ("),s("code",[a._v("empleados")]),a._v("), si existen. Si no hay correspondencia, se retorna un valor nulo ("),s("code",[a._v("NULL")]),a._v(") para los campos de la tabla izquierda. ")]),s("p",{staticClass:"mb-5"},[a._v("Esta operación garantiza que todos los registros de la tabla derecha estén presentes en el resultado, mientras que los registros de la tabla izquierda que no tengan correspondencia se representarán con valores nulos.")]),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-8 mb-lg-0 mb-3",attrs:{"data-aos":"fade-right"}},[s("div",{staticClass:"tarjeta-codigo p-2 mb-5"},[s("pre",{staticClass:"language-html mt-5",attrs:{language:"html"}},[s("code",[a._v("SELECT *  "),s("br"),a._v("FROM empleados AS e "),s("br"),a._v("RIGHT JOIN areas as a ON a.id_area = e.area_id ")])])])])]),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-4 mb-lg-0 mb-3"},[s("img",{attrs:{src:t("4a16"),alt:"La imagen presenta un diagrama que representa las áreas que tienen y no empleados."}})]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"p-4 tarjeta",staticStyle:{"background-color":"#ffefaf"}},[s("p",{staticClass:"mb-0"},[a._v("En el diagrama, las áreas que no tienen empleados se encuentran en el área verde, mientras que las áreas con empleados están en el área anaranjada, que representa la intersección de las tablas de empleados y áreas.")])])])]),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-8",attrs:{"data-aos":"zoom-in"}},[s("div",{staticClass:"titulo-sexto color-acento-contenido",attrs:{"data-aos":"fade-right"}},[s("h5",[a._v("Figura 9.")]),s("span",[a._v("Ejemplo RIGTH JOIN")])]),s("img",{attrs:{src:t("265d"),alt:"La imagen presenta la aplicación de áreas y empleados."}})])])])}],i=(t("c197"),t("cefb"),{name:"Tema5",data:function(){return{}},mounted:function(){var a=this;this.$nextTick((function(){a.$aosRefresh()}))},updated:function(){this.$aosRefresh()}}),n=i,o=(t("9357"),t("2877")),l=Object(o["a"])(n,s,r,!1,null,null,null);e["default"]=l.exports},7706:function(a,e,t){a.exports=t.p+"img/47.a21854b2.png"},9357:function(a,e,t){"use strict";t("d689")},cefb:function(a,e,t){},d689:function(a,e,t){},d8e2:function(a,e,t){a.exports=t.p+"img/46.ea30c9e3.png"}}]);
//# sourceMappingURL=tema5.4a184a7a.js.map