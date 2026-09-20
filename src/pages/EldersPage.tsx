import React from 'react';
import { getImagePath } from '../utils/assets';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const EldersPage: React.FC = () => {
  const t = useT();
  usePageMeta(
    t("Shepherds", "Ancianos"),
    t(
      "Meet the shepherds (elders) who oversee the Webb Chapel church of Christ in Farmers Branch, Texas.",
      "Conozca a los ancianos (pastores) que supervisan la iglesia de Cristo de Webb Chapel en Farmers Branch, Texas.",
    ),
  );
  const elders = [
    {
      name: "Greg Chandler",
      image: getImagePath('leadership/elderChandlerGreg.jpg'),
      bio: {
        en: "Greg and his wife Donelle have attended Webb Chapel since 1997. In that time, they have led a Care Group and a Small Group bible study for a number of years. Greg has also served as deacon over missions and adult education, and is part of the A/V team. Donelle was a teacher and coordinator for primary education. Greg has been a database programmer and systems designer for Solomon Associates since 1994. Their children, Garrett and Jara, grew up at Webb Chapel and are currently attending Texas A&M University.",
        es: "Greg y su esposa Donelle asisten a Webb Chapel desde 1997. En ese tiempo han dirigido un Grupo de Cuidado y un estudio bíblico de Grupo Pequeño durante varios años. Greg también ha servido como diácono a cargo de las misiones y de la educación de adultos, y forma parte del equipo de audio y video. Donelle fue maestra y coordinadora de educación primaria. Greg ha sido programador de bases de datos y diseñador de sistemas en Solomon Associates desde 1994. Sus hijos, Garrett y Jara, crecieron en Webb Chapel y actualmente estudian en la Universidad Texas A&M.",
      }
    },
    {
      name: "Greg Hargis",
      image: getImagePath('leadership/elderGregHargis.jpg'),
      bio: {
        en: "Greg and his wife Heidi came to Webb Chapel in June 1991. Greg has served as song leader for many years and was deacon over worship at Webb Chapel for several years. He has been active in teaching adult classes, leading singing, and helping at children's activities. Greg and Heidi were Care Group Leaders for several years. They also are Small Group Leaders. Greg learned to fly while serving in the US Navy and currently is a Captain for American Airlines. Greg and Heidi are the parents of two sons, Ryan and Glen.",
        es: "Greg y su esposa Heidi llegaron a Webb Chapel en junio de 1991. Greg ha servido como director de cantos durante muchos años y fue diácono a cargo de la adoración en Webb Chapel durante varios años. Ha participado activamente en la enseñanza de clases para adultos, en dirigir los cantos y en ayudar en las actividades de los niños. Greg y Heidi fueron líderes de Grupos de Cuidado durante varios años. También son líderes de Grupos Pequeños. Greg aprendió a volar mientras servía en la Marina de los Estados Unidos y actualmente es Capitán de American Airlines. Greg y Heidi son los padres de dos hijos, Ryan y Glen.",
      }
    },
    {
      name: "Brian Herrington",
      image: getImagePath('leadership/elderHerringtonBrian.jpg'),
      bio: {
        en: "Brian & his wife Deborah came to Webb Chapel in 2003 and have been active in the youth and education programs. Brian served as a deacon before he became a Shepherd in 2008. He has been a Software Engineer Project Manager for Rockwell Collins for more than 35 years. Brian & Deborah are the parents of Rebecca & husband Chris Faulkner and twin sons Jason and wife Stephanie of Cedar Park, Texas, and Jeremy and wife Angela of Lewisville, Texas. They have four grandchildren.",
        es: "Brian y su esposa Deborah llegaron a Webb Chapel en 2003 y han participado activamente en los programas de jóvenes y de educación. Brian sirvió como diácono antes de ser anciano en 2008. Ha sido Gerente de Proyectos de Ingeniería de Software en Rockwell Collins por más de 35 años. Brian y Deborah son los padres de Rebecca y su esposo Chris Faulkner, y de los hijos gemelos Jason y su esposa Stephanie, de Cedar Park, Texas, y Jeremy y su esposa Angela, de Lewisville, Texas. Tienen cuatro nietos.",
      }
    },
    {
      name: "Steve Mankin",
      image: getImagePath('leadership/elderMankinSteve.jpg'),
      bio: {
        en: "Steve came to Webb Chapel in 1976 with his family. He and his wife, Barbara, have been active in the teaching program, children's ministry, and other areas. Steve served as a Deacon before he was selected to be an Elder in 2000. He has worked for Oncor for 40 years and is a Distribution Services Advisor. Steve & Barbara are the parents of a daughter, Kami & husband Kelly Terashita, and a son, Grant & wife Vanessa. The Mankins have six grandchildren.",
        es: "Steve llegó a Webb Chapel en 1976 con su familia. Él y su esposa, Barbara, han participado activamente en el programa de enseñanza, el ministerio de niños y otras áreas. Steve sirvió como diácono antes de ser seleccionado anciano en el año 2000. Ha trabajado en Oncor durante 40 años y es Asesor de Servicios de Distribución. Steve y Barbara son los padres de una hija, Kami y su esposo Kelly Terashita, y de un hijo, Grant y su esposa Vanessa. Los Mankin tienen seis nietos.",
      }
    },
    {
      name: "Bob Nienstadt",
      image: getImagePath('leadership/elderBobNienstadt.jpg'),
      bio: {
        en: "Bob and his wife Linda came to Webb Chapel in 1998. Bob has been involved in teaching adult classes at Webb Chapel as well as occasionally leading singing and preaching, and Bob and Linda have served as Care Group Leaders. Bob served in the US Air Force for three years. He is a graduate of the Preston Road School of Preaching and preached in a Texas congregation for eight years. Bob is currently serving on the Board of Regents of Nations University. He and Linda are the parents of Trudy Zarnowiec, Ryan Nienstadt, and Leslie Wertz. They have four grandchildren, and one great grandson.",
        es: "Bob y su esposa Linda llegaron a Webb Chapel en 1998. Bob ha participado en la enseñanza de clases para adultos en Webb Chapel y, ocasionalmente, en dirigir los cantos y en la predicación; Bob y Linda han servido como líderes de Grupos de Cuidado. Bob sirvió en la Fuerza Aérea de los Estados Unidos durante tres años. Es egresado de la Escuela de Predicación de Preston Road (Preston Road School of Preaching) y predicó en una congregación de Texas durante ocho años. Actualmente Bob forma parte de la Junta de Regentes de Nations University. Él y Linda son los padres de Trudy Zarnowiec, Ryan Nienstadt y Leslie Wertz. Tienen cuatro nietos y un bisnieto.",
      }
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="pt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              {t("Our Shepherds", "Nuestros Ancianos")}
            </h1>
          
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        

        {/* Elders Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {elders.map((elder, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-6">
                  <img 
                    src={elder.image} 
                    alt={elder.name}
                    className="w-48 h-60 object-cover rounded-lg mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {elder.name}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t(elder.bio.en, elder.bio.es)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EldersPage;
