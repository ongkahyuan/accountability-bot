const attachAccountabilityCommands = require('./accountability/index')

/**
 * connects attachers
 * @param {Telegraf.Composer<Telegraf.Context>} bot
 */
 const attachCommands = (bot) => {
    attachAccountabilityCommands(bot);
  }
  
  module.exports = attachCommands;
  