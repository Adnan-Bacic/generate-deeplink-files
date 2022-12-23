import { AppPackageNameExtension } from '../types';

export type FileNameIos = 'apple-app-site-association';

export type AppBundleID = 'com.example.appName';

export type AppIdPrefixProd = 'prefix1';
export type AppIdPrefixTeamID = 'prefix2';

type AppIdPrefix = AppIdPrefixProd | AppIdPrefixTeamID;

export interface IosUniversalLinksConfig {
  appIdPrefix: AppIdPrefix;
  bundleID: AppBundleID;
  bundleIdExtension: AppPackageNameExtension;
  paths: string[];
}

export interface DetailsContent {
  appID: string;
  paths: string[];
}

export interface Content {
  appLinks: {
    apps: [];
    details: DetailsContent[]
  }
}
