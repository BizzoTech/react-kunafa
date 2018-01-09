import { createSelector } from "reselect";
const R = require("ramda");
import I18n from "i18n-js";

export const sharedDocsSelector = state => state.sharedDocs;

export const translationsSelector = createSelector(
  sharedDocsSelector,
  sharedDocs => {
    const newTranslations = R.filter(d => d.type === "translation", sharedDocs);
    const newTranslationsObj = Object.values(newTranslations).reduce(
      (obj, o) => {
        return { ...obj, [o.lang]: o.doc };
      },
      {}
    );
    const newMergedTranslations = R.mergeDeepRight(
      I18n.translations,
      newTranslationsObj
    );
    I18n.translations = newMergedTranslations;
    return newMergedTranslations;
  }
);
