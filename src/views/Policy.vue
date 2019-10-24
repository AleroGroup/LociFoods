<template>
  <v-content id="policy">
    <v-img :src='header'  style="z-index:1">
       <LociHeader />
      <img />
    </v-img>

    <v-layout column style="margin-left:100px; z-index:+1;margin-top:-300px">
      <div class="description mb-6"> Privacy Policy </div>
        </v-layout>
         <div id="introduction" style="margin-left:100px">
          <strong> Effective date: September 24, 2019 <br></strong><br>
           Loci foods ("us", "we", or "our") operates the Loci foods mobile application
           (hereinafter referred to as the "Service"). <br><br>
           This page informs you of our policiesregarding the collection, use, and disclosure
           of personal data when you use our Service and the choices you have associated with
           that data. Our Privacy Policy for Loci foods is created with the help of the Privacy
           Policies.com Privacy Policy Generator. <br><br>
           We use your data to provide and improve the Service. By using the Service,
           you agree to the collection and use of information in accordance with this policy.
           Unless otherwise defined in this Privacy Policy, the terms used in this Privacy
           Policy have the same meanings as in our Terms and Conditions.
         </div>
  </v-content>
</template>

<script>
import LociHeader from '../components/Header2'
const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/qpt2onjfe/'

export default {
  name: 'policy',
  data: () => ({
    header: IMAGEKIT_BASE_URL + '/images/photos/main-2_qWvfJ3o_F.svg'
  }),
  components: {
    LociHeader
  }
}
</script>
