const group = require('../../mongo_models/group.model')


const registerGroupHandler = async (ctx) => {
    // console.log(ctx)
    if (ctx.chat.type === 'group') {
        console.log('IS A GROUP, creating mongo model');
        const name = ctx.chat.title;
        const chatID = ctx.chat.id;
        const groupCheck = await group.findOne({chatID: chatID})
        console.log(`groupCheck: ${groupCheck}`)
        if (groupCheck) {
            ctx.reply('Group has already been registered!')
            ctx.reply(`To join this group, send the command "/register_self ${ctx.chat.id}" in a private chat with this bot.`)
            return
        }
        try {
            const newGroup = new group({name: name, chatID: chatID});
            newGroup.save();
            ctx.reply('Successfully registered group!')
            ctx.reply(`To join this group, send the command "/register_self ${ctx.chat.id}" in a private chat with this bot.`)
        } catch(e) {
            console.log(e)
            ctx.reply('Failed to create group document')
        }
    }
    else {
        console.log('Is not a group');
        ctx.reply('Command can only be used in a group!')
    }
}

module.exports = {
    registerGroupHandler
}
