import Vue from 'vue'

export default class CircularDoublyLinkedListNode {
    
    constructor(newVueInstance) {
        this.vueInstance = newVueInstance;
        
    }

    setVueInstance(newVueInstance) {
        this.vueInstance = newVueInstance;
    }

    setPrevious(previous) {
        this.previous = previous;
    }

    setNext(next) {
        this.next = next;
    }
    
    getVueInstance() {
        return this.vueInstance
    }

    getPrevious() {
        return this.previous;
    }

    getNext() {
        return this.next;
    }


}
