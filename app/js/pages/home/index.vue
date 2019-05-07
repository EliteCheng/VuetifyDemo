<template>
    <div style="background: #f5f5f5" :class="$style.homeApp">
        <Heador/>
        <home-slider/>
        <Money/>
        <Product/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import HomeSlider from "./homeSlider.vue"
import Money from "./money.vue"
import Product from "./product.vue"

export default {
    components: {
        Product,
        Heador,
        HomeSlider,
        Money,
        Footor,
        Navbar,
    },
}
</script>

<style lang="scss" module>

    .homeApp {
        margin: auto;
        max-width: 2000px;
    }
</style>
