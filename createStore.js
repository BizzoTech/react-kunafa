import R from 'ramda';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';

import createMiddlewares from './middlewares';

import createReducers from './reducers';

export default config => {
	const pkgReducers = createReducers(config);
	const AppReducer = combineReducers({
		...config.appReducers,
		...pkgReducers
	})

	const pkgMiddlewares = createMiddlewares(config);
	const AppMiddleware = applyMiddleware(ReduxThunkMiddleware, ...config.appMiddlewares, ...pkgMiddlewares);

	const AppStore = createStore(AppReducer, AppMiddleware);

	setInterval(() => {
		const hasLocalEvents = R.values(AppStore.getState().events).some(R.prop('localOnly'));
		const isProcessing = AppStore.getState().processing_local.isProcessing;
		const isConnected = navigator.onLine;
		if (hasLocalEvents && !isProcessing && isConnected) {
			AppStore.dispatch({type: 'PROCESS_LOCAL_ONLY'});
		}
	}, 1000);

	return AppStore;
}
