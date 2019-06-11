import Vue from 'vue'
import 'es6-promise/auto'
import CircularDoublyLinkedList from './CircularDoublyLinkedList'
import PreviousButton from './components/previousButton.vue'
import NextButton from './components/nextButton.vue'
import DisplayImage from './components/displayImage.vue'
import ImageMenu from './components/imageMenu.vue'
import VuexStore from './vuexStore.js'

Vue.prototype.$eventhub = new Vue();

var settings = {
    el: "#menu",
    components: {
        'previous-button': PreviousButton,
        'next-button': NextButton,
        'display-image': DisplayImage,
        'image-menu': ImageMenu
    },
    props: {
        classLocation: {
            default: menu + "0",
            type: String
        },
        newimgvalue: Number,
        src: String,
        loadintovuex: String,
        backgroundimg: ''
    },

    data: {
        index: 0,
        dataimgvalue: String,
        toggledata: false,
        toggledatamenu: false,
        backgroundimg: ''
        },

    methods: {
        getImageValue: function () {
            return VuexStore.getters.Picture3;
        },
        getImageValueIncoming: function () {
            if (VuexStore.getters.getIsPrevious) {
                return VuexStore.getters.getPicture2;
            }
            else {
                return VuexStore.getters.getPicture4;
            }
        },
        setPicture: function (newImage, newTitle, newSubtitle) {
            VuexStore.commit('addPicture', {
                'newImage': newImage,
                'newTitle': newTitle,
                'newSubtitle': newSubtitle
            })
        },
        getBackground: function (backgroundImage) {
            return "background-image: linear-gradient(to right, rgba(36, 37, 42, 0.90), rgba(36, 37, 42, 0.90))," +
                    backgroundImage + ";";
        }
    },
        
    created() {
        
                this.$eventhub.$on('previous', function () {

                // Set the VuexStore event previous to true, and toggle the classes for slide in/out
                VuexStore.commit('setPrevious');
                VuexStore.commit('setToggle');

                setTimeout(function () {
                    VuexStore.commit('setDown');
                    VuexStore.commit('setToggle');
                    VuexStore.commit('decreaseTopSlide'); //Decrease the top slide so that the change sticks
                }, 199);

            }),
                this.$eventhub.$on('next', function () {
                VuexStore.commit('setNext');
                VuexStore.commit('setToggle');
                
                setTimeout(function () {
                    VuexStore.commit('setUp');
                    VuexStore.commit('setToggle');
                    VuexStore.commit('increaseTopSlide');
                    }, 199);

            })
    }
    
}

var vm1 = new Vue(settings);

//console.log(sidebarList.get(1).$el.getAttribute('index'))


