<template>
    <div class="container">
        <div class="columns">
            <div class="column is-6 is-offset-3">
                <label>Nimi</label>
                <b-input v-model="name"></b-input>
                <label>Par</label>
                <b-input type="number" v-model="parSum" disabled></b-input>
                <label>Korvide arv</label>
                <b-input type="number" v-model="holeCount"></b-input>
                <div class="columns is-multiline" v-if="holesInited">
                    <hole-adder v-for="hole in holes" :key="hole.tempId" :tempId="hole.tempId" :holeNumber="hole.holeNumber" :par="hole.par" ></hole-adder>
                </div>
                <button class="button" @click="addCourse">Lisa</button>
            </div>
        </div>

    </div>
</template>

<script>
import HoleAdder from '@/components/reusables/HoleAdder.vue'
import Axios from 'axios'
export default {
  components: {
    HoleAdder
  },
  data: function () {
    return {
      name: '',
      holes: [],
      holeCount: 18,
      holesInited: false,
      parSum: 0
    }
  },
  methods: {
    initHoles: function () {
      for (let i = 0; i < this.holeCount; i++) {
        let hole = { tempId: i, holeNumber: i + 1, par: 3 }
        this.holes.push(hole)
      }
      this.holesInited = true
    },
    addCourse: function () {
      let self = this
      Axios.post('http://localhost:8000/dg/courses/', { name: this.name, num_holes: this.holeCount, par: this.parSum })
        .then(function (response) {
          for (let i = 0; i < self.holes.length; i++) {
            Axios.post('http://localhost:8000/dg/holes/', { hole_num: self.holes[i].holeNumber, par: self.holes[i].par, course_id: response.data.id })
          }
        })
    }
  },
  watch: {
    holeCount: function (val) {
      this.holes = []
      for (let i = 0; i < this.holeCount; i++) {
        let hole = { tempId: i, holeNumber: i + 1, par: 3 }
        this.holes.push(hole)
      }
    },
    parSum: function (val, oldVal) {
      console.log('parsum changed: ' + val, ', old: ' + oldVal)
    }
  },
  created: function () {
    this.initHoles()
    console.log(this.holes)
  }
}
</script>

<style>

</style>
