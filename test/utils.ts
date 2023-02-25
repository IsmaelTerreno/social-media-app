import { v4 as uuidv4 } from 'uuid';

import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from 'unique-names-generator';

export const generateTestName = () => {
  return uniqueNamesGenerator({
    dictionaries: [colors, adjectives, animals],
    style: 'capital',
  });
};

export const generateTestEmail = () => {
  const emailTag = uuidv4().replace('-', '').substr(0, 9);
  return 'generatedtest' + '+' + emailTag + '@test.com';
};
