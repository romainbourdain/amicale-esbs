import text from "@/constants/text";
import { useLanguage } from "../Language/LanguageProvider";
import { Button } from "../ui/button";

const LoginButton = () => {
  const lang = useLanguage();
  return <Button variant="default">{text[lang].navbar.login}</Button>;
};

export default LoginButton;
