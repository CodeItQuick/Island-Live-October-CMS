import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import AppPortfolio from './components/appPortfolio.vue'
import CircularDoublyLinkedList from './CircularDoublyLinkedList'
import PreviousButton from './components/previousButton.vue'
import NextButton from './components/nextButton.vue'
import DisplayImage from './components/displayImage.vue'

Vue.prototype.$eventhub = new Vue();
var sidebarList = new CircularDoublyLinkedList();
var element = "#menu";

const store = new Vuex.Store({
    state: {
        firstPicture: "no picture 1",
        secondPicture: "no picture 2",
        thirdPicture: "no picture 3",
        fourthPicture: "no picture 4"
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})


Vue.directive('img', function (url) {
    var img = new Image();
    img.src = url;

    img.onload = function () {
        this.el.src = url;
        $(this.el)
            .css('opacity', 0)
            .animate({ opacity: 1 }, 1000)
    }.bind(this);


})

var settings = {
        el: element,
        components: {
            'main-content': AppPortfolio,
            'previous-button': PreviousButton,
            'next-button': NextButton,
            'display-image': DisplayImage
        },
        props: {
            classLocation: {
                default: element + "0",
                type: String
            },
            newimgvalue: Number,
            src: String
        },

    data: {
        data: 'initial',
        index: 0,
        dataimgvalue: String,
        toggledata: false,
        toggledatamenu: false
        },

        methods: {
            setnewdata: function (newLocation) {
                this.dataimgvalue = newLocation;
            },
            getImgValue: function () {
                return this.dataimgvalue;
            },
            getIndex: function () {
                return this.index;
            },
            setImgValue: function (newDataImgValue) {
                this.dataimgvalue = newDataImgValue;
            },
            loadimage: function () {
                Vue.set(sidebarList.get(this.index), 'dataimgvalue', this.newimgvalue);
                return this.dataimgvalue;
            },
            watchNewValue: function () {
            }
    },
        
        created() {

                this.$eventhub.$on('dataimgvalue'), function (dataimgvalue) {
                    console.log("image updated");
                    Vue.set(sidebarList.get(this.index), 'dataimgvalue', dataimgvalue);
                },
                this.$eventhub.$on('previous', function () {
                    console.log(vm1.$children[5]);
                    const current0 = vm1.$children[0].$props.dataimgvalue;
                    const current1 = vm1.$children[1].$props.dataimgvalue;
                    const current2 = vm1.$children[2].$props.dataimgvalue;
                    const current3 = vm1.$children[3].$props.dataimgvalue;

                    Vue.set(vm1.$children[0].$props, 'dataimgvalue', current1);
                    Vue.set(vm1.$children[1].$props, 'dataimgvalue', current2);
                    Vue.set(vm1.$children[2].$props, 'dataimgvalue', current3);
                    Vue.set(vm1.$children[3].$props, 'dataimgvalue', current0);
                    setTimeout(function () {
                        Vue.set(vm1.$children[5].$props, 'toggledata', false); 
                        Vue.set(vm1.$children[5].$props, 'displayimgincoming', current3); }, 1000);
                    Vue.set(vm1.$children[5].$props, 'toggledata', true);
                    Vue.set(vm1.$children[5].$props, 'displayimg', current3); 

                }),
                this.$eventhub.$on('next', function () {
                    console.log(vm1.$children[0].$props);
                    const current0 = vm1.$children[0].$props.dataimgvalue;
                    const current1 = vm1.$children[1].$props.dataimgvalue;
                    const current2 = vm1.$children[2].$props.dataimgvalue;
                    const current3 = vm1.$children[3].$props.dataimgvalue;

                    Vue.set(vm1.$children[0].$props, 'dataimgvalue', current3);
                    Vue.set(vm1.$children[1].$props, 'dataimgvalue', current0);
                    Vue.set(vm1.$children[2].$props, 'dataimgvalue', current1);
                    Vue.set(vm1.$children[3].$props, 'dataimgvalue', current2);
                    Vue.set(vm1.$children[5].$props, 'displayimg', current1);

                })
             

    },
    watch: {
        'dataimgvalue': function() {
            Vue.set(vm1.$props, 'displayimg', vm1.$children[2].$props.dataimgvalue);

        }
    }
    
}

var vm1 = new Vue(settings);

//console.log(sidebarList.get(1).$el.getAttribute('index'))


