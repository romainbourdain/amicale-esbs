"use client";

import { useLanguage } from "@/components/Language/LanguageProvider";
import text from "@/constants/text";

const AssociationPage = () => {
  const { language } = useLanguage();
  return (
    <>
      <section>
        <h1>{text[language].association.headSection.title}</h1>
        {text[language].association.headSection.description}
      </section>
      <section>
        <h2>{text[language].association.trombinoscopeSection.title}</h2>
      </section>
      <section>
        <h2>{text[language].association.rolesSection.title}</h2>
        {text[language].association.rolesSection.roles.map((role) => (
          <div key={role.title} className="title-par">
            <h3>{role.title}</h3>
            {role.description}
          </div>
        ))}
      </section>
    </>
  );
};

export default AssociationPage;
