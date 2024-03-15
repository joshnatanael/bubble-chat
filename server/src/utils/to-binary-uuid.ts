import { ConflictException } from '@nestjs/common';
import { parse, validate } from 'uuid';

export const toBinaryUUID = (uuid: string): Buffer => {
  if (!validate(uuid))
    throw new ConflictException({
      code: 'InvalidEntry',
      message: 'Invalid string UUID',
    });
  return Buffer.from(parse(uuid) as any);
};
