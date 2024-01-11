<template>
    <q-page class="bg-white">
        <div>
      <q-img height="390px" src="https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/300614320_1282245059253072_4929895502083554695_n_1600x1600.webp?alt=media&token=34a9af5d-0c66-4ac2-8ea8-0be72d0ff6f6">
        <div class="absolute-full text-subtitle2 flex flex-center p1">
            Contact
        </div>
      </q-img>
    </div>
  
      <div class="fit row items-start justify-around pad ">
        <div class="col-md-5 col-xs-10 q-py-md">
          <Form />
        </div>
        <div class="q-my-xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d885.3994411463196!2d-82.5374519!3d27.4194756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c33e41c9a4ad57%3A0x6a8f32ec62d47da4!2sWhitfield%20Park%20Dr%2C%20Florida%2034243%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1704473672239!5m2!1spt-BR!2sbr" :width="mobile?300:600" :height="mobile?300:450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      </q-page>
  </template>
  
<script setup>
import { ref, computed } from "vue";
import Form from '../components/Form.vue'
import { useGlobalStore } from '../stores/globalStore'

const global = useGlobalStore()
const mobile = computed(() => global.mobile )

</script>
  
  <style>
  .pad {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  </style>
  