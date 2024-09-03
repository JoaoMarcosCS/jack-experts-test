import Cookie from "js-cookie";

export const saveCookies = (userId:number) => {
    Cookie.set("userId", userId.toString());
}