import UniversalCookie from "universal-cookie";
import { Request } from "express";
import { get } from "lodash-es";

export interface Storage {
  get(key: string, options?: any): any;
  set(key: string, value: any, options?: any): void;
  remove(key: string): void;
}

export const COOKIE_STORAGE = "cookie";

export function CookieStorage(req: Request): Storage {
  const cookie = new UniversalCookie(get(req, ["headers", "cookie"]));

  return {
    get: (name: string, options?) => cookie.get(name, options),
    set: (name: string, value, options) => cookie.set(name, value, options),
    remove: (name: string, options?) => cookie.remove(name, options),
  };
}
