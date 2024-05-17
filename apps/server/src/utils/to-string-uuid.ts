import { ConflictException } from '@nestjs/common';
import { stringify } from 'uuid';

export const toStringUUID = (uuid: Buffer): string => {
  try {
    return stringify(uuid);
  } catch (err) {
    throw new ConflictException({
      code: 'InvalidEntry',
      message: 'Invalid buffer UUID',
    });
  }
};
