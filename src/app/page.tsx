import FacebookButton from "@/components/Buttons/FacebookButton";
import InstagramButton from "@/components/Buttons/InstagramButton";
import Image from "next/image";
import HomeCard from "./HomeCard";
import Link from "next/link";
import MailButton from "@/components/Buttons/MailButton";

const HomePage = () => {
  return (
    <>
      <section>
        <div className="flex flex-col gap-3">
          <h1>Bienvenue sur le site de l'amicale</h1>
          <p className="md:text-lg lg:text-xl text-lc-gray">
            Ici, tu trouveras des conseils pour l'entretien d’admissibilité, des
            informations sur les formations proposées par l’école et leurs
            débouchés.
          </p>
        </div>
        <div className="flex gap-5">
          <FacebookButton
            link="https://www.facebook.com/esbs.amicale/?locale=fr_FR"
            title="Amicale ESBS"
          />
          <InstagramButton
            link="https://www.instagram.com/amicale_esbs/"
            title="@amicale_esbs"
          />
        </div>
        <Image
          src="/home/team.jpg"
          alt="team"
          height={720}
          width={1080}
          className="w-full rounded-xl"
        />
      </section>
      <section>
        <h2>Découvrir l'école</h2>
        <div className="grid-container">
          <HomeCard
            title="L'Amicale"
            description="L’Amicale étudiante de l’ESBS a pour rôle de promouvoir, organiser et financer les évènements de la vie étudiante."
            image=""
            link="/association"
          />
          <HomeCard
            title="L'ESBS"
            description="L’ESBS est une école publique, qui enseigne un programme trinational. Nous étudions les bases de la biotechnologie, les sciences de l’ingénieur et les sciences humaines, économiques et sociales (HES). La plupart des cours se déroulent à Strasbourg, mais des cours pratiques et des projets sont également dispensés en Allemagne et en Suisse."
            image="/home/esbs-card.jpg"
            link="/school/esbs"
          />

          <HomeCard
            title="ChemBioTech"
            description="ChemBioTech est LA nouvelle formation d’ingénieur reconnue par la CTI qui te permet d’avoir une double compétence en chimie et en biotechnologie dans deux écoles d’ingénieur simultanément, un cursus unique en France fondé pour répondre aux demandes de professionnels !"
            image="/home/chembiotech-card.jpg"
            link="/school/chembiotech"
          />
          <HomeCard
            title="Mois d'intégration"
            description=""
            image=""
            link="/student-life/integration"
          />
          <HomeCard
            title="Soirées ESBS"
            description="Toutes les informations sur les soirées à l'ESBS"
            image="/home/parties-card.jpg"
            link="/student-life/parties"
          />
          <HomeCard
            title="Sortir à Strasbourg"
            description="Liste non exaustive des adresses que nous vous recommandons à Strasbourg."
            image="/home/strasbourg-card.jpg"
            link="/student-life/strasbourg"
          />
        </div>
      </section>
      <section>
        <h2>Nos partenaires</h2>
        <div className="title-par">
          <h3>BDE Telecom Physique Strasbourg</h3>
          <div className="flex items-center gap-5 my-3">
            <FacebookButton
              title="BDE Télécom Physique Strasbourg"
              link="https://www.facebook.com/groups/1748570788912258/user/100080186935601/contributions"
            />
            <InstagramButton
              title="@bdetps2023"
              link="https://www.instagram.com/bdetps2023/"
            />
            <MailButton
              title="contact@bde-tps.fr"
              link="mailto:contact@bde-tps.fr"
            />
          </div>
          <p>
            L’ESBS partage une partie de ses locaux ainsi que le foyer étudiant
            (le Fouaille) avec l’école de physique TPS. L’Amicale BS et le BDE
            TPS sont donc en étroite collaboration.
          </p>
          <p>
            Le BDE est l’équivalent de l’amicale mais pour les TPS. Il est
            composé de 13 membres avec quelques postes qui varient. L’élection
            du BDE est très spéciale puisqu’elle s’organise en un mois complet
            de campagne en janvier. Pendant ce mois, plusieurs listes vous
            organiseront des soirées quotidiennement pour que vous votiez pour
            eux. De quoi passer un mois inoubliable, enfin peut être que
            certains vont en oublier une partie.
          </p>
          <p>
            Pour plus d’informations sur le BDE et les associations/clubs de
            TPS, voici le <Link href="https://bde-tps.fr/">lien internet</Link>{" "}
            du BDE.
          </p>
          <p>
            Il est important de se rappeler que les TPS ne mordent pas et que la
            cohabitation de nos deux écoles est surtout un moyen de se faire
            encore plus d’amis.
          </p>
        </div>
        <div className="title-par">
          <h3>Bureau des Fêtes</h3>
          <div className="flex items-center gap-5 my-3">
            <FacebookButton
              title="BDF PS"
              link="https://www.facebook.com/BdfPs/"
            />
          </div>
          <p>
            Le BDF est une association PS-BS, s’occupant du son et des effets
            lumineux lors des évènements. Elle forme aussi les élèves à utiliser
            les platines, afin de devenir de vrai DJ.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
