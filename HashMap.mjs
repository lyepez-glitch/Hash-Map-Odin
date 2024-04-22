import { LinkedList } from './LinkedList.mjs';
class HashMap {
    constructor() {
        this.map = [];
        this.count = 0;
        this.items = {};
        this.loadFactor = 0.75;
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
        let hashIndex = this.hash(key);
        const foundKey = this.map[hashIndex];
        // if key already exists
        // update with new value
        if (foundKey instanceof LinkedList) {
            const foundEntry = foundKey.find(key, value);
            if (foundEntry) {
                //create update method in linkedlist
                foundKey.update(key, value);
                this.items[key] = value;

            } else {
                this.count++;
                this.items[key] = value;

                const newList = new LinkedList();
                newList.append(key, value);
                this.map[hashIndex].push(newList);
            }
        } else if (foundKey) {
            foundKey = value;
        } else if (!foundKey) {
            this.map[hashIndex] = value;
            this.count++;
        }
        let mapSize = this.loadFactor * this.map.length;
        if (this.map.length >= mapSize) {
            const doubleSize = 2 * this.map.length;
            const newArr = new Array(doubleSize);
            this.map.forEach((item) => {
                newArr.push(item)
            })
            this.map = newArr;

        }
        // check if bucket has reached loadfactor if so grow siz
        //some of the mehtods may help with this
    }
    get(key) {
        const hashedIndex = this.hash(key);
        const found = this.map[hashedIndex];
        if (found instanceof LinkedList) {
            const foundNode = found.find(key);
            if (foundNode) {
                return foundNode.data;
            }

        } else if (found) {
            return found;
        }
        // return val associated to tis key
        // if key not found return null
        return null;
    }
    has(key) {
        const hashedIndex = this.hash(key);
        if (this.map[hashedIndex])
            return true;
        return false;
        // if key is in the hash mpa return true
        // else return false
    }
    remove(key) {
        // if key is in hash map
        const hashedIndex = this.hash(key);
        const found = this.map[hashedIndex];
        if (found instanceof LinkedList) {
            found.remove(key);
            return true;
        } else if (found) {
            this.map.splice(hashedIndex, 1);
            return true;
        } else {
            return false;
        }
        // remove the key and val and return true
        // else if not found return false
    }
    length() {
        // return count of keys in hash map
        return this.count;
    }
    clear() {
        this.map.splice(0, this.map.length);
        //removes all keys and vals in the hash map
    }
    keys() {
        //returns array of all keys in hash map
        let keys = [];
        for (const key in this.items) {
            keys.push(key);
        }
        return keys;

    }
    values() {
        // returns array of all vals in hash map
        let values = [];
        for (const key in this.items) {
            values.push(this.items[key]);
        }
        return values;
    }
    entries() {
        // returns array with every key and val pair like [[firstKey, firstValue], [secondKey, secondValue]]
        let entries = [];
        for (let key in this.items) {
            let entry = [key, items[key]];
            entries.push(entry);
        }
        return entries;
    }
}


export { HashMap };