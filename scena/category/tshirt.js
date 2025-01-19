import prisma from "../../prismaClient.js";

const getTshirts = async () => {
    const tshirtsList = await prisma.category.findFirst({
        where: {
            name: 'Футболки'
        },
        include: {
            products: {
                include: {
                    images: true, // Включаем связанные изображения продуктов
                },
            },
        },
    });

    return tshirtsList;
};


export const tshirtScena = async (ctx, currentIndex = 0) => {
    console.dir(currentIndex)

    const tshirtProducts = await getTshirts(); // Получаем список продуктов

    const renderProduct = async (index) => {
        const product = tshirtProducts.products[index];
        const productImages = product.images.map((image) => image.img); // Берем все изображения продукта
        const productImage = productImages[0]; // Покажем первое изображение (можно усложнить, показывая разные)

        await ctx.replyWithPhoto(productImage, {
            caption: `*${product.name}*\n${product.description}\nЦена: $${product.price}`,
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: '⬅️ Назад', callback_data: `prev_${tshirtProducts.callbackData}` },
                        { text: '➡️ Вперед', callback_data: `next_${tshirtProducts.callbackData}` }
                    ]
                ]
            }
        });
    };

    await renderProduct(currentIndex);
    ctx.session = { currentIndex, totalProducts: tshirtProducts.products.length };

};