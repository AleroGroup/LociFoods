<template>
<v-toolbar flat color="transparent">
    <v-toolbar-title>
        <v-img :src='logo' :width="w" class="ml-5 logo"></v-img>
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
