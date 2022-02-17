const { sendPromptHandler } = require('./send_prompt');
const { registerGroupHandler } = require('./register_group');
const { registerSelfHandler } = require('./register_self');
const { setDayHandler } = require('./set_days');

const attachAccountabilityCommands = (bot) => {
    bot.command('prompt', sendPromptHandler);
    bot.command('register_group', registerGroupHandler);
    bot.command('register_self', registerSelfHandler);
    bot.command('set_days', setDayHandler)
}

module.exports = attachAccountabilityCommands;