import Storage from 'store2';

export default {
  keys: Storage.keys,
  get: Storage.get,
  save: Storage.set,
  delete: Storage.delete,
  getAll: Storage.getAll
}
