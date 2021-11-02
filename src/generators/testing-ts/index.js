/* eslint-disable max-classes-per-file */
import { TsTestingWebTestRunnerMixin } from '../testing-wtr-ts/index.js';

export const TsTestingMixin = subclass =>
  class extends TsTestingWebTestRunnerMixin(subclass) {
    async execute() {
      await super.execute();

      this.copyTemplateJsonInto(
        `${__dirname}/templates/package.json`,
        this.destinationPath('package.json'),
      );
    }
  };

export const TsTestingScaffoldMixin = subclass =>
  class extends subclass {
    async execute() {
      await super.execute();

      const { pkgName } = this.templateData;
      this.copyTemplate(
        `${__dirname}/templates/my-el.test.ts`,
        this.destinationPath(`test/${pkgName}.test.ts`),
      );
    }
  };
