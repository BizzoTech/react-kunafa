const store = require('store2');
import R from 'ramda';

const removeOldDocs = (cacheDocTypes, cacheLimit, keepInCache, state) => {
  const items = R.values(store.getAll());
  const docs = items.filter(item => item && cacheDocTypes.includes(item.type));
  const sortedDocs = R.sort((d1, d2) => d2.fetchedAt - d1.fetchedAt, docs.filter(d => !(keepInCache(d, state) || d._id === state.currentProfile._id)));
  if(sortedDocs.length > cacheLimit){
    const toBeRemovedDocs = R.takeLast(sortedDocs.length - cacheLimit, sortedDocs);
    for(doc of toBeRemovedDocs){
      store.delete(doc._id);
    }
  }
}

export default (cacheDocTypes, cacheLimit, keepInCache) => store => next => {
  setTimeout(() => {
    const items = R.values(store.getAll());
    next({
      type: 'LOAD_DOCS_FROM_CACHE',
      docs: items.filter(item => item && cacheDocTypes.includes(item.type))
    });
  }, 200);

  return action => {
    let result = next(action);

		setTimeout(() => {
			if (action.type === 'LOAD_DOCS') {
        for(doc of action.docs){
          store.set(doc._id, doc);
        }
        if(action.docs.length > 1){
          removeOldDocs(cacheDocTypes, cacheLimit, keepInCache, store.getState());
        }
	    }
		}, 0);

    return result;
  }
}
