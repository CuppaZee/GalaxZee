<template>
  <q-page>
    <div class="row" style="padding:4px;">
      <div class="col-12" style="padding:4px">
        <q-card>
          <q-item clickable v-ripple>
            <q-item-section side>
              <q-avatar>
                <img src="https://munzee.global.ssl.fastly.net/images/avatars/ua2p5m.png"/>
              </q-avatar>
            </q-item-section>
            <q-item-section class="text-h6">
              sohcah
            </q-item-section>
            <q-item-section side>
              <q-icon name="mdi-account-switch"/>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section side>
              <q-icon name="mdi-bell-alert" color="warning"/>
            </q-item-section>
            <q-item-section>
              Remember to deploy before 14th December so you don't lose your QRew/ZeeQRew Status!
            </q-item-section>
          </q-item>
          <!-- <q-item>
            <q-item-section side>
              <q-icon name="mdi-star" color="orange"/>
            </q-item-section>
            <q-item-section>
              You just got a new badge - Puffle Pouch Creature!
            </q-item-section>
          </q-item> -->
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
