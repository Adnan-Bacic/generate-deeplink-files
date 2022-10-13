"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// file
const outputFolderIos = 'src/ios';
const fileNameIos = 'apple-app-site-association';
// ios app bundle id
const baseBundleID = 'com.example.appName';
// prefix
const prefix1 = 'prefix1';
const prefix2 = 'prefix2';
// example paths
const pathsData = [
    'path1', 'path2', 'path3',
];
// test dataIos
const appDataIos = [
    {
        appIdPrefix: prefix1,
        bundleID: baseBundleID,
        extension: null,
        paths: pathsData,
    },
    {
        appIdPrefix: prefix2,
        bundleID: baseBundleID,
        extension: 'alpha',
        paths: pathsData,
    },
    {
        appIdPrefix: prefix2,
        bundleID: baseBundleID,
        extension: 'beta',
        paths: pathsData,
    },
    {
        appIdPrefix: prefix2,
        bundleID: baseBundleID,
        extension: 'gamma',
        paths: pathsData,
    },
];
// setup dataIos correctly
const detailsContent = appDataIos.map((item) => {
    let baseAppID = `${item.appIdPrefix}.${item.bundleID}`;
    // prod app doesnt have an extension
    if (item.extension !== null) {
        // add extension to non-prod versions
        baseAppID = `${baseAppID}.${item.extension}`;
    }
    const result = {
        appID: baseAppID,
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
const dataIos = JSON.stringify(content, null, 2);
fs_1.default.writeFileSync(`${outputFolderIos}/${fileNameIos}`, dataIos);
