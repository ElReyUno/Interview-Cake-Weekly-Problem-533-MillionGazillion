module.exports = {
    reporters: [
        "default",
        ["jest-stare", {
            "resultDir": "test-results",
            "reportTitle": "Test Results",
            "coverageLink": "../coverage/lcov-report/index.html"
        }],
        ["jest-json-reporter", {
            "outputPath": "test-results.json"
        }]
    ]
};