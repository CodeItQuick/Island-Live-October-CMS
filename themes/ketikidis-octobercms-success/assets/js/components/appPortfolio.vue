<template>
    <div id="element" >
        <div :class="imgclassvalue">
            <img :src="dataimgvalue" />
            <slot></slot>
        </div>
        <div :class="textclassvalue" alt>
            <h6>{{ h6value }}</h6>
            <p>{{ pvalue }}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'main-content',
        props: {
            cardclassvalue: String,
            imgclassvalue: String,
            textclassvalue: String,
            h6value: String,
            pvalue: String,
            dataimgvalue: String
        },
        data: function () {
            return {dataimgvalue: String}
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



