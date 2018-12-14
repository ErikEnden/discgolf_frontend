<template>
    <div class="container">
        <div class="columns">
            <div class="column is-2">
                <button class="button" v-if="courseIsSelected" @click="back">Tagasi</button>
            </div>
        </div>
        <course-picker></course-picker>
        <player-picker></player-picker>
        <p>{{selectedCourseName}}</p>
        <button class="button" @click="setSelected">Vali</button>
    </div>
</template>

<script>
import CoursePicker from '@/components/reusables/CoursePicker.vue'
import PlayerPicker from '@/components/reusables/PlayerPicker.vue'
export default {
  components: {
    CoursePicker,
    PlayerPicker
  },
  data: function () {
    return {
      selectedCourse: null,
      selectedCourseName: null,
      courseIsSelected: false
    }
  },
  methods: {
    setSelected: function () {
      this.courseIsSelected = true
    }
  }
}
</script>

<style>

</style>
