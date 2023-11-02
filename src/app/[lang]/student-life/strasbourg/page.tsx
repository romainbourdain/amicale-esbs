import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Place = {
  title: string;
  address: string;
  description: string;
};

const bars: Place[] = [
  {
    title: "ELASTIC BAR",
    address: "27 Rue des Orphelins, 67000 Strasbourg",
    description:
      "En plein cœur de la Kruteneau, quartier animé de strasbourg, l’elastic bar propose des sons différents chaque soir allant du rock au reggae en passant par le ragga, le hip/hop, l’electro, dub, drum&bass, breakbeat, techno, house et bien d’autres, le tout dans une ambiance underground. Vous pourrez y trouver un choix d’absinthes et de cocktails variés.",
  },
  {
    title: "LE RAFIOT",
    address: "Quai des Pêcheurs, 67000 Strasbourg",
    description:
      "Le rafiot est un Bar Club Restaurant sur une péniche, située quai des Pêcheurs à Strasbourg. Le rafiot fait partie de ces lieux où le charme agît dès qu’on monte sur son pont.",
  },
  {
    title: "KORRIGAN",
    address: "20 Rue du Vieux Marché aux Grains, 67000 Strasbourg",
    description:
      "Lieu d’After de BS/PS, caveau, mojitos délicieux. Il y règne une très bonne ambiance et vous pourrez apprécier les deux salles, l’une où l’on danse, et l’autre plus calme. Au bar, vous retrouverez une grande diversité de boissons et surtout un large choix de bière.",
  },
  {
    title: "JIMMY’S",
    address: "30 Quai des Bateliers, 67000 Strasbourg",
    description:
      "Bar repère des deux écoles depuis des années, l’établissement est une institution à Strasbourg dans le monde de la nuit, et des générations entières sont venues s’y trémousser (et ce n’est pas fini). Le Jimmy’s est l’un des seuls lieus ouverts toutes les nuits, du lundi au dimanche compris.",
  },
  {
    title: "SALAMANDRE",
    address: "3 Rue Paul Janet, 67000 Strasbourg",
    description:
      "Haut lieu des sorties étudiantes. World, Rock, Electro, Chanson, Trip Hop une pléthore d’artistes y sont passés en live. Le reste de la semaine place à la fête sous toutes ses formes avec une programmation là aussi très hétéroclite avec un large éventail allant de la salsa au disco, en passant par le rock.",
  },
  {
    title: "L’ALCHIMISTRE",
    address: "3 rue des Soeurs, Strasbourg, 67000 Strasbourg",
    description:
      "Petit bar dont le décors est digne d’un film Harry Potter (tel l’entre d’un sorcier avec des arches gothiques et des feuillages sur les murs), l’Alchimiste propose une carte de coktails aussi originaux les uns que les autres (avec des noms délirants). Attention aux cocktails sucrés et traitres en fin de soirée. Nous recommandons le shooter vodka tabasco, il passe tout seul !",
  },
  {
    title: "BARBEROUSSE",
    address: "6 Rue du Faisan, Strasbourg, 67000 Strasbourg",
    description:
      "Envie de se mettre dans la peau de Jack Sparrow? Le Barberousse t’accueille dans un univers très iodé car la décoration fait penser à la cale d’un bateau de pirate. Si tu es un fanatique de rhum et que tu veux te biturer au breuvage ambré, tiens toi prêt car tu y trouvera 62 sortes de rhums, 49 rhums arrangés et des rhums planteur à gogo.",
  },
  {
    title: "WXYZ",
    address: "2 Avenue du Rhin, Strasbourg, 67000 Strasbourg",
    description:
      "Bar au rez-de-chaussé de l’Hôtel Aloft à côté du centre commercial Rivétoile, tu peux y manger, faire une partie de billard ou boire une bière. Le bar est ouvert à tout le monde (et pas seulement à la clientèle de l’hôtel). Les étudiants, comme les hommes d’affaires peuvent s’y retrouver à toute heure de la journée. Tous les coktails sont à 9 euros lors du Happy Hours, du dimanche au jeudi de 18h à 19h30.",
  },
  {
    title: "DELIRIUM CAFE",
    address: "5 Quai de Paris, Strasbourg, 67000 Strasbourg",
    description:
      "Connu de tous, il était évident que le Délirium Café allez être dans notre liste. Amoureux de la bière, vient te poser (ou te trémousser) dans dans un espace de 320m² à l’atmosphère chaleureuse. Si tu veux faire un black-out de qualité, c’est définitivement le bon endroit!",
  },
];

