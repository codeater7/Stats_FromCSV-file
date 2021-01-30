"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var sync = fs_1.default.readFileSync('football.csv', { encoding: "utf-8" });
console.log(sync);
var removeTailing = sync.split('\n').map(function (eachrow) { return eachrow.split(','); });
var againPlease = removeTailing.map(function (eachrow) { return [eachrow[0], eachrow[1], eachrow[2], eachrow[2], eachrow[4], eachrow[5]]; });
console.log(removeTailing);
console.log("again, please", againPlease);
//[[ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ],]
