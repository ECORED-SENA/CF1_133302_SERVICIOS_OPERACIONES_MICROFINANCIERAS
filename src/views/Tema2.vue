<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Microempresa
    
    .row
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        p El concepto de microempresa es un término utilizado para diferenciar una empresa por los ingresos mensuales o anuales que posee, además del tamaño. Está contenida dentro de la categoría de las Pymes. 
        p En la realidad nacional de Colombia, las microempresas son parte fundamental de la economía, puesto que han calado en la mayoría de municipios, como una forma de salir adelante. Se debe tener en cuenta que estas empresas pueden ser de tipo personal o general. 
      .col-lg-3(data-aos="fade-left")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/1.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1 Tipos y características 
    
    p.fw-bold(data-aos="fade-right") A continuación, conozcamos algunos de los tipos de microempresas y sus características básicas:

    .cont_2_1.mt-4.pt-4.pt-lg-5.pb-4.pb-lg-5
      figure.d-none.d-md-block(style="position:absolute;width:auto;height:auto;left:-48px;top:20px;")
        img(src="@/assets/curso/tema2/3.png" style="max-width:130px;display:inline;")
      figure.d-none.d-md-block(style="position:absolute;width:auto;height:auto;right:-48px;bottom:0;")
        img(src="@/assets/curso/tema2/3.png" style="max-width:130px;display:inline;transform: rotate(180deg);")
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .h-100.p-4.cont_hover1(style="background-color:#22CAC5;border-radius:23px;")
            figure.text-center
              img(src="@/assets/curso/tema2/4.png" style="max-width:400px;display:inline;")
            .mt-4
              h5.text-white.mb-0.m-auto.p-1.ps-4.pe-4(style="background-color:#201144;max-width:fit-content;") Supervivencia
              p.mt-4 Se crean por necesidad económica y no cuentan con un capital base con el cual se manejan los costos de operaciones, sino que es de producción inmediata. Ejemplo: vendedor ambulante. 
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .h-100.p-4.cont_hover1(style="background-color:#22CAC5;border-radius:23px;")
            figure.text-center
              img(src="@/assets/curso/tema2/5.png" style="max-width:400px;display:inline;")
            .mt-4
              h5.text-white.mb-0.m-auto.p-1.ps-4.pe-4(style="background-color:#201144;max-width:fit-content;") Expansión
              p.mt-4 Tienen un poco más de ingresos que el de supervivencia, sin embargo, este dinero restante no es suficiente para desarrollar aún más la Pyme. 
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .h-100.p-4.cont_hover1(style="background-color:#22CAC5;border-radius:23px;")
            figure.text-center
              img(src="@/assets/curso/tema2/6.png" style="max-width:400px;display:inline;")
            .mt-4
              h5.text-white.mb-0.m-auto.p-1.ps-4.pe-4(style="background-color:#201144;max-width:fit-content;") Transformación
              p.mt-4 Es más grande que las anteriores, en cuanto a facturación se refiere, porque el ingreso permite formar un capital y por lo tanto, tiene mayores posibilidades de crecer.  
      
      p.mt-5.fw-bold(data-aos="fade-right") Las características principales de las microempresas, son: 

      .col-xl-11.mt-4
        .row
          .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
            ul.lista-ul
              li.d-flex
                i.fas.fa-check-circle(style="color:#B15815;")
                div Tienen un máximo de 6 empleados, solo en algunos casos esta cifra se supera hasta un total de 10. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#B15815;")
                div El dueño se cuenta entre los trabajadores (aunque hay excepciones). 
              li.d-flex
                i.fas.fa-check-circle(style="color:#B15815;")
                div Cuenta con una facturación limitada, es decir, que no permite fácilmente un crecimiento. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#B15815;")
                div No inciden significativamente en una economía. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#B15815;")
                div Se crean con relativa facilidad, dependiendo del país, debido a que pueden comenzar desde las ventas de comida a domicilio. 
          .col-lg-5(data-aos="fade-left")
            figure.m-auto.col-10.col-md-8.col-lg-12
              img(src="@/assets/curso/tema2/7.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2 Marco legal 
    
    p(data-aos="fade-right") El marco legal empresarial depende de los países y sus fiscos, es importante saber que cada empresa debe regirse según donde sea registrada, por ejemplo: una microempresa radicada en Panamá con campo de acción en Latinoamérica, debe entenderse con el Gobierno de Panamá mientras crece, luego de ciertos montos económicos, ya debe pasar la página para hacer presentación legal y ejecutiva en cada país de acción. 

    .col-xl-10.mt-4
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          .row
            .col-lg-6.mb-4
              a.anexo(href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20957%20DEL%2005%20DE%20JUNIO%20DE%202019.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.fw-bold(style="color:#12263F;") Decreto 957 de 2019 
            .col-lg-6.mb-4
              a.anexo(href="https://www.suin-juriscol.gov.co/viewDocument.asp?id=1729784" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.fw-bold(style="color:#12263F;") Ley 590 de 2000
            .col-lg-6.mb-4
              a.anexo(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0590_2000.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.fw-bold(style="color:#12263F;") Decreto 919 de 2008
            .col-lg-6.mb-4
              a.anexo(href="https://www.bancadelasoportunidades.gov.co/sites/default/files/2017-02/Resolucion-0001-2007.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.fw-bold(style="color:#12263F;") Resolución 1 de 2007
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-10.col-md-8.col-lg-12
            img(src="@/assets/curso/tema2/8.svg")
            






</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema2/2.png)
  background-size: 100% 100%
.cont_hover1
  transition: all .4s ease-in-out
  cursor: pointer
.cont_hover1:hover
  background-color: #EFDDCF !important
@media screen and (max-width: 992px)
  .cont_2_1:before
    background-size: cover
</style>
