import prisma from "../prismaClient.js";

export const data = async () => {
    const isCategoryExist = await prisma.category.count();
    console.log(isCategoryExist)
    if(isCategoryExist){
        return;
    }

    const category = await prisma.category.create({
        data: {
            name: 'Футболки',
            description: 'Товары из футболок',
            callbackData: 't-shirts'
        }
    });

    const category2 = await prisma.category.create({
        data: {
            name: 'Худи',
            description: 'Товары из Худи',
            callbackData: 'hoodie'
        }
    });

    // Создание продукта
    const product = await prisma.product.create({
        data: {
            name: 'Красная футболка',
            description: 'Футболка с логотипом',
            price: 19.99,
            callbackData: 'red-t-shirt',
            categoryId: category.id
        }
    });

    const product2 = await prisma.product.create({
        data: {
            name: 'Черный худи',
            description: 'худи с логотипом',
            price: 19.99,
            callbackData: 'red-t-shirt',
            categoryId: category2.id
        }
    });

    console.log('Создан продукт:', product);
}