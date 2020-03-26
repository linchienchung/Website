<template>
    <div class="home">
        <Carousel/>
        <img alt="Vue logo" src="../assets/logo.png">
        <Home msg="Hello"></Home>
    </div>
</template>

<script>
    import Home from "../components/Home"
    import Carousel from "../components/Carousel"

    export default {
        name: 'home',
        components: {
            Home,
            Carousel,
        }
    }
</script>
