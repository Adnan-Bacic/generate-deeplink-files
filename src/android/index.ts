import fs from 'fs';
import { outputFolder } from '../constants/files';
import { androidAppLinkConfig, fileNameAndroid } from './data';
import { AssetLinksConfig } from './types';

// setup config correctly
const appDataAndroid: AssetLinksConfig[] = androidAppLinkConfig.map((item) => {
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
fs.writeFileSync(`${outputFolder}/${fileNameAndroid}`, dataAndroid);
