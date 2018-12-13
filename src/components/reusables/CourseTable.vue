<template>
    <b-table :data="data" :columns="columns">

    </b-table>
</template>

<script>
import Axios from 'axios'
export default {
  data: function () {
    return {
      data: {},
      columns: [
        {
          field: 'name',
          label: 'Nimi'
        },
        {
          field: 'num_holes',
          label: 'Korvide arv'
        },
        {
          field: 'par',
          label: 'Par'
        }
      ]
    }
  },
  methods: {
    getCourseData: function () {
      let self = this
      Axios.get('http://localhost:8000/dg/courses').then(function (response) {
        self.data = response.data
      })
    }
  },
  created: function () {
    this.getCourseData()
  }
}
</script>

<style>

</style>
