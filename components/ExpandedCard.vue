<template>
  <div>
    <v-btn
      depressed
      fab
      right
      fixed
      small
      dark
      top
      @click="closeExpanded"
    >
      <v-icon>
        mdi-close
      </v-icon>
    </v-btn>
    <v-card max-width="650px">
      <v-img :src="details.image" max-width="650px" class="align-end">
        <v-container>
          <v-row class="align-top">
            <v-col align="right" justify="right" />
          </v-row>
          <v-row class="align-self-end">
            <v-col>
              <v-btn class="align-self-end" color="white" light>
                <v-icon>mdi-play</v-icon> Play
              </v-btn>
              <v-btn outlined icon>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn outlined icon>
                <v-icon>mdi-thumb-up-outline</v-icon>
              </v-btn>
              <v-btn outlined icon>
                <v-icon>mdi-thumb-down-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
      <v-card-title>
        <v-row>
          <v-col cols="12" md="6">
            <v-chip label outlined>
              {{ details.minage }}
            </v-chip><span class="font-weight-bold ml-3">
              {{ details.Seasons + ' ' + 'Seasons' }}
            </span>
            <div class="text-caption">
              {{ details.desc }}
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <ul>
              <li>
                <div class="font-weight-light text-caption">
                  Cast: <span v-for="(cast,i) in details.cast" :key="i" class="text-caption">
                    {{ cast }}
                  </span>
                </div>
              </li>
              <li>
                <div class="font-weight-light text-caption">
                  Genres: <span v-for="(genre,i) in details.genres" :key="i" class="text-caption">
                    {{ genre }}
                  </span>
                </div>
              </li>
              <li>
                <div class="font-weight-light text-caption">
                  This Show is:
                  <span v-for="(show,i) in details.showis" :key="i" class="text-caption">
                    {{ show }}
                  </span>
                </div>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      default: null
    }
  },
  mounted () {
    console.log(this.details)
  },
  methods: {
    closeExpanded () {
      this.$nuxt.$emit('close-expanded')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
