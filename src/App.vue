<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.banner-interno
  height: 160px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #B15815 !important
.curso-main-container > .container
  overflow: clip !important
.titulo-segundo:after
  border-left-color: #201144 !important
.banner-principal .tarjeta
  background-color: transparent !important
.titulo-principal.color-acento-contenido .titulo-principal__numero span
  color: #fff !important
.banner-principal-decorativo-1
  animation: float1 2s ease-in-out infinite alternate !important
  top: 50% !important
  right: 60% !important
.banner-principal-decorativo-2
  animation: float1 3s ease-in-out infinite alternate !important
  top: 30% !important
  right: 13% !important
.banner-principal-decorativo-3
  animation: float1 3s ease-in-out infinite alternate !important
  top: 63% !important
  right: 25% !important
.titulo-principal.color-acento-contenido .titulo-principal__numero
  background-color: #B15815 !important
.banner-principal__row .banner-principal__img
  padding-bottom: 0rem !important
.banner-principal__row .banner-principal__img img
  max-width: 260px
  margin: 0 auto
.cont_decorativo, .cont_decorativo *
  position: relative
  max-width: fit-content
.cont_decorativo:before
  content: ''
  position: absolute
  width: 90%
  right: 3%
  height: 67%
  top: 18%
  bottom: 15%
  background-color: #201144
  border-radius: 50px
@media screen and (max-width: 992px)
  .banner-principal .tarjeta
    background-size: cover !important
  .cont_decorativo:before
    height: 90%
    top: 5%
    bottom: 5%
    right: 6%
</style>
