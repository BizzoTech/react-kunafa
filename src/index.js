// @flow
import createApp from './createApp';
import createSsrApp from './createSsrApp';
import {connect as kunafaConnect} from 'kunafa-client';
import RKunafa from './RKunafa';

const connect = (mapStateToProps, mapDispatchToProps) => component => {
  if(mapStateToProps){
    return kunafaConnect((state, ownProps) => {
      return {
        ...mapStateToProps(state, ownProps),
        translations: ownProps.selectors.translationsSelector(state)
      }
    }, mapDispatchToProps)(component);
  } else {
    return kunafaConnect((state, ownProps) => {
      return {
        translations: ownProps.selectors.translationsSelector(state)
      }
    }, mapDispatchToProps)(component);
  }
}

export default RKunafa;
export {
  createApp,
  createSsrApp,
  connect
};
