import path from 'path';

export default  (bot) => {
    bot.command('start', async (ctx) => {
        ctx.reply('Добро пожаловать в бот!');
        await ctx.replyWithVideo(
            'BAACAgIAAxkBAAMsZ4xTC8eltPehLedp3lZpN5RsRhMAAiJaAAIXpWlIgij82UztGQ02BA',
            {
                caption: 'Ваше приветственное видео!',
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Store',  // Текст кнопки
                                callback_data: 'store'  // Данные, которые можно обрабатывать при нажатии
                            },
                            {
                                text: 'Роут 2',
                                callback_data: 'route_2'
                            }
                        ]
                    ]
                }
            }
        );
    });
}