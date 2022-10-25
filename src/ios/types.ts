export type FileNameIos = 'apple-app-site-association';

export type AppBundleID = 'com.example.appName';

type BundleIdExtension = 'alpha' | 'beta' | 'gamma' | null;

export type AppIdPrefixProd = 'prefix1';
export type AppIdPrefixTeamID = 'prefix2';

export interface IosUniversalLinksConfig {
  appIdPrefix: AppIdPrefixProd | AppIdPrefixTeamID;
  bundleID: AppBundleID;
  bundleIdExtension: BundleIdExtension;
  paths: string[];
}

export interface DetailsContent {
  // todo: re-use existing types instead of string?
  appID: string;
  paths: string[];
}

export interface Content {
  appLinks: {
    apps: [];
    details: DetailsContent[]
  }
}
