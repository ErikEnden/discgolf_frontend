<template>
    <b-table
    :data="data"
    :striping="isStriped">
      <template slot-scope="props">
        <b-table-column field="name" label="Nimi">
          {{props.row.name}}
        </b-table-column>
        <b-table-column field="par" label="Par">
          {{props.row.par}}
        </b-table-column>
        <b-table-column field="num_holes" label="Korvide arv">
          {{props.row.num_holes}}
        </b-table-column>
        <b-table-column field="moreInfo" label="">
          <button class="button" v-on:click="goToCourse(props.row.id)">Vaata</button>
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
      columns: [
        {
          field: 'name',
          label: 'Nimi',
          width: 60
        },
        {
          field: 'num_holes',
          label: 'Korvide arv',
          width: 10
        },
        {
          field: 'par',
          label: 'Par',
          width: 10
        }
      ],
      isStriped: true
    }
  },
  methods: {
    getCourseData: function () {
      let self = this
      Axios.get('http://localhost:8000/dg/courses').then(function (response) {
        self.data = response.data
      })
    },
    goToCourse: function (id) {
      this.$router.push('/course/' + id)
    }
  },
  created: function () {
    this.getCourseData()
  }
}
</script>

<style>

</style>
