<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar :style="$q.dark.isActive?'background-color:#101010':''">
        <div>
          <q-btn flat round icon="mdi-chevron-left"/>
        </div>
        <q-toolbar-title>
          CuppaZee
        </q-toolbar-title>

        <div><q-btn @click="$q.dark.toggle()" flat round icon="mdi-reload"/></div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer :style="`${$q.dark.isActive?`background-color:#101010!important;`:``}padding-bottom:env(safe-area-inset-bottom);`" elevated>
      <q-tabs v-if="true||['user','clans','tools','guide','more'].includes($route.path.split('/').filter(i=>i).join('/'))" switch-indicator dense>
        <q-route-tab
          style="padding:0;"
          dense
          icon="mdi-home"
          to="/"
          exact
        />
        <q-route-tab
          style="padding:0;"
          dense
          icon="mdi-shield-star"
          to="/clans"
          exact
        />
        <q-route-tab
          style="padding:0;"
          dense
          icon="mdi-tools"
          to="/tools"
        />
        <q-route-tab
          style="padding:0;"
          dense
          icon="mdi-account"
          to="/user"
        />
        <q-route-tab
          style="padding:0;"
          dense
          icon="mdi-earth"
          to="/global"
        />
        <q-route-tab
          style="padding:0;"
          dense
          icon="mdi-menu"
          to="/more"
        />
        <q-route-tab
          style="padding:0;"
          dense
          icon="mdi-test-tube"
          to="/lab"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
