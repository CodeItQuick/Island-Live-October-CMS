import Vue from 'vue'

export default class CircularDoublyLinkedListNode {
    
    constructor(newImage, newTitle, newSubtitle) {
        this.displayImage = newImage;
        this.displayTitle = newTitle;
        this.displaySubtitle = newSubtitle;
        this.pictureNum = null;
        this.next = null;
        this.previous = null;
    }

    setDisplayImage(newImage) { this.displayImage = newImage; }

    setDisplayTitle(newTitle) { this.displayTitle = newTitle; }

    setDisplaySubTitle(newSubTitle) { this.displaySubTitle = newSubTitle; }

    setPrevious(previous) {
        this.previous = previous;
    }

    setNext(next) {
        this.next = next;
    }
    
    getDisplayImage() {
        return this.displayImage;
    }
    
    getDisplayTitle() {
        return this.displayTitle;
    }
    
    getDisplaySubTitle() {
        return this.displaySubtitle;
    }

    getPrevious() {
        return this.previous;
    }

    getNext() {
        return this.next;
    }


}
