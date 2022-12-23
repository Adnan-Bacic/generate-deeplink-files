"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const files_1 = require("../constants/files");
const data_1 = require("./data");
// setup config correctly
const appDataAndroid = data_1.androidAppLinkConfig.map((item) => {
    let concatenatedPackageName = `${item.target.package_name}`;
    // prod app doesnt have an bundleIdExtension, so its null
    if (item.packageNameExtension !== null) {
        // add bundleIdExtension to non-prod versions
        concatenatedPackageName = `${concatenatedPackageName}.${item.packageNameExtension}`;
    }
    const result = {
        relation: item.relation,
        target: {
            namespace: item.target.namespace,
            package_name: concatenatedPackageName,
            sha256_cert_fingerprints: item.target.sha256_cert_fingerprints,
        },
    };
    return result;
});
/*
must stringify the data
also passing parameters for formatting
*/
const dataAndroid = JSON.stringify(appDataAndroid, null, 2);
// create digital asset links json file
fs_1.default.writeFileSync(`${files_1.outputFolder}/${data_1.fileNameAndroid}`, dataAndroid);