const restaurants: Place[] = [
  {
    title: "BRASSEUR",
    address: "22 Rue des Veaux, 67000 Strasbourg",
    description:
      "Lieu pour la soirée pré-entretien et pré-rentré. Vous pourrez y apprécier deux des spécialités régionales: les flammekueches et la bière brassée. Le décor retrace les différentes étapes de l’élaboration de la bière. A l’Happy Hour, tarte flambée et bière à volonté.",
  },
  {
    title: "LE COCOLOMBO",
    address: "2 rue des Glacières, 67000 Strasbourg",
    description:
      "Au coeur de la Petite-France, c’est un restaurant à tapas mais aussi un bar de nuit. Si tu veux faire la fête sur des rythmes latinos, fonce ! L’endroit est chaleureux et le personnel sympathique. Les tapas sont excellentes et en quantité ! On conseille l’assortiments de tapas chauds/froids/salés/sucrés pour 16€ par personne). Rapport qualité/prix top !",
  },
  {
    title: "EAST CANTEEN",
    address: "69 Grand’Rue, 67000 Strasbourg",
    description:
      "Restaurant asiatique avec une décoration trés branchée (doté de néons, de conduits apparents, de touches orientales). On y va pour l’effervescence de la Grand’Rue et ses grandes banquettes ultra girly. Ouvert jusqu’à 23h même le samedi ! On conseille les DAK DALKOMHAN sauce aigre-douce à 13,10 euros (sorte de poulet frit coréen).",
  },
  {
    title: "TZATZI",
    address: "1 Rue Sainte-Barbe, 67000 Strasbourg",
    description:
      "Avec sa cuisine Méditerranéenne et Orientale, le Tzatzi va te faire voyager dans le sud, loin du temps gris de Strasbourg. Dans un décor très haut en couleur, tu pourras déguster des tapas à partager avec ton date (ou pas), des mezzés chauds et froids et bien d’autres plats. Bon voyage !",
  },
];

const StrasbourgPage = () => {
  return (
    <>
      <section>
        <h1>Sortir à Strasbourg</h1>
        <div className="list-par">
          <p>
            Étant une ville jeune et dynamique, Strasbourg offre bon nombre
            d’activités aux étudiants :
          </p>
          <ul>
            <li>
              4 salles de concerts (Zénith, La Laiterie, Le Molodoï, La Maison
              Bleue)
            </li>
            <li>5 cinémas</li>
            <li>
              salles de spectacle et de théâtre (Théâtre National de Strasbourg,
              Palais de la Musique et des Congrès)
            </li>
            <li>
              parcs et espaces verts pour profiter du climat Alsacien (Parc de
              l’Orangerie, Square des Moulins, Jardin Botanique, etc)
            </li>
            <li>
              Une multitude de bars, dont certains partenaires avec le BDE TPS !
            </li>
          </ul>
        </div>
        <p>
          La ville en elle-même a également beaucoup à offrir : ville
          européenne, pôle commercial de tout premier ordre, mais aussi ville
          d’art et d’histoire. Son centre historique a été classé patrimoine
          mondial par l’UNESCO en 1988. Strasbourg est également labellisée
          ville d’art et d’histoire par le ministère de la Culture. Si les
          vestiges de la ville romaine ont quasiment disparu, Strasbourg
          conserve en revanche un patrimoine architectural remarquable qui
          s’étend du Moyen Âge à aujourd’hui.
        </p>
        <p>
          Viens découvrir les multiples facettes d’une métropole où il fait bon
          vivre, résolument tournée vers l’avenir !
        </p>
      </section>
      <section>
        <h2>Où boire</h2>
        <div className="grid-container">
          {bars.map((bar, id) => (
            <Card key={id} className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>{bar.title}</CardTitle>
                <CardDescription>{bar.address}</CardDescription>
              </CardHeader>
              <CardContent>{bar.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <h2>Où manger</h2>
        <div className="grid-container">
          {restaurants.map((restaurant, id) => (
            <Card key={id} className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>{restaurant.title}</CardTitle>
                <CardDescription>{restaurant.address}</CardDescription>
              </CardHeader>
              <CardContent>{restaurant.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default StrasbourgPage;
