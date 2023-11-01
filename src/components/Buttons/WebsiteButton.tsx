import { Globe } from "lucide-react";
import SocialNetworkButton from "./SocialNetworkButton";

const WebsiteButton = ({ link, title }: { link: string; title: string }) => {
  return (
    <SocialNetworkButton
      className="bg-ui-gray text-lc-gray border-fg-ui-gray hover:bg-ui-hover-gray hover:border-fg-ui-hover-gray"
      link={link}
      icon={<Globe size={25} />}
      title={title}
    />
  );
};

export default WebsiteButton;
