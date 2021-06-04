<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Cuerpo de texto
    .row.bl-gr
      .col-auto.align-self-center.m-5.img-200
        figure.imgc
          img(src='@/assets/tema5/imgt5-1.svg', alt='Texto que describa la imagen')

      .col-lg.align-self-center.error
          //-.h4 Comunicación ATL
            br

          p También conocido como body copy, es el elemento en el que se realiza de forma completa la exposición de la marca, producto o servicio. Cuando está bien realizado apoya de forma eficaz al titular, al subtitular y a la imagen; además, es interesante para el espectador. Sin embargo, que el texto sea interesante y atrape al lector depende de la manera estratégica como se escriba, que responda al global del mensaje y del concepto creativo y que hile el titular y la imagen, proporcionando información relevante para el posible comprador. 
          br
          a.boton--sm.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    br
    br
    #t_5_2.titulo-segundo
      h2 5.2 Herramientas para la redacción del body copy

    .cajon.color-primario.p-4.mb-4.error.row
      .col-lg.align-self-center.error
        //-.h4 Comunicación ATL
          br

        p También conocido como body copy, es el elemento en el que se realiza de forma completa la exposición de la marca, producto o servicio. Cuando está bien realizado apoya de forma eficaz al titular, al subtitular y a la imagen; además, es interesante para el espectador. Sin embargo, que el texto sea interesante y atrape al lector depende de la manera estratégica como se escriba, que responda al global del mensaje y del concepto creativo y que hile el titular y la imagen, proporcionando información relevante para el posible comprador. 
      .col-auto.align-self-center.m-5.img-200
        figure.imgc
          img(src='@/assets/tema5/imgt5-1.svg', alt='Texto que describa la imagen')
    
    PasosA.color-primario.my-5(tipo="n")
      div
        .h3 Hablar en presente siempre que sea posible
        p Las menciones que se hacen en pasado o futuro carecen de credibilidad porque dan la sensación de ser datos sin soporte.

      div
        .h3 Utilizar nombres en singular
        p Los anuncios son vistos de forma individual y, así mismo, el lector evalúa el mensaje, enfocado en una sola marca; usar plurales puede hacer el anuncio menos personal y generar distracción en el lector.

      div
        .h3 Utilizar frases y palabras conocidas
        p Aunque se piense que las frases conocidas son de cajón, trilladas y muy comunes, son muy eficaces si se utilizan como base para crear nuevas expresiones y hacer memorable la pieza gráfica; en este punto se pone a prueba la creatividad y habilidad de quien redacta los textos.

      div
        .h3 Párrafos y frases de extensiones diversas
        p Variar la extensión de los párrafos de un body copy le puede sumar estética a un anuncio, además de hacerlo más interesante y fácil de leer.
      
      div
        .h3 Hacer partícipe
        p Cuando se hace un texto para un mercado objetivo, es importante identificar de tal manera al lector que sienta que se hizo específicamente para él y no para un público masivo; usar su lenguaje y hacerlo más personal es muy eficaz para lograr este objetivo.
      
      div
        .h3 Soportar datos
        p En muchos anuncios un dato que parezca increíble puede generar desconfianza en el lector, de ahí la importancia de soportar con documentos y respaldos científicos si es necesario las afirmaciones que se hagan de este tipo.
      
      div
        .h3 Evitar expresiones trilladas y superlativos
        p Al contrario de lo que se piensa, los usos de expresiones de esta clase no son atractivas para los clientes; por el contrario, dan un aspecto antiguo y dudoso a la marca.
      
    
      



       
          

          
        

  

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
