<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col v-for="(mov,i) in movies" :key="i" md="2" cols="12">
          <v-card flat max-width="300">
            <v-hover>
              <v-img
                slot-scope="{ hover }"
                :class="`${hover? 'class1': 'class2'}`"
                max-width="300"
                :src="mov.image"
              />
            </v-hover>
          </v-card>
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
        <v-col v-for="(mov,i) in movies" :key="i" md="2" cols="12">
          <v-img max-width="300" :src="mov.image" />
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
        <v-col v-for="(mov,i) in movies" :key="i" md="2" cols="12">
          <v-img max-width="300" :src="mov.image" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      movies: [
        {
          image: 'm1.jpg',
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
