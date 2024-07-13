<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Microcrédito 
    
    .col-xl-10
      .row
        .col(style="place-self:center;" data-aos="fade-right")
          .cont_3_1
            .d-flex
              i.fas.fa-quote-left.me-3(style="color:#201144;font-size:30px;")
              div.mt-2
                h5.mb-0 Pequeños préstamos que se conceden a personas con un reducido nivel de recursos económicos, es decir aquellas que carecen de las garantías suficientes para acceder al sistema bancario tradicional, pero que tienen capacidad emprendedora, estos recursos son destinados a la pequeña empresa
                .text-end.d-flex.mt-3.flex-wrap.justify-content-end
                  p.mb-0.me-3.m-auto (Gómez, 2016)
                  i.fas.fa-quote-right(style="color:#201144;font-size:30px;")
        .col-auto.d-none.d-md-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/1.svg")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_1 3.1 Características 
    
    p(data-aos="fade-right") Los microcréditos tienen características particulares según la Asobancaria, tales como: 

    .row.mt-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/2.png")
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Financiación")
            p Según la Ley, deben ser para las empresas o negocios que cumplan con las condiciones de una microempresa: 
            ul.lista-ul
              li.d-flex
                i.fas.fa-check-circle(style="color:#B15815;")
                div Entre 1 y 10 empleados. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#B15815;")
                div Que sus activos totales se encuentren 1 y 500 SMMLV. 
          .row(titulo="Saldo de endeudamiento")
            p No puede exceder 120 SMMLV al momento de la aprobación. 
          .row(titulo="Fuente de pago de crédito")
            p Debe provenir de los ingresos de la microempresa. No se entrega a personas asalariadas. 
          .row(titulo="Tiene comisión Mipyme")
            p No está incluída en los intereses y se puede cobrar si el monto de la operación no supera los 25 SMMLV. 
          .row(titulo="Tasa de usura")
            p Importante destacar que el cálculo de esta tasa que lo certifica la Superintendencia Financiera de Colombia, es diferente al de créditos de consumo. Esta variación se debe a los costos administrativos que implican las operaciones de microcrédito, como el conocimiento del cliente y el riesgo que asume el banco al prestar sus recursos. 
          .row(titulo="Periodos de gracia o no pago")
            p Pueden existir estos periodos, inclusive puede haber devolución parcial o total de los recursos, dependiendo del éxito o fracaso del proyecto. 
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_2 3.2 Tipos de microcrédito 
    
    p(data-aos="fade-right") Existen dos tipos de microcrédito y con ellos se abarca todo el mercado: 

    .cont_3_2.mt-4.pb-5
      .row.mt-4
        .col-lg.mb-4.mb-lg-0.pe-lg-0
          .h-100.p-4.p-lg-5.cont_figura1(style="background-color:#178D89;border-radius:20px 0px 0px 20px;position:relative;" data-aos="fade-right")
            figure.text-center
              img(src="@/assets/curso/tema3/3.svg" style="max-width:250px;display:inline;")
            .text-white.mb-5.mt-3
              h5 Individual
              p Este esquema es similar a los créditos de la banca tradicional, el préstamo se entrega a una persona para actividades productivas. Es muy personal el acompañamiento a los clientes, generalmente se solicita un aval o garantía para que el crédito sea autorizado. 
        .col-lg.ps-lg-0
          .h-100.p-4.p-lg-5.cont_figura2(style="background-color:#D2F5F4;border-radius:0px 20px 20px 0px;position:relative;" data-aos="fade-left")
            figure.text-center
              img(src="@/assets/curso/tema3/4.svg" style="max-width:250px;display:inline;")
            .mb-5.mt-3
              h5 Grupal
              p Vázquez (2018), dice que estos microcréditos son dirigidos a personas que al no contar con garantías propias, pueden formar grupos de más de cinco personas de la misma comunidad, para responder en conjunto con el crédito. 

      p.fw-bold.mt-4(data-aos="fade-right") A continuación, se hace un listado de algunas de las características del grupal: 

      .col-xl-11.mt-4
        .row
          .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
            ul.lista-ul
              li.d-flex
                i.fas.fa-check-circle(style="color:#B15815;")
                div Las personas deben conocerse entre sí y tener confianza. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#B15815;")
                div Se otorga préstamo individual a cada uno de los que conforma el grupo. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#B15815;")
                div Los pagos se realizan de forma semanal o quincenal y el grupo se reúne para juntar el pago. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#B15815;")
                div Si uno de los integrantes no cumple, el grupo se hace responsable del pago, es decir, la garantía es solidaria. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#B15815;")
                div En caso que alguno de los integrantes incumpla con el pago, todos los miembros del mismo serán reportados con una nota negativa ante el Buró de Crédito. 
          .col-lg-3(data-aos="fade-left")
            figure.m-auto.col-9.col-md-8.col-lg-12
              img(src="@/assets/curso/tema3/5.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_3 3.3 Requisitos  
    
    .cont_3_3.pb-5
      p.fw-bold(data-aos="fade-right") Estos dependen de la entidad a la que el cliente recurra y el capital que necesite. Habitualmente son: 
      .row.mt-4
        .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
          ul.lista-ul
            li.d-flex
              i.fas.fa-check-circle(style="color:#B15815;")
              div Personas naturales y jurídicas. 
            li.d-flex
              i.fas.fa-check-circle(style="color:#B15815;")
              div Deben tener experiencia mínima de un año en la actividad económica. 
            li.d-flex
              i.fas.fa-check-circle(style="color:#B15815;")
              div El endeudamiento no debe sobrepasar 120 SMMLV y los activos totales deben estar por debajo de los 500 SMMLV, excluyendo la vivienda. 
        .col-lg-3(data-aos="fade-left")
          figure.m-auto.col-9.col-md-8.col-lg-12
            img(src="@/assets/curso/tema3/6.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_4 3.4 Comisión
    
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.h-100(style="background-color:#201144;border-radius:15px;")
          .row
            .col-auto.d-none.d-md-block(style="place-self:end;")
              figure
                img(src="@/assets/curso/tema1/6.svg")
            .col
              h4(style="color:#22CAC5;") Podcast Comisión
              p.text-white Lo invitamos a escuchar el siguiente pódcast, para conocer más sobre la comisión. 
              TarjetaAudio.color-primario.mt-4(
              texto="Podcast Comisión"
              :audio="require('@/assets/componentes/audios/podcast_002.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-lg-4(data-aos="fade-left")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#F6EDE6;border-radius:8px;")
          p.mb-0 El Gobierno de Colombia, a través del Ministerio de Comercio, Industria y Turismo, busca introducir nuevas obligaciones a cumplir por los operadores de microcréditos que quieran cobrar una Comisión MiPymes a sus clientes, dentro de las cuales incluye los honorarios y comisiones aplicables al microcrédito. En el artículo 39 de la Ley 590 de 2000 y la Resolución 1 de 2007 del Consejo Superior de Microfinanzas, se relacionan el cobro de honorarios y comisiones en las operaciones de microcrédito y se definen así: 
    
    .row.mt-4
      .col-lg.mb-4.mb-lg-0.pe-lg-0
        .h-100.p-4.p-lg-5.cont_figura1(style="background-color:#178D89;border-radius:20px 0px 0px 20px;position:relative;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema3/7.svg" style="max-width:130px;display:inline;")
          .text-white.mb-5.mt-3
            h5 Honorarios
            p Remuneración que percibe quien otorga el microcrédito por la asesoría técnica especializada al microempresario, en relación con la empresa o la actividad económica que desarrolla, así como las visitas que deben realizarse como verificación de dicha actividad. 
      .col-lg.ps-lg-0
        .h-100.p-4.p-lg-5.cont_figura2(style="background-color:#D2F5F4;border-radius:0px 20px 20px 0px;position:relative;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/8.svg" style="max-width:130px;display:inline;")
          .mb-5.mt-3
            h5 Comisiones
            p Remuneración que percibe quien otorga el microcrédito por el estudio de la operación crediticia, la verificación de las referencias de los codeudores y la cobranza especializada de la obligación. (Ministerio de Comercio, Industria y Turismo, 2015) 
    
    p.mt-5(data-aos="fade-right") Continuando con el Ministerio de Comercio, Industria y Turismo (2015) y de acuerdo con la Ley, la comisión Mipyme remunera las actividades de conocimiento, seguimiento, acompañamiento y educación financiera al microempresario que realiza las IMF, las cuales son el insumo primordial del estudio de riesgo y viabilidad del microcrédito, al tener como objeto a personas excluidas de los sistemas tradicionales de información financiera (centrales de riesgo). 

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .h-100.p-4(style="background-color:#F3F9FF;border-radius:8px;")
          p Para su cobro, es necesario que el monto de endeudamiento del cliente en el mercado no supere los 120 salarios mínimos mensuales legales vigentes (SMMLV) en Colombia, el monto de la operación puntual no supere los 25 SMMLV y su tarifa no podrá ser superior al 7.5 % anual sobre el saldo insoluto del crédito, para créditos inferiores a 4 SMMLV, o del 4.5 % anual para los que igualen o superen dicho monto. 
          p.mb-0 La cantidad de dinero solicitada para un microcrédito responderá a la finalidad del proyecto que se quiere financiar y, desde luego, a la capacidad de endeudamiento. El monto solicitado implica el pago de intereses y estos deben ser equivalentes al capital que se ha solicitado.
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/9.png")
    
    .row.mt-4
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/10.svg")
      .col(style="place-self:center;" data-aos="fade-left")
        p.mb-0 Los plazos dependen en gran medida del monto, y la capacidad de endeudamiento, a mayor plazo la cuota disminuirá, pero esto implica un costo mayor en los intereses, contrario sucederá cuando el plazo sea menor. 
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_5 3.5 Tasa y cuota
    
    p(data-aos="fade-right") Las tasas de interés en Colombia tienen límites determinados, por lo que se trata de una modalidad utilizada sobre todo por microempresas que ya presentan cierta estabilidad y un negocio favorable sobre la marcha. 

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/11.png")
      .col-lg-8(data-aos="fade-left")
        .h-100.p-4(style="background-color:#F6EDE6;border-radius:8px;")
          p Que se trate de un microcrédito no implica que el monto obtenido sea pequeño como podría indicar su denominación. En realidad, este tipo de asistencias se encuentran reguladas en el marco del sistema financiero del país y están bien precisados en diversos artículos de la normativa legal. 
          p.mb-0 Esa es la razón por la cual en los microcréditos se cuenta con tasas determinadas de interés y condiciones especiales en cuanto a los plazos de amortización que son utilizados para la financiación de proyectos que se encuentran en funcionamiento (Educar, 2019).

    p.mt-4(data-aos="fade-right") Ahora, la cuota es el valor del pago que se pacta entre las partes, generalmente las cuotas son mensuales, sin embargo, dependerá del destino específico del microcrédito y de las políticas de cada entidad su cumplimiento y su concepción se hace por medio de un contrato.  

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_6 3.6 Ventajas y desventajas del microcrédito 
    
    p(data-aos="fade-right") Educar (2019), dice que la solicitud de un microcrédito tiene como gran ventaja el hecho que la persona se motive a realizar mejor las cosas, comience a ver el futuro con otra mentalidad, elabore planes de crecimiento tanto personal como financiero y mayormente, busque asesorías con lo que se está realizando. Esa es la clave del éxito del emprendedor. 

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#E8FAF9;border-radius:8px;")
          p Los microcréditos tienen un costo superior a los préstamos habituales. Asimismo, además al tratarse de un crédito que no exige prácticamente garantías al solicitante, la entidad o empresa encargada, debe asumir el riesgo que conlleva este crédito, a través de los intereses por dicho servicio. 
          p.mb-0.fw-bold Algunas de las ventajas y desventajas más comunes son las siguientes: 
      .col-lg-4(data-aos="fade-right")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/12.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/12.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.text-white.pe-5 #[span(style="color:#22CAC5 !important;") Ventajas]
    
    .row.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .h-100.p-4.cont_hover1(style="background-color:#22CAC5;border-radius:23px;")
          figure.text-center
            img(src="@/assets/curso/tema3/13.svg" style="max-width:100px;display:inline;")
          .mt-4
            h5.text-white.mb-0.m-auto.p-1.ps-4.pe-4(style="background-color:#201144;max-width:fit-content;") Formar una empresa familiar
            p.mt-4 Gran cantidad de solicitantes enlazan a los integrantes de su familia porque son ellos quienes aportan una gran ayuda a lo que sería su negocio. Esto termina por generar un lazo fuerte en lo que respecta a la prosperidad del negocio, el ingreso es propio y nace una empresa familiar. 
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .h-100.p-4.cont_hover1(style="background-color:#22CAC5;border-radius:23px;")
          figure.text-center
            img(src="@/assets/curso/tema3/14.svg" style="max-width:100px;display:inline;")
          .mt-4
            h5.text-white.mb-0.m-auto.p-1.ps-4.pe-4(style="background-color:#201144;max-width:fit-content;") Menores tasas de interés 
            p.mt-4 Suele suceder que en los microcréditos se cedan a una tasa de interés por debajo de lo habitual, y se desembolsan teniendo en cuenta la capacidad de pago del deudor, lo que les da facilidad a los solicitantes para cancelar, esto les impide endeudarse por encima de lo que esperan. 
      .col-lg.col-md-9(data-aos="zoom-in")
        .h-100.p-4.cont_hover1(style="background-color:#22CAC5;border-radius:23px;")
          figure.text-center
            img(src="@/assets/curso/tema3/15.svg" style="max-width:100px;display:inline;")
          .mt-4
            h5.text-white.mb-0.m-auto.p-1.ps-4.pe-4(style="background-color:#201144;max-width:fit-content;") Obtienen buena reputación 
            p.mt-4 Cuando el banco o el estado le cede el préstamo y el solicitante cancela a tiempo, obtiene buena reputación para la obtención de otros microcréditos o en tal caso, que se requiera un crédito. Esto permite que las personas sean mucho más responsables con los pagos de aquellas deudas que genera el préstamo. 
      
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/12.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.text-white.pe-5 #[span(style="color:#22CAC5 !important;") Desventajas]
    
    .row.justify-content-center
      .col-lg-4.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .h-100.p-4.cont_hover1(style="background-color:#22CAC5;border-radius:23px;")
          figure.text-center
            img(src="@/assets/curso/tema3/16.svg" style="max-width:100px;display:inline;")
          .mt-4
            h5.text-white.mb-0.m-auto.p-1.ps-4.pe-4(style="background-color:#201144;max-width:fit-content;") Desviación del dinero solicitado 
            p.mt-4 Es cuando el dinero es destinado a objetivos muy diferentes al estipulado. Una gran cantidad de personas cuando cumplen con los requisitos y les es liberado el dinero, lo invierten en otras cosas como electrodomésticos para el hogar, artículos personales u otro tipo de gastos que no generan ganancias. Se debe tener en cuenta que el microcrédito es para invertir y generar más ingresos, el cual no debe confundirse con lo que son los créditos personales, los cuales se piden para gastar y envolver ingresos futuros. 
      .col-lg-4.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .h-100.p-4.cont_hover1(style="background-color:#22CAC5;border-radius:23px;")
          figure.text-center
            img(src="@/assets/curso/tema3/17.svg" style="max-width:100px;display:inline;")
          .mt-4
            h5.text-white.mb-0.m-auto.p-1.ps-4.pe-4(style="background-color:#201144;max-width:fit-content;") Bajo monto del préstamo 
            p.mt-4 El microcrédito se ve debilitado cuando al solicitante se le aprueba poco dinero para su proyecto, debito a que su capacidad de pagar es la que el estudio arroja. Esto hace que la persona cancele el microcrédito o más adelante se vea forzado a una deuda mucho mayor, lo que implica que no le fue suficiente el monto aprobado. 






</template>

<script>
export default {
  name: 'Tema3',
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
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 70%
  height: 60%
  right: -7px
  bottom: -10px
  background-color: #D2F5F4
.acordion__accion__btn--b
  border: 1px solid #FDB641
  background-color: #FDB641
.acordion .tarjeta
  background-color: #201144
.acordion .tarjeta *
  color: #fff
.acordion .acordion__titulo h3
  color: #fff
.acordion .tarjeta.acordion__activo
  background-color: #E8FAF9
.acordion .tarjeta.acordion__activo *
  color: #12263F
.acordion__accion__btn--b i
  color: #12263F
.cont_3_2, .cont_3_2 *
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 70%
  bottom: 0
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
.cont_3_3, .cont_3_3 *
  position: relative
.cont_3_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  bottom: 0
  background: rgb(255,255,255)
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(232,250,249,1) 40%, rgba(232,250,249,1) 60%, rgba(232,250,249,0) 100%)
.cont_hover1
  transition: all .4s ease-in-out
  cursor: pointer
.cont_hover1:hover
  background-color: #EFDDCF !important
</style>
