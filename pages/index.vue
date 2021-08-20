<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col v-for="(mov,i) in movies" :key="i" md="2" cols="12">
          <v-card flat max-width="300" @mouseover.native="mov.first_state = true" @mouseleave.native="hover = false">
            <v-img
              max-width="300"
              :src="mov.image"
            />
          </v-card>
          <v-dialog v-model="mov.first_state" max-width="350">
            <v-card max-width="350">
              <v-img :src="mov.image" />
              <v-card-actions>
                <v-btn icon>
                  <v-icon>mdi-play</v-icon>
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
                <v-spacer />
                <v-btn outlined icon @click="openExpanded(mov)">
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </v-card-actions>
              <v-card-subtitle>
                <v-row>
                  <v-chip label outlined>
                    {{ mov.minage }}
                  </v-chip><div class="font-weight-bold mt-2 ml-3">
                    {{ mov.Seasons + ' ' + 'Seasons' }}
                  </div>
                </v-row>
              </v-card-subtitle>
              <v-card-subtitle class="font-weight-bold mt-2">
                <v-row>
                  <div v-for="(showdesc,i) in mov.showis" :key="i" class="mx-2">
                    {{ showdesc }}
                  </div>
                </v-row>
              </v-card-subtitle>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="font-weight-bold">
            Award Winning US TV Shows
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(mov,i) in awards" :key="i" md="2" cols="12">
          <v-card flat max-width="300" @mouseover.native="mov.first_state = true" @mouseleave.native="hover = false">
            <v-img
              max-width="300"
              :src="mov.image"
            />
          </v-card>
          <v-dialog v-model="mov.first_state" max-width="350">
            <v-card max-width="350">
              <v-img :src="mov.image" />
              <v-card-actions>
                <v-btn icon>
                  <v-icon>mdi-play</v-icon>
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
                <v-spacer />
                <v-btn outlined icon @click="openExpanded(mov)">
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </v-card-actions>
              <v-card-subtitle>
                <v-row>
                  <v-chip label outlined>
                    {{ mov.minage }}
                  </v-chip><div class="font-weight-bold mt-2 ml-3">
                    {{ mov.Seasons + ' ' + 'Seasons' }}
                  </div>
                </v-row>
              </v-card-subtitle>
              <v-card-subtitle class="font-weight-bold mt-2">
                <v-row>
                  <div v-for="(showdesc,i) in mov.showis" :key="i" class="mx-2">
                    {{ showdesc }}
                  </div>
                </v-row>
              </v-card-subtitle>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="font-weight-bold">
            Comedies
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(mov,i) in comedia" :key="i" md="2" cols="12">
          <v-card flat max-width="300" @mouseover.native="mov.first_state = true" @mouseleave.native="hover = false">
            <v-img
              max-width="300"
              :src="mov.image"
            />
          </v-card>
          <v-dialog v-model="mov.first_state" max-width="350">
            <v-card max-width="350">
              <v-img :src="mov.image" />
              <v-card-actions>
                <v-btn icon>
                  <v-icon>mdi-play</v-icon>
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
                <v-spacer />
                <v-btn outlined icon @click="openExpanded(mov)">
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </v-card-actions>
              <v-card-subtitle>
                <v-row>
                  <v-chip label outlined>
                    {{ mov.minage }}
                  </v-chip><div class="font-weight-bold mt-2 ml-3">
                    {{ mov.Seasons + ' ' + 'Seasons' }}
                  </div>
                </v-row>
              </v-card-subtitle>
              <v-card-subtitle class="font-weight-bold mt-2">
                <v-row>
                  <div v-for="(showdesc,i) in mov.showis" :key="i" class="mx-2">
                    {{ showdesc }}
                  </div>
                </v-row>
              </v-card-subtitle>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-dialog v-model="expanded" max-width="650px">
        <ExpandedCard :details="currentInfo" />
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      currentInfo: null,
      expanded: false,
      movies: [
        {
          image: 'm1.jpg',
          first_state: false,
          second_state: false,
          year: '2013',
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'm2.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'm3.jpg',
          first_state: false,
          second_state: false,
          year: '2013',
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'm4.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'm5.jpg',
          year: '2013',
          minage: '16+',
          first_state: false,
          second_state: false,
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'm6.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        }
      ],
      awards: [
        {
          image: 'aw1.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'aw2.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'aw3.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'aw4.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'aw5.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'aw6.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        }
      ],
      comedia: [
        {
          image: 'c1.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'c2.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'c3.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'c4.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'c5.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        },
        {
          image: 'c6.jpg',
          year: '2013',
          first_state: false,
          second_state: false,
          minage: '16+',
          Seasons: 5,
          desc: 'A high school chemistry teacher dying of cancer teams with a former student to secure his family future by manufacturing and selling crystal meth.',
          cast: [
            'Bryan Carston',
            'Aston Paul',
            'Anna Gunn'
          ],
          genres: [
            'Crime TV Shows',
            'TV Thrilles',
            'TV Dramas'
          ],
          showis: [
            'Violent',
            'Gritty',
            'Dark'
          ]
        }
      ]
    }
  },
  mounted () {
    this.$nuxt.$on('close-expanded', () => {
      this.expanded = false
    })
    this.handleUser({
      name: 'Jesús López',
      membership: 'Premium',
      avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
    })
  },
  methods: {
    openExpanded (item) {
      this.currentInfo = null
      this.currentInfo = item
      this.expanded = true
    },
    ...mapActions({
      handleUser: 'auth/setUser'
    })
  }
}
</script>

<style lang="scss" scoped>
.class1 {
  background-color:red;
}

.class2 {
  background-color:blue;
}
</style>
