"use client";

import WebsiteButton from "@/components/Buttons/WebsiteButton";
import { useLanguage } from "@/components/Language/LanguageProvider";
import text from "@/constants/text";
import Image from "next/image";

const ESB = () => {
  const { language } = useLanguage();
  const esbsText = text[language].esbs;
  return (
    <>
      <section>
        <h1>{esbsText.headSection.title}</h1>
        <Image
          src="/school/logo-esbs.png"
          alt="logo esbs"
          width={500}
          height={500}
          className="bg-white p-12"
        />
        {esbsText.headSection.description}
      </section>
      <section>
        <h2>{esbsText.campusSection.title}</h2>
        {esbsText.campusSection.description}
      </section>
      <section>
        <h2>{esbsText.apiPoleSection.title}</h2>
        {esbsText.apiPoleSection.description}
        <Image
          src="/school/map.jpg"
          alt="carte pôle api"
          width={500}
          height={500}
        />
      </section>
      <section>
        <h2>{esbsText.biotechnologySection.title}</h2>
        {esbsText.biotechnologySection.description}
      </section>
      <section>
        <h2>{esbsText.formationsSection.title}</h2>
        <div className="title-par">
          <h3>{esbsText.formationsSection.engineerPar.title}</h3>
          <WebsiteButton
            title="Plus d'infos sur les diplômes d'ingénieur"
            link="https://esbs.unistra.fr/formations/diplomes-dingenieur"
          />
          {esbsText.formationsSection.engineerPar.description}
        </div>
        <div className="title-par">
          <h3>{esbsText.formationsSection.masterPar.title}</h3>
          <WebsiteButton
            title="Plus d'infos sur les Masters"
            link="https://esbs.unistra.fr/formations/masters"
          />
          {esbsText.formationsSection.masterPar.description}
        </div>
        <div className="title-par">
          <h3>{esbsText.formationsSection.alternancePar.title}</h3>
          <WebsiteButton
            title="Plus d'infos sur l'Alternance"
            link="https://esbs.unistra.fr/formations/alternance"
          />
          {esbsText.formationsSection.alternancePar.description}
        </div>
        <div className="title-par">
          <h3>{esbsText.formationsSection.universityPar.title}</h3>
          <WebsiteButton
            title="Plus d'infos sur les DU"
            link="https://esbs.unistra.fr/formations/du"
          />
          {esbsText.formationsSection.universityPar.description}
        </div>
      </section>
    </>
  );
};

export default ESB;
