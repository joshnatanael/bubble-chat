import { validate } from 'uuid';
import { toBinaryUUID } from './to-binary-uuid';

export const overrideHookOptions = (options: any): void => {
  if (options.where) {
    Object.keys(options.where).forEach((key) => {
      options.where[key] = validate(options.where[key])
        ? toBinaryUUID(options.where[key])
        : options.where[key];
    });
  }
  if (options.include) {
    options.include = options.include.map((model: any) => {
      if (model.where) {
        for (const key in model.where) {
          model.where[key] = validate(model.where[key])
            ? toBinaryUUID(model.where[key])
            : model.where[key];
        }
      }
      return model;
    });
  }
};
