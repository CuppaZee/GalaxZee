<template>
  <div id="q-app" style="min-height:100vh" :class="{'':!Object.keys($store.state.R.allCryptokens).length}">
    <router-view v-if="Object.keys($store.state.R.allCryptokens).length" />
    <div class="flex flex-center text-center text-black" v-if="!Object.keys($store.state.R.allCryptokens).length" style="padding:8px;min-height:100vh;font-family:Coiny, cursive;">
      <div style="width:300px;">
        <div class="text-h3">{{welcome[increment]}}</div>
        <div class="text-h5" style="margin-bottom:4px;"><q-btn @click="selectLanguage('en')" class="full-width" color="blue" label="English"/></div>
        <div class="text-h5" style="margin-bottom:4px;"><q-btn class="full-width" color="blue" label="Deutsch"/></div>
        <div class="text-h5" style="margin-bottom:4px;"><q-btn class="full-width" color="blue" label="Suomi"/></div>
        <div class="text-h5" style="margin-bottom:4px;"><q-btn class="full-width" color="blue" label="Nederlands"/></div>
        <div class="text-h5" style="margin-bottom:4px;"><q-btn class="full-width" color="blue" label="Magyar"/></div>
        <div class="text-h5" style="margin-bottom:4px;"><q-btn class="full-width" color="blue" label="Svenska"/></div>
        <div class="text-h5" style="margin-bottom:4px;"><q-btn class="full-width" color="blue" label="Français"/></div>
        <div class="text-h5" style="margin-bottom:4px;"><q-btn class="full-width" color="blue" label="Čeština"/></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      welcome: ['Welcome', 'Vítejte', 'Welkom', 'Tervetuloa', 'Bienvenue', 'Hallo', 'Üdvözöljük', 'Välkommen'],
      increment: 0
    }
  },
  created () {
    setInterval(() => {
      this.increment = (this.increment + 1) % this.welcome.length
    }, 700)
  },
  mounted () {
    if (this.$route.path.split('/').includes('authsuccess')) {
      let x = JSON.parse(localStorage.cryptokens || '{}')
      x[this.$route.path.split('/')[3]] = this.$route.path.split('/')[2]
      localStorage.cryptokens = JSON.stringify(x)
      this.$router.replace('/')
    }
  },
  methods: {
    selectLanguage (lang) {
      localStorage.lang = lang
      window.location.replace('https://flame.cuppazee.uk/auth')
    }
  }
}
</script>
