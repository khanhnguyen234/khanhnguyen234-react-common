import _get from "lodash/get";

export const LOCAL_STORAGE = "localStorage";

const defaultStorage = {
  get: () => {},
  set: () => {},
  remove: () => {},
};
export function LocalStorage() {
  if (!window.__CLIENT__) {
    return defaultStorage;
  }
  try {
    const localStorage = _get(window, "localStorage");

    if (!localStorage) {
      return defaultStorage;
    }

    return {
      get: (name: string) => {
        let value = null;

        try {
          value = JSON.parse(localStorage.getItem(name));
        } catch (ex) {
          value = localStorage.getItem(name);
        }

        return value;
      },
      set: (name: string, value: any) =>
        localStorage.setItem(name, JSON.stringify(value)),
      remove: (name: string) => localStorage.removeItem(name),
    };
  } catch (ex) {
    return defaultStorage;
  }
}
