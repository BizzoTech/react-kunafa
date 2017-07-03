import R from 'ramda';

import createSyncMiddleware from './sync_middleware';
import createEventSourcingMiddleware from './event_sourcing_middleware';
import createLocalCacheMiddleware from './local_cache_middleware';
import createProcessLocalEventsMiddleware from './process_local_events_middleware';

import eventChangeHandlerMiddleware from './event_change_handler_middleware';

export default config => {
  const syncMiddleware = createSyncMiddleware(R.append({
    name: "events",
    filter: function(doc) {
      return doc.type == "EVENT"; // & !doc.appliedOnClient;
    },
    actions: {
      remove: 'REMOVE_EVENT',
      update: 'UPDATE_EVENT',
      insert: 'ADD_EVENT',
      load: 'LOAD_EVENTS'
    }
  }, config.syncPaths || []));

  const eventSourcingMiddleware = createEventSourcingMiddleware(config.localOnlyActions, config.needLocalProcessing, config.getActionPreProcessors, config.getActionPostProcessors, config.getRelevantDocsIds)

  const localCacheMiddleware = createLocalCacheMiddleware(config.cacheDocTypes, config.cacheLimit, config.keepInCache);

  const processLocalEventsMiddleware = createProcessLocalEventsMiddleware(config.processLocalEvent);

  return [processLocalEventsMiddleware, localCacheMiddleware, eventSourcingMiddleware, syncMiddleware, eventChangeHandlerMiddleware];
}
