<template>
    <b-table :data="data" v-if="dataIsLoaded">
      <template slot-scope="props">
        <b-table-column field="course_name" label="Rada">
          {{props.row.course_name}}
        </b-table-column>
        <b-table-column field="start_time" label="Algusaeg">
          {{props.row.start_time}}
        </b-table-column>
        <b-table-column field="end_time" label="Lõpuaeg">
          {{props.row.end_time}}
        </b-table-column>
      </template>
    </b-table>
</template>

<script>
import Axios from 'axios'
export default {
  data: function () {
    return {
      data: [],
      dataIsLoaded: false
    }
  },
  methods: {
    getCourseData: function () {
      let self = this
      Axios.get('http://localhost:8000/dg/rounds/').then(async function (response) {
        for (let i = 0; i < response.data.length; i++) {
          self.data = response.data
        }
        await self.loadCourseNames(self)
        console.log(self.data)
      })
    },
    loadCourseNames: async function (ctx) {
      let self = ctx
      console.log(self.data.length)
      for (let i = 0; i < self.data.length; i++) {
        await Axios.get('http://localhost:8000/dg/courses/' + self.data[i].id).then(function (response) {
          self.data[i].course_name = response.data.name
        })
      }
      self.dataIsLoaded = true
      console.log('async done')
    }
  },
  created: function () {
    this.getCourseData()
  }
}
</script>

<style>

</style>
