<template>
    <div class="carouselPortfolio__display--control-semicirclebottom"
         role="button"
         v-on:click="nextImage()">

        <div class="carouselPortfolio__display--control-semicircletop-prev fa fa-angle-down" aria-hidden="true">
        </div>
    </div>
</template>
<script>
    export default {
        name: "next-button",
        props: {
        },
        data: function () {
            return { dataimgvalue: String }
        },
        methods: {
            nextImage: function () {
                this.$eventhub.$emit("next");
            }
        }
    }
</script>
