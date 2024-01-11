<template>
  <section class="row items-center bg-secondary" :class="direcao?'flex-container':''">
    <div class="col-xs-12 col-sm-6">
        <q-img
            :src="img"
            :ratio="1"
            spinner-color="primary"
            spinner-size="82px"
        />
    </div>
    <div class="col-xs-12 col-sm-6 text-center text-white flex flex-center q-pa-lg">
        <div style="width: 90vw; max-width: 400px; min-height: 400px;" class="flex flex-center">
            <div>
                <h6>{{ title }}</h6>
                <p>{{ text }}</p>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['img', 'title', 'text', 'direcao'])

const img = computed(() => props.img)
const text = computed(() => props.text)
const title = computed(() => props.title)
const direcao = computed(() => props.direcao)

</script>

<style>
.flex-container {
    flex-direction: row-reverse
}
</style>