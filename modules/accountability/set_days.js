const group = require('../../mongo_models/group.model');

const setDayHandler = async (ctx) => {
    const setting = ctx.message.text.split(' ');
    if (setting[1] === 'daily'){
        console.log('Daily');
    } else {
        for (const number of setting.slice(1)) {
            console.log(number);
        }
    }
}

module.exports = {
    setDayHandler
}