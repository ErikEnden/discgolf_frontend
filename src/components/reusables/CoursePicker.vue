<template>
    <b-table
    :data="data"
    :striping="isStriped"
    v-if="this.$parent.courseIsSelected == false">
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
          <button class="button" v-on:click="pickCourse(props.row.id, props.row)">Vali</button>
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
      isStriped: true,
      courseIsSelected: false
    }
  },
  methods: {
    getCourseData: function () {
      let self = this
      Axios.get('http://localhost:8000/dg/courses').then(function (response) {
        self.data = response.data
      })
    },
    pickCourse: function (id, idx) {
      let self = this
      this.$parent.selectedCourse = id
      Axios.get('http://localhost:8000/dg/courses/' + id).then(function (response) {
        self.$parent.selectedCourseName = response.data.name
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
