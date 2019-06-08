<template>
    <div :class="rotateClass(upOrDown(isPrevious(), getToggleData()))" id="#cardmenu">
        <div v-for="cardsIndex in 7" :class="currentClass(parentclass, false)">
            <main-content :cardClass="currentClass(parentclass, false)"
                            :cardIndex="cardsIndex"
                            :compimgdata="getPicture(cardsIndex)"
                            :cardimgclassvalue="currentClass(parentclass, false) + currentClass('--picture', false)"
                            :cardtextclassvalue="currentClass(parentclass, false) + '--text'"
                            h6value="Photo Title"
                            pvalue="Description of the photo"
                            ref="child">
            </main-content>
        </div>
    </div>
</template>
<script>
    
    import AppPortfolio from './appPortfolio.vue'
    import VuexStore from '../vuexStore.js'

    export default {
        name: "image-menu",
        components: {
            "main-content": AppPortfolio
        },
        props: {
            cardclass: String,
            cardIndex: Number,
            cardimgclassvalue: String,
            cardtextclassvalue: String,
            parentclass: String,
            parentindex: String,
            parentimgclassvalue: String,
            parenttextclassvalue: String,
            parentclass: String
        },
        data: function () {
            return { dataimgvalue: String }
        },
        methods: {
            nextImage: function () {
                this.$eventhub.$emit("next");
            },
            currentClass: function (concatString, firstElement) {
                
                var suffix = "";

                if (firstElement) {
                    suffix = "FirstCard"
                }
                

                return concatString + suffix;
            },
            getToggleData: function () {
                return VuexStore.getters.getToggleData;
            },
            rotateClass: function (isRotated) {
                if (isRotated == "Down") {
                    return "carouselPortfolio__menu" + "rotatedown";
                }
                else if (isRotated == "Up") {
                    return "carouselPortfolio__menu" + "rotateup";
                }
                else {
                    return "carouselPortfolio__menu";
                }
            },
            upOrDown: function (isUp, isToggled) {
                if (!isToggled) {
                    return false;
                }
                else if (isUp) {
                    return "Up";
                } else {
                    return "Down";
                }
            },
            isPrevious: function () {
                return VuexStore.getters.getIsPrevious;
            },
            getPicture: function (pictureNum) {
                return VuexStore.getters.getPicture(pictureNum);
            },
        }
    }
</script>
