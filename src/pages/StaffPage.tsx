import { getImagePath } from '../utils/assets';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

function StaffPage() {
  const t = useT();
  usePageMeta(
    t("Staff", "Equipo"),
    t(
      "Meet the staff of Webb Chapel church of Christ in Farmers Branch, Texas.",
      "Conozca al personal de la iglesia de Cristo de Webb Chapel en Farmers Branch, Texas.",
    ),
  );
  const staff = [
    {
      name: "Crissy Ketchersid",
      title: {
        en: "Financial Secretary",
        es: "Secretaría Financiera",
      },
      image: getImagePath('leadership/placeholder.svg'),
      bio: {
        en: "Crissy handles the financial operations and administrative tasks for our church. She ensures that all financial matters are handled with integrity and transparency.",
        es: "Crissy se encarga de las operaciones financieras y de las tareas administrativas de nuestra iglesia. Se asegura de que todos los asuntos financieros se manejen con integridad y transparencia.",
      },
      responsibilities: [
        { en: "Financial record keeping", es: "Registro de la contabilidad" },
        { en: "Budget management", es: "Administración del presupuesto" },
        { en: "Administrative support", es: "Apoyo administrativo" },
        { en: "Office coordination", es: "Coordinación de la oficina" }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="pt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              {t("Our Staff", "Nuestro Equipo")}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

        {/* Staff Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {staff.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-60 object-cover rounded-lg mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-church-blue font-semibold text-lg mb-4">
                    {t(member.title.en, member.title.es)}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{t("About", "Acerca de")}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t(member.bio.en, member.bio.es)}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{t("Responsibilities", "Responsabilidades")}</h4>
                    <ul className="space-y-1">
                      {member.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-church-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{t(responsibility.en, responsibility.es)}</span>
                        </li>
                      ))}
                    </ul>
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

export default StaffPage;
