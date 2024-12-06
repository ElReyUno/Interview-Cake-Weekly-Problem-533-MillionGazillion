const assert = require('assert');
const fs = require('fs');
const path = require('path');
const BloomFilter = require('../src/bloomFilterCrawler');

describe('BloomFilter', function() {
    let bloomFilter;
    let urls;

    beforeAll(function() {
        const filePath = path.join(__dirname, 'test_urls.txt');
        urls = fs.readFileSync(filePath, 'utf-8').split('\n').filter(Boolean);
    });

    beforeEach(function() {
        bloomFilter = new BloomFilter();
    });

    it('should add and check for values correctly', function() {
        urls.forEach(url => bloomFilter.add(url));
        urls.forEach(url => assert.strictEqual(bloomFilter.contains(url), true));
    });

    it('should return false for values not added', function() {
        const value = 'http://notadded.com';
        assert.strictEqual(bloomFilter.contains(value), false);
    });
});