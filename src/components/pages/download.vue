<template>
 <v-layout justify-center align-center style="margin-top:200px;">
   <v-card flat color="info lighten-5" height="200px" width="80%">
     <v-layout row justify-center align-center mt-12>
        <v-layout column>
          <h1 class="display-1 mt-5" style="padding-left:160px">Ready to get started?</h1>
          <h2 class="title mt-3 font-weight-light"  style="padding-left:160px"> Download the app today</h2>
        </v-layout>
        <v-layout mr-12>
          <a href="https://play.google.com/store/apps/details?id=com.mobiteks.apps.locichef">
             <v-img :src="img" width="230"  style="margin-left:100px"></v-img>
          </a>
        </v-layout>
    </v-layout>
   </v-card>
 </v-layout>
</template>

<script>
const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/qpt2onjfe/'

export default {
  data: () => ({
    img: IMAGEKIT_BASE_URL + '/images/icons/google-play_RppXnWTVd.svg'
  })
}
</script>
<style scoped>
  .icon-btn{
    width: 213.44px;
    height: 62px;
  }
</style>
