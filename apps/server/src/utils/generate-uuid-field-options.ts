import { isBuffer, isString } from 'lodash';
import { Model } from 'sequelize-typescript';
import { toBinaryUUID } from './to-binary-uuid';
import { toStringUUID } from './to-string-uuid';

export const generateUUIDFieldOptions = <T extends Model>(
  name: keyof T,
): {
  type: string;
  set(value: string): void;
  get(): any;
} => {
  return {
    type: 'BINARY(16)',
    set(value: string) {
      this.setDataValue(name, isString(value) ? toBinaryUUID(value) : value);
    },
    get() {
      const uuid = this.getDataValue(name);
      return isBuffer(uuid) ? toStringUUID(uuid) : uuid;
    },
  };
};
