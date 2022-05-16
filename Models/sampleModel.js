"use strict";
exports.__esModule = true;
exports.sampleSchema = void 0;
var mongoose_1 = require("mongoose");
exports.sampleSchema = new mongoose_1.Schema({
    name: String
});
var sampleModel = (0, mongoose_1.model)('sample', exports.sampleSchema);
exports["default"] = sampleModel;
