<template>
<v-toolbar fixed flat color="transparent" app class="ml-10">
    <v-toolbar-title>
        <v-img :src='logo' :width="w" class="ml-1 logo"></v-img>
    </v-toolbar-title>
    <v-layout justify-start mt-12 ml-6>
      <a href="#home" class="links_item active">Home</a>
      <a href="#aboutus" class="links_item">About us</a>
      <a href="#ourproducts" class="links_item">Our Products</a>
      <a href="#contactus" class="links_item">Contact us</a>
    </v-layout>
</v-toolbar>
</template>

<script>
const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/qpt2onjfe/'

export default {
  data: () => ({
    // image size
    logo: IMAGEKIT_BASE_URL + '/loci/images/Loci_logo_d9jan0ikQ.svg',
    w: '80'
  })
}
</script>
