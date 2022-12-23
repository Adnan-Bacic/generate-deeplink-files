"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iosUniversalLinksConfig = exports.fileNameIos = void 0;
// file
exports.fileNameIos = 'apple-app-site-association';
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
exports.iosUniversalLinksConfig = [
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
