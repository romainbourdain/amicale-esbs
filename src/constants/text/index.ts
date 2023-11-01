import frHomeText from "./fr/home";
import frFooterText from "./fr/footer";
import frAssociationText from "./fr/association";

import enHomeText from "./en/home";
import enFooterText from "./en/footer";

const frText = {
  home: frHomeText,
  association: frAssociationText,
  footer: frFooterText,
};

const enText = {
  home: enHomeText,
  footer: enFooterText,
};

const text = {
  fr: frText,
  en: { ...frText, ...enText },
};

export default text;
