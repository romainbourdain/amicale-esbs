"use client";

import text from "@/constants/text";

const AssociationPage = ({ params }: { params: { lang: "fr" | "en" } }) => {
  const associationText = text[params.lang].association;
  return (
    <>
      <section>
        <h1>{associationText.headSection.title}</h1>
        {associationText.headSection.description}
      </section>
      <section>
        <h2>{associationText.trombinoscopeSection.title}</h2>
      </section>
      <section>
        <h2>{associationText.rolesSection.title}</h2>
        {associationText.rolesSection.roles.map((role) => (
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
