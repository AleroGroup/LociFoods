<template>
  <v-content id="homepage">
    <section id="home">
    <v-layout row hidden-sm-and-down>
      <v-img :src='main'>
       <LociHeader />
          <v-layout column style="margin-left:100px">
            <div class="description" style="margin-top:170px"> Get Fresh, delicious <span class="secondary--text">Homecooked </span> Meals...</div>
          </v-layout>
          <v-btn dark large color="#0699CF" class="mt-3" style="margin-left:105px">Download App</v-btn>
      <img />
    </v-img>
    </v-layout>

    <div></div>
     <v-layout row wrap hidden-md-and-up>
      <v-img :src=' main_mobile' height="300">
       <LociHeader />
      <img />
    </v-img>
    </v-layout>
      <Home />
    </section>
    <section id="aboutus">
     <Aboutus />
    </section>

    <section id="ourproducts">
     <Ourproducts />
    </section>

    <section id="download">
     <Downloadapp />
    </section>

    <section id="contactus">
       <Contatctus />
    </section>
  </v-content>
</template>

<script>
import { VBtn } from 'vuetify/lib'
import LociHeader from '../components/Header'
import Home from '../components/pages/home'
import Aboutus from '../components/pages/about'
import Contatctus from '../components/pages/contact'
import Ourproducts from '../components/pages/ourproducts'
import Downloadapp from '../components/pages/download'
const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/qpt2onjfe/'

export default {
  name: 'home',
  components: {
    LociHeader,
    Home,
    Aboutus,
    Contatctus,
    Ourproducts,
    VBtn,
    Downloadapp
  },
  head: {
    title: {
      inner: 'Loci Foods',
      complement: 'Homepage'
    }
  },
  data: () => ({
    main: IMAGEKIT_BASE_URL + '/images/photos/Group_357_gpGHIcRtd.svg',
    main_mobile: IMAGEKIT_BASE_URL + '/loci/images/photos/img_N12h_ZdOT8.png'
  })
}
</script>
