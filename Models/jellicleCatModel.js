"use strict";
exports.__esModule = true;
exports.jellicleSchema = void 0;
var mongoose_1 = require("mongoose");
exports.jellicleSchema = new mongoose_1.Schema({
    name: String,
    facts: String
});
var jellicleCatModel = (0, mongoose_1.model)('cat', exports.jellicleSchema);
exports["default"] = jellicleCatModel;
