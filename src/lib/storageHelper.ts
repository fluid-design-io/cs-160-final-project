import { Storage } from "@capacitor/storage";

export const checkStorage = async (key) => {
  const { value } = await Storage.get({
    key,
  });
  return !!value;
};

export const setStorage = async (key, value) => {
  await Storage.set({ key, value: JSON.stringify(value) });
};

export const getStorage = async (key) => {
  await Storage.get({ key });
};
