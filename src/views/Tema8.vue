<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 8
      h1 Redacción para medios audiovisuales

    .row.mb-5

      .col-12.col-lg-auto.align-self-center.m-lg-5
        figure.imgc
          img(src='@/assets/tema8/imgt8-1.svg', alt='Redacción para medios audiovisuales')

      .col-lg.align-self-center
        p Hace unos pocos años la televisión era el medio por excelencia para lograr el posicionamiento efectivo de una marca, pero hoy los medios digitales la han desplazado de tal manera que se le ha relegado a presupuestos muy bajos en las empresas que están llegando a su mercado objetivo a través de espacios digitales en donde está hoy el interés del grueso de los consumidores. Sin embargo, el formato sigue siendo el mismo en muchos casos, nada mejor que el audiovisual para llegar con el mensaje de manera más efectiva y contundente al target de un producto o servicio.
        br
       

        br
       
        .cajon.color-primario.p-4.mb-4.fond2.row
          .col-lg.align-self-center
            p El audiovisual tiene la capacidad de crear un estado de ánimo o de demostrar cómo se usa un producto o servicio. Cuando se redacta para un audiovisual se deben tener presente algunos aspectos importantes del mensaje: primero, el carácter de audiovisual implica que además de palabras hay otros elementos importantes que logran transmitir sensaciones y emociones que apoyan al texto; por ejemplo, los efectos visuales, especiales y de sonido. 
            
    .row.mb-5
      .col-lg.align-self-center
        p En segundo lugar, los tiempos, si bien las redes sociales permiten extenderse en cuanto a la duración de los videos, son los mismos espectadores los que le ponen límite a ello; un audiovisual promocional de más de un minuto impide la concentración de quien lo ve y obliga a ser cortado en cualquier momento, el reto está en crear un mensaje claro, contundente y enganchador en pocos segundos.
        br
        br
       
        .cajon2.cajon.color-primario.p-4.mb-4.fond1.row
          .col-lg.align-self-center
            p Es importante recordar que, en los nuevos medios, el espectador tiene el control, pues él ya no está sometido a un horario de transmisión y a los espacios comerciales que se acuerdan por hora. En las redes sociales y plataformas digitales es el espectador quien decide qué ve, a qué hora lo hace y en qué dispositivo; adicionalmente, decide si recibe o no la publicidad.
            
      .col-auto.align-self-center
        figure.imgc
          img(src='@/assets/tema8/imgt8-2.svg', alt='Redacción para medios audiovisuales')

    #t_8_1.titulo-segundo
        h2 8.1 Formatos de comunicación audiovisual  

    SlyderC.mb-5(:datos="datosSlyder")

    br
    #t_8_2.titulo-segundo.mt-4
        h2 8.2  Datos a tener en cuenta para el desarrollo de textos en formatos audiovisuales
    .crd_02.p-0.my-4
      .crd_02__icon.m-3
        img(src='@/assets/tema8/imgt8-12.svg' alt='AvatarTop' ).class 
      .crd_02__txt.m-4
        .h4 Aprovechar la imagen al máximo
        p Cuando se crea un anuncio audiovisual se debe tener en cuenta que la imagen sea compatible con el texto y viceversa y son un conjunto en el desarrollo del mensaje, esa es la gran fortaleza de este formato. 
    
    .crd_02.p-0.my-4
      .crd_02__icon.m-3
        img(src='@/assets/tema8/imgt8-13.svg' alt='AvatarTop' ).class 
      .crd_02__txt.m-4
        .h4 Apoyar la imagen
        p El texto no debe ser el narrador de lo que se está viendo en video, debe ser un apoyo que refuerce la imagen y fortalezca el mensaje, esto permite el máximo aprovechamiento del formato.
    
    .crd_02.p-0.my-4
      .crd_02__icon.m-3
        img(src='@/assets/tema8/imgt8-14.svg' alt='AvatarTop' ).class 
      .crd_02__txt.m-4
        .h4 Coordinar audio y video
        p Ambos deben contar la misma historia. La selección de la música de fondo, los efectos de sonido, los diálogos y las voces en off deben estar completamente relacionados con el video.
    
    .crd_02.p-0.my-4
      .crd_02__icon.m-3
        img(src='@/assets/tema8/imgt8-15.svg' alt='AvatarTop' ).class 
      .crd_02__txt.m-4
        .h4 Vender al mismo tiempo que divierte
        p Es importante que un audiovisual divierta para generar enganche y recordación. Este es un elemento fundamental en el proceso de realización de una pieza con formato audiovisual; sin embargo, no se puede olvidar que se está realizando un proceso de venta y que es parte importante del proceso.                        
    
    .crd_02.p-0.my-4
      .crd_02__icon.m-3
        img(src='@/assets/tema8/imgt8-16.svg' alt='AvatarTop' ).class 
      .crd_02__txt.m-4
        .h4 Ser sencillo en la redacción
        p Los textos largos y muy cargados de información tienden a generar rechazo en el espectador, por ello hay que utilizar la menor cantidad de palabras para decir lo que los objetivos han planteado.



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Demostración',
        texto:
          'Es un recurso que se explotó en programas de televisión en los que se dedicaban horas enteras a mostrar el uso de un producto. Es un formato muy obvio si se tiene en cuenta que a través de un video es posible mostrar de forma clara, real y convincente el uso de un producto en función de sus beneficios y ventajas competitivas. El texto aquí es principal, pues define el guion y los elementos que se van a exaltar, este formato es muy dado para productos de aseo, funciones específicas de un automóvil o el manejo de una herramienta o utensilio nuevo.',
        imagen: require('@/assets/tema8/imgt8-3.svg'),
      },
      {
        titulo: 'Problema solución',
        texto:
          'Se muestra a una marca solucionando una situación difícil y particular del mercado objetivo, por lo general expone una escena cotidiana en la que el consumidor resuelve un problema con el producto o servicio que se está anunciando. Este formato es muy dado para productos del hogar, insecticidas o servicios especializados como seguros. En este formato la redacción hace énfasis en diálogos y comentario de la efectividad de la marca anunciada.',
        imagen: require('@/assets/tema8/imgt8-4.svg'),
      },
      {
        titulo: 'Música y canto',
        texto:
          'Este formato crea una atmósfera y un estado de ánimo especiales. Es muy utilizado en bebidas como el café, las gaseosas y las cervezas. Permite mostrar el producto en acción acompañado de música y efectos sonoros. En este formato el texto se centra en las características del producto y en la intencionalidad de las mismas, así como el jingle que acompaña el audiovisual.',
        imagen: require('@/assets/tema8/imgt8-5.svg'),
      },
      {
        titulo: 'Testimoniales',
        texto:
          'Aquí un vocero proporciona un alto nivel de credibilidad al mensaje, en este punto es viable utilizar expertos, celebridades o usuarios satisfechos. El espectador siente un nivel de confianza superior y se siente identificado. Es muy útil para productos alimenticios, medicinas, aseo personal y servicios. En este punto el texto se centra en el guion de vocero, pero debe estar ligado a la actitud y naturalidad del actor.',
        imagen: require('@/assets/tema8/imgt8-6.svg'),
      },
      {
        titulo: 'Diálogo',
        texto:
          'Presenta conversaciones entre dos o más personajes, es importante que se redacte una conversación creíble y natural que dé dinamismo al anuncio; este describe una escena cotidiana en la que interactúan familiares o amigos utilizando la marca.',
        imagen: require('@/assets/tema8/imgt8-7.svg'),
      },
      {
        titulo: 'Viñetas',
        texto:
          'Es un formato creativo que implica una planeación más dedicada, se realiza a través de anuncios cortos que se van hilando entre sí y cuentan una historia secuenciada. La redacción está enfocada en contar la historia. Este formato permite enganchar al espectador, crea interés en la marca y genera posicionamiento.',
        imagen: require('@/assets/tema8/imgt8-8.svg'),
      },
      {
        titulo: 'Narración',
        texto:
          'Es tal vez el formato más efectivo para el desarrollo de publicidad en redes sociales y conocido en la actualidad como storytelling. Se utiliza para contar historias lineales que tienen implícitas diferentes emociones y sensaciones a través del drama, a veces combinado con humor y ficción. Este formato le proporciona mucha personalidad a la marca, puede hacer énfasis en el beneficio que esta le proporciona al mercado objetivo y aumenta su posicionamiento.',
        imagen: require('@/assets/tema8/imgt8-9.svg'),
      },
      {
        titulo: 'Animación',
        texto:
          'Es una técnica que se puede combinar con otros formatos. Los personajes, las caricaturas y las demostraciones tridimensionales permiten apoyar de forma contundente el mensaje. Casos en los que se requiere una explicación detallada del funcionamiento de un producto o servicio, productos para niños, el efecto de un medicamento en el cuerpo, el proceso que realiza una máquina internamente, entre otros, pueden ser los usos más significativos de este formato audiovisual. La redacción tiene aquí un papel preponderante, pues implica el diseño del guion que servirá de base para el desarrollo de las animaciones y los textos de apoyo en el audiovisual final, que reforzarán el mensaje.',
        imagen: require('@/assets/tema8/imgt8-10.svg'),
      },
      {
        titulo: 'Directos',
        texto:
          'Conocidos en la actualidad como transmisiones en vivo, son un tipo de formatos sencillos y comunes, además de fácil realización por parte de cualquier persona. Este formato combina música, entretenimiento e información, es muy eficaz para hacer demostraciones, concursos o procesos de aprendizaje en torno a una marca.',
        imagen: require('@/assets/tema8/imgt8-11.svg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
