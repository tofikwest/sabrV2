import startCommand from './start.js';
import helpCommand from './help.js';

export const setupCommands = (bot) => {
    startCommand(bot);
    helpCommand(bot);
};
