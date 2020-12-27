'use strict';

// const fs = require('fs');
// const path = require('path');
const BaseCommand = require('common-bin');
const Logger = require('zlogger');
const helper = require('./helper');

class Command extends BaseCommand {
  constructor(rawArgv) {
    super(rawArgv);

    Object.assign(this.helper, helper);

    this.parserOptions = {
      removeAlias: true,
      removeCamelCase: true,
      execArgv: true,
    };

    this.logger = new Logger({
      prefix: '[eagle-scripts] ',
      time: false,
    });
  }

  get context() {
    return super.context;
  }

  exit(code) {
    process.exit(code);
  }
}

module.exports = Command;
