<template>
    <v-content>
    <v-layout column justify-center align-center class="hidden-sm-and-down">
       <v-flex xs12 md4>
         <div class="display-1 mt-12"> Why Choose Us?</div>
       </v-flex>
       <v-layout row justify-center align-center ml-3>
          <v-card flat color="transparent" class="mt-4 mr-8">
             <v-img :src="item_1" width="140" class="ml-3"></v-img>
             <v-card-text class="main_title">
                Organic meals
             </v-card-text>
          </v-card>

          <v-card flat color="transparent" class="mt-4 mr-8">
             <v-img :src="item_2" width="140" class="ml-3"></v-img>
             <v-card-text class="main_title">
                 Home delivery
             </v-card-text>
          </v-card>

          <v-card flat color="transparent" class="mt-4 mr-8">
             <v-img :src="item_3" width="140" class="ml-3"></v-img>
             <v-card-text class="main_title">
                Pocket friendly
             </v-card-text>
          </v-card>
       </v-layout>
       <v-flex xs12>
         <a href="#aboutus"> <v-img :src='image' class="pulse"/> </a>
       </v-flex>
    </v-layout>

<!-- Mobile & Tablet -->
     <v-layout column justify-center align-center class="hidden-md-and-up">
       <v-flex xs12 md4>
         <div class="display-1 mt-12"> Why Choose Us?</div>
       </v-flex>
       <v-layout row justify-center align-center ml-12>
       <v-flex>
          <v-card flat color="transparent" class="mt-4 mr-8">
             <v-img :src="item_1" width="140" class="ml-3"></v-img>
             <v-card-text class="main_title">
                Organic meals
             </v-card-text>
          </v-card>

          <v-card flat color="transparent" class="mt-4 mr-8">
             <v-img :src="item_2" width="140" class="ml-3"></v-img>
             <v-card-text class="main_title">
                 Home delivery
             </v-card-text>
          </v-card>

          <v-card flat color="transparent" class="mt-4 mr-8">
             <v-img :src="item_3" width="140" class="ml-3"></v-img>
             <v-card-text class="main_title">
                Pocket friendly
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
    item_1: IMAGEKIT_BASE_URL + '/loci/Organic_home_cooked_BH4UwxYZ3.svg',
    item_2: IMAGEKIT_BASE_URL + '/loci/images/icons/Home_delivery_Yr97MhUvXZ.svg',
    item_3: IMAGEKIT_BASE_URL + '/loci/images/Pocket__money_gzXwV7Mi7.svg',
    image: IMAGEKIT_BASE_URL + 'images/mdi_keyboard_arrow_down_u1f4Vrzg_.svg'
  })
}
</script>
