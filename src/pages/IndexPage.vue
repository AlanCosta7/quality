<template>
  <q-page>
    <section class="section-1" >
      <div class="row items-center justify-center">
        <div class="col-xs-10 col-sm-5">
          <div>
            <img
              alt="logo"
              class="logo"
              src="https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/logo%2FLOGO_SEM%20FUNDO_PNG%20300DPIS_Prancheta%201%20co%CC%81pia%205_600x600.webp?alt=media&token=427f2d31-be48-43f6-9437-a84055fd49dc"
            >
          </div>
          <div >
            <h1 class="p1">Furniture that stands out:</h1>
            <h1 class="p2">In a world full of duplicates and dull furniture, we make it our mission to give our clients something they are truly proud of and excited to call their own.</h1>
            <div>
              <q-btn color="primary" rounded style="width: 170px;" label="Contact us" @click="onClick()" />
            </div>
          </div>
        </div>
        <div class="col-xs-10 col-sm-5 mobile-hide" >
          <q-avatar >
            <q-parallax class="borda" :speed="0.4" style="height: 700px;">
              <template v-slot:media>
                <img style="width: 500px; height: auto" src="../assets/fotos/sofa.png">
              </template>
            </q-parallax>
          </q-avatar>
        </div>
      </div>
    </section>

    <section class="bg-primary fit flex flex-center section-2" style="padding: 50px;">
      <div style="width: 880px;" class="text-center" :class="mobile?' q-my-lg':'q-ma-lg'">
        <h2 class="p1">Furniture Upholstery or Reupholstery done by the Experts with years of experience.</h2>
      </div>
      <div class="q-ma-lg">
        <q-list class="row items-end justify-center q-gutter-xl">
          <card v-for="(item, i) in listaServices" :key="i" :title="item.title"  :subtitle="item.text" :img="item.icon" />
        </q-list>
      </div>
    </section>

    <section>
      <!-- 463 0.15 -->
      <q-parallax :height="463" :speed="mobile?0:0.15" >
        <p class="text-white p3 z-top widthParalax" >Your style, our expertise: Upholstery for furniture that reflects your uniqueness.</p>
        <div class="dimmed"></div>
        <template v-slot:media >
          <img width="100vw" class="dimmed" src="../assets/fotos/paralax.jpg">
        </template>

      </q-parallax>
    </section>
 
    <section class="bg-white q-pa-xl">
      <div>
        <div><h6 class="p1 text-primary text-center">we proudly carry fabrics from:</h6></div>
        <div class="row items-center justify-center q-gutter-md">
          <q-list v-for="(item, i) in listaImg" :key="i">
            <q-img
              :src="item"
              width="150px"
              :ratio="1"
              spinner-color="primary"
              spinner-size="82px"
            />
          </q-list>
        </div>
      </div>
    </section>

    <section >
      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        padding
        arrows
        height="456px"
        class="bg-secondary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide v-for="(item, i) in listaTestemunho" :key="i" :name="i" class="column no-wrap flex-center">
          <div class="q-ma-lg text-center">
           {{ item.text }}
          </div>
          <div class="q-mt-md text-center">
           <q-rating
             v-model="item.star"
             size="1.5em"
             icon="star"
           />
          </div>
          <div class="q-mt-md text-center">
           {{ item.name }}
          </div>
        </q-carousel-slide>
       
      </q-carousel>
    </section>

  </q-page>
</template>

<script setup>
import { computed, ref } from 'vue'
import card from "../components/card.vue";
import { useGlobalStore } from '../stores/globalStore'
import { useRouter } from "vue-router";

const global = useGlobalStore()

let listaTestemunho = computed(() => global.listaTestemunho)
let listaServices = computed(() => global.listaServices)
const mobile = computed(() => global.mobile)

const router = useRouter();
let slide = ref(0)

const listaImg = ref([
  'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/fabrics%2F1_400x400.webp?alt=media&token=08e41613-c51f-4300-a538-945a9fcc4ac1',
  'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/fabrics%2F2_400x400.webp?alt=media&token=5a0a5ad0-f5c8-48d0-8be1-723b79b6d8c8',
  'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/fabrics%2F3_400x400.webp?alt=media&token=30965a74-0a8c-401c-848e-ac39ed5e4f97',
  'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/fabrics%2F4_400x400.webp?alt=media&token=5a928fe6-b714-45f1-b738-b1c687c571e1',
  'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/fabrics%2F5_400x400.webp?alt=media&token=8ab5eece-3eda-49e0-bf21-f44155d63034',
  'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/fabrics%2F6_400x400.webp?alt=media&token=c8c2f824-0204-4d27-bbde-da787e89f212',
  'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/fabrics%2F7_400x400.webp?alt=media&token=f749d2fe-06d9-4d53-a946-f66f20d4a981'
])

function onClick() {
  
  router.push({ name: "contact" });
}

</script>

<style scoped>
.q-avatar {
  position: absolute;
  height: auto;
  width: 700px;
  top: 10px;
  right: -110px;
  z-index: 0;
}

.borda {
  border: 5px solid #0169AD;
}

.logo {
  width: 100%;
  max-width: 400px;
  height: 150px;
  object-fit: cover;
}

.section-1 {
  position: relative;
  height: 88vh;
  z-index: 0;
}

.section-2 {
  position: relative;
  z-index: 1000;
}

.widthParalax {
  width: 80vw;
}

</style>