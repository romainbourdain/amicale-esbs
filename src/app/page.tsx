import SocialNetworkButton from "@/components/Buttons/SocialNetworkButton";
import { Facebook, Instagram } from "lucide-react";
import HomeCard from "./HomeCard";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-36">
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
          <SocialNetworkButton
            className="bg-ui-facebook text-lc-facebook border-fg-ui-facebook hover:bg-ui-hover-facebook hover:border-fg-ui-hover-facebook"
            link="https://www.facebook.com/esbs.amicale/?locale=fr_FR"
            icon={<Facebook size={25} />}
            title="Amicale ESBS"
          />
          <SocialNetworkButton
            className="bg-ui-instagram text-lc-instagram border-fg-ui-instagram hover:bg-ui-hover-instagram hover:border-fg-ui-hover-instagram"
            link="https://www.instagram.com/amicale_esbs/"
            icon={<Instagram size={25} />}
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
        <div className="flex gap-5 justify-center items-center md:items-stretch flex-col md:flex-row">
          <HomeCard
            title="Formations"
            description="Présentation de la formation ESBS et de la formation ChemBiotech"
            image="/home/card1.jpeg"
            link="/formations"
          />
          <HomeCard
            title="Vie étudiante"
            description="L'Amicale, instigatrice de plaisir"
            image="/home/card2.jpg"
            link="/vie-etudiante"
          />

          <HomeCard
            title="Intranet"
            description="Le diplôme d'ingénieur commun à l'ESBS (biotech) et à l'ECPM
          (chimie)"
            image="/home/card3.jpg"
            link="/intranet"
          />
        </div>
      </section>
      <section>
        <h2>Notre équipe</h2>
      </section>
    </div>
  );
};

export default HomePage;
