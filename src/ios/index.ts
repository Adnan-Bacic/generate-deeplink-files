import fs from 'fs';
import { outputFolder } from '../constants/files';
import { fileNameIos, iosUniversalLinksConfig } from './data';
import { Content, DetailsContent } from './types';

// setup dataIos correctly
const detailsContent: DetailsContent[] = iosUniversalLinksConfig.map((item) => {
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

// create apple association file
fs.writeFileSync(`${outputFolder}/${fileNameIos}`, dataIos);
