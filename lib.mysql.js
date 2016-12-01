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
    local = require('mysql');
    local.Connection = local.createConnection({}).constructor;
    local.Pool = local.createPool({}).constructor;
    local.PoolCluster = local.createPoolCluster({}).constructor;
    local.Query = local.createQuery({}).constructor;
    module.exports = local;
}());
