import {Redis} from "@telegraf/session/redis";

export const sessionStore = Redis({
    url: "redis://127.0.0.1:6379",
});