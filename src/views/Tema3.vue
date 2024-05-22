<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Tipos de titulares
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-12.col-lg-auto.justify-content-md-center.mb-4
          .mb-0.colc
            figure
            img(src='@/assets/curso/temas/tema3/imgt3-1.svg', alt='Tipos de titulares')
            
        .col-lg.justify-content-md-center
          .bloque-texto-a__texto.p-4
            p Cada campaña es única y particular y el mensaje con que se llega al mercado también. El diseño de los titulares debe estar vinculado y ser coherente con el concepto creativo; es decir, el tono de la comunicación y estilo con que se haya planeado el diseño; así, se pueden encontrar los siguientes:

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Directo")
        .row
          .col-md-6.mb-4.mb-md-0.align-self-center
            .h4 Titular directo
            p Es imperativo; es decir, de mandato. La teoría publicitaria dice que el ser humano por evolución está diseñado para recibir y ejecutar órdenes. Sin embargo, la eficacia de los #[strong Call To Action] imperativos es cada vez menor por el uso frecuente y abusivo que se le da en la publicidad. Expresiones como #[strong “inscríbete”, “venga hoy mismo” o “llámenos ahora”] son cortos y llamativos, pero pueden ser poco relevantes e identificar en casi nada al mercado objetivo. Entre mejor se hable al mercado, mejor será la interacción con él.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/imgt3-2.svg', alt='Titular directo')
              figcaption Fuente: marca registrada Carulla (s.f.)
      .py-3.py-md-4(titulo="Indirectos")
        .row

          .col-md-6.align-self-center
            .h4 Titulares indirectos
            p Son muy utilizados en publicidad contemporánea; brindan poca información, pero tienen alto poder de atracción al mercado objetivo, así, con las palabras adecuadas lo identifican y también pueden mencionar la propuesta de valor.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/imgt3-3.svg', alt='Titulares indirectos')
              figcaption Fuente: marca registrada Lays (s.f.)            
        
      .py-3.py-md-4(titulo="Referencia al nombre")
        .row
          .col-md-6.mb-4.mb-md-0.align-self-center
            .h4 Titulares que hacen referencia al nombre
            p Son muy utilizados en productos o servicios con alto nivel de posicionamiento y aprovechan esa condición para generar mayor atracción del mercado.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/imgt3-4.svg', alt='Titulares que hacen referencia al nombre')
              figcaption Fuente: marca registrada Alpina (s.f.)

      .py-3.py-md-4(titulo="Promocionales")
        .row

          .col-md-6.align-self-center
            .h4 Titulares promocionales
            p Son de uso poco frecuente, pues las empresas no hacen estrategias de promoción de venta con regularidad. Tienen características similares a los titulares directos, pero con el énfasis en la promoción.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/imgt3-5.svg', alt='Titulares promocionales')
              figcaption Fuente: marca registrada Wendys, Dr Pepper (s.f.)            
        
      
      .py-3.py-md-4(titulo="Interrogativos")
        .row
          .col-md-6.mb-4.mb-md-0.align-self-center
            .h4 Titulares interrogativos
            p Son muy eficaces para generar curiosidad en el espectador; presentan mejor efectividad si las preguntas son coherentes, directas y sencillas; pueden tener doble sentido y aludir al humor.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/imgt3-6.svg', alt='Titulares interrogativos')
              figcaption Fuente: marca registrada Snickers (s.f.)
      
      .py-3.py-md-4(titulo="Segmentación")
        .row

          .col-md-6.align-self-center
            .h4 Titulares de segmentación
            p Tienen un direccionamiento muy específico hacia el target de la marca, producto o servicio; además de un alto nivel de identificación con el mercado objetivo y pueden hacer más evidente la propuesta de valor o el argumento de venta, porque puede tener un enfoque más directo en las necesidades.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/imgt3-7.svg', alt='Titulares de segmentación')
              figcaption Fuente: marca registrada Old Spice (s.f.)

      .py-3.py-md-4(titulo="Combinados")
        .row

          .col-md-6.align-self-center
            .h4 Titulares combinados
            p se crean en combinación perfecta con la imagen del anuncio y permiten al consumidor pensar para hacer la relación entre los dos elementos. Muchas veces el texto es complemento de la imagen que muestra un contexto.  
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/imgt3-8.svg', alt='Titulares combinados')
              figcaption Fuente: marca registrada Coca-Cola (s.f.)                

      .py-3.py-md-4(titulo="Noticia")
        .row

          .col-md-6.align-self-center
            .h4 Titulares noticia
            p se utilizan para relanzamientos o mejoras en productos o servicios, también pueden ser viables en anuncios promocionales.      
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/imgt3-9.svg', alt='Titulares noticia')
              figcaption Fuente: marca registrada Fanta (s.f.)            
            





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
