import { Node } from './Node.mjs';

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }
    test() {
        console.log('test')
    }
    append(key, value) {
        if (this.head === null) {
            let newNode = new Node(key, value);
            this.head = newNode;
            this.tail = newNode;
        } else {
            let curr = this.head;
            while (curr !== null) {
                if (curr.next === null) {
                    curr.next = new Node(key, value);
                    curr.next.next = null;
                    this.tail = curr.next;
                    return;
                }
                curr = curr.next;
            }
        }
    }
    prepend(key, value) {
        if (!this.head) {
            this.head = new Node(key, value);
        } else {
            let newNode = new Node(key, value);
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    size() {
        let count = 0;
        let curr = this.head;
        while (curr !== null) {
            count++;
            curr = curr.next;
        }
        return count;
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
    at(index) {
        let count = 0;
        let curr = this.head;
        while (curr !== null) {
            if (count === index) {
                return curr;
            }
            count++;

        }
    }

    pop() {
        let popped;
        let curr = this.head;
        while (curr !== null) {
            if (curr.next === this.tail) {
                popped = this.tail.data;
                curr.next = null;
                this.tail = curr;
                return popped;
            } else {
                curr = curr.next;
            }
        }
    }
    contains(key, value) {
        let curr = this.head;
        while (curr !== null) {
            if (curr.data === value && curr.key === key) {
                return true;
            } else {
                curr = curr.next;
            }
        }
        return false;
    }

    update(key, val) {
        let curr = this.head;

        while (curr !== null) {
            if (curr.key === key) {
                curr.data = val;
            }
            curr = curr.next;

        }
        return null;
    }

    remove(key) {
        let curr = this.head;
        let prev;
        while (curr !== null) {
            if (curr.key === key) {
                prev.next = curr.next;
                return 'removed';
            }
            curr = curr.next;
            prev = curr;

        }
        return null;
    }

    find(key) {
        let curr = this.head,
            count = 0;

        while (curr !== null) {
            if (curr.key === key) {
                return curr;
            }
            curr = curr.next;
            count++;
        }
        return null;
    }



    toString() {
        let curr = this.head;
        let str = "";

        while (curr !== null) {
            console.log('curr', curr.data, curr.next);
            str += '(' + curr.key + ', ' + curr.data + ')';
            if (curr.next !== null) {
                str += '->';
            }
            curr = curr.next;


        }
        return str;
    }


}


export { LinkedList };