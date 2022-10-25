import fs from 'fs';
import { outputFolder } from '../constants/files';
import { AndroidAppLinksConfig, Config, FileNameAndroid } from './types';

// file
const fileNameAndroid: FileNameAndroid = 'assetlinks.json';

// config
const androidAppLinkConfig: AndroidAppLinksConfig[] = [
  {
    relation: [
      'delegate_permission/common.handle_all_urls',
    ],
    target: {
      namespace: 'android_app',
      package_name: 'com.example.appName',
      sha256_cert_fingerprints: [
        'stringCertificate',
      ],
    },
    packageNameExtension: null,
  },
  {
    relation: [
      'delegate_permission/common.handle_all_urls',
    ],
    target: {
      namespace: 'android_app',
      package_name: 'com.example.appName',
      sha256_cert_fingerprints: [
        'stringCertificate',
      ],
    },
    packageNameExtension: 'alpha',
  },
  {
    relation: [
      'delegate_permission/common.handle_all_urls',
    ],
    target: {
      namespace: 'android_app',
      package_name: 'com.example.appName',
      sha256_cert_fingerprints: [
        'stringCertificate',
      ],
    },
    packageNameExtension: 'beta',
  },
  {
    relation: [
      'delegate_permission/common.handle_all_urls',
    ],
    target: {
      namespace: 'android_app',
      package_name: 'com.example.appName',
      sha256_cert_fingerprints: [
        'stringCertificate',
      ],
    },
    packageNameExtension: 'gamma',
  },
];

// setup config correctly
const appDataAndroid: Config[] = androidAppLinkConfig.map((item) => {
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

const dataAndroid = JSON.stringify(appDataAndroid, null, 2);

fs.writeFileSync(`${outputFolder}/${fileNameAndroid}`, dataAndroid);
