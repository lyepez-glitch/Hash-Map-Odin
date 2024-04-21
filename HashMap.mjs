import { LinkedList } from './LinkedList.mjs';
class HashMap {
    constructor() {
        this.map = [];
    }
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % 16;
        }

        return hashCode;
    }
    set(key, value) {
        let hashIndex = hash(key);
        const foundKey = this.map[hashIndex];
        // if key already exists
        // update with new value
        if (foundKey instanceof LinkedList) {
            const foundEntry = foundKey.at(hashIndex);
            if (foundEntry) {
                //create update method in linkedlist
            } else {
                const newList = new LinkedList();
                newList.append(value);
                this.map[hashIndex].push(newList);
            }
        } else if (foundKey) {
            foundKey = value;
        } else if (!foundKey) {
            this.map[hashIndex] = value;
        }

        // check if bucket has reached loadfactor if so grow siz
        //some of the mehtods may help with this

    }
    get(key) {
        // return val associated to tis key
        // if key not found return null
    }
    has(key) {
        // if key is in the hash mpa return true
        // else return false
    }
    remove(key) {
        // if key is in hash map
        // remove the key and val and return true
        // else if not found return false
    }
    length() {
        // return count of keys in hash map
    }
    clear() {
        //removes all keys and vals in the hash map
    }
    keys() {
        //returns array of all keys in hash map
    }
    values() {
        // returns array of all vals in hash map
    }
    entries() {
        // returns array with every key and val pair like [[firstKey, firstValue], [secondKey, secondValue]]
    }
}

// e.c.

// make class HashSet that is the same as map except only has keys with no vals