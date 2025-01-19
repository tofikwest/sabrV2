export default (bot) => {
    bot.on('message', async (ctx) => {
        await ctx.reply(`Ваше сообщение: ${ctx.message.text}`);
    });
};
