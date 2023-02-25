import { v4 as uuidv4 } from 'uuid';

export const generateTestEmail = () => {
  const emailTag = uuidv4().replace('-', '').substr(0, 9);
  return 'generatedtest' + '+' + emailTag + '@test.com';
};
