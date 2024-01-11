<template>
    <section class="bg-secondary">
      <div>
          <q-img height="390px" src="https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/C4E84335-A24D-4046-98FC-39DA02A8B26B_1600x1600.webp?alt=media&token=30a14318-2d2f-47ca-83d7-c2975ed3931a">
            <div class="absolute-full text-subtitle2 flex flex-center p1">
              Services
            </div>
          </q-img>
      </div>
      <div>
        <qsection v-for="(item, i) in listaServices" :key="i" :img="item.img1" :title="item.title" :text="item.text" :direcao="item.direcao"  />
      </div>
    </section>
</template>
  
<script setup>
import { ref, computed } from "vue";
import qsection from '../components/Section.vue'
import { useGlobalStore } from '../stores/globalStore'

const global = useGlobalStore()
let listaServices = computed(() => global.listaServices)


</script>
  
