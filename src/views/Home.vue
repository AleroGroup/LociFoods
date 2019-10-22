<template>
  <v-content id="home">

    <LociHeader />
    <section id="About us">

    </section>

    <section id="Our Products">

    </section>

    <section id="Contatct us">

    </section>

    <section id="Policy">

    </section>
  </v-content>
</template>

<script>
import LociHeader from '../components/Header'

export default {
  name: 'home',
  components: {
    LociHeader
  },
  head: {
    title: {
      inner: 'Loci Foods',
      complement: 'Homepage'
    }
  }
}
</script>
