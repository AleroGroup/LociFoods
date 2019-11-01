<template>
<v-layout column justify-center align-center mt-12>
    <v-flex xs12 md4>
      <v-layout column justify-center align-center>
        <div class="display-2 font-weight-light mb-10"> Our Products</div>
      </v-layout>
    </v-flex>
  <v-content class="ml-10 hidden-sm-and-down">
    <v-layout row justify-center align-center>
         <v-card flat width="360" height='400' class="ml-2  mb-8">
           <v-img :src="image_1" width="330" height="300" class="product_imgs" />
           <h1 class="title-1 secondary--text mt-5 mb-2">Explore our homecooked <br> Menu</h1>
           <div class="box">
            <svg class="mt-4">
              <rect width="11" height="150"
              style="fill:#FD7D12;fill-opacity:0.3;" />
            </svg>
            <p class="body-2 info--text mt-5 text-justify mr-12" style="width:2000px">
            Sometimes you don’t want to cook or eat out, but you crave something
            homecooked that takes you straight back to your mom’s or aunty’s
            kitchen. Through the loci foods application, you are able to locate
            delicious homecooked food in your area.
          </p>
          </div>
         </v-card>
         <v-card flat width="360" height='400' class="ml-12  mb-8">
           <v-img :src="image_2" width="330" height="300" class="product_imgs" />
           <h1 class="title-1 secondary--text mt-5 mb-12">Eat well live longer</h1>
           <div class="box">
            <svg class="mt-4">
              <rect width="11" height="150"
              style="fill:#FD7D12;fill-opacity:0.3;" />
            </svg>
            <p class="body-2 info--text mt-5 text-justify mr-12" style="width:2000px">
            Today, people are becoming more aware of the need to eat healthy in order
            to live an optimal and long life. In Kenya there is a need for customized
            information that allows people to make the right decisions about what to
            eat.
          </p>
        </div>
       </v-card>
    </v-layout>
     </v-content>
    <v-content class="ml-10 hidden-sm-and-down" style="margin-top:160px">
    <v-layout row justify-center align-center>
      <v-card flat width="360" height='400' class="ml-2 mb-8">
        <v-img :src="image_3" width="330" height="300" class="product_imgs mt-10" />
        <h1 class="title-1 secondary--text mt-5 mb-2">Our delivery services provide you convinience.</h1>
         <div class="box">
            <svg class="mt-4">
            <rect width="11" height="130"
            style="fill:#FD7D12;fill-opacity:0.3;" />
            </svg>
         <p class="body-2 info--text mt-5 text-justify mr-12" style="width:2000px">
           Whether you are a busy working professional, a university student,
           or someone who likes diverse and high quality food near you at an
           affordable price, Loci Foods, got you covered.
          </p>
         </div>
       </v-card>
         <v-card flat width="360" height='400' class="ml-12  mb-8">
           <v-img :src="image_4" width="330" height="300" class="product_imgs mt-10"/>
            <h1 class="title-1 secondary--text mt-5 mb-10" >We leverage on technology</h1>
           <div class="box">
              <svg class="mt-4">
              <rect width="11" height="130"
              style="fill:#FD7D12;fill-opacity:0.3;" />
              </svg>
              <p class="body-2 info--text mt-5 text-justify mr-12" style="width:2000px">
               Loci leverages on technology and data with the expert knowledge
               of nutritionists and health professionals to address these questions.
              </p>
           </div>
       </v-card>
    </v-layout>
  </v-content>

  <v-content class="ml-10 hidden-md-and-up">
    <v-layout row wrap justify-center align-center>
         <v-card flat width="360" height='400' class="ml-2  mb-8">
           <v-img :src="image_1" width="330" height="300" class="product_imgs" />
           <h1 class="title-1 secondary--text mt-5 mb-2">Explore our homecooked <br> Menu</h1>
         </v-card>
         <v-card flat width="360" height='400' class="ml-1  mb-8">
           <v-img :src="image_2" width="330" height="300" class="product_imgs" />
           <h1 class="title-1 secondary--text mt-5 mb-12">Eat well live longer</h1>
       </v-card>
    </v-layout>
    <v-layout row wrap justify-center align-center>
      <v-card flat width="360" height='400' class="ml-2 mb-8">
        <v-img :src="image_3" width="330" height="300" class="product_imgs mt-1" />
        <h1 class="title-1 secondary--text mt-5 mb-2">Our delivery services provide you convinience.</h1>
       </v-card>
         <v-card flat width="360" height='400' class="ml-1  mb-8">
           <v-img :src="image_4" width="330" height="300" class="product_imgs mt-1"/>
            <h1 class="title-1 secondary--text mt-5 mb-10" >We leverage on technology</h1>
       </v-card>
    </v-layout>
  </v-content>
</v-layout>
</template>

<script>
const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/qpt2onjfe/'

export default {
  name: 'App',
  data: () => ({
    image_1: IMAGEKIT_BASE_URL + '/images/photos/oursleep_1_jLyKyCxna.png',
    image_2: IMAGEKIT_BASE_URL + '/images/photos/oursleep_2_rX6weCAb5.png',
    image_3: IMAGEKIT_BASE_URL + 'images/photos/oursleep_3_0gxSHhXbK.png',
    image_4: IMAGEKIT_BASE_URL + '/images/photos/oursleep_4_AkxobcK_cI.png'

  })
}
</script>
