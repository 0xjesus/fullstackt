<template>
  <div>
    <v-app-bar
      app
      dark
    >
      <v-btn text color="transparent" to="/" class="mt-1">
        <v-img max-width="130px" class="" src="/logo.png" />
      </v-btn>
      <v-toolbar-items v-if="!$vuetify.breakpoint.mobile">
        <v-btn
          v-for="(item, i) in menu"
          :key="i"
          :to="item.route"
          text
        >
          <span v-text="item.name" />
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <UserInfo />
      <div v-if="!$vuetify.breakpoint.mobile">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn>DVD</v-btn>
        <v-btn
          icon
          content="0"
        >
          <v-badge
            color="red"
            overlap
            content="0"
          >
            <v-icon>
              mdi-bell
            </v-icon>
          </v-badge>
        </v-btn>
      </div>
      <client-only v-if="$vuetify.breakpoint.mobile">
        <v-menu>
          <template #activator="{ on }">
            <v-row>
              <v-btn
                icon
                large
                dark
                v-on="on"
              >
                <v-app-bar-nav-icon />
              </v-btn>
            </v-row>
          </template>
          <v-card>
            <v-list color="transparent">
              <v-list-item
                v-for="(item,i) in menu"
                :key="i"
                offset-y
                :to="item.route"
              >
                <v-list-item-title>
                  {{ item.name }}
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn>DVD</v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn
                  icon
                  content="0"
                >
                  <v-badge
                    color="red"
                    overlap
                    content="0"
                  >
                    <v-icon>
                      mdi-bell
                    </v-icon>
                  </v-badge>
                </v-btn>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </client-only>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        name: 'Home',
        route: '/'
      },
      {
        name: 'TV Show',
        route: '/tv-shows'
      },
      {
        name: 'Movies',
        route: '/movies'
      },
      {
        name: 'News & Popular',
        route: '/news-popular'
      },
      {
        name: 'My List',
        route: '/my-list'
      }
    ]
  })
}
</script>
<style scoped>
.v-btn {
  text-transform:none !important;

}
</style>
