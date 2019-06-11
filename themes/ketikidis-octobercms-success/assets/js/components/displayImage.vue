<template>

    <div class="carouselPortfolio__display--picture">
        <div class="carouselPortfolio__display--picture-1">
            <img :src="incomingSlide(true)" :class="getCompToggle(true, getIsPrevious())" v-if="getToggle()"/>
            <img :src="incomingSlide(false)" :class="getCompToggle(false, getIsPrevious())" />
        </div>
    </div>
</template>
<script>
    import VuexStore from '../vuexStore.js'
    export default {
        name: "display-image",
        methods: {
            getPicture: function (pictureNum) {
                if (pictureNum == 0) {
                    return VuexStore.getters.getPicture0
                }
                else if (pictureNum == 1) {
                    return VuexStore.getters.getPicture1
                }
                else if (pictureNum == 2) {
                    return VuexStore.getters.getPicture2
                }
                else if (pictureNum == 3) {
                    return VuexStore.getters.getPicture3
                }
                else if (pictureNum == 4) {
                    return VuexStore.getters.getPicture4
                }
                else if (pictureNum == 5) {
                    return VuexStore.getters.getPicture5
                }
                else if (pictureNum == 6) {
                    return VuexStore.getters.getPicture6
                }
                else if (pictureNum == 7) {
                    return VuexStore.getters.getPicture7
                }
                else {
                    return VuexStore.getters.getPicture0
                }
            },
            getCompToggle: function (isDown, isPrevious) {
                if (isPrevious) {
                    if (isDown) {
                        if (this.getToggle()) {
                            return 'previousslidedown';
                        }
                        else {
                            return 'none';
                        }
                    }
                    else if (!isDown) {
                        if (this.getToggle()) {
                            return 'previousslideup';
                        }
                        else {
                            return 'none';
                        }
                    }
                }
                else if(!isPrevious) {
                    if (isDown) {
                        if (this.getToggle()) {
                            return 'nextslideup';
                        }
                        else {
                            return 'none';
                        }
                    }
                    else if (!isDown) {
                        if (this.getToggle()) {
                            return 'nextslidedown';
                        }
                        else {
                            return 'none';
                        }
                    }
                }
            },
            getToggle: function () {

                if (VuexStore.getters.getToggleData) {
                    return true;
                }
                else {
                    return false;
                }
            },
            isDown: function () {
                return VuexStore.getters.isDown;
            },
            getIsPrevious: function () {
                return VuexStore.getters.getIsPrevious;
            },
            incomingSlide: function (isCurrent) {
                if (isCurrent) {
                    if (this.getIsPrevious()) {
                        return this.getPicture(4);
                    }
                    else {
                        return this.getPicture(2);
                    }
                } else
                if (this.getIsPrevious()) {
                    return this.getPicture(3);
                }
                else {
                    return this.getPicture(3);
                }
            }

        }
    }
</script>
