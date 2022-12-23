import {
  AppIdPrefixProd, AppIdPrefixTeamID, FileNameIos, IosUniversalLinksConfig, AppBundleID,
} from './types';

// file
export const fileNameIos: FileNameIos = 'apple-app-site-association';

// ios app bundle id
const baseBundleID: AppBundleID = 'com.example.appName';

// prefix
const appIdPrefixProd: AppIdPrefixProd = 'prefix1';
const appIdPrefixTeamID: AppIdPrefixTeamID = 'prefix2';

// example paths
const pathsData: string[] = [
  'path1', 'path2', 'path3', 'path4',
];

// test dataIos
export const iosUniversalLinksConfig: IosUniversalLinksConfig[] = [
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
