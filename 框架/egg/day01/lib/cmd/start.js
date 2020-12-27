'use strict';

const path = require('path');

const Command = require('../command');
// const debug = require('debug')('egg-script:start');
// const { execFile } = require('mz/child_process');
// const fs = require('mz/fs');
// const homedir = require('node-homedir');
// const mkdirp = require('mz-modules/mkdirp');
// const moment = require('moment');
// const sleep = require('mz-modules/sleep');
const spawn = require('child_process').spawn;
// const utils = require('egg-utils');

class StartCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: egg-scripts start [options] [baseDir]';
    // this.serverBin = path.join(__dirname, '../start-cluster');

    this.options = {
      title: {
        description: 'process title description, use for kill grep, default to `egg-server-${APP_NAME}`',
        type: 'string',
      },
      workers: {
        description: 'numbers of app workers, default to `os.cpus().length`',
        type: 'number',
        alias: [ 'c', 'cluster' ],
        default: process.env.EGG_WORKERS,
      },
      port: {
        description: 'listening port, default to `process.env.PORT`',
        type: 'number',
        alias: 'p',
        default: process.env.PORT,
      },
      env: {
        description: 'server env, default to `process.env.EGG_SERVER_ENV`',
        default: process.env.EGG_SERVER_ENV,
      },
      framework: {
        description: 'specify framework that can be absolute path or npm package',
        type: 'string',
      },
      daemon: {
        description: 'whether run at background daemon mode',
        type: 'boolean',
      },
      stdout: {
        description: 'customize stdout file',
        type: 'string',
      },
      stderr: {
        description: 'customize stderr file',
        type: 'string',
      },
      timeout: {
        description: 'the maximum timeout when app starts',
        type: 'number',
        default: 300 * 1000,
      },
      'ignore-stderr': {
        description: 'whether ignore stderr when app starts',
        type: 'boolean',
      },
      node: {
        description: 'customize node command path',
        type: 'string',
      },
    };
  }

  get description() {
    return 'Start server at prod mode';
  }

  * run (context) {
    const { argv, env, cwd, execArgv } = context;
    console.log(argv)
  }
}

function* getRotatelog(logfile) {
  yield mkdirp(path.dirname(logfile));

  if (yield fs.exists(logfile)) {
    // format style: .20150602.193100
    const timestamp = moment().format('.YYYYMMDD.HHmmss');
    // Note: rename last log to next start time, not when last log file created
    yield fs.rename(logfile, logfile + timestamp);
  }

  return yield fs.open(logfile, 'a');
}

function stringify(obj, ignore) {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (!ignore.includes(key)) {
      result[key] = obj[key];
    }
  });
  return JSON.stringify(result);
}

module.exports = StartCommand;
