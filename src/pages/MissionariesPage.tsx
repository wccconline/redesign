import React from 'react';
import { ExternalLink } from 'lucide-react';
import { getAssetPath, getImagePath } from '../utils/assets';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

type Localized = { en: string; es: string };

interface Missionary {
  name: Localized;
  description: Localized;
  image: string;
  report?: string;
  update?: Localized;
}

const MissionariesPage: React.FC = () => {
  const t = useT();
  usePageMeta(
    t("Missionaries", "Misioneros"),
    t(
      "Meet the missionaries supported by Webb Chapel church of Christ and read their reports.",
      "Conozca a los misioneros apoyados por la iglesia de Cristo de Webb Chapel y lea sus informes.",
    ),
  );
  const missionaries: Missionary[] = [
    {
      name: { en: "Herman and Rosanne Alexander", es: "Herman y Rosanne Alexander" },
      description: {
        en: "They were missionaries in Adelaide, Australia for 9 years, leaving an established Church when they moved back to the United States. Herman taught at the Preston Road School of Preaching later becoming the Preston Road School of Higher Education, from 1981 to 1995. Herman then taught at the South Pacific Bible College in New Zealand from 2006 to 2013. In 2013 he began working with Nations University serving as Vice Chancellor and Professor. He teaches, via skype, two days a week at the Cambodian Bible School and one day a week at Adelaide Church of Christ, via skype. Herman has also been preaching every Sunday at different churches. He and Rosanne currently reside in Irving, Texas. We began our financial support for them in 2015.",
        es: "Fueron misioneros en Adelaida, Australia durante 9 años, dejando una iglesia establecida cuando regresaron a los Estados Unidos. Herman enseñó en la Preston Road School of Preaching, que más tarde se convirtió en la Preston Road School of Higher Education, de 1981 a 1995. Luego Herman enseñó en el South Pacific Bible College en Nueva Zelanda de 2006 a 2013. En 2013 comenzó a trabajar con Nations University, sirviendo como Vicecanciller y Profesor. Enseña, por Skype, dos días a la semana en la Cambodian Bible School y un día a la semana en la Iglesia de Cristo de Adelaida, también por Skype. Herman también ha estado predicando cada domingo en diferentes iglesias. Él y Rosanne residen actualmente en Irving, Texas. Comenzamos nuestro apoyo económico para ellos en 2015.",
      },
      image: getImagePath('missionaries-alexander.png')
    },
    {
      name: { en: "Barry Baggott", es: "Barry Baggott" },
      description: {
        en: "Barry Baggott grew up at the Webb Chapel Church of Christ, decided to be a missionary, and went away for training. He specialized in teaching the French speaking world and has worked diligently around the globe. He has worked extensively in West African countries such as Morocco, Republic of Congo, Ivory Coast, Burundi, Chad, and many others. He has also taught the French speaking people of the South Pacific and Polynesia. Barry continues to work with the French-speaking peoples of East Africa, Polynesia, and the Pacific Islands. He actively develops and produces new materials in French and visits those locals to encourage, train, and teach people in person. Barry currently lives in Nashville, Tennessee. We started supporting his work many many years ago.",
        es: "Barry Baggott creció en la iglesia de Cristo de Webb Chapel, decidió ser misionero y se fue a recibir capacitación. Se especializó en enseñar al mundo francófono y ha trabajado con diligencia alrededor del mundo. Ha trabajado extensamente en países de África Occidental como Marruecos, la República del Congo, Costa de Marfil, Burundi, Chad y muchos otros. También ha enseñado a los francófonos del Pacífico Sur y de la Polinesia. Barry continúa trabajando con los pueblos francófonos de África Oriental, la Polinesia y las Islas del Pacífico. Desarrolla y produce activamente nuevos materiales en francés y visita a esas personas en sus lugares para animarlas, capacitarlas y enseñarles en persona. Barry vive actualmente en Nashville, Tennessee. Comenzamos a apoyar su labor hace muchísimos años.",
      },
      image: getImagePath('missionaries-baggott.png')
    },
    {
      name: { en: "Thaddeus and Elaine Bruno", es: "Thaddeus y Elaine Bruno" },
      description: {
        en: "They are from the Caribbean island of Dominica where they became Christians and began their love for missions. They moved to St. Thomas, Virgin Islands in 1991 to begin the St. Thomas Church of Christ. Through their work and God's blessings that congregation grew to become self-supporting and they left that work. Thaddeus then traveled throughout the Caribbean preaching at churches to help encourage and strengthen them. In 2015 the West End Church of Christ in Bermuda invited Thaddeus and Elaine to move there and be their located preacher. The congregation continues to grow, even during Covid. It is actively involved in teaching Bible classes, preaching the gospel, and worshiping together. We started our financial support of them in 1991.",
        es: "Son de la isla caribeña de Dominica, donde se hicieron cristianos y comenzaron su amor por las misiones. Se mudaron a St. Thomas, Islas Vírgenes, en 1991 para iniciar la iglesia de Cristo de St. Thomas. Mediante su trabajo y las bendiciones de Dios, esa congregación creció hasta sostenerse por sí misma y ellos dejaron esa obra. Thaddeus viajó luego por todo el Caribe predicando en iglesias para animarlas y fortalecerlas. En 2015, la iglesia de Cristo de West End, en Bermuda, invitó a Thaddeus y Elaine a mudarse allí para ser su predicador residente. La congregación sigue creciendo, incluso durante el Covid. Participa activamente en la enseñanza de clases bíblicas, la predicación del evangelio y la adoración en conjunto. Comenzamos nuestro apoyo económico para ellos en 1991.",
      },
      image: getImagePath('missionaries-bruno.png'),
      report: getAssetPath('pdf/missionaryreport-bruno-0522.pdf')
    },
    {
      name: { en: "Gerardo and Carola Garcia", es: "Gerardo y Carola Garcia" },
      description: {
        en: "The Garcia's diligently work with the Church of Christ in Mexico City. They are actively involved in leading bible classes, small groups, evangelism classes, and special classes to help newcomers. In the last year, several people heard the gospel and respond with Baptism.",
        es: "Los Garcia trabajan con diligencia con la iglesia de Cristo en la Ciudad de México. Participan activamente en dirigir clases bíblicas, grupos pequeños, clases de evangelismo y clases especiales para ayudar a los recién llegados. En el último año, varias personas escucharon el evangelio y respondieron con el bautismo.",
      },
      image: getImagePath('missionaries-garcia.png'),
      report: getAssetPath('pdf/missionaryreport-garcia-0322.pdf')
    },
    {
      name: { en: "Calvin and Kayler Semple", es: "Calvin y Kayler Semple" },
      description: {
        en: "Calvin received his formal bible, teacher, and preacher training at the Jamaican School of Preaching. Upon graduation he was invited to move to Guyana to work with the small and struggling Blairmont Church of Christ. About a year after moving to Guyana Calvin married Kayler and they worked together for Lord. They are currently doing evangelism in local area villages where they have been able to teach over a hundred people at a time. They provide Vacation Bible schools for many area children and have converted several young men as a result. Calvin shares radio time with another local preacher on a radio program called The Narrow Way. They recently completed construction on a new church building, and are actively engaged in evangelism among the people of Guyana. We started their financial support upon Calvin's graduation and move to Guyana in 2015.",
        es: "Calvin recibió su formación formal en Biblia, enseñanza y predicación en la Jamaican School of Preaching. Al graduarse fue invitado a mudarse a Guyana para trabajar con la pequeña y en dificultades iglesia de Cristo de Blairmont. Aproximadamente un año después de mudarse a Guyana, Calvin se casó con Kayler y trabajaron juntos para el Señor. Actualmente realizan evangelismo en aldeas de la zona, donde han podido enseñar a más de cien personas a la vez. Ofrecen Escuelas Bíblicas de Vacaciones para muchos niños de la zona y, como resultado, han convertido a varios jóvenes. Calvin comparte tiempo de radio con otro predicador local en un programa llamado «El Camino Angosto» (The Narrow Way). Recientemente terminaron la construcción de un nuevo edificio para la iglesia y participan activamente en el evangelismo entre el pueblo de Guyana. Comenzamos su apoyo económico cuando Calvin se graduó y se mudó a Guyana en 2015.",
      },
      image: getImagePath('missionaries-semple.png'),
      report: getAssetPath('pdf/missionaryreport-semple-0822.pdf')
    },
    {
      name: { en: "Yura and Julia Taran", es: "Yura y Julia Taran" },
      description: {
        en: "Yura, his wife Julia, and younger son Nazer, now live at the refugee center outside the city of Warsaw Poland. Their older son Andrea had to stay in Ukraine and enlist in the military. Yura works among the many refugees who come to Warsaw seeking shelter. He preaches and teaches the love of Christ every day and leads them in worship each Sunday. Each day he also serves as a chauffeur for many people with needs. He drives them into Warsaw to buy food, clothes, medicines, doctors appointments, and to obtain travel papers for Europe. He is a dedicated worker in the Lord's kingdom and never stops serving people.",
        es: "Yura, su esposa Julia y su hijo menor Nazer viven ahora en el centro de refugiados a las afueras de la ciudad de Varsovia, Polonia. Su hijo mayor, Andrea, tuvo que quedarse en Ucrania y alistarse en el ejército. Yura trabaja entre los muchos refugiados que llegan a Varsovia en busca de refugio. Predica y enseña el amor de Cristo todos los días y los dirige en la adoración cada domingo. Cada día también hace de chofer para muchas personas necesitadas: los lleva a Varsovia para comprar alimentos, ropa y medicinas, para citas médicas y para obtener documentos de viaje para Europa. Es un obrero dedicado en el reino del Señor y nunca deja de servir a las personas.",
      },
      image: getImagePath('missionaries-taran.png'),
      report: getAssetPath('pdf/missionaryreport-taran-0922.pdf')
    },
    {
      name: { en: "David and Paula Tarbet", es: "David y Paula Tarbet" },
      description: {
        en: "David and Paula Tarbet are native Texans who have devoted over 30 years of ministry to Churches of Christ in the Northeastern United States, especially in Connecticut. David Served as pulpit minister for the Danbury, Connecticut church for 23 years, before returning to \"roots\" in New Mexico and Texas. From 1995 to 2010, He served as pulpit minister of the White Rock Church of Christ in Dallas, Texas for 15 years before returning to Connecticut in 2011. He serves as Outreach Minister for the New Milford, Connecticut Church of Christ. The New Milford congregation is a congregation of about 50 people. The congregation is doctrinally sound, evangelistically focused and active in planting new congregations in the Northeastern United States. Eight congregations have been established in Connecticut, New York, New Jersey and Massachusetts. David is editor of \"Christ for Today\" — a direct mail publication distributed throughout the Northeast U.S. Published once a quarter, this magazine is responsible for baptisms in various cities each year. His video series, \"How the Bible Came To Us\" has been used by Churches of Christ throughout the United States. Their work for Christ is sponsored by the Webb Chapel Church of Christ. David is also volunteer Director of The White Rock Fund — a non-profit organization dedicated to assisting Churches of Christ support 75 missionaries around the world, including 10 locations in the Northeastern United States. Their collection of rare 1500's and 1600's English Bibles was donated to Freed-Hardeman University where it is on permanent display in the university library. David and Paula have 4 adult children and 10 grandchildren.",
        es: "David y Paula Tarbet son nativos de Texas que han dedicado más de 30 años de ministerio a las iglesias de Cristo en el noreste de los Estados Unidos, especialmente en Connecticut. David sirvió como ministro del púlpito de la iglesia de Danbury, Connecticut, durante 23 años, antes de regresar a sus «raíces» en Nuevo México y Texas. De 1995 a 2010 sirvió como ministro del púlpito de la iglesia de Cristo de White Rock en Dallas, Texas, durante 15 años, antes de regresar a Connecticut en 2011. Sirve como Ministro de Alcance de la iglesia de Cristo de New Milford, Connecticut. La congregación de New Milford es una congregación de unas 50 personas. La congregación es doctrinalmente sana, está enfocada en el evangelismo y participa activamente en el establecimiento de nuevas congregaciones en el noreste de los Estados Unidos. Se han establecido ocho congregaciones en Connecticut, Nueva York, Nueva Jersey y Massachusetts. David es editor de «Christ for Today», una publicación de correo directo distribuida por todo el noreste de los EE. UU. Publicada una vez por trimestre, esta revista es responsable de bautismos en varias ciudades cada año. Su serie de videos «How the Bible Came To Us» ha sido utilizada por iglesias de Cristo en todo Estados Unidos. Su obra para Cristo es patrocinada por la iglesia de Cristo de Webb Chapel. David también es Director voluntario de The White Rock Fund, una organización sin fines de lucro dedicada a ayudar a las iglesias de Cristo a sostener a 75 misioneros en todo el mundo, incluyendo 10 lugares en el noreste de los Estados Unidos. Su colección de Biblias inglesas raras de los siglos XVI y XVII fue donada a Freed-Hardeman University, donde está en exhibición permanente en la biblioteca de la universidad. David y Paula tienen 4 hijos adultos y 10 nietos.",
      },
      image: getImagePath('missionaries-tarbet.png')
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {t("MISSIONARIES", "MISIONEROS")}
        </h1>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {missionaries.map((missionary, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <a 
                    href={missionary.image} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src={missionary.image} 
                      alt={t(missionary.name.en, missionary.name.es)}
                      className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    />
                  </a>
                </div>
                
                <div className="md:w-1/2 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {t(missionary.name.en, missionary.name.es)}
                  </h3>
                  
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4">{t(missionary.description.en, missionary.description.es)}</p>
                    
                    {missionary.update && (
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                        <p className="text-blue-800 font-semibold mb-2">{t('UPDATE:', 'ACTUALIZACIÓN:')}</p>
                        <p className="text-blue-700">{t(missionary.update.en, missionary.update.es)}</p>
                      </div>
                    )}
                    
                    {missionary.report && (
                      <div className="mt-4">
                        <a 
                          href={missionary.report}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-church-blue hover:text-blue-800 font-semibold transition-colors"
                        >
                          {t('Missionary Report', 'Informe del Misionero (en inglés)')}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {index < missionaries.length - 1 && (
                <hr className="border-gray-200 my-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionariesPage;
