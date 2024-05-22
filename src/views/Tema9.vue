<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 9
      h1 Uso de las figuras retóricas en el mensaje publicitario

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-12.col-lg-auto.justify-content-md-center.mb-4
          .mb-0.colc
            figure
            img(src='@/assets/curso/temas/tema9/imgt9-1.svg', alt='Uso de las figuras retóricas en el mensaje publicitario')
            
        .col-lg.justify-content-md-center
          .bloque-texto-a__texto.p-4
            p Ya se ha estudiado en anteriores componentes formativos diferentes métodos para el diseño del mensaje y el concepto publicitario: los insights de producto y consumidor, las tendencias, las características del producto y los estereotipos, los cuales son los recursos que hasta ahora se conocen. Sabiendo que un mensaje efectivo y con dirección hacia un grupo de consumidores previamente seleccionado, es posible construirlo a partir de uno o varios de estos recursos; de esta manera, un estereotipo puede hacer énfasis en su discurso a un insight de consumidor o las características de un producto pueden responder a nuevas tendencias del mercado.

    .row
      .col-lg.align-self-center
        p Por lo anterior, a continuación, se estudiarán algunas figuras retóricas o literarias que con un buen manejo pueden significar un recurso de inmenso valor para el diseño del mensaje publicitario y la diferencia entre un eslogan de medianas características y otro que represente mayor poder persuasivo o convincente. Pero antes, es bueno saber que las figuras retóricas se han utilizado en la literatura para hacer más ricos, entretenidos y versátiles los textos, para que el lector tenga diferentes sensaciones y viva una atmósfera específica. 
        br
        
        p Estas técnicas de escritura también direccionan el estilo del autor y hacen que sus obras tengan ese toque característico. Sin embargo, la función principal de las figuras literarias es permitir a quien los ve el uso de la imaginación con fines didácticos, maximizando la comprensión de lo que está leyendo al realizar comparativos con otras situaciones o poner en diferentes contextos un aspecto en particular. La publicidad ha sabido explotar este tipo de recursos para el desarrollo de mensajes memorables y que, por encima del aspecto comercial, exaltan los beneficios de un producto o servicio.

        br
            
      .col-12.col-lg-auto.align-self-center.m-5
        figure.imgc
          img(src='@/assets/curso/temas/tema9/imgt9-2.svg', alt='Texto que describa la imagen')
    
    
    #t_9_1.titulo-segundo.mt-4
      h2 9.1 Principales figuras retóricas utilizadas en la publicidad
    .row.bl-gr.p-5
      .col-12.col-lg-auto.align-self-center.mb-4
        figure.img-200
          img(src='@/assets/curso/temas/tema9/imgt9-3.svg', alt='Texto que describa la imagen')

      .col-lg.align-self-center
     
          p A continuación, se indican las figuras retóricas más utilizadas en la publicidad, relacionando algunos ejemplos escritos y visuales que se destacan. Lo cual, es basado en el sitio web Retoricas.com (2009) y la recopilación que hace la profesora de lenguaje y comunicación Mónica San Martín:
          br
          a.boton--sm.color-acento-botones.me-3(:href="obtenerLink('/downloads/Propuesta_metodologica.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    br              

    





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
