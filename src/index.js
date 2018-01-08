import createApp from './createApp';
import createSsrApp from './createSsrApp';
import { connect as kunafaConnect } from 'kunafa-client';
import RKunafa from './RKunafa';
import I18n from 'i18n-js';


const connect = (mapStateToProps, mapDispatchToProps) => component => {
  return kunafaConnect((state, ownProps) => {
    const translations = ownProps.selectors.translationsSelector ? ownProps.selectors.translationsSelector(state) : I18n.translations;
    if (mapStateToProps) {
      return {
        ...mapStateToProps(state, ownProps),
        translations
      }
    } else {
      return {
        translations
      }
    }
  }, mapDispatchToProps)(component);
}

export default RKunafa;
export {
  createApp,
  createSsrApp,
  connect
};
