<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Subtítulos
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema4/img1.png')
      .col-sm-12.col-lg-5
        p.mb-0 #[b El subtitular cumple un propósito similar al del encabezado: ] comunicar puntos clave de venta o información sobre la marca. Por lo general, este elemento se ubica arriba o abajo del titular en forma de oración corta; cuando está en la parte superior se conoce como antetítulo. La información que genera el subtítulo es importante para el desarrollo del mensaje, generando datos relacionados con puntos clave de la marca, como un beneficio secundario muy relevante y sirve de puente para reforzar la inquietud por leer todo el anuncio. Su tipografía, por lo general, es más grande que la del cuerpo del texto, pero menor que la del encabezado.
        .titulo-sexto.color-secundario.mt-5
          h5 Figura 9.
          span
            | Subtítulo
      .col-sm-12.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema4/img2.png', alt='En la imagen se prsentan sobre un recuadro rojo cuatro labiales,  en la parte superior el texto: “ This is ad for men”,  y en la parte inferior en letra más pequeña la marca Loreal.')
          figcaption Nota. Tomada de marca registrada L'Oréal (s.f.)


      
     

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
