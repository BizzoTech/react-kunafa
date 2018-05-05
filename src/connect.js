import { connect as kunafaConnect } from "kunafa-client";
import I18n from "i18n-js";

const connect = (mapStateToProps, mapDispatchToProps) => component => {
  return kunafaConnect((state, ownProps) => {
    const translations = ownProps.selectors.translationsSelector
      ? ownProps.selectors.translationsSelector(state)
      : I18n.translations;
    if (mapStateToProps) {
      return {
        ...mapStateToProps(state, ownProps),
        translations
      };
    } else {
      return {
        translations
      };
    }
  }, mapDispatchToProps)(component);
};

export default connect;
