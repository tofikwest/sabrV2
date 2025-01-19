const logger = async (ctx, next) => {
    console.log(`[${new Date().toISOString()}] ${ctx.updateType} received`);
    await next();
};

export default logger;
