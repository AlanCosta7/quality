<template>
  <q-card flat class="transparent" style="width: 324px; border: none;">
    <div class="text-center">
        <img width="200px" height="200px" :src="img">
    </div>
    <q-card-section>
        <div class="text-h6 text-weight-bold text-white text-center">{{ title }}</div>
        <div class="text-subtitle2 text-white text-weight-light text-center">{{ subtitle }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(['title', 'subtitle', 'img'])

const title = computed(() => props.title)
const subtitle = computed(() => props.subtitle)
const img = computed(() => props.img)
</script>

<style>

</style>
