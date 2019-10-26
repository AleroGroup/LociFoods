<template>
<v-toolbar flat color="transparent" app class="ml-10">
    <v-toolbar-title>
       <router-link to="/"><v-img :src='logo' :width="w" class="ml-7 logo hidden-sm-and-down"></v-img></router-link>
       <router-link to="/"><v-img :src='logo_white' :width="w" class="ml-7 logo hidden-md-and-up"></v-img></router-link>
    </v-toolbar-title>
    <v-layout justify-start mt-12 ml-6 class="hidden-sm-and-down">
      <router-link to='/' class="links_item active">Home</router-link>
      <a href="#aboutus" class="links_item">About us</a>
      <a href="#ourproducts" class="links_item">Our Products</a>
      <a href="#contactus" class="links_item">Contact us</a>
     <router-link to='/policy' class="links_item">Policy page</router-link>
    </v-layout>
    <v-spacer />
    <v-layout class="hidden-md-and-up">
    <v-layout justify-end>
     <v-menu>
            <template v-slot:activator="{ on }">
        <v-btn
          color="white"
          dark
          icon
          v-on="on"
          x-large
        >
         <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
          <v-list style="width:150px">
            <v-list-tile>
              <v-list-tile-content>
                <v-layout column>
                    <router-link to='/' class="links_item active">Home</router-link>
                   <a href="#aboutus" class="links_item">About us</a>
                   <a href="#ourproducts" class="links_item">Our Products</a>
                   <a href="#contactus" class="links_item">Contact us</a>
                    <router-link to='/policy' class="links_item">Policy page</router-link>
                </v-layout>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-layout>
    </v-layout>
</v-toolbar>
</template>

<script>
const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/qpt2onjfe/'

export default {
  data: () => ({
    // image size
    logo: IMAGEKIT_BASE_URL + '/loci/images/Loci_logo_d9jan0ikQ.svg',
    logo_white: IMAGEKIT_BASE_URL + '/loci/images/icons/logo_white_BgOzczI5M.svg',
    w: '70'
  })
}
</script>
