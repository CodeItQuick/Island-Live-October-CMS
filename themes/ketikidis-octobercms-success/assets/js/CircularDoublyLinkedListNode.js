import Vue from 'vue'

export default class CircularDoublyLinkedListNode {
    
    constructor(newVueInstance) {
        this.vueInstance = newVueInstance;
        this.pictureNum = null;
        
    }

    setVueInstance(newVueInstance) {
        this.vueInstance = newVueInstance;
    }

    setPictureNum(pictureNum) {
        this.pictureNum = pictureNum;
    }

    setPrevious(previous) {
        this.previous = previous;
    }

    setNext(next) {
        this.next = next;
    }
    
    getVueInstance() {
        return this.vueInstance;
    }

    getPictureNum() {
        return this.pictureNum;
    }

    getPrevious() {
        return this.previous;
    }

    getNext() {
        return this.next;
    }


}
