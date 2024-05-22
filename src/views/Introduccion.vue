<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Los textos publicitarios son una de las dos partes que conforman el mensaje publicitario, y en algunos casos representa un porcentaje mayor y en otros apenas hacen presencia a manera de apoyo. Algunas campañas están concebidas con anuncios que contienen imágenes muy llamativas y que debido a ello lo dicen todo sin la necesidad de palabras, aludiendo al dicho #[b “una imagen dice más que mil palabras” ]. Sin embargo, los textos publicitarios han sido, son y seguirán siendo un elemento fundamental en la publicidad, puesto que no se puede hacer un anuncio audiovisual sin que antes haya sido escrito. De la misma forma, los eslóganes y titulares de los anuncios gráficos representan una parte primordial del mensaje y requieren conocimiento, creatividad y análisis para lograr resultados atractivos y persuasivos. El rol del redactor, junto con el diseñador gráfico, es la base para la construcción del mensaje publicitario, el concepto y, en muchas ocasiones, la estrategia creativa. 
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VF8kSA8kuRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/img1.svg', alt='')
      .col-sm-12.col-lg-11
        p.mb-0 La creación de textos con fines comerciales implica la combinación de ideas llamativas con un lenguaje común que sea altamente persuasivo; estos tres factores representan mucha confusión e incertidumbre, por eso es muy importante que quien se dedique a la redacción de textos sea consciente que solo se llega a un resultado óptimo con la práctica constante, la generación de muchas ideas y la redacción de gran cantidad de textos.


 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
