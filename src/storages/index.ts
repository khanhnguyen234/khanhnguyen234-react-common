import { Request } from "express";
import { COOKIE_STORAGE, CookieStorage, Storage } from "./cookie";
import { LOCAL_STORAGE, LocalStorage } from "./local-storage";

export default (req?: Request) => ({
  [COOKIE_STORAGE]: CookieStorage(req),
  [LOCAL_STORAGE]: LocalStorage(),
});
export { Storage, COOKIE_STORAGE, LOCAL_STORAGE };
