<template>
    <nav class='navbar' role='navigation' aria-label='main navigation'>
        <div class='navbar-brand'>
            <router-link class="navbar-item" to='/'>Logo</router-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <router-link to="/courses" class="navbar-item">Rajad</router-link>
                <router-link to="/players" class="navbar-item">Mängijad</router-link>
                <router-link to="/games" class="navbar-item">Uus mäng</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
