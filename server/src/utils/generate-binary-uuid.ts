import { v4 } from 'uuid';
import { toBinaryUUID } from './to-binary-uuid';

export const generateBinaryUUID = (): Buffer => {
  return toBinaryUUID(v4());
};
