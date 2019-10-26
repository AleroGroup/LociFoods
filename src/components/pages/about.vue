<template>
    <v-content>
        <v-layout column justify-center align-center mt-8>
            <v-flex xs12 md4>
            <v-layout column justify-center align-center>
                <div class="display-2 font-weight-light"> About Us</div>
                <v-flex xs12 md4 class="subtitle text-centered mt-5 pa-3"> The name Loci is a play on the word location and is the plural of locus, which means a place or locality in Latin. At Loci Foods we aim to create a healthy society through awareness and by providing products and services that leads to healthy eating habits.
                </v-flex>
            </v-layout>
            </v-flex>
             <v-flex xs12 md4 class="mt-10">
               <v-img :src="imageurl" class="img">
                 <v-layout row wrap justify-center align-center mt-7>
                 <v-card width="220" height="280" class="ma-6 pt-2 elevation-5">
                     <v-layout column justify-center align-center mt-4>
                        <v-img :src="image_1" width="90" class="mt-2 ml-2 mb-1" />
                         <span class='about_title text-centered title'> Vision</span>
                        <span class='about_title text-centered body-2 mb-2'> To Revolutionize Kenyan <br> Eating Habits</span>
                     </v-layout>
                 </v-card>
                 <v-card width="220" height="280" class="ma-6 pt-2  elevation-5" >
                     <v-layout column justify-center align-center>
                        <v-img :src="image_2" width="90" class="mt-3 ml-2 mb-3"/>
                         <span class='about_title text-centered title mb-2'> Mission</span>
                        <span class='about_title text-centered body-2'> To Provide an innovative <br> platform that connects<br> people to delicious and <br> healthy food. </span>
                     </v-layout>
                 </v-card>
                 </v-layout>
                 <img />
              </v-img>
            </v-flex>

      <!-- Mobile & Tablet -->
        </v-layout>
    </v-content>
</template>

<script>
const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/qpt2onjfe/'

export default {
  name: 'about',
  data: () => ({
    imageurl: IMAGEKIT_BASE_URL + '/images/photos/aboutus__A8BibP-Q1.png',
    image_1: IMAGEKIT_BASE_URL + '/images/icons/eye__icon_4PmAGsq34U.svg',
    image_2: IMAGEKIT_BASE_URL + '/images/mission__icon_32px6M4dp.svg'
  })
}
</script>

<style scoped>
  .img{
    width: 100vw;
  }
</style>
