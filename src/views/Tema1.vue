<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Elementos a tener en cuenta antes de la redacción de textos publicitarios
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.align-items-center.justify-content-between
        .col-12.col-lg-auto.mb-4.img-200.row.justify-content-around.align-items-center
          
            figure
            img(src='@/assets/tema1/imgt1-1.svg', alt='Texto que describa la imagen')
            
        .col-lg.justify-content-md-center
          .bloque-texto-a__texto.p-4
            p Los textos publicitarios se crean siguiendo ciertas técnicas y rutas específicas, no hay casos de inspiración o chispazos creativos que generen ideas mágicas para el desarrollo de textos idóneos y para la comercialización de un producto. Por este motivo, es importante tener en cuenta:





    .row.justify-content-center
      .col-lg-8
        .crd_01.p-0
          .crd_01__icon.m-3
            img(src='@/assets/tema1/imgt1-2.svg' alt='AvatarTop' ).class 
          .crd_01__txt
            p #[strong Tener un argumento de venta claro:] este argumento debe tener como base un beneficio; es decir, la propuesta de valor que ya se ha visto en otros componentes formativos. Este argumento debe ser la base para el desarrollo de los textos principales de la pieza y se convierte en el elemento persuasivo.
        .hr1

        .crd_01.p-0
          .crd_01__icon.m-3
            img(src='@/assets/tema1/imgt1-3.svg' alt='AvatarTop' ).class 
          .crd_01__txt
            p #[strong Escribir con claridad:] la mayoría de mercados objetivo ignoran los anuncios con lenguaje complejo o en los que tengan que deducir el mensaje, entre más claro y contundente mejor.
        .hr1
        .crd_01.p-0
          .crd_01__icon.m-3
            img(src='@/assets/tema1/imgt1-4.svg' alt='AvatarTop' ).class 
          .crd_01__txt
            p #[strong Estimular la imaginación del lector:] llevar el mensaje paso a paso, contar una historia; de esta forma, el espectador se conecta con la pieza e imagina al tiempo que la lee.
        .hr1
        .crd_01.p-0
          .crd_01__icon.m-3
            img(src='@/assets/tema1/imgt1-5.svg' alt='AvatarTop' ).class 
          .crd_01__txt
            p #[strong Menos es más:] no excederse en palabras o elementos innecesarios solo para llenar espacio, decir lo justo para cumplir con los objetivos de la campaña, pero tratar de tener toda la información posible.
      
      .col-3.p-4.mb-lg-0.d-none.d-lg-flex
         img(src='@/assets/tema1/imgt1-6.svg' alt='AvatarTop' ).class 


   


</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
