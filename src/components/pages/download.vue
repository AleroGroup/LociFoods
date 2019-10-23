<template>
 <v-layout justify-center align-center>
   <v-card flat color="info lighten-5" height="200px" width="80%">
     <v-layout row align-center>
        <div class="mr-12 mt-10">
          <h1 class="display-1 mt-5 pl-12">Ready to get started?</h1>
          <h2 class="title pl-12 mt-3 font-weight-light"> Download the app today</h2>
        </div>
        <div class="ml12">
          <v-img :src="img" class="icon-btn mt-10"></v-img>
         </div>
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
