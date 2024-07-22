export default {
  global: {
    componenteFormativo: 'Historia, microfinanzas y microcréditos',
    descripcionCurso:
      '​​​En este contenido va a encontrar una serie de actividades relacionadas con el mundo microfinanciero, su sistema, normatividad y principales conceptos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
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
        titulo: 'Microfinanzas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Contexto regional ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'El sistema financiero colombiano ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Historia y su relevancia ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Microempresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos y características',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Marco legal',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Microcrédito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de microcrédito',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Requisitos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Comisión',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Tasa y cuota',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Ventajas y desventajas del microcrédito',
            hash: 't_3_6',
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
      tema: 'Microfinanzas ',
      referencia:
        'Castro, M. (2010). El papel de la mujer en los microcréditos de los países en vías de desarrollo. El caso de Mohammad Yunus (Bangladesh). <em>Nómadas. Revista Crítica de Ciencias Sociales y Jurídicas</em> 27(3).',
      tipo: 'PDF',
      link: 'https://www.redalyc.org/pdf/181/18113757005.pdf',
    },
    {
      tema: 'Microfinanzas ',
      referencia:
        'Riquelme, et al. (2010). <em>Experiencias internacionales sobre microfinanzas: manual del microcrédito</em>.',
      tipo: 'Libro',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/17272/experiencias-internacionales-sobre-microfinanzas---manual-del-microcredito',
    },
    {
      tema: 'Microempresa',
      referencia:
        'Soler, C. y Reig, E. (2011). <em>Pequeñas empresas, grandes ideas Las claves para la gestión de la empresa familiar</em>.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4567',
    },
  ],
  glosario: [
    {
      termino: 'Adopem',
      significado:
        'entidad financiera dominicana encargada de la certificación de mujeres principalmente.',
    },
    {
      termino: 'Microempresa',
      significado:
        'la microempresa es una actividad económica de tamaño pequeño determinado por las leyes de cada país. El tamaño se define por la cantidad de empleados y / o determinado por el volumen de ventas. ',
    },
    {
      termino: 'Microempresario',
      significado:
        'ser empresario es emprender por cuenta propia. Esto implica tomar decisiones, enfrentar riesgos y obtener beneficios de una actividad de la cual se es el principal responsable. A los empresarios de pequeñas empresas se les conoce como microempresarios. ',
    },
    {
      termino: 'Microfinanzas',
      significado:
        'las microfinanzas son préstamos que se dirigen a personas o a grupos con pocos medios económicos y que normalmente están excluidos del sistema financiero tradicional, y también define los negocios que crecieron alrededor de estas actividades.',
    },
    {
      termino: 'Sistema financiero',
      significado:
        'es el conjunto de entidades, organizaciones, mercados y medios que garantizan la seguridad y el movimiento del dinero del país y sus habitantes. ',
    },
  ],
  referencias: [
    {
      referencia:
        'BBC News. (2018). <em>Muhammad Yunus: por qué es tan polémica la propuesta del ganador del Nobel de crear bancos para ricos y para pobres.</em>',
      link: 'https://www.bbc.com/mundo/noticias-46021869',
    },
    {
      referencia:
        'Educar. (2019). <em>¿Cómo obtener microcréditos en Colombia?</em>',
      link: '',
    },
    {
      referencia: 'El País. (2006). <em>El banquero de los pobres.</em>',
      link: 'https://elpais.com/diario/2006/10/15/eps/1160893609_850215.html ',
    },
    {
      referencia:
        'Gutiérrez, A. (2015). El Banco Grameen como impulsor del microcrédito. Rasgos destacados y cuestionamientos a este tipo de iniciativas. <em>En-Contexto Revista de Investigación en Administración, Contabilidad, Economía y Sociedad</em>, 3, pp. 105-119.',
      link: 'https://www.redalyc.org/pdf/5518/551856272006.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2015). Por el cual se reglamenta el otorgamiento del microcrédito y acceder a las tarifas señaladas en el artículo 39 de la Ley 590 de 2000.',
      link: '',
    },
    {
      referencia:
        'Noticias ONU. (2018). <em>Cuatro lavadoras y una máquina de coser para salir adelante</em>.',
      link: 'https://news.un.org/es/story/2018/12/1448731 ',
    },
    {
      referencia:
        'Sáenz de Cabezón, E. (2018). <em>Las matemáticas nos hacen más libres y menos manipulables</em> (video). YouTube.',
      link: 'https://www.youtube.com/watch?v=BbA5dpS4CcI ',
    },
    {
      referencia:
        'Vázquez, P. (2018). <em>MICROCRÉDITOS. El costo de contratarlos</em> (Reportaje).',
      link:
        'http://docplayer.es/92818175-Micr-el-costo-de-contratarlos-reportaje.html ',
    },
    {
      referencia:
        'Yunus, M. (1998). <em>Hacia un mundo sin pobreza</em>. Editorial Andrés Bello. ',
      link: '',
    },
    {
      referencia:
        'Yunus, M. (2008). <em>Un mundo sin pobreza: las empresas sociales y el futuro del capitalismo</em>. Editorial Paidós. ',
      link: '',
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
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Vilma Andrea Baracaldo Neira',
          cargo: 'Experta temática',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez ',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles ',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
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
