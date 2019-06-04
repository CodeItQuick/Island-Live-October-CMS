<template>

    <div class="carouselPortfolio__display--picture">
        <div class="carouselPortfolio__display--picture-1">
            <img :src="displayimg" :class="{'slidedown': toggledata}"/>
            <img :src="displayimgincoming" :class="{'slideup': toggledata}" :hidden="!toggledata"/>
        </div>
    </div>
</template>
<script>
    export default {
        name: "previous-button",
        props: {
            displayimg: String,
            displayimgincoming: String,
            toggledata: false
        },
        data: {
        }
    }
</script>

<style>

</style>
