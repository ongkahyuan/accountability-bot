const group = require('../../mongo_models/group.model')
const user = require('../../mongo_models/user.model')

const registerSelfHandler = async (ctx) => {
    if (ctx.chat.type === 'private') {
        const groupChatID = ctx.message.text.split(' ')[1];
        if (!groupChatID) {
            ctx.reply('groupID cannot be blank!')
            return
        }

        const chatID = ctx.chat.id;
        const firstName = ctx.chat.first_name;
        const lastName = ctx.chat.last_name;
        const username = ctx.chat.username;
        const groupLinked = await group.findOne({chatID: groupChatID});
        console.log(groupLinked._id);

        const userCheck = await user.findOne({chatID: chatID})
        console.log(`userCheck: ${userCheck}`)
        if (userCheck) { // if the user already exists
            if (userCheck.group.includes(groupLinked._id)) { // if the user has already registered
                ctx.reply('You\'ve already registered for this group!')
                return
            }
            const newGroups = userCheck.group;
            newGroups.push(groupLinked._id);
            await user.findByIdAndUpdate(userCheck._id, {group: newGroups});
        } else { // if the user needs to be created
            const newUser = new user({firstName: firstName,lastName: lastName, username: username, group: [groupLinked._id], chatID: chatID })
            newUser.save();
        }
        ctx.reply(`You've been added to the group "${groupLinked.name}"`);
        ctx.telegram.sendMessage(groupLinked.chatID, `${firstName} has been registered for this group!`);
    } else {
        console.log(ctx.chat.type);
        ctx.reply('Command can only be used in a private chat with this bot!')
    }
}

module.exports = {
    registerSelfHandler
}
