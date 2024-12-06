class BloomFilter {
    constructor(size = 1000) {
        this.size = size;
        this.bitArray = new Array(size).fill(false);
    }

    _hash1(value) {
        // Simple hash function
        let hash = 0;
        for (let i = 0; i < value.length; i++) {
            hash = (hash << 5) + value.charCodeAt(i);
            hash = hash & hash; // Convert to 32bit integer
            hash = Math.abs(hash);
        }
        return hash % this.size;
    }

    _hash2(value) {
        // Another simple hash function
        let hash = 0;
        for (let i = 0; i < value.length; i++) {
            hash = (hash << 7) + value.charCodeAt(i);
            hash = hash & hash; // Convert to 32bit integer
            hash = Math.abs(hash);
        }
        return hash % this.size;
    }

    add(value) {
        const hash1 = this._hash1(value);
        const hash2 = this._hash2(value);
        this.bitArray[hash1] = true;
        this.bitArray[hash2] = true;
    }

    contains(value) {
        const hash1 = this._hash1(value);
        const hash2 = this._hash2(value);
        return this.bitArray[hash1] && this.bitArray[hash2];
    }
}

module.exports = BloomFilter;