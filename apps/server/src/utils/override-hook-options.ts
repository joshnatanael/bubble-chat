import { validate } from 'uuid';
import { toBinaryUUID } from './to-binary-uuid';
import { Op } from 'sequelize';

export const overrideHookOptions = (options: any): void => {
  if (options.where) {
    Object.keys(options.where).forEach((key) => {
      if (Array.isArray(options.where[key])) {
        options.where[key] = options.where[key].map((el: string) =>
          validate(el) ? toBinaryUUID(el) : el,
        );
      } else {
        options.where[key] = validate(options.where[key])
          ? toBinaryUUID(options.where[key])
          : options.where[key];
      }
    });
  }
  if (options.include) {
    options.include = options.include.map((model: any) => {
      if (model.where) {
        if (model.where[Op.not]) {
          for (const key in model.where[Op.not]) {
            model.where[Op.not][key] = validate(model.where[Op.not][key])
              ? toBinaryUUID(model.where[Op.not][key])
              : model.where[Op.not][key];
          }
        }
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
