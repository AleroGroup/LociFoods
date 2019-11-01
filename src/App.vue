<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import AOS from 'aos'
import Footer from './components/Footer'
AOS.init()
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    Footer
  },
  head: {
    title: {
      inner: 'Loci Foods',
      complement: 'Homepage'
    }
  }
}
</script>
