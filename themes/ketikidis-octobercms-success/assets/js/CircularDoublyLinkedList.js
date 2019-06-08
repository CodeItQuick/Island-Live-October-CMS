
import CircularDoublyLinkedListNode from './CircularDoublyLinkedListNode'
const head = Symbol("head");

export default class CircularDoublyLinkedList {

    constructor() {
        this[head] = null;
        this.numberElements = 0;
    }

    addNode(newVueInstance) {
        const newNode = new CircularDoublyLinkedListNode(newVueInstance)
        
        if (this[head] === null) {
            this[head] = newNode;
            newNode.setNext(newNode);
            newNode.setPrevious(newNode);
        } else {
            var tail = this[head].getPrevious();
            tail.setNext(newNode);
            newNode.setPrevious(tail);
            newNode.setNext(this[head]);
            this[head].setPrevious(newNode);
        }

        console.log('loaded');
        
    }

    get(index) {

        // ensure `index` is a positive value and the list isn't empty
        if ((index > -1) && (this[head] !== null)) {

            let current = this[head];
            let i = 0;

            do {
                
                if (i === index) {
                    return current.getVueInstance();
                }

                current = current.getNext();
                i++;

            } while (i <= index);

        }

        return undefined;
    }
    getNum(index) {

        // ensure `index` is a positive value and the list isn't empty
        if ((index > -1) && (this[head] !== null)) {

            let current = this[head];
            let i = 0;

            do {

                if (i == index) {
                    return current.getPictureNum();
                }

                current = current.getNext();
                i++;

            } while (i <= index);

        }

        return undefined;
    }
    

    getIndex(newNode) {
        // ensure `index` is a positive value and the list isn't empty
        if ((newNode !== null) && (this[head] !== null)) {

            let current = this[head];
            let i = 0;

            do {

                if (current === newNode) {
                    return i;
                }

                current = current.getNext();
                i++;

            } while ((current !== this[head]) && (current !== newNode));

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
