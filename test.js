/* istanbul instrument in package mysql-lite */
/*jslint
    bitwise: true,
    browser: true,
    maxerr: 8,
    maxlen: 96,
    node: true,
    nomen: true,
    regexp: true,
    stupid: true
*/
(function () {
    'use strict';
    var local;



    // run shared js-env code - pre-init
    (function () {
        // init local
        local = {};
        // init modeJs
        local.modeJs = 'node';
        // init global
        local.global = global;
        switch (local.modeJs) {
        // re-init local from example.js
        case 'node':
            local = global.local = (local.global.utility2_rollup || require('utility2'))
                .requireExampleJsFromReadme();
            break;
        }
    }());
    switch (local.modeJs) {



    // run node js-env code - function
    case 'node':
        local.testCase_build_doc = function (options, onError) {
        /*
         * this function will test build's doc handling-behavior
         */
            options = {};
            local.buildDoc(options, onError);
        };

        local.testCase_build_readme = function (options, onError) {
        /*
         * this function will test build's readme handling-behavior
         */
            options = {};
            options.readmeInit = function (options) {
                // search-and-replace readmeTemplate
                [
                    (/ \[!\[istanbul coverage\].*?(\n)/),
                    (/\n# cdn download\n[\S\s]*(\n# documentation\n)/),
                    (/^\| test-server-. : \|.*?\n()/gm),
                    (/\n# quickstart\b[\S\s]*?(\n# package.json\n)/)
                ].forEach(function (rgx) {
                    options.readmeTemplate = options.readmeTemplate.replace(rgx, '$1');
                });
            };
            local.buildReadmeJslintLite(options, onError);
        };
        break;
    }
    switch (local.modeJs) {



    // run node js-env code - post-init
    case 'node':
        // run test-server
        local.testRunServer(local);
        break;
    }
}());
