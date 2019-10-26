<template>
<v-toolbar fixed flat color="transparent" app class="ml-10">
    <v-toolbar-title>
       <router-link to="/"><v-img :src='logo' :width="w" class="ml-7 logo"></v-img></router-link>
    </v-toolbar-title>
    <v-layout mt-10 ml-4>
      <router-link to='/' class="mt-3">
        <a href="#home" class="links_item active">Home</a>
      </router-link>
      <router-link to='/' class="mt-3">
        <a href="#aboutus" class="links_item">About us</a>
      </router-link>
      <router-link to='/' class="mt-3">
        <a href="#ourproducts" class="links_item">Our Products</a>
      </router-link>
      <router-link to='/' class="mt-3">
         <a href="#contactus" class="links_item">Contact us</a>
      </router-link>
     <router-link to='/policy' class="links_item mt-3">Policy page</router-link>
    </v-layout>
</v-toolbar>
</template>

<script>
const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/qpt2onjfe/'

export default {
  data: () => ({
    // image size
    logo: IMAGEKIT_BASE_URL + '/loci/images/Loci_logo_d9jan0ikQ.svg',
    logo2: IMAGEKIT_BASE_URL + '/loci/images/icons/logo_white_BgOzczI5M.svg',
    w: '70'
  })
}
</script>
