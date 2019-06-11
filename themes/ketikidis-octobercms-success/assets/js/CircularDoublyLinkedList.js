
import CircularDoublyLinkedListNode from './CircularDoublyLinkedListNode'
var clone = require('clone');
const head = Symbol("head");


//function to clone the object

export default class CircularDoublyLinkedList {

    constructor() {
        this[head] = null;
        this.numberElements = 0;
    }

    addNode(newImage, newTitle, newSubtitle) {
        console.log(newImage, newTitle, newSubtitle);
        const newNode = new CircularDoublyLinkedListNode(newImage, newTitle, newSubtitle)
        
        if (this[head] == null) {
            this[head] = newNode;
            newNode.setNext(newNode);
            newNode.setPrevious(newNode);
        } else {
            newNode.setPrevious(this[head].getPrevious());
            newNode.setNext(this[head]);
            this[head].getPrevious().setNext(newNode);
            this[head].setPrevious(newNode);
        }
        
    }

    get(index) {

        // ensure `index` is a positive value and the list isn't empty
        if ((index > -1) && (this[head] !== null)) {
            
            var currentClone = clone(this[head]);

            let i = 0;

            do {
                
                if (i === index) {
                    
                    return currentClone;
                }

                currentClone = currentClone.getNext();
                i++;

            } while (i <= index);

        }

        return undefined;
    }

    rotate() {
        this[head] = this[head].getNext();
        
    }

    reverseRotate() {
        this[head] = this[head].getPrevious();

    }

}


