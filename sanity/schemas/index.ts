import { seoType } from './seo';
import { siteSettings } from './siteSettings';
import { homePage } from './homePage';
import { workProject } from './workProject';

import { testsPage } from './testsPage';
import { studioPage } from './studioPage';
import { theRisingTimesPage } from './theRisingTimesPage';

export const schemaTypes = [
  // Object types
  seoType,

  // Singleton documents
  siteSettings,
  homePage,
  testsPage,
  studioPage,
  theRisingTimesPage,

  // Collection documents
  workProject,
];
