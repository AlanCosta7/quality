<template>
  <section >
    <div>
      <q-img height="390px" src="https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/295996780_498173438778613_6214877004694326430_n_1600x1600.webp?alt=media&token=df0e6abf-d70e-4ce9-ac65-855952d18b8a">
        <div class="absolute-full text-subtitle2 flex flex-center p1">
          Gallery
        </div>
      </q-img>
    </div>
    <div class="fit row items-start justify-around q-pa-xl">
      <q-list
        v-for="(item, i) in listaServices"
        :key="i"
        class="row items-start justify-around"
      >
        <q-card flat style="width: 293px" @click="onRouter(item)" class="q-ma-lg" >
          <q-img
            :src="item.img2"
            width="100%"
            style="border-radius: 20px"
            :ratio="1"
          />
          <q-card-section>
            <div class="text-h6 text-center text-white text-bold text-uppercase">
              {{ item.title }}
            </div>
          </q-card-section>
        </q-card>
      </q-list>
    </div>
  </section>
</template>
  
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useGlobalStore } from '../stores/globalStore'

const router = useRouter();

const global = useGlobalStore()
let listaServices = computed(() => global.listaServices)

async function onRouter(item) {
  router.push({ name: "listaimg", params: { id: item.link } });
}
</script>
  
  <style scoped>
.q-card {
  background: transparent;
}
</style>
  