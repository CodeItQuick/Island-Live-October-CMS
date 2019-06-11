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
    export default {
        name: 'main-content',
        props: {
            cardimgclassvalue: String,
            cardtextclassvalue: String,
            h6value: String,
            pvalue: String,
            index: String,
            compimgdata: String
        },
        data: function () {
            return {dataimgvalue: String}
        }
        

    }
    
</script>
<style>
    #element {
        display: flex;
        flex-direction: row;
        height: 100%;
        margin-left: 2px;
    }
</style>



