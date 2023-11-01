import text from "@/constants/text";
import { useLanguage } from "../Language/LanguageProvider";
import { Button } from "../ui/button";

const LoginButton = () => {
  const { language } = useLanguage();
  return <Button variant="default">{text[language].navbar.login}</Button>;
};

export default LoginButton;
