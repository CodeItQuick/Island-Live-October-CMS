import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import CircularDoublyLinkedList from './CircularDoublyLinkedList.js'


Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        picture0: "no picture 0",
        picture1: "no picture 1",
        picture2: "no picture 2",
        picture3: "no picture 3",
        picture4: "no picture 4",
        picture5: "no picture 5",
        picture6: "no picture 6",
        picture7: "no picture 7",
        toggleData: false,
        isDown: true,
        isPrevious: false,
        slideReel: new CircularDoublyLinkedList(),
        topSlide: 0,
        head: null
    },
    mutations: {
        addPicture(state, pictureAddress) {
            state.slideReel.addNode(pictureAddress);
        },
        
        setToggle(state) {
            state.toggleData = !state.toggleData;
        },
        setDown(state) {
            state.isDown = true;
        },
        setUp(state) {
            state.isDown = false;
        },
        setPrevious(state) {
            state.isPrevious = true;
        },
        setNext(state) {
            state.isPrevious = false;
        },
        increaseTopSlide(state) {
            state.slideReel.reverseRotate();
            state.picture0 = state.slideReel.get(0);
            state.picture1 = state.slideReel.get(1);
            state.picture2 = state.slideReel.get(2);
            state.picture3 = state.slideReel.get(3);
            state.picture4 = state.slideReel.get(4);
            state.picture5 = state.slideReel.get(5);
            state.picture6 = state.slideReel.get(6);
            state.picture7 = state.slideReel.get(7);
            //state.topSlide = state.topSlide + 1;
            
        },
        decreaseTopSlide(state) {
            state.slideReel.rotate();
            state.picture0 = state.slideReel.get(0);
            state.picture1 = state.slideReel.get(1);
            state.picture2 = state.slideReel.get(2);
            state.picture3 = state.slideReel.get(3);
            state.picture4 = state.slideReel.get(4);
            state.picture5 = state.slideReel.get(5);
            state.picture6 = state.slideReel.get(6);
            state.picture7 = state.slideReel.get(7);
            //state.topSlide = state.topSlide - 1;

        },
        setHead(state, head) {
            state.head = head;
        }

    },

    actions: {
        addPicture(context, pictureAddress) {
            context.commit('addPicture', pictureAddress);
        },
        setToggle(context) {
            context.commit('setToggle');
        },
        setDown(context) {
            context.commit('setDown');
        },
        setUp(context) {
            context.commit('setUp');
        },
        setPrevious(context) {
            context.commit('setPrevious');
        },
        setNext(context) {
            context.commit('setNext');
        },
        increaseTopSlide(context) {
            context.commit('increaseTopSlide');

        },
        decreaseTopSlide(context) {
            context.commit('decreaseTopSlide');

        },
        setHead(context, head) {
            context.commit('setHead', head);
        }

    },
    getters: {
        getPicture: (state) => (slideNum) => {
            return state.slideReel.get(slideNum);
        },
        getPicture0: (state) => {
            return state.picture0;
        },
        getPicture1: (state) => {
            return state.picture1;
        },
        getPicture2: (state) => {
            return state.picture2;
        },
        getPicture3: (state) => {
            return state.picture3;
        },
        getPicture4: (state) => {
            return state.picture4;
        },
        getPicture5: (state) => {
            return state.picture5;
        },
        getPicture6: (state) => {
            return state.picture6;
        },
        getPicture7: (state) => {
            return state.picture7;
        },
        getToggleData: state => {
            return state.toggleData;
        },
        isDown: state => {
            return state.isDown;
        },
        getIsPrevious: state => {
            return state.isPrevious;
        },
        getTopSlide: state => {
            return state.topSlide;
        },
        getPictureNum: (state) => (slideNum) => {
            return state.slideReel.getNum(slideNum);
        },
        getTopSlide: state => {
            return state.topSlide;
        },
        getHead: state => {
            return state.head;
        }

    }
})


