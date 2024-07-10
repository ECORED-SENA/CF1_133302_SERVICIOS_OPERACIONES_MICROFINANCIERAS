<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Microfinanzas 
    
    p(data-aos="fade-right") Cuando hablamos de microfinanzas, es importante saber quién es #[strong Mohammad Yunus], un emprendedor, creador de los microcréditos y gran líder social bangladesí. Lo invitamos a consultar el siguiente video, el cual nos presenta su historia. 
    
    figure.mt-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mt-4(data-aos="fade-left") Para ampliar la información, lo invitamos a visitar el PDF #[strong El papel de la mujer en los microcréditos de los países en vías de desarrollo. El caso de Mohammad Yunus (Bangladesh)], el cual se encuentra en el material complementario. 

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/1.png")
      .col-lg-9(data-aos="fade-left")
        p Es así como al prestar pequeñas cantidades de dinero sin intereses a las mujeres pobres, Yunus descubrió que estas personas son buenos pagadores y el éxito de su banco se atribuye a esto. Todo parte de hacerlo sencillo, todo parte de un trato, cuando llevan este buen hábito de pago y se cancela la totalidad del dinero, está listo para el siguiente préstamo, esto incentiva a las personas. 
        .p-4.mt-4(style="background-color:#E8FAF9;border-radius:4px;" data-aos="fade-up")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/2.svg")
            .col(style="place-self:center;")
              p.mb-0 #[strong “Las personas no deberían ir al banco, el banco debería ir a las personas”], siempre se presta el servicio puerta a puerta, con este principio se logra que haya cercanía entre las personas y el banco, hay conocimiento y se crea un ambiente amigable. 
        .p-4.mt-4(style="background-color:#E8FAF9;border-radius:4px;" data-aos="fade-up")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/3.svg")
            .col(style="place-self:center;")
              p.mb-0 #[strong “Devolver el dinero es muy fácil”], este se hace semanalmente, en complemento con el sistema de grupos, el cual consiste en que se reúnen 5 mujeres, toman prestado el dinero y luego lo devuelven, se apoyan entre ellas, y se aseguran que el negocio funcione. 
    
    .cont_1_1.mt-5
      p(data-aos="fade-right") En el Banco Grameen no hay abogados, de hecho es el único banco en el mundo que no tiene esta figura, debido a que no dependen de documentos legales, ni llamadas, se resuelve todo como seres humanos, la clave es trabajar juntos sin perder el rumbo.
      .col-xl-10.m-auto.mt-5
        .row
          .col(style="place-self:center;" data-aos="fade-right")
            .cont_1_2
              .d-flex
                i.fas.fa-quote-left.me-3(style="color:#201144;font-size:30px;")
                div.mt-2
                  h5.mb-0 Al principio no me impliqué en el problema de la pobreza por motivaciones políticas, académicas o relacionadas con la investigación, sino porque me vi rodeado de pobreza y no pude darle la espalda
                  .text-end.d-flex.mt-3.flex-wrap.justify-content-end
                    p.mb-0.me-3.m-auto (Yunus, 2008)
                    i.fas.fa-quote-right(style="color:#201144;font-size:30px;")
          .col-auto.d-none.d-md-block(data-aos="fade-left")
            figure
              img(src="@/assets/curso/tema1/5.svg")
      
      .col-xl-8.m-auto.mt-5
        .p-4(style="background-color:#201144;border-radius:15px;" data-aos="flip-up")
          .row
            .col-auto.d-none.d-md-block(style="place-self:end;")
              figure
                img(src="@/assets/curso/tema1/6.svg")
            .col
              h4(style="color:#22CAC5;") Podcast
              p.text-white Lo invitamos a escuchar el siguiente pódcast, donde puede conocer la opinión de Yunus sobre la temática que venimos estudiando. 
              TarjetaAudio.color-primario.mt-4(
              texto="Podcast Yunus"
              :audio="require('@/assets/componentes/audios/podcast_001.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
    
    p.mt-4(data-aos="fade-right") Ahora, hablemos sobre las microfinanzas, y para estudiar su origen, lo invitamos a consultar el siguiente video.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1  Contexto regional  
    
    p(data-aos="fade-right") En Colombia, la era de los microempresarios se puede enmarcar con El Programa Global de Crédito para la Microempresa, apoyado por el Banco Interamericano de Desarrollo, BID. Dicha institución inicia su programa de pequeños proyectos inicialmente en asocio con la Fundación Carvajal, pero para 1984 ya habían ocho ONG comprometidas con esta actividad. 
    .col-xl-10.m-auto.mt-4
      .p-4(style="background-color:#E8E7E7;border-radius:8px;" data-aos="fade-up")
        .col-xl-10.m-auto
          .row
            .col-lg.mb-4.mb-lg-0.text-center(style="place-self:center;")
              figure.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema1/7.png" style="max-width:150px;display:inline;")
            .col-lg-auto.d-none.d-lg-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/7-1.svg")
            .col-lg.mb-4.mb-lg-0.text-center(style="place-self:center;")
              figure.col-8.col-md-7.col-lg-12(style="place-self:center;")
                img(src="@/assets/curso/tema1/8.png" style="max-width:150px;display:inline;")
            .col-lg-auto.d-none.d-lg-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/7-1.svg")
            .col-lg.mb-4.mb-lg-0.text-center(style="place-self:center;")
              figure.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema1/9.png" style="max-width:150px;display:inline;")
      
      .row.mt-4(data-aos="fade-up")
        .col-auto.d-none.d-md-block
          figure
            img(src="@/assets/curso/tema1/10.svg")
        .col
          .h-100.p-3(style="background-color:#F3F9FF;border-radius:8px;")
            p.mb-0 El concepto que prevalecía era que por carencia de conocimientos y capacitación gerencial, los microempresarios tenían mucha dificultad en hacer crecer sus negocios. La actividad de crédito se diseñó como un señuelo para atraer a este tipo de emprendedores al programa: como condición para recibir este servicio, deberían participar en actividades de capacitación orientadas a desarrollar habilidades gerenciales. 
  
    
 

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
    mostrarIndicadorAudio: true,
    mostrarIndicadorTarjetaAudio: true,
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
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/4.png)
  background-size: 100% 100%
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 70%
  height: 60%
  right: -7px
  bottom: -10px
  background-color: #D2F5F4
@media screen and (max-width: 992px)
  .cont_1_1:before
    background-size: cover
</style>
