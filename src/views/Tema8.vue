<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 8
      h1 Redacción para medios audiovisuales

    .row.mb-5

      .col-auto.align-self-center.m-5
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
        h2 8.1  Título de segundo nivel, 24pt          

    #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
        .carousel-indicators
          button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
        .carousel-inner
          .carousel-item.active
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .carousel-item
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .carousel-item
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
        button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
          span.visually-hidden Previous
        button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.visually-hidden Next

                //- -------------------------------------------------------------------------------------------------------------------------------

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
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
