<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Relación entre texto e imagen



    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-12.col-lg-auto.justify-content-md-center.mb-4
          .mb-0.colc
            figure
            img(src='@/assets/curso/temas/tema6/imgt6-1.svg', alt='Tipos de titulares')
            
        .col-lg.justify-content-md-center
          .bloque-texto-a__texto.p-4
            p Cuando los espectadores ven anuncios publicitarios hacen un recorrido visual que se da en la mayoría de los casos: primero observan la imagen, luego leen el encabezado y finalmente, el cuerpo de texto; es por eso que la imagen se diseña teniendo en cuenta varios aspectos importantes:
  
    .row.justify-content-around.align-items-center.m-5
      .col-md-6.mr-5.row
        .ul.lista-ul--color
          li 
            i.fas.fa-caret-right
            p Captar la atención del espectador.
          .sep2
          li 
            i.fas.fa-caret-right
            p Llevar al espectador a leer el encabezado.
          .sep2
          li 
            i.fas.fa-caret-right
            p Reafirmar lo que se está diciendo en el texto publicitario.
          .sep2
          li 
            i.fas.fa-caret-right
            p Hacer evidente el concepto del anuncio.             
          .sep2
          li 
            i.fas.fa-caret-right
            p Mostrar el producto o servicio en función de su uso.             
          .sep2
          li 
            i.fas.fa-caret-right
            p Exaltar las características más importantes del producto.             
          .sep2
          li 
            i.fas.fa-caret-right
            p Generar una imagen favorable del producto o de la marca.              
                 
               
      .col-md-6
        .mb-0.colc
            figure
            img(src='@/assets/curso/temas/tema6/imgt6-2.svg', alt='Tipos de titulares')




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
