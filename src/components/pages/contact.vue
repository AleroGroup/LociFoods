<template>
<v-content>
     <v-layout column mt-8>
        <v-flex xs12 md4 >
        <v-layout column justify-center align-center>
            <div class="display-2 font-weight-light"> Contact Us</div>
            <v-layout column justify-start="">
                <v-flex xs12>
                  <v-row class="mt-6">
                    <img :src="icon_1" style="width:50px!important; height:50px!important">
                    <span class="mt-3 ml-4">loci_foods</span>
                  </v-row>
                </v-flex>
                <v-flex xs12>
                  <v-row class="mt-6">
                    <img :src="icon_2" style="width:50px!important; height:50px!important">
                    <span class="mt-3 ml-4">locifoods@gmail.com</span>
                  </v-row>
                </v-flex>
            </v-layout>
        </v-layout>
      </v-flex>
    </v-layout>
</v-content>
</template>

<script>
const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/qpt2onjfe/'

export default {
  data: () => ({
    icon_1: IMAGEKIT_BASE_URL + '/images/mdi_insagram_GGDk8pV3i.png',
    icon_2: IMAGEKIT_BASE_URL + '/images/mdi_linkedin__U6Ub2uu8x.png',
    icon_3: IMAGEKIT_BASE_URL + '/images/mdi_email_BM05h89-xy.svg'
  })
}

</script>

<style>

</style>
