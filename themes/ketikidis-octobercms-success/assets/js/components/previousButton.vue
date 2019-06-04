<template>
    <div class="carouselPortfolio__display--control-semicircletop"
         role="button"
         v-on:click="previousImage()">

        <span class="sr-only">onPrevious/s</span>
        <div class="carouselPortfolio__display--control-semicircletop-prev fa fa-angle-up" aria-hidden="true">
        </div>
    </div>
</template>

<script>
    export default {
        name: "previous-button",
        props: {
        },
        data: function () {
            return { dataimgvalue: String }
        },
        methods: {
            previousImage: function () {
                this.$eventhub.$emit("previous");
            }
        }
    }
</script>
