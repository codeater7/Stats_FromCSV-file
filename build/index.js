"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var sync = fs_1.default.readFileSync('football.csv', { encoding: 'utf-8' });
var changetoDate = function (item) {
    var split = item.split('/').map(function (splits) { return parseInt(splits); });
    //const first:number = parseInt(split[0])
    //const second:number= parseInt(split[1])
    //const third:number = parseInt(split[2])
    return new Date(split[2], split[1] - 1, split[0]);
};
var data = [];
var Data = sync
    .split('\n')
    .map(function (eachrow) { return eachrow.split(','); })
    .map(function (eachrow) {
    return [changetoDate(eachrow[0]), eachrow[1], eachrow[2], eachrow[3], parseInt(eachrow[4]), eachrow[5]];
});
console.log(Data);
