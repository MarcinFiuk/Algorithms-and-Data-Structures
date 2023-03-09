class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        const hashedKey = this._hash(key);

        if (!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = [];
        }
        this.keyMap[hashedKey].push([key, value]);

        return this;
    }

    get(key) {
        const hashedKey = this._hash(key);

        if (this.keyMap[hashedKey]) {
            const el = this.keyMap[hashedKey].find((el) => el[0] === key);
            return el[1];
        }
        return undefined;
    }

    keys() {
        const keysArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }

        return keysArr;
    }

    values() {
        const valuesArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }

        return valuesArr;
    }
}

const hT = new HashTable();

// console.log('before', hT);
hT.set('hi', 1);
hT.set('hello', 2);
hT.set('how', 11);
hT.set('are', 21);
hT.set('you', 4);
hT.set('welcome', 33);
hT.set('goodbye', 12);
hT.set('bye', 11);
// console.log('after', hT);
const r = hT.keys();
const v = hT.values();
console.log(r);
console.log(v);
