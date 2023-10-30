import { Instagram } from "lucide-react";
import SocialNetworkButton from "./SocialNetworkButton";

const InstagramButton = ({ link, title }: { link: string; title: string }) => {
  return (
    <SocialNetworkButton
      className="bg-ui-instagram text-lc-instagram border-fg-ui-instagram hover:bg-ui-hover-instagram hover:border-fg-ui-hover-instagram"
      link={link}
      icon={<Instagram size={25} />}
      title={title}
    />
  );
};

export default InstagramButton;
