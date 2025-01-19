import prisma from "../../prismaClient.js";

export const hoodieScena = async (ctx) => {
    await ctx.replyWithPhoto('Выберите категорию товаров:', {
        reply_markup: { inline_keyboard: [ categories ] }
    });
};
