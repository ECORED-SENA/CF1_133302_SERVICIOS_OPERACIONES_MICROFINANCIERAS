<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro.pb-5
      .p-4(style="background-color:#D2F5F4;border-radius:12px;")
        .row
          .col(style="place-self:center;" data-aos="fade-right")
            p.mb-0 En el presente componente formativo, estudiaremos cómo las microfinanzas son un conjunto de servicios financieros dirigidos a personas y microempresas que no tienen acceso a la banca tradicional. Este concepto fue popularizado por Mohammad Yunus, un emprendedor y líder social bangladesí, conocido por ser el creador de los microcréditos. Yunus fundó el Banco Grameen, una institución que se dedica a prestar pequeñas cantidades de dinero, especialmente a mujeres pobres, con el objetivo de fomentar su desarrollo económico y social. Su enfoque revolucionario se basa en la confianza y en la capacidad de pago de sus prestatarios, lo que ha permitido que muchas personas mejoren su calidad de vida. 
          .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
            figure
              img(src="@/assets/curso/intro1.svg")
      
      .row.mt-4
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/intro2.png")
        .col(style="place-self:center;" data-aos="fade-left")
          p Es así como la importancia de las microfinanzas radica en su capacidad para ofrecer una oportunidad económica a sectores marginados de la sociedad. En países en vías de desarrollo, como Bangladesh y Colombia, las microfinanzas han sido fundamentales para apoyar a microempresarios y fomentar el crecimiento económico local. Además, las políticas y programas gubernamentales han jugado un papel crucial en regular y promover el desarrollo de las microfinanzas, asegurando que estas prácticas beneficien a los más necesitados y contribuyan a la reducción de la pobreza. 
          p.mb-0.fw-bold Muchos éxitos en este proceso de aprendizaje. 




    


    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro, .cont_intro *
  position: relative
.cont_intro:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(255,255,255)
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(232,250,249,1) 40%, rgba(232,250,249,1) 60%, rgba(232,250,249,0) 100%)
</style>
