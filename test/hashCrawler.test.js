const assert = require('assert');
const fs = require('fs');
const path = require('path');
const HashCrawler = require('../src/hashCrawler');

describe('HashCrawler', function() {
    let crawler;
    let urls;

    beforeAll(function() {
        const filePath = path.join(__dirname, 'test_urls.txt');
        urls = fs.readFileSync(filePath, 'utf-8').split('\n').filter(Boolean);
    });

    beforeEach(function() {
        crawler = new HashCrawler();
    });

    it('should visit new URLs', function() {
        urls.forEach(url => crawler.visit(url));
        urls.forEach(url => assert.strictEqual(crawler.hasVisited(url), true));
    });

    it('should not visit the same URL twice', function() {
        const url = urls[0];
        crawler.visit(url);
        crawler.visit(url);
        assert.strictEqual(crawler.visited.size, 1);
    });

    it('should handle different URLs correctly', function() {
        const url1 = urls[0];
        const url2 = 'http://notvisited.com';
        crawler.visit(url1);
        assert.strictEqual(crawler.hasVisited(url2), false);
    });
});