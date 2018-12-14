<template>
    <div class="container">
        <div class="columns">
            <div class="column is-6 is-offset-3">
                <h2>Uus mäng</h2>
                <button class="button" @click="startNewGame">Alusta</button>
            </div>
        </div>
        <div class="columns">
            <div class="column is-6 is-offset-3">
                <h2>Varasemad mängud</h2>
                <played-games-table></played-games-table>
            </div>
        </div>
    </div>
</template>

<script>
import PlayedGamesTable from '@/components/reusables/PlayedGamesTable.vue'
export default {
  components: {
    PlayedGamesTable
  },
  methods: {
    startNewGame: function () {
      this.$router.push('/startgame')
    }
  }
}
</script>

<style>

</style>
