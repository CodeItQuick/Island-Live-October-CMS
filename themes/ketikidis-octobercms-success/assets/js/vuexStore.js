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
        toggleData: false,
        isDown: true,
        isPrevious: false,
        slideReel: new CircularDoublyLinkedList(),
        topSlide: 0,
        head: null
    },
    mutations: {
        addPicture(state, { newImage, newTitle, newSubtitle }) {

            console.log(newImage, newTitle, newSubtitle);

            state.slideReel.addNode(newImage, newTitle, newSubtitle);
            state.picture0 = state.slideReel.get(0).getDisplayImage();
            state.picture1 = state.slideReel.get(1).getDisplayImage();
            state.picture2 = state.slideReel.get(2).getDisplayImage();
            state.picture3 = state.slideReel.get(3).getDisplayImage();
            state.picture4 = state.slideReel.get(4).getDisplayImage();
            state.picture5 = state.slideReel.get(5).getDisplayImage();
            state.picture6 = state.slideReel.get(6).getDisplayImage();
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
            state.picture0 = state.slideReel.get(0).getDisplayImage();
            state.picture1 = state.slideReel.get(1).getDisplayImage();
            state.picture2 = state.slideReel.get(2).getDisplayImage();
            state.picture3 = state.slideReel.get(3).getDisplayImage();
            state.picture4 = state.slideReel.get(4).getDisplayImage();
            state.picture5 = state.slideReel.get(5).getDisplayImage();
            state.picture6 = state.slideReel.get(6).getDisplayImage();
            //state.topSlide = state.topSlide + 1;
            
        },
        decreaseTopSlide(state) {
            state.slideReel.rotate();
            state.picture0 = state.slideReel.get(0).getDisplayImage();
            state.picture1 = state.slideReel.get(1).getDisplayImage();
            state.picture2 = state.slideReel.get(2).getDisplayImage();
            state.picture3 = state.slideReel.get(3).getDisplayImage();
            state.picture4 = state.slideReel.get(4).getDisplayImage();
            state.picture5 = state.slideReel.get(5).getDisplayImage();
            state.picture6 = state.slideReel.get(6).getDisplayImage();
            //state.topSlide = state.topSlide - 1;

        },
        setHead(state, head) {
            state.head = head;
        }

    },

    actions: {
        addPicture(context, pictureInfo) {

            console.log(pictureInfo);
            context.commit('addPicture', pictureInfo);
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
            if (slideNum == 0) {
                return state.picture0;
            } else if(slideNum == 1) {
                return state.picture1;
            } else if (slideNum == 2) {
                return state.picture2;
            } else if (slideNum == 3) {
                return state.picture3;
            } else if (slideNum == 4) {
                return state.picture4;
            } else if (slideNum == 5) {
                return state.picture5;
            } else if (slideNum == 6) {
                return state.picture6;
            } 
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
        },
        getTitle: (state) => (slideNum) => {
            return state.slideReel.get(slideNum).getDisplayTitle();
        },
        getSubTitle: (state) => (slideNum) => {
            return state.slideReel.get(slideNum).getDisplaySubTitle();
        }

    }
})


