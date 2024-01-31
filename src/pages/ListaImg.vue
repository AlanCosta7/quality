<template>
    <q-page>
        <div>
            <q-img height="390px" src="https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/295996780_498173438778613_6214877004694326430_n_1600x1600.webp?alt=media&token=df0e6abf-d70e-4ce9-ac65-855952d18b8a">
                <div class="absolute-full text-subtitle2 flex flex-center p1">
                {{ title }}
                </div>
            </q-img>
        </div>
      <div class="fit row items-start justify-around paddingGaleria q-py-xl">
        <Galeria :lista="lista" />
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import Galeria from '../components/Galeria.vue'
  import { useGlobalStore } from '../stores/globalStore'
  
  const global = useGlobalStore()
  
  const route = useRoute()
  let title = ref('')
  let descricao = ref('')
  
  const id = computed(() => route.params.id)
  const lista = computed(() => { 
    console.log('ID:', id.value)
    switch (id.value) {
      case 'furniture_reupholstery':
        title.value = 'Furniture reupholstery'
        global.getImg('Furniture reupholstery')
        
        break;
      case 'marine_and_rvs':
        title.value = 'Marine and RVs'
        global.getImg('Marine and RVs')
        
        break;
      case 'patio_furniture-cushion_sets':
        title.value = 'Patio furniture / Cushion sets'
        global.getImg('Patio furniture Cushion sets')
        
        break;
      case 'slipcovers':
        title.value = 'Slipcovers'
        global.getImg('Slipcovers')
        
        break;
      case 'custom_pieces':
        title.value = 'Custom pieces'
        global.getImg('Custom pieces')
        
        break;
    
      default:
        break;
    }

    return global.listaGaleria
  })
  
  </script>
  
  <style scoped>
  .q-card {
    background: transparent
  }
  </style>
  