<template>
    <div id="element" >
        <div :class="cardimgclassvalue" >
            <img :src="compimgdata" />
        </div>
        <div :class="cardtextclassvalue" >
            <h6>{{ h6value }}</h6>
            <p>{{ pvalue }}</p>
        </div>
    </div>
</template>
<script>
    import VuexStore from '../vuexStore.js'
    export default {
        name: 'main-content',
        props: {
            cardClass: String,
            cardIndex: Number,
            cardimgclassvalue: String,
            cardtextclassvalue: String,
            h6value: String,
            pvalue: String,
            index: String,
            compimgdata: String
        },
        data: function () {
            return {dataimgvalue: String}
        },
        methods: {
            getPicture: function (pictureNum) {
                return VuexStore.getters.getPicture0;
            },
            getToggleData: function () {
                return VuexStore.getters.getToggleData;
            },
            getTopSlide: function (cardIndex) {
                return VuexStore.getters.getTopSlide + cardIndex;
            }


        }
        

    }
    
</script>
<style>
    #element {
        display: flex;
        flex-direction: row nowrap;
        height: 100%;
        margin-left: 2px;
    }
</style>



