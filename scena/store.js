import prisma from "../prismaClient.js";
import {data} from "../mock/data.js";

const getCategories = async () => {
    try {
        const getCategories = await prisma.category.findMany({
            select: {
                name: true,
                callbackData: true,
            }
        });

        const validateData = getCategories.map(category => ({
            text: category.name,
            callback_data: category.callbackData
        }))

        return validateData;
    } catch (e) {
        throw e;
    }
}

export const storeLogic = async (ctx) => {

    await data()

    const categories = await getCategories();

    if(categories.length === 0) { await ctx.reply('На данный момент категории не доступны.') };

    await ctx.reply('Выберите категорию товаров:', {
        reply_markup: { inline_keyboard: [ categories ] }
    });
};


