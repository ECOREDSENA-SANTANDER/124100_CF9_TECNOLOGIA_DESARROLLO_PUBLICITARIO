<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Elementos a tener en cuenta antes de la redacción de textos publicitarios
    
    
    p.mb-5(data-aos="zoom-in-left") Los textos publicitarios se crean siguiendo ciertas técnicas y rutas específicas, no hay casos de inspiración o chispazos creativos que generen ideas mágicas para el desarrollo de textos idóneos y para la comercialización de un producto. Por este motivo, es importante tener en cuenta:
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-3.mb-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img1.svg')
          .tarjeta.color-secundario-cus.w-100
            .p-4.text-center
              h2.text-center.mt-4 Tener un argumento de venta claro:
              p.mb-0 este argumento debe tener como base un beneficio; es decir, la propuesta de valor que ya se ha visto en otros componentes formativos. Este argumento debe ser la base para el desarrollo de los textos principales de la pieza y se convierte en el elemento persuasivo.

      .col-sm-12.col-lg-3.mb-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img2.svg')
          .tarjeta.color-secundario-cus.w-100
            .p-4.text-center
              h2.text-center.mt-4 Escribir con claridad: 
              p.mb-0 la mayoría de mercados objetivo ignoran los anuncios con lenguaje complejo o en los que tengan que deducir el mensaje, entre más claro y contundente mejor.

      .col-sm-12.col-lg-3.mb-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img3.svg')
          .tarjeta.color-secundario-cus.w-100
            .p-4.text-center
              h2.text-center.mt-4 Estimular la imaginación del lector: 
              p.mb-0 llevar el mensaje paso a paso, contar una historia; de esta forma, el espectador se conecta con la pieza e imagina al tiempo que la lee.
      
      .col-sm-12.col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img4.svg')
          .tarjeta.color-secundario-cus.w-100
            .p-4.text-center
              h2.text-center.mt-4  Menos es más: 
              p.mb-0 no excederse en palabras o elementos innecesarios solo para llenar espacio, decir lo justo para cumplir con los objetivos de la campaña, pero tratar de tener toda la información posible.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
