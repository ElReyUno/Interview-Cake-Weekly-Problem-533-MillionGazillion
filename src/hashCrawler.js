const crypto = require('crypto');

class HashCrawler {
    constructor() {
        this.visited = new Set();
    }

    _hashUrl(url) {
        return crypto.createHash('sha256').update(url).digest('hex');
    }

    visit(url) {
        const hash = this._hashUrl(url);
        this.visited.add(hash);
    }

    hasVisited(url) {
        const hash = this._hashUrl(url);
        return this.visited.has(hash);
    }
}

module.exports = HashCrawler;