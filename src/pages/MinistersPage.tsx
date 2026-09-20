import { getImagePath } from '../utils/assets';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

function MinistersPage() {
  const t = useT();
  usePageMeta(
    t("Ministers", "Ministros"),
    t(
      "Meet the ministers of Webb Chapel church of Christ, including our pulpit minister and youth minister.",
      "Conozca a los ministros de la iglesia de Cristo de Webb Chapel, incluyendo a nuestro ministro del púlpito y a nuestro ministro de jóvenes.",
    ),
  );
  const ministers = [
    {
      name: "Galon Jones",
      title: {
        en: "Pulpit Minister",
        es: "Ministro del Púlpito",
      },
      image: getImagePath('leadership/ministers/pulpitMinisterGalonJones.jpg'),
      bio: {
        en: "Galon Jones grew up in the north Dallas area. He has been married to Sharon for over forty years and has three children and five grandchildren. He has a BS in Theology from Harding University. He has master's degrees in Theology, Marriage and Family Therapy, Conflict Resolution, Mediation, Negotiation and Divorce Mediation from Abilene Christian University. He served over 10 years church planting in Florianopolis, Brasil.",
        es: "Galon Jones creció en el área del norte de Dallas. Está casado con Sharon desde hace más de cuarenta años y tiene tres hijos y cinco nietos. Tiene una Licenciatura en Teología de Harding University. Tiene maestrías en Teología, Terapia Matrimonial y Familiar, Resolución de Conflictos, Mediación, Negociación y Mediación en Divorcios de Abilene Christian University. Sirvió más de 10 años en la plantación de iglesias en Florianópolis, Brasil.",
      },
      education: {
        en: "BS in Theology from Harding University. Master's degrees in Theology, Marriage and Family Therapy, Conflict Resolution, Mediation, Negotiation and Divorce Mediation from Abilene Christian University.",
        es: "Licenciatura en Teología de Harding University. Maestrías en Teología, Terapia Matrimonial y Familiar, Resolución de Conflictos, Mediación, Negociación y Mediación en Divorcios de Abilene Christian University.",
      },
      experience: {
        en: "Before coming to Webb Chapel, he served on staff for twenty years, in various ministry positions at the Greenville Oaks Church in Allen, TX. He currently serves as director of James Group Ministries.",
        es: "Antes de venir a Webb Chapel, sirvió en el equipo de la iglesia durante veinte años, en diversos puestos ministeriales en la Iglesia Greenville Oaks en Allen, TX. Actualmente es director de James Group Ministries.",
      }
    },
    {
      name: "Harmon Hale",
      title: {
        en: "Youth Minister",
        es: "Ministro de Jóvenes",
      },
      image: getImagePath('leadership/ministers/youthministerHaleHarmon.jpg'),
      bio: {
        en: "Harmon Hale grew up in Lewisville, Texas where he met his wife Charisma. The two were married on July 12, 2021.",
        es: "Harmon Hale creció en Lewisville, Texas, donde conoció a su esposa Charisma. Se casaron el 12 de julio de 2021.",
      },
      education: {
        en: "Bachelor of Science degree in Bible with emphasis in Youth and Family Ministry and Apologetics from Freed-Hardeman University, graduating in 2020.",
        es: "Licenciatura en Ciencias en Biblia con énfasis en Ministerio de Jóvenes y Familia y en Apologética, de Freed-Hardeman University, graduándose en 2020.",
      },
      experience: {
        en: "Joined Webb Chapel in August of 2022 as Youth Minister.",
        es: "Se unió a Webb Chapel en agosto de 2022 como Ministro de Jóvenes.",
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
              {t("Our Ministers", "Nuestros Ministros")}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

        {/* Ministers Grid */}
        <div className="space-y-12 mb-12">
          {ministers.map((minister, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 p-6">
                  <img 
                    src={minister.image} 
                    alt={minister.name}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {minister.name}
                  </h3>
                  <p className="text-church-blue font-semibold text-xl mb-6">
                    {t(minister.title.en, minister.title.es)}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{t("About", "Acerca de")}</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {t(minister.bio.en, minister.bio.es)}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{t("Education", "Educación")}</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {t(minister.education.en, minister.education.es)}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{t("Experience", "Experiencia")}</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {t(minister.experience.en, minister.experience.es)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinistersPage;
