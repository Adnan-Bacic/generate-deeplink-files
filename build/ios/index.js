"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const files_1 = require("../constants/files");
// file
const fileNameIos = 'apple-app-site-association';
// ios app bundle id
const baseBundleID = 'com.example.appName';
// prefix
const appIdPrefixProd = 'prefix1';
const appIdPrefixTeamID = 'prefix2';
// example paths
const pathsData = [
    'path1', 'path2', 'path3', 'path4',
];
// test dataIos
const appDataIos = [
    {
        appIdPrefix: appIdPrefixProd,
        bundleID: baseBundleID,
        bundleIdExtension: null,
        paths: pathsData,
    },
    {
        appIdPrefix: appIdPrefixTeamID,
        bundleID: baseBundleID,
        bundleIdExtension: 'alpha',
        paths: pathsData,
    },
    {
        appIdPrefix: appIdPrefixTeamID,
        bundleID: baseBundleID,
        bundleIdExtension: 'beta',
        paths: pathsData,
    },
    {
        appIdPrefix: appIdPrefixTeamID,
        bundleID: baseBundleID,
        bundleIdExtension: 'gamma',
        paths: pathsData,
    },
];
// setup dataIos correctly
const detailsContent = appDataIos.map((item) => {
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
fs_1.default.writeFileSync(`${files_1.outputFolder}/${fileNameIos}`, dataIos);
