"use client";

import FacebookButton from "@/components/Buttons/FacebookButton";
import InstagramButton from "@/components/Buttons/InstagramButton";
import MailButton from "@/components/Buttons/MailButton";
import { useLanguage } from "@/components/Language/LanguageProvider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import text from "@/constants/text";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { language } = useLanguage();
  const router = useRouter();

  const cards = [
    {
      title: text[language].home.discoverSection.cards.amicale.title,
      description:
        text[language].home.discoverSection.cards.amicale.description,
      image: "",
      link: "/association",
    },
    {
      title: text[language].home.discoverSection.cards.esbs.title,
      description: text[language].home.discoverSection.cards.esbs.description,
      image: "/home/esbs-card.jpg",
      link: "/school/esbs",
    },
    {
      title: text[language].home.discoverSection.cards.chembiotech.title,
      description:
        text[language].home.discoverSection.cards.chembiotech.description,
      image: "/home/chembiotech-card.jpg",
      link: "/school/chembiotech",
    },
    {
      title: text[language].home.discoverSection.cards.integration.title,
      description:
        text[language].home.discoverSection.cards.integration.description,
      image: "",
      link: "/student-life/integration",
    },
    {
      title: text[language].home.discoverSection.cards.parties.title,
      description:
        text[language].home.discoverSection.cards.parties.description,
      image: "/home/parties-card.jpg",
      link: "/student-life/parties",
    },
    {
      title: text[language].home.discoverSection.cards.strasbourg.title,
      description:
        text[language].home.discoverSection.cards.strasbourg.description,
      image: "/home/strasbourg-card.jpg",
      link: "/student-life/strasbourg",
    },
  ];

  return (
    <>
      <section>
        <div className="flex flex-col gap-3">
          <h1>{text[language].home.headSection.title}</h1>
          <div className="md:text-lg lg:text-xl text-lc-gray">
            {text[language].home.headSection.description}
          </div>
        </div>
        <div className="flex gap-5">
          <FacebookButton
            link="https://www.facebook.com/esbs.amicale/?locale=fr_FR"
            title={text[language].home.headSection.facebookButton}
          />
          <InstagramButton
            link="https://www.instagram.com/amicale_esbs/"
            title={text[language].home.headSection.instagramButton}
          />
        </div>
        <Image
          src="/home/amicale.jpg"
          alt="amicale image"
          height={720}
          width={1080}
          className="w-full rounded-xl"
        />
      </section>
      <section>
        <h2>{text[language].home.discoverSection.title}</h2>
        <div className="grid-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              onClick={() => router.push(card.link)}
              className="w-full max-w-sm flex flex-col justify-between group cursor-pointer hover:border-fg-ui-hover-gray transition-all duration-500 ease-in-out"
            >
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription className="break-normal">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex items-end justify-center">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={card.image}
                    sizes="100vw"
                    alt={`Image ${card.title}`}
                    width={10}
                    height={10}
                    className="w-full aspect-square object-cover max-w-[300px] group-hover:scale-110 transition-all duration-500 ease-in-out"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <h2>{text[language].home.partnersSection.title}</h2>
        <div className="flex flex-col gap-20">
          <div className="flex gap-10 items-center flex-col lg:flex-row">
            <div className="title-par">
              <h3>{text[language].home.partnersSection.bde.title}</h3>
              <div className="button-container">
                <FacebookButton
                  title={text[language].home.partnersSection.bde.facebookButton}
                  link="https://www.facebook.com/bde.telecomps"
                />
                <InstagramButton
                  title={
                    text[language].home.partnersSection.bde.instagramButton
                  }
                  link="https://www.instagram.com/bdetps2023/"
                />
                <MailButton
                  title={text[language].home.partnersSection.bde.mailButton}
                  link="mailto:contact@bde-tps.fr"
                />
              </div>
              {text[language].home.partnersSection.bde.description}
            </div>
            <Image
              src="/home/bde.png"
              alt="bde image"
              height={200}
              width={200}
              className="bg-white rounded-full aspect-square hidden lg:block"
            />
          </div>
          <div className="flex gap-10 items-center flex-col lg:flex-row">
            <Image
              src="/home/bdf.png"
              alt="bdf images"
              height={200}
              width={200}
              className="bg-white rounded-full aspect-square object-contain hidden lg:block"
            />
            <div className="title-par">
              <h3>{text[language].home.partnersSection.bdf.title}</h3>
              <div className="py-3">
                <FacebookButton
                  title={text[language].home.partnersSection.bdf.facebookButton}
                  link="https://www.facebook.com/BdfPs/"
                />
              </div>
              {text[language].home.partnersSection.bdf.description}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
