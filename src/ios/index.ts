import fs from 'fs';

// file
const outputFolderIos = 'files';
const fileNameIos = 'apple-app-site-association';

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
const appDataIos = [
  {
    appIdPrefix: appIdPrefixProd,
    bundleID: baseBundleID,
    bundleIDExtension: null,
    paths: pathsData,
  },
  {
    appIdPrefix: appIdPrefixTeamID,
    bundleID: baseBundleID,
    bundleIDExtension: 'alpha',
    paths: pathsData,
  },
  {
    appIdPrefix: appIdPrefixTeamID,
    bundleID: baseBundleID,
    bundleIDExtension: 'beta',
    paths: pathsData,
  },
  {
    appIdPrefix: appIdPrefixTeamID,
    bundleID: baseBundleID,
    bundleIDExtension: 'gamma',
    paths: pathsData,
  },
];

// setup dataIos correctly
const detailsContent = appDataIos.map((item) => {
  let concatenatedAppID = `${item.appIdPrefix}.${item.bundleID}`;

  // prod app doesnt have an bundleIDExtension
  if (item.bundleIDExtension !== null) {
    // add bundleIDExtension to non-prod versions
    concatenatedAppID = `${concatenatedAppID}.${item.bundleIDExtension}`;
  }

  const result = {
    appID: concatenatedAppID,
    paths: item.paths,
  };

  return result;
});

const content = {
  appLinks: {
    apps: [],
    details: detailsContent,
  },
};

const dataIos = JSON.stringify(content, null, 2);

fs.writeFileSync(`${outputFolderIos}/${fileNameIos}`, dataIos);
