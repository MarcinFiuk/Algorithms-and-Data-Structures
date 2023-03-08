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
}

const hT = new HashTable();

// console.log('before', hT);
hT.set('a', 1);
hT.set('a', 2);
hT.set('b', 1);
hT.set('c', 1);
hT.set('aaa', 1);
hT.set('aaaaa', 1);
hT.set('gasfsaf', 1);
hT.set('dsafa', 111);
console.log('after', hT);

const r = hT.get('dsafa');

console.log(r);
