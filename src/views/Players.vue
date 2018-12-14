<template>
    <div class="container">
        <p>Mängijad</p>
        <player-table></player-table>
    </div>
</template>

<script>
import PlayerTable from '@/components/reusables/PlayerTable.vue'
export default {
  components: {
    PlayerTable
  }
}
</script>

<style>

</style>
