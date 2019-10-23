<template>
    <v-content>
    <v-layout column justify-center align-center ma-8>
       <v-flex xs12>
         <div class="display-2 font-weight-light"> Why Choose Us?</div>
       </v-flex>
       <v-layout row ma-1>
       <v-flex v-for="item in items" :key="item.id">
          <v-card flat color="transparent" class="mt-6 ml-8 mr-8">
             <v-img :src="item.url" width="150"></v-img>
             <v-card-text class="main_title">
                 {{ item.title}}
             </v-card-text>
          </v-card>
         </v-flex>
       </v-layout>
       <v-flex xs12>
         <a href="#aboutus"> <v-img :src='image' class="pulse"/> </a>
       </v-flex>
    </v-layout>
    </v-content>
</template>

<script>
const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/qpt2onjfe/'

export default {
  data: () => ({
    items: [
      {
        url: IMAGEKIT_BASE_URL + '/loci/Organic_home_cooked_BH4UwxYZ3.svg',
        title: 'Organic meals'
      },
      {
        url: IMAGEKIT_BASE_URL + '/loci/images/icons/Home_delivery_Yr97MhUvXZ.svg',
        title: 'Home delivery'
      },
      {
        url: IMAGEKIT_BASE_URL + '/loci/images/Pocket__money_gzXwV7Mi7.svg',
        title: 'Pocket friendly'
      }
    ],
    image: IMAGEKIT_BASE_URL + 'images/mdi_keyboard_arrow_down_u1f4Vrzg_.svg'
  })
}
</script>

<style scoped>
.pulse{
  animation: pulse 2s infinite;
  opacity: 0.7;
  width: 55px;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0); }
  50% {
    -webkit-transform: translate(0, 10px);
            transform: translate(0, 10px); }
  100% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0); } }

@keyframes pulse {
  0% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0); }
  50% {
    -webkit-transform: translate(0, 10px);
            transform: translate(0, 10px); }
  100% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0); } }
</style>
