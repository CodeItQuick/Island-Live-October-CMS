import Vue from 'vue'
import 'es6-promise/auto'
import CircularDoublyLinkedList from './CircularDoublyLinkedList'
import PreviousButton from './components/previousButton.vue'
import NextButton from './components/nextButton.vue'
import DisplayImage from './components/displayImage.vue'
import ImageMenu from './components/imageMenu.vue'
import VuexStore from './vuexStore.js'

Vue.prototype.$eventhub = new Vue();
var sidebarList = new CircularDoublyLinkedList();

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
        loadData: String
    },

    data: {
        data: 'initial',
        index: 0,
        dataimgvalue: String,
        toggledata: false,
        toggledatamenu: false
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
        setPicture: function (newImage) {
            VuexStore.commit('addPicture', newImage)
        }
    },
        
    created() {

            this.$eventhub.$on('dataimgvalue'), function (dataimgvalue) {
                console.log("image updated");
                Vue.set(sidebarList.get(this.index), 'dataimgvalue', dataimgvalue);
            },
                this.$eventhub.$on('previous', function () {

                VuexStore.commit('setPrevious');
                VuexStore.commit('setToggle');

                setTimeout(function () {
                    VuexStore.commit('setDown');
                    VuexStore.commit('setToggle');
                    VuexStore.commit('decreaseTopSlide');
                }, 1000);

            }),
                this.$eventhub.$on('next', function () {
                VuexStore.commit('setNext');
                VuexStore.commit('setToggle');
                
                setTimeout(function () {
                    VuexStore.commit('setUp');
                    VuexStore.commit('setToggle');
                    VuexStore.commit('increaseTopSlide');
                    }, 1000);

            })
    }
    
}

var vm1 = new Vue(settings);

//console.log(sidebarList.get(1).$el.getAttribute('index'))


