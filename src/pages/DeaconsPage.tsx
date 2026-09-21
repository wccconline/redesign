import React from 'react';
import { getImagePath } from '../utils/assets';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const DeaconsPage: React.FC = () => {
  const t = useT();
  usePageMeta(
    t("Deacons", "Diáconos"),
    t(
      "Meet the deacons who serve the Webb Chapel church of Christ congregation in Farmers Branch, Texas.",
      "Conozca a los diáconos que sirven a la congregación de la iglesia de Cristo de Webb Chapel en Farmers Branch, Texas.",
    ),
  );
  const deacons = [
    {
      name: "Dennis Bartley",
      image: getImagePath('leadership/deacons/deaconBartleyDennis.jpg'),
      bio: {
        en: "Dennis and his wife Julie placed membership at Webb Chapel in 1997. Dennis became a Deacon in 2006 and currently handles WebbKids (ages 2 - 5th grade and their families). Dennis and Julie are also co-leaders of a Small Group. They were married in 1996 and have 3 children, twins William and Grant and daughter Claire.",
        es: "Dennis y su esposa Julie se hicieron miembros de Webb Chapel en 1997. Dennis fue nombrado diácono en 2006 y actualmente está a cargo de WebbKids (niños desde los 2 años hasta 5.º grado y sus familias). Dennis y Julie también son colíderes de un Grupo Pequeño. Se casaron en 1996 y tienen 3 hijos: los gemelos William y Grant, y su hija Claire.",
      }
    },
    {
      name: "Roger Daw",
      image: getImagePath('leadership/deacons/deaconDawRoger.jpg'),
      bio: {
        en: "Roger has been a member at Webb Chapel since 1989, serving as a bible class teacher and on the Audio/Visual team, becoming a deacon in 2025. He was a CPA and internal auditor before retiring from The Dallas Morning News in 2024. Roger met his wife, Marcia, at Webb Chapel and they were married in 1997. They have 4 children and 6 grandchildren.",
        es: "Roger es miembro de Webb Chapel desde 1989; ha servido como maestro de clases bíblicas y en el equipo de Audio y Video, y fue nombrado diácono en 2025. Fue contador público certificado (CPA) y auditor interno antes de jubilarse de The Dallas Morning News en 2024. Roger conoció a su esposa, Marcia, en Webb Chapel, y se casaron en 1997. Tienen 4 hijos y 6 nietos.",
      }
    },
    {
      name: "David Day",
      image: getImagePath('leadership/deacons/deaconDayDavid.jpg'),
      bio: {
        en: "David and his wife Lisa were married and placed membership at Webb Chapel in 1996. He became a deacon in 2006 and works with Retreats and Special Projects, and leads the communion servers and men's activities. They co-coordinate the Care Group Ministry and are Small Group Leaders. They are the parents of Alexander and Aubrey.",
        es: "David y su esposa Lisa se casaron y se hicieron miembros de Webb Chapel en 1996. Él fue nombrado diácono en 2006 y trabaja con los Retiros y Proyectos Especiales, y dirige a los servidores de la comunión y las actividades de los hombres. Ellos coordinan juntos el Ministerio de Grupos de Cuidado y son líderes de Grupos Pequeños. Son los padres de Alexander y Aubrey.",
      }
    },
    {
      name: "Luis Estrada",
      image: getImagePath('leadership/deacons/deaconEstradaLuis.jpg'),
      bio: {
        en: "Luis and his wife, Ana Maria (Maria) were married in 2004 and placed membership at Webb Chapel in 2018. Luis became a deacon in 2021 and helps with Spanish membership and community outreach. Luis and Maria are active in Small Groups and bible studies with the Spanish-speaking members. They have two children, Mario and Alina who are growing and learning in the Children's Ministry.",
        es: "Luis y su esposa, Ana María (María), se casaron en 2004 y se hicieron miembros de Webb Chapel en 2018. Luis fue nombrado diácono en 2021 y colabora con la membresía de habla hispana y con el alcance a la comunidad. Luis y María participan activamente en los Grupos Pequeños y en estudios bíblicos con los miembros de habla hispana. Tienen dos hijos, Mario y Alina, que crecen y aprenden en el Ministerio de Niños.",
      }
    },
    {
      name: "Chris Faulkner",
      hidden: true, // no photo/bio yet; remove this line to show
      image: getImagePath('leadership/placeholder.svg'),
      bio: {
        en: "Bio coming soon.",
        es: "Biografía próximamente.",
      }
    },
    {
      name: "John Gattis",
      image: getImagePath('leadership/deacons/deaconJohnGattis.jpg'),
      bio: {
        en: "John and his wife Crystal were married in 1995, placed membership membership at Webb Chapel in 1994, and John became a deacon in 2011, helping with ESL. Crystal helps with children's Bible classes. They are the parents of their son, Zachary Weisbard.",
        es: "John y su esposa Crystal se casaron en 1995, se hicieron miembros de Webb Chapel en 1994, y John fue nombrado diácono en 2011, colaborando con las clases de inglés como segundo idioma (ESL). Crystal ayuda con las clases bíblicas de los niños. Son los padres de su hijo, Zachary Weisbard.",
      }
    },
    {
      name: "Rob Keith",
      hidden: true, // no photo/bio yet; remove this line to show
      image: getImagePath('leadership/placeholder.svg'),
      bio: {
        en: "Bio coming soon.",
        es: "Biografía próximamente.",
      }
    },
    {
      name: "Bondey Mays",
      image: getImagePath('leadership/deacons/deaconMaysBondey.jpg'),
      bio: {
        en: "Bondey and his wife Jan were married in 1969 and placed membership with Webb Chapel in 2001. Bondey became a deacon in 2011 and helps with the Spanish ministry and PT Cruzer. They have two children, daughter Kelly and husband DJ Overman and son Jordan. They have 4 grandchildren.",
        es: "Bondey y su esposa Jan se casaron en 1969 y se hicieron miembros de Webb Chapel en 2001. Bondey fue nombrado diácono en 2011 y colabora con el ministerio hispano y con PT Cruzer. Tienen dos hijos: su hija Kelly y su esposo DJ Overman, y su hijo Jordan. Tienen 4 nietos.",
      }
    },
    {
      name: "Ryan Nienstadt",
      hidden: true, // no photo/bio yet; remove this line to show
      image: getImagePath('leadership/placeholder.svg'),
      bio: {
        en: "Bio coming soon.",
        es: "Biografía próximamente.",
      }
    },
    {
      name: "Marty Reach",
      image: getImagePath('leadership/deacons/deaconReachMarty.jpg'),
      bio: {
        en: "Marty and his wife Rebecca were married in 2001 and came to Webb Chapel in 2009. He is responsible for the website and administration of Realm. Additionally he volunteers in the audio/video booth with streaming and song projection. They have 2 children, Elizabeth and Nathan.",
        es: "Marty y su esposa Rebecca se casaron en 2001 y llegaron a Webb Chapel en 2009. Él es responsable del sitio web y de la administración de Realm. Además, es voluntario en la cabina de audio y video con la transmisión en vivo y la proyección de canciones. Tienen 2 hijos, Elizabeth y Nathan.",
      }
    },
    {
      name: "Mike Swayne",
      image: getImagePath('leadership/deacons/deaconSwayneMike.jpg'),
      bio: {
        en: "Mike and Judi were married in 1967, and placed membership at Webb Chapel in 1973. Mike became a deacon in 1988 and helps with Audio. Judi helps with children's Bible classes. They have a son named Eric and his wife Larissa of Dallas, and three grandchildren.",
        es: "Mike y Judi se casaron en 1967 y se hicieron miembros de Webb Chapel en 1973. Mike fue nombrado diácono en 1988 y colabora con el Audio. Judi ayuda con las clases bíblicas de los niños. Tienen un hijo llamado Eric y su esposa Larissa, de Dallas, y tres nietos.",
      }
    }
  ];

  return (
    <div className="w-full">
      {/* Title */}
      <div className="pt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              {t("Our Deacons", "Nuestros Diáconos")}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

        {/* Deacons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {deacons.filter((deacon) => !deacon.hidden).map((deacon, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-6">
                  <img 
                    src={deacon.image} 
                    alt={deacon.name}
                    className="w-48 h-60 object-cover rounded-lg mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {deacon.name}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t(deacon.bio.en, deacon.bio.es)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeaconsPage;
