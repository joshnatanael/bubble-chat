import { UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    throw new UnprocessableEntityException({
      code: 'BcryptError',
      message: err.message,
    });
  }
};
