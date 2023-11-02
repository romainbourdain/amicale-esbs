"use client";

import text from "@/constants/text";
import Link from "next/link";

const Footer = ({ params }: { params: { lang: "fr" | "en" } }) => {
  const footerText = text[params.lang].footer;
  return (
    <footer className="w-full flex flex-col">
      <div className="bg-ui-gray flex px-10 gap-5 py-4">
        <div>
          <h4>Liens utiles</h4>
          <ul>
            <li>Site ESBS</li>
            <li>Site ChemBioTech</li>
            <li>Site Unistra</li>
          </ul>
        </div>
        <div>
          <h4>Partenaires</h4>
          <ul>
            <li>BDE TPS</li>
            <li>BDF</li>
            <li>ITS</li>
          </ul>
        </div>
        <div>
          <h4>Contactez nous</h4>
        </div>
      </div>
      <div className="bg-subtle-gray text-center text-xs sm:text-sm flex flex-col gap-1 py-5">
        <div>Mur des Webmasters • Sitemap • Manifest</div>
        <span>
          {footerText.copyright}{" "}
          <Link href="https://github.com/romainbourdain" className="underline">
            Romain Bourdain
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
