import Storage from 'store2';
import R from 'ramda';

export default {
  keys: Storage.keys.bind(Storage),
  get: Storage.get.bind(Storage),
  save: Storage.set.bind(Storage),
  delete: Storage.remove.bind(Storage),
  getAll: async() => {
    const items = Storage.getAll();
    return R.values(items);
  }
}
