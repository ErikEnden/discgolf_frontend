<template>
    <div class="container">
        <button class="button" @click="addCourse">Lisa</button>
        <course-table></course-table>
    </div>
</template>

<script>
import CourseTable from '@/components/reusables/CourseTable.vue'
export default {
  components: {
    CourseTable
  },
  methods: {
    addCourse: function () {
      this.$router.push('/courses/add')
    }
  }
}
</script>

<style>

</style>
