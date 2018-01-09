import Storage from "store2";

export default {
  keys: Storage.keys.bind(Storage),
  get: Storage.get.bind(Storage),
  save: Storage.set.bind(Storage),
  delete: Storage.remove.bind(Storage),
  getAll: async () => {
    const items = Storage.getAll();
    return Object.values(items);
  }
};
