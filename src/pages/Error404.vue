<template>
  <div class="fixed-center text-center" style="width:300px;">
    <p class="text-faded">Woah, you've escaped the cup!<br>Please don't run away like a NinjaBread Man!<br><strong>(Error 404)</strong></p>
    <q-btn
      color="secondary"
      style="width:200px;"
      to="/"
      label="Jump back in"
    /><br><br>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="escape()"
      label="Escape like Ninjabread"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404',
  methods: {
    escape () {
      if (Math.random() < 0.8) {
        alert('Ha ha, you were caught! Don\'t you go trying to escape again!')
        this.$router.push('/')
      } else {
        alert('You escaped!... until you got lost and had to be rescued!')
        this.$router.push('/')
      }
    }
  }
}
</script>
