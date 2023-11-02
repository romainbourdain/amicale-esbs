import frText from "./fr";
import enText from "./en";

const text = {
  fr: frText,
  en: { ...frText, ...enText },
};

export default text;
