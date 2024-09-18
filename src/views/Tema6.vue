<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Relación entre texto e imagen



    .row.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        p.mb-5 Cuando los espectadores ven anuncios publicitarios hacen un recorrido visual que se da en la mayoría de los casos, primero consultan la imagen, luego leen el encabezado y finalmente, el cuerpo de texto; es por eso que la imagen se diseña teniendo en cuenta varios aspectos importantes. Cuando los espectadores ven anuncios publicitarios hacen un recorrido visual que se da en la mayoría de los casos, primero consultan la imagen, luego leen el encabezado y finalmente, el cuerpo de texto; es por eso que la imagen se diseña teniendo en cuenta varios aspectos importantes:
        .row
          .col-sm-12.col-lg-9
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Captar la atención del espectador.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Llevar al espectador a leer el encabezado.
              
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Reafirmar lo que se está diciendo en el texto publicitario.
              
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Hacer evidente el concepto del anuncio.             
              
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Mostrar el producto o servicio en función de su uso.             
              
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Exaltar las características más importantes del producto.             
              
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Generar una imagen favorable del producto o de la marca.              

               
      .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema6/img1.svg')




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
