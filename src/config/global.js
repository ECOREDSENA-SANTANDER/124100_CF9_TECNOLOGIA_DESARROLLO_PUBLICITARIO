export default {
  global: {
    componenteFormativo: 'Redacción de textos publicitarios',
    descripcionCurso:
      'Los textos publicitarios han sido, son y seguirán siendo un elemento fundamental en la publicidad, puesto que no se puede hacer un anuncio audiovisual sin que antes haya sido escrito. De la misma forma, los eslóganes y titulares de los anuncios gráficos representan una parte primordial del mensaje y requieren conocimiento, creatividad y análisis para lograr resultados atractivos y persuasivos. El rol del redactor junto con el diseñador gráfico son la base para la construcción del mensaje publicitario, el concepto y en muchas ocasiones la estrategia creativa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo:
          'Elementos a tener en cuenta antes de la redacción de textos publicitarios',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Encabezados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',

        numero: '3',
        titulo: 'Tipos de titulares',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',

        numero: '4',
        titulo: 'Subtítulos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',

        numero: '5',
        titulo: 'Cuerpo de texto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Técnicas para el desarrollo de cuerpos de texto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Herramientas para la redacción del <i>body copy</i>',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',

        numero: '6',
        titulo: 'Relación entre texto e imagen',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',

        numero: '7',
        titulo: 'El eslogan',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',

        numero: '8',
        titulo: 'Redacción para medios audiovisuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Formatos de comunicación audiovisual',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo:
              'Datos a tener en cuenta para el desarrollo de textos en formatos audiovisuales',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',

        numero: '9',
        titulo: 'Uso de las figuras retóricas en el mensaje publicitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Principales figuras retóricas utilizadas en la publicidad',
            hash: 't_9_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Afiche',
      significado:
        'galicismo por cartel. La palabra afiche proviene, en su etimología, del latín affictum que se refiere a algo pegado o adherido. De allí  pasó al francés affiche con el mismo significado. ',
    },
    {
      termino: 'Animación',
      significado:
        'proceso de secuenciación de imágenes fijas en rápida sucesión para dar el efecto de movimiento en directo.',
    },
    {
      termino: 'Boceto',
      significado:
        'también llamado esbozo o borrador, es un dibujo hecho a mano alzada, utilizando lápiz, papel y goma de borrar, elaborado de forma esquemática y sin preocuparse de los detalles o terminaciones para representar ideas, lugares, personas u objetos.',
    },
    {
      termino: '<i>Call To Action</i>',
      significado:
        'por sus siglas en inglés se refiere a “llamada a la acción” y es un término que se utiliza en la publicidad y hace referencia a una acción que genera una respuesta inmediata.',
    },
    {
      termino: 'Corrector',
      significado:
        'persona encargada de revisar, y en su caso corregir, los textos. Se puede diferenciar entre el corrector de textos o corrector de pruebas y el corrector de estilo. El primero se encarga de corregir los posibles errores tipográficos, faltas de ortografía o errores en la transcripción de un texto. El corrector de estilo, además de lo anterior, también corrige fallos referidos al estilo, tales como determinadas faltas de concordancia, barbarismos, reiteraciones, etc. ',
    },
    {
      termino: 'Cuerpo de texto',
      significado:
        'también llamado bloque de texto o galera, es el texto principal de cualquier documento; el cuerpo del documento. También se refiere a cualquier texto utilizado para simular cuerpo de texto, por ejemplo, en la preparación de maquetas de presentación. Con frecuencia se utilizan con este objeto textos en latín o griego (Cotton, 1994). ',
    },
    {
      termino: 'Encabezado',
      significado: 'título, cabeza o parte superior de una información.',
    },
    {
      termino: 'Eslogan',
      significado:
        '<i>(slogan)</i>. Término de origen inglés utilizado para recordar una marca o un producto, por medio de una frase de fácil memorización, en los mensajes publicitarios. ',
    },
    {
      termino: 'Guión',
      significado:
        'plan a escala reducida de un libro o una secuencia cinematográfica, utilizado para anticipar y planificar un diseño con muchas etapas. ',
    },
    {
      termino: 'Mensaje',
      significado:
        'serie organizada de signos según un código, con la intención de comunicar. En la teoría de la comunicación, un mensaje es una serie de información seleccionada y codificada por un emisor, transmitida por un soporte y difundida a través de un canal, destinado a un receptor capaz de decodificarla y reaccionar. ',
    },
    {
      termino: 'Pie',
      significado:
        'texto explicativo que acompaña a una imagen, tabla, fórmula, etc., generalmente en su parte inferior. Parte inferior de un impreso o libro.',
    },
    {
      termino: 'Publicidad',
      significado:
        'proceso y acción de comunicación que se difunde a través de los medios de comunicación colectiva, siendo el término genérico de anuncio su contenido específico. La publicidad pretende dar a conocer un producto, una idea, un servicio, una imagen, sobre el público consumidor, para influir en su compra y aceptación. ',
    },
    {
      termino: 'Semántica',
      significado:
        'Ciencia que estudia los significados de las palabras en su desarrollo y cambios dentro de una sociedad determinada.  Estudio del significado de los signos lingüísticos y sus combinaciones, desde un punto de vista sincrónico o diacrónico.',
    },
    {
      termino: 'Semiótica',
      significado:
        'Del griego semeion, que significa señal, y logos, que significa tratado o teoría, la semiología o semiótica es la ciencia que estudia la vida social de los signos.',
    },
    {
      termino: 'Texto',
      significado:
        'escrito publicitario que se utiliza para imprimir en el propio anuncio gráfico o para locución de un anuncio televisivo o una cuña radiofónica. En publicidad se distingue mucho entre titulares y textos, ya que van próximos pero no son lo mismo.',
    },
    {
      termino: 'Titular',
      significado:
        'Texto principal que encabeza una pieza publicitaria y que normalmente transmite una parte clave del mensaje. Texto que encabeza una información de prensa.',
    },
  ],
  referencias: [
    {
      referencia: 'Arens, W. (2002). Publicidad. Mc Graw Hill.',
    },
    {
      referencia:
        'Coll, P. y Micó, J. L. (2018). Marketing y comunicación en la nueva economía. Editorial UOC.',
    },
    {
      referencia:
        'Davara, A. M. (1992). Estrategias de comunicación en marketing. Edit. Dossat S.A.',
    },
    {
      referencia:
        'Estrella, A. M. y Segovia, C. (2016). Comunicación integrada de marketing. ESIC Editorial.',
    },
    {
      referencia:
        'Moline, M. (2002). La fuerza de la publicidad. Mc Graw Hill. ',
    },
    {
      referencia:
        'Polanco, J. A. (2005). Guía de bolsillo para copywriters. Poliantea.',
    },
    {
      referencia: 'Reimers Design. (s.f.). Pequeño diccionario del diseñador.',
      link: 'https://cutt.ly/VyDzeWh',
    },
    {
      referencia: 'Retoricas.com (2009). Las figuras retóricas',
      link: 'https://www.retoricas.com/ ',
    },
    {
      referencia: 'San Martín, M. (s.f.). Figuras literarias. ',
      link:
        'https://sites.google.com/site/ayenhuelugardivertido/figuras-literarias',
    },
    {
      referencia: 'Vila, F. (2013). Comunicación estratégica. Editorial UOC.',
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
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Metodológico y Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Manuel Augusto Arias López',
          cargo: 'Instructor - Experto Temático',
          centro: 'Regional Quindío - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria y la Comunicación Gráfica ',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Correctora de Estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria y la Comunicación Gráfica',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de Estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria y la Comunicación Gráfica',
        },
        {
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora Web',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>Full-Stack</i>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette González Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para Contenidos Inclusivos y Accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
