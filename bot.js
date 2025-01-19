import dotenv from 'dotenv';
import {session, Telegraf} from 'telegraf';
import { setupCommands } from './commands/index.js';
import { setupHandlers } from './handlers/index.js';
import logger from './middlewares/logger.js';
import {sessionStore} from "./middlewares/session.js";
dotenv.config();

const { BOT_TOKEN } = process.env;

const bot = new Telegraf(BOT_TOKEN);

bot.use(logger);
bot.use(session({ sessionStore }));

bot.on('video', async (ctx) => {
    const video = ctx.message.video;

    // Получение file_id
    const fileId = video.file_id;

    // Сохраняем file_id для дальнейшего использования (например, в базе данных или памяти)
    console.log('Received video file_id:', fileId);

    // Отправляем пользователю сообщение с file_id
    await ctx.reply(`Ваш видео файл ID: ${fileId}`);
});

bot.on('video', async (ctx) => {
    const video = ctx.message.video;

    // Получение file_id
    const fileId = video.file_id;

    // Сохраняем file_id для дальнейшего использования (например, в базе данных или памяти)
    console.log('Received video file_id:', fileId);

    // Отправляем пользователю сообщение с file_id
    await ctx.reply(`Ваш видео файл ID: ${fileId}`);
});

bot.on('photo', async (ctx) => {
    const photos = ctx.message.photo; // Массив изображений с разным разрешением
    const highestResolutionPhoto = photos[photos.length - 1]; // Берем изображение с самым высоким разрешением

    // Получение file_id
    const fileId = highestResolutionPhoto.file_id;

    // Сохраняем file_id для дальнейшего использования (например, в базе данных или памяти)
    console.log('Received photo file_id:', fileId);

    // Отправляем пользователю сообщение с file_id
    await ctx.reply(`Ваше изображение file_id: ${fileId}`);
});


// Подключение команд
setupCommands(bot);

// Подключение обработчиков
setupHandlers(bot);

// Запуск бота
bot.launch();

// Обработка сигналов остановки
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
