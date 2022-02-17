const dotenv = require('dotenv')

dotenv.config();

function sendPrompt (bot, groupChatID) {
    // const users = [
    //     {
    //         'name': 'Joel', 
    //         'chatID': process.env.JOELCHAT,
    //     },
    //     {
    //         'name': 'Jon', 
    //         'chatID': process.env.JONCHAT,
    //     },
    //     {
    //         'name': 'Roy', 
    //         'chatID': process.env.ROYCHAT,
    //     },
    // ]
    // const users;


    const generated = Math.floor(Math.random()*3);
    console.log(users[generated].name);
    // bot.telegram.sendMessage(users[0].chatID, `Hello ${users[0].name}! It's your turn to check in on everyone. Send something in the group by 11pm and make sure everyone's ok!`)
    bot.telegram.sendMessage(users[generated].chatID, `Hello ${users[generated].name}! It's your turn to check in on everyone. Send something in the group by 11pm and make sure everyone's ok!`)
}

const sendPromptHandler = async (ctx) => {
    sendPrompt(ctx)
}

module.exports = {
    sendPrompt,
    sendPromptHandler
}

// console.log(users)
// sendPrompt()