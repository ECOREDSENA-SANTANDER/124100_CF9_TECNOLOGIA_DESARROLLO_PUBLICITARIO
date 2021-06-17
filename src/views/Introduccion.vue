<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VF8kSA8kuRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Introducción
    
    p.mb-5 La creación de textos con fines comerciales implica la combinación de ideas llamativas con un lenguaje común que sea altamente persuasivo; estos tres factores representan mucha confusión e incertidumbre, por eso es muy importante que quien se dedique a la redacción de textos sea consciente que solo se llega a un resultado óptimo con la práctica constante, la generación de muchas ideas y la redacción de gran cantidad de textos.


 
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
