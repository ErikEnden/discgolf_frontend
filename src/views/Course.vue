<template>
    <div class="container" v-if="dataIsLoaded">
        <div class="columns">
            <div class="column is-4">
                <img src="https://via.placeholder.com/300">
            </div>
            <div class="column is-8">
                <h2>{{course.name}}</h2>
                <p>Par: {{course.par}}</p>
                <p>Korve: {{course.num_holes}}</p>
            </div>
        </div>
        <course-hole-table :id="course.id"></course-hole-table>
    </div>
</template>

<script>
import Axios from 'axios'
import CourseHoleTable from '@/components/reusables/CourseHoleTable.vue'

export default {
  components: {
    CourseHoleTable
  },
  data: function () {
    return {
      course: null,
      dataIsLoaded: false
    }
  },
  methods: {
    retrieveData: function () {
      let self = this
      Axios.get('http://localhost:8000/dg/courses/' + this.$route.params.id).then(function (response) {
        self.course = response.data
        self.dataIsLoaded = true
      })
    }
  },
  created: function () {
    this.retrieveData()
  }
}
</script>

<style>

</style>
