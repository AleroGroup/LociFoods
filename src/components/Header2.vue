<template>
<v-toolbar fixed flat color="transparent" app class="ml-10">
    <v-toolbar-title>
       <router-link to="/"><v-img :src='logo' :width="w" class="ml-1 logo"></v-img></router-link>
    </v-toolbar-title>
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
