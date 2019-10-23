<template>
 <v-content>
     <v-layout row justify-center style="margin-top:200px;margin-left:20px" class="download_section">
      <v-card flat width="77%" color="info lighten-5">
        <v-layout column pa-6>
            <h1 class="display-1 mt-5 pl-12">Ready to get started?</h1>
            <h2 class="title pl-12 font-weight-light"> Download the app today</h2>
        </v-layout>
      </v-card>
      <v-card flat width="77%" color="info lighten-5">
        <v-layout column pa-6>
            <v-img :src="img"></v-img>
        </v-layout>
      </v-card>
    </v-layout>
 </v-content>
</template>

<script>
const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/qpt2onjfe/'

export default {
  data: () => ({
    img: IMAGEKIT_BASE_URL + '/images/icons/google-play_RppXnWTVd.svg'
  })
}
</script>
