import frHomeText from "./fr/home";
import frFooterText from "./fr/footer";
import frAssociationText from "./fr/association";

import enHomeText from "./en/home";
import enFooterText from "./en/footer";
import frNavbarText from "./fr/navbar";
import enNavbarText from "./en/navbar";

const frText = {
  home: frHomeText,
  association: frAssociationText,
  footer: frFooterText,
  navbar: frNavbarText,
};

const enText = {
  home: enHomeText,
  footer: enFooterText,
  navbar: enNavbarText,
};

const text = {
  fr: frText,
  en: { ...frText, ...enText },
};

export default text;
