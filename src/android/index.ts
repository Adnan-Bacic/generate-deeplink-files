import fs from 'fs';
import { outputFolder } from '../constants/files';

// file
const fileNameAndroid = 'assetlinks.json';

// android app package name
const packageName = 'com.example.appName';

// test dataAndroid
const appDataAndroid = [
  {
    relation: [
      'delegate_permission/common.handle_all_urls',
    ],
    target: {
      namespace: 'android_app',
      package_name: packageName,
      sha256_cert_fingerprints: [
        'string1', 'string2',
      ],
    },
  },
  {
    relation: [
      'delegate_permission/common.get_login_creds',
    ],
    target: {
      namespace: 'web',
      site: 'http://example.com/',
    },
  },
];

const dataAndroid = JSON.stringify(appDataAndroid, null, 2);

fs.writeFileSync(`${outputFolder}/${fileNameAndroid}`, dataAndroid);
