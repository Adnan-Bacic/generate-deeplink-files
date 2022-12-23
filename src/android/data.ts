import { FileNameAndroid, AndroidAppLinksConfig } from './types';

// file
export const fileNameAndroid: FileNameAndroid = 'assetlinks.json';

// config
export const androidAppLinkConfig: AndroidAppLinksConfig[] = [
  {
    relation: [
      'delegate_permission/common.handle_all_urls',
    ],
    target: {
      namespace: 'android_app',
      package_name: 'com.example.appName',
      sha256_cert_fingerprints: [
        'certificateProd',
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
        'certificateDev',
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
        'certificateDev',
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
        'certificateDev',
      ],
    },
    packageNameExtension: 'gamma',
  },
];
