<template>
    <b-table :data="data">
        <template slot-scope="props">
            <b-table-column label="Nimi">{{props.row.name}}</b-table-column>
        </template>
    </b-table>
</template>

<script>
import Axios from 'axios'
export default {
  data: function () {
    return {
      data: []
    }
  },
  methods: {
    getCourseData: function () {
      let self = this
      Axios.get('http://localhost:8000/dg/players').then(function (response) {
        for (let i = 0; i < response.data.length; i++) {
          let player = {}
          player.id = response.data[i].id
          player.name = response.data[i].first_name + ' ' + response.data[i].last_name
          self.data.push(player)
        }
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
