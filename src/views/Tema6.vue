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
        .col-auto.justify-content-md-center
          .mb-0.colc
            figure
            img(src='@/assets/tema6/imgt6-1.svg', alt='Tipos de titulares')
            
        .col-lg.justify-content-md-center
          .bloque-texto-a__texto.p-4
            p Cada campaña es única y particular y el mensaje con que se llega al mercado también. El diseño de los titulares debe estar vinculado y ser coherente con el concepto creativo; es decir, el tono de la comunicación y estilo con que se haya planeado el diseño; así, se pueden encontrar los siguientes:
  
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
            img(src='@/assets/tema6/imgt6-2.svg', alt='Tipos de titulares')




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
