<template>
    <div class="column is-2">
        <label>{{holeNumber}}</label>
        <b-input type="number" v-model="par" min="0" max="10"></b-input>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      par: 3
    }
  },
  props: {
    tempId: Number,
    holeNumber: Number
  },
  watch: {
    par: function (val) {
      this.$parent.holes[this.tempId].par = parseInt(this.par)
      this.$parent.parSum = 0
      for (let i = 0; i < this.$parent.holes.length; i++) {
        this.$parent.parSum += parseInt(this.$parent.holes[i].par)
      }
    }
  },
  created: function () {
    this.$parent.parSum += parseInt(this.par)
  }
}
</script>

<style>

</style>
