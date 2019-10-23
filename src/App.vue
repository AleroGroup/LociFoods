<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AOS from 'aos'
AOS.init()
export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>
