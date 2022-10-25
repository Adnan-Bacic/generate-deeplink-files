import fs from 'fs';
import { outputFolder } from '../constants/files';
import {
  AppIdPrefixProd, AppIdPrefixTeamID, Content, DetailsContent, FileNameIos, IosUniversalLinksConfig,
  AppBundleID,
} from './types';

// file
const fileNameIos: FileNameIos = 'apple-app-site-association';

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
const appDataIos: IosUniversalLinksConfig[] = [
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

// setup dataIos correctly
const detailsContent: DetailsContent[] = appDataIos.map((item) => {
  let concatenatedAppID = `${item.appIdPrefix}.${item.bundleID}`;

  // prod app doesnt have an bundleIDExtension
  if (item.bundleIdExtension !== null) {
    // add bundleIDExtension to non-prod versions
    concatenatedAppID = `${concatenatedAppID}.${item.bundleIdExtension}`;
  }

  const result = {
    appID: concatenatedAppID,
    paths: item.paths,
  };

  return result;
});

const content: Content = {
  appLinks: {
    apps: [],
    details: detailsContent,
  },
};

/*
must stringify the data
also passing parameters for formatting
*/
const dataIos: string = JSON.stringify(content, null, 2);

fs.writeFileSync(`${outputFolder}/${fileNameIos}`, dataIos);
