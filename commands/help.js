export default (bot) => {
    bot.command('help', (ctx) => {
        ctx.reply('Это список доступных команд:\n/start - начать\n/help - помощь');
    });
};
