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
        <div class="row items-center justify-between q-pt-xl full-width">
          <div class="col-xs-10 col-sm-auto q-my-md"><q-icon size="sm" name="email" /><a class="q-ml-md" href="mailto:contatct@voltolini.com.br">contatct@voltolini.com.br</a></div>
          <div class="col-xs-10 col-sm-auto q-my-md"><q-icon size="sm" name="call" /><a class="q-ml-md" href="tel:+19414486093">+1 941 448-6093</a></div>
          <div class="col-xs-10 col-sm-auto q-my-md"><q-icon size="sm" name="email" /><a class="q-ml-md" href="https://maps.app.goo.gl/w3cEzLPA9B3wqNYY6">1950 Whitfield Park Drive, A-2, Sarasota, FL 34243, United States</a></div>
  
          <div class="col-xs-12 col-sm-auto text-left q-py-md column q-my-md">
            <h6 class="q-pa-none q-ma-none q-my-md">follow us</h6>
            <div class="col-12">
              <q-list class="row items-center justify-center q-gutter-md">
                <div clickable v-for="(item, i) in social" :key="i" @click="onRouter(item)" >
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
import { ref, computed } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useGlobalStore } from '../stores/globalStore'
import { useRoute } from 'vue-router'

const global = useGlobalStore()
const leftDrawerOpen = ref(false)
const route = useRoute()

const mobile = computed(() => global.mobile)
const isHeight = computed(() => {
  return mobile?'90vh':'650px'
})

const isPage = computed(() => {
  switch (route.name) {
    case 'home':
      return {
        img: 'https://cdn.quasar.dev/img/parallax1.jpg',
        height: isHeight.value,
        title: 'Working to make your dream renovations com true',
        link: 'home',
        btn: true,
        logo: true
      }

    case 'about':
      return {
        img: null,
        height: null,
        title: 'About Us',
        link: 'about',
        btn: false,
        logo: false
      }
    
    case 'services':
      return {
        img: null,
        height: null,
        title: 'Services',
        link: 'services',
        btn: false,
        logo: false
      }
      
    case 'contact':
      return {
        img: 'https://cdn.quasar.dev/img/quasar.jpg',
        height: '412px',
        title: 'Contact Us',
        link: 'contact',
        btn: false,
        logo: false
      }
      
    case 'gallery':
      return {
        img: 'https://cdn.quasar.dev/img/quasar.jpg',
        height: '412px',
        title: 'Portfólio',
        link: 'gallery',
        btn: false,
        logo: false
      }
  
    default:
      break;
  }
})

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
    img: 'https://firebasestorage.googleapis.com/v0/b/voltolinihome-ac267.appspot.com/o/social%2Fwhatsapp.png?alt=media&token=f7673096-13cc-4c84-bba8-555b65960a65',
    link: 'https://api.whatsapp.com/send?phone=5521972965424'
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/voltolinihome-ac267.appspot.com/o/social%2Ffacebook.png?alt=media&token=669fc201-38a1-43d8-ac15-f197ac99b574',
    link: 'https://www.facebook.com/voltolinihome/'
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/voltolinihome-ac267.appspot.com/o/social%2Finstagram.png?alt=media&token=1a56ea6d-4e3e-4870-8ef8-aa456a4180f3',
    link: 'https://www.instagram.com/voltolinihome/'
  },
])



function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<style scoped>
.container {
  width: 80vw;
}
</style>