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
            titulo: 'SQL – Standard Query Language',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'SQL para la creación y eliminación de bases de datos – DDL',
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
        titulo: 'SQL para la creación y eliminación de bases de datos – DDL ',
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
        titulo: 'SQL para consulta de datos – DML',
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
        titulo: 'Consulta multitablas – DML',
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
        download: 'downloads/prueba.pdf',
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
      tema: 'HTML 5',
      referencia:
        'HTMLed.it. (2021). Editor HTML gratuito en línea, limpiador y convertidor.',
      tipo: 'Página web',
      link: 'https://htmled.it/or/',
    },
    {
      tema: 'JavaScript',
      referencia: 'Cubic Factory. (2021). Ejecutar JavaScript.',
      tipo: 'Página web',
      link: 'https://www.cubicfactory.com/jseditor/',
    },
  ],
  glosario: [
    {
      termino: 'CMS',
      significado: 'Sistema de gestión de contenidos.',
    },
    {
      termino: 'CSS3',
      significado: 'Hojas de estilo en cascada, versión 3.',
    },
    {
      termino: 'ES6',
      significado: 'Abreviación de ECMAScript, versión 6.',
    },
    {
      termino: '<em>Frontend</em>',
      significado: 'Capa de presentación de una aplicación web.',
    },
    {
      termino: '<em>Get</em>',
      significado: 'Método de envío de datos por URL web.',
    },
    {
      termino: 'JavaScript',
      significado: 'Lenguaje de programación.',
    },
    {
      termino: 'LAN',
      significado: 'Red de área local.',
    },
    {
      termino: '<em>Landing Page</em>',
      significado:
        'Página web de aterrizaje, diseñada específicamente para una campaña de marketing o publicidad.',
    },
    {
      termino: 'LESS',
      significado:
        'Hoja de estilo dinámica, extensión que amplía las capacidades de CSS.',
    },
    {
      termino: 'MAN',
      significado: 'Red de área metropolitana.',
    },
    {
      termino: 'NODE.js',
      significado:
        'Entorno de ejecución para JavaScript del lado del servidor.',
    },
    {
      termino: '<em>Plugin</em>',
      significado:
        'Aplicación que extiende las funcionalidades de un programa principal.',
    },
    {
      termino: 'Post',
      significado: 'Método de envío de datos por formulario web.',
    },
    {
      termino: 'SEO',
      significado:
        'Optimización para motores de búsqueda, estrategias para mejorar la visibilidad de un sitio web.',
    },
    {
      termino: 'WAN',
      significado: 'Red de área extensa o mundial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acibeiro. M. (2021). Qué es un gestor de contenidos y cuál es el mejor para crear una web.',
      link: 'https://www.lucushost.com/blog/gestor-de-contenidos/',
    },
    {
      referencia: 'Beati, H. (2016). HTML5 y CSS3.',
    },
    {
      referencia: 'Cuervo, P. V. (2019). 10 características de un CMS.',
      link: 'https://www.arquitectoit.com/cms/10-caracteristicas-cms/',
    },
    {
      referencia:
        'Gutierrez, R. (2018). Understanding the role of digital commons in the web; The making of HTML5.',
    },
    {
      referencia:
        'Hverbeke, M. (2018). Eloquent JavaScript: A Modern Introduction to Programming.',
    },
    {
      referencia:
        'Lenguaje JS. (2021). ¿Qué son los bucles? Bucles, iteraciones y repetición de código.',
      link: 'https://lenguajejs.com/javascript/introduccion/bucles/',
    },
    {
      referencia:
        'Mooc, Aprendizaje Online.(2015). Clasificación de los sistemas de gestión de contenidos.',
      link:
        'https://mooccontenidosweb.wordpress.com/2015/05/01/clasificacion-de-los-sistemas-de-gestion-de-contenidos/',
    },
    {
      referencia:
        'Mora, S. L. (2021). HTML5 y CSS3: <6> HTML5 – Formularios</6>.',
      link:
        'http://desarrolloweb.dlsi.ua.es/cursos/2011/html5-css3-es/html5-formularios',
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
          nombre: 'Carlos Hernán Muñoz Carvajal',
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
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Producción audiovisual',
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
          nombre: 'Jaime Hernán Tejada Llano',
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
