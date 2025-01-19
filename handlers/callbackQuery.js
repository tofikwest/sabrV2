import {storeLogic} from "../scena/store.js";
import {tshirtScena} from "../scena/category/tshirt.js";

export default (bot) => {
    bot.on('callback_query', async (ctx) => {
        const callbackData = ctx.callbackQuery.data;
        const { currentIndex = 0, totalProducts = 0 } = ctx.session || {};

            switch (callbackData) {
                case 'store':
                    await storeLogic(ctx);
                    break;

                case 't-shirts':
                    await tshirtScena(ctx);
                    break;

                case 'hoodie':
                    await storeLogic(ctx);
                    break;

                case 'prev_t-shirts':
                    ctx.session.currentIndex =
                        ((ctx.session?.currentIndex ?? 0) - 1 + totalProducts) % totalProducts;
                    await ctx.deleteMessage();
                    await tshirtScena(ctx, ctx.session.currentIndex); // Рендер нового продукта

                    break;
                case 'next_t-shirts':
                    ctx.session.currentIndex =
                        ((ctx.session?.currentIndex ?? 0) + 1 + totalProducts) % totalProducts;
                    await ctx.deleteMessage();
                    await tshirtScena(ctx, ctx.session.currentIndex); // Рендер нового продукта
                    break;
                default:
                    break;
            }
    });
};
