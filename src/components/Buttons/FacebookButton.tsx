import { Facebook } from "lucide-react";
import SocialNetworkButton from "./SocialNetworkButton";

const FacebookButton = ({ link, title }: { link: string; title: string }) => {
  return (
    <SocialNetworkButton
      className="bg-ui-facebook text-lc-facebook border-fg-ui-facebook hover:bg-ui-hover-facebook hover:border-fg-ui-hover-facebook"
      link={link}
      icon={<Facebook size={25} />}
      title={title}
    />
  );
};

export default FacebookButton;
