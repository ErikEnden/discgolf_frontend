<template>
    <b-table
    :data="data"
    :opened-detailed="defaultOpenedDetails"
    detailed
    detail-key="id"
    >
    <template slot-scope="props">
        <b-table-column field="hole_num" label="#" numeric>
            {{props.row.hole_num}}
        </b-table-column>
        <b-table-column field="par" label="Par" numeric>
            {{props.row.par}}
        </b-table-column>
    </template>
    <template slot="detail" slot-scope="props">
            <article class="media">
                <figure class="media-left">
                    <p class="image">
                        <img src="https://via.placeholder.com/300">
                    </p>
                </figure>
                <div class="media-right">
                    <div class="content">
                        <p>Korv {{props.row.hole_num}}</p>
                        <p>Par: {{props.row.par}}</p>
                    </div>
                </div>
            </article>
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
    getCourseHoles: function () {
      let self = this
      Axios.get('http://localhost:8000/dg/holes/course/' + this.id).then(function (response) {
        self.data = response.data
      })
    }
  },
  props: {
    id: Number
  },
  created: function () {
    this.getCourseHoles()
  }
}
</script>

<style>

</style>
