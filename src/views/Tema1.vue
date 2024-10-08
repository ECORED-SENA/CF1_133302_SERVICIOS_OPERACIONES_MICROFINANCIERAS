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
        iframe(width="560" height="315" src="https://www.youtube.com/embed/w-8Xy1N5Los?si=mtTkTA67z82qO634" title="Origen de las microfinanzas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
              h4(style="color:#22CAC5;") Pódcast
              p.text-white Lo invitamos a escuchar el siguiente pódcast, donde puede conocer la opinión de Yunus sobre la temática que venimos estudiando. 
              TarjetaAudio.color-primario.mt-4(
              texto="Pódcast Yunus"
              :audio="require('@/assets/componentes/audios/podcast_001.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
    
    p.mt-4(data-aos="fade-right") Ahora, hablemos sobre las microfinanzas, y para estudiar su origen, lo invitamos a consultar el siguiente video.

    figure.mt-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Fm2mZtUc-38" title="Mohammad Yunus" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1  Contexto regional  
    
    p(data-aos="fade-right") En Colombia, la era de los microempresarios se puede enmarcar con el Programa Global de Crédito para la Microempresa, apoyado por el Banco Interamericano de Desarrollo, BID. Dicha institución inicia su programa de pequeños proyectos inicialmente en asocio con la Fundación Carvajal, pero para 1984 ya habían ocho ONG comprometidas con esta actividad. 
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
    
    .p-4.mt-5(data-aos="flip-up" style="background-color:#201144;border-radius:12px;")
      .row
        .col-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/11.svg")
        .col-md.mb-4.mb-md-0(style="place-self:center;")
          h5(style="color:#22CAC5;") Ley 590 de 2000, artículo 39
          p.mb-0.text-white.text-small En Colombia estas operaciones activas están contempladas en la Ley 590 de 2000, en el artículo 39, la cual promueve el desarrollo de las micro, pequeñas y medianas empresas. 
        .col-md-auto.col-12.text-center(style="place-self:center;")
          a.boton.color-acento-botones(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0590_2000.html " target="_blank")
            span Mas información
            i.fas.fa-link
    
    .cont_1_3.mt-5
      .cont_decorativo.mb-4(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/12.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.text-white.pe-5 #[span(style="color:#22CAC5 !important;") Objetivo] de los microcréditos

      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          p.fw-bold Los microcréditos pueden ser difíciles de obtener, el objetivo de estos es que las personas puedan aprovechar el beneficio para comenzar su propio negocio, esto contribuye a la reducción de la pobreza. 
          p El creer que los pobres podrían ser excelentes clientes, fue el gran acierto de las microfinancieras, conocer en profundidad a sus clientes con la información recolectada, tanto del negocio como del dueño, mediante la cercanía, ayudada con las visitas y un comité de crédito que analiza la voluntad de pago, no sobre endeudar a los clientes, serían las claves del éxito. 
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-9.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/13.png")
      
      .row.mt-4
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-9.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/14.png")
        .col-lg-8(data-aos="fade-left")
          p.fw-bold Con el tiempo estas instituciones fueron creciendo, desarrollando sistemas que minimizaran los riesgos y asimismo ampliaron la oferta de productos. 
          p Las microfinancieras han sido herramienta para ayudar a erradicar la pobreza en el mundo entero, si bien es cierto la ayuda que se ofrece no es regalar dinero, sí es impulsar a los más necesitados, ofreciendo productos y servicios a su alcance, que como todo movimiento, va a generar un coste a tener en cuenta. 
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/12.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.text-white.pe-5 #[span(style="color:#22CAC5 !important;") La teoría] económica
    
    .row.justify-content-center
      .col-md-8.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-4.p-md-3.h-100(style="background-color:#E8FAF9;")
          .row
            .col.pe-0(style="place-self:center;")
              h5.mb-0 ¿De qué sirve la teoría (económica) si no trabaja para la gente?
            .ps-0.col-auto
              figure
                img(src="@/assets/curso/tema1/15.svg")
      .col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#F6EDE6;")
          p.mb-0 Este cuestionamiento haría que Yunus trabajará por los pobres y ayudará a solucionar de alguna manera su situación económica, buscando que los individuos hallen una salida de la pobreza con dignidad, labor que fue reconocida por el Banco Mundial. 
      .col-lg-4(data-aos="zoom-in")
        figure.m-auto.col-10.col-md-8.col-lg-12
          img(src="@/assets/curso/tema1/16.svg")
    
    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/17.png")
      .col-lg-9(data-aos="fade-left")
        p Este hombre con don de servicio comienza su largo camino, ayudando a una mujer que luchaba por ganarse la vida construyendo tarimas de bambú. La mujer no tenía dinero para comprar materia prima, apenas tenía para sobrevivir. Yunus decide prestarle 27 dólares de su bolsillo, es aquí donde nace el Banco Grameen, que significa rural o pueblo en lengua bengalí o banco de los pobres; este banco ve todo lo opuesto a la banca tradicional, Grameen cataloga a los pobres como candidatos a crédito, por años cobró un interés similar o superior al comercial y nunca perdona préstamos, su mercado objetivo son las mujeres, sus garantías son la presión social de la misma comunidad, porque se hace responsable de los créditos el grupo de personas que lo solicita.
        .col-lg-10.mt-4
          .cont_1_2
            .d-flex
              i.fas.fa-quote-left.me-3(style="color:#201144;font-size:30px;")
              div.mt-2
                h5.mb-0 El Grameen va más allá de lo económico, empodera a las mujeres, hacen que tengan más seguridad en ellas mismas, rompen sus barreras como barreras al mercado laboral, su papel en el hogar y hasta la planificación familia
                .text-end.d-flex.mt-3.flex-wrap.justify-content-end
                  p.mb-0.me-3.m-auto (Sáenz de Cabezón, 2018)
                  i.fas.fa-quote-right(style="color:#201144;font-size:30px;")
    
    p.mt-5(data-aos="fade-right") A través de los años, el Banco Grameen logró tasas de recuperación de cartera del 97 %, la envidia de muchos bancos comerciales en el mundo. 
    p.fw-bold(data-aos="fade-up") Yunus ha complementado el Banco con empresas sociales, entre ellas:  

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-2(style="background-color:#DFBBA0;border-radius:10px;")
          .row
            .col-auto.pe-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/18.svg")
            .col(style="place-self:center;")
              p.fw-bold.mb-1 Grameen Telecom
              p.mb-0 Servicios telefónicos 
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-2(style="background-color:#DFBBA0;border-radius:10px;")
          .row
            .col-auto.pe-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/19.svg")
            .col(style="place-self:center;")
              p.fw-bold.mb-1 Grameen Shakti
              p.mb-0 Provee energía 
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-2(style="background-color:#DFBBA0;border-radius:10px;")
          .row
            .col-auto.pe-0(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/20.svg")
            .col(style="place-self:center;")
              p.fw-bold.mb-1 Grameen Shikkha  
              p.mb-0 Apoyos financieros para la educación 
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/21.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 El crédito es un derecho humano y debe ser tratado como un derecho humano. Si el crédito puede aceptarse como derecho humano, el resto de los derechos humanos serán más fáciles de establecer, ha afirmado Yunus. #[strong En el futuro la pregunta no será ¿es la gente digna de crédito?, sino ¿son los bancos dignos de la gente?, complementó Yunus.]
    
    p.mt-5.fw-bold(data-aos="fade-right") Hablemos ahora sobre la Fundación Microfinanzas BBVA: 

    .row.mt-4
      .col-lg.mb-4.mb-lg-0.pe-lg-0
        .h-100.p-4.p-lg-5.cont_figura1(style="background-color:#178D89;border-radius:20px 0px 0px 20px;position:relative;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/22.svg" style="max-width:100px;display:inline;")
          .text-white.mb-5.mt-3
            p La Fundación Microfinanzas BBVA, que apoya a 2 millones de personas de escasos recursos en 5 países, ha llevado a la sede de Naciones Unidas en Nueva York, la voz de Jessica Hernández, esta emprendedora colombiana que cuenta cómo ha salido adelante:  
            p “Siempre hace falta un empujón, yo creo que las microfinanzas y los microcréditos son algo muy importante en la vida de cada persona que quiera emprender, y que está emprendiendo prácticamente de cero” (Noticias ONU, 2018). 
      .col-lg.ps-lg-0
        .h-100.p-4.p-lg-5.cont_figura2(style="background-color:#D2F5F4;border-radius:0px 20px 20px 0px;position:relative;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/23.svg" style="max-width:100px;display:inline;")
          .mb-5.mt-3
            p La transformación digital y la innovación como herramienta han sido el tema central del máximo representante del PNUD (Programa de Naciones Unidas para el Desarrollo), Achim Steiner, y del director general de la Fundación de Microfinanzas BBVA, Javier Flores, para que más mujeres accedan al sistema financiero y ayuden a cerrar la brecha de género, para ello se encuentran en conversaciones con Microsoft, para capacitación en temas digitales.

    p.mt-4(data-aos="fade-right") Facilitar el acceso a mujeres al sistema financiero, permite que aumenten sus ingresos y mejoren su futuro. En emprendimiento, América Latina registra la mayor paridad de género, por cada 10 hombres hay 8 mujeres, mientras que en Europa hay 5 por cada 10 hombres, si ella pudiera participar equitativamente en la economía, se añadirían 28 billones de dólares al PIB mundial en el 2025.  

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 El sistema financiero colombiano 
    
    p(data-aos="fade-right") El sistema financiero colombiano es conocido como el conjunto de instituciones que se organizan para satisfacer las necesidades de recursos de los distintos actores de una economía, como se ve en la siguiente figura: 

    .col-xl-10.m-auto.mt-4
      .titulo-sexto.color-secundario(data-aos="zoom-in-down")
        h5 Figura 1. 
        span Sistema financiero colombiano
      .p-4.p-xl-5(style="background-color:#F3F9FF;border-radius:5px;")
        .col-xl-11.m-auto
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/tema1/26.svg" alt="Imagen que presenta cómo la estructura del sistema financiero colombiano se divide en dos grandes grupos: entidades financieras y aseguradoras. Dentro de las entidades financieras, se encuentran los establecimientos de crédito, que incluyen establecimientos bancarios, corporaciones financieras, compañías de financiamiento y cooperativas financieras. Además, están las sociedades de servicios financieros, que abarcan las sociedades fiduciarias, las administradoras de fondos de pensiones y los almacenes generales de depósito. Por otro lado, en el sistema financiero también se encuentran las aseguradoras, que incluyen principalmente las sociedades de capitalización. Esta estructura refleja la organización del sistema financiero en Colombia, abarcando tanto a las instituciones bancarias y de inversión como a las entidades que gestionan seguros y capitalización.")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_3 1.3 Historia y su relevancia 
    
    p(data-aos="fade-right") Conozcamos, a través de la siguiente línea de tiempo, la historia y relevancia del sistema financiero colombiano. 

    .col-xl-8.m-auto.mt-4
      .p-3(style="background-color:#F6F6F6;border-radius:8px;")
        LineaTiempoE.color-secundario.m-4(data-aos="zoom-in")
          .row.col-xl-11.m-auto(titulo="1850")
            p.mb-0 Se suprimen las casas de monedas, porque la gente prefería comercializar metales preciosos.
          .row.col-xl-11.m-auto(titulo="1854")
            p.mb-0 Surge la primera entidad financiera privada para financiar operaciones comerciales y mineras.
          .row.col-xl-11.m-auto(titulo="1863")
            p.mb-0 Se promulga la Constitución de Rionegro, la cual crea los Estados Unidos de Colombia. 
          .row.col-xl-11.m-auto(titulo="1864")
            p.mb-0 Se autoriza la llegada de bancos extranjeros, como el de Londres y México. 
          .row.col-xl-11.m-auto(titulo="1870")
            p.mb-0 Se funda el primer banco exitoso, el Banco de Bogotá. 
          .row.col-xl-11.m-auto(titulo="1875")
            p.mb-0 Se funda el Banco de Colombia. 
          .row.col-xl-11.m-auto(titulo="1880")
            p.mb-0 El Congreso promulga la Ley 39, que autoriza la creación de un banco nacional. 
          .row.col-xl-11.m-auto(titulo="1886")
            p.mb-0 Se crea la República de Colombia, el Decreto 104 ordena emitir billetes de un peso, eliminando el patrón de oro de nuestra economía. 
          .row.col-xl-11.m-auto(titulo="1894 - 1898")
            p.mb-0 Ocurre la guerra de los mil días. 
          .row.col-xl-11.m-auto(titulo="1905")
            p.mb-0 Se crea el Banco Central de Colombia, durante el Gobierno de Rafael Reyes. 
          .row.col-xl-11.m-auto(titulo="1922")
            p.mb-0 Ocurre una crisis que evidencia la escasez de medio circulante y la necesidad de dar estabilidad a la moneda y al crédito. El Congreso expidió varias leyes y autoriza al Gobierno para contratar una misión de expertos extranjeros para que asesoraran al país en la organización de la estructura monetaria y bancaria y dar la estabilidad al sistema. 
          .row.col-xl-11.m-auto(titulo="1929")
            p.mb-0 Se da inicio a la gran depresión en Estados Unidos, a partir de la caída de la bolsa de valores de Nueva York; esto trae grandes problemas económicos, como la crisis financiera, bajaron los precios y problemas sociales como el incremento del desempleo y el aumento de la pobreza. 



  
    
 

      
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
.cont_1_3, .cont_1_3 *
  position: relative
.cont_1_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(255,255,255)
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(232,250,249,1) 40%, rgba(232,250,249,1) 60%, rgba(232,250,249,0) 100%)
.cont_figura1, .cont_figura1 *
  position: relative
.cont_figura1:before
  content: ''
  position: absolute
  width: 100%
  left: 0
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/24.png)
  background-size: 100% 100%
.cont_figura2, .cont_figura2 *
  position: relative
.cont_figura2:before
  content: ''
  position: absolute
  width: 100%
  left: 0
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/25.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .cont_1_1:before
    background-size: cover
</style>
