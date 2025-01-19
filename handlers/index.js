import callbackQueryHandler from './callbackQuery.js';
import messageHandler from './messageHandler.js';

export const setupHandlers = (bot) => {
    callbackQueryHandler(bot);
    messageHandler(bot);
};
