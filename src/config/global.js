export default {
  global: {
    componenteFormativo:
      'Implementación y manipulación de bases de datos relacionales ',
    descripcionCurso:
      'Una vez diseñadas, modeladas e implementadas las bases de datos, es preciso darles el uso adecuado según el lenguaje estándar y las herramientas necesarias en el proceso de desarrollo. Este componente centra sus esfuerzos en presentar las técnicas para la manipulación de una base de datos. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Interfaz de línea de comandos de MySQL ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Aplicación cliente de MySQL',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Prueba de consultas básicas ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'SQL - Standard Query Language',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'SQL para la creación y eliminación de bases de datos - DDL',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Claves foráneas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Mostrar y eliminar tablas y bases de datos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de datos en bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: ' Inserción de registros ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Edición de registros',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Borrado de registros',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'SQL para consulta de datos - DML',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Funciones en MySQL',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Operadores',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Ordenar resultados',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Listar y limitar resultados',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Agrupar filas',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Consulta multitablas - DML',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Combinación interna (INNER JOIN)',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Combinación externa',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228118_CF14_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Funciones en MySQL',
      referencia:
        'Shakmuria. (2023, abril 5). Introducción al SQL: Comandos básicos y ejemplos prácticos [Archivo de video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SNjTk5GjbTw&ab_channel=Shakmuria',
    },
    {
      tema: 'Consulta multitablas – DML',
      referencia:
        'Códigos de Programación - MR. (2023, abril 10). Aprende SQL en 20 minutos [Archivo de video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=E9m_ii37pNY&ab_channel=C%C3%B3digosdeProgramaci%C3%B3n-MR',
    },
    {
      tema: 'Combinación interna (INNER JOIN)',
      referencia:
        'TodoCode. (2023, marzo 15). Tutorial Completo de SQL para Principiantes [Archivo de video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0BstRqp6Svg&ab_channel=TodoCode',
    },
    {
      tema: 'MySQL',
      referencia:
        'MySQL 8.0 Reference Manual. (2021). 3.3.2 #[em Creating a Table]. MySQL.',
      tipo: 'Página web',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/creating-tables.html',
    },
    {
      tema: 'MySQL',
      referencia: 'MySQLTutorial. (2020). MySQL #[em AND Operator.] MySQL.',
      tipo: 'Página web',
      link: 'https://www.mysqltutorial.org/mysql-and',
    },
    {
      tema: 'MySQL',
      referencia: 'MySQLTutorial. (2020). MySQL OR Operator. MySQL.',
      tipo: 'Página web',
      link: 'https://www.mysqltutorial.org/mysql-or',
    },
  ],
  glosario: [
    {
      termino: 'SQL',
      significado:
        'Lenguaje de Consulta Estructurada (<em>Structured Query Language</em>]), utilizado para gestionar y manipular bases de datos relacionales.',
    },
    {
      termino: 'SGBD',
      significado:
        'Sistema de Gestión de Bases de Datos. <em>Software</em> que permite la creación, modificación y administración de una base de datos.',
    },
    {
      termino: 'DDL',
      significado:
        'Lenguaje de Definición de Datos (<em>Data Definition Language</em>). Subconjunto de comandos en SQL usados para definir la estructura de la base de datos. Incluye comandos como <em>CREATE y DROP.</em>',
    },
    {
      termino: 'DML',
      significado:
        'Lenguaje de Manipulación de Datos (<em>Data Manipulation Language</em>). Subconjunto de comandos en SQL usados para el manejo de datos, incluyendo <em>SELECT, INSERT, UPDATE y DELETE.</em>',
    },
    {
      termino: 'Clave primaria',
      significado:
        'Atributo o conjunto de atributos que identifica de manera única cada fila en una tabla.',
    },
    {
      termino: 'Índice',
      significado:
        'Estructura de datos que mejora la velocidad de las operaciones de la base de datos.',
    },
    {
      termino: 'JOIN',
      significado:
        'Operación en SQL que permite combinar filas de dos o más tablas basadas en una relación común entre ellas.',
    },
    {
      termino: '<em>FOREIGN KEY</em>',
      significado:
        'Clave foránea, un campo en una tabla que es clave primaria en otra, utilizada para establecer y hacer cumplir un vínculo entre los datos en dos tablas.',
    },
    {
      termino: 'Normalización',
      significado:
        'proceso de organización de campos y tablas de una base de datos para minimizar la redundancia y la dependencia.',
    },
    {
      termino: 'CRUD',
      significado:
        'Acrónimo de Crear, Leer, Actualizar y Eliminar (<em>Create, Read, Update, Delete</em>). Representa las operaciones básicas en una base de datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asale y Rae. (2021). Base. Diccionario de la lengua española.',
      link: 'https://dle.rae.es/base#CiiosqO',
    },
    {
      referencia:
        'Henry.Sudarshan S., S. A. (2002). Fundamentos de bases de datos (5.a ed.). McGraw-Hill Interamericana de España S.L.',
    },
    {
      referencia:
        'Kyocera. (2021). Conceptos sobre base de datos orientada a objetos. KYOCERA Document Solutions España.',
      link:
        'https://www.kyoceradocumentsolutions.es/es/smarter-workspaces/business-challenges/paperless/conceptos-sobre-base-de-datos-orientada-a-objetos.html',
    },
    {
      referencia:
        'López, J. (2009). Algoritmos y programación (guía para docentes).',
      link: 'http://www.eduteka.org/GuiaAlgoritmos.php',
    },
    {
      referencia:
        'Microsoft. (2021). Descripción de los conceptos básicos de normalización de la base de datos.',
      link:
        'https://docs.microsoft.com/es-es/office/troubleshoot/access/database-normalization-description',
    },
    {
      referencia:
        'MySQL 8.0 Reference Manual. (2021).13.1.20.5 FOREIGN KEY Constraints. MySQL.',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/creating-tables.html',
    },
    {
      referencia: 'MySQLTutorial. (2020). MySQL AND Operator. MySQL.',
      link: 'https://www.mysqltutorial.org/mysql-and',
    },
    {
      referencia: 'MySQLTutorial. (2020). MySQL OR Operator. MySQL.',
      link: 'https://www.mysqltutorial.org/mysql-or',
    },
    {
      referencia:
        'Navarro, J., y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000023241',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Eduardo Bastidas Paruma',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Peter Emerson Pinchao Solis',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
