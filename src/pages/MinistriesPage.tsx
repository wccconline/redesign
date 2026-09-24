import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getImagePath } from '../utils/assets';
import { Link } from '../components/LocaleLink';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

type Localized = { en: string; es: string };

interface AccordionItem {
  title: Localized;
  content: Localized;
  image?: string;
  link?: string;
}

const MinistriesPage: React.FC = () => {
  const t = useT();
  usePageMeta(
    t("Ministries", "Ministerios"),
    t(
      "Learn about the ministries of Webb Chapel church of Christ, including Studies in the Bible, ESL classes, Ladies Ministry and Children's Ministry.",
      "Conozca los ministerios de la iglesia de Cristo de Webb Chapel, incluyendo Estudios Bíblicos, clases de inglés como segundo idioma, el Ministerio de Damas y el Ministerio de Niños.",
    ),
  );
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const ministries: AccordionItem[] = [
    {
      title: { en: "STUDIES IN THE BIBLE MINISTRY", es: "MINISTERIO DE ESTUDIOS BÍBLICOS" },
      content: {
        en: "STUDIES IN THE BIBLE is a 30-lesson series where we send 3 lessons that can be completed in your own timeframe. There is absolutely no cost as we include self-addressed stamped envelopes to return the completed lessons. We will check your knowledge of what you have studied and return the graded lessons with 3 new lessons. You will not be contacted in any way other than sending you the next set of lessons.",
        es: "ESTUDIOS BÍBLICOS (SITB) es una serie de 30 lecciones en la que enviamos 3 lecciones que pueden completarse a su propio ritmo. No tiene absolutamente ningún costo, ya que incluimos sobres con su dirección y franqueo pagado para devolver las lecciones completadas. Revisaremos su conocimiento de lo que ha estudiado y le devolveremos las lecciones calificadas junto con 3 lecciones nuevas. No nos comunicaremos con usted de ninguna otra manera que no sea enviándole el siguiente conjunto de lecciones.",
      },
      image: getImagePath('sitb-logo.png'),
      link: "/sitb"
    },
    {
      title: { en: "JAMES GROUP MINISTRY", es: "MINISTERIO JAMES GROUP" },
      content: {
        en: "The JAMES GROUP helps people discover who they are intended to be. We help them realize what God intended for them and help them find it, restoring them to a peaceful existence.",
        es: "El JAMES GROUP ayuda a las personas a descubrir quiénes están destinadas a ser. Les ayudamos a comprender lo que Dios tenía en mente para ellas y a encontrarlo, restaurándolas a una existencia de paz.",
      },
      image: getImagePath('jamesgroup-logo.png')
    },
    {
      title: { en: "ENGLISH AS A SECOND LANGUAGE MINISTRY", es: "MINISTERIO DE INGLÉS COMO SEGUNDO IDIOMA" },
      content: {
        en: "ENGLISH AS A SECOND LANGUAGE shares Jesus in the community by teaching English and U.S. Citizenship to speakers of other languages who desire to improve their English skills. The class meets on Wednesday evenings at 6:30 PM.",
        es: "INGLÉS COMO SEGUNDO IDIOMA (ESL) comparte a Jesús en la comunidad enseñando inglés y ciudadanía de los EE. UU. a personas de otros idiomas que desean mejorar su inglés. La clase se reúne los miércoles por la noche a las 6:30 p.m.",
      },
      image: getImagePath('esl-logo.png')
    },
    {
      title: { en: "LADIES MINISTRY", es: "MINISTERIO DE DAMAS" },
      content: {
        en: "Our LADIES MINISTRY is a very active group at Webb Chapel. Ladies Bible Study meets each Tuesday from 10 AM to 11:30 AM during the school year. The lessons will be taught by several different ladies. The ministry also holds several gatherings throughout the year. All ladies are encouraged and welcomed to participate.",
        es: "Nuestro MINISTERIO DE DAMAS es un grupo muy activo en Webb Chapel. El Estudio Bíblico de Damas se reúne todos los martes de 10:00 a.m. a 11:30 a.m. durante el año escolar. Las lecciones son impartidas por diferentes hermanas. El ministerio también realiza varias reuniones durante el año. Se anima y se da la bienvenida a todas las damas a participar.",
      },
      image: getImagePath('ladiesministry-logo.jpg')
    },
    {
      title: { en: "BROTHERS KEEPERS", es: "GUARDIANES DE NUESTROS HERMANOS (BROTHERS KEEPERS)" },
      content: {
        en: "THE BROTHERS KEEPERS ministry at Webb Chapel is dedicated to meeting the needs of the Webb Chapel members through the strengthening of our relationships with one another and by providing help in times of need. Everyone at Webb Chapel is part of a Care Group.",
        es: "El ministerio GUARDIANES DE NUESTROS HERMANOS (Brothers Keepers) de Webb Chapel se dedica a atender las necesidades de los miembros de Webb Chapel mediante el fortalecimiento de nuestras relaciones unos con otros y brindando ayuda en tiempos de necesidad. Cada miembro de Webb Chapel forma parte de un Grupo de Cuidado.",
      }
    },
    {
      title: { en: "FOOD ASSISTANCE", es: "AYUDA ALIMENTARIA" },
      content: {
        en: "The FOOD ASSISTANCE program provides support for those in need, in the form of basic groceries and minor household items. We serve both those in the church and the community. If you or someone you know needs assistance, please let us know by calling the church office at (972) 241-3293 during business hours.",
        es: "El programa de AYUDA ALIMENTARIA brinda apoyo a quienes lo necesitan, en forma de alimentos básicos y artículos menores para el hogar. Servimos tanto a los miembros de la iglesia como a la comunidad. Si usted o alguien que conoce necesita ayuda, por favor avísenos llamando a la oficina de la iglesia al (972) 241-3293 en horario de oficina.",
      }
    },
    {
      title: { en: "THE MISSIONS COMMITTEE MINISTRY", es: "MINISTERIO DEL COMITÉ DE MISIONES" },
      content: {
        en: "THE MISSIONS COMMITTEE consists of members of the Webb Chapel congregation. Its purpose is to ensure that the funding provided by the church for local and international evangelism is allocated in a manner which best spreads the gospel throughout the world. We currently provide monetary support to missionaries in the Ukraine, Mexico, Guyana, Bermuda, Cambodia, and the French speaking countries of Africa and the South Pacific. In addition to missionaries, we also provide funds to organizations such as Nations University, Eastern European Missions and Main Street church of Christ in Dallas, Texas, each dedicated to spreading the gospel.",
        es: "El COMITÉ DE MISIONES está formado por miembros de la congregación de Webb Chapel. Su propósito es asegurar que los fondos que aporta la iglesia para la evangelización local e internacional se asignen de la manera que mejor difunda el evangelio por todo el mundo. Actualmente brindamos apoyo económico a misioneros en Ucrania, México, Guyana, Bermudas, Camboya y los países francófonos de África y del Pacífico Sur. Además de los misioneros, también aportamos fondos a organizaciones como Nations University, Eastern European Missions y la iglesia de Cristo de Main Street en Dallas, Texas, todas dedicadas a difundir el evangelio.",
      },
      image: getImagePath('thumb-themissioncommittee.jpg')
    },
    {
      title: { en: "CHILDREN'S MINISTRY", es: "MINISTERIO DE NIÑOS" },
      content: {
        en: "OUR CHILDREN'S MINISTRY at Webb Chapel is focused on growing the next generation of disciples. Each Sunday, we offer an age appropriate worship for our children followed by Bible classes for children 2 years old through 5th grade. We also host several events throughout the year, including fun summer activities such as game night, pool parties, service activities and holiday specific events like our Fall Festival and Christmas play.",
        es: "Nuestro MINISTERIO DE NIÑOS en Webb Chapel se enfoca en formar a la próxima generación de discípulos. Cada domingo ofrecemos una adoración apropiada para la edad de nuestros niños, seguida de clases bíblicas para niños desde los 2 años hasta 5.º grado. También organizamos varios eventos durante el año, incluyendo divertidas actividades de verano como noche de juegos, fiestas en la piscina, actividades de servicio y eventos de temporada como nuestro Festival de Otoño y la obra de Navidad.",
      },
      image: getImagePath('thumb-childrensministry.png')
    }
  ];

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {t("MINISTRIES AT WEBB CHAPEL", "MINISTERIOS EN WEBB CHAPEL")}
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {ministries.map((ministry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  aria-expanded={expandedItems.includes(index)}
                  aria-controls={`ministry-panel-${index}`}
                  className="w-full px-6 py-4 text-left bg-church-blue text-white hover:bg-blue-800 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold">{t(ministry.title.en, ministry.title.es)}</h3>
                  {expandedItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                
                {/* Always in the page (so search engines can read it); hidden until expanded. */}
                <div
                  id={`ministry-panel-${index}`}
                  hidden={!expandedItems.includes(index)}
                  className="p-6 bg-gray-50"
                >
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-4">{t(ministry.content.en, ministry.content.es)}</p>

                    {ministry.link && (
                      <div className="mb-4">
                        <Link
                          to={ministry.link}
                          className="inline-block bg-church-blue text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors font-semibold"
                        >
                          {t('Click here to enroll', 'Haga clic aquí para inscribirse')}
                        </Link>
                      </div>
                    )}

                    {ministry.image && (
                      <div className="mt-4">
                        <img
                          src={ministry.image}
                          alt={t(ministry.title.en, ministry.title.es)}
                          loading="lazy"
                          className="max-w-xs h-auto rounded shadow-sm"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistriesPage;
