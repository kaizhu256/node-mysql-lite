/* istanbul instrument in package jslint-lite */
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
        // init Error.stackTraceLimit
        Error.stackTraceLimit = 20;
        // init local
        local = {};
        // init modeJs
        local.modeJs = (function () {
            try {
                return typeof navigator.userAgent === 'string' &&
                    typeof document.querySelector('body') === 'object' &&
                    typeof XMLHttpRequest.prototype.open === 'function' &&
                    'browser';
            } catch (errorCaughtBrowser) {
                return module.exports &&
                    typeof process.versions.node === 'string' &&
                    typeof require('http').createServer === 'function' &&
                    'node';
            }
        }());
        // init global
        local.global = local.modeJs === 'browser'
            ? window
            : global;
        switch (local.modeJs) {
        // re-init local from window.local
        case 'browser':
            local = local.global.utility2_rollup || local.global.local;
            local.global.utility2.objectSetDefault(local, local.global.utility2);
            break;
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
            options.exampleFileList = [
                'README.md',
                './mysql/Readme.md',
                'test.js',
                local.env.npm_package_main + '.js'
            ];
            options.moduleDict = {
                'db-lite.Connection.prototype': {
                    exampleFileList: [],
                    exports: local.Connection.prototype
                },
                'db-lite.Pool.prototype': {
                    exampleFileList: [],
                    exports: local.Pool.prototype
                },
                'db-lite.PoolCluster.prototype': {
                    exampleFileList: [],
                    exports: local.PoolCluster.prototype
                },
                'db-lite.Query.prototype': {
                    exampleFileList: [],
                    exports: local.Query.prototype
                }
            };
            local.buildDoc(options, onError);
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
