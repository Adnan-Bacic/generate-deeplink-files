"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const files_1 = require("../constants/files");
const data_1 = require("./data");
// setup dataIos correctly
const detailsContent = data_1.iosUniversalLinksConfig.map((item) => {
    let concatenatedAppID = `${item.appIdPrefix}.${item.bundleID}`;
    // prod app doesnt have an bundleIDExtension
    if (item.bundleIdExtension !== null) {
        // add bundleIDExtension to non-prod versions
        concatenatedAppID = `${concatenatedAppID}.${item.bundleIdExtension}`;
    }
    const result = {
        appID: concatenatedAppID,
        paths: item.paths,
    };
    return result;
});
const content = {
    appLinks: {
        apps: [],
        details: detailsContent,
    },
};
/*
must stringify the data
also passing parameters for formatting
*/
const dataIos = JSON.stringify(content, null, 2);
// create apple association file
fs_1.default.writeFileSync(`${files_1.outputFolder}/${data_1.fileNameIos}`, dataIos);
