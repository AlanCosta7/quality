<template>
  <q-layout view="lHh Lpr lff">
    <q-header reveal height="98" class=" text-white bg-accent full-width">
      <q-toolbar >

        <div class="row items-center justify-around full-width ">

          <div class="col">
            <q-img
              src="https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/logo%2FLOGO_SEM%20FUNDO_PNG%20300DPIS_Prancheta%201%20co%CC%81pia%205_200x200.webp?alt=media&token=a8abcced-1d78-4e44-80ac-738b2cc60d9d"
              width="170px"
              :ratio="16/6"
              spinner-color="primary"
              spinner-size="82px"
            />
          </div>
          <div v-if="!mobile" class="col-auto row items-center">
            <EssentialLink
              v-for="link in linksList"
              :key="link.title"
              :link="link"
            />
          </div>
        </div>
        <q-btn
          v-if="mobile"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="mobile"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          :link="link"
        />
      </q-list>
    </q-drawer>


  <q-footer >
    <div class="bg-accent row justify-center full-width">
      <div class="container">
        <div class="row items-center justify-between q-pt-xl full-width ">
          <div class="col-xs-12 col-sm-auto col-md q-py-md text-center">
              <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/logo%2FLOGO_SEM%20FUNDO_PNG%20300DPIS_Prancheta%201%20co%CC%81pia%202_200x200.webp?alt=media&token=b83a7c67-9933-4877-bdcc-64975aa7c4bd"
                  :ratio="20/10"
                  width="170px"
                  spinner-color="primary"
                  spinner-size="82px"
              />
          </div>

          <div class="col-xs-12 col-sm-auto q-py-md row items-center justify-center">
              <EssentialLink
                v-for="link in linksList"
                :key="link.title"
                :link="link"
              />
          </div>
        </div>
        <div class="row items-start justify-between q-pt-xl full-width">
          <div>
            <div class="col-xs-10 col-sm-auto q-my-md"><q-icon size="sm" name="email" /><a class="q-ml-md" href="mailto:info@qualityuph.com">info@qualityuph.com</a></div>
            <div class="col-xs-10 col-sm-auto q-my-md"><q-icon size="sm" name="email" /><a class="q-ml-md" href="mailto:services@qualityuph.com">services@qualityuph.com</a></div>
          </div>
          <div class="col-xs-10 col-sm-auto q-my-md"><q-icon size="sm" name="call" /><a class="q-ml-md" href="tel:+19414486093">+1 (941) 448-6093</a></div>
          <div class="col-xs-10 col-sm-auto q-my-md"><q-icon size="sm" name="room" /><a class="q-ml-md" href="https://maps.app.goo.gl/oADKVUkxx48GJx5B7">1950 Whitfield Park Dr unit A-2, Sarasota, FL 34243, Estados Unidos</a></div>

          <div class="col-xs-12 col-sm-auto text-left q-pb-md column q-mb-md">
            <h6 class="q-pa-none q-ma-none q-my-md">follow us</h6>
            <div class="col-12">
              <q-list class="row items-center justify-center q-gutter-md">
                <div clickable v-for="(item, i) in social" :key="i" @click="onRouter(item)" class="cursor-pointer" >
                  <div>
                    <q-img
                      :src="item.img"
                      :ratio="1"
                      width="30px"
                      spinner-color="primary"
                      spinner-size="82px"
                    />
                  </div>
                </div>
              </q-list>
            </div>
          </div>
        </div>
      </div>

    </div>
  </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useGlobalStore } from '../stores/globalStore'
import { openURL } from 'quasar'

const global = useGlobalStore()
const leftDrawerOpen = ref(false)

const mobile = computed(() => global.mobile)

const linksList = ref([
  {
    title: 'Home',
    link: 'home'
  },
  {
    title: 'About Us',
    link: 'about'
  },
  {
    title: 'Services',
    link: 'services'
  },
  {
    title: 'Portifólio',
    link: 'gallery'
  },
  {
    title: 'Contact Us',
    link: 'contact'
  }

])

const social = ref([
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/social%2Ffacebook_200x200.webp?alt=media&token=c6d6093e-62ad-430a-92fb-7ebd87a74e82',
    link: 'https://www.facebook.com/qualityupholsteryfl?mibextid=LQQJ4d'
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/social%2Finstagram_200x200.webp?alt=media&token=8d819eda-1373-4ae5-bcc1-465f4855673b',
    link: 'https://www.instagram.com/qualityupholsteryfl?igsh=bWdkeGhkcWhvampm'
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/social%2Fsms_200x200.webp?alt=media&token=4b0a021e-cae5-4746-9551-c5a9485ac2a6',
    link: 'sms:+19414486093'
  },
])

function onRouter(item) {
  openURL(item.link)
}

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

onMounted(() => {
  global.getCollection('listaTestemunho')
})

</script>

<style scoped>
.container {
  width: 80vw;
}
</style>
