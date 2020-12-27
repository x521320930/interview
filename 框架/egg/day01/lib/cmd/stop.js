'use strict';

const path = require('path');
// const util = require('util');
// const sleep = require('mz-modules/sleep');
const Command = require('../command');
const isWin = process.platform === 'win32';
const osRelated = {
  titleTemplate: isWin ? '\\"title\\":\\"%s\\"' : '"title":"%s"',
  appWorkerPath: isWin ? 'egg-cluster\\lib\\app_worker.js' : 'egg-cluster/lib/app_worker.js',
  agentWorkerPath: isWin ? 'egg-cluster\\lib\\agent_worker.js' : 'egg-cluster/lib/agent_worker.js',
};

class StopCommand extends Command {

  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: egg-scripts stop [--title=example]';
    this.serverBin = path.join(__dirname, '../start-cluster');
    this.options = {
      title: {
        description: 'process title description, use for kill grep',
        type: 'string',
      },
    };
  }

  get description() {
    return 'Stop server';
  }
}

module.exports = StopCommand;
